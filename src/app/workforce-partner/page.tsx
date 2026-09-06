"use client";

/*
 * /workforce-partner : THE WORKFORCE PARTNER.
 * One of Novada Tech's two offers. Platform: Recruitilon.
 *
 * Built 2026-09-06 against "NOVADA · THE TWO PARTNERS" (ratified
 * 5 September 2026), which supersedes all previous positioning documents
 * in full. The visual scaffold (tokens, hooks, Rail, Band, StatusStrip,
 * BuiltFor) is copied verbatim from /operations-partner so the two offer
 * pages are identical by construction rather than merely similar.
 *
 * THE LINE BETWEEN THE TWO OFFERS, and the sentence the whole site turns
 * on: one partner runs your operation; the other builds and backs your
 * workforce. This page is the second. The after-hours line, roster and
 * call-off coordination, intake administration and the morning handover
 * belong to the Operations Partner and must never be sold from here.
 *
 * ⚠⚠ THE HIGHEST-EXPOSURE PAGE ON THE SITE. Read section 8 of the
 * document before changing a word. The three rails that matter most:
 *
 *  1. RECRUITMENT IS A FUNCTION, NEVER A CATEGORY. Never "recruitment
 *     agency", "labour hire", "staffing agency", "staff supply", or any
 *     hourly figure. Those nouns drag this offer toward staffing margins
 *     and a category it deliberately is not.
 *
 *  2. RECRUITILON labels the PLATFORM LAYER only, never the company and
 *     never the offer. First mention on the page is "Recruitilon, our own
 *     platform", which is the required form. It must NEVER sit in a
 *     sentence claiming we employ, supply or place workers. Its verbs are
 *     clerical: verifies, surfaces, records, tracks.
 *
 *  3. THE POOL IS DESCRIBED ONLY BY ITS FACTS. Independent businesses on
 *     their own ABN; a direct service agreement between the provider and
 *     the worker; the provider approves every engagement and pays the
 *     worker directly; we verify, surface and record. Never "our
 *     workers". Never a guaranteed fill, in any wording, which our own
 *     Terms of Service also disclaim. And THE POOL'S LEGAL
 *     CHARACTERISATION IS NEVER DISCUSSED PUBLICLY, IN EITHER DIRECTION:
 *     do not write that it is not labour hire, do not write that it is,
 *     do not name the category at all. A denial invites the question it
 *     answers.
 *
 * ⚠️ NO PRICING. Founder's direct decision, 6 September 2026: the
 * simplified pricing is NOT displayed on the website. That includes the
 * pool's per-engagement access fee. The page discloses that access is
 * charged and sends the figure to the review, because implying it is
 * free would be misleading and printing it would breach the rule.
 *
 * ⚠️ 2026 NDIS INDUCEMENT BAN: criminal exposure. No referral,
 * incentive, gift or growth-promise language anywhere, in copy, alt text,
 * interface labels, comments or metadata.
 *
 * ⚠️ NOTHING CLINICAL, EVER, and nothing clinic-facing: the clinic
 * offer is separated from the company entirely (document section 1).
 *
 * Also binding: statistics only from the approved library with their
 * source printed in the same row; Australian spelling; no em dashes.
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
   3 · THE ROSTER SURFACE (hero visual)
   The desk moment for this offer. Deliberately NOT the same event as the
   Operations Partner's hero: that page shows a call-off being covered
   from the client's own approved team, which is coordination. This one
   shows the step after that, the moment the client's own people are
   exhausted and the pool is the remaining option, which is what this
   offer exists for.

   ⚠️ Every label here is written to the pool's facts. "Surfaced" and
   "approved by you" are load bearing: we surface availability, the
   provider approves the engagement. Never "assigned", "placed",
   "supplied" or "filled by us". Labelled illustrative.
   ══════════════════════════════════════════════════════════════════ */

type DeskStep = {
  time: string;
  label: string;
  state: string;
  delta?: string;
};

const EVENT = {
  time: "4:11 AM",
  source: "Care",
  text: "Call-off. Nobody on your own roster is available.",
};

const STEPS_LOG: DeskStep[] = [
  {
    time: "4:26 AM",
    label: "Screened, available workers surfaced from the pool",
    state: "Surfaced",
    delta: "+15 min",
  },
  {
    time: "4:38 AM",
    label: "You approve the engagement against your own criteria",
    state: "Approved by you",
    delta: "+27 min",
  },
  {
    time: "4:41 AM",
    label: "Screening, credentials and the engagement recorded",
    state: "Evidenced",
    delta: "+30 min",
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

function RosterSurface() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setPhase(TOTAL_STEPS);
      return;
    }
    const timers = Array.from({ length: TOTAL_STEPS }, (_, i) =>
      setTimeout(() => setPhase(i + 1), 700 + i * 900),
    );
    return () => timers.forEach(clearTimeout);
  }, [inView, reduced]);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-[12px] border border-white/[0.09] bg-[#0A0D14]"
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] px-4 py-3 sm:px-5">
        <span className={`${MICRO} text-white/45`}>Overnight</span>
        <span
          className={`${MICRO_TIGHT} rounded-[4px] border border-dashed border-white/20 px-2 py-[3px] text-white/40`}
        >
          Illustrative example
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 px-4 py-3.5 sm:px-5">
        <span className={`${MICRO} ${NUM} text-white/45`}>{EVENT.time}</span>
        <span
          className={`${MICRO_TIGHT} rounded-[4px] border border-white/10 bg-white/[0.04] px-2 py-[3px] text-white/50`}
        >
          {EVENT.source}
        </span>
        <span className="text-[15px] text-white/90 md:text-[16px]">
          {EVENT.text}
        </span>
      </div>

      <div className="border-t border-white/[0.07]">
        {STEPS_LOG.map((s, si) => {
          const resolved = phase > si;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + si * 0.12 }}
              className="flex items-start gap-3 border-b border-white/[0.05] px-4 py-3.5 last:border-b-0 sm:px-5"
            >
              <span
                aria-hidden
                className={`mt-[7px] h-[7px] w-[7px] shrink-0 rounded-full transition-colors duration-500 ${
                  resolved ? "bg-[#3A6CFF]" : "bg-[#3B4250]"
                }`}
              />
              <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-3 gap-y-1.5">
                <span className={`${MICRO} ${NUM} shrink-0 text-white/40`}>
                  {s.time}
                </span>
                <span className="min-w-0 text-[14.5px] text-white/85 md:text-[15.5px]">
                  {s.label}
                </span>
                <StateChip step={s} resolved={resolved} />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex items-center gap-2.5 border-t border-white/[0.07] px-4 py-3 sm:px-5">
        <span
          aria-hidden
          className={`h-[7px] w-[7px] rounded-full transition-colors duration-500 ${
            phase >= TOTAL_STEPS ? "bg-[#3A6CFF]" : "bg-white/25"
          }`}
        />
        <span className={`${MICRO} text-white/45`}>
          Evidenced{" "}
          <span className={`${NUM} text-white/70`}>
            {Math.min(phase, TOTAL_STEPS)} / {TOTAL_STEPS}
          </span>
        </span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   4 · HERO
   The hiring decision is on the fold, in the h1, because this is a paid
   landing surface and the anchor for this offer is the recruiter's
   placement fee and the coordinator salary, never an hourly rate.
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
              The Workforce Partner{" "}
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
              We build and back your workforce.{" "}
              <span className="text-[#003DDB]">And we answer for the file.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-5 max-w-[560px] text-[15.5px] leading-[1.58] text-[#454E5C] md:text-[17px]"
            >
              The Workforce Partner is one of two offers. It runs the worker
              lifecycle for Australian NDIS, home care and aged care providers
              as a continuous function rather than a series of transactions:
              recruitment for your own team, onboarding administration,
              induction and training records kept current, and a pool of
              pre-screened independent workers behind it. Every hiring decision
              stays yours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="mt-7"
            >
              <a href="#book" className={`${BTN_PRIMARY} w-full sm:w-auto`}>
                Book a Workforce Review
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            {/* Proof, on the fold. Unbranded rating lockup, identical to the
                home page and the sibling offer page: whole-of-business
                figures, no client names, no written testimonial. */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-7 max-w-[452px] border-t border-[#E3E6EC]"
            >
              <div className="flex items-center gap-3 border-b border-[#EDEFF3] py-2.5">
                <Star
                  className="h-3.5 w-3.5 shrink-0 fill-[#003DDB] text-[#003DDB]"
                  aria-hidden
                />
                <span className={`${NUM} w-[64px] shrink-0 text-[15px] font-semibold text-[#0B0E14]`}>
                  4.9/5
                </span>
                <span className="text-[14px] text-[#5B6472]">
                  from <span className={NUM}>77+</span> independent reviews
                </span>
              </div>
              <div className="flex items-center gap-3 py-2.5">
                <ArrowUpRight
                  className="h-3.5 w-3.5 shrink-0 text-[#003DDB]"
                  aria-hidden
                />
                <span className={`${NUM} w-[64px] shrink-0 text-[15px] font-semibold text-[#0B0E14]`}>
                  350+
                </span>
                <span className="text-[14px] text-[#5B6472]">
                  Australian businesses supported
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <RosterSurface />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   5 · THE DECISION
   The anchor for this offer is the hire: the recruiter's placement fee,
   the coordinator salary, the cost of the shift that did not get filled.
   Never an hourly rate, never a comparison to a staffing supplier.
   ══════════════════════════════════════════════════════════════════ */

const PAINS = [
  "Recruiting never stops, and it restarts from zero every time somebody resigns.",
  "A placement fee lands every time you use an agency, and you are still the one doing the interviews.",
  "Onboarding paperwork is chased by whoever has a spare hour, which means it is chased late.",
  "Induction and training records live in three places and nobody is certain which one is current.",
  "The 4am gap arrives, your own people are exhausted, and there is nobody left to ring.",
];

function Decision() {
  return (
    <Band index="01" label="The decision" tone="tint">
      <AnimatedSection>
        <p
          className={`${DISPLAY} max-w-[940px] text-[28px] text-[#0B0E14] sm:text-[36px] md:text-[44px]`}
        >
          Before you add another coordinator or another placement fee, we
          benchmark the workload against what that actually costs you:{" "}
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
                Nobody owns it
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
   6 · WHAT YOU'RE BUYING
   The three-layer stack. Recruitilon is introduced here and only here,
   under its naming rails.

   ⚠️ RECRUITILON NAMING RAILS (section 8, binding):
    · It labels the PLATFORM LAYER only, never the company, never the
      offer. First mention on this page is here, as "Recruitilon, our own
      platform", which is the required form.
    · It must NEVER sit in a sentence claiming we employ, supply or place
      workers. Its verbs are clerical and evidentiary: verifies, surfaces,
      records, tracks. It never assigns, places, supplies or engages
      anybody.

   ⚠️ The third layer is the WORKER FILE, which is this offer's whole
   warranty. Our Terms of Service disclaim warranties on the website, so
   the row warrants the work and the record only, and locates the
   commitments in the services agreement.
   ══════════════════════════════════════════════════════════════════ */

const STACK = [
  {
    n: "01",
    tag: "Ours",
    title: "The platform",
    body: "Recruitilon, our own platform, holds the workforce evidence. It verifies screening and credentials, tracks induction and training to completion, surfaces who is available and current, and records the evidence of every engagement as it happens. It is why a worker's file is current on the day somebody asks for it, rather than assembled the week before an audit.",
  },
  {
    n: "02",
    tag: "Onshore",
    title: "The people",
    body: "Named coordinators, onshore, with worker screening clearances held wherever participant contact is plausible. They run the recruitment function for your own team, chase what needs chasing, and own the judgment calls: the candidate worth a second look, the credential about to lapse, the gap at 4am.",
  },
  {
    n: "03",
    tag: "In writing",
    title: "The worker file",
    body: "Screening verified before a shift is ever offered. Credentials current. Induction and training evidenced. Every pool engagement generating its own record. And one named Australian company answerable for the file. What we warrant is the work and the record, set out in your services agreement.",
  },
];

function WhatYouAreBuying() {
  return (
    <Band index="02" label="What you're buying" tone="dark">
      <AnimatedSection>
        <p className={`${MICRO} text-[#7AA2FF]`}>Managed operations</p>
        <h3
          className={`${DISPLAY} mt-4 max-w-[820px] text-[30px] text-white sm:text-[40px] md:text-[48px]`}
        >
          Not staff. Not software. A function somebody answers for.
        </h3>
        <p className="mt-5 max-w-[760px] text-[15.5px] leading-[1.62] text-white/70 md:text-[17px]">
          Every engagement is three layers, and you can see all three. That is
          the difference between handing over a function and buying hours or
          buying a tool.
        </p>
      </AnimatedSection>

      <div className="mt-10 border-t border-white/10">
        {STACK.map((r, i) => (
          <AnimatedSection key={r.n} delay={i * 0.06}>
            <div className="grid grid-cols-[34px_minmax(0,1fr)] items-start gap-x-4 gap-y-3 border-b border-white/10 py-6 sm:grid-cols-[52px_minmax(0,1fr)_148px] sm:px-3">
              <span className={`${MICRO} ${NUM} pt-1 text-white/35`}>{r.n}</span>
              <div className="min-w-0">
                <p className="text-[17px] font-semibold tracking-tight text-white md:text-[18px]">
                  {r.title}
                </p>
                <p className="mt-2.5 max-w-[640px] text-[15px] leading-[1.62] text-white/75 md:text-[16px]">
                  {r.body}
                </p>
              </div>
              <span
                className={`${MICRO} col-start-2 justify-self-start rounded-[4px] border border-white/10 bg-white/[0.04] px-2 py-[3px] text-white/55 sm:col-start-3 sm:justify-self-end`}
              >
                {r.tag}
              </span>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.1}>
        <p className="mt-9 max-w-[820px] border-l-2 border-[#3A6CFF] pl-6 text-[17px] font-medium leading-[1.5] text-white md:text-[20px]">
          Automation makes the evidence. People make the decisions.
        </p>
      </AnimatedSection>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   7 · THE LIFECYCLE
   Recruitment, onboarding administration, induction and training
   administration, run as one continuous function.

   ⚠️ Recruitment is a FUNCTION performed here, never a category this
   offer belongs to. Nothing on this page may read as an agency: we do
   not place, supply, second or second-guess. We source and screen for
   the client's OWN workforce and every hiring decision is theirs, which
   row 01 says in as many words.
   ══════════════════════════════════════════════════════════════════ */

const LIFECYCLE = [
  {
    n: "01",
    title: "Recruitment",
    body: "A standing pipeline of care worker candidates, sourced and screened against your criteria for your own workforce. Not a burst of activity when somebody resigns. Every hiring decision is yours, and the worker joins your team, not ours.",
  },
  {
    n: "02",
    title: "Onboarding administration",
    body: "The checks, the paperwork and the records that turn a hired worker into an engageable one. Chased to completion by somebody whose actual job it is, and recorded as it goes rather than reconstructed later.",
  },
  {
    n: "03",
    title: "Induction and training administration",
    body: "Scheduling, completion tracking, and the records maintained so every worker's file is current. When a credential is approaching its expiry, that is surfaced before it lapses, not after.",
  },
  {
    n: "04",
    title: "The pool behind it",
    body: "Pre-screened, credentialed independent workers available for the moments a shift cannot be filled from your own people. Described in full in the next section, because how it works is the part that matters.",
  },
];

function Lifecycle() {
  return (
    <Band index="03" label="The lifecycle" tone="tint">
      <AnimatedSection>
        <h3
          className={`${DISPLAY} max-w-[820px] text-[30px] text-[#0B0E14] sm:text-[40px] md:text-[48px]`}
        >
          The worker lifecycle, run as one continuous function.
        </h3>
        <p className="mt-5 max-w-[760px] text-[15.5px] leading-[1.62] text-[#454E5C] md:text-[17px]">
          Most providers run these four as separate scrambles owned by whoever
          is free. The Workforce Partner runs them as one function with one
          owner, and the evidence assembles itself along the way.
        </p>
      </AnimatedSection>

      <div className="mt-10 border-t border-[#D3D8E2]">
        {LIFECYCLE.map((r, i) => (
          <AnimatedSection key={r.n} delay={i * 0.06}>
            <div className="grid grid-cols-[34px_minmax(0,1fr)] items-start gap-x-4 gap-y-3 border-b border-[#E3E6EC] py-6 sm:grid-cols-[52px_minmax(0,1fr)] sm:px-3">
              <span className={`${MICRO} ${NUM} pt-1 text-[#9AA3B1]`}>{r.n}</span>
              <div className="min-w-0">
                <p className="text-[17px] font-semibold tracking-tight text-[#0B0E14] md:text-[18px]">
                  {r.title}
                </p>
                <p className="mt-2.5 max-w-[660px] text-[15px] leading-[1.62] text-[#454E5C] md:text-[16px]">
                  {r.body}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   8 · THE WORKFORCE POOL
   THE HIGHEST-EXPOSURE SECTION ON THE SITE. Read section 8 of the Two
   Partners document before touching a word of it.

   The pool is described ONLY by its facts, and these are the facts:
    · Pool workers are independent businesses on their own ABN.
    · Every engagement is a direct service agreement between the provider
      and the worker.
    · The provider approves every engagement against its own criteria and
      pays the worker directly.
    · Recruitilon verifies screening and credentials, surfaces
      availability, and records the evidence of every engagement.
    · Novada never employs pool workers, never manages their performance,
      never runs their payroll.
    · No fill is ever guaranteed.

   ⚠️ NEVER "our workers", "our team of workers", "we supply", "we place",
   "we assign", "we staff", or any equivalent.
   ⚠️ NEVER a guaranteed fill, in any wording. Our Terms of Service
   expressly disclaim that a shift will be filled or a call-off covered,
   and no honest operator in this sector would promise one. The page says
   so out loud, which is stronger than staying quiet about it.
   ⚠️ THE POOL'S LEGAL CHARACTERISATION IS NEVER DISCUSSED PUBLICLY, IN
   EITHER DIRECTION. Do not write that this is not labour hire, do not
   write that it is, do not name the category at all. Describe the facts
   and stop. A denial invites the question it answers.
   ⚠️ NO PRICING, which includes the pool's per-engagement access fee.
   Do not imply access is free either: the closing line discloses that it
   is charged and sends the figure to the review, which is where every
   commercial conversation belongs.
   ══════════════════════════════════════════════════════════════════ */

const POOL_FACTS = [
  {
    tag: "Independent",
    body: "Pool workers are independent businesses operating on their own ABN. They are not our employees, we do not manage their performance, and we do not run their payroll.",
  },
  {
    tag: "Your agreement",
    body: "Every engagement is a direct service agreement between you and the worker. You approve it against your own criteria, and you pay the worker directly.",
  },
  {
    tag: "Verified first",
    body: "Screening and credentials are verified on our platform before a shift is ever offered, and every engagement generates its own record.",
  },
  {
    tag: "Never promised",
    body: "No fill is ever guaranteed. Availability is availability, and anyone in this sector who promises you otherwise is selling something they cannot deliver.",
  },
];

function Pool() {
  return (
    <Band index="04" label="The pool">
      <AnimatedSection>
        <p className={`${MICRO} text-[#003DDB]`}>
          When your own people cannot cover it
        </p>
        <h3
          className={`${DISPLAY} mt-4 max-w-[860px] text-[30px] text-[#0B0E14] sm:text-[40px] md:text-[48px]`}
        >
          A pool of screened workers, engaged by you, evidenced by us.
        </h3>
        <p className="mt-6 max-w-[820px] text-[16px] leading-[1.62] text-[#454E5C] md:text-[17px]">
          Cover always starts with your own team, against your own rules. The
          pool exists for the moment after that: when the shift cannot be
          filled from your own people and the alternative is a manager on the
          phone at 4am working through a list. Every worker in it holds a
          current{" "}
          <span className="font-semibold text-[#0B0E14]">
            NDIS Worker Screening clearance
          </span>
          , checked before anything is offered.
        </p>
      </AnimatedSection>

      <div className="mt-10 border-t border-[#D3D8E2]">
        {POOL_FACTS.map((r, i) => (
          <AnimatedSection key={r.tag} delay={i * 0.06}>
            <div className="grid grid-cols-1 items-start gap-x-4 gap-y-2 border-b border-[#E3E6EC] py-5 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-y-3 sm:px-3">
              <span className={`${MICRO} pt-[2px] text-[#003DDB]`}>{r.tag}</span>
              <p className="text-[15px] leading-[1.62] text-[#0B0E14] md:text-[16px]">
                {r.body}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.12}>
        <p className={`${MICRO} mt-8 text-[#9AA3B1]`}>
          Access to the pool is charged separately from the engagement, and we
          walk you through exactly how on your Workforce Review.
        </p>
      </AnimatedSection>
    </Band>
  );
}

/* ══════════════════════════════════════════════════════════════════
   9 · SCOPE
   The section a cautious operations manager reads first, and the one
   that has to survive being read by their lawyer. Stated AS boundaries,
   not softened. Every row here is load bearing and legally reviewed in
   substance by the ratified document.
   ══════════════════════════════════════════════════════════════════ */

const BOUNDARIES = [
  {
    tag: "Boundary",
    body: "Your duty of care does not transfer. Nothing we do reduces it, and nothing in our agreement says otherwise.",
  },
  {
    tag: "Yours",
    body: "Every hiring decision is yours. We source, screen and administer; you decide who joins your workforce.",
  },
  {
    tag: "Never",
    body: "We never employ the workers in the pool, never manage their performance and never run their payroll. Your agreement is with the worker.",
  },
  {
    tag: "Never",
    body: "We never deliver supports or care, and we never hold the participant relationship.",
  },
  {
    tag: "Never",
    body: "We never make a clinical decision, and we never prescribe, administer or authorise medication.",
  },
  {
    tag: "Stays with you",
    body: "Deciding whether a worker is suitable for a particular participant stays with you. We surface who is screened, current and available; the match is your call, under your own rules.",
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
        <p className="mt-6 max-w-[900px] border-l-2 border-[#003DDB] pl-5 text-[16px] leading-[1.62] text-[#454E5C] md:text-[17px]">
          We run the function that surrounds your workforce, never the care
          itself. Onshore team; worker screening clearances held wherever
          participant contact is plausible; your data stays in your own systems.
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
   10 · ACCOUNTABILITY
   Taught, never asserted, never a rebuke. The band opens by conceding
   that offshoring back office work is lawful and closes with the wrap,
   so a provider who already offshores is offered a way in rather than a
   telling-off. No country, city or vendor is named: that would read as a
   dig at a nationality and assume facts about the reader.

   ⚠️ Every row prints its source. The screening claim is the sharpest
   sentence here and it comes from the ratified document. If it cannot be
   tied to the instrument on request, cut that row; the others carry the
   band without it.
   ══════════════════════════════════════════════════════════════════ */

const PROOF_TAGS = [
  "Real people, onshore",
  "Australian owned",
  "Nothing clinical, ever",
  "Inside your own systems",
];

const ACCOUNTABILITY_ROWS = [
  {
    tag: "Worker screening",
    body: "NDIS worker screening applies to risk-assessed roles: delivering supports, or more than incidental contact with participants. A worker outside Australia cannot hold an NDIS Worker Screening clearance, so any role that drifts toward participant contact is closed to them. That is why this function does not leave the country.",
    source: "NDIS Commission, worker screening requirements",
  },
  {
    tag: "APP 8 and section 16C",
    body: "When a provider discloses personal information to an overseas recipient, it must take reasonable steps to ensure that recipient does not breach the Australian Privacy Principles, and it can be held accountable for what the recipient does as though it had done it itself. Worker records carry personal information too.",
    source: "Privacy Act 1988 (Cth), APP 8 and section 16C",
  },
  {
    tag: "Records",
    body: "The seven year retention duty for worker and service records sits with the provider, whoever does the typing.",
    source: "NDIS legislation, 2026",
  },
];

function Accountability() {
  return (
    <Band index="06" label="Accountability" tone="dark">
      <AnimatedSection>
        <h3
          className={`${DISPLAY} max-w-[820px] text-[30px] text-white sm:text-[40px] md:text-[48px]`}
        >
          The task can be offshored. The accountability cannot.
        </h3>
        <p className="mt-6 max-w-[760px] text-[15.5px] leading-[1.62] text-white/70 md:text-[17px]">
          A lot of providers in this sector use offshore administrative teams,
          and for genuine back office work that is lawful. This is not an
          argument against it. It is the part of the picture that almost nobody
          puts in writing.
        </p>
      </AnimatedSection>

      <div className="mt-10 border-t border-white/10">
        {ACCOUNTABILITY_ROWS.map((r, i) => (
          <AnimatedSection key={r.tag} delay={i * 0.06}>
            <div className="grid gap-y-3 border-b border-white/10 py-6 sm:grid-cols-[minmax(0,1fr)_190px] sm:gap-x-8 sm:px-3">
              <div>
                <p className={`${MICRO} text-[#7AA2FF]`}>{r.tag}</p>
                <p className="mt-3 max-w-[620px] text-[15px] leading-[1.62] text-white/80 md:text-[16px]">
                  {r.body}
                </p>
              </div>
              <p className={`${MICRO_TIGHT} self-end text-white/40 sm:text-right`}>
                {r.source}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.1}>
        <p className="mt-9 max-w-[820px] border-l-2 border-[#3A6CFF] pl-6 text-[17px] font-medium leading-[1.5] text-white md:text-[20px]">
          In a sector where the regulator now asks who holds your workforce
          together, this offer&apos;s answer is a named party, with the file to
          prove it.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.14}>
        <div className="mt-10 rounded-[12px] border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <p className={`${MICRO} text-white/45`}>
            If you already have an offshore administrative team
          </p>
          <p className="mt-4 max-w-[760px] text-[15.5px] leading-[1.62] text-white/80 md:text-[17px]">
            Keep them. We are not asking you to move anyone. We run the
            screening, the onboarding records and the training evidence, we run
            quality assurance over the administrative work that comes back, and
            we assemble the file to the standard your audit will apply, the
            offshore work included. You keep the arrangement you built. The
            function becomes one somebody answers for.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.18}>
        <p className={`${MICRO} mt-12 text-white/45`}>This isn&apos;t a proposal</p>
        <p className="mt-6 max-w-[900px] border-l-2 border-[#3A6CFF] pl-6 text-[19px] font-medium leading-[1.42] text-white sm:text-[24px] md:text-[30px]">
          Our desk already operates for Australian care providers every night of
          the year, inside their systems and to their protocols, with a
          structured handover waiting every morning.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.22}>
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
   11 · HOW IT STARTS
   ══════════════════════════════════════════════════════════════════ */

const STEPS: { n: string; title: string; body: string; points?: string[] }[] = [
  {
    n: "01",
    title: "The review",
    body: "We map your hiring pattern, your onboarding and training obligations, and where your worker records currently live. Then we put that next to what the next placement fee or coordinator salary actually costs you.",
  },
  {
    n: "02",
    title: "The handover plan",
    body: "Your criteria, your approvals and your systems access, documented and agreed before we do anything.",
    points: [
      "The criteria a candidate has to meet before they reach you.",
      "Who approves a hire, and who approves a pool engagement.",
      "Access to the systems you already run.",
      "Worker screening clearances confirmed for anyone whose role makes participant contact plausible.",
    ],
  },
  {
    n: "03",
    title: "The baseline",
    body: "Before we change anything we measure what is happening now: time to hire, how many files are current, what is chased late and what is missing. That measurement is the only benchmark we ever report against.",
  },
  {
    n: "04",
    title: "The function runs",
    body: "Recruitment runs continuously, the records stay current, the pool sits behind your roster, and the monthly report shows every outcome against your baseline.",
  },
];

function HowItStarts() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Band index="07" label="How it starts" tone="tint">
      <AnimatedSection>
        <h3
          className={`${DISPLAY} max-w-[820px] text-[30px] text-[#0B0E14] sm:text-[40px] md:text-[48px]`}
        >
          Four steps.
        </h3>
      </AnimatedSection>

      <div ref={ref} className="relative mt-10">
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

        <div className="grid gap-10 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative md:pt-9">
              <motion.span
                aria-hidden
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.25 }}
                className="absolute left-0 top-[6px] hidden h-[9px] w-[9px] rotate-45 border border-[#003DDB] bg-[#F7F8FA] md:block"
              />
              <p
                className={`${NUM} text-[56px] font-medium leading-none text-[#EDEFF3] md:text-[68px] [-webkit-text-stroke:1px_#D3D8E2]`}
              >
                {s.n}
              </p>
              <h4 className="mt-4 text-[18px] font-semibold tracking-tight text-[#0B0E14] md:text-[20px]">
                {s.title}
              </h4>
              <p className="mt-3 text-[15px] leading-[1.62] text-[#454E5C]">
                {s.body}
              </p>
              {s.points ? (
                <ul className="mt-4 space-y-2">
                  {s.points.map((pt) => (
                    <li
                      key={pt}
                      className="grid grid-cols-[14px_minmax(0,1fr)] gap-x-2 text-[14px] leading-[1.55] text-[#5B6472]"
                    >
                      <span aria-hidden className="pt-[7px]">
                        <span className="block h-[4px] w-[4px] rounded-full bg-[#C3CAD5]" />
                      </span>
                      <span>{pt}</span>
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
   12 · QUESTIONS
   ══════════════════════════════════════════════════════════════════ */

const FAQS = [
  {
    q: "Are you a recruitment agency?",
    a: "No. Recruitment is one of the functions we run for you, not a category we belong to. We source and screen candidates against your criteria for your own workforce, and every hiring decision is yours. The worker joins your team, and there is no placement fee, because we are not paid per hire.",
  },
  {
    q: "Do you employ the workers in the pool?",
    a: "No. Pool workers are independent businesses on their own ABN. When you engage one, the service agreement is between you and that worker, you approve the engagement against your own criteria, and you pay the worker directly. We verify their screening and credentials, surface who is available, and record the evidence of the engagement.",
  },
  {
    q: "Can you guarantee a shift gets filled?",
    a: "No, and nobody honest in this sector can. Availability is availability. What we can do is make sure the people who are available are screened, current and visible to you in the moment you need them, and that whatever happens is recorded properly either way.",
  },
  {
    q: "Who decides whether a worker suits a particular participant?",
    a: "You do. We surface who is screened, current and available, and the match is your call under your own rules. Anything that turns on a participant's needs is a decision for your people, not ours.",
  },
  {
    q: "Does this transfer our duty of care?",
    a: "No. Your duty of care stays exactly where it is. We run the function around your workforce and we keep the evidence. The responsibility for participant safety and for what gets reported remains yours.",
  },
  {
    q: "Are we locked in?",
    a: "No. Engagements run quarter to quarter, and either party may step away at the end of any quarter with 30 days written notice.",
  },
];

function Questions() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Band id="faq" index="08" label="Questions">
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
   13 · BOOK
   ══════════════════════════════════════════════════════════════════ */

function FinalCta() {
  return (
    <section
      id="book"
      className="scroll-mt-28 border-t border-white/10 bg-[#0A0D14]"
    >
      <div className={`${WRAP} ${PAD} ${BAND} border-x border-white/10`}>
        <div className="grid gap-8 lg:grid-cols-[124px_minmax(0,1fr)] lg:gap-12">
          <Rail index="09" label="Book" tone="dark" />
          <div className="min-w-0">
            <AnimatedSection>
              <h3
                className={`${DISPLAY} text-[34px] text-white sm:text-[48px] md:text-[58px]`}
              >
                Book a workforce review.
              </h3>
              <p className="mt-5 max-w-[620px] text-[16px] leading-[1.62] text-white/65 md:text-[17px]">
                We will map your hiring pattern, your onboarding and training
                obligations and where your worker records live today, and show
                you exactly what we would measure in your first 30 days.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="mt-10 max-w-[940px]">
                <BookingEmbed
                  source="workforce-partner"
                  title="Book a workforce review with Novada"
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

export default function WorkforcePartnerPage() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <DeskNav />
      <StatusStrip />
      <BuiltFor />

      <main>
        <Hero />
        <Decision />
        <WhatYouAreBuying />
        <Lifecycle />
        <Pool />
        <Scope />
        <Accountability />
        <HowItStarts />
        <Questions />
        <FinalCta />
      </main>

      <DeskFooter bookHref="#book" />
      <StickyCta
        label="Book a Workforce Review"
        tagline="We build and back your workforce, and we answer for the file."
      />
    </div>
  );
}
