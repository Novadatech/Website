// Test: swap ember -> azure on /linkedin-growth only (brand-strategy variant).
// Easy revert: change AZURE -> EMBER below and re-run, then drop the azure
// palette / variant infrastructure if approved.

const path = require("node:path");
const fs = require("node:fs");

const TARGET = path.resolve(
  __dirname,
  "..",
  "src",
  "app",
  "linkedin-growth",
  "page.tsx",
);

// Map FROM -> TO so it's trivial to flip for a revert.
const FROM = "ember";
const TO = "azure";
const FROM_RGBA = "rgba(255,90,48,"; // ember
const TO_RGBA = "rgba(14,165,233,"; // azure-500 = #0EA5E9 (Tailwind sky-500)

let src = fs.readFileSync(TARGET, "utf8");

const SHADES = [400, 500, 600, 700];
const PREFIXES = [
  "text-",
  "bg-",
  "border-",
  "from-",
  "to-",
  "via-",
  "decoration-",
  "ring-",
  "shadow-",
];

let totalSwaps = 0;
for (const shade of SHADES) {
  for (const prefix of PREFIXES) {
    const fromStr = `${prefix}${FROM}-${shade}`;
    const toStr = `${prefix}${TO}-${shade}`;
    const matches = src.split(fromStr).length - 1;
    if (matches > 0) {
      src = src.split(fromStr).join(toStr);
      totalSwaps += matches;
    }
  }
}

// rgba sweep
{
  const matches = src.split(FROM_RGBA).length - 1;
  if (matches > 0) {
    src = src.split(FROM_RGBA).join(TO_RGBA);
    totalSwaps += matches;
  }
}

// HeroTrustBar accent prop: dark-red is the legacy alias we'd previously
// passed for ember. Switch to explicit "azure".
{
  const before = `accent="dark-red"`;
  const after = `accent="azure"`;
  const matches = src.split(before).length - 1;
  if (matches > 0) {
    src = src.split(before).join(after);
    totalSwaps += matches;
  }
}

fs.writeFileSync(TARGET, src, "utf8");
console.log(`Swept ${FROM} -> ${TO}: ${totalSwaps} swaps`);
