// Phase 3 sweep: navy/gold/blue references -> ember/surface across the 5
// standalone landing pages. Mechanical, repeatable. After this lands,
// per-page review handles structural redesigns and red-XXX semantic decisions.
//
// Usage: node scripts/sweep-to-ember.cjs [<file> [<file> ...]]
//        Defaults to the 5 Phase 3 pages.

const path = require("node:path");
const fs = require("node:fs");

const DEFAULTS = [
  "src/app/apply/page.tsx",
  "src/app/get-meetings/page.tsx",
  "src/app/sales-closer/page.tsx",
  "src/app/sales-closer2/page.tsx",
  "src/app/growth-infrastructure/page.tsx",
];

const ROOT = path.resolve(__dirname, "..");
const targets = (process.argv.slice(2).length ? process.argv.slice(2) : DEFAULTS)
  .map((p) => path.resolve(ROOT, p));

// Order matters: do the navy/gold class swaps first, then opacity variants,
// then rgba. Each replacement is global within the file.
const REPLACEMENTS = [
  // Navy backgrounds
  [/navy-950/g, "surface-950"],
  [/navy-900/g, "zinc-900"],
  [/navy-800/g, "zinc-800"],
  [/navy-700/g, "zinc-700"],
  [/navy-600/g, "zinc-600"],

  // Gold text/bg/border/gradient stops (full shade swaps — these also catch
  // the /opacity variants because the literal substring still matches.)
  [/text-gold-500/g, "text-ember-500"],
  [/text-gold-400/g, "text-ember-500"],
  [/text-gold-300/g, "text-ember-400"],
  [/bg-gold-500/g, "bg-ember-500"],
  [/bg-gold-400/g, "bg-ember-500"],
  [/border-gold-500/g, "border-ember-500"],
  [/border-gold-400/g, "border-ember-500"],
  [/from-gold-500/g, "from-ember-500"],
  [/from-gold-400/g, "from-ember-500"],
  [/to-gold-500/g, "to-ember-500"],
  [/to-gold-400/g, "to-ember-500"],
  [/via-gold-500/g, "via-ember-500"],
  [/via-gold-400/g, "via-ember-500"],
  [/decoration-gold-500/g, "decoration-ember-500"],
  [/decoration-gold-400/g, "decoration-ember-500"],
  [/ring-gold-500/g, "ring-ember-500"],
  [/ring-gold-400/g, "ring-ember-500"],
  [/shadow-gold-500/g, "shadow-ember-500"],

  // Any straggler bare 'gold-XXX/' opacity classes (e.g. used with arbitrary
  // prefixes I didn't anticipate above).
  [/\bgold-500\//g, "ember-500/"],
  [/\bgold-400\//g, "ember-500/"],
  [/\bgold-300\//g, "ember-400/"],

  // Raw rgba — gold variants & blue accent get unified to ember
  [/rgba\(201,162,63,/g, "rgba(255,90,48,"],
  [/rgba\(212,175,55,/g, "rgba(255,90,48,"],
  [/rgba\(21,94,239,/g, "rgba(255,90,48,"],
];

let totalChanges = 0;
const summary = [];

for (const file of targets) {
  if (!fs.existsSync(file)) {
    console.error(`Skipping (missing): ${file}`);
    continue;
  }
  let src = fs.readFileSync(file, "utf8");
  const before = src;
  let fileChanges = 0;
  for (const [re, replacement] of REPLACEMENTS) {
    const matches = src.match(re);
    if (matches) {
      fileChanges += matches.length;
      src = src.replace(re, replacement);
    }
  }
  if (src !== before) {
    fs.writeFileSync(file, src, "utf8");
  }
  totalChanges += fileChanges;
  summary.push({ file: path.relative(ROOT, file), changes: fileChanges });
}

console.log("Sweep complete.");
for (const row of summary) {
  console.log(`  ${row.file.padEnd(45)} ${row.changes} swaps`);
}
console.log(`  ${"".padEnd(45)} ${totalChanges} total`);
