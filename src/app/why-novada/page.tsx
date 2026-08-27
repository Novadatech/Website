"use client";

/*
 * /why-novada : the approach page (alongside-not-instead, onshore,
 * measurement-first, and the operating proof).
 *
 * REBUILT 2026-08-27 into the home page's design system (Direction B):
 * white canvas, one continuous 1px hairline frame running the length of
 * the page (border-x on every band), a reserved ink surface (#0A0D14)
 * used only for desk moments, a left index rail whose micro-caps label
 * IS the section h2, Barlow Condensed bold caps for display, Space
 * Grotesk with tabular-nums for labels and figures, Inter for body,
 * #003DDB as the only chromatic accent for state, #B4501A as a scarce
 * signal colour. Reference: src/app/page.tsx and
 * src/app/patient-access-desk/page.tsx.
 *
 * PAGE ROLE, which is NOT the offer pages' role: this page is reached
 * from the main navigation by a visitor who is already interested and is
 * deciding whether to trust us. It is optimised for credibility and
 * scannability, not for cold-traffic conversion. That drives:
 *   1. A quiet typographic hero. No self-identification strip, no rating
 *      lockup on the fold, no ad-lander compression.
 *   2. The measurement promise is promoted to the FIRST band and given
 *      the reserved ink surface. It is the company's differentiator, and
 *      the strongest line in it (that a figure never travels away from
 *      its source) closes the band in display type.
 *   3. Both audiences stay present throughout, because navigation
 *      traffic has not self-selected into one offer yet. The proof band
 *      routes onward to both offer pages.
 *   4. No booking embed. The ask hands off to the home page calendar at
 *      /#book, so no band on this page owns the id "book" and the sticky
 *      bar stays available the whole way down.
 *
 * COPY: every sentence on this page is the legally reviewed copy from
 * the previous build, re-laid-out, not rewritten. The only additions are
 * interface labels: rail labels, column headings, scope chips, the
 * figure caption and the two route strings.
 *
 * Binding copy rules apply in full: Australian spelling, no em dashes,
 * no pricing, never replacing a whole role, nothing clinical, no
 * guarantees, no statistic that is not already on the page carrying its
 * printed source, no testimonials or client names, and never the words
 * "virtual receptionist", "answering service" or "call centre".
 *
 * The 168 and 38 figures are arithmetic on a standard full-time week,
 * not a statistic, so the slot where a source would sit says exactly
 * that. This is the same treatment the home page gives them.
 *
 * No testimonials, client names, logos or ratings on this page: they are
 * pending legal review, and the legacy 4.9/5 rating relates to a
 * different service line. Team photography is a FOUNDER TO CONFIRM item,
 * so this page carries no people imagery yet.
 */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import StickyCta from "@/components/desk/StickyCta";

/* ══════════════════════════════════════════════════════════════════
   DESIGN TOKENS
   Written as complete class strings so the Tailwind scanner sees the
   literal arbitrary values. Never interpolate a colour into a class.
   ══════════════════════════════════════════════════════════════════ */

const WRAP = "mx-auto w-full max-w-[1240px]";
const PAD = "px-5 sm:px-8 lg:px-12";
const BAND = "py-14 md:py-24";
const BAND_TIGHT = "py-12 md:py-20";

/**
 * Micro-caps interface label. 12px is the floor: on this page the rail
 * labels ARE the section headings, so they are structural type and must
 * not drop below the readable floor the offer pages set.
 */
const MICRO =
  "font-supply text-[12px] font-medium uppercase tracking-[0.14em]";
const MICRO_TIGHT =
  "font-supply text-[12px] font-medium uppercase tracking-[0.07em]";
/** Any figure a reader might compare to another figure gets tabular nums. */
const NUM = "font-supply tabular-nums";

const DISPLAY =
  "font-condensed font-bold uppercase leading-[0.92] tracking-[-0.012em]";

/** CTA floor: 14px / 600. Never smaller, on any breakpoint. */
const BTN_PRIMARY =
  "group inline-flex items-center justify-center gap-2 rounded-[6px] bg-[#003DDB] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#0030AE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2";

/* ══════════════════════════════════════════════════════════════════
   HOOKS
   ══════════════════════════════════════════════════════════════════ */

/**
 * Wall clock for the desk, in Sydney time. Mount guarded so the server
 * and the first client render agree, otherwise React reports a
 * hydration mismatch every single load.
 */
function useSydneyClock() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const read = () =>
      new Intl.DateTimeFormat("en-AU", {
        timeZone: "Australia/Sydney",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
    setTime(read());
    const id = window.setInterval(() => setTime(read()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

/* ══════════════════════════════════════════════════════════════════
   PRIMITIVES
   ══════════════════════════════════════════════════════════════════ */

type Tone = "light" | "tint" | "dark";

/** The left index rail. Its label is the section heading. */
function Rail({
  index,
  label,
  tone = "light",
}: {
  index: string;
  label: string;
  tone?: Tone;
}) {
  const dark = tone === "dark";
  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      <div className="flex items-center gap-3 lg:block">
        <span
          className={`${MICRO} ${NUM} ${dark ? "text-white/35" : "text-[#9AA3B1]"}`}
        >
          {index}
        </span>
        <span
          aria-hidden
          className={`h-px w-6 lg:my-3 lg:h-6 lg:w-px ${
            dark ? "bg-white/15" : "bg-[#E3E6EC]"
          }`}
        />
        <h2 className={`${MICRO} ${dark ? "text-white/75" : "text-[#0B0E14]"}`}>
          {label}
        </h2>
      </div>
    </div>
  );
}

/**
 * One horizontal band of the page. Carries the continuous vertical
 * hairlines and the rail gutter so every section shares one rhythm.
 */
function Band({
  id,
  index,
  label,
  tone = "light",
  tight = false,
  children,
}: {
  id?: string;
  index: string;
  label: string;
  tone?: Tone;
  tight?: boolean;
  children: React.ReactNode;
}) {
  const dark = tone === "dark";
  const surface =
    tone === "dark"
      ? "border-white/10 bg-[#0A0D14]"
      : tone === "tint"
        ? "border-[#E3E6EC] bg-[#F7F8FA]"
        : "border-[#E3E6EC] bg-white";
  return (
    <section id={id} className={`scroll-mt-28 border-t ${surface}`}>
      <div
        className={`${WRAP} ${PAD} ${tight ? BAND_TIGHT : BAND} border-x ${
          dark ? "border-white/10" : "border-[#E3E6EC]"
        }`}
      >
        <div className="grid gap-8 lg:grid-cols-[124px_minmax(0,1fr)] lg:gap-12">
          <Rail index={index} label={label} tone={tone} />
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   1 · STATUS STRIP
   Sits directly under the nav and carries the three standing claims as
   interface chrome, plus a live Sydney wall clock. On a page whose job
   is trust, these are the first words a visitor reads.
   ══════════════════════════════════════════════════════════════════ */

function StatusStrip() {
  const clock = useSydneyClock();
  return (
    <div className="border-b border-[#E3E6EC] bg-[#F7F8FA]">
      <div
        className={`${WRAP} ${PAD} flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-x border-[#E3E6EC] py-2.5`}
      >
        <span
          className={`${MICRO} hidden items-center gap-2.5 text-[#5B6472] sm:flex`}
        >
          <span className="relative flex h-[6px] w-[6px]" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#003DDB] opacity-50" />
            <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-[#003DDB]" />
          </span>
          Sydney
          <span className={`${NUM} text-[#0B0E14]`}>{clock ?? "00:00:00"}</span>
        </span>
        <span className={`${MICRO_TIGHT} text-[#5B6472]`}>
          <span className="font-semibold text-[#0B0E14]">
            Real people, onshore
          </span>{" "}
          <span className="text-[#C3CAD5]">·</span> Australian owned{" "}
          <span className="text-[#C3CAD5]">·</span> Nothing clinical, ever
        </span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   2 · THE DESK, DEFINED (hero visual)
   The hero paragraph's two middle sentences, set as a register rather
   than printed twice. The micro-caps key is the opening clause of each
   sentence, so the row reads as one continuous sentence and no word of
   the reviewed copy is added, cut or reordered.
   ══════════════════════════════════════════════════════════════════ */

const DESK_DEFINITION = [
  {
    index: "01",
    key: "In a clinic",
    body: "it is the front desk turning calls into appointments.",
  },
  {
    index: "02",
    key: "In a care business",
    body: "it is the coordination office turning rosters into delivered hours.",
  },
];

function DeskDefinition() {
  return (
    <div className="rounded-[12px] border border-white/[0.09] bg-[#0A0D14] shadow-[0_24px_70px_-28px_rgba(11,14,20,0.55)]">
      {/* chrome */}
      <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] px-4 py-3 sm:px-5">
        <span className={`${MICRO} flex items-center gap-2.5 text-white/60`}>
          <span className="relative flex h-[6px] w-[6px]" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3A6CFF] opacity-60" />
            <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-[#3A6CFF]" />
          </span>
          The desk
        </span>
        <span
          className={`${MICRO_TIGHT} rounded-[4px] border border-white/15 px-2 py-[3px] text-white/45`}
        >
          Definition
        </span>
      </div>

      {DESK_DEFINITION.map((d, i) => (
        <div
          key={d.key}
          className={`px-4 py-5 sm:px-5 ${
            i === 1 ? "border-t border-white/[0.07]" : ""
          }`}
        >
          <span className="flex items-center gap-2.5">
            <span className={`${MICRO} ${NUM} text-white/30`}>{d.index}</span>
            <span aria-hidden className="h-3 w-px bg-white/15" />
            <span className={`${MICRO} text-[#A6BEFF]`}>{d.key}</span>
          </span>
          <p className="mt-3 text-[16px] leading-[1.5] text-white/90 md:text-[18px]">
            {d.body}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   3 · HERO
   Deliberately quiet. Navigation traffic has already decided to look;
   the job here is to sound like the most considered page on the site,
   not to compress a decision onto the fold.
   ══════════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="border-t border-[#E3E6EC] bg-white">
      <div
        className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-12 md:py-20`}
      >
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${MICRO_TIGHT} text-[#003DDB]`}
            >
              Why Novada <span className="text-[#C3CAD5]">·</span> Clinics and
              care providers <span className="text-[#C3CAD5]">·</span> Australia
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className={`${DISPLAY} mt-5 text-[42px] text-[#0B0E14] sm:text-[56px] lg:text-[70px]`}
            >
              We measure the desk.{" "}
              <span className="text-[#003DDB]">Nobody else does.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-6 max-w-[560px] text-[16px] leading-[1.62] text-[#454E5C] md:text-[17px]"
            >
              Every healthcare business has a desk. Revenue is won or lost
              there, and it is a role staffed{" "}
              <span className={`${NUM} font-medium text-[#003DDB]`}>38</span> of
              the <span className={`${NUM} font-medium text-[#0B0E14]`}>168</span>{" "}
              hours the work actually arrives in.
            </motion.p>

            {/* Where a source would sit on any other number. */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              className={`${MICRO_TIGHT} mt-5 max-w-[452px] border-t border-[#E3E6EC] pt-3 text-[#9AA3B1]`}
            >
              Arithmetic, not a statistic
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <DeskDefinition />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   4 · THE MEASUREMENT PROMISE
   Promoted to band 01 and given the reserved ink surface, because it is
   the differentiator the rest of the page rests on.
   Structure: the claim, then the three most-quoted numbers rendered as
   a citations table with an empty source column, then what replaces
   them, then the disclosure line in display type.
   The table is the same device the home page and both offer pages use
   for evidence, run in reverse: there, every row prints a source; here,
   every row prints the absence of one.
   ══════════════════════════════════════════════════════════════════ */

const UNSOURCED = [
  {
    claim: "Figures attributed to colleges that never published them.",
    traced: "Never published",
  },
  {
    claim: "Dollar-per-missed-call claims with no study behind them.",
    traced: "No study",
  },
  {
    claim: "American benchmarks dressed up as Australian ones.",
    traced: "Not Australian",
  },
];

const REPORT_FIELDS = [
  "Every enquiry",
  "Response time",
  "Booking outcome",
  "Reason lost",
];

function ReportSchematic() {
  return (
    <div className="overflow-hidden rounded-[12px] border border-white/[0.09] bg-[#111621]">
      <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] bg-white/[0.02] px-5 py-3">
        <span className={`${MICRO} text-white/60`}>Monthly report</span>
        <span
          className={`${MICRO_TIGHT} rounded-[4px] border border-dashed border-white/20 px-2 py-[3px] text-white/45`}
        >
          Illustrative example
        </span>
      </div>
      {REPORT_FIELDS.map((f) => (
        <div
          key={f}
          className="flex items-center justify-between gap-4 border-b border-white/[0.06] px-5 py-3.5"
        >
          <span className="text-[14px] text-white/85">{f}</span>
          <span aria-hidden className={`${NUM} text-[14px] text-white/25`}>
            ··
          </span>
        </div>
      ))}
      <div className="bg-white/[0.02] px-5 py-3">
        <span className={`${MICRO_TIGHT} text-white/45`}>
          Measured in your own systems
        </span>
      </div>
    </div>
  );
}

function Measurement() {
  return (
    <Band index="01" label="The measurement promise" tone="dark">
      <AnimatedSection>
        <h3
          className={`${DISPLAY} max-w-[880px] text-[32px] text-white sm:text-[42px] md:text-[52px]`}
        >
          We won&apos;t quote you an industry statistic.
        </h3>
        <p className="mt-6 max-w-[720px] text-[16px] leading-[1.62] text-white/65 md:text-[17px]">
          We traced this market&apos;s most-quoted numbers to their sources, and
          most dissolved on contact.
        </p>
      </AnimatedSection>

      {/* the citations table, run in reverse */}
      <AnimatedSection delay={0.08}>
        <div className="mt-10 hidden grid-cols-[minmax(0,1fr)_200px] gap-6 border-b border-white/[0.12] pb-3 lg:grid">
          <span className={`${MICRO} text-white/35`}>
            The most-quoted numbers
          </span>
          <span className={`${MICRO} text-white/35`}>Traced to</span>
        </div>
      </AnimatedSection>

      <div className="mt-10 border-t border-white/[0.12] lg:mt-0 lg:border-t-0">
        {UNSOURCED.map((u, i) => (
          <AnimatedSection key={u.claim} delay={i * 0.07}>
            <div className="grid gap-x-6 gap-y-3 border-b border-white/[0.07] py-6 lg:grid-cols-[minmax(0,1fr)_200px] lg:items-center">
              <p className="text-[15px] leading-[1.6] text-white/90 md:text-[16px]">
                {u.claim}
              </p>
              <span
                className={`${MICRO_TIGHT} justify-self-start rounded-[4px] border border-dashed border-white/20 px-2 py-[4px] text-white/45`}
              >
                {u.traced}
              </span>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.1}>
        <p className="mt-6 text-[16px] font-medium leading-[1.6] text-white md:text-[17px]">
          So we don&apos;t use them.
        </p>
      </AnimatedSection>

      {/* what replaces them */}
      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-14">
        <AnimatedSection>
          <p className={`${MICRO} text-white/35`}>Instead</p>
          <p className="mt-5 max-w-[560px] text-[16px] leading-[1.62] text-white/75 md:text-[17px]">
            Instead we measure your desk: every enquiry, response time, booking
            outcome and reason lost, reported monthly.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <ReportSchematic />
        </AnimatedSection>
      </div>

      {/* the disclosure line: the strongest sentence in the business */}
      <AnimatedSection delay={0.12}>
        <p
          className={`${DISPLAY} mt-14 max-w-[900px] border-l-2 border-[#3A6CFF] pl-6 text-[26px] text-white sm:text-[34px] md:text-[40px]`}
        >
          If a number appears anywhere on this website,{" "}
          <span className="text-[#A6BEFF]">
            it carries its source in the same breath.
          </span>
        </p>
      </AnimatedSection>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   5 · HOW WE WORK
   The four principles on the numbered rail band pattern. The right hand
   chip is the compact will / will not contrast: it classifies each rule
   as a boundary, an exclusion or a standing commitment, using the same
   three word tag vocabulary the home page's scope band already uses.
   The contrast is carried by the chip rather than by a second grid,
   because a will / will not grid could only be built by reprinting
   these same reviewed sentences twice on one page.
   The clinical exclusion takes the page's only use of the scarce signal
   colour, because it is the one boundary with regulatory weight.
   ══════════════════════════════════════════════════════════════════ */

const PRINCIPLES = [
  {
    index: "01",
    title: "Alongside, not instead",
    tag: "Boundary",
    signal: false,
    body: "We never replace your front desk or your coordinators. We carry the phone-and-schedule load so the people at the counter can look after the person in front of them. Nothing at the front counter changes: greeting, payments and in-person care stay with your team.",
  },
  {
    index: "02",
    title: "Nothing clinical, ever",
    tag: "Out of scope",
    signal: true,
    body: "No triage, no assessment, no advice. Anything clinical routes straight to your team under a protocol we agree in writing before we take a single call. That boundary is in the service agreement, not in fine print.",
  },
  {
    index: "03",
    title: "Onshore and Australian owned",
    tag: "Standing",
    signal: false,
    body: "An Australian team, working Australian hours and Australian rules, inside your systems. Your data stays where it already lives.",
  },
  {
    index: "04",
    title: "Your systems, not ours",
    tag: "Standing",
    signal: false,
    body: "We work in the practice management and care platforms you already run. Nothing migrates, nothing is replaced, and you keep the system of record.",
  },
];

function Principles() {
  return (
    <Band index="02" label="How we work" tone="tint">
      <AnimatedSection>
        <h3
          className={`${DISPLAY} max-w-[820px] text-[30px] text-[#0B0E14] sm:text-[40px] md:text-[48px]`}
        >
          Four rules we don&apos;t bend.
        </h3>
      </AnimatedSection>

      <div className="mt-10 border-t border-[#D3D8E2]">
        {PRINCIPLES.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.06}>
            <div className="grid gap-x-8 gap-y-4 border-b border-[#E3E6EC] py-7 lg:grid-cols-[52px_minmax(0,300px)_minmax(0,1fr)] lg:gap-y-0 lg:px-3">
              <span
                className={`${MICRO} ${NUM} hidden pt-1 text-[#9AA3B1] lg:block`}
              >
                {p.index}
              </span>

              <div>
                <span className="flex items-center gap-2.5 lg:hidden">
                  <span className={`${MICRO} ${NUM} text-[#9AA3B1]`}>
                    {p.index}
                  </span>
                  <span aria-hidden className="h-3 w-px bg-[#D3D8E2]" />
                </span>
                <h4 className="mt-3 text-[19px] font-semibold tracking-tight text-[#0B0E14] lg:mt-0 lg:text-[21px]">
                  {p.title}
                </h4>
                <span
                  className={`${MICRO_TIGHT} mt-3 inline-flex rounded-[4px] border px-2 py-[4px] ${
                    p.signal
                      ? "border-[#E0C3AE] bg-[#FBF2EC] text-[#B4501A]"
                      : "border-[#DCE0E8] bg-white text-[#7B8492]"
                  }`}
                >
                  {p.tag}
                </span>
              </div>

              <p className="max-w-[560px] text-[15px] leading-[1.62] text-[#454E5C] md:text-[16px]">
                {p.body}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   6 · PROOF OF OPERATIONS
   Ink surface. This is the one claim on the page that asserts an
   operation already running, so it gets the reserved colour. The two
   route cards below it are the only navigation on the page: a visitor
   who arrived from the nav menu and is now convinced needs somewhere to
   go, and this page serves both audiences, so both go.
   ══════════════════════════════════════════════════════════════════ */

const OFFERS = [
  {
    who: "For clinics",
    name: "The Patient Access Desk",
    href: "/patient-access-desk",
  },
  {
    who: "For care providers",
    name: "The Workforce Ops Desk",
    href: "/workforce-ops-desk",
  },
];

function Proof() {
  return (
    <Band index="03" label="Proof of operations" tone="dark">
      <AnimatedSection>
        <p className="max-w-[900px] border-l-2 border-[#3A6CFF] pl-6 text-[19px] font-medium leading-[1.42] text-white sm:text-[24px] md:text-[30px]">
          This isn&apos;t a proposal. Our desk answers after-hours calls for
          Australian care providers every night of the year, inside their
          systems, to their escalation protocols, with a structured handover
          waiting every morning.
        </p>
        <p className="mt-6 max-w-[720px] pl-6 text-[15px] leading-[1.62] text-white/65 md:text-[16px]">
          That operating capability is the credibility base for both the Patient
          Access Desk and the Workforce Ops Desk. It is the same team and the
          same discipline.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.12}>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {OFFERS.map((o) => (
            <a
              key={o.href}
              href={o.href}
              className="group flex items-center justify-between gap-4 rounded-[10px] border border-white/[0.09] bg-white/[0.03] px-5 py-4 transition-colors duration-200 hover:border-[#3A6CFF]/45 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A6CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0D14]"
            >
              <span className="min-w-0">
                <span className={`${MICRO} block text-[#A6BEFF]`}>{o.who}</span>
                <span className="mt-2 block text-[16px] font-semibold text-white">
                  {o.name}
                </span>
                {/* A route reads as a route, so it stays lower case. */}
                <span
                  className={`${MICRO_TIGHT} mt-1.5 block normal-case text-white/30`}
                >
                  {o.href}
                </span>
              </span>
              <ArrowUpRight
                className="h-5 w-5 shrink-0 text-white/40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#A6BEFF]"
                aria-hidden
              />
            </a>
          ))}
        </div>
      </AnimatedSection>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   7 · THE ASK
   No booking embed on this page, so the band deliberately does NOT own
   the id "book": the CTA hands off to the home page calendar and the
   sticky bar stays visible all the way down. Light surface, because the
   ink before it is doing the work and the page should close quietly.
   ══════════════════════════════════════════════════════════════════ */

function FinalCta() {
  return (
    <Band id="review" index="04" label="Book" tight>
      <AnimatedSection>
        <h3
          className={`${DISPLAY} max-w-[820px] text-[34px] text-[#0B0E14] sm:text-[46px] md:text-[56px]`}
        >
          See it against your own numbers.
        </h3>
        <p className="mt-5 max-w-[620px] text-[16px] leading-[1.62] text-[#454E5C] md:text-[17px]">
          We&apos;ll map your workload and show you exactly what we&apos;d
          measure in your first 30 days.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.08}>
        <div className="mt-9">
          <a href="/#book" className={`${BTN_PRIMARY} w-full sm:w-auto`}>
            Book a Review
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        <p
          className={`${MICRO_TIGHT} mt-8 border-t border-[#E3E6EC] pt-4 text-[#9AA3B1]`}
        >
          Real people, onshore <span className="text-[#C3CAD5]">·</span>{" "}
          Australian owned <span className="text-[#C3CAD5]">·</span> Nothing
          clinical, ever
        </p>
      </AnimatedSection>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════════ */

export default function WhyNovadaPage() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <DeskNav />
      <StatusStrip />

      <main>
        <Hero />
        <Measurement />
        <Principles />
        <Proof />
        <FinalCta />
      </main>

      <DeskFooter />
      <StickyCta
        label="Book a Desk Review"
        tagline="Every call answered. Every shift covered. Everything measured."
      />
    </div>
  );
}
