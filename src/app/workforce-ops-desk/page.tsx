"use client";

/*
 * /workforce-ops-desk : the care-provider offer page (NDIS, home care,
 * aged care).
 *
 * ⚠️ LEGAL CONSTRAINT ON THIS PAGE SPECIFICALLY: the 2026 NDIS
 * inducement ban carries criminal exposure, so no inducement language
 * of any kind appears here, in copy, alt text, interface labels,
 * comments or metadata. That covers every promise of expansion, every
 * invitation to send participants our way, and every suggestion of a
 * payment, benefit or thank-you for doing so. This is not a style
 * preference. The prohibited vocabulary is deliberately NOT written
 * out anywhere in this file, so that it can never be copied by
 * accident into rendered output. The ONLY hits any audit grep should
 * return in that family are two regulator names printed as sources in
 * the copy below. Both are citations of a regulator, never offers, and
 * both are legally required to be named where they appear.
 *
 * ⚠️ NOTHING CLINICAL, AND NO CLINICAL CAPABILITY. We have no nurses
 * and no clinicians. Nothing on this page may imply that we evaluate a
 * participant's condition, give advice, or hand out, sign off or check
 * medication, or that we approve a restrictive practice. We recognise
 * the event, we escalate it under the provider's written authority, and
 * we document it. That is the whole of it. The clinical verbs a writer
 * reaches for by reflex are all off limits here, in copy and in state
 * labels alike, and the state labels in band 02 were chosen with that
 * in mind. The only place a clinical verb may appear is inside a
 * legally reviewed NEGATION, as in the scope boundaries in band 05.
 *
 * REBUILT 2026-08-27 into the home page's design system (Direction B):
 * white canvas, one continuous 1px hairline frame running the length of
 * the page (border-x on every band), a reserved ink surface (#0A0D14)
 * used only for desk moments, a left index rail whose micro-caps label
 * IS the section h2, Barlow Condensed bold caps for display, Space
 * Grotesk with tabular-nums for labels and figures, Inter for body,
 * #003DDB as the only chromatic accent for state, #B4501A as a scarce
 * signal colour. Modelled on: src/app/page.tsx.
 *
 * TRAFFIC MODEL: this is now a PAID-AD landing page. Cold traffic, one
 * audience (care providers), mostly mobile, arriving from a single ad.
 * That drives four things the home page does not do:
 *   1. ONE audience. The Patient Access Desk is never named in the
 *      hero. The only cross-link is in DeskFooter.
 *   2. The hiring decision is ON THE FOLD, in the h1, and restated in
 *      display type directly below it rather than 40% down the page.
 *   3. A "Built for" self-identification strip sits directly under the
 *      status strip so a visitor recognises themselves in under a
 *      second. Static row, deliberately NOT a marquee: a marquee caused
 *      layout overflow.
 *   4. Type floor is 12px. The home page's 9px badges are not repeated
 *      here: every micro-caps label on this page is 12px, and every CTA
 *      is 14px/600 or larger.
 *
 * COPY: every sentence on this page is legally reviewed copy, supplied
 * and laid out, not written here. The only additions are interface
 * labels (timestamps, state words, column headings, rail labels) and
 * the unbranded rating lockup already live on the home page and in
 * ProofStack.
 *
 * SECTOR-FLUENCY PASS 2026-09-01. A specialist competitor was covering
 * this ground with far more of the sector's own vocabulary, so four
 * things were added, all of them supplied copy:
 *   · "When the phone rings" (band 02, ink surface): the 4am sequence,
 *     answered through to logged, with the escalation and 000 rule
 *     stated inside the sequence rather than in a disclaimer.
 *   · "The night shift" (band 03): the seven events we are built for,
 *     in the register the sector actually uses (SIL, Behaviour Support
 *     Plan, PRN, restrictive practice, reportable incident).
 *   · Scope (band 05) now carries the five hard boundaries and the
 *     "if we cannot reach your contacts" rule.
 *   · Two further sourced obligations sit under Why now, deliberately
 *     subordinate in weight so the three headline statistics stay
 *     dominant. Both print their source, same as the three above them.
 * No metric, response time, volume or percentage was invented. The only
 * figures on this page are the five that print a source.
 *
 * Also binding: no pricing, nothing clinical, no guarantees, approved
 * statistics only with their source printed in the same row, Australian
 * spelling, no em dashes, never "answering service" or "BPO".
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import BookingEmbed from "@/components/desk/BookingEmbed";
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
 * Micro-caps interface label. 12px is the floor on this page: it is a
 * paid mobile landing page and a 9px or 10px label is not readable at
 * arm's length on a phone. Tracking is reduced from the home page's
 * 0.16em to keep long label strings on one or two lines at 390px.
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

/** Respects the OS reduced-motion setting. Read once on mount. */
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
  }, []);
  return reduced;
}

/**
 * Wall clock for the desk, in Sydney time. Mount guarded so the server
 * and the first client render agree, otherwise React reports a
 * hydration mismatch every single load. Hidden below sm: on a 390px
 * phone the fold is spent on the decision, not on the clock.
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
   Carries the human claim as interface chrome. In a market saturated
   with automated call handling, "Real people, onshore" is the single
   most load-bearing line above the headline, so it sits first, on every
   breakpoint, before anything else on the page.
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
   2 · BUILT FOR
   Self-identification, one second, above everything. Static row, not a
   marquee: a marquee overflowed the frame on narrow viewports and moved
   the very words the visitor is trying to find themselves in.
   ══════════════════════════════════════════════════════════════════ */

const BUILT_FOR = ["NDIS", "Home care", "Aged care"];

function BuiltFor() {
  return (
    <div className="border-b border-[#E3E6EC] bg-white">
      <div
        className={`${WRAP} ${PAD} flex flex-wrap items-center gap-x-3 gap-y-2 border-x border-[#E3E6EC] py-3`}
      >
        <span className={`${MICRO} shrink-0 text-[#9AA3B1]`}>Built for</span>
        <span aria-hidden className="hidden h-3 w-px bg-[#E3E6EC] sm:block" />
        <span className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
          {BUILT_FOR.map((b) => (
            <span
              key={b}
              className={`${MICRO_TIGHT} rounded-[4px] border border-[#E3E6EC] bg-[#F7F8FA] px-2 py-[3px] text-[#0B0E14]`}
            >
              {b}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   3 · THE OVERNIGHT SURFACE (hero visual)
   The overnight timeline device ported from the home page, built around
   the care event this page already describes: the 4am call-off that has
   someone senior awake finding cover. Every step is work this page
   already lists (roster gap and call-off coordination, records, a
   structured morning handover). Labelled illustrative.
   ══════════════════════════════════════════════════════════════════ */

type DeskStep = {
  time: string;
  label: string;
  state: string;
  delta?: string;
};

const EVENT = {
  time: "4:03 AM",
  source: "Care",
  text: "Support worker calls off a 6am shift.",
};

const STEPS_LOG: DeskStep[] = [
  {
    time: "4:19 AM",
    label: "Cover arranged from your approved team",
    state: "Covered",
    delta: "+16 min",
  },
  {
    time: "4:23 AM",
    label: "Recorded in your own roster system",
    state: "Recorded",
    delta: "+20 min",
  },
  {
    time: "7:55 AM",
    label: "In your morning handover",
    state: "Handed over",
    delta: "+3 h 52 min",
  },
];

const TOTAL_STEPS = STEPS_LOG.length;

function StateChip({ step, resolved }: { step: DeskStep; resolved: boolean }) {
  return (
    <span className="ml-auto flex shrink-0 items-center gap-2.5">
      {step.delta ? (
        <span
          className={`${NUM} text-[12px] transition-opacity duration-500 ${
            resolved ? "text-white/40 opacity-100" : "opacity-0"
          }`}
        >
          {step.delta}
        </span>
      ) : null}
      <span
        className={`${MICRO_TIGHT} inline-flex items-center gap-1.5 rounded-[4px] border px-2 py-[3px] transition-colors duration-500 ${
          resolved
            ? "border-[#3A6CFF]/40 bg-[#3A6CFF]/[0.14] text-[#A6BEFF]"
            : "border-white/10 bg-white/[0.03] text-white/30"
        }`}
      >
        <span
          aria-hidden
          className={`h-[5px] w-[5px] rounded-full ${
            resolved ? "bg-[#3A6CFF]" : "animate-pulse bg-white/25"
          }`}
        />
        {resolved ? step.state : "Working"}
      </span>
    </span>
  );
}

function OvernightSurface() {
  const [phase, setPhase] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setPhase(TOTAL_STEPS);
      return;
    }
    const timers = Array.from({ length: TOTAL_STEPS }, (_, i) =>
      window.setTimeout(() => setPhase(i + 1), 900 + i * 700),
    );
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [reduced]);

  return (
    <div className="rounded-[12px] border border-white/[0.09] bg-[#0A0D14] shadow-[0_24px_70px_-28px_rgba(11,14,20,0.55)]">
      {/* chrome */}
      <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] px-4 py-3 sm:px-5">
        <span className={`${MICRO} flex items-center gap-2.5 text-white/60`}>
          <span className="relative flex h-[6px] w-[6px]" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3A6CFF] opacity-60" />
            <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-[#3A6CFF]" />
          </span>
          Overnight
        </span>
        <span
          className={`${MICRO_TIGHT} rounded-[4px] border border-dashed border-white/20 px-2 py-[3px] text-white/45`}
        >
          Illustrative example
        </span>
      </div>

      {/* column header */}
      <div className="hidden items-center gap-x-3 border-b border-white/[0.07] bg-white/[0.02] px-5 py-2 sm:flex">
        <span className={`${MICRO_TIGHT} w-[64px] shrink-0 text-white/30`}>
          Time
        </span>
        <span className={`${MICRO_TIGHT} w-[76px] shrink-0 text-white/30`}>
          Source
        </span>
        <span className={`${MICRO_TIGHT} flex-1 text-white/30`}>Event</span>
        <span className={`${MICRO_TIGHT} text-white/30`}>State</span>
      </div>

      {/* the event */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.15 }}
        className="flex flex-wrap items-center gap-x-3 gap-y-2 px-4 py-3.5 sm:px-5"
      >
        <span className={`${NUM} w-[64px] shrink-0 text-[13px] text-white/60`}>
          {EVENT.time}
        </span>
        <span className="w-[76px] shrink-0">
          <span
            className={`${MICRO_TIGHT} inline-flex rounded-[4px] border border-white/10 bg-white/[0.05] px-2 py-[3px] text-white/60`}
          >
            {EVENT.source}
          </span>
        </span>
        <span className="w-full text-[14px] leading-snug text-white sm:w-auto sm:flex-1">
          {EVENT.text}
        </span>
      </motion.div>

      {/* the steps */}
      <div className="pb-2 pl-[26px] pr-4 sm:pl-[38px] sm:pr-5">
        <div className="border-l border-white/[0.12]">
          {STEPS_LOG.map((s, si) => {
            const resolved = phase > si;
            return (
              <motion.div
                key={s.time + s.label}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + si * 0.12 }}
                className="relative py-2.5 pl-4"
              >
                <span
                  aria-hidden
                  className={`absolute -left-[4px] top-[16px] h-[7px] w-[7px] rounded-full border-2 border-[#0A0D14] transition-colors duration-500 ${
                    resolved ? "bg-[#3A6CFF]" : "bg-[#3B4250]"
                  }`}
                />
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                  <span
                    className={`${NUM} w-[58px] shrink-0 text-[12px] text-white/40`}
                  >
                    {s.time}
                  </span>
                  <span className="min-w-[150px] flex-1 text-[13.5px] leading-snug text-white/85">
                    {s.label}
                  </span>
                  <StateChip step={s} resolved={resolved} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* resolution */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/[0.07] bg-white/[0.02] px-4 py-3.5 sm:px-5">
        <span className={`${MICRO} flex items-center gap-2 text-[#A6BEFF]`}>
          <span
            aria-hidden
            className={`h-[5px] w-[5px] rounded-full transition-colors duration-500 ${
              phase >= TOTAL_STEPS ? "bg-[#3A6CFF]" : "bg-white/25"
            }`}
          />
          Resolved{" "}
          <span className={NUM}>
            {phase} / {TOTAL_STEPS}
          </span>
        </span>
        <p className="text-[13.5px] leading-snug text-white/70">
          Covered, recorded and handed over. Nobody senior was woken.
        </p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   4 · HERO
   The complete decision unit. On a 390px phone everything from "Built
   for" down to the rating row lands above the fold: who it is for, what
   happens, the hiring frame, a proof element, and a 15px/600 CTA.
   ══════════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="border-t border-[#E3E6EC] bg-white">
      <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-9 md:py-16`}>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.04fr)] lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${MICRO_TIGHT} text-[#003DDB]`}
            >
              Managed Workforce Operations{" "}
              <span className="text-[#C3CAD5]">·</span> NDIS{" "}
              <span className="text-[#C3CAD5]">·</span> Home Care{" "}
              <span className="text-[#C3CAD5]">·</span> Aged Care
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className={`${DISPLAY} mt-4 text-[38px] text-[#0B0E14] sm:text-[54px] lg:text-[68px]`}
            >
              Add operations capacity.{" "}
              <span className="text-[#003DDB]">
                Not another coordinator&apos;s salary.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-5 max-w-[560px] text-[15.5px] leading-[1.58] text-[#454E5C] md:text-[17px]"
            >
              Novada runs the coordination desk for Australian NDIS, home care
              and aged care providers. Rostering administration, the
              after-hours line, intake, onboarding and the records that have to
              survive an audit. Inside the systems you already run, by people
              who know what a 4am call-off actually involves.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="mt-7"
            >
              <a href="#book" className={`${BTN_PRIMARY} w-full sm:w-auto`}>
                Book an Operations Review
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            {/* Proof, on the fold. Unbranded rating lockup, identical to
                the home page and to ProofStack: whole-of-business figures,
                no client names, no written testimonial, linked to the case
                studies. The figures share a fixed column so they align. */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-7 max-w-[452px] border-t border-[#E3E6EC]"
            >
              <div className="flex items-center gap-3 border-b border-[#EDEFF3] py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2"
              >
                <Star
                  className="h-3.5 w-3.5 shrink-0 fill-[#003DDB] text-[#003DDB]"
                  aria-hidden
                />
                <span
                  className={`${NUM} w-[46px] shrink-0 text-[15px] font-semibold text-[#0B0E14]`}
                >
                  4.9/5
                </span>
                <span className="text-[13px] text-[#5B6472]">
                  from 77+ independent client reviews
                </span>
              </div>
              <div className="flex items-center gap-3 py-2.5">
                <span aria-hidden className="h-3.5 w-3.5 shrink-0" />
                <span
                  className={`${NUM} w-[46px] shrink-0 text-[15px] font-semibold text-[#0B0E14]`}
                >
                  350+
                </span>
                <span className="text-[13px] text-[#5B6472]">
                  Australian businesses supported
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <OvernightSurface />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   5 · THE DECISION
   The salary frame, restated in display type directly under the fold
   rather than two thirds of the way down the page, then the four things
   happening at the desk today, drawn as a log of work that reached the
   desk and left.
   ══════════════════════════════════════════════════════════════════ */

const PAINS = [
  "Managers carry the on-call phone all night, then work a full day.",
  "A 4am call-off means someone senior is awake finding cover.",
  "Onboarding, induction and training records live in six places, none of them audit-ready.",
  "Your coordinator just resigned, and the phone doesn't care.",
];

function Decision() {
  return (
    <Band index="01" label="The decision" tone="tint">
      <AnimatedSection>
        <p
          className={`${DISPLAY} max-w-[940px] text-[28px] text-[#0B0E14] sm:text-[36px] md:text-[44px]`}
        >
          When margins are this tight, the question isn&apos;t whether
          coordination gets done.{" "}
          <span className="text-[#003DDB]">
            It&apos;s whether it needs another salary to do it.
          </span>
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.08}>
        <p className={`${MICRO} mt-10 text-[#9AA3B1]`}>Sound familiar?</p>
      </AnimatedSection>

      <div className="mt-4 border-t border-[#E3E6EC]">
        {PAINS.map((line, i) => (
          <AnimatedSection key={line} delay={i * 0.06}>
            <div className="group grid grid-cols-[34px_minmax(0,1fr)] items-start gap-x-4 gap-y-3 border-b border-[#E3E6EC] py-5 transition-colors duration-200 hover:bg-white sm:grid-cols-[52px_minmax(0,1fr)_144px] sm:items-center sm:px-3">
              <span className={`${MICRO} ${NUM} pt-1 text-[#9AA3B1] sm:pt-0`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[15.5px] leading-[1.5] text-[#0B0E14] md:text-[17px]">
                {line}
              </p>
              <span
                className={`${MICRO_TIGHT} col-start-2 flex items-center gap-1.5 text-[#B4501A] sm:col-start-3 sm:justify-end`}
              >
                Left the desk
                <ArrowUpRight
                  className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   6 · WHEN THE PHONE RINGS
   Ink surface, and the single most load-bearing addition on the page.
   A provider arriving from an ad is not buying a capability list, they
   are buying the answer to "what happens when my worker calls off at
   4am and I am asleep". So the sequence is drawn as a desk log with a
   node rail, the same device as the hero surface, and the two hardest
   rules on the page (nothing needing authority or clinical judgement is
   ours to decide; emergencies go to 000 first) sit INSIDE step 04
   rather than in a disclaimer nobody reads.

   The five state chips are interface labels in the same vocabulary as
   StateChip above (Covered / Recorded / Handed over). Step 02's chip
   reads "Identified" and that word was chosen with a lawyer's eye: it
   says we worked out what KIND of call it is, and it carefully does not
   say we formed any view about a person. The two clinical-sounding
   alternatives a designer would reach for first are both forbidden
   here. Do not substitute one in to save a character.
   ══════════════════════════════════════════════════════════════════ */

const PHONE_SEQUENCE: { state: string; body: string }[] = [
  {
    state: "Answered",
    body: "A coordinator answers, not a message bank. It might be a support worker, a participant, a family member or a facility.",
  },
  {
    state: "Identified",
    body: "We work out what it is: a shift to cover, a service change, an enquiry, or an incident.",
  },
  {
    state: "Handled",
    body: "Routine matters we handle inside your systems. Cover arranged from your own approved workers, the roster updated, the people affected told.",
  },
  {
    state: "Escalated",
    body: "Anything that needs authority or clinical judgement goes to your nominated contact, your on-call clinician or your Authorised Program Officer, under the escalation matrix we agree before we take a single call. Emergencies go to 000 first, every time.",
  },
  {
    state: "Recorded",
    body: "Every event is logged with timestamps and lands in your morning handover, in a form your records can actually use.",
  },
];

function PhoneRings() {
  return (
    <Band index="02" label="When the phone rings" tone="dark">
      <AnimatedSection>
        <h3
          className={`${DISPLAY} max-w-[820px] text-[30px] text-white sm:text-[40px] md:text-[48px]`}
        >
          What actually happens at 4am.
        </h3>
      </AnimatedSection>

      <div className="mt-9 border-l border-white/[0.12]">
        {PHONE_SEQUENCE.map((s, i) => (
          <AnimatedSection key={s.state} delay={i * 0.06}>
            <div className="relative border-b border-white/[0.07] py-5 pl-5 last:border-b-0 sm:pl-7">
              <span
                aria-hidden
                className="absolute -left-[4px] top-[28px] h-[7px] w-[7px] rounded-full border-2 border-[#0A0D14] bg-[#3A6CFF]"
              />
              <div className="flex items-center justify-between gap-4">
                <span className={`${MICRO} ${NUM} shrink-0 text-white/35`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`${MICRO_TIGHT} inline-flex shrink-0 items-center gap-1.5 rounded-[4px] border border-[#3A6CFF]/35 bg-[#3A6CFF]/[0.12] px-2 py-[3px] text-[#A6BEFF]`}
                >
                  <span
                    aria-hidden
                    className="h-[5px] w-[5px] rounded-full bg-[#3A6CFF]"
                  />
                  {s.state}
                </span>
              </div>
              <p className="mt-2.5 max-w-[820px] text-[15.5px] leading-[1.58] text-white/85 md:text-[16.5px]">
                {s.body}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   7 · THE NIGHT SHIFT
   The recognition register. Every line is an event the sector names in
   its own vocabulary, so a provider reads two or three of these and
   concludes we have done this before. Note what the clinical lines do
   NOT say: the PRN line and the restrictive practice line both exist to
   state that the decision is somebody else's, and the Behaviour Support
   Plan line is about reaching the clinician, not about applying the
   plan. Rendered flat, as a register, deliberately without state chips:
   this section is the problem set, not the resolution.
   ══════════════════════════════════════════════════════════════════ */

const NIGHT_EVENTS = [
  "A support worker calls off a SIL shift at 4am, and the roster shows nobody else cleared for that participant.",
  "A behaviour escalation where the Behaviour Support Plan needs to be in the room, and your on-call clinician needs to be reached now.",
  "A PRN medication question that has to go to your clinical contact rather than to us, and has to be documented either way.",
  "A restrictive practice question that belongs with your Authorised Program Officer, not with a coordinator.",
  "A reportable incident where the clock starts the moment somebody becomes aware, not on Monday morning.",
  "A participant's family ringing at 9pm about tomorrow's supports.",
  "A missed home care visit for a client who should not be left without support.",
];

function NightShift() {
  return (
    <Band index="03" label="The night shift" tone="tint">
      <AnimatedSection>
        <h3
          className={`${DISPLAY} max-w-[820px] text-[30px] text-[#0B0E14] sm:text-[40px] md:text-[48px]`}
        >
          We have handled this call before.
        </h3>
      </AnimatedSection>

      <div className="mt-9 border-t border-[#D3D8E2]">
        {NIGHT_EVENTS.map((line, i) => (
          <AnimatedSection key={line} delay={i * 0.05}>
            <div className="grid grid-cols-[34px_minmax(0,1fr)] items-start gap-x-4 border-b border-[#E3E6EC] py-4 transition-colors duration-200 hover:bg-white sm:grid-cols-[52px_minmax(0,1fr)] sm:px-3">
              <span className={`${MICRO} ${NUM} pt-[3px] text-[#9AA3B1]`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[15px] leading-[1.6] text-[#0B0E14] md:text-[16px]">
                {line}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.1}>
        <p className="mt-8 max-w-[860px] border-l-2 border-[#B4501A] pl-5 text-[16px] font-medium leading-[1.6] text-[#0B0E14] md:text-[18px]">
          None of these wait for business hours. All of them end up in a record
          somebody has to produce later.
        </p>
      </AnimatedSection>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   8 · TWO WAYS TO ENGAGE
   Two panels with the same chrome as the home page's desk cards, so
   the scope of each module reads as a specification, not a brochure.

   The coverage chip in each panel header exists to stop the page
   reading as an after-hours-only service: module 01 is one part of the
   desk, module 02 is the whole desk. Neither claims "always on". The
   hours are whatever each provider signs, and the line under the
   heading says exactly that.
   ══════════════════════════════════════════════════════════════════ */

const MODULES = [
  {
    index: "01",
    eyebrow: "Start with the nights",
    coverage: "One part of the desk",
    title: "After-Hours Continuity",
    items: [
      "Call handling from close of business to morning, plus weekends.",
      "Roster gap and call-off coordination.",
      "Incident intake and escalation to your protocol.",
      "A structured morning handover.",
    ],
  },
  {
    index: "02",
    eyebrow: "Hand over the desk",
    coverage: "The whole desk",
    title: "Managed Workforce Operations",
    items: [
      "Everything in After-Hours Continuity.",
      "Daytime rostering administration.",
      "Enquiry and intake admin.",
      "Onboarding, induction and training administration.",
      "Compliance records maintained to the 7-year statutory standard, produced on demand at audit.",
    ],
  },
];

function TwoWays() {
  return (
    <Band index="04" label="Two ways to engage">
      <AnimatedSection>
        <h3
          className={`${DISPLAY} max-w-[820px] text-[30px] text-[#0B0E14] sm:text-[40px] md:text-[48px]`}
        >
          Start with the nights. Or hand over the desk.
        </h3>
        <p className="mt-5 max-w-[720px] text-[15.5px] leading-[1.62] text-[#454E5C] md:text-[17px]">
          After hours is one way in. The whole coordination desk is the other.
          Either way, the hours we cover are written into the scope before we
          take a call.
        </p>
      </AnimatedSection>

      <div className="mt-9 grid gap-4 md:grid-cols-2">
        {MODULES.map((m, i) => (
          <AnimatedSection key={m.title} delay={i * 0.08} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-[12px] border border-[#E3E6EC] bg-white">
              {/* panel chrome */}
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 border-b border-[#E3E6EC] bg-[#F7F8FA] px-5 py-3">
                <span className={`${MICRO} flex items-center gap-2.5`}>
                  <span className={`${NUM} text-[#9AA3B1]`}>{m.index}</span>
                  <span aria-hidden className="h-3 w-px bg-[#D3D8E2]" />
                  <span className="text-[#003DDB]">{m.eyebrow}</span>
                </span>
                <span
                  className={`${MICRO_TIGHT} rounded-[4px] border border-[#DCE0E8] bg-white px-2 py-[3px] text-[#5B6472]`}
                >
                  {m.coverage}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-8">
                <h4
                  className={`${DISPLAY} text-[26px] text-[#0B0E14] md:text-[32px]`}
                >
                  {m.title}
                </h4>
                <ul className="mt-6 border-t border-[#EDEFF3]">
                  {m.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-b border-[#EDEFF3] py-3.5 last:border-b-0"
                    >
                      <span
                        aria-hidden
                        className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#003DDB]"
                      />
                      <span className="text-[15px] leading-[1.6] text-[#0B0E14]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   9 · SCOPE
   The hardest section on the page, and the one a compliance reader will
   go to first. The five rows below the standing paragraph are the
   boundaries stated as boundaries, not softened: duty of care does not
   move, we hold no clinical authority, we do not authorise a
   restrictive practice, we never attend on site, and the notification
   decision stays with the provider. The tags are interface labels only.

   The panel at the foot answers the question a provider asks second:
   what happens when the escalation list itself fails. It is the one
   place on this page where the scarce signal colour (#B4501A) is used
   on a light surface, because it is the one failure condition we are
   volunteering rather than being asked about.
   ══════════════════════════════════════════════════════════════════ */

const BOUNDARIES = [
  {
    tag: "Boundary",
    body: "Your duty of care does not transfer. Nothing we do reduces it, and nothing in our agreement says otherwise.",
  },
  {
    tag: "Never",
    body: "We never make a clinical decision, and we never prescribe, administer or authorise medication.",
  },
  {
    tag: "Never",
    body: "We never approve or authorise a restrictive practice.",
  },
  {
    tag: "Never",
    body: "We never attend on site.",
  },
  {
    tag: "Stays with you",
    body: "Incident classification and notification to the NDIS Commission stay with you. What we hand you is a complete, timestamped record to make them with.",
  },
];

function Scope() {
  return (
    <Band index="05" label="Scope" tone="tint">
      <AnimatedSection>
        <p className={`${MICRO} text-[#9AA3B1]`}>Back office only</p>
        <h3
          className={`${DISPLAY} mt-4 max-w-[820px] text-[30px] text-[#0B0E14] sm:text-[40px] md:text-[48px]`}
        >
          Back office only, by design.
        </h3>
        {/* ⚠️ CORRECTED 2026-09-05. This paragraph previously read "never
            make worker-to-participant matching decisions". The founder
            confirmed that we do match: to fill a shift we work the client's
            own roster rules to find who can take it. Claiming otherwise was
            a false statement about our own scope, sitting in the band whose
            entire job is to be the page's trust asset.

            The true boundary is narrower and is what this now says: we find
            cover against the client's rules, from workers the client has
            already approved, and anything turning on a participant's needs
            remains the provider's decision. Do not restore the absolute. */}
        <p className="mt-6 max-w-[900px] border-l-2 border-[#003DDB] pl-5 text-[16px] leading-[1.62] text-[#454E5C] md:text-[17px]">
          We never deliver supports and never hold the participant
          relationship. When a shift needs covering we work your own rules to
          find who can take it, from the workers you have already approved,
          and anything that turns on a participant&apos;s needs stays your
          decision. Onshore team; worker screening clearances held wherever
          participant contact is plausible; your data stays in your own systems
          (ShiftCare, FlowLogic, Brevity, Carelink and more).
        </p>
      </AnimatedSection>

      <div className="mt-10 border-t border-[#D3D8E2]">
        {BOUNDARIES.map((b, i) => (
          <AnimatedSection key={b.body} delay={i * 0.05}>
            <div className="grid grid-cols-[34px_minmax(0,1fr)] items-start gap-x-4 gap-y-3 border-b border-[#E3E6EC] py-5 sm:grid-cols-[52px_minmax(0,1fr)_148px] sm:items-center sm:px-3">
              <span className={`${MICRO} ${NUM} pt-1 text-[#9AA3B1] sm:pt-0`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[15px] leading-[1.6] text-[#0B0E14] md:text-[16px]">
                {b.body}
              </p>
              <span
                className={`${MICRO_TIGHT} col-start-2 justify-self-start rounded-[4px] border border-[#DCE0E8] bg-white px-2 py-[3px] text-[#5B6472] sm:col-start-3 sm:justify-self-end`}
              >
                {b.tag}
              </span>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.1}>
        <div className="mt-10 max-w-[900px] rounded-[12px] border border-[#E3E6EC] bg-white p-6 md:p-7">
          <h4 className={`${MICRO} text-[#B4501A]`}>
            If we cannot reach your contacts
          </h4>
          <p className="mt-4 text-[15.5px] leading-[1.62] text-[#0B0E14] md:text-[16.5px]">
            We keep working down the escalation list you gave us, and we
            document every attempt with a timestamp. We never act outside the
            authority you have written down. If your escalation list has a gap
            in it, we will find that gap in the first week and tell you.
          </p>
        </div>
      </AnimatedSection>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   10 · WHY NOW
   Rendered as a citations table. Every figure prints its source in the
   same row, which is binding copy rule 6: a statistic never travels
   away from the source that carries it.

   Two further obligations were added below the table on 2026-09-01.
   They are deliberately SUBORDINATE: smaller figure type, ink instead
   of the accent blue, seated in muted cards under their own label, so
   the three sourced statistics above them stay the dominant evidence.
   Both still print their source, because the rule is the rule.
   ══════════════════════════════════════════════════════════════════ */

const EVIDENCE = [
  {
    figure: "11.66% vs 6.61%",
    body: "Direct care costs rose 11.66% while direct care revenue rose 6.61%. The gap lands on your margin.",
    source: "StewartBrown, nine months to March 2026",
  },
  {
    figure: "72%+",
    body: "Staff costs now exceed 72% of operating revenue in residential aged care, and award wages rose again in July.",
    source: "StewartBrown; Fair Work Commission",
  },
  {
    figure: "7 years",
    body: "Worker and service records now carry a 7-year statutory retention obligation. Somebody has to keep them audit-ready.",
    source: "NDIS legislation, 2026",
  },
];

function WhyNow() {
  return (
    <Band index="06" label="Why now">
      <AnimatedSection>
        <h3
          className={`${DISPLAY} max-w-[820px] text-[30px] text-[#0B0E14] sm:text-[40px] md:text-[48px]`}
        >
          Why providers are looking at this now.
        </h3>
      </AnimatedSection>

      {/* table header */}
      <div className="mt-9 hidden grid-cols-[240px_minmax(0,1fr)_220px] gap-6 border-b border-[#D3D8E2] pb-3 lg:grid">
        <span className={`${MICRO} text-[#9AA3B1]`}>Figure</span>
        <span className={`${MICRO} text-[#9AA3B1]`}>What it means</span>
        <span className={`${MICRO} text-[#9AA3B1]`}>Source</span>
      </div>

      <div className="mt-9 border-t border-[#D3D8E2] lg:mt-0 lg:border-t-0">
        {EVIDENCE.map((e, i) => (
          <AnimatedSection key={e.figure} delay={i * 0.07}>
            <div className="grid gap-x-6 gap-y-4 border-b border-[#E3E6EC] py-7 lg:grid-cols-[240px_minmax(0,1fr)_220px] lg:items-start">
              <p
                className={`${NUM} text-[26px] font-medium leading-[1.05] text-[#003DDB] md:text-[30px]`}
              >
                {e.figure}
              </p>
              <p className="text-[15px] leading-[1.62] text-[#0B0E14] md:text-[16px]">
                {e.body}
              </p>
              <div className="lg:text-right">
                <span className={`${MICRO_TIGHT} block text-[#9AA3B1]`}>
                  Source
                </span>
                <span className="mt-1.5 block text-[13px] leading-snug text-[#5B6472]">
                  {e.source}
                </span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Subordinate evidence pair. Smaller, quieter, still sourced. */}
      <AnimatedSection delay={0.14}>
        <p className={`${MICRO} mt-10 text-[#9AA3B1]`}>
          Two obligations that do not pause
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="flex flex-col rounded-[10px] border border-[#E3E6EC] bg-[#F7F8FA] p-5 md:p-6">
            <p
              className={`${NUM} text-[20px] font-medium leading-none text-[#0B0E14] md:text-[22px]`}
            >
              24 hours
            </p>
            <p className="mt-3 flex-1 text-[14px] leading-[1.62] text-[#454E5C] md:text-[15px]">
              A reportable incident must reach the NDIS Commission within 24
              hours of your organisation becoming aware. That clock runs
              overnight, at weekends and on public holidays.
            </p>
            <div className="mt-5 flex flex-wrap items-baseline gap-x-2 border-t border-[#E3E6EC] pt-3">
              <span className={`${MICRO_TIGHT} text-[#9AA3B1]`}>Source</span>
              <span className="text-[13px] leading-snug text-[#5B6472]">
                NDIS Commission
              </span>
            </div>
          </div>

          <div className="flex flex-col rounded-[10px] border border-[#E3E6EC] bg-[#F7F8FA] p-5 md:p-6">
            <blockquote className="border-l-2 border-[#C3CAD5] pl-4">
              <p className="text-[15px] italic leading-[1.58] text-[#0B0E14] md:text-[16px]">
                &ldquo;In the event of worker absence or vacancy, a suitably
                qualified and/or experienced person performs the role.&rdquo;
              </p>
            </blockquote>
            <p className="mt-3 flex-1 text-[14px] leading-[1.62] text-[#454E5C] md:text-[15px]">
              That standard does not pause at 5pm.
            </p>
            <div className="mt-5 flex flex-wrap items-baseline gap-x-2 border-t border-[#E3E6EC] pt-3">
              <span className={`${MICRO_TIGHT} text-[#9AA3B1]`}>Source</span>
              <span className="text-[13px] leading-snug text-[#5B6472]">
                NDIS Practice Standards
              </span>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   11 · PROOF OF OPERATIONS
   Ink surface. The second desk moment: the one place on the page that
   asserts an operation already running, so it keeps the reserved
   colour it shares with band 02.
   ══════════════════════════════════════════════════════════════════ */

const PROOF_TAGS = [
  "Real people, onshore",
  "Australian owned",
  "Nothing clinical, ever",
  "Inside your own systems",
];

function Proof() {
  return (
    <Band index="07" label="Proof of operations" tone="dark">
      <AnimatedSection>
        <p className={`${MICRO} text-white/45`}>This isn&apos;t a proposal</p>
        <p className="mt-6 max-w-[900px] border-l-2 border-[#3A6CFF] pl-6 text-[19px] font-medium leading-[1.42] text-white sm:text-[24px] md:text-[30px]">
          Our desk answers after-hours calls for Australian care providers
          every night of the year, inside their systems, to their escalation
          protocols, with a structured handover waiting every morning.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.12}>
        <div className="mt-10 flex flex-wrap gap-2">
          {PROOF_TAGS.map((t) => (
            <span
              key={t}
              className={`${MICRO_TIGHT} rounded-[4px] border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-white/60`}
            >
              {t}
            </span>
          ))}
        </div>
      </AnimatedSection>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   12 · HOW IT STARTS
   Step 02 carries sub-points because the handover plan is the step a
   provider is actually evaluating: it is where they find out whether we
   understand what has to be in place before a coordinator picks up a
   phone at 4am. The four sub-points are the four inputs we need.
   ══════════════════════════════════════════════════════════════════ */

const STEPS: { n: string; title: string; body: string; points?: string[] }[] = [
  {
    n: "01",
    title: "The review",
    body: "We map your after-hours load, coordination workload and record-keeping obligations.",
  },
  {
    n: "02",
    title: "The handover plan",
    body: "Your escalation protocol, contacts and systems access, documented and agreed before we take a single call.",
    points: [
      "Your escalation matrix and nominated contacts, including your Authorised Program Officer and clinical on-call.",
      "Participant risk information and Behaviour Support Plans, where they change how we respond after hours.",
      "Access to the systems you already run.",
      "Worker screening clearances confirmed for anyone whose role makes participant contact plausible.",
    ],
  },
  {
    n: "03",
    title: "The desk runs",
    body: "Cover starts, the structured handover lands every morning, and the monthly report shows every event.",
  },
];

function HowItStarts() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Band index="08" label="How it starts" tone="tint">
      <AnimatedSection>
        <h3
          className={`${DISPLAY} text-[30px] text-[#0B0E14] sm:text-[40px] md:text-[48px]`}
        >
          Three steps.
        </h3>
      </AnimatedSection>

      <div ref={ref} className="relative mt-10">
        {/* the rail, drawn once on entry */}
        <span
          aria-hidden
          className="absolute left-0 right-0 top-[10px] hidden h-px bg-[#DCE0E8] md:block"
        />
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.1, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ transformOrigin: "left" }}
          className="absolute left-0 right-0 top-[10px] hidden h-px bg-[#003DDB] md:block"
        />

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative md:pt-9">
              <motion.span
                aria-hidden
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.3 }}
                className="absolute left-0 top-[6px] hidden h-[9px] w-[9px] rotate-45 border border-[#003DDB] bg-[#F7F8FA] md:block"
              />
              <p
                className={`${NUM} text-[60px] font-medium leading-none text-[#EDEFF3] md:text-[76px] [-webkit-text-stroke:1px_#D3D8E2]`}
              >
                {s.n}
              </p>
              <h4 className="mt-4 text-[19px] font-semibold tracking-tight text-[#0B0E14] md:text-[21px]">
                {s.title}
              </h4>
              <p className="mt-3 max-w-[380px] text-[15px] leading-[1.62] text-[#454E5C]">
                {s.body}
              </p>
              {s.points ? (
                <ul className="mt-4 max-w-[380px] border-t border-[#DCE0E8]">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 border-b border-[#DCE0E8] py-3 last:border-b-0"
                    >
                      <span
                        aria-hidden
                        className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#003DDB]"
                      />
                      <span className="text-[14px] leading-[1.6] text-[#0B0E14]">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   13 · QUESTIONS
   The three objections a care provider raises before they will book:
   does this move our duty of care, can you make a clinical or a
   restrictive-practice call, and are we giving away the coordinator's
   job. All three answers are no, stated as no.

   Local to this page on purpose. The shared HomeFaq component carries
   the practice-side questions and must not be edited to serve this
   route. Same accordion behaviour, this page's tokens.
   ══════════════════════════════════════════════════════════════════ */

const FAQS = [
  {
    q: "Does this transfer our duty of care?",
    a: "No. Your duty of care stays exactly where it is. We coordinate, we escalate under your rules and we document. The responsibility for participant safety and for what gets reported remains yours.",
  },
  {
    q: "Can you authorise PRN medication or a restrictive practice?",
    a: "No, and we never will. Those decisions belong with your clinical people and your Authorised Program Officer. What we do is get the question to the right person quickly, and make sure the event is documented properly either way.",
  },
  {
    q: "Are we handing over our coordinator's job?",
    a: "Only the parts you choose. Some providers start with the nights and keep everything else in house. Others hand over the whole desk. The scope is written down before we take a call, and you can change it.",
  },
];

function Questions() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Band id="faq" index="09" label="Questions">
      <AnimatedSection>
        <h3
          className={`${DISPLAY} max-w-[820px] text-[30px] text-[#0B0E14] sm:text-[40px] md:text-[48px]`}
        >
          Straight answers.
        </h3>
      </AnimatedSection>

      <div className="mt-9 max-w-[880px] space-y-3">
        {FAQS.map((f, i) => (
          <AnimatedSection key={f.q} delay={i * 0.06}>
            <div className="overflow-hidden rounded-[10px] border border-[#E3E6EC] bg-[#F7F8FA]">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 px-5 py-[18px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#003DDB] md:px-6"
              >
                <span className="text-[15px] font-semibold leading-snug text-[#0B0E14] md:text-[16px]">
                  {f.q}
                </span>
                <ChevronDown
                  aria-hidden
                  className={`h-4 w-4 shrink-0 text-[#003DDB] transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i ? (
                <p className="border-t border-[#E3E6EC] px-5 py-4 text-[14.5px] leading-[1.62] text-[#454E5C] md:px-6 md:text-[15px]">
                  {f.a}
                </p>
              ) : null}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   14 · BOOK
   ══════════════════════════════════════════════════════════════════ */

function FinalCta() {
  return (
    <section
      id="book"
      className="scroll-mt-28 border-t border-white/10 bg-[#0A0D14]"
    >
      <div className={`${WRAP} ${PAD} ${BAND} border-x border-white/10`}>
        <div className="grid gap-8 lg:grid-cols-[124px_minmax(0,1fr)] lg:gap-12">
          <Rail index="10" label="Book" tone="dark" />
          <div className="min-w-0">
            <AnimatedSection>
              <h3
                className={`${DISPLAY} text-[34px] text-white sm:text-[48px] md:text-[58px]`}
              >
                Book an operations review.
              </h3>
              <p className="mt-5 max-w-[640px] text-[16px] leading-[1.62] text-white/65 md:text-[17px]">
                We&apos;ll map your after-hours load, coordination workload and
                record-keeping obligations, and show you exactly what
                we&apos;d take off your team first.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="mt-10 max-w-[940px]">
                <BookingEmbed
                  source="workforce-ops-desk"
                  title="Book an operations review with Novada"
                  tone="dark"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════════ */

export default function WorkforceOpsDeskPage() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <DeskNav />
      <StatusStrip />
      <BuiltFor />

      <main>
        <Hero />
        <Decision />
        <PhoneRings />
        <NightShift />
        <TwoWays />
        <Scope />
        <WhyNow />
        <Proof />
        <HowItStarts />
        <Questions />
        <FinalCta />
      </main>

      <DeskFooter />
      {/* ⚠️ TAGLINE CHANGED 2026-09-05. It was "Every call answered. Every
          shift covered. Everything measured." Two problems, both live on
          every scroll of the page. Our own Terms of Service expressly
          disclaim "that a shift will be filled, that a call-off will be
          covered", and they disclaim service levels generally, which "every
          call answered" also is. The founder has confirmed we do not make
          the shift-cover claim. The replacement describes how the desk runs
          without promising an outcome or a service level. */}
      <StickyCta
        label="Book an Operations Review"
        tagline="Run onshore. Recorded as it happens. Answered for by name."
      />
    </div>
  );
}
