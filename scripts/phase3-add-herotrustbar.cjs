// Add HeroTrustBar to /get-meetings, /sales-closer, /sales-closer2 to match
// /linkedin-growth + /apply + /growth-infrastructure. These 3 pages currently
// have a redundant below-CTA trust strip with Trustpilot + guarantee badges
// but lack the prominent above-CTA HeroTrustBar (Trustpilot lockup + '350+
// businesses scaled' pill). Move the trust signals into HeroTrustBar above
// the CTA and remove the redundant strip beneath.

const path = require("node:path");
const fs = require("node:fs");

const ROOT = path.resolve(__dirname, "..");

const PAGES = [
  "src/app/get-meetings/page.tsx",
  "src/app/sales-closer/page.tsx",
  "src/app/sales-closer2/page.tsx",
];

const IMPORT_LINE = 'import HeroTrustBar from "@/components/HeroTrustBar";\n';

// Match the below-CTA trust strip div (between the closing </button> and the
// closing </motion.div> of the CTA wrapper). This is the strip with Trustpilot
// rating + guarantee badges; redundant once HeroTrustBar is above the CTA.
const TRUST_STRIP_RE =
  /\s*<div className="mt-3 flex items-center justify-center gap-4 text-xs text-white\/35 flex-wrap">[\s\S]*?<\/div>(?=\s*<\/motion\.div>)/;

// Insert HeroTrustBar right before the {/* ABOVE-THE-FOLD CTA */} comment
const CTA_MARKER_RE = /(\n\s*)(\{\/\* ABOVE-THE-FOLD CTA \*\/\})/;

for (const file of PAGES) {
  const full = path.resolve(ROOT, file);
  let src = fs.readFileSync(full, "utf8");
  const changes = [];

  // 1. Add HeroTrustBar import after the NovadaLogo import (kept near other
  // component imports for consistency).
  if (!src.includes("import HeroTrustBar")) {
    src = src.replace(
      /(import NovadaLogo from "@\/components\/NovadaLogo";\n)/,
      (_m, prev) => prev + IMPORT_LINE,
    );
    changes.push("+import HeroTrustBar");
  }

  // 2. Insert <HeroTrustBar /> just before the CTA wrapper
  if (!src.includes("<HeroTrustBar")) {
    if (CTA_MARKER_RE.test(src)) {
      src = src.replace(
        CTA_MARKER_RE,
        (_m, ws, marker) =>
          `${ws}<HeroTrustBar className="mt-7" />\n${ws}${marker}`,
      );
      changes.push("+HeroTrustBar component");
    } else {
      changes.push("CTA marker not found");
    }
  }

  // 3. Remove redundant trust strip below the CTA button
  if (TRUST_STRIP_RE.test(src)) {
    src = src.replace(TRUST_STRIP_RE, "");
    changes.push("-redundant below-CTA trust strip");
  } else {
    changes.push("trust strip not found");
  }

  fs.writeFileSync(full, src, "utf8");
  console.log(`${file.padEnd(48)} ${changes.join(", ")}`);
}
