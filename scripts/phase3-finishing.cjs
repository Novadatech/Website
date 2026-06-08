// Phase 3 finishing pass per user feedback:
//   1. Remove 'Risk Reversal' sections from /get-meetings, /sales-closer, /sales-closer2
//   2. Remove 'Is This Right for You?' (We're Selective) section from /growth-infrastructure
//   3. Add metric + metricLabel fields to TESTIMONIALS data on all 5 pages
//   4. Replace compact-avatar testimonial cards with the big-photo design
//      (matching /linkedin-growth + home) on all 5 pages
//
// Run: node scripts/phase3-finishing.cjs

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

// Pages with sections to remove. Match from the section comment marker
// through to (but not including) the next comment marker.
const SECTION_REMOVALS = [
  {
    file: "src/app/get-meetings/page.tsx",
    re: /\s*\{\/\* ── Risk Reversal ── \*\/\}[\s\S]*?(?=\s*\{\/\* ── Is This Right for You\?)/,
    label: "Risk Reversal (get-meetings)",
  },
  {
    file: "src/app/sales-closer/page.tsx",
    re: /\s*\{\/\* ── Risk Reversal ── \*\/\}[\s\S]*?(?=\s*\{\/\* ── Is This Right for You\?)/,
    label: "Risk Reversal (sales-closer)",
  },
  {
    file: "src/app/sales-closer2/page.tsx",
    re: /\s*\{\/\* ── Risk Reversal ── \*\/\}[\s\S]*?(?=\s*\{\/\* ── Is This Right for You\?)/,
    label: "Risk Reversal (sales-closer2)",
  },
  {
    file: "src/app/growth-infrastructure/page.tsx",
    re: /\s*\{\/\* ── Is This Right for You\? — condensed to 3 bullets ── \*\/\}[\s\S]*?(?=\s*\{\/\* ── Written Testimonials)/,
    label: "Is This Right for You / We're Selective (growth-infrastructure)",
  },
];

// Add metric + metricLabel fields to each testimonial object based on name.
// The metric content is identical across pages because it's the person, not
// the page-specific quote, that anchors the number.
const METRIC_BY_NAME = {
  Josh: { metric: "$91K/mo", metricLabel: "monthly revenue" },
  Uche: { metric: "4 clients", metricLabel: "in first 45 days" },
  Malkin: { metric: "28% → 60%", metricLabel: "discovery call close rate" },
  Jessica: { metric: "6 months", metricLabel: "of meetings in month one" },
};

function addMetricsToTestimonials(src) {
  // Find each { quote: "...", name: "X", ... } block and insert metric +
  // metricLabel BEFORE 'quote' if not already present.
  let changed = 0;
  const out = src.replace(
    /\{\s*quote:\s*"([^"\\]|\\.)*",\s*name:\s*"([A-Za-z]+)",/g,
    (match, _q, name) => {
      const m = METRIC_BY_NAME[name];
      if (!m) return match;
      // Skip if already injected (look for an existing 'metric:' in front of name).
      if (/metric:\s*"/.test(match)) return match;
      changed++;
      return match.replace(
        /\{\s*quote:/,
        `{\n    metric: "${m.metric}",\n    metricLabel: "${m.metricLabel}",\n    quote:`,
      );
    },
  );
  return { out, changed };
}

// Replace the small-avatar testimonial card with the big-photo card.
// The block ends with `</motion.div>` (or `</motion.div>))}`) closing
// the testimonial card itself; we replace just the .map callback body.
function rewriteTestimonialsBlock(src) {
  // Match the entire <div className="grid ..."> ... {TESTIMONIALS.map(...)} ... </div>
  // wrapper, keep only the structure but swap the inner block + grid classes.
  // The pattern is: a grid div containing a motion.div mapped over TESTIMONIALS.
  //
  // We match from the opening grid div to the closing </div> at the same depth.
  // To avoid greedy matching the wrong </div>, we explicitly look for the
  // `{TESTIMONIALS.map((t, i) => (` ... `))}` block.
  const RE = /(<div className=")grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto(">\s*\{TESTIMONIALS\.map\(\(t, i\) => \(\s*)<motion\.div[\s\S]*?<\/motion\.div>(\s*\)\)\}\s*<\/div>)/;
  if (!RE.test(src)) return { out: src, changed: 0 };
  const NEW_CARD = `<motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1 }}
                className="rounded-3xl border border-white/[0.08] bg-white/[0.02] overflow-hidden flex flex-col h-full"
              >
                <div className="p-7 md:p-8">
                  <div className="flex items-baseline gap-2 mb-4 flex-wrap">
                    <p className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-none">{t.metric}</p>
                    <p className="text-sm text-white/40 font-medium">/ {t.metricLabel}</p>
                  </div>
                  <div className="text-ember-500 text-sm mb-4 tracking-widest">{"\\u2605\\u2605\\u2605\\u2605\\u2605"}</div>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div className="relative aspect-[4/5] bg-white/[0.02] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="px-7 md:px-8 py-5 border-t border-white/[0.06]">
                  <p className="text-base font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-white/55">{t.role}</p>
                </div>
              </motion.article>`;
  const out = src.replace(
    RE,
    (_full, openDiv, afterGrid, closeBlock) =>
      `${openDiv}grid md:grid-cols-2 gap-6 max-w-5xl mx-auto${afterGrid}${NEW_CARD}${closeBlock}`,
  );
  return { out, changed: 1 };
}

const summary = [];

// 1. Section removals
for (const { file, re, label } of SECTION_REMOVALS) {
  const full = path.resolve(ROOT, file);
  if (!fs.existsSync(full)) {
    console.error(`Missing: ${file}`);
    continue;
  }
  let src = fs.readFileSync(full, "utf8");
  if (re.test(src)) {
    src = src.replace(re, "");
    fs.writeFileSync(full, src, "utf8");
    summary.push({ file, action: `removed ${label}` });
  } else {
    summary.push({ file, action: `section NOT FOUND: ${label}` });
  }
}

// 2. + 3. Add metrics + rewrite testimonial cards on every page
for (const file of PAGES) {
  const full = path.resolve(ROOT, file);
  if (!fs.existsSync(full)) continue;
  let src = fs.readFileSync(full, "utf8");

  const metric = addMetricsToTestimonials(src);
  src = metric.out;

  const rewrite = rewriteTestimonialsBlock(src);
  src = rewrite.out;

  fs.writeFileSync(full, src, "utf8");
  summary.push({
    file,
    action: `${metric.changed} metric blocks added, ${rewrite.changed} testimonial grid rewritten`,
  });
}

console.log("Phase 3 finishing complete:");
for (const row of summary) {
  console.log(`  ${row.file.padEnd(48)} ${row.action}`);
}
