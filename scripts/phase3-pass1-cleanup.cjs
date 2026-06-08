// Cleanup: drop orphan TRUST_ITEMS arrays and ExternalLink imports left
// behind after the form section was removed in Pass 1.

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

// Match: const TRUST_ITEMS = [ ... ];\n\n
const TRUST_ITEMS_RE = /\nconst TRUST_ITEMS = \[[\s\S]*?\n\];\s*\n/;

// Match ExternalLink in the lucide-react import; preserve the rest of the import
const removeExternalLink = (src) => {
  // Try common forms: ', ExternalLink' or 'ExternalLink, ' or 'ExternalLink\n'
  return src
    .replace(/,\s*ExternalLink/g, "")
    .replace(/ExternalLink\s*,\s*/g, "")
    .replace(/\bExternalLink\s*\n/g, "\n");
};

for (const file of PAGES) {
  const full = path.resolve(ROOT, file);
  if (!fs.existsSync(full)) continue;
  let src = fs.readFileSync(full, "utf8");
  let changes = [];

  if (TRUST_ITEMS_RE.test(src)) {
    src = src.replace(TRUST_ITEMS_RE, "\n");
    changes.push("TRUST_ITEMS removed");
  }

  // Only remove ExternalLink if it appears exactly once (just in import line)
  const elCount = (src.match(/\bExternalLink\b/g) || []).length;
  if (elCount === 1) {
    src = removeExternalLink(src);
    changes.push("ExternalLink import removed");
  }

  fs.writeFileSync(full, src, "utf8");
  console.log(`${file.padEnd(48)} ${changes.join(", ") || "(no changes)"}`);
}
