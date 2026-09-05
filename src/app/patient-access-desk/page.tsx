"use client";

/*
 * /patient-access-desk : the clinic-side offer page.
 *
 * REBUILT 2026-08-27 into the home page's design system (Direction B):
 * white canvas, one continuous 1px hairline frame running the length of
 * the page (border-x on every band), a reserved ink surface (#0A0D14)
 * used only for desk moments, a left index rail whose micro-caps label
 * IS the section h2, Barlow Condensed bold caps for display, Space
 * Grotesk with tabular-nums for labels and figures, Inter for body,
 * #003DDB as the only chromatic accent for state, #B4501A as a scarce
 * signal colour. Reference: src/app/page.tsx.
 *
 * TRAFFIC MODEL: this is now a PAID-AD landing page. Cold traffic, one
 * audience (clinics), mostly mobile, arriving from a single ad. That
 * drives four things the home page does not do:
 *   1. ONE audience. The Workforce Ops Desk is never named in the hero.
 *      The only cross-link is in DeskFooter.
 *   2. The hiring decision is ON THE FOLD, in the h1, and restated
 *      immediately below it in band 01 rather than 40% down the page.
 *   3. A "Built for" self-identification strip sits directly under the
 *      status strip so a visitor recognises themselves in under a
 *      second. Static row, deliberately NOT a marquee: a marquee caused
 *      layout overflow.
 *   4. Type floor is 12px. The home page's 9px badges are not repeated
 *      here: every micro-caps label on this page is 12px, and every CTA
 *      is 14px/600 or larger.
 *
 * COPY: every sentence on this page is the legally reviewed copy from
 * the previous build, re-laid-out, not rewritten. The only additions are
 * interface labels (timestamps, state words, column headings, rail
 * labels) and the unbranded rating lockup already live on the home page
 * and in ProofStack.
 *
 * Binding copy rules apply in full: Australian spelling, no em dashes,
 * no pricing, nothing clinical, no guarantees, approved statistics only
 * with their source printed in the same row, no testimonials or client
 * names, never "virtual receptionist" or "answering service".
 *
 * The buyer fear this page disarms: losing control of the phones and the
 * practice software. Answered with alongside-not-instead, your-systems,
 * and the monthly report.
 *
 * SECTOR-FLUENCY PASS 2026-09-01. The page was competent but generic: an
 * Australian practice owner could not tell we had ever stood at a front
 * desk. Six bands were added, all of them supplied copy, plus one sourced
 * statistic:
 *   · "When the phone rings" (band 02, ink surface): what happens while
 *     reception is with a patient, answered through to logged, with the
 *     no-triage rule stated INSIDE the sequence rather than in a
 *     disclaimer nobody reads.
 *   · "The list" (band 03): the recall register. This is the most
 *     important addition on the page. It is the one job at the desk with
 *     nobody standing in front of it, and it is the reason a practice
 *     buys this rather than another salary.
 *   · "Before you choose anyone" (band 04): five questions, asked and
 *     deliberately NOT answered one by one. No competitor is named and
 *     nothing is asserted about anyone else's service.
 *   · Scope (band 06) now carries the five hard boundaries as boundaries.
 *   · "Access and privacy" (band 07): who can see what, and the small
 *     business exemption note.
 *   · "Questions" (band 11) and "The numbers" (band 12).
 *
 * ⚠️ VOCABULARY. Two Australian traps govern every word on this page.
 * First: the three letter word for a hole in the diary already means
 * something else in Australian healthcare. It is the patient's out of
 * pocket cost after a rebate, so it is never used as a scheduling word
 * here, and it is deliberately not written out anywhere in this file so
 * that it cannot be copied by accident into rendered output. Any hit an
 * audit returns for it is a Tailwind spacing class and nothing else. Say
 * empty slots, unfilled appointments or short-notice cancellations.
 * Second: a family of American front-desk and dental-marketing
 * vocabulary marks a supplier as foreign on sight. That family is
 * likewise absent from this file in copy, labels, alt text and comments
 * alike, and is deliberately not written out here either, for the same
 * reason. It covers the American word for a due-for-a-visit list, the
 * American words for the counter, the room and the person who runs it,
 * the whole family of American billing terms, and the marketing word for
 * a person who has not become a patient yet. What we say instead:
 * Australian dental practices say FTA, allied health says cancellations
 * and no-shows, and the pairing reads fluent to both. It is an enquiry,
 * spelled the Australian way, every time. It is reception, the practice
 * manager, the practice principal, the appointment book, the diary and
 * chair time. Everybody on this page is a patient the practice already
 * has, or a person who rang up wanting to become one.
 *
 * ⚠️ NOTHING CLINICAL, AND NO CLINICAL CAPABILITY. We have no clinicians.
 * Nothing here may imply that we triage, assess urgency or advise. The
 * only place those verbs may appear is inside a reviewed NEGATION, as in
 * band 02 step 04, the scope boundaries in band 06, and the FAQ.
 *
 * No metric, response time, call volume, conversion rate or client count
 * was invented. Every figure on this page prints its source in the same
 * row.
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
   Carries the human claim as interface chrome. A market saturated with
   automated call handling makes "Real people, onshore" the single most
   load-bearing line above the headline, so it sits first, on every
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

const BUILT_FOR = [
  "Dental",
  "Physio",
  "OT",
  "Psychology",
  "Podiatry",
  "Speech",
  "Vet",
];

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
   3 · THE ACCESS SURFACE (hero visual)
   The overnight timeline device ported from the home page, rebuilt
   around the clinic event this page already describes: a new patient
   call after close, answered, booked in the practice's own software,
   and logged for the monthly report. Every step is a service this page
   already lists. The whole panel is labelled illustrative.
   ══════════════════════════════════════════════════════════════════ */

type DeskStep = {
  time: string;
  label: string;
  state: string;
  delta?: string;
};

/* Re-scripted 2026-09-05 for the AI-inclusive position. The log now shows
   the practice's OWN AI receptionist taking the easy half and a person
   owning the half it hands back. The AI is labelled as the practice's so
   the reader never files us as the software; the deck under the h1 makes
   the tool optional. This is the page's argument in four lines. */
const EVENT = {
  time: "7:42 PM",
  source: "Clinic",
  text: "New patient enquiry, after close.",
};

const STEPS_LOG: DeskStep[] = [
  {
    time: "7:42 PM",
    label: "Answered by the practice's own AI receptionist",
    state: "Answered",
  },
  {
    time: "7:44 PM",
    label: "Handed back. The booking rules do not cover it",
    state: "Escalated",
    delta: "+2 min",
  },
  {
    time: "7:51 PM",
    label: "A coordinator rings back and books it in your software",
    state: "Booked",
    delta: "+9 min",
  },
  {
    time: "7:52 PM",
    label: "Logged for your monthly report",
    state: "Logged",
    delta: "+10 min",
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

function AccessSurface() {
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
          After close
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
          Answered after close, booked in your own software, logged for the
          report.
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
              Managed operations{" "}
              <span className="text-[#C3CAD5]">·</span> Patient access{" "}
              <span className="text-[#C3CAD5]">·</span> Australia
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className={`${DISPLAY} mt-4 text-[38px] text-[#0B0E14] sm:text-[54px] lg:text-[68px]`}
            >
              Add patient capacity.{" "}
              <span className="text-[#003DDB]">
                Not another front-desk salary.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-5 max-w-[560px] text-[15.5px] leading-[1.58] text-[#454E5C] md:text-[17px]"
            >
              Novada runs the patient access function for Australian
              practices: dental, physiotherapy, occupational therapy,
              psychology, podiatry, speech pathology and veterinary. Calls and
              bookings inside the software you already run. The recall list
              worked by phone, not by SMS. One report a month, measured against
              a baseline we take before we start. If you already run an AI
              receptionist, or you are about to, we configure it, supervise it
              and own what it hands back. Alongside your front desk, never
              instead of it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="mt-7"
            >
              <a href="#book" className={`${BTN_PRIMARY} w-full sm:w-auto`}>
                Book a Capacity Review
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
            <AccessSurface />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   5 · THE DECISION
   The hiring frame, restated in display type directly under the fold
   rather than two thirds of the way down the page, then the four things
   that are happening at the desk today, drawn as a log of work that
   reached the desk and left.
   ══════════════════════════════════════════════════════════════════ */

const PAINS = [
  "The phone rings out while your front desk is with the patient standing in front of them.",
  "Something answered after hours and nobody ever found out what happened next.",
  "The recall and reactivation list never actually gets run.",
  "Short-notice cancellations leave holes in today's book that nobody has time to fill.",
  "Patient access is split between reception, the software and whoever has a spare minute, so it belongs to nobody.",
  "You're about to add another admin salary just to keep up.",
];

function Decision() {
  return (
    <Band index="01" label="The decision" tone="tint">
      <AnimatedSection>
        <p
          className={`${DISPLAY} max-w-[940px] text-[28px] text-[#0B0E14] sm:text-[36px] md:text-[44px]`}
        >
          Before you add the next salary, we&apos;ll benchmark the workload
          against the actual cost of that hire:{" "}
          <span className="text-[#003DDB]">
            your numbers, not industry claims.
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

/* ════════════════════════════════════════════════════════════════════
   6 · WHAT YOU'RE BUYING  (replaced "When the phone rings", 2026-09-05)
   Ink surface, the first desk moment. The old band dramatised a
   coordinator answering the phone, which is the half of this offer that
   AI receptionists are commoditising. This band puts the three-layer
   stack from the ratified Offer Positioning Report in its place, on the
   same node rail, so the visitor is told what they are buying before they
   are told what we do.

   ⚠️ The third layer is "The accountability", never "the warranty". Our
   Terms of Service disclaim warranties on this website and the word is
   consumer-law charged in Australia. Substance unchanged.

   ⚠️ The closing line keeps the platform on the right side of the
   clinical boundary. Do not cut it for length. The category paragraph
   after it is where the noun is defined by non-example, which is the
   only way a practice owner should ever meet it.
   ══════════════════════════════════════════════════════════════════ */

const STACK: { state: string; title: string; body: string }[] = [
  {
    state: "Platform",
    title: "The platform",
    body: "Our own platform sits underneath the desk. Every call, enquiry and message is captured and logged the moment it happens, the record assembles itself as the work is done, and the monthly report is written out of that log rather than out of somebody's memory. Nothing is reconstructed after the fact.",
  },
  {
    state: "People",
    title: "The people",
    body: "A small onshore team, named, who learn how your practice runs. They own everything that takes judgment: the caller who is not in the script, the exception a tool hands back, the booking rule that needs somebody to decide, and the patient who has ignored three text messages and will only move for a phone call.",
  },
  {
    state: "Accountability",
    title: "The accountability",
    body: "A baseline measured inside your own software before we change anything. A monthly Patient Access Report of what actually happened against it. A complete log of every enquiry and every action we took, which stays yours. And a named Australian company that answers for the function, written into your services agreement.",
  },
];

function WhatYouAreBuying() {
  return (
    <Band index="02" label="What you're buying" tone="dark">
      <AnimatedSection>
        <h3
          className={`${DISPLAY} max-w-[820px] text-[30px] text-white sm:text-[40px] md:text-[48px]`}
        >
          Not staff. Not software. A function with an owner.
        </h3>
        <p className="mt-5 max-w-[720px] text-[15.5px] leading-[1.62] text-white/70 md:text-[17px]">
          Every engagement is the same three layers, and you can see all three
          from the first week.
        </p>
      </AnimatedSection>

      <div className="mt-9 border-l border-white/[0.12]">
        {STACK.map((s, i) => (
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
              <p className="mt-2.5 text-[17px] font-semibold tracking-tight text-white md:text-[18px]">
                {s.title}
              </p>
              <p className="mt-2 max-w-[820px] text-[15.5px] leading-[1.58] text-white/80 md:text-[16.5px]">
                {s.body}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.1}>
        <p className="mt-9 max-w-[820px] border-l-2 border-[#3A6CFF] pl-6 text-[17px] font-medium leading-[1.5] text-white md:text-[20px]">
          Our platform makes the record. Our people make the decisions.
        </p>
        <p className="mt-6 max-w-[760px] pl-6 text-[15px] leading-[1.62] text-white/65 md:text-[16px]">
          Three layers, one engagement, one team. This is managed operations.
          It is not admin help and it is not another piece of software, and it
          should not be compared to either. The comparison that matters is the
          hire you were about to make, and who answers when the function fails.
        </p>
      </AnimatedSection>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   7 · THE LIST
   The most important band on the page. Every other section describes
   work that announces itself: the phone rings, a patient walks in. This
   one describes the work that does not, and it is the whole commercial
   argument for the desk. It is deliberately laid out as a register with
   no state chips and no resolution, because this section is the problem
   set. The resolution is the closing line, which carries the page's
   scarce signal colour precisely once on a light surface.

   Note the vocabulary. These are empty slots, unfilled appointments and
   short-notice cancellations, never the three letter word that means an
   out of pocket cost to an Australian patient. And every person in this
   register is a patient the practice already has, or one who rang up
   wanting to become one. The marketing word for them is banned here.
   ══════════════════════════════════════════════════════════════════ */

const THE_LIST = [
  "Patients past their recall interval, sitting in a list nobody has had time to ring.",
  "The reactivation list: people who lapsed months ago and have not been contacted since.",
  "Short-notice cancellations, where the appointment is worth something for about two hours.",
  "The ones who did not attend, never followed up, who quietly stop coming.",
  "New patient enquiries that arrive after five, or on a Saturday, when nobody is at the desk.",
];

function TheList() {
  return (
    <Band index="04" label="The list" tone="tint">
      <AnimatedSection>
        <h3
          className={`${DISPLAY} max-w-[860px] text-[30px] text-[#0B0E14] sm:text-[40px] md:text-[48px]`}
        >
          The recall list is the first thing that gets dropped.
        </h3>
        <p className="mt-6 max-w-[820px] text-[16px] leading-[1.62] text-[#454E5C] md:text-[17px]">
          Not because anyone is slack. Because the recall list is the only job
          at the front desk with nobody standing in front of it. The phone
          rings, a patient walks in, and the half-worked list waits until
          tomorrow. Then tomorrow does the same thing. No software has fixed
          this, because it was never a software problem.
        </p>
      </AnimatedSection>

      <div className="mt-9 border-t border-[#D3D8E2]">
        {THE_LIST.map((line, i) => (
          <AnimatedSection key={line} delay={i * 0.05}>
            <div className="grid grid-cols-[34px_minmax(0,1fr)] items-start gap-x-4 border-b border-[#E3E6EC] py-4 transition-colors duration-200 hover:bg-[#F7F8FA] sm:grid-cols-[52px_minmax(0,1fr)] sm:px-3">
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
        <p className="mt-8 max-w-[860px] border-l-2 border-[#B4501A] pl-5 text-[17px] font-medium leading-[1.5] text-[#0B0E14] md:text-[21px]">
          An SMS blast is not the same as somebody ringing and having the
          conversation. Software makes the list. We work it.
        </p>
      </AnimatedSection>
    </Band>
  );
}

/* ════════════════════════════════════════════════════════════════════
   12 · MORE THAN ONE SITE  (added 2026-09-05)
   The multi-site and dental-group argument from the Strategic Direction
   Memo: the back office is where scale wins, and an independent group can
   buy that scale without selling. Argued from administration economics,
   deliberately NOT from any claim about which software resists AI, which
   would be a capability claim about named vendors and a closing window.
   ══════════════════════════════════════════════════════════════════ */

const MULTI_SITE = [
  "One set of booking rules across every site, and one place an enquiry lands no matter which site the patient rang.",
  "One recall list, worked at each practitioner's own interval, at every site.",
  "One report a month, with each site's numbers next to the others.",
  "A new site opens onto a desk that is already running, instead of onto a hire and a handover.",
];

function MultiSite() {
  return (
    <Band index="08" label="More than one site" tone="tint">
      <AnimatedSection>
        <h3
          className={`${DISPLAY} max-w-[860px] text-[30px] text-[#0B0E14] sm:text-[40px] md:text-[48px]`}
        >
          The back office is where scale actually shows up.
        </h3>
        <div className="mt-6 max-w-[820px] space-y-4 text-[16px] leading-[1.62] text-[#454E5C] md:text-[17px]">
          <p>
            A group with three sites usually has three front desks, three ways
            of answering the phone and three versions of the recall list. The
            clinical side does not scale that way and should not. The
            administration side does, and it is the only part of a group that
            gets cheaper to run the more of it there is.
          </p>
          <p>
            What a corporate group actually holds that an independent one does
            not is a single back office running every site. That is buyable,
            and buying it does not require selling anything.
          </p>
        </div>
      </AnimatedSection>

      <div className="mt-9 border-t border-[#D3D8E2]">
        {MULTI_SITE.map((line, i) => (
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
    </Band>
  );
}

/* ════════════════════════════════════════════════════════════════════
   8 · SUPERVISION  (replaced "Before you choose anyone", 2026-09-05)
   The crux of the inverted position, and the band the page is judged
   on. The organising insight from the ratified report: every AI
   receptionist sold is an employee nobody supervises.

   THREE RULES GOVERN EVERY AI SENTENCE HERE, and they are the reason
   this band survives Section 6 of the report:
    1. Never a product, never a company, never a capability claim about
       anyone else. Every criticism is aimed at the practice's
       ARRANGEMENT (who is rostered to check), never at the software.
    2. Open by telling them to buy it. The first four sentences are the
       most generous thing anyone in this market says about these tools.
       That is what buys the right to the next paragraph.
    3. Reframe escalation, an advertised feature, as a compliment, then
       follow the handed-back call one step further than the vendor's
       page does: into the practice, onto a person already with a patient.

   The five questions were the old band's device. They are re-aimed so
   they apply equally to the software, the front desk and to us, which
   is what stops the band reading as a comparison table.
   ══════════════════════════════════════════════════════════════════ */

const FIVE_QUESTIONS = [
  "When a booking goes in wrong, who finds it before the patient arrives?",
  "When the caller is not in the script, who does the call get handed to?",
  "Who rings the patient who has ignored three text messages?",
  "Who reads a month of this and changes how next month runs?",
  "When it does not work, whose name is on it?",
];

function Supervision() {
  return (
    <Band index="03" label="Supervision">
      <AnimatedSection>
        <h3
          className={`${DISPLAY} max-w-[900px] text-[30px] text-[#0B0E14] sm:text-[40px] md:text-[48px]`}
        >
          Buy the AI receptionist. Then ask who supervises it.
        </h3>
        <div className="mt-6 max-w-[820px] space-y-4 text-[16px] leading-[1.62] text-[#454E5C] md:text-[17px]">
          <p>
            AI receptionists are good and they are getting better. In cloud
            practice software they now write a booking into the diary while
            the caller is still on the line. If your practice runs one, keep
            it. If you are about to buy one, buy it.
          </p>
          <p>
            Then look at what you have just added: a new pair of hands at your
            front desk, working an unfamiliar job, with nobody rostered to
            check what it did.
          </p>
          <p>
            Escalation is the part every one of these tools does well, and it
            is the part practices are least ready for. When the caller is not
            in the script the call gets handed back, and it gets handed back to
            whoever is already busy. A booking can go into the wrong
            practitioner&apos;s column; people do that too, and the question is
            the same either way, which is who finds it before the patient
            arrives. An enquiry that did not book is a decision somebody has to
            make tomorrow morning. And at the end of the month somebody has to
            read all of it and change how next month runs.
          </p>
          <p>
            None of that is a criticism of the software. It is the job the
            software does not have. Every practice management system on this
            page already has a recall list built into it. The list was never
            the hard part. Ringing it was.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.08}>
        <p className="mt-8 max-w-[860px] border-l-2 border-[#B4501A] pl-5 text-[17px] font-medium leading-[1.5] text-[#0B0E14] md:text-[21px]">
          Every AI receptionist sold is an employee nobody supervises.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="mt-8 max-w-[820px] text-[16px] leading-[1.62] text-[#454E5C] md:text-[17px]">
          We are not another one of them and we are not against them. We run
          the function they sit inside. We configure the tool you have or the
          one you choose, we read what it did every week, we take everything
          it hands back, and we ring the people it was never going to move. One
          team owns the whole thing, and one report a month tells you how it
          went.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.12}>
        <p className={`${MICRO} mt-12 text-[#9AA3B1]`}>
          Five questions. Ask them of your software, ask them of your front
          desk, and ask them of us.
        </p>
      </AnimatedSection>

      <div className="mt-4 border-t border-[#D3D8E2]">
        {FIVE_QUESTIONS.map((q, i) => (
          <AnimatedSection key={q} delay={i * 0.06}>
            <div className="grid grid-cols-[34px_minmax(0,1fr)] items-start gap-x-4 gap-y-2 border-b border-[#E3E6EC] py-5 transition-colors duration-200 hover:bg-[#F7F8FA] sm:grid-cols-[52px_minmax(0,1fr)_96px] sm:px-3">
              <span className={`${MICRO} ${NUM} pt-1 text-[#003DDB]`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[15.5px] font-medium leading-[1.55] text-[#0B0E14] md:text-[17px]">
                {q}
              </p>
              <span
                className={`${MICRO_TIGHT} col-start-2 justify-self-start rounded-[4px] border border-[#DCE0E8] bg-white px-2 py-[3px] text-[#5B6472] sm:col-start-3 sm:justify-self-end`}
              >
                Ask it
              </span>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.1}>
        <div className="mt-9 max-w-[860px] rounded-[12px] border border-[#E3E6EC] bg-[#F7F8FA] p-6 md:p-7">
          <p className={`${MICRO} text-[#9AA3B1]`}>Our answer</p>
          <p className="mt-4 text-[16px] font-medium leading-[1.58] text-[#0B0E14] md:text-[18px]">
            One name against all five, and it is a person, not a setting. The
            monthly report is where you check we meant it.
          </p>
        </div>
      </AnimatedSection>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   9 · WHAT WE RUN
   The software line names the systems Australian practices actually run,
   in full, because a practice owner scans that line for their own and
   stops reading if it is not there. "And whatever else you already run"
   is doing real work: it is the promise that nothing migrates.
   ══════════════════════════════════════════════════════════════════ */

const WE_RUN = [
  "Calls, web enquiries and messages, answered in your practice name, including evenings and Saturday.",
  "Your AI receptionist, if you have one or want one: configured to your booking rules, reviewed every week, and every call it hands back comes to us instead of to your front desk.",
  "Bookings, rescheduling and new-patient intake, directly in your own software: Cliniko, Halaxy, Nookal, PracSuite, Dental4Windows, Praktika, Exact, Best Practice, ezyVet and whatever else you already run.",
  "Recalls and reactivation, worked every week, by phone, at the interval your practitioner set.",
  "Short-notice cancellations filled, and same-day follow-up on FTAs and no-shows.",
  "A monthly Patient Access Report: every enquiry, how fast it was answered, what booked, and the reason for the ones that did not, measured against the baseline we took before we started.",
];

function WhatWeRun() {
  return (
    <Band index="05" label="What we run">
      <AnimatedSection>
        <h3
          className={`${DISPLAY} max-w-[820px] text-[30px] text-[#0B0E14] sm:text-[40px] md:text-[48px]`}
        >
          One desk owns all of it.
        </h3>
        <p className="mt-5 max-w-[720px] text-[15.5px] leading-[1.62] text-[#454E5C] md:text-[17px]">
          One engagement, one team. You do not assemble this out of parts.
        </p>
      </AnimatedSection>

      <div className="mt-9 border-t border-[#E3E6EC]">
        {WE_RUN.map((w, i) => (
          <AnimatedSection key={w} delay={i * 0.05}>
            <div className="grid grid-cols-[34px_minmax(0,1fr)] items-start gap-x-4 border-b border-[#E3E6EC] py-5 sm:grid-cols-[52px_minmax(0,1fr)] sm:px-3">
              <span className={`${MICRO} ${NUM} pt-1 text-[#003DDB]`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[15px] leading-[1.6] text-[#0B0E14] md:text-[16px]">
                {w}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   10 · SCOPE
   The section a cautious practice principal reads first, and the one
   that has to survive being read by their lawyer. The five rows below
   the standing paragraph are the boundaries stated AS boundaries, not
   softened: no triage, the recall interval belongs to the practitioner,
   we never solicit reviews, nothing goes out unapproved, and we never
   touch the clinical record. The tags are interface labels only.

   Row 02 is the one a reader will not expect and is the reason it is
   here. Every incentive in this market pushes a contractor to over-ring
   a recall list. Saying out loud that the interval is the
   practitioner's, and that we never contact a patient to hit a number,
   is the difference between an operations desk and a call centre.
   ══════════════════════════════════════════════════════════════════ */

const BOUNDARIES = [
  {
    tag: "Never",
    body: "We do not triage. We do not assess urgency, and we do not give clinical advice. If a call needs a clinician it goes to your team, under a protocol we agree before we take a single call.",
  },
  {
    tag: "Your rules",
    body: "Recall contact follows the interval your practitioner set. We never contact a patient to hit a number.",
  },
  {
    tag: "Never",
    body: "We do not sell software. If an AI receptionist suits your practice, you hold that contract yourself, and you can change it or end it without changing us.",
  },
  {
    tag: "Never",
    body: "We do not ask your patients for reviews or testimonials.",
  },
  {
    tag: "Your approval",
    body: "Nothing goes out in your practice's name unless you have approved the wording.",
  },
  {
    tag: "Never",
    body: "We never touch the clinical record. We work the appointment book, the enquiries and the follow-ups.",
  },
];

function Scope() {
  return (
    <Band index="06" label="Scope" tone="tint">
      <AnimatedSection>
        <p className={`${MICRO} text-[#9AA3B1]`}>What we don&apos;t do</p>
        <h3
          className={`${DISPLAY} mt-4 max-w-[820px] text-[30px] text-[#0B0E14] sm:text-[40px] md:text-[48px]`}
        >
          Alongside your front desk, not instead of it.
        </h3>
        <p className="mt-6 max-w-[860px] border-l-2 border-[#003DDB] pl-5 text-[16px] leading-[1.62] text-[#454E5C] md:text-[17px]">
          Anything clinical is out of scope. No triage, no advice; urgent
          matters route straight to your team under an agreed protocol. And
          nothing at the front counter: greeting, payments and patient care
          stay with your people.
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
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   11 · ACCESS AND PRIVACY
   The second question a practice principal asks, straight after "do you
   touch the clinical record". Answered as a specification: named
   logins, least privilege, onshore, a written agreement, and a line in
   the practice's own privacy policy.

   The closing note carries the page's scarce signal colour because it
   is the one thing on this page most practices do not know: a business
   that provides a health service is not covered by the small business
   exemption from the Privacy Act, whatever its turnover. We state the
   obligation as theirs, and ourselves as working inside it. We never
   claim a compliance status of our own, and we never claim alignment
   with a regulator that does not regulate us.
   ══════════════════════════════════════════════════════════════════ */

const ACCESS_ITEMS = [
  "Named coordinators, each with their own login under your practice's own access control. Never a shared account.",
  "Permissions limited to the parts of your software the work actually needs.",
  "Your patient information stays in your systems, and stays in Australia. Our people are in Australia too. Under Australian Privacy Principle 8 and section 16C of the Privacy Act 1988, a practice that sends patient information to an overseas recipient is still accountable for what that recipient does with it. Nothing here leaves the country.",
  "A written agreement that mirrors your obligations under the Australian Privacy Principles.",
  "We can be named in your practice's privacy policy as a contracted service provider.",
];

function AccessPrivacy() {
  return (
    <Band index="07" label="Access and privacy">
      <AnimatedSection>
        <h3
          className={`${DISPLAY} max-w-[820px] text-[30px] text-[#0B0E14] sm:text-[40px] md:text-[48px]`}
        >
          What we can see, and what we cannot.
        </h3>
      </AnimatedSection>

      <div className="mt-9 border-t border-[#E3E6EC]">
        {ACCESS_ITEMS.map((item, i) => (
          <AnimatedSection key={item} delay={i * 0.05}>
            <div className="grid grid-cols-[34px_minmax(0,1fr)] items-start gap-x-4 border-b border-[#E3E6EC] py-5 sm:grid-cols-[52px_minmax(0,1fr)] sm:px-3">
              <span className={`${MICRO} ${NUM} pt-1 text-[#003DDB]`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[15px] leading-[1.6] text-[#0B0E14] md:text-[16px]">
                {item}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.1}>
        <div className="mt-10 max-w-[900px] rounded-[12px] border border-[#E3E6EC] bg-[#F7F8FA] p-6 md:p-7">
          <h4 className={`${MICRO} text-[#B4501A]`}>
            The small business exemption
          </h4>
          <p className="mt-4 text-[15.5px] leading-[1.62] text-[#0B0E14] md:text-[16.5px]">
            Practices that provide a health service do not get the small
            business exemption from the Privacy Act, whatever their turnover.
            Your obligations are the ones we work inside.
          </p>
        </div>
      </AnimatedSection>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   12 · WHY NOW
   Rendered as a citations table. Every figure prints its source in the
   same row, which is binding copy rule 6: a statistic never travels
   away from the source that carries it.

   The ABS access figure was added 2026-09-01 and sits at the top of the
   table, because it is the only sourced number in this market measuring
   the thing this desk actually changes: whether a person who wanted an
   appointment got one. It is deliberately given the same row treatment
   as the three below it, no larger and no louder, and it prints its
   source in the same column as everything else.
   ══════════════════════════════════════════════════════════════════ */

const EVIDENCE = [
  {
    figure: "20.2%",
    body: "20.2% of Australians delayed or did not see a GP in 2024-25 for reasons other than cost, including that the service was not available when required or the wait was too long. That is up from 17.4% the year before.",
    source: "Australian Bureau of Statistics, Patient Experiences 2024-25",
  },
  {
    figure: "25%",
    body: "25% of Australians delayed seeing or did not see a dental professional in 2024-25. Cost was the reason for 16%. Not every barrier is price.",
    source: "Australian Bureau of Statistics, Patient Experiences 2024-25",
  },
  {
    figure: "12%",
    body: "Superannuation reached 12% on 1 July 2025, the last step of the increase, and award wages are reviewed every year with effect from 1 July. The cost of the next hire goes up on a schedule.",
    source: "Australian Taxation Office; Fair Work Commission annual wage review",
  },
];

/* ⚠️ THREE ROWS WERE REMOVED FROM THIS TABLE ON 2026-09-05, and nothing may
   be added back that is not in the approved statistics library. Section 6 of
   the ratified Offer Positioning Report (5 September 2026) reads:
   "Statistics only from the approved library, each with its source in the
   same breath."

     · "$87,740 to $114,827" (BMJ Open, 2025). Two Queensland physiotherapy
       clinics presented as a per-clinic figure, and a close relative of the
       "$X lost per missed call" family the sector research bans outright.
       That research also warns of a widely misattributed Australian
       non-attendance study. Restore only with volume, journal and DOI, and
       only with the two-clinic sample stated in the row itself.
     · "46% vs 13%" (CPA Australia). The survey is Asia-Pacific and the
       Australia-only split was never confirmed.
     · "+4.75%" award increase, 1 July 2026. Unverified. The superannuation
       half survives in the 12% row above, which states the annual review
       cycle as a structural fact rather than asserting a rate.

   This matters more on this page than anywhere else on the site. The band
   directly below argues that this market's most-quoted numbers dissolve
   when you trace them, and offers a measured baseline instead. A figure
   here that cannot survive the same test destroys that argument and the
   positioning built on it. */

function WhyNow() {
  return (
    <Band index="09" label="Why now">
      <AnimatedSection>
        <h3
          className={`${DISPLAY} max-w-[820px] text-[30px] text-[#0B0E14] sm:text-[40px] md:text-[48px]`}
        >
          Why practices are looking at this now.
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
                className={`${NUM} text-[26px] font-medium leading-[1.05] text-[#003DDB] md:text-[32px]`}
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
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   13 · PROOF OF OPERATIONS
   Ink surface. The second desk moment: the one place on the page that
   asserts an operation already running, so it keeps the reserved colour
   it shares with band 02.
   ══════════════════════════════════════════════════════════════════ */

const PROOF_TAGS = [
  "Real people, onshore",
  "Australian owned",
  "Nothing clinical, ever",
  "Inside your own software",
];

function Proof() {
  return (
    <Band index="10" label="Proof" tone="dark">
      {/* Rewritten 2026-09-05 and absorbing the old "The numbers" band.
          The ratified report's honesty doctrine requires saying plainly
          that there is no clinic client yet. Stated flatly, in bold, in the
          first sentence, then answered in the same breath by an operation
          that runs tonight and by the baseline. "You will see it in your
          own numbers before we tell you" is a stronger trust claim than any
          testimonial could be, which is why this converts rather than
          apologises. The same admission is repeated once in the FAQ for the
          sceptic who scrolls straight there. */}
      <AnimatedSection>
        <p className={`${MICRO} text-white/45`}>
          What we can prove, and what we cannot
        </p>
        <p className="mt-6 max-w-[900px] border-l-2 border-[#3A6CFF] pl-6 text-[19px] font-medium leading-[1.42] text-white sm:text-[24px] md:text-[30px]">
          We will not put proof on this page that we do not have.
        </p>
        <div className="mt-8 max-w-[760px] space-y-5 pl-6 text-[15.5px] leading-[1.62] text-white/75 md:text-[16.5px]">
          <p>
            <span className="font-semibold text-white">
              We do not have a clinic client to show you yet.
            </span>{" "}
            This desk is new and the practices we are speaking to now will be
            the first. We are not going to invent a case study, borrow an
            American one, or print a number here that we cannot trace back to
            a source.
          </p>
          <p>
            <span className="font-semibold text-white">
              What we do have is an operation that already runs.
            </span>{" "}
            Our team runs a 24/7 coordination desk for Australian care
            providers: every night of the year, inside their systems and to
            their protocols. The people, the platform and the handover
            discipline described on this page are the ones running that desk
            tonight.
          </p>
          <p>
            <span className="font-semibold text-white">
              And we have the measurement.
            </span>{" "}
            Before we change anything at your practice we take a baseline
            inside your own software. Every month after that, the report shows
            what happened against it. If the desk is not working you will see
            it in your own numbers before we tell you, and the engagement is
            month to month, so you can leave.
          </p>
          <p>
            You will see a lot of numbers in this market. We checked them.
            Most cannot be traced to any source and several are American
            figures dressed up as Australian ones. So the only numbers we will
            ever put in front of you are your own: what came in, how fast it
            was answered, what booked, and why the rest did not.
          </p>
        </div>
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
   14 · HOW IT STARTS
   ══════════════════════════════════════════════════════════════════ */

const STEPS = [
  {
    n: "01",
    title: "The Capacity Review",
    body: "We map what actually reaches your desk: calls, enquiries, recalls, cancellations and FTAs. We look at what you run today, including anything that answers for you. Then we put that next to the cost of the hire you were considering.",
  },
  {
    n: "02",
    title: "The baseline",
    body: "Week one, before we change anything. We measure your current numbers inside your own software, and that measurement is what every monthly report is scored against for as long as we run the desk.",
  },
  {
    n: "03",
    title: "The desk runs",
    body: "We take the function. Your tools stay yours, your software stays the system of record, and from the first month the report shows every enquiry, every booking, and everything we did not manage to save.",
  },
];

function HowItStarts() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Band index="11" label="How it starts" tone="tint">
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
            </div>
          ))}
        </div>
      </div>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   15 · QUESTIONS
   The six objections a practice principal raises before they will book.
   Note what the answers do NOT do. The triage answer warns the reader to
   be careful of anyone offering to triage, which is a warning about a
   practice, not an assertion about any named business. The mistakes
   answer volunteers a failure mode, which is the only kind of trust this
   page can earn without a testimonial. The lock-in answer states the
   term of the engagement and says nothing whatsoever about price.

   Local to this page on purpose. The shared HomeFaq component serves the
   home route and must not be edited to serve this one. Same accordion
   behaviour, this page's tokens.
   ══════════════════════════════════════════════════════════════════ */

const FAQS = [
  {
    q: "Do you replace our receptionist?",
    a: "No. Front of house needs people at the counter, and your patients should see the same faces. We take the phone-and-schedule load so your team can look after whoever is standing in front of them, and so the recall list actually gets worked.",
  },
  {
    q: "We already run an AI receptionist. Where does that leave you?",
    a: "Running it. We configure it to your booking rules, we review what it did every week, and every call it cannot finish comes to us instead of to your front desk. You keep that contract yourself and you can change it without changing us. And if you do not have one and do not want one, nothing about the desk changes. The tool is optional. The desk is not.",
  },
  {
    q: "Do you triage?",
    a: "No, and we never will. We do not assess urgency and we do not give clinical advice. Anything clinical goes to your team under a protocol we agree in writing before we take a call. Be careful of anyone in this market who offers to triage for you.",
  },
  {
    q: "What software do you work in?",
    a: "Yours. Cliniko, Halaxy, Nookal, PracSuite, Dental4Windows, Praktika, Exact, Best Practice, ezyVet and whatever else you already run. Nothing migrates, and your software stays the system of record.",
  },
  {
    q: "Who can see our patient information?",
    a: "Named coordinators, each with their own login under your access control, with permissions limited to the work. Never a shared account. Your information stays in your systems and stays in Australia, under a written agreement that mirrors your Privacy Act obligations.",
  },
  {
    q: "What happens if you make a mistake in the book?",
    a: "We tell you the same day, in the handover, with what happened and what we did about it. Errors are logged in the monthly report alongside everything else. A desk that hides its mistakes is worse than no desk.",
  },
  {
    q: "How many clinics do you run this for?",
    a: "None yet, and we are not going to pretend otherwise. This desk is new and the practices we are speaking to now will be the first. What is not new is the operation underneath it: our team runs a 24/7 coordination desk for Australian care providers, every night of the year. And we do not ask you to take the result on trust, because your baseline is measured inside your own software before we start.",
  },
  {
    /* Corrected 2026-09-05 on the founder's confirmation. This previously
       read "the first three months cover the work of learning your
       practice. After that, thirty days' notice", which described a
       three-month minimum term. That is lock-in, and it contradicted the
       ratified position (month to month, no lock-in) as well as the
       company's own offer documents. Nothing else on the site stated a
       term, so this was the single source of the contradiction. */
    q: "Are we locked in?",
    a: "No. The engagement is month to month, with no minimum term, no lock-in and no exit fee. Your playbook and your data stay yours either way.",
  },
];

function Questions() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Band id="faq" index="12" label="Questions">
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
   17 · BOOK
   ══════════════════════════════════════════════════════════════════ */

function FinalCta() {
  return (
    <section
      id="book"
      className="scroll-mt-28 border-t border-white/10 bg-[#0A0D14]"
    >
      <div className={`${WRAP} ${PAD} ${BAND} border-x border-white/10`}>
        <div className="grid gap-8 lg:grid-cols-[124px_minmax(0,1fr)] lg:gap-12">
          <Rail index="13" label="Book" tone="dark" />
          <div className="min-w-0">
            <AnimatedSection>
              <h3
                className={`${DISPLAY} text-[34px] text-white sm:text-[48px] md:text-[58px]`}
              >
                Book a capacity review.
              </h3>
              <p className="mt-5 max-w-[620px] text-[16px] leading-[1.62] text-white/65 md:text-[17px]">
                We will map what reaches your desk, look at whatever answers
                for you today, and show you exactly what we would measure in
                your first thirty days. Nothing is committed at the end of it.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="mt-10 max-w-[940px]">
                <BookingEmbed
                  source="patient-access-desk"
                  title="Book a capacity review with Novada"
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

export default function PatientAccessDeskPage() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <DeskNav />
      <StatusStrip />
      <BuiltFor />

      <main>
        <Hero />
        <Decision />
        <WhatYouAreBuying />
        <Supervision />
        <TheList />
        <WhatWeRun />
        <Scope />
        <AccessPrivacy />
        <MultiSite />
        <WhyNow />
        <Proof />
        <HowItStarts />
        <Questions />
        <FinalCta />
      </main>

      <DeskFooter />
      {/* Tagline changed 2026-09-05. Was "Every call answered. Every booking
          made. Everything measured.", which is the old offer and reads as a
          service level our Terms of Service disclaim. */}
      <StickyCta
        label="Book a Capacity Review"
        tagline="We run it, and we answer for it."
      />
    </div>
  );
}
