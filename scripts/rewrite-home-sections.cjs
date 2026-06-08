// One-shot: rewrite the home page WrittenTestimonials and QualificationSection
// to use the new ember-design patterns. The Edit tool stumbles on multi-line
// matches in this large file because of CRLF + escaped unicode in star strings.
//
// Run: node scripts/rewrite-home-sections.cjs

const path = require("node:path");
const fs = require("node:fs");

const TARGET = path.resolve(__dirname, "..", "src", "app", "page.tsx");

const src = fs.readFileSync(TARGET, "utf8");

// ─── 1. Replace WrittenTestimonials block ──────────────────────────────────
const NEW_WRITTEN_TESTIMONIALS = `/* ─── WRITTEN TESTIMONIALS (big-photo cards) ─── */
function WrittenTestimonials() {
  const testimonials = [
    {
      metric: "$91K/mo",
      metricLabel: "monthly revenue",
      quote: "We went from $42K to $91K monthly in under 60 days. The pipeline became predictable for the first time — we could forecast and hire with confidence.",
      name: "Josh",
      role: "Director, Maxicare Plus",
      avatar: "/testimonials/josh-maxicare.jpg",
    },
    {
      metric: "4 clients",
      metricLabel: "in first 45 days",
      quote: "We'd been burned by two agencies before. This was different — it was a system, not a service. 4 new retainer clients in the first 45 days.",
      name: "Uche",
      role: "Founder, The Morning Star Community Services",
      avatar: "/testimonials/uche-morningstar.jpg",
    },
    {
      metric: "28% → 60%",
      metricLabel: "discovery call close rate",
      quote: "Discovery call conversion jumped from 28% to over 60%. The authority content meant prospects arrived already sold — we just confirmed fit.",
      name: "Malkin",
      role: "Founder, Support24",
      avatar: "/testimonials/malkin-support24.jpg",
    },
    {
      metric: "6 months",
      metricLabel: "of meetings in month one",
      quote: "More qualified meetings in month one than the previous six months combined. The system ran on its own — I went back to delivery.",
      name: "Jessica",
      role: "Founder, Jessica Teds Coaching",
      avatar: "/testimonials/jessica-teds.jpg",
    },
  ];

  return (
    <section className="section-spacing section-padding border-t border-white/[0.04]">
      <div className="max-container">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-4">
            350+ Businesses &middot; $45.7M+ Tracked Revenue
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-balance leading-[1.05]">
            Real numbers from <span className="text-ember-500">real partners.</span>
          </h2>
          <p className="mt-5 text-base text-white/55 max-w-xl mx-auto">
            Every result below is from a named client engagement.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={(i % 2) * 0.1}>
              <article className="rounded-3xl border border-white/[0.08] bg-white/[0.02] overflow-hidden flex flex-col h-full">
                {/* Top: metric + stars + quote */}
                <div className="p-7 md:p-8">
                  <div className="flex items-baseline gap-2 mb-4 flex-wrap">
                    <p className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-none">{t.metric}</p>
                    <p className="text-sm text-white/40 font-medium">/ {t.metricLabel}</p>
                  </div>
                  <div className="text-ember-500 text-sm mb-4 tracking-widest">{"\\u2605\\u2605\\u2605\\u2605\\u2605"}</div>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                </div>

                {/* Big customer image */}
                <div className="relative aspect-[4/5] bg-white/[0.02] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Name + role */}
                <div className="px-7 md:px-8 py-5 border-t border-white/[0.06]">
                  <p className="text-base font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-white/55">{t.role}</p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}`;

// Match the entire current WrittenTestimonials function by header + body
// We match the comment marker through to the next '/* ─── ' marker.
const WRITTEN_RE = /\/\* ─── WRITTEN TESTIMONIALS ─── \*\/[\s\S]*?(?=\/\* ─── COMPARISON)/;

if (!WRITTEN_RE.test(src)) {
  console.error("WrittenTestimonials section not found via regex. Aborting.");
  process.exit(1);
}

let next = src.replace(WRITTEN_RE, NEW_WRITTEN_TESTIMONIALS + "\n\n");

// ─── 2. Replace QualificationSection block ─────────────────────────────────
const NEW_QUALIFICATION = `/* ─── WHO THIS IS FOR (icon-header tile design) ─── */
function QualificationSection() {
  const goodFit = [
    "A business owner who wants predictable revenue growth",
    "Selling a high-value product or service ($3K–$50K+)",
    "Ready to scale but lack the system or team to get there",
    "Tired of inconsistent outreach, random leads, and expensive ads",
    "Looking for a partner — not another marketing agency",
    "Wanting results without retainers or long-term contracts",
  ];

  const notFit = [
    "Don't have a deliverable product or service ready",
    "Expect overnight results without following a proven process",
    "Refuse to take calls or engage with qualified prospects",
  ];

  return (
    <section className="section-spacing section-padding bg-gradient-to-b from-surface-950 via-zinc-900/30 to-surface-950">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6">
            Is This Right for You?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight">
            We&apos;re Selective About Who We Partner With
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {/* For-you column */}
          <AnimatedSection direction="left">
            <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.03] p-7 md:p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-emerald-400/85 font-semibold mb-0.5">A Match</p>
                  <h3 className="text-lg md:text-xl font-bold text-white">We&apos;re a Fit If You Are…</h3>
                </div>
              </div>
              <div className="space-y-3 flex-1">
                {goodFit.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-4 hover:bg-white/[0.04] transition-colors">
                    <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-white/90 leading-relaxed font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Not-for column */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.015] p-7 md:p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.10] flex items-center justify-center flex-shrink-0">
                  <X className="w-6 h-6 text-white/45" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/40 font-semibold mb-0.5">Not A Fit</p>
                  <h3 className="text-lg md:text-xl font-bold text-white/85">We Are NOT a Fit If You…</h3>
                </div>
              </div>
              <div className="space-y-3 flex-1">
                {notFit.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.015] p-4">
                    <X className="w-5 h-5 text-white/35 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-white/60 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}`;

const QUAL_RE = /\/\* ─── WHO THIS IS FOR ─── \*\/[\s\S]*?(?=\/\* ─── RISK REVERSAL)/;

if (!QUAL_RE.test(next)) {
  console.error("QualificationSection not found via regex. Aborting.");
  process.exit(1);
}

next = next.replace(QUAL_RE, NEW_QUALIFICATION + "\n\n");

fs.writeFileSync(TARGET, next, "utf8");
console.log("Rewrote WrittenTestimonials + QualificationSection on home page.");
