// Bring the section padding on Phase 3 landing pages in line with
// /linkedin-growth's breathing-room defaults.
//
// /linkedin-growth uses:
//   VSL section:            section-padding pt-8 pb-24 md:pb-32
//   Stats / Video tiles:    section-padding pb-24 md:pb-32 (top inherited)
//   Most content sections:  section-padding py-24 md:py-32 (with border-t)
//
// On the 5 landing pages the corresponding patterns were:
//   VSL section:            section-padding pt-6 pb-0     <- no bottom gap
//   Video testimonials:     section-padding py-12         <- too tight
//   Most content sections:  section-padding py-16 border-t border-white/[0.04]

const path = require("node:path");
const fs = require("node:fs");

const ROOT = path.resolve(__dirname, "..");

const PAGES = [
  "src/app/apply/page.tsx",
  "src/app/get-meetings/page.tsx",
  "src/app/sales-closer/page.tsx",
  "src/app/sales-closer2/page.tsx",
  "src/app/growth-infrastructure/page.tsx",
];

const SWAPS = [
  ['section-padding pt-6 pb-0', 'section-padding pt-8 pb-24 md:pb-32'],
  ['section-padding py-12', 'section-padding pb-24 md:pb-32'],
  ['section-padding py-16 border-t border-white/[0.04]', 'section-padding py-24 md:py-32 border-t border-white/[0.04]'],
];

for (const file of PAGES) {
  const full = path.resolve(ROOT, file);
  let src = fs.readFileSync(full, "utf8");
  const changes = [];
  for (const [from, to] of SWAPS) {
    const re = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
    const n = (src.match(re) || []).length;
    if (n > 0) {
      src = src.replace(re, to);
      changes.push(`${n}x "${from.slice(0, 30)}..."`);
    }
  }
  fs.writeFileSync(full, src, "utf8");
  console.log(`${file.padEnd(48)} ${changes.join(", ") || "(no changes)"}`);
}
