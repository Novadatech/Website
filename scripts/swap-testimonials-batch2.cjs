// Roll the new 3 testimonial swaps (Josh -> Jeff, Uche -> Nicola, Malkin ->
// Michael) across every page that still references the original photos.
// Jessica untouched. Quotes + metrics preserved verbatim per the user's
// instruction - only photo + name + company change.

const path = require("node:path");
const fs = require("node:fs");

const ROOT = path.resolve(__dirname, "..");

// All pages found via grep that reference at least one of the old photos.
const PAGES = [
  "src/app/page.tsx",
  "src/app/apply/page.tsx",
  "src/app/book-call/page.tsx",
  "src/app/get-meetings/page.tsx",
  "src/app/growth-infrastructure/page.tsx",
  "src/app/sales-closer/page.tsx",
  "src/app/sales-closer2/page.tsx",
];

// Pairs are applied in order. Names + roles are swapped together with the
// photo so the trio always stays in sync. The two role variants for Josh
// cover both "Director, Maxicare Plus" (most pages) and any places I'd
// edited it elsewhere.
const SWAPS = [
  // Josh / Maxicare Plus -> Jeff / Vertical Access
  ['"/testimonials/josh-maxicare.jpg"', '"/testimonials/jeff-verticalaccess.jpg"'],
  ['name: "Josh"', 'name: "Jeff"'],
  ['role: "Director, Maxicare Plus"', 'role: "Founder, Vertical Access"'],
  // /book-call pull-quote (different JSX shape than the data arrays)
  ['alt="Josh"', 'alt="Jeff"'],
  ['>Josh<', '>Jeff<'],
  ['>Director, Maxicare Plus<', '>Founder, Vertical Access<'],

  // Uche / Morning Star -> Nicola / Morasco Media
  ['"/testimonials/uche-morningstar.jpg"', '"/testimonials/nicola-morasco.jpg"'],
  ['name: "Uche"', 'name: "Nicola"'],
  ['role: "Founder, The Morning Star Community Services"', 'role: "Founder, Morasco Media"'],

  // Malkin / Support24 -> Michael / Aaron's Investigation
  ['"/testimonials/malkin-support24.jpg"', '"/testimonials/michael-aarons.jpg"'],
  ['name: "Malkin"', 'name: "Michael"'],
  ['role: "Founder, Support24"', "role: \"Founder, Aaron's Investigation\""],
];

for (const file of PAGES) {
  const full = path.resolve(ROOT, file);
  if (!fs.existsSync(full)) {
    console.error(`Missing: ${file}`);
    continue;
  }
  let src = fs.readFileSync(full, "utf8");
  let n = 0;
  for (const [from, to] of SWAPS) {
    const count = src.split(from).length - 1;
    if (count > 0) {
      src = src.split(from).join(to);
      n += count;
    }
  }
  fs.writeFileSync(full, src, "utf8");
  console.log(`${file.padEnd(45)} ${n} swaps`);
}
