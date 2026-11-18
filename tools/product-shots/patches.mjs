/* Renders the replacement labels for build.py, in the export's own face.
 *
 * The Figma exports predate the 18 Nov 2026 rename and still say
 * "AI employee(s)" and "Coordinator". build.py paints those few labels
 * out and pastes these in, aligned on the ORIGINAL ink's top-left.
 *
 * ⚠️ The face is DM Sans, measured, not guessed: scored pixel-for-pixel
 * against "AI Rostering Coordinator" in the export, DM Sans 400 12px
 * came out at 7.9 mean error, the next best (Plus Jakarta) at 12.5.
 */
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_CORE
  || 'C:/Users/user/AppData/Roaming/npm/node_modules/@playwright/mcp/node_modules/playwright-core');
const OUT = join(dirname(fileURLToPath(import.meta.url)), 'out');

export const PATCHES = [
  { id: 'actor',  text: 'AI Rostering Agent', w: 400, size: 12, color: '#101936' },
  { id: 'filter', text: 'All agents',         w: 500, size: 12, color: '#101936' },
  { id: 'header', text: 'AGENT',              w: 600, size: 12, color: '#5B6680', track: '0.04em' },
];

const html = `<html><head><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet"></head>
<body style="margin:0;background:transparent">${PATCHES.map(p =>
  `<div style="padding:6px;display:inline-block"><span id="${p.id}" style="font-family:'DM Sans';font-weight:${p.w};font-size:${p.size}px;color:${p.color};letter-spacing:${p.track || 'normal'};white-space:nowrap;line-height:1.6">${p.text}</span></div>`).join('')}</body></html>`;

const b = await chromium.launch({ channel: 'chrome' });
const pg = await b.newPage({ deviceScaleFactor: 1 });
await pg.setContent(html, { waitUntil: 'networkidle' });
await pg.evaluate(() => document.fonts.ready);
const ok = await pg.evaluate(() => document.fonts.check("12px 'DM Sans'"));
if (!ok) { console.error('DM Sans did not load'); process.exit(1); }
for (const p of PATCHES) {
  await (await pg.$('#' + p.id)).screenshot({ path: join(OUT, `patch-${p.id}.png`), omitBackground: true });
  console.log('  patch', p.id, JSON.stringify(p.text));
}
await b.close();
