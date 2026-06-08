// Remove QualificationSection and RiskReversal function defs from home page.
const path = require("node:path");
const fs = require("node:fs");

const TARGET = path.resolve(__dirname, "..", "src", "app", "page.tsx");
const src = fs.readFileSync(TARGET, "utf8");

// Remove QualificationSection: comment marker through the closing brace+blank,
// stop right before the next /* ─── ... ─── */ marker.
const QUAL_RE = /\/\* ─── WHO THIS IS FOR \(icon-header tile design\) ─── \*\/[\s\S]*?(?=\/\* ─── RISK REVERSAL ─── \*\/)/;

// Remove RiskReversal: comment marker through to the next /* ─── ... ─── */ marker.
const RISK_RE = /\/\* ─── RISK REVERSAL ─── \*\/[\s\S]*?(?=\/\* ─── HOW TO START ─── \*\/)/;

let next = src;
let removed = 0;
if (QUAL_RE.test(next)) {
  next = next.replace(QUAL_RE, "");
  removed++;
} else {
  console.error("QualificationSection comment marker not found.");
}
if (RISK_RE.test(next)) {
  next = next.replace(RISK_RE, "");
  removed++;
} else {
  console.error("RiskReversal comment marker not found.");
}

if (removed === 2) {
  fs.writeFileSync(TARGET, next, "utf8");
  console.log(`Removed ${removed} function definitions from page.tsx`);
} else {
  console.error(`Only removed ${removed}/2 - aborting write.`);
  process.exit(1);
}
