"use client";

/*
 * Home page, rebuilt 2026-08-26 to the NOVADA Website Rebuild Brief
 * (Home Page & Navigation, issued 26 Aug 2026), craft pass 2026-08-27.
 *
 * The previous Growth Infrastructure home page is archived at
 * "Website Archive/Home Page v1 (pre-Desk rebuild 2026-08-26)" and in
 * git at commit b3f71cb. That page carried real motion craft (scroll
 * narrative, animated reveals, giant numerals, sticky CTA), so this one
 * matches it: DeskBoard hero visual, WeekGrid data visual, staggered
 * reveals throughout, oversized step numerals and a sticky booking bar.
 *
 * BINDING COPY RULES applied here (brief section 9), do not relax these
 * without founder sign-off:
 *  - Australian spelling. No em dashes anywhere.
 *  - No pricing. No numbers, ranges, anchors or hints.
 *  - Never claim we replace a receptionist or any whole role.
 *  - Nothing clinical: no triage, assessment or advice language.
 *  - No guarantees, ROI promises or performance claims (ACL applies).
 *  - Every statistic comes from the approved table with its source
 *    printed beside it. The banned-statistics list is absolute.
 *  - No testimonials, star ratings, client names or logos yet (pending
 *    legal review; the legacy 4.9/5 rating must not appear here).
 *  - Never "AI receptionist", "virtual receptionist", "answering
 *    service", "call centre", "staffing agency" or "BPO".
 */

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import BookingEmbed from "@/components/desk/BookingEmbed";
import DeskBoard from "@/components/desk/DeskBoard";
import WeekGrid from "@/components/desk/WeekGrid";
import StickyCta from "@/components/desk/StickyCta";
import HomeFaq from "@/components/desk/HomeFaq";
import {
  BODY,
  BTN_PRIMARY,
  BTN_SECONDARY,
  CARD,
  CARD_TINT,
  CONTAINER,
  EYEBROW,
  H1,
  H2,
  H3,
  LEAD,
  SECTION,
  SOURCE,
} from "@/components/desk/tokens";

/* ── 1 · HERO ── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-48 h-[520px] w-[520px] rounded-full bg-[#003DDB] opacity-[0.06]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -right-40 h-[460px] w-[460px] rounded-full bg-[#003DDB] opacity-[0.05]"
      />

      <div className={`${CONTAINER} ${SECTION} relative py-14 md:py-20`}>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={EYEBROW}
            >
              Healthcare Clinics · Care Providers · Australia
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className={`${H1} mt-5 text-[#0E1116]`}
            >
              Revenue is won or lost at the desk.{" "}
              <span className="text-[#003DDB]">We run it.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className={`${LEAD} mt-6 max-w-[620px]`}
            >
              Novada runs the front desk for Australian clinics and the
              coordination desk for care providers. Every call answered, every
              shift covered, everything measured. Alongside your team, not
              instead of them.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="mt-9 flex flex-col sm:flex-row gap-3"
            >
              <a href="#book" className={`${BTN_PRIMARY} w-full sm:w-auto`}>
                Book a Review
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#how" className={`${BTN_SECONDARY} w-full sm:w-auto`}>
                See how it works
              </a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8FA0C4]"
            >
              Onshore team · Australian owned · Nothing clinical, ever
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <DeskBoard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── 2 · THE PROBLEM STRIP ── */
const PROBLEMS = [
  "The new-patient call rings out while reception is with the patient standing in front of them.",
  "The recall list has 400 names and nobody has time to run it.",
  "It is 4am, a shift just fell over, and someone senior is awake finding cover.",
];

function Problem() {
  return (
    <section className="bg-[#F4F6FA] border-y border-[#E2E7EE]">
      <div className={`${CONTAINER} ${SECTION} py-16 md:py-24`}>
        <div className="grid gap-4 md:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <AnimatedSection key={p} delay={i * 0.08}>
              <div className={`${CARD} h-full p-6`}>
                <p className="text-[15px] text-[#0E1116] leading-relaxed">{p}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.15}>
          <p className="mt-10 mb-10 text-center text-lg md:text-2xl font-semibold text-[#0B1E4B] max-w-[860px] mx-auto leading-snug">
            Different businesses, same event: work that reached the desk and
            left. The desk is a 168-hour job staffed for 38.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <WeekGrid />
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── 3 · THE TWO DESKS (routing section) ── */
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
    <section id="desks" className="bg-white scroll-mt-20">
      <div className={`${CONTAINER} ${SECTION} py-16 md:py-24`}>
        <AnimatedSection className="max-w-[760px] mb-10">
          <p className={EYEBROW}>Two desks</p>
          <h2 className={`${H2} mt-4 text-[#0E1116]`}>
            Every healthcare business has a desk.
          </h2>
        </AnimatedSection>
        <div className="grid gap-5 md:grid-cols-2">
          {DESKS.map((d, i) => (
            <AnimatedSection key={d.href} delay={i * 0.1}>
              <a
                href={d.href}
                className={`${CARD} group flex h-full flex-col p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-[#003DDB]/40 hover:shadow-[0_18px_48px_rgba(0,61,219,0.12)]`}
              >
                <p className={EYEBROW}>{d.eyebrow}</p>
                <h3 className="mt-3 text-2xl md:text-[30px] font-bold tracking-tight text-[#0E1116]">
                  {d.title}
                </h3>
                <p className={`${BODY} mt-4 flex-1`}>{d.body}</p>
                <span className={`${BTN_PRIMARY} mt-7 self-start`}>
                  {d.cta}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 4 · HOW IT WORKS (oversized numerals, staggered cascade) ── */
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
    <section id="how" className="bg-[#0B1E4B] scroll-mt-20 overflow-hidden">
      <div className={`${CONTAINER} ${SECTION} py-16 md:py-24`}>
        <AnimatedSection className="max-w-[760px] mb-12">
          <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-[#9FB3E8]">
            How it works
          </p>
          <h2 className={`${H2} mt-4 text-white`}>Three steps to a running desk.</h2>
        </AnimatedSection>

        <div className="space-y-4">
          {STEPS.map((s, i) => (
            <AnimatedSection key={s.n} delay={i * 0.1} direction="left">
              <div
                className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-7 md:flex-row md:items-center md:gap-10 md:p-9"
                style={{ marginLeft: `${i * 1.5}%` }}
              >
                <span className="font-condensed text-[68px] md:text-[92px] font-bold leading-[0.8] text-[#003DDB]">
                  {s.n}
                </span>
                <div className="md:border-l md:border-white/10 md:pl-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-[#D8E1F8] leading-relaxed max-w-[620px]">
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

/* ── 5 · WHAT WE DON'T DO (trust strip) ── */
const BOUNDARIES = [
  "Nothing clinical: no triage, no advice. Urgent matters route straight to your team under an agreed protocol.",
  "Nothing at the front counter: greeting, payments and in-person care stay with your people.",
  "We work alongside your front desk, not instead of it.",
  "Onshore team, Australian owned, and your data stays in your own systems.",
];

function Boundaries() {
  return (
    <section className="bg-white">
      <div className={`${CONTAINER} ${SECTION} py-16 md:py-24`}>
        <AnimatedSection className="max-w-[760px] mb-9">
          <p className={EYEBROW}>What we don&apos;t do</p>
          <h2 className={`${H2} mt-4 text-[#0E1116]`}>
            The lines we don&apos;t cross.
          </h2>
        </AnimatedSection>
        <ul className="grid gap-4 sm:grid-cols-2">
          {BOUNDARIES.map((b, i) => (
            <AnimatedSection key={b} delay={i * 0.06}>
              <li className={`${CARD_TINT} flex h-full items-start gap-3 p-6`}>
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#003DDB]">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                <span className={BODY}>{b}</span>
              </li>
            </AnimatedSection>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── 6 · WHY NOW (evidence tiles: approved statistics only) ── */
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
    <section className="bg-[#F4F6FA] border-y border-[#E2E7EE]">
      <div className={`${CONTAINER} ${SECTION} py-16 md:py-24`}>
        <AnimatedSection className="max-w-[760px] mb-10">
          <p className={EYEBROW}>Why now</p>
          <h2 className={`${H2} mt-4 text-[#0E1116]`}>
            The next hire costs more every July.
          </h2>
        </AnimatedSection>
        <div className="grid gap-5 md:grid-cols-3">
          {EVIDENCE.map((e, i) => (
            <AnimatedSection key={e.figure} delay={i * 0.1}>
              <div className={`${CARD} flex h-full flex-col border-t-4 border-t-[#003DDB] p-7`}>
                <p className="font-condensed text-[34px] md:text-[42px] font-bold leading-none text-[#003DDB]">
                  {e.figure}
                </p>
                <p className={`${BODY} mt-4 flex-1`}>{e.body}</p>
                <p className={`${SOURCE} mt-5 border-t border-[#E2E7EE] pt-4`}>
                  {e.source}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.2}>
          <p className="mt-8 text-base md:text-lg font-medium text-[#0B1E4B] max-w-[820px] leading-relaxed">
            Before you add the next salary, we&apos;ll benchmark the workload
            against the actual cost of that hire: your numbers, not industry
            claims.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── 7 · THE MEASUREMENT PROMISE (differentiator) ── */
function Measurement() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#003DDB] opacity-[0.05]"
      />
      <div className={`${CONTAINER} ${SECTION} relative py-16 md:py-24`}>
        <AnimatedSection className="max-w-[860px]">
          <p className={EYEBROW}>The measurement promise</p>
          <h2 className={`${H2} mt-4 text-[#0E1116]`}>
            We won&apos;t quote you an industry statistic.
          </h2>
          <p className={`${LEAD} mt-6`}>
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

/* ── 8 · PROOF OF OPERATIONS ── */
function Proof() {
  return (
    <section className="bg-[#F4F6FA] border-t border-[#E2E7EE]">
      <div className={`${CONTAINER} ${SECTION} py-16 md:py-24`}>
        <AnimatedSection>
          <div className={`${CARD} border-l-4 border-l-[#003DDB] p-8 md:p-12`}>
            <p className={EYEBROW}>Proof of operations</p>
            <p className="mt-5 text-lg md:text-2xl font-medium text-[#0E1116] leading-snug max-w-[880px]">
              This isn&apos;t a proposal. Our desk answers after-hours calls
              for Australian care providers every night of the year, inside
              their systems, to their escalation protocols, with a structured
              handover waiting every morning.
            </p>
            <p className={`${BODY} mt-5 max-w-[760px]`}>
              That operating desk is the team and the discipline behind both
              offers.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── 10 · FINAL CTA + BOOKING ── */
function FinalCta() {
  return (
    <section id="book" className="bg-[#003DDB] scroll-mt-20">
      <div className={`${CONTAINER} ${SECTION} py-16 md:py-24`}>
        <AnimatedSection className="max-w-[820px]">
          <h2 className={`${H2} text-white`}>Book a review.</h2>
          <p className="mt-5 text-base md:text-lg text-[#D8E1F8] leading-relaxed">
            We&apos;ll map your workload and show you exactly what we&apos;d
            measure in your first 30 days.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="mt-10 max-w-[900px]">
          <BookingEmbed source="home-page" title="Book a review with Novada" />
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <DeskNav />
      <main>
        <Hero />
        <Problem />
        <TwoDesks />
        <HowItWorks />
        <Boundaries />
        <WhyNow />
        <Measurement />
        <Proof />
        <HomeFaq />
        <FinalCta />
      </main>
      <DeskFooter />
      <StickyCta />
    </div>
  );
}
