// Remove duplicate STATS BAR and HOW IT WORKS sections introduced by re-running
// the pass-3 insert script. Keeps the FIRST occurrence on each page.

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

// Match an entire section from its own comment marker through to (but not
// including) the next comment marker. The /g flag lets us collect all matches.
const STATS_RE = /\s*\{\/\* ── STATS BAR ── \*\/\}[\s\S]*?(?=\s*\{\/\* ── )/g;
const HOW_RE =
  /\s*\{\/\* ── HOW IT WORKS \(horizontal connected timeline\) ── \*\/\}[\s\S]*?(?=\s*\{\/\* ── )/g;

function dedupe(src, re) {
  // Find all matches; keep only the first. Replace later occurrences with "".
  const matches = [...src.matchAll(re)];
  if (matches.length < 2) return { src, removed: 0 };
  let out = "";
  let cursor = 0;
  let removed = 0;
  for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    if (i === 0) continue; // keep the first
    out += src.slice(cursor, m.index);
    cursor = m.index + m[0].length;
    removed++;
  }
  out += src.slice(cursor);
  return { src: out, removed };
}

for (const file of PAGES) {
  const full = path.resolve(ROOT, file);
  let src = fs.readFileSync(full, "utf8");
  const a = dedupe(src, STATS_RE);
  src = a.src;
  const b = dedupe(src, HOW_RE);
  src = b.src;
  fs.writeFileSync(full, src, "utf8");
  console.log(
    `${file.padEnd(48)} stats dupes removed: ${a.removed}, how-it-works dupes removed: ${b.removed}`,
  );
}
