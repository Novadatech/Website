/* Render each dashboard variant to a 2x PNG.
 *
 * ⚠️ NOT the Playwright MCP. That hangs silently for ~30 min per call
 * in this environment. playwright-core is driven directly instead,
 * required by path from that package's own node_modules.
 *
 * Output is 2880x2160 (1440x1080 at deviceScaleFactor 2). hero_build
 * crops 2880x1541 off the top and downsamples into the 1669x893 panel,
 * so the dashboard text lands crisp rather than upscaled.
 */
import { createRequire } from 'node:module';
// NODE_PATH does NOT apply to ESM imports, only to CJS resolution,
// so playwright-core is pulled in through createRequire by path.
const require = createRequire(import.meta.url);
// playwright-core is borrowed from the Playwright MCP package. Set
// PLAYWRIGHT_CORE to override if that package ever moves.
// ⚠️ NOT the MCP itself: it hangs silently for ~30 min per call here.
const { chromium } = require(process.env.PLAYWRIGHT_CORE
  || 'C:/Users/user/AppData/Roaming/npm/node_modules'
     + '/@playwright/mcp/node_modules/playwright-core');
import { readFileSync, mkdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const DIR = dirname(fileURLToPath(import.meta.url));
const OUT = DIR + '/out';
mkdirSync(OUT, { recursive: true });

// read the variant keys straight out of the data file, so this never
// drifts from variants.js
const src = readFileSync(DIR + '/variants.js', 'utf8');
const keys = [...src.matchAll(/^'([a-z-]+)':\s*\{/gm), ...src.matchAll(/^window\.VARIANTS\['([a-z-]+)'\]\s*=/gm)].map(m => m[1]);
// optional filter: node render.mjs wc-  renders only keys starting with it
const only = process.argv[2];
if (!keys.length) { console.error('no variants found'); process.exit(1); }
console.log('variants:', keys.join(', '));

const browser = await chromium.launch({ channel: 'chrome' });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 1080 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();
const errs = [];
page.on('pageerror', e => errs.push(String(e)));
page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });

const base = pathToFileURL(DIR + '/dash.html').href;
let bad = 0;

for (const k of keys) {
  if (only && !k.startsWith(only)) continue;
  errs.length = 0;
  await page.goto(base + '#' + k, { waitUntil: 'networkidle' });
  // the hash alone will not re-run the script on a same-document nav
  await page.reload({ waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  // ⚠️ prove the variant actually rendered. An unknown key paints a
  // one-line error page that is still a perfectly valid screenshot.
  const probe = await page.evaluate(() => ({
    h1: document.querySelector('h1')?.textContent || null,
    // a chart's marks count as its rows: bars, line points, timeline steps
    rows: document.querySelectorAll('.row, .trow, .tev, .chart rect, .chart circle, .prow, .kc, .hm td, .sc').length,
    kpis: document.querySelectorAll('.kpi').length,
    poppins: getComputedStyle(document.querySelector('h1') || document.body).fontFamily,
    // nothing may spill out of the 1440x1080 frame
    overflowX: document.documentElement.scrollWidth,
    overflowY: document.documentElement.scrollHeight,
  }));

  const ok = probe.h1 && probe.kpis === 5 && probe.rows >= 5 &&
             /Poppins/.test(probe.poppins) &&
             probe.overflowX <= 1440 && probe.overflowY <= 1080 && !errs.length;
  if (!ok) { bad++; console.log('  FAIL', k, JSON.stringify(probe), errs); }

  await page.screenshot({ path: `${OUT}/${k}.png` });
  console.log((ok ? '  ok   ' : '  BAD  ') + k.padEnd(14),
              'rows=' + probe.rows, 'kpis=' + probe.kpis,
              '| ' + String(probe.h1).slice(0, 44));
}

await browser.close();
console.log(bad ? `\n${bad} VARIANT(S) FAILED` : '\nall variants rendered clean');
process.exit(bad ? 1 : 0);
