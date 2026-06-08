// Two operations:
//   1. Remove the 'Is This Right for You? - condensed to 3 bullets' section
//      from /apply ('This Free Strategy Call Is Built For') and from
//      /sales-closer and /sales-closer2 ('We Only Place Closers for
//      Businesses That Qualify').
//
//   2. Add 'Why This Isn't Another Agency' Differentiation tables to
//      /get-meetings, /sales-closer, /sales-closer2 with content tailored
//      to each page's offer.

const path = require("node:path");
const fs = require("node:fs");

const ROOT = path.resolve(__dirname, "..");

// --- 1. Section removals -----------------------------------------------------
const REMOVE_IS_RIGHT_PAGES = [
  "src/app/apply/page.tsx",
  "src/app/sales-closer/page.tsx",
  "src/app/sales-closer2/page.tsx",
];

const IS_RIGHT_RE =
  /\s*\{\/\* ── Is This Right for You\? — condensed to 3 bullets ── \*\/\}[\s\S]*?(?=\s*\{\/\* ── )/;

// --- 2. Differentiation tables ----------------------------------------------
function buildDifferentiation(c) {
  const rowsJs = c.rows
    .map(
      (r) =>
        `              { label: ${JSON.stringify(r.label)}, a: ${JSON.stringify(r.a)}, b: ${JSON.stringify(r.b)}, novada: ${JSON.stringify(r.novada)} }`,
    )
    .join(",\n");

  return `      {/* ── Why This Isn't Another Agency (Differentiation) ── */}
      <section className="section-padding py-24 md:py-32 border-t border-white/[0.04]">
        <div className="max-container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-3">Why This Isn&apos;t Another Agency</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              The Difference Between <span className="text-ember-500">${c.headlineLeft}</span> and <span className="text-ember-500">${c.headlineRight}</span>
            </h2>
            <p className="mt-4 text-base text-white/70 max-w-2xl mx-auto leading-relaxed">${c.subhead}</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
            <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/[0.06]">
              <div className="p-4 col-span-1" />
              <div className="p-4 text-center"><p className="text-xs md:text-sm font-medium text-white/55">${c.colA}</p></div>
              <div className="p-4 text-center"><p className="text-xs md:text-sm font-medium text-white/55">${c.colB}</p></div>
              <div className="p-4 text-center bg-ember-500/[0.05] border-l border-ember-500/15">
                <p className="text-xs md:text-sm font-semibold text-ember-500">${c.colNovada}</p>
              </div>
            </div>
            {[
${rowsJs}
            ].map((row, i) => (
              <div key={i} className={\`grid grid-cols-4 border-b border-white/[0.04] last:border-0 \${i % 2 === 0 ? "" : "bg-white/[0.01]"}\`}>
                <div className="p-4 flex items-center"><span className="text-xs md:text-sm text-white/60">{row.label}</span></div>
                <div className="p-4 flex items-center justify-center text-center"><span className="text-xs text-white/45">{row.a}</span></div>
                <div className="p-4 flex items-center justify-center text-center"><span className="text-xs text-white/45">{row.b}</span></div>
                <div className="p-4 flex items-center justify-center text-center bg-ember-500/[0.04] border-l border-ember-500/10"><span className="text-xs text-ember-500/90 font-medium">{row.novada}</span></div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button onClick={scrollToForm} className="btn-primary mx-auto">
              ${c.ctaText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

`;
}

const DIFF_CONFIGS = {
  "src/app/get-meetings/page.tsx": {
    insertBefore: "Is This Right for You? — condensed to 3 bullets",
    headlineLeft: "Paying for Activity",
    headlineRight: "Paying for Meetings",
    subhead:
      "Most lead-gen agencies and in-house SDRs charge whether qualified meetings land or not. We don't get paid unless they do.",
    colA: "Lead-Gen Agency",
    colB: "In-House SDR",
    colNovada: "Novada Tech — Meetings",
    ctaText: "See If You Qualify",
    rows: [
      { label: "Payment Model", a: "Monthly retainer", b: "$80K+ salary + comm", novada: "Pay per qualified meeting" },
      { label: "What You Get", a: "Lead lists", b: "Cold calls + follow-up", novada: "30–60 qualified meetings/mo" },
      { label: "Performance Guarantee", a: "None", b: "None", novada: "30–60/mo or you don't pay" },
      { label: "Time to First Meeting", a: "30–60 days", b: "3–6 months ramp", novada: "7–14 days" },
      { label: "Your Time Investment", a: "High (oversight)", b: "Very high (manage rep)", novada: "Under 30 min/week" },
      { label: "Meeting Quality", a: "Variable / unverified", b: "Variable / variable", novada: "Pre-qualified decision-makers" },
      { label: "Reply Handling", a: "You handle it", b: "SDR handles it", novada: "Done for you" },
      { label: "Ad Spend Required", a: "Often required", b: "Sometimes", novada: "$0 ad spend" },
    ],
  },

  "src/app/sales-closer/page.tsx": {
    insertBefore: "Testimonials — 4 strongest with photos",
    headlineLeft: "Hiring a Closer",
    headlineRight: "Placing One",
    subhead:
      "Hiring in-house takes 3–6 months of ramp and all the risk. Sales training is hit-or-miss. We place a pre-vetted closer in 7 days — and you pay only when deals close.",
    colA: "In-House Hire",
    colB: "Sales Trainer",
    colNovada: "Novada Tech — Closer Placement",
    ctaText: "Get Your Closer",
    rows: [
      { label: "Payment Model", a: "$80–120K salary + comm", b: "$5–25K upfront fee", novada: "Pay per closed deal" },
      { label: "Time to Productive", a: "3–6 months ramp", b: "Weeks of practice", novada: "7 days" },
      { label: "Performance Guarantee", a: "None", b: "None", novada: "Pay only when deals close" },
      { label: "Risk Sits With", a: "You", b: "You", novada: "Us" },
      { label: "Vetting", a: "You vet alone", b: "You vet alone", novada: "Pre-vetted closers" },
      { label: "Training", a: "You build curriculum", b: "Generic playbooks", novada: "Trained on your offer" },
      { label: "Replacement", a: "Re-hire (90+ days)", b: "You hire new", novada: "Zero-cost replacement" },
      { label: "Sales Cycle Owned", a: "You manage", b: "You implement", novada: "Closer owns end-to-end" },
    ],
  },

  "src/app/sales-closer2/page.tsx": {
    insertBefore: "Testimonials — 4 strongest with photos",
    headlineLeft: "Hiring a Closer",
    headlineRight: "Placing One",
    subhead:
      "Hiring in-house takes 3–6 months of ramp and all the risk. Sales training is hit-or-miss. We place a pre-vetted closer in 7 days — and you pay only when deals close.",
    colA: "In-House Hire",
    colB: "Sales Trainer",
    colNovada: "Novada Tech — Closer Placement",
    ctaText: "Get Your Closer",
    rows: [
      { label: "Payment Model", a: "$80–120K salary + comm", b: "$5–25K upfront fee", novada: "Pay per closed deal" },
      { label: "Time to Productive", a: "3–6 months ramp", b: "Weeks of practice", novada: "7 days" },
      { label: "Performance Guarantee", a: "None", b: "None", novada: "Pay only when deals close" },
      { label: "Risk Sits With", a: "You", b: "You", novada: "Us" },
      { label: "Vetting", a: "You vet alone", b: "You vet alone", novada: "Pre-vetted closers" },
      { label: "Training", a: "You build curriculum", b: "Generic playbooks", novada: "Trained on your offer" },
      { label: "Replacement", a: "Re-hire (90+ days)", b: "You hire new", novada: "Zero-cost replacement" },
      { label: "Sales Cycle Owned", a: "You manage", b: "You implement", novada: "Closer owns end-to-end" },
    ],
  },
};

// --- Apply ----------------------------------------------------------------
const summary = [];

// 1. Remove 'Is This Right for You?' on 3 pages
for (const file of REMOVE_IS_RIGHT_PAGES) {
  const full = path.resolve(ROOT, file);
  let src = fs.readFileSync(full, "utf8");
  if (IS_RIGHT_RE.test(src)) {
    src = src.replace(IS_RIGHT_RE, "");
    fs.writeFileSync(full, src, "utf8");
    summary.push({ file, action: "removed 'Is This Right for You?'" });
  } else {
    summary.push({ file, action: "Is This Right marker NOT found" });
  }
}

// 2. Add Differentiation tables on 3 pages
for (const [file, c] of Object.entries(DIFF_CONFIGS)) {
  const full = path.resolve(ROOT, file);
  let src = fs.readFileSync(full, "utf8");
  const markerEsc = c.insertBefore.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  const re = new RegExp(`(\\s*)(\\{\\/\\* ── ${markerEsc} ── \\*\\/\\})`);
  if (re.test(src)) {
    const block = buildDifferentiation(c);
    src = src.replace(re, (_m, ws, marker) => `${ws}${block.trimEnd()}\n${ws}${marker}`);
    fs.writeFileSync(full, src, "utf8");
    summary.push({ file, action: "+Differentiation table" });
  } else {
    summary.push({ file, action: `Diff insertion marker NOT found: ${c.insertBefore}` });
  }
}

for (const row of summary) {
  console.log(`${row.file.padEnd(48)} ${row.action}`);
}
