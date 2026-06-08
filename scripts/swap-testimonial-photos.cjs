// Swap pravatar placeholder URLs to the 4 real customer photos
// (Josh / Uche / Malkin / Jessica) across the Phase 3 landing pages.
//
// /apply and /growth-infrastructure already use the matching 4 names,
// so they only need avatar URL swaps.
//
// /get-meetings, /sales-closer, /sales-closer2 use Anthony/Nate where the
// other pages use Uche/Malkin. Rename them so the photo + name + role
// all line up, matching what we already did on the home page.

const path = require("node:path");
const fs = require("node:fs");

const ROOT = path.resolve(__dirname, "..");

// Pravatar id -> local testimonial photo path
const AVATAR_SWAPS = [
  ["https://i.pravatar.cc/150?img=12", "/testimonials/josh-maxicare.jpg"],
  ["https://i.pravatar.cc/150?img=33", "/testimonials/uche-morningstar.jpg"],
  ["https://i.pravatar.cc/150?img=53", "/testimonials/malkin-support24.jpg"],
  ["https://i.pravatar.cc/150?img=47", "/testimonials/jessica-teds.jpg"],
];

// Pages where the names already match real photos: avatar URL swap only.
const DIRECT_SWAP_FILES = [
  "src/app/apply/page.tsx",
  "src/app/growth-infrastructure/page.tsx",
];

// Pages where img=33 is "Anthony / Ripple Clarke" and img=53 is "Nate /
// Larsky Tach and Feed". Renamed to Uche / Malkin to match the real photo
// owners (same swap done on home page).
const NAME_SWAP_FILES = [
  "src/app/get-meetings/page.tsx",
  "src/app/sales-closer/page.tsx",
  "src/app/sales-closer2/page.tsx",
];

function swapInFile(file, pairs) {
  const full = path.resolve(ROOT, file);
  if (!fs.existsSync(full)) {
    console.error(`Missing: ${file}`);
    return 0;
  }
  let src = fs.readFileSync(full, "utf8");
  let n = 0;
  for (const [from, to] of pairs) {
    // Escape regex special chars in 'from'
    const re = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
    const matches = src.match(re);
    if (matches) {
      n += matches.length;
      src = src.replace(re, to);
    }
  }
  fs.writeFileSync(full, src, "utf8");
  return n;
}

const report = [];

for (const file of DIRECT_SWAP_FILES) {
  const n = swapInFile(file, AVATAR_SWAPS);
  report.push({ file, swaps: n });
}

const NAME_ROLE_SWAPS = [
  // Anthony / Ripple Clarke -> Uche / Morning Star  (matches img=33)
  ['name: "Anthony"', 'name: "Uche"'],
  ['role: "Founder, Ripple Clarke"', 'role: "Founder, The Morning Star Community Services"'],
  // Nate / Larsky Tach and Feed -> Malkin / Support24  (matches img=53)
  ['name: "Nate"', 'name: "Malkin"'],
  ['role: "Owner, Larsky Tach and Feed"', 'role: "Founder, Support24"'],
];

for (const file of NAME_SWAP_FILES) {
  // Names+roles first, then avatar URLs.
  const n =
    swapInFile(file, NAME_ROLE_SWAPS) + swapInFile(file, AVATAR_SWAPS);
  report.push({ file, swaps: n });
}

console.log("Testimonial photo + name swap complete:");
for (const row of report) {
  console.log(`  ${row.file.padEnd(45)} ${row.swaps} edits`);
}
