// Phase 3 polish Pass 2 — replace 'What You Walk Away With' / 'What You Get'
// flat-bullet sections with the featured-card + 6-tile grid design that's on
// /linkedin-growth.
//
// Per-page content is tailored to each offer. All share the same JSX scaffold.

const path = require("node:path");
const fs = require("node:fs");

const ROOT = path.resolve(__dirname, "..");

// --- Per-page content ---------------------------------------------------------
const CONTENT = {
  "src/app/apply/page.tsx": {
    sectionCommentMarker: "What You'll Walk Away With + CTA",
    sectionEndMarker: "Why This Isn't Another Agency",
    oldConstName: "BENEFITS",
    oldConstRe: /\nconst BENEFITS = \[[\s\S]*?\n\];\n/,
    iconsToAdd: ["Target"],
    eyebrow: "What You Walk Away With",
    headline: "Your Custom Growth Blueprint",
    subhead:
      "A full strategy for scaling client acquisition — tailored to your business, yours to keep, no obligation either way.",
    featured: {
      eyebrowLabel: "The Promise",
      metric: "Free",
      metricLabel: "growth plan — yours to keep",
      title: "A complete acquisition blueprint built around your business.",
      desc: "Implement it yourself or have us do it for you. Either way — the plan is yours. No retainers, no pressure, zero obligation after the call.",
    },
    tiles: [
      { icon: "Target", title: "Exact System", desc: "The complete acquisition system we'd deploy to book 20+ qualified sales calls every month for your business." },
      { icon: "TrendingUp", title: "Revenue Projection", desc: "A clear projection showing what 20+ qualified calls monthly means for your pipeline and bottom-line revenue." },
      { icon: "Shield", title: "Custom Plan", desc: "Channels, targeting and messaging tailored to your specific market and ideal client profile — not a template." },
      { icon: "Users", title: "Honest Fit Check", desc: "We'll tell you straight if we're not the right fit — and you still walk away with a plan you can execute yourself." },
      { icon: "CheckCircle", title: "Predictable Pipeline", desc: "How to stop relying on referrals and build a pipeline that fills your calendar with qualified calls every month." },
      { icon: "Clock", title: "30 Minutes, No Pressure", desc: "Free 30-minute call with our senior growth strategist. No scripted pitch — real strategy work for your business." },
    ],
    ctaText: "Book My Free Strategy Call",
  },

  "src/app/get-meetings/page.tsx": {
    sectionCommentMarker: "What You Get + CTA",
    sectionEndMarker: "Is This Right for You?",
    oldConstName: "BENEFITS",
    oldConstRe: /\nconst BENEFITS = \[[\s\S]*?\n\];\n/,
    iconsToAdd: ["CalendarCheck", "Send"],
    eyebrow: "What You Get",
    headline: "Inside The Sales Meeting System",
    subhead:
      "30–60 qualified meetings booked into your calendar every month. Performance guaranteed. Pay only when delivered.",
    featured: {
      eyebrowLabel: "The Guarantee",
      metric: "30–60",
      metricLabel: "qualified meetings every month",
      title: "Decision-maker meetings, pre-qualified, on your calendar.",
      desc: "Pay only when qualified meetings are delivered. Written into your agreement. If we don't perform — you don't pay.",
    },
    tiles: [
      { icon: "CalendarCheck", title: "Decision-Maker Meetings", desc: "Every meeting is with a decision-maker who fits your ideal client profile and has the budget for your offer." },
      { icon: "Shield", title: "Performance Guarantee", desc: "30–60 qualified meetings every month — or you owe us nothing. Written into the agreement, not a marketing line." },
      { icon: "TrendingUp", title: "Predictable Pipeline", desc: "Forecastable monthly meeting flow. No more feast-and-famine cycles. Plan capacity, plan hiring, plan growth." },
      { icon: "Send", title: "Done-For-You Outreach", desc: "Targeted outreach, sequence writing, reply handling — fully handled. You just show up to the qualified calls." },
      { icon: "Users", title: "Pre-Qualified Only", desc: "Tyre-kickers filtered out before they reach your calendar. Only meetings with the budget and intent to buy." },
      { icon: "CheckCircle", title: "Pay On Delivery", desc: "You pay only when qualified meetings are delivered. We don't get paid unless we perform — your risk is zero." },
    ],
    ctaText: "See If You Qualify",
  },

  "src/app/sales-closer/page.tsx": {
    sectionCommentMarker: "What You Get + CTA",
    sectionEndMarker: "Is This Right for You?",
    oldConstName: "BENEFITS",
    oldConstRe: /\nconst BENEFITS = \[[\s\S]*?\n\];\n/,
    iconsToAdd: ["Phone", "Target"],
    eyebrow: "What You Get",
    headline: "Inside The Closer Placement",
    subhead:
      "Expert closer placed in your business in 7 days. Trained on your offer. Closing deals while you stay focused on delivery.",
    featured: {
      eyebrowLabel: "The Placement",
      metric: "7 days",
      metricLabel: "to expert closer in your business",
      title: "Expert sales closer trained on your offer.",
      desc: "Taking every qualified call, pre-handling objections, closing deals. You stay focused on delivery. Pay only when deals close.",
    },
    tiles: [
      { icon: "Phone", title: "Off The Phone", desc: "Your closer takes every qualified conversation. You stop being the bottleneck. Time goes back to delivery and growth." },
      { icon: "Shield", title: "Pay On Close", desc: "Performance guaranteed. You only pay when deals are signed. If the closer doesn't perform, you owe us nothing." },
      { icon: "Target", title: "Trained On Your Offer", desc: "Closer ramped on your service, your ICP, your objection patterns. Closing from day one — not week six." },
      { icon: "TrendingUp", title: "Pipeline Conversion", desc: "Discovery-call conversion rates double or triple. Same pipeline, more deals closed, more revenue collected." },
      { icon: "Clock", title: "Placed In 7 Days", desc: "From signed agreement to closer ready in your business in under 7 days. No 90-day ramp. No SDR recruitment cycle." },
      { icon: "CheckCircle", title: "Sales Cycle Owned", desc: "Pre-handles objections, structures the close, follows up — every step of the cycle handled professionally and consistently." },
    ],
    ctaText: "Get Your Closer",
  },

  "src/app/sales-closer2/page.tsx": {
    sectionCommentMarker: "What You Get + CTA",
    sectionEndMarker: "Is This Right for You?",
    oldConstName: "BENEFITS",
    oldConstRe: /\nconst BENEFITS = \[[\s\S]*?\n\];\n/,
    iconsToAdd: ["Phone", "Target"],
    eyebrow: "What You Get",
    headline: "Inside The Closer Placement",
    subhead:
      "Expert closer placed in your business in 7 days. Trained on your offer. Closing deals while you stay focused on delivery.",
    featured: {
      eyebrowLabel: "The Placement",
      metric: "7 days",
      metricLabel: "to expert closer in your business",
      title: "Expert sales closer trained on your offer.",
      desc: "Taking every qualified call, pre-handling objections, closing deals. You stay focused on delivery. Pay only when deals close.",
    },
    tiles: [
      { icon: "Phone", title: "Off The Phone", desc: "Your closer takes every qualified conversation. You stop being the bottleneck. Time goes back to delivery and growth." },
      { icon: "Shield", title: "Pay On Close", desc: "Performance guaranteed. You only pay when deals are signed. If the closer doesn't perform, you owe us nothing." },
      { icon: "Target", title: "Trained On Your Offer", desc: "Closer ramped on your service, your ICP, your objection patterns. Closing from day one — not week six." },
      { icon: "TrendingUp", title: "Pipeline Conversion", desc: "Discovery-call conversion rates double or triple. Same pipeline, more deals closed, more revenue collected." },
      { icon: "Clock", title: "Placed In 7 Days", desc: "From signed agreement to closer ready in your business in under 7 days. No 90-day ramp. No SDR recruitment cycle." },
      { icon: "CheckCircle", title: "Sales Cycle Owned", desc: "Pre-handles objections, structures the close, follows up — every step of the cycle handled professionally and consistently." },
    ],
    ctaText: "Get Your Closer",
  },

  "src/app/growth-infrastructure/page.tsx": {
    sectionCommentMarker: "What You Walk Away With",
    sectionEndMarker: "Why This Isn't Another Agency",
    oldConstName: "OUTCOMES",
    oldConstRe: /\nconst OUTCOMES = \[[\s\S]*?\n\];\n/,
    iconsToAdd: ["Video", "Send", "CalendarCheck"],
    eyebrow: "What You Walk Away With",
    headline: "Inside The Growth Infrastructure Partnership",
    subhead:
      "20+ qualified appointments every month. Authority content + outreach + booking — built into your business, yours to keep.",
    featured: {
      eyebrowLabel: "The Guarantee",
      metric: "20+",
      metricLabel: "qualified appointments every month",
      title: "Predictable pipeline. Written guarantee. Yours to keep.",
      desc: "Authority + outreach + booking infrastructure installed into your business. We run it for you. You own it forever. If we don't deliver — you don't pay.",
    },
    tiles: [
      { icon: "Video", title: "Authority Video Engine", desc: "4–6 short videos per month featuring you. Pre-sells expertise across LinkedIn, YouTube and shorts before outreach lands." },
      { icon: "Send", title: "Done-For-You Outreach", desc: "Daily targeted outreach to ICP-matched prospects. Sequences trained on your voice. Reply handling fully included." },
      { icon: "CalendarCheck", title: "Pre-Qualified Bookings", desc: "Only decision-makers with budget and fit hit your calendar. Pre-sold before the call ever starts." },
      { icon: "TrendingUp", title: "Complete Infrastructure", desc: "CRM, pipeline and automation built and configured. Visibility into every stage. Yours to keep forever." },
      { icon: "Shield", title: "Performance Guarantee", desc: "20+ qualified appointments every month — or you don't pay. Written into your agreement, not a marketing line." },
      { icon: "Users", title: "Built. Run. Owned.", desc: "Built into your business, run for you, owned by you. Not held hostage by an agency. Profile, content, sequences — all yours." },
    ],
    ctaText: "See If You Qualify",
  },
};

// --- Section JSX template ----------------------------------------------------
function buildSection(c) {
  const tilesJs = c.tiles
    .map((t) => `  { icon: ${t.icon}, title: ${JSON.stringify(t.title)}, desc: ${JSON.stringify(t.desc)} }`)
    .join(",\n");

  // We use the WALK_AWAY constant inline so each page is self-contained.
  return `      {/* ── What You Walk Away With (featured + tile grid) ── */}
      <section className="section-padding py-24 md:py-32">
        <div className="max-container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-3">${c.eyebrow}</p>
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">${c.headline}</h2>
            <p className="mt-4 text-base text-white/70 max-w-2xl mx-auto leading-relaxed">${c.subhead}</p>
          </div>

          {/* Featured outcome */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-3xl border border-ember-500/25 bg-gradient-to-br from-ember-500/[0.08] via-ember-500/[0.02] to-transparent p-8 md:p-10 mb-6 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-ember-500/10 blur-3xl pointer-events-none" />
            <div className="relative grid md:grid-cols-5 gap-8 md:gap-10 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-ember-500/15 border border-ember-500/35 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-ember-500" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.18em] text-ember-500/85 font-semibold">${c.featured.eyebrowLabel}</p>
                </div>
                <p className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-none">${c.featured.metric}</p>
                <p className="mt-3 text-lg text-white/80 font-medium leading-snug">${c.featured.metricLabel}</p>
              </div>
              <div className="md:col-span-3 md:border-l md:border-white/[0.10] md:pl-10">
                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-4">${c.featured.title}</h3>
                <p className="text-base text-white/75 leading-relaxed">${c.featured.desc}</p>
              </div>
            </div>
          </motion.div>

          {/* Supporting tiles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
${tilesJs}
            ].map((o, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-ember-500/30 hover:bg-white/[0.035] transition-colors">
                <div className="w-11 h-11 rounded-xl bg-ember-500/10 border border-ember-500/20 flex items-center justify-center mb-4 group-hover:bg-ember-500/15 transition-colors">
                  <o.icon className="w-5 h-5 text-ember-500" />
                </div>
                <h4 className="text-base md:text-lg font-bold text-white mb-2 leading-snug">{o.title}</h4>
                <p className="text-sm text-white/65 leading-relaxed">{o.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button onClick={scrollToForm} className="btn-primary mx-auto">
              ${c.ctaText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
`;
}

// --- Operations per page -----------------------------------------------------
for (const [file, c] of Object.entries(CONTENT)) {
  const full = path.resolve(ROOT, file);
  if (!fs.existsSync(full)) {
    console.error(`Missing: ${file}`);
    continue;
  }
  let src = fs.readFileSync(full, "utf8");
  const changes = [];

  // 1. Add new icons to the lucide-react import block (if not already present)
  for (const ic of c.iconsToAdd) {
    if (!new RegExp(`\\b${ic}\\b`).test(src.split("from \"lucide-react\"")[0] || "")) {
      // Insert before the closing brace of the lucide import block
      src = src.replace(
        /(import \{[\s\S]*?)(\n\} from "lucide-react";)/,
        (_m, head, tail) => head + `, ${ic}` + tail,
      );
      changes.push(`+icon:${ic}`);
    }
  }

  // 2. Remove old BENEFITS / OUTCOMES const
  if (c.oldConstRe.test(src)) {
    src = src.replace(c.oldConstRe, "\n");
    changes.push(`-const ${c.oldConstName}`);
  }

  // 3. Replace the entire section block via comment-marker boundaries
  const startMarkerEsc = c.sectionCommentMarker.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  const endMarkerEsc = c.sectionEndMarker.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  const sectionRe = new RegExp(
    `\\s*\\{/\\* ── ${startMarkerEsc} ── \\*/\\}[\\s\\S]*?(?=\\s*\\{/\\* ── ${endMarkerEsc} ── \\*/\\})`,
  );
  if (sectionRe.test(src)) {
    src = src.replace(sectionRe, "\n\n" + buildSection(c) + "\n");
    changes.push("section rewritten");
  } else {
    changes.push(`SECTION NOT FOUND: ${c.sectionCommentMarker}`);
  }

  fs.writeFileSync(full, src, "utf8");
  console.log(`${file.padEnd(48)} ${changes.join(", ")}`);
}
