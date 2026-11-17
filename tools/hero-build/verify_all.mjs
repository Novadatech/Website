/* Verify every hero on both sites, against a running server.
 *
 * ⚠️ A `src` attribute proves nothing. The page can reference a file
 * that 404s and the attribute still reads correctly, so this DECODES
 * each image and checks its real pixel size.
 *
 * It also asserts the heroes are DIFFERENT FROM EACH OTHER, which is
 * the whole point of this change: if a wiring mistake pointed two pages
 * at one file, every other check here would still pass.
 */
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
// playwright-core is borrowed from the Playwright MCP package. Set
// PLAYWRIGHT_CORE to override if that package ever moves.
// ⚠️ NOT the MCP itself: it hangs silently for ~30 min per call here.
const { chromium } = require(process.env.PLAYWRIGHT_CORE
  || 'C:/Users/user/AppData/Roaming/npm/node_modules'
     + '/@playwright/mcp/node_modules/playwright-core');

const BASE = process.argv[2] || 'http://localhost:3310';
const EXPECT = JSON.parse(process.argv[3]);         // route -> filename
const RETIRED = ['hero.png', 'hero-practices.png'];

const browser = await chromium.launch({ channel: 'chrome' });
let fails = 0, seen = new Map();

for (const [route, file] of Object.entries(EXPECT)) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const bad = [], retired = [];
  page.on('response', r => {
    if (r.status() >= 400) bad.push(r.status() + ' ' + r.url());
    const u = r.url();
    if (RETIRED.some(x => u.endsWith('/ai-workforce/' + x))) retired.push(u);
  });

  const url = BASE + route;
  await page.goto(url, { waitUntil: 'networkidle' });

  const hero = await page.evaluate(async () => {
    const img = document.querySelector('img[src*="/ai-workforce/hero"]');
    if (!img) return null;
    try { await img.decode(); } catch (e) { return { decodeError: String(e) }; }
    return {
      src: img.getAttribute('src'),
      nw: img.naturalWidth, nh: img.naturalHeight,
      rendered: Math.round(img.getBoundingClientRect().width),
      alt: (img.getAttribute('alt') || '').slice(0, 48),
    };
  });

  // mobile: the CTA must still be reachable above the fold
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(250);
  const mob = await page.evaluate(() => {
    const cta = document.querySelector('main a[href^="#"], main a[href*="book"], main a');
    return {
      ctaBottom: cta ? Math.round(cta.getBoundingClientRect().bottom) : null,
      sideScroll: document.documentElement.scrollWidth > window.innerWidth + 1,
    };
  });

  const errs = [];
  if (!hero) errs.push('NO HERO IMG');
  else {
    if (hero.decodeError) errs.push('DECODE FAILED: ' + hero.decodeError);
    if (hero.src !== '/ai-workforce/' + file) errs.push(`src=${hero.src} want ${file}`);
    if (hero.nw !== 1876 || hero.nh !== 1308) errs.push(`natural ${hero.nw}x${hero.nh} want 1876x1308`);
    if (hero.rendered && hero.nw / hero.rendered < 2) errs.push(`density ${(hero.nw / hero.rendered).toFixed(2)}x < 2x`);
    if (seen.has(file) && seen.get(file) !== route) {
      // same file on two routes is legitimate only for the shared ads LP
      if (!route.endsWith('/lp') && !seen.get(file).endsWith('/lp'))
        errs.push(`DUPLICATE: ${file} also on ${seen.get(file)}`);
    }
    seen.set(file, route);
  }
  if (retired.length) errs.push('REQUESTED RETIRED: ' + retired.join(', '));
  if (bad.length) errs.push('HTTP ' + bad.join(' | '));
  if (mob.sideScroll) errs.push('SIDEWAYS SCROLL at 390px');
  if (mob.ctaBottom != null && mob.ctaBottom > 700) errs.push('CTA bottom ' + mob.ctaBottom + ' > 700');

  if (errs.length) { fails++; console.log(`FAIL ${route}\n      ` + errs.join('\n      ')); }
  else console.log(`ok   ${route.padEnd(26)} ${file.padEnd(22)} ` +
                   `${hero.nw}x${hero.nh} @${hero.rendered}px  cta=${mob.ctaBottom}`);
  await ctx.close();
}

await browser.close();
console.log(fails ? `\n${fails} ROUTE(S) FAILED` : '\nall routes pass');
process.exit(fails ? 1 : 0);
