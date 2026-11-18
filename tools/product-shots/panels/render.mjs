/* Renders every card in variants.js to ../out/panels/<variant>-<panel>.png
 * at 2x (the Figma exports are only 1x, so these come out sharper).
 *
 *   node panels/render.mjs            all variants
 *   node panels/render.mjs care-au    one variant
 *
 * ⚠️ Fails loudly if DM Sans did not load or a card's content overflows
 * its fixed height: a silent fallback face or a clipped last row is
 * exactly the kind of fault that looks fine at thumbnail size.
 */
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { mkdirSync, readFileSync } from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_CORE
  || 'C:/Users/user/AppData/Roaming/npm/node_modules/@playwright/mcp/node_modules/playwright-core');
const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, '..', 'out', 'panels');
mkdirSync(OUT, { recursive: true });

const src = readFileSync(join(HERE, 'variants.js'), 'utf8');
const window = {}; new Function('window', src)(window);
const only = process.argv[2];
const b = await chromium.launch({ channel: 'chrome' });
const pg = await b.newPage({ viewport: { width: 900, height: 1000 }, deviceScaleFactor: 2 });
let fails = 0;
for (const [v, panels] of Object.entries(window.VARIANTS)) {
  if (only && v !== only) continue;
  for (const p of Object.keys(panels)) {
    await pg.goto(pathToFileURL(join(HERE, 'panels.html')).href + `?v=${v}&p=${p}`);
    await pg.waitForFunction(() => document.body.dataset.ready === '1');
    await pg.evaluate(() => document.fonts.ready);
    const chk = await pg.evaluate(() => {
      const c = document.getElementById('card');
      const font = document.fonts.check("12px 'DM Sans'");
      const kids = [...c.querySelectorAll('*')];
      const box = c.getBoundingClientRect();
      // only LEAF text counts: a wrapper's padding running past the edge
      // clips nothing, a line of text past it is a visible fault
      const over = kids.filter(k => k.children.length === 0 && (k.textContent || '').trim())
        .map(k => { const r = k.getBoundingClientRect(); return [k.textContent.trim().slice(0, 34), Math.max(r.bottom - box.bottom, r.right - box.right)]; })
        .filter(([, d]) => d > 0.5).map(([t, d]) => `${t} (+${d.toFixed(0)}px)`);
      return { font, over: [...new Set(over)].slice(0, 3) };
    });
    const bad = !chk.font ? 'DM Sans NOT LOADED' : chk.over.length ? 'OVERFLOW: ' + chk.over.join(' | ') : '';
    if (bad) fails++;
    await (await pg.$('#card')).screenshot({ path: join(OUT, `${v}-${p}.png`) });
    console.log(`  ${bad ? 'FAIL' : 'ok  '} ${v.padEnd(13)} ${p.padEnd(13)} ${bad}`);
  }
}
await b.close();
console.log(fails ? `\n${fails} CARD(S) FAILED` : '\nall cards clean');
process.exit(fails ? 1 : 0);
