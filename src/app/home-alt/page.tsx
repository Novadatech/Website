"use client";

/*
 * /home-alt — ALTERNATIVE home page design, built 2026-08-27 for a live
 * side-by-side against the current white home page. Founder chose "show
 * me both, then decide". One of these two will become "/" and the other
 * will be deleted; this page is noindex until then.
 *
 * WHAT IS BEING TESTED: the design system only. Copy, structure and
 * content are the same approved material as "/". This page rebuilds the
 * PREVIOUS site's composition, which the founder judged better:
 *   - near-black canvas with a coloured wash and a glow rising into the
 *     closer, rather than white sections
 *   - centred, full-width hero in light-weight large type with gradient
 *     text, rather than a split hero with a card
 *   - the pinned scroll narrative: a tall sticky section where statements
 *     crossfade with progress dots. This was the old page's signature
 *     device and has no equivalent in the current build
 *   - oversized numerals sitting outside staggered cards
 *   - marquee rows for industries and figures
 *
 * DELIBERATELY HELD CONSTANT: brand blue #003DDB stays the accent, so the
 * comparison isolates dark-versus-light composition rather than also
 * changing the brand colour. The old site's green is not reintroduced.
 *
 * All binding copy rules from the brief still apply here (Australian
 * spelling, no em dashes, no pricing, nothing clinical, no guarantees,
 * approved statistics with sources printed).
 */

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import BookingEmbed from "@/components/desk/BookingEmbed";
import StickyCta from "@/components/desk/StickyCta";
import HomeFaq from "@/components/desk/HomeFaq";
import {
  IndustryMarquee,
  StatsMarquee,
  TrustLine,
} from "@/components/desk/ProofStack";

const CONTAINER = "mx-auto w-full max-w-[1180px]";
const SECTION = "px-5 sm:px-8 lg:px-12";
const GRAD_TEXT =
  "bg-gradient-to-r from-white to-[#7AA2FF] bg-clip-text text-transparent";
const DISPLAY = "font-poppins font-light tracking-tight";

/* ── HERO: centred, full width, light-weight display type ── */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[85vh] bg-[linear-gradient(180deg,#0A1836_0%,rgba(8,8,8,0)_100%)]" />
      <div className={`${CONTAINER} ${SECTION} relative text-center`}>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7AA2FF]"
        >
          Healthcare Clinics · Care Providers · Australia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className={`${DISPLAY} mx-auto mt-7 max-w-5xl text-balance pb-2 text-4xl leading-[1.12] sm:text-5xl md:text-7xl ${GRAD_TEXT}`}
        >
          Revenue is won or lost at the desk. We run it.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-[#C7D2E8] md:text-xl"
        >
          Novada runs the front desk for Australian clinics and the
          coordination desk for care providers. Every call answered, every
          shift covered, everything measured. Alongside your team, not
          instead of them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-9 flex justify-center"
        >
          <TrustLine tone="dark" className="justify-center" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#book"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#003DDB] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1e56e8] sm:w-auto"
          >
            Book a Review
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#how"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-colors hover:border-white/40 sm:w-auto"
          >
            See how it works
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ── PINNED SCROLL NARRATIVE (the old site's signature device) ── */
const STATEMENTS = [
  { text: "The new-patient call rings out while reception is with the patient standing in front of them." },
  { text: "The recall list has 400 names and nobody has time to run it." },
  { text: "It is 4am, a shift just fell over, and someone senior is awake finding cover." },
  { text: "Different businesses, same event: work that reached the desk and left." },
  {
    text: "The desk is a 168-hour job staffed for 38.",
    sub: "We run it.",
    final: true,
  },
];

function Statement({
  index,
  total,
  progress,
  text,
  sub,
  final,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  text: string;
  sub?: string;
  final?: boolean;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const fade = 0.06 / total;

  const opacity = useTransform(
    progress,
    [start - fade, start + fade, end - fade, end + fade],
    [0, 1, 1, 0],
  );
  const y = useTransform(progress, [start, end], [24, -24]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
    >
      <p
        className={`${DISPLAY} max-w-4xl text-balance text-3xl leading-snug sm:text-4xl md:text-5xl ${
          final ? GRAD_TEXT : "text-white"
        }`}
      >
        {text}
      </p>
      {sub && (
        <p className="mt-6 text-xl font-light text-[#7AA2FF] md:text-2xl">
          {sub}
        </p>
      )}
    </motion.div>
  );
}

function ProgressDot({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(
    progress,
    [start - 0.001, start, end, end + 0.001],
    [0.2, 1, 1, 0.2],
  );
  return (
    <motion.span
      style={{ opacity }}
      className="h-1.5 w-1.5 rounded-full bg-[#7AA2FF]"
    />
  );
}

function Narrative() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const total = STATEMENTS.length;

  return (
    <section ref={ref} className="relative h-[420vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(0,61,219,0.35)_0%,rgba(0,61,219,0)_46%)]" />
        {STATEMENTS.map((s, i) => (
          <Statement
            key={i}
            index={i}
            total={total}
            progress={scrollYProgress}
            text={s.text}
            sub={s.sub}
            final={s.final}
          />
        ))}
        <div className="absolute bottom-24 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {STATEMENTS.map((_, i) => (
            <ProgressDot
              key={i}
              index={i}
              total={total}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── THE TWO DESKS ── */
const DESKS = [
  {
    eyebrow: "For clinics",
    title: "The Patient Access Desk",
    body: "For dental, physio, OT, psychology, podiatry, speech, vet and other private practices. We answer the calls, make the bookings in your own practice software, run the recalls every week and recover the cancellations, so a growing practice can add capacity without automatically adding another front-office salary.",
    href: "/patient-access-desk",
    cta: "For Clinics",
  },
  {
    eyebrow: "For care providers",
    title: "The Workforce Ops Desk",
    body: "For NDIS, home care and aged care providers. Rostering admin, after-hours call-offs answered every night, intake and onboarding admin, and compliance records kept to the 7-year statutory standard, so your managers stop being the overnight department.",
    href: "/workforce-ops-desk",
    cta: "For Care Providers",
  },
];

function TwoDesks() {
  return (
    <section className={`${SECTION} py-20 md:py-28`}>
      <div className={CONTAINER}>
        <AnimatedSection className="mb-12 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7AA2FF]">
            Two desks
          </p>
          <h2 className={`${DISPLAY} mt-5 text-3xl md:text-5xl ${GRAD_TEXT}`}>
            Every healthcare business has a desk.
          </h2>
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-2">
          {DESKS.map((d, i) => (
            <AnimatedSection key={d.href} delay={i * 0.1}>
              <a
                href={d.href}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#003DDB]/50 hover:bg-white/[0.05] md:p-10"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7AA2FF]">
                  {d.eyebrow}
                </p>
                <h3 className={`${DISPLAY} mt-4 text-2xl text-white md:text-3xl`}>
                  {d.title}
                </h3>
                <p className="mt-5 flex-1 text-[15px] font-light leading-relaxed text-[#C7D2E8]">
                  {d.body}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-[#7AA2FF]">
                  {d.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── HOW IT WORKS: oversized numerals outside staggered cards ── */
const STEPS = [
  {
    n: "01",
    title: "The review",
    body: "We map your call, booking and coordination workload, and what it is costing you today.",
  },
  {
    n: "02",
    title: "The baseline",
    body: "Week one. We measure your current numbers inside your own systems, before we change anything.",
  },
  {
    n: "03",
    title: "The desk runs",
    body: "We take the workload, and the monthly report shows every call, booking, recovery and event from day one.",
  },
];

function HowItWorks() {
  return (
    <section id="how" className={`${SECTION} scroll-mt-20 py-20 md:py-28`}>
      <div className={CONTAINER}>
        <AnimatedSection className="mb-14 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7AA2FF]">
            How it works
          </p>
          <h2 className={`${DISPLAY} mt-5 text-3xl md:text-5xl ${GRAD_TEXT}`}>
            Three steps to a running desk.
          </h2>
        </AnimatedSection>

        <div className="space-y-8">
          {STEPS.map((s, i) => (
            <AnimatedSection key={s.n} delay={i * 0.1} direction="left">
              <div
                className="flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-12"
                style={{ marginLeft: `${i * 3}%` }}
              >
                <span
                  className="font-poppins text-[92px] font-extralight italic leading-[0.75] md:text-[150px]"
                  style={{
                    background: "linear-gradient(180deg, #1E2A44 0%, #003DDB 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.n}
                </span>
                <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
                  <h3 className={`${DISPLAY} text-2xl text-white md:text-3xl`}>
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-[620px] text-[15px] font-light leading-relaxed text-[#C7D2E8] md:text-base">
                    {s.body}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WHAT WE DON'T DO ── */
const BOUNDARIES = [
  "Nothing clinical: no triage, no advice. Urgent matters route straight to your team under an agreed protocol.",
  "Nothing at the front counter: greeting, payments and in-person care stay with your people.",
  "We work alongside your front desk, not instead of it.",
  "Onshore team, Australian owned, and your data stays in your own systems.",
];

function Boundaries() {
  return (
    <section className={`${SECTION} py-20 md:py-28`}>
      <div className={CONTAINER}>
        <AnimatedSection className="mb-12 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7AA2FF]">
            What we don&apos;t do
          </p>
          <h2 className={`${DISPLAY} mt-5 text-3xl md:text-5xl ${GRAD_TEXT}`}>
            The lines we don&apos;t cross.
          </h2>
        </AnimatedSection>
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {BOUNDARIES.map((b, i) => (
            <AnimatedSection key={b} delay={i * 0.06}>
              <div className="flex h-full items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#003DDB]">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                <span className="text-sm font-light leading-relaxed text-[#C7D2E8]">
                  {b}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WHY NOW (approved statistics, sources printed) ── */
const EVIDENCE = [
  {
    figure: "+4.75%",
    body: "Award wages rose again on 1 July 2026, with superannuation now at 12%. The cost of the next admin hire rises every July.",
    source: "Fair Work Commission; ATO",
  },
  {
    figure: "46% vs 13%",
    body: "46% of Australian small businesses grew revenue last year. Only 13% grew headcount.",
    source: "CPA Australia Asia-Pacific Small Business Survey",
  },
  {
    figure: "$87,740 to $114,827",
    body: "What missed appointments cost two Queensland physiotherapy clinics per clinic, per year, in a peer-reviewed study.",
    source: "BMJ Open, 2025",
  },
];

function WhyNow() {
  return (
    <section className={`${SECTION} py-20 md:py-28`}>
      <div className={CONTAINER}>
        <AnimatedSection className="mb-12 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7AA2FF]">
            Why now
          </p>
          <h2 className={`${DISPLAY} mt-5 text-3xl md:text-5xl ${GRAD_TEXT}`}>
            The next hire costs more every July.
          </h2>
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-3">
          {EVIDENCE.map((e, i) => (
            <AnimatedSection key={e.figure} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <p className="font-condensed text-[36px] font-bold leading-none text-[#7AA2FF] md:text-[42px]">
                  {e.figure}
                </p>
                <p className="mt-5 flex-1 text-[15px] font-light leading-relaxed text-[#C7D2E8]">
                  {e.body}
                </p>
                <p className="mt-6 border-t border-white/10 pt-4 text-[11px] uppercase tracking-[0.1em] text-white/35">
                  {e.source}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.2}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base font-light leading-relaxed text-[#C7D2E8] md:text-lg">
            Before you add the next salary, we&apos;ll benchmark the workload
            against the actual cost of that hire: your numbers, not industry
            claims.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── MEASUREMENT + PROOF ── */
function Measurement() {
  return (
    <section className={`${SECTION} py-20 md:py-28`}>
      <div className={`${CONTAINER} max-w-3xl text-center`}>
        <AnimatedSection>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7AA2FF]">
            The measurement promise
          </p>
          <h2 className={`${DISPLAY} mt-5 text-3xl md:text-5xl ${GRAD_TEXT}`}>
            We won&apos;t quote you an industry statistic.
          </h2>
          <p className="mt-8 text-base font-light leading-relaxed text-[#C7D2E8] md:text-lg">
            We traced this market&apos;s most-quoted numbers to their sources,
            and most dissolved on contact. So we don&apos;t use them. Instead
            we measure your desk: every enquiry, response time, booking
            outcome and reason lost, reported monthly. If a number is on this
            website, it carries its source in the same breath.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className={`${SECTION} pb-20 md:pb-28`}>
      <div className={CONTAINER}>
        <AnimatedSection>
          <div className="rounded-2xl border border-[#003DDB]/30 bg-[linear-gradient(135deg,rgba(0,61,219,0.14),rgba(255,255,255,0.02))] p-10 text-center md:p-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7AA2FF]">
              Proof of operations
            </p>
            <p className={`${DISPLAY} mx-auto mt-6 max-w-3xl text-xl leading-snug text-white md:text-3xl`}>
              This isn&apos;t a proposal. Our desk answers after-hours calls
              for Australian care providers every night of the year, inside
              their systems, to their escalation protocols, with a structured
              handover waiting every morning.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── CLOSER ── */
function FinalCta() {
  return (
    <section
      id="book"
      className="relative scroll-mt-20 overflow-hidden py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(0,61,219,0.40)_0%,rgba(8,8,8,0)_60%)]" />
      <div className={`${CONTAINER} ${SECTION} relative`}>
        <AnimatedSection className="text-center">
          <h2 className={`${DISPLAY} text-4xl md:text-6xl ${GRAD_TEXT}`}>
            Book a review.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-[#C7D2E8] md:text-lg">
            We&apos;ll map your workload and show you exactly what we&apos;d
            measure in your first 30 days.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="mx-auto mt-12 max-w-[900px]">
          <BookingEmbed source="home-alt" title="Book a review with Novada" />
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function HomeAltPage() {
  return (
    <div className="min-h-screen bg-[#080808] font-sans">
      <DeskNav tone="dark" />
      <main>
        <Hero />
        <IndustryMarquee tone="dark" />
        <Narrative />
        <TwoDesks />
        <StatsMarquee tone="dark" />
        <HowItWorks />
        <Boundaries />
        <WhyNow />
        <Measurement />
        <Proof />
        <HomeFaq tone="dark" />
        <FinalCta />
      </main>
      <DeskFooter tone="dark" />
      <StickyCta />
    </div>
  );
}
