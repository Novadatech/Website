"use client";

/*
 * Home page. Design direction B, chosen by the founder 2026-08-27 after a
 * three-way comparison reviewed independently by a conversion specialist
 * and a brand/positioning specialist.
 *
 * TRAFFIC MODEL (founder, 2026-08-27) — this drives the page's job:
 *   This page serves ORGANIC SEARCH traffic, so it deliberately presents
 *   BOTH offers and routes the visitor onward. Paid ads do NOT land here:
 *   each ad goes to its own offer page (/patient-access-desk for clinics,
 *   /workforce-ops-desk for care providers), which is where the
 *   single-audience, cold-traffic optimisation belongs.
 *   A conversion reviewer flagged "the hero serves two buyers" as a fault.
 *   That critique assumed paid traffic and does NOT apply here. Serving
 *   both offers is correct on this page. Do not "fix" it.
 *
 * BINDING COPY RULES (brief section 9), do not relax without sign-off:
 *  - Australian spelling. No em dashes anywhere.
 *  - No pricing. No numbers, ranges, anchors or hints.
 *  - Never claim we replace a receptionist or any whole role.
 *  - Nothing clinical: no triage, assessment or advice language.
 *  - No guarantees, ROI promises or performance claims.
 *  - Only the three approved statistics, each printing its source. The
 *    168/38 figure is arithmetic, not a statistic, and carries no source.
 *  - Rating stays unbranded, links to /case-study. No client names, logos
 *    or written testimonials.
 *  - Any depicted desk activity is illustrative and must be labelled so.
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import HomeFaq from "@/components/desk/HomeFaq";
import BookingEmbed from "@/components/desk/BookingEmbed";
import StickyCta from "@/components/desk/StickyCta";

/* ══════════════════════════════════════════════════════════════════
   DESIGN TOKENS
   Written as complete class strings so the Tailwind scanner sees the
   literal arbitrary values. Never interpolate a colour into a class.
   ══════════════════════════════════════════════════════════════════ */

const WRAP = "mx-auto w-full max-w-[1240px]";
const PAD = "px-5 sm:px-8 lg:px-12";
const BAND = "py-16 md:py-24";

/** Micro-caps interface label. Space Grotesk stands in for a technical grotesk. */
/* Raised from 10px on 2026-08-27 so the home page matches the 12px floor the
   offer pages use. This class carries the left-rail labels, and those labels
   ARE the section headings, so they were the smallest structural type on the
   page. Tracking is tightened from 0.16em to 0.14em so the longer labels
   still fit the rail at 390px. */
const MICRO =
  "font-supply text-[12px] font-medium uppercase tracking-[0.14em]";
/* Raised from 9px on 2026-08-27. A conversion review found the 9px class was
   carrying the timeline card's ANSWERED / BOOKED / COVERED / HANDED OVER
   badges, which are the page's proof, rendered as its smallest type. Nothing
   meaningful goes below 11px now. */
const MICRO_SM =
  "font-supply text-[12px] font-medium uppercase tracking-[0.12em]";
/** Any figure a reader might compare to another figure gets tabular nums. */
const NUM = "font-supply tabular-nums";

const DISPLAY =
  "font-condensed font-bold uppercase leading-[0.92] tracking-[-0.012em]";

const BTN_PRIMARY =
  "group inline-flex items-center justify-center gap-2 rounded-[6px] bg-[#003DDB] px-6 py-3.5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#0030AE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2";
const BTN_GHOST =
  "group inline-flex items-center justify-center gap-2 rounded-[6px] border border-[#D3D8E2] bg-white px-6 py-3.5 text-[14px] font-semibold text-[#0B0E14] transition-colors duration-200 hover:border-[#003DDB] hover:text-[#003DDB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2";

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

/** Counts to a target once activated. Eased, rounded, tabular safe. */
function useCountUp(target: number, active: boolean, duration = 1000) {
  const [value, setValue] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!active) return;
    if (reduced) {
      setValue(target);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration, reduced]);

  return value;
}

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
        <h2
          className={`${MICRO} ${dark ? "text-white/75" : "text-[#0B0E14]"}`}
        >
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
  children,
}: {
  id?: string;
  index: string;
  label: string;
  tone?: Tone;
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
        className={`${WRAP} ${PAD} ${BAND} border-x ${
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
   Sits directly under the nav and carries the hero small line as
   interface chrome, plus a live Sydney wall clock.
   ══════════════════════════════════════════════════════════════════ */

function StatusStrip() {
  const clock = useSydneyClock();
  return (
    <div className="border-b border-[#E3E6EC] bg-[#F7F8FA]">
      <div
        className={`${WRAP} ${PAD} flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-x border-[#E3E6EC] py-2.5`}
      >
        <span className={`${MICRO} flex items-center gap-2.5 text-[#5B6472]`}>
          <span className="relative flex h-[6px] w-[6px]" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#003DDB] opacity-50" />
            <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-[#003DDB]" />
          </span>
          Sydney
          <span className={`${NUM} text-[#0B0E14]`}>{clock ?? "00:00:00"}</span>
        </span>
        <span className={`${MICRO} text-[#7B8492]`}>
          Real people, onshore <span className="text-[#C3CAD5]">·</span>{" "}
          Australian owned <span className="text-[#C3CAD5]">·</span> Nothing
          clinical, ever
        </span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   2 · THE OPERATIONS SURFACE (hero visual)
   Two approved events resolving overnight. Every timestamp and label
   is from the approved list. The elapsed figures are arithmetic on
   those timestamps. The whole panel is labelled illustrative.
   ══════════════════════════════════════════════════════════════════ */

type DeskStep = {
  time: string;
  label: string;
  state: string;
  delta?: string;
};

type DeskEvent = {
  time: string;
  source: string;
  text: string;
  steps: DeskStep[];
};

const NIGHT: DeskEvent[] = [
  {
    time: "7:42 PM",
    source: "Clinic",
    text: "New patient call, after close.",
    steps: [
      {
        time: "7:42 PM",
        label: "Answered in your practice name",
        state: "Answered",
      },
      {
        time: "7:46 PM",
        label: "Booked in your practice software",
        state: "Booked",
        delta: "+4 min",
      },
    ],
  },
  {
    time: "4:03 AM",
    source: "Care",
    text: "Support worker calls off a 6am shift.",
    steps: [
      {
        time: "4:19 AM",
        label: "Cover arranged from your approved team",
        state: "Covered",
        delta: "+16 min",
      },
      {
        time: "7:55 AM",
        label: "In your morning handover",
        state: "Handed over",
        delta: "+3 h 36 min",
      },
    ],
  },
];

const TOTAL_STEPS = 4;

function StateChip({ step, resolved }: { step: DeskStep; resolved: boolean }) {
  return (
    <span className="ml-auto flex shrink-0 items-center gap-2.5">
      {step.delta ? (
        <span
          className={`${NUM} text-[11px] transition-opacity duration-500 ${
            resolved ? "text-white/35 opacity-100" : "opacity-0"
          }`}
        >
          {step.delta}
        </span>
      ) : null}
      <span
        className={`${MICRO_SM} inline-flex items-center gap-1.5 rounded-[4px] border px-2 py-[3px] transition-colors duration-500 ${
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

function OperationsSurface() {
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
          className={`${MICRO_SM} rounded-[4px] border border-dashed border-white/20 px-2 py-[3px] text-white/45`}
        >
          Illustrative example
        </span>
      </div>

      {/* column header */}
      <div className="hidden items-center gap-x-3 border-b border-white/[0.07] bg-white/[0.02] px-5 py-2 sm:flex">
        <span className={`${MICRO_SM} w-[58px] shrink-0 text-white/30`}>
          Time
        </span>
        <span className={`${MICRO_SM} w-[74px] shrink-0 text-white/30`}>
          Source
        </span>
        <span className={`${MICRO_SM} flex-1 text-white/30`}>Event</span>
        <span className={`${MICRO_SM} text-white/30`}>State</span>
      </div>

      {/* the night */}
      <div>
        {NIGHT.map((ev, ei) => (
          <div
            key={ev.time}
            className={ei === 1 ? "border-t border-white/[0.07]" : ""}
          >
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 + ei * 0.4 }}
              className="flex flex-wrap items-center gap-x-3 gap-y-2 px-4 py-3.5 sm:px-5"
            >
              <span className={`${NUM} w-[58px] shrink-0 text-[11px] text-white/60`}>
                {ev.time}
              </span>
              <span className="w-[74px] shrink-0">
                <span
                  className={`${MICRO_SM} inline-flex rounded-[4px] border border-white/10 bg-white/[0.05] px-2 py-[3px] text-white/60`}
                >
                  {ev.source}
                </span>
              </span>
              <span className="w-full text-[13.5px] leading-snug text-white sm:w-auto sm:flex-1">
                {ev.text}
              </span>
            </motion.div>

            <div className="pb-2 pl-[26px] pr-4 sm:pl-[38px] sm:pr-5">
              <div className="border-l border-white/[0.12]">
                {ev.steps.map((s, si) => {
                  const gi = ei * 2 + si;
                  const resolved = phase > gi;
                  return (
                    <motion.div
                      key={s.time + s.label}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + ei * 0.4 + si * 0.12,
                      }}
                      className="relative py-2.5 pl-4"
                    >
                      <span
                        aria-hidden
                        className={`absolute -left-[4px] top-[14px] h-[7px] w-[7px] rounded-full border-2 border-[#0A0D14] transition-colors duration-500 ${
                          resolved ? "bg-[#3A6CFF]" : "bg-[#3B4250]"
                        }`}
                      />
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                        <span
                          className={`${NUM} w-[52px] shrink-0 text-[11px] text-white/40`}
                        >
                          {s.time}
                        </span>
                        <span className="min-w-[170px] flex-1 text-[13px] leading-snug text-white/85">
                          {s.label}
                        </span>
                        <StateChip step={s} resolved={resolved} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
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
        <p className="text-[13px] leading-snug text-white/70">
          Both handled. Nobody at the practice or the office was woken.
        </p>
        <p className="mt-2 text-[13px] leading-snug text-white/50">
          We answer the call, and we finish the job. An answering service
          takes a message and hands it back.
        </p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   3 · HERO
   ══════════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="border-t border-[#E3E6EC] bg-white">
      <div
        className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-14 md:py-20`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.04fr)] lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${MICRO} flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[#003DDB]`}
            >
              <span>Healthcare Clinics</span>
              <span aria-hidden className="h-3 w-px bg-[#C3CAD5]" />
              <span>Care Providers</span>
              <span aria-hidden className="h-3 w-px bg-[#C3CAD5]" />
              <span>Australia</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className={`${DISPLAY} mt-6 text-[46px] text-[#0B0E14] sm:text-[60px] lg:text-[74px]`}
            >
              Revenue is won or lost at the desk.{" "}
              <span className="text-[#003DDB]">We run it.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-6 max-w-[560px] text-[16px] leading-[1.62] text-[#454E5C] md:text-[17px]"
            >
              Novada runs the front desk for Australian clinics and the
              coordination desk for care providers. Every call answered, every
              shift covered, everything measured. Alongside your team, not
              instead of them.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a href="#book" className={`${BTN_PRIMARY} w-full sm:w-auto`}>
                Book a Desk Review
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a href="#how" className={`${BTN_GHOST} w-full sm:w-auto`}>
                See how it works
              </a>
            </motion.div>

            {/* Trust line as a two row readout. The figures share a fixed
                column so they align on the decimal, which is why this is
                not a wrapping inline sentence with a dangling divider. */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 max-w-[452px] border-t border-[#E3E6EC]"
            >
              <div className="flex items-center gap-3 border-b border-[#EDEFF3] py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2"
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
              <div className="flex items-center gap-3 py-3">
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
            <OperationsSurface />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   4 · THE PROBLEM, AS A LOG OF WORK THAT LEFT
   ══════════════════════════════════════════════════════════════════ */

const DROPPED = [
  "The new-patient call rings out while reception is with the patient standing in front of them.",
  "The recall list has 400 names and nobody has time to run it.",
  "It is 4am, a shift just fell over, and someone senior is awake finding cover.",
];

function Problem() {
  return (
    <Band index="01" label="The event" tone="tint">
      <div className="border-t border-[#E3E6EC]">
        {DROPPED.map((line, i) => (
          <AnimatedSection key={line} delay={i * 0.07}>
            <div className="group grid grid-cols-[34px_minmax(0,1fr)] items-start gap-x-4 gap-y-3 border-b border-[#E3E6EC] py-6 transition-colors duration-200 hover:bg-white sm:grid-cols-[52px_minmax(0,1fr)_136px] sm:items-center sm:px-3">
              <span className={`${MICRO} ${NUM} pt-1 text-[#9AA3B1] sm:pt-0`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[16px] leading-[1.5] text-[#0B0E14] md:text-[18px]">
                {line}
              </p>
              <span
                className={`${MICRO} col-start-2 flex items-center gap-1.5 text-[#B4501A] sm:col-start-3 sm:justify-end`}
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

      <AnimatedSection delay={0.12}>
        <p
          className={`${DISPLAY} mt-10 max-w-[940px] text-[28px] text-[#0B0E14] sm:text-[36px] md:text-[44px]`}
        >
          Different businesses, same event: work that reached the desk and
          left.{" "}
          <span className="text-[#003DDB]">
            The desk is a 168-hour job staffed for 38.
          </span>
        </p>
      </AnimatedSection>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   5 · THE WEEK, DRAWN
   168 hours against the 38 a standard full-time desk covers.
   Mon to Thu 9 to 5 plus Fri 9 to 3. Arithmetic, not a statistic, so
   the slot where a source would sit says exactly that.
   ══════════════════════════════════════════════════════════════════ */

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
const STAFFED: Record<number, [number, number]> = {
  0: [9, 17],
  1: [9, 17],
  2: [9, 17],
  3: [9, 17],
  4: [9, 15],
};
const HOUR_TICKS = [0, 6, 12, 18];

function WeekSurface() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  const total = useCountUp(168, inView);
  const covered = useCountUp(38, inView);
  const uncovered = useCountUp(130, inView);

  return (
    <div ref={ref}>
      {/* the three figures */}
      <div className="grid gap-px overflow-hidden rounded-[12px] border border-white/[0.09] bg-white/[0.09] sm:grid-cols-3">
        {[
          { v: total, k: "Hours the work arrives", tone: "plain" },
          { v: covered, k: "Hours the desk is staffed", tone: "blue" },
          { v: uncovered, k: "Hours nobody is at the desk", tone: "plain" },
        ].map((cell) => (
          <div key={cell.k} className="bg-[#0A0D14] px-6 py-7">
            <p
              className={`${NUM} text-[52px] font-medium leading-none md:text-[64px] ${
                cell.tone === "blue" ? "text-[#3A6CFF]" : "text-white"
              }`}
            >
              {cell.v}
            </p>
            <p className={`${MICRO} mt-3 text-white/45`}>{cell.k}</p>
          </div>
        ))}
      </div>

      {/* the grid */}
      <div className="mt-4 rounded-[12px] border border-white/[0.09] bg-[#111621] p-5 md:p-7">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <span className={`${MICRO} text-white/45`}>
            One week <span className="text-white/20">·</span> 7 days{" "}
            <span className="text-white/20">·</span> 24 hours
          </span>
          <span className="flex items-center gap-4">
            <span className={`${MICRO} flex items-center gap-2 text-white/45`}>
              <span
                aria-hidden
                className="h-[10px] w-[10px] rounded-[2px] bg-[#3A6CFF]"
              />
              Staffed
            </span>
            <span className={`${MICRO} flex items-center gap-2 text-white/45`}>
              <span
                aria-hidden
                className="h-[10px] w-[10px] rounded-[2px] bg-white/[0.05] ring-1 ring-inset ring-white/[0.09]"
              />
              Not staffed
            </span>
          </span>
        </div>

        {/* hour axis */}
        <div className="mb-2 flex items-center gap-2 md:gap-3">
          <span className="w-8 shrink-0 md:w-10" />
          <div className="relative h-3 flex-1">
            {HOUR_TICKS.map((h) => (
              <span
                key={h}
                className={`${MICRO_SM} ${NUM} absolute top-0 text-white/25`}
                style={{ left: `${(h / 24) * 100}%` }}
              >
                {String(h).padStart(2, "0")}
              </span>
            ))}
          </div>
          <span className={`${MICRO_SM} w-8 shrink-0 text-right text-white/25`}>
            Hrs
          </span>
        </div>

        {/* rows */}
        <div className="space-y-[3px]">
          {DAYS.map((day, d) => {
            const range = STAFFED[d];
            const dayTotal = range ? range[1] - range[0] : 0;
            return (
              <div key={day} className="flex items-center gap-2 md:gap-3">
                <span
                  className={`${MICRO_SM} w-8 shrink-0 text-white/40 md:w-10`}
                >
                  {day}
                </span>
                <div className="flex flex-1 gap-[2px] md:gap-[3px]">
                  {Array.from({ length: 24 }).map((_, h) => {
                    const on = !!range && h >= range[0] && h < range[1];
                    return (
                      <motion.span
                        key={h}
                        initial={{ opacity: reduced ? 1 : 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{
                          duration: 0.28,
                          delay: reduced ? 0 : (d * 24 + h) * 0.0035,
                        }}
                        className={`h-[14px] flex-1 rounded-[2px] md:h-[18px] ${
                          on
                            ? "bg-[#3A6CFF] shadow-[0_0_10px_-2px_rgba(58,108,255,0.7)]"
                            : "bg-white/[0.045] ring-1 ring-inset ring-white/[0.07]"
                        }`}
                      />
                    );
                  })}
                </div>
                <span
                  className={`${NUM} w-8 shrink-0 text-right text-[11px] ${
                    dayTotal ? "text-white/70" : "text-white/20"
                  }`}
                >
                  {dayTotal}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-white/[0.08] pt-5">
          <p className="max-w-[560px] text-[14px] leading-relaxed text-white/70">
            Mon to Thu 9 to 5, Fri 9 to 3.
          </p>
          {/* where a source would sit on any other number */}
          <span className={`${MICRO_SM} text-white/30`}>
            Arithmetic, not a statistic
          </span>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   6 · THE TWO DESKS
   ══════════════════════════════════════════════════════════════════ */

const DESKS = [
  {
    index: "01",
    eyebrow: "For clinics",
    title: "The Patient Access Desk",
    body: "For dental, physio, OT, psychology, podiatry, speech, vet and other private practices. We answer the calls, make the bookings in your own practice software, run the recalls every week and recover the cancellations, so a growing practice can add capacity without automatically adding another front-office salary.",
    href: "/patient-access-desk",
    cta: "For Clinics",
  },
  {
    index: "02",
    eyebrow: "For care providers",
    title: "The Workforce Ops Desk",
    body: "For NDIS, home care and aged care providers. Rostering admin, after-hours call-offs answered every night, intake and onboarding admin, and compliance records kept to the 7-year statutory standard, so your managers stop being the overnight department.",
    href: "/workforce-ops-desk",
    cta: "For Care Providers",
  },
];

function TwoDesks() {
  return (
    <Band id="desks" index="03" label="Two desks">
      <div className="grid gap-4 md:grid-cols-2">
        {DESKS.map((d, i) => (
          <AnimatedSection key={d.href} delay={i * 0.08} className="h-full">
            <a
              href={d.href}
              className="group flex h-full flex-col overflow-hidden rounded-[12px] border border-[#E3E6EC] bg-white transition-colors duration-200 hover:border-[#003DDB]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2"
            >
              {/* panel chrome */}
              <div className="flex items-center justify-between gap-3 border-b border-[#E3E6EC] bg-[#F7F8FA] px-5 py-3 transition-colors duration-200 group-hover:bg-[#F1F4FB]">
                <span className={`${MICRO} flex items-center gap-2.5`}>
                  <span className={`${NUM} text-[#9AA3B1]`}>{d.index}</span>
                  <span aria-hidden className="h-3 w-px bg-[#D3D8E2]" />
                  <span className="text-[#003DDB]">{d.eyebrow}</span>
                </span>
                {/* A route reads as a route, so it stays lower case. */}
                <span
                  className={`${MICRO_SM} hidden normal-case tracking-[0.06em] text-[#9AA3B1] sm:block`}
                >
                  {d.href}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-8">
                <h3
                  className={`${DISPLAY} text-[32px] text-[#0B0E14] md:text-[40px]`}
                >
                  {d.title}
                </h3>
                <p className="mt-5 flex-1 text-[15px] leading-[1.62] text-[#454E5C]">
                  {d.body}
                </p>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-[#E3E6EC] px-6 py-4 md:px-8">
                <span className="text-[14px] font-semibold text-[#003DDB]">
                  {d.cta}
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-[#E3E6EC] transition-colors duration-200 group-hover:border-[#003DDB] group-hover:bg-[#003DDB]">
                  <ArrowRight
                    className="h-4 w-4 text-[#003DDB] transition-colors duration-200 group-hover:text-white"
                    aria-hidden
                  />
                </span>
              </div>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   7 · HOW IT WORKS
   ══════════════════════════════════════════════════════════════════ */

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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Band id="how" index="04" label="How it works" tone="tint">
      <div ref={ref} className="relative">
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
                className={`${NUM} text-[64px] font-medium leading-none text-[#EDEFF3] md:text-[76px] [-webkit-text-stroke:1px_#D3D8E2]`}
              >
                {s.n}
              </p>
              <h3 className="mt-4 text-[19px] font-semibold tracking-tight text-[#0B0E14] md:text-[21px]">
                {s.title}
              </h3>
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
   8 · WHAT WE DON'T DO
   ══════════════════════════════════════════════════════════════════ */

const BOUNDARIES = [
  {
    tag: "Out of scope",
    body: "Nothing clinical: no triage, no advice. Urgent matters route straight to your team under an agreed protocol.",
  },
  {
    tag: "Out of scope",
    body: "Nothing at the front counter: greeting, payments and in-person care stay with your people.",
  },
  {
    tag: "Boundary",
    body: "We work alongside your front desk, not instead of it.",
  },
  {
    tag: "Standing",
    body: "Onshore team, Australian owned, and your data stays in your own systems.",
  },
];

function Boundaries() {
  return (
    <Band index="05" label="Scope">
      <AnimatedSection>
        <h3
          className={`${DISPLAY} max-w-[820px] text-[32px] text-[#0B0E14] sm:text-[40px] md:text-[48px]`}
        >
          What we don&apos;t do.
        </h3>
      </AnimatedSection>

      <div className="mt-9 border-t border-[#E3E6EC]">
        {BOUNDARIES.map((b, i) => (
          <AnimatedSection key={b.body} delay={i * 0.05}>
            <div className="grid grid-cols-[34px_minmax(0,1fr)] items-start gap-x-4 gap-y-3 border-b border-[#E3E6EC] py-5 sm:grid-cols-[52px_minmax(0,1fr)_128px] sm:items-center sm:px-3">
              <span className={`${MICRO} ${NUM} pt-1 text-[#9AA3B1] sm:pt-0`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[15px] leading-[1.6] text-[#0B0E14] md:text-[16px]">
                {b.body}
              </p>
              <span
                className={`${MICRO_SM} col-start-2 justify-self-start rounded-[4px] border border-[#DCE0E8] bg-[#F7F8FA] px-2 py-[3px] text-[#7B8492] sm:col-start-3 sm:justify-self-end`}
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
   9 · WHY NOW
   Rendered as a citations table. Every figure prints its source in the
   same row, which is the whole argument of the section below it.
   ══════════════════════════════════════════════════════════════════ */

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
    <Band index="06" label="Why now" tone="tint">
      {/* table header */}
      <div className="hidden grid-cols-[240px_minmax(0,1fr)_220px] gap-6 border-b border-[#D3D8E2] pb-3 lg:grid">
        <span className={`${MICRO} text-[#9AA3B1]`}>Figure</span>
        <span className={`${MICRO} text-[#9AA3B1]`}>What it means</span>
        <span className={`${MICRO} text-[#9AA3B1]`}>Source</span>
      </div>

      <div className="border-t border-[#D3D8E2] lg:border-t-0">
        {EVIDENCE.map((e, i) => (
          <AnimatedSection key={e.figure} delay={i * 0.07}>
            <div className="grid gap-x-6 gap-y-4 border-b border-[#E3E6EC] py-7 lg:grid-cols-[240px_minmax(0,1fr)_220px] lg:items-start">
              <p
                className={`${NUM} text-[28px] font-medium leading-[1.05] text-[#003DDB] md:text-[32px]`}
              >
                {e.figure}
              </p>
              <p className="text-[15px] leading-[1.62] text-[#0B0E14] md:text-[16px]">
                {e.body}
              </p>
              <div className="lg:text-right">
                <span className={`${MICRO_SM} block text-[#9AA3B1]`}>
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

      <AnimatedSection delay={0.15}>
        <p className="mt-8 max-w-[860px] border-l-2 border-[#003DDB] pl-5 text-[16px] font-medium leading-[1.6] text-[#0B0E14] md:text-[18px]">
          Before you add the next salary, we&apos;ll benchmark the workload
          against the actual cost of that hire: your numbers, not industry
          claims.
        </p>
      </AnimatedSection>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   10 · THE MEASUREMENT PROMISE
   The schematic beside it is an empty report, not a claim: the four
   field names are lifted verbatim from the paragraph, values blank.
   ══════════════════════════════════════════════════════════════════ */

const REPORT_FIELDS = [
  "Every enquiry",
  "Response time",
  "Booking outcome",
  "Reason lost",
];

function Measurement() {
  return (
    <Band index="07" label="Measurement">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
        <AnimatedSection>
          <h3
            className={`${DISPLAY} max-w-[640px] text-[32px] text-[#0B0E14] sm:text-[40px] md:text-[48px]`}
          >
            We won&apos;t quote you an industry statistic.
          </h3>
          <p className="mt-6 max-w-[600px] text-[16px] leading-[1.65] text-[#454E5C] md:text-[17px]">
            We traced this market&apos;s most-quoted numbers to their sources,
            and most dissolved on contact. So we don&apos;t use them. Instead
            we measure your desk: every enquiry, response time, booking
            outcome and reason lost, reported monthly.{" "}
            <span className="font-medium text-[#0B0E14]">
              If a number is on this website, it carries its source in the
              same breath.
            </span>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="overflow-hidden rounded-[12px] border border-[#E3E6EC] bg-white">
            <div className="flex items-center justify-between gap-3 border-b border-[#E3E6EC] bg-[#F7F8FA] px-5 py-3">
              <span className={`${MICRO} text-[#5B6472]`}>Monthly report</span>
              <span
                className={`${MICRO_SM} rounded-[4px] border border-dashed border-[#C3CAD5] px-2 py-[3px] text-[#9AA3B1]`}
              >
                Illustrative example
              </span>
            </div>
            {REPORT_FIELDS.map((f) => (
              <div
                key={f}
                className="flex items-center justify-between gap-4 border-b border-[#EDEFF3] px-5 py-4 last:border-b-0"
              >
                <span className="text-[14px] text-[#0B0E14]">{f}</span>
                <span className={`${NUM} text-[14px] text-[#C3CAD5]`}>
                  ··
                </span>
              </div>
            ))}
            <div className="border-t border-[#E3E6EC] bg-[#F7F8FA] px-5 py-3">
              <span className={`${MICRO_SM} text-[#9AA3B1]`}>
                Measured in your own systems
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   11 · PROOF OF OPERATIONS
   ══════════════════════════════════════════════════════════════════ */

const PROOF_TAGS = [
  "Every night of the year",
  "Inside their systems",
  "To their escalation protocols",
  "Structured handover",
];

function Proof() {
  return (
    <Band index="08" label="Proof of operations" tone="dark">
      <AnimatedSection>
        <p className="max-w-[900px] border-l-2 border-[#3A6CFF] pl-6 text-[20px] font-medium leading-[1.42] text-white sm:text-[24px] md:text-[30px]">
          This isn&apos;t a proposal. Our desk answers after-hours calls for
          Australian care providers every night of the year, inside their
          systems, to their escalation protocols, with a structured handover
          waiting every morning.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.12}>
        <div className="mt-10 flex flex-wrap gap-2">
          {PROOF_TAGS.map((t) => (
            <span
              key={t}
              className={`${MICRO_SM} rounded-[4px] border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-white/55`}
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
   12 · BOOK A REVIEW
   ══════════════════════════════════════════════════════════════════ */

function FinalCta() {
  return (
    <section
      id="book"
      className="scroll-mt-28 border-t border-white/10 bg-[#0A0D14]"
    >
      <div
        className={`${WRAP} ${PAD} ${BAND} border-x border-white/10`}
      >
        <div className="grid gap-8 lg:grid-cols-[124px_minmax(0,1fr)] lg:gap-12">
          <Rail index="09" label="Book" tone="dark" />
          <div className="min-w-0">
            <AnimatedSection>
              <h3
                className={`${DISPLAY} text-[38px] text-white sm:text-[48px] md:text-[58px]`}
              >
                Book a review.
              </h3>
              <p className="mt-5 max-w-[620px] text-[16px] leading-[1.62] text-white/65 md:text-[17px]">
                We&apos;ll map your workload and show you exactly what
                we&apos;d measure in your first 30 days.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="mt-10 max-w-[940px]">
                <BookingEmbed
                  source="home-page"
                  title="Book a review with Novada"
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

export default function DesignBHomePage() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <DeskNav />
      <StatusStrip />

      <main>
        <Hero />
        <Problem />

        {/* The week, on ink. The thesis line above it, drawn. */}
        <section className="scroll-mt-28 border-t border-white/10 bg-[#0A0D14]">
          <div className={`${WRAP} ${PAD} ${BAND} border-x border-white/10`}>
            <div className="grid gap-8 lg:grid-cols-[124px_minmax(0,1fr)] lg:gap-12">
              <Rail index="02" label="168 / 38" tone="dark" />
              <div className="min-w-0">
                <AnimatedSection className="mb-9 max-w-[720px]">
                  <p className="text-[16px] leading-[1.62] text-white/65 md:text-[17px]">
                    Every unfilled square is a call that rang out, a recall
                    that never got run, or a shift that fell over with nobody
                    on it.
                  </p>
                </AnimatedSection>
                <WeekSurface />
              </div>
            </div>
          </div>
        </section>

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
