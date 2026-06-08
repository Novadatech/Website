// Phase 3 polish Pass 1 — bring 5 landing pages in line with /linkedin-growth's
// stripped-down design language:
//   1. Remove the GHL form section entirely (form header + iframe + trust
//      pills + Josh pull-quote)
//   2. Remove the useEffect that injects form_embed.js (no iframe left to power)
//   3. Redirect scrollToForm() to /book-call (so all 'See If You Qualify' /
//      'Book My Free Strategy Call' buttons still convert via the booking page)
//   4. Swap the header 'X spots remaining' text indicator for an ember
//      'Apply Now' CTA button (same pattern as /linkedin-growth)
//
// Run: node scripts/phase3-pass1.cjs

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

// --- Form section removal -----------------------------------------------------
// All 5 pages mark the form with `{/* ── FORM... ── */}` and the section ends
// before the next `{/* ── ... ── */}` comment.
const FORM_SECTION_RE = /\s*\{\/\* ── FORM[^*]*── \*\/\}[\s\S]*?(?=\s*\{\/\* ── )/;

// --- useEffect form_embed.js loader removal -----------------------------------
// Two minor variations on whitespace; match either single-line or multi-line.
const USEEFFECT_LOADER_RE =
  /\s*useEffect\(\(\) => \{\s*const script = document\.createElement\("script"\);\s*script\.src = "https:\/\/link\.novadatech\.com\/js\/form_embed\.js";[\s\S]*?return \(\) => \{\s*if \(document\.body\.contains\(script\)\) document\.body\.removeChild\(script\);\s*\};\s*\}, \[\]\);\s*/;

// --- scrollToForm redirect ----------------------------------------------------
// Each page has a different in-page form ID; collapse all to /book-call.
const SCROLL_TO_FORM_RE =
  /function scrollToForm\(\) \{\s*document\.getElementById\("[a-z-]+-form-embed"\)\?\.scrollIntoView\(\{ behavior: "smooth", block: "center" \}\);\s*\}/;
const SCROLL_TO_FORM_NEW = `function scrollToForm() {
  // Form was removed from this page; route the CTA to the dedicated booking page.
  window.location.assign("/book-call");
}`;

// --- Header 'X spots remaining' indicator -> Apply Now CTA --------------------
// Variant A (multi-line, three-element block — used on /apply, /get-meetings,
// /growth-infrastructure).
const HEADER_INDICATOR_MULTI_RE =
  /<div className="flex items-center gap-2 text-xs text-white\/40">\s*<div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" \/>\s*<span>[^<]*<\/span>\s*<\/div>/;

// Variant B (collapsed single-line — used on /sales-closer + /sales-closer2).
const HEADER_INDICATOR_SINGLE_RE =
  /<div className="flex items-center gap-2 text-xs text-white\/40"><div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" \/><span>[^<]*<\/span><\/div>/;

const HEADER_CTA = `<button onClick={scrollToForm} className="btn-primary text-sm py-2.5 px-5">
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </button>`;

// -----------------------------------------------------------------------------

const summary = [];

for (const file of PAGES) {
  const full = path.resolve(ROOT, file);
  if (!fs.existsSync(full)) {
    console.error(`Missing: ${file}`);
    continue;
  }
  let src = fs.readFileSync(full, "utf8");
  const changes = [];

  // 1. Form section
  if (FORM_SECTION_RE.test(src)) {
    src = src.replace(FORM_SECTION_RE, "");
    changes.push("form section");
  }

  // 2. form_embed.js loader
  if (USEEFFECT_LOADER_RE.test(src)) {
    src = src.replace(USEEFFECT_LOADER_RE, "\n");
    changes.push("form loader");
  }

  // 3. scrollToForm redirect
  if (SCROLL_TO_FORM_RE.test(src)) {
    src = src.replace(SCROLL_TO_FORM_RE, SCROLL_TO_FORM_NEW);
    changes.push("scrollToForm -> /book-call");
  }

  // 4. Header indicator -> Apply Now CTA
  if (HEADER_INDICATOR_MULTI_RE.test(src)) {
    src = src.replace(HEADER_INDICATOR_MULTI_RE, HEADER_CTA);
    changes.push("header indicator -> Apply Now (multi)");
  } else if (HEADER_INDICATOR_SINGLE_RE.test(src)) {
    // Single-line variant: replace with single-line button for layout fit
    const singleLineCta =
      '<button onClick={scrollToForm} className="btn-primary text-sm py-2.5 px-5">Apply Now<ArrowRight className="w-4 h-4" /></button>';
    src = src.replace(HEADER_INDICATOR_SINGLE_RE, singleLineCta);
    changes.push("header indicator -> Apply Now (single)");
  }

  fs.writeFileSync(full, src, "utf8");
  summary.push({ file, changes });
}

console.log("Pass 1 complete:");
for (const row of summary) {
  console.log(`  ${row.file.padEnd(48)} ${row.changes.join(", ")}`);
}
