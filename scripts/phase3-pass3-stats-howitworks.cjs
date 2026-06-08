// Phase 3 polish Pass 3 — insert the two /linkedin-growth sections the user
// approved on every Phase 3 landing page:
//
//   * Stats bar       (between VSL and Video Testimonials)
//       $45.7M+ Tracked Pipeline / 85.4% Reply Rate / 14 days /
//       $0 Ad Spend Required
//
//   * 'How It Works'  (between 'What You Walk Away With' and the next
//                      content section)
//       Horizontal 3-step timeline with ember-bordered icon rings + dashed
//       connector line. Per-page content + headlines.

const path = require("node:path");
const fs = require("node:fs");

const ROOT = path.resolve(__dirname, "..");

// --- Static stats-bar block (identical across pages) -------------------------
const STATS_BAR = `      {/* ── STATS BAR ── */}
      <section className="section-padding pb-24 md:pb-32">
        <div className="max-container max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 text-center">
            {[
              { num: "$45.7M+", label: "Tracked Pipeline Generated*" },
              { num: "85.4%", label: "Qualified Reply Rate" },
              { num: "14 days", label: "Avg Time To First Meeting" },
              { num: "$0", label: "Ad Spend Required" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <p className="text-3xl md:text-5xl font-bold text-ember-500 tracking-tight leading-none">{s.num}</p>
                <p className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.18em] text-white/45 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-center text-[11px] text-white/30 italic">*Estimated lifetime pipeline across live and historical clients. An estimate, not a guarantee.</p>
        </div>
      </section>

`;

// --- How It Works block (template + per-page content) ------------------------
function buildHowItWorks(c) {
  const stepsJs = c.steps
    .map(
      (s) =>
        `              { icon: ${s.icon}, days: ${JSON.stringify(s.days)}, title: ${JSON.stringify(s.title)}, desc: ${JSON.stringify(s.desc)} }`,
    )
    .join(",\n");
  return `      {/* ── HOW IT WORKS (horizontal connected timeline) ── */}
      <section className="section-padding py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,48,0.06)_0%,_transparent_60%)] pointer-events-none" />
        <div className="relative max-container max-w-5xl">
          <div className="mb-14 md:mb-20 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-4">How It Works</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.05] text-balance">
              ${c.headlineLead} <span className="text-ember-500">${c.headlineHighlight}</span>
            </h2>
          </div>

          <div className="relative">
            {/* Dashed connector line behind icons — desktop only */}
            <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] border-t border-dashed border-ember-500/40" />

            <div className="grid md:grid-cols-3 gap-y-12 md:gap-x-6">
              {[
${stepsJs}
              ].map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="relative text-center px-4">
                  <div className="relative z-10 mx-auto w-20 h-20 rounded-full border-2 border-ember-500/60 bg-surface-950 flex items-center justify-center mb-5">
                    <step.icon className="w-8 h-8 text-ember-500" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45 font-semibold mb-2">
                    Step {i + 1} <span className="text-ember-500/80">· {step.days}</span>
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm md:text-base text-white/65 leading-relaxed max-w-[280px] mx-auto">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-14 md:mt-20 text-center">
            <button onClick={scrollToForm} className="btn-primary mx-auto">
              ${c.ctaText}
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="mt-5 text-xs text-white/40 italic max-w-md mx-auto">${c.footerNote}</p>
          </div>
        </div>
      </section>

`;
}

// --- Per-page configuration --------------------------------------------------
const CONFIGS = {
  "src/app/apply/page.tsx": {
    // Stats bar insertion: before this comment marker (anywhere in the file).
    statsBarBefore: "Video Testimonials",
    // How It Works insertion: before this comment marker.
    howItWorksBefore: "Why This Isn't Another Agency (Differentiation)",
    // Icons we need that may not yet be imported.
    iconsToAdd: ["Phone"],
    howItWorks: {
      headlineLead: "From application to",
      headlineHighlight: "your custom blueprint.",
      ctaText: "Book My Free Strategy Call",
      footerNote: "If we're a fit afterwards, we can build it for you. Either way, the plan is yours to keep.",
      steps: [
        { icon: "Shield", days: "Day 1", title: "Apply for the call.", desc: "Quick fit check — 2-minute form. We screen for fit and book your 30-minute strategy slot." },
        { icon: "Phone", days: "30 mins", title: "Custom blueprint built live.", desc: "We map your offer, market and current acquisition. You leave with a clear plan tailored to your business." },
        { icon: "CheckCircle", days: "Yours to keep", title: "Plan in your hands.", desc: "Implement it yourself, or have us run it. Either way, the strategy is yours — no obligation, no retainer." },
      ],
    },
  },

  "src/app/get-meetings/page.tsx": {
    statsBarBefore: "Video Testimonials",
    howItWorksBefore: "Is This Right for You? — condensed to 3 bullets",
    iconsToAdd: [],
    howItWorks: {
      headlineLead: "From application to",
      headlineHighlight: "30–60 qualified meetings.",
      ctaText: "See If You Qualify",
      footerNote: "Then we keep optimising every month so your calendar stays at 30–60 qualified meetings.",
      steps: [
        { icon: "Shield", days: "Days 1 – 4", title: "System build.", desc: "We build your outbound sequences, ICP filters and reply-handling flows on our internal platform." },
        { icon: "Send", days: "Days 5 – 10", title: "Outreach activates.", desc: "Targeted outreach starts. Replies handled by our team. First qualified conversations appear in your inbox." },
        { icon: "CalendarCheck", days: "Day 11 +", title: "Meetings booked.", desc: "Pre-qualified, decision-maker meetings land on your calendar. Target hit by end of month one." },
      ],
    },
  },

  "src/app/sales-closer/page.tsx": {
    statsBarBefore: "Video Testimonials",
    howItWorksBefore: "Is This Right for You? — condensed to 3 bullets",
    iconsToAdd: [],
    howItWorks: {
      headlineLead: "From application to",
      headlineHighlight: "expert closer placed.",
      ctaText: "Get Your Closer",
      footerNote: "Then your closer keeps closing — month over month, deal over deal.",
      steps: [
        { icon: "Shield", days: "Days 1 – 3", title: "Discovery + onboarding.", desc: "Closer ramped on your offer, ICP and objection patterns. Full discovery of your sales cycle." },
        { icon: "Phone", days: "Days 4 – 7", title: "Closer placed.", desc: "Your closer starts taking every qualified call. You stop being the bottleneck. You go back to delivery." },
        { icon: "TrendingUp", days: "Day 7 +", title: "Deals close.", desc: "Discovery-call conversion doubles. Same pipeline, more closed revenue. You only pay when deals are signed." },
      ],
    },
  },

  "src/app/sales-closer2/page.tsx": {
    statsBarBefore: "Video Testimonials",
    howItWorksBefore: "Is This Right for You? — condensed to 3 bullets",
    iconsToAdd: [],
    howItWorks: {
      headlineLead: "From application to",
      headlineHighlight: "expert closer placed.",
      ctaText: "Get Your Closer",
      footerNote: "Then your closer keeps closing — month over month, deal over deal.",
      steps: [
        { icon: "Shield", days: "Days 1 – 3", title: "Discovery + onboarding.", desc: "Closer ramped on your offer, ICP and objection patterns. Full discovery of your sales cycle." },
        { icon: "Phone", days: "Days 4 – 7", title: "Closer placed.", desc: "Your closer starts taking every qualified call. You stop being the bottleneck. You go back to delivery." },
        { icon: "TrendingUp", days: "Day 7 +", title: "Deals close.", desc: "Discovery-call conversion doubles. Same pipeline, more closed revenue. You only pay when deals are signed." },
      ],
    },
  },

  "src/app/growth-infrastructure/page.tsx": {
    statsBarBefore: "Video Testimonials",
    howItWorksBefore: "Why This Isn't Another Agency (Differentiation)",
    iconsToAdd: [],
    howItWorks: {
      headlineLead: "From application to",
      headlineHighlight: "live infrastructure.",
      ctaText: "See If You Qualify",
      footerNote: "Then we keep optimising every month so your calendar stays at 20+ qualified appointments.",
      steps: [
        { icon: "Shield", days: "Days 1 – 4", title: "Authority + plan.", desc: "Profile rewrite, content calendar, ICP definition. Authority assets ready before week one ends." },
        { icon: "Send", days: "Days 5 – 10", title: "Build + launch.", desc: "Outbound sequences, reply-handling flows and CRM infrastructure built on our platform. Authority content starts publishing." },
        { icon: "CalendarCheck", days: "Days 11 – 14", title: "Meetings booked.", desc: "Outreach scales. Pre-qualified, decision-maker appointments land on your calendar inside the 14-day window." },
      ],
    },
  },
};

// --- Apply changes -----------------------------------------------------------
for (const [file, c] of Object.entries(CONFIGS)) {
  const full = path.resolve(ROOT, file);
  if (!fs.existsSync(full)) {
    console.error(`Missing: ${file}`);
    continue;
  }
  let src = fs.readFileSync(full, "utf8");
  const changes = [];

  // 1. Add new icons to lucide-react import block
  for (const ic of c.iconsToAdd) {
    if (!new RegExp(`\\b${ic}\\b`).test(src.split('from "lucide-react"')[0] || "")) {
      src = src.replace(
        /(import \{[\s\S]*?)(\n\} from "lucide-react";)/,
        (_m, head, tail) => head + `, ${ic}` + tail,
      );
      changes.push(`+icon:${ic}`);
    }
  }

  // 2. Insert stats bar before the Video Testimonials comment marker
  const statsBefore = c.statsBarBefore.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  const statsRe = new RegExp(
    `(\\s*)(\\{\\/\\* ── ${statsBefore}[^*]*── \\*\\/\\})`,
  );
  if (statsRe.test(src)) {
    src = src.replace(statsRe, (_m, ws, marker) => `${ws}${STATS_BAR.trimEnd()}\n${ws}${marker}`);
    changes.push("+stats bar");
  } else {
    changes.push(`STATS BAR MARKER NOT FOUND: ${c.statsBarBefore}`);
  }

  // 3. Insert How It Works before the configured marker
  const howBefore = c.howItWorksBefore.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  const howRe = new RegExp(
    `(\\s*)(\\{\\/\\* ── ${howBefore} ── \\*\\/\\})`,
  );
  if (howRe.test(src)) {
    const block = buildHowItWorks(c.howItWorks);
    src = src.replace(howRe, (_m, ws, marker) => `${ws}${block.trimEnd()}\n${ws}${marker}`);
    changes.push("+how it works");
  } else {
    changes.push(`HOW IT WORKS MARKER NOT FOUND: ${c.howItWorksBefore}`);
  }

  fs.writeFileSync(full, src, "utf8");
  console.log(`${file.padEnd(48)} ${changes.join(", ")}`);
}
