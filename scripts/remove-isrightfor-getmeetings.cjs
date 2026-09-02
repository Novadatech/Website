// Remove the 'Is This Right for You? - We Only Guarantee Meetings for
// Businesses That Qualify' section from /get-meetings. The other 3 pages
// (/apply, /sales-closer, /sales-closer2) had this removed in the previous
// pass; /get-meetings was missed.

const path = require("node:path");
const fs = require("node:fs");

const TARGET = path.resolve(
  __dirname,
  "..",
  "src",
  "app",
  "get-meetings",
  "page.tsx",
);

let src = fs.readFileSync(TARGET, "utf8");

const RE = /\s*\{\/\* ── Is This Right for You\? — condensed to 3 bullets ── \*\/\}[\s\S]*?(?=\s*\{\/\* ── )/;

if (RE.test(src)) {
  src = src.replace(RE, "");
  fs.writeFileSync(TARGET, src, "utf8");
  console.log("Removed 'Is This Right for You?' section from /get-meetings");
} else {
  console.error("Marker not found.");
  process.exit(1);
}
