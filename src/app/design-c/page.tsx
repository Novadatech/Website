"use client";

/*
 * DESIGN C: "Premium dark, cinematic" home page concept.
 *
 * Same content and structure as the ratified home page, rebuilt on a
 * near-black canvas. Depth comes from light (washes, orbs, grain, a
 * horizon hairline) rather than from boxes, and the motion is directed:
 * one pinned narrative that owns the middle of the page, everything else
 * quiet.
 *
 * BINDING COPY RULES applied here, do not relax without founder sign-off:
 *  - Australian spelling. No em dashes anywhere.
 *  - No pricing. No numbers, ranges, anchors or hints.
 *  - Never claim we replace a receptionist or any whole role.
 *  - Nothing clinical: no triage, assessment or advice language.
 *  - No guarantees, ROI promises or performance claims.
 *  - Only the three approved statistics, each printing its source.
 *    The 168/38 figure is arithmetic, not a statistic, so it carries no
 *    source. Do not add one.
 *  - Rating stays unbranded and links to /case-study. No client names,
 *    logos or written testimonials.
 */

import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import HomeFaq from "@/components/desk/HomeFaq";
import BookingEmbed from "@/components/desk/BookingEmbed";
import StickyCta from "@/components/desk/StickyCta";

/* ────────────────────────────────────────────────────────────────────
 * Palette. Brand blue #003DDB is kept for light (washes, glows) and for
 * the primary button fill, where white sits on it at full contrast. It is
 * never used as text on the dark canvas, because it fails there. #7AA2FF
 * is the legible tint that carries the brand into type and UI.
 * ──────────────────────────────────────────────────────────────────── */
const INK = "#06070C";
const BLUE = "#003DDB";
const BLUE_TINT = "#7AA2FF";
const BODY_TEXT = "#A6B2C6";
const MUTED_TEXT = "#8A97AD";

const WRAP = "mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12";
const LABEL =
  "font-supply text-[10px] md:text-[11px] font-medium uppercase tracking-[0.28em]";
/* Display face. Line-height is deliberately NOT set here: every usage
   sets its own, and two competing leading-[] utilities on one element
   resolve by stylesheet order rather than by intent. */
const DISPLAY = "font-poppins font-extralight tracking-[-0.03em]";
const GRADIENT_TEXT =
  "bg-[linear-gradient(104deg,#FFFFFF_0%,#DCE6FF_38%,#7AA2FF_100%)] bg-clip-text text-transparent";

const BTN_PRIMARY_STYLE = {
  background: "linear-gradient(180deg, #1F5AF2 0%, #003DDB 100%)",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.28), 0 20px 48px -16px rgba(0,61,219,0.95)",
};

/* ── Small shared pieces ─────────────────────────────────────────── */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className={`${LABEL} flex items-center gap-3 text-[#7AA2FF]`}>
      <span className="h-px w-8 bg-[#7AA2FF]/45" />
      {children}
    </p>
  );
}

function Rule() {
  return (
    <div
      aria-hidden
      className="h-px w-full"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.14) 22%, rgba(255,255,255,0.14) 78%, transparent)",
      }}
    />
  );
}

/* ── Fixed backdrop: base, parallax light, film grain, vignette ──────
 * Everything sits behind the content, so type stays perfectly crisp and
 * the texture only ever touches the canvas.
 * ─────────────────────────────────────────────────────────────────── */
function Backdrop() {
  const { scrollYProgress } = useScroll();
  const yTop = useTransform(scrollYProgress, [0, 1], ["0%", "-26%"]);
  const yBottom = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const drift = useTransform(scrollYProgress, [0, 1], ["-8%", "10%"]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ background: INK }}
    >
      <motion.div
        style={{
          y: yTop,
          background:
            "radial-gradient(52% 44% at 50% 6%, rgba(0,61,219,0.42) 0%, rgba(0,61,219,0.14) 42%, transparent 72%)",
        }}
        className="absolute inset-x-[-20%] top-[-30%] h-[140vh]"
      />
      <motion.div
        style={{
          x: drift,
          background:
            "radial-gradient(46% 40% at 22% 50%, rgba(122,162,255,0.16) 0%, transparent 68%)",
        }}
        className="absolute inset-y-0 left-[-25%] w-[110vw]"
      />
      <motion.div
        style={{
          y: yBottom,
          background:
            "radial-gradient(48% 40% at 78% 78%, rgba(0,61,219,0.26) 0%, transparent 70%)",
        }}
        className="absolute inset-x-[-15%] bottom-[-20%] h-[120vh]"
      />

      {/* Film grain. feTurbulence at low opacity in soft-light, which is
          what stops a flat near-black from reading as cheap. */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.20] mix-blend-soft-light">
        <filter id="nvt-grain-c">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.82"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#nvt-grain-c)" />
      </svg>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 78% at 50% 12%, transparent 42%, rgba(0,0,0,0.62) 100%)",
        }}
      />
    </div>
  );
}

/* ── Marquee: edge-masked so the row dissolves into the canvas ────── */
function Marquee({
  items,
  duration = 42,
  className = "",
  itemClassName = "",
}: {
  items: string[];
  duration?: number;
  className?: string;
  itemClassName?: string;
}) {
  const reduce = useReducedMotion();
  const doubled = [...items, ...items];
  const mask =
    "linear-gradient(90deg, transparent 0%, #000 14%, #000 86%, transparent 100%)";

  return (
    <div
      className={`flex overflow-hidden ${className}`}
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      <motion.div
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 items-center"
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`flex flex-shrink-0 items-center whitespace-nowrap ${itemClassName}`}
          >
            {item}
            <span
              aria-hidden
              className="mx-8 h-1 w-1 rotate-45 bg-[#7AA2FF]/50 md:mx-12"
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ── 1 · HERO ─────────────────────────────────────────────────────── */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.08]);

  return (
    <section ref={ref} className="relative">
      <div className={`${WRAP} relative pt-20 pb-24 md:pt-28 md:pb-36`}>
        <motion.div
          style={{ y, opacity }}
          className="mx-auto max-w-[980px] text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`${LABEL} text-white/45`}
          >
            Healthcare Clinics
            <span className="mx-2.5 text-[#7AA2FF]">·</span>
            Care Providers
            <span className="mx-2.5 text-[#7AA2FF]">·</span>
            Australia
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.12, ease: [0.22, 0.8, 0.28, 1] }}
            className={`${DISPLAY} mt-8 text-[40px] leading-[1.06] text-white sm:text-[58px] md:text-[76px] lg:text-[88px]`}
          >
            Revenue is won or lost at the desk.
            <span className="block pb-[0.09em]">
              <span className={GRADIENT_TEXT}>We run it.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34 }}
            className="mx-auto mt-8 max-w-[660px] text-[15px] leading-[1.75] md:text-[17px]"
            style={{ color: BODY_TEXT }}
          >
            Novada runs the front desk for Australian clinics and the
            coordination desk for care providers. Every call answered, every
            shift covered, everything measured. Alongside your team, not
            instead of them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.46 }}
            className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#book"
              style={BTN_PRIMARY_STYLE}
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full px-8 py-4 font-supply text-[13px] font-medium tracking-[0.03em] text-white transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
            >
              Book a Review
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#how"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 font-supply text-[13px] font-medium tracking-[0.03em] text-white/85 transition-colors duration-300 hover:border-white/35 hover:bg-white/[0.05] hover:text-white sm:w-auto"
            >
              See how it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.66 }}
            className="mt-12"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              <Link href="/case-study" className="group flex items-center gap-2.5">
                <span className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-[#7AA2FF] text-[#7AA2FF]"
                      strokeWidth={0}
                    />
                  ))}
                </span>
                <span className="text-[13px] text-white/55 transition-colors group-hover:text-white/80">
                  <span className="font-medium text-white">4.9/5</span> from 77+
                  independent client reviews
                </span>
              </Link>
              <span aria-hidden className="hidden h-3 w-px bg-white/15 sm:block" />
              <span className="text-[13px] text-white/55">
                <span className="font-medium text-white">350+</span> Australian
                businesses supported
              </span>
            </div>

            <p className={`${LABEL} mt-7 text-white/30`}>
              Onshore team
              <span className="mx-2 text-[#7AA2FF]/60">·</span>
              Australian owned
              <span className="mx-2 text-[#7AA2FF]/60">·</span>
              Nothing clinical, ever
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Horizon: the desk as a lit line the page rests on. */}
      <div aria-hidden className="relative">
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{
            background:
              "radial-gradient(60% 100% at 50% 100%, rgba(0,61,219,0.30) 0%, transparent 72%)",
          }}
        />
        <Rule />
      </div>
    </section>
  );
}

/* ── 2 · VERTICAL MARQUEE BAND ────────────────────────────────────── */
const VERTICALS = [
  "Dental",
  "Physio",
  "OT",
  "Psychology",
  "Podiatry",
  "Speech",
  "Vet",
  "NDIS",
  "Home care",
  "Aged care",
];

function VerticalBand() {
  return (
    <section className="relative py-12 md:py-14">
      <Marquee
        items={VERTICALS}
        duration={46}
        itemClassName="font-poppins text-[20px] font-extralight tracking-[-0.01em] text-white/40 md:text-[26px]"
      />
      <Rule />
    </section>
  );
}

/* ── 3 · PINNED SCROLL NARRATIVE ──────────────────────────────────── */
const NARRATIVE = [
  "The new-patient call rings out while reception is with the patient standing in front of them.",
  "The recall list has 400 names and nobody has time to run it.",
  "It is 4am, a shift just fell over, and someone senior is awake finding cover.",
  "Different businesses, same event: work that reached the desk and left.",
  "The desk is a 168-hour job staffed for 38.",
];

function NarrativeLine({
  progress,
  index,
  total,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const band = 1 / total;
  const start = index * band;
  const end = start + band;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  /* Each statement owns a band of the pinned scroll. The first is already
     on screen at progress 0 and the last never leaves, so their in/out
     ranges are pushed outside [0,1] and useTransform clamps them. */
  const range = [
    isFirst ? -1 : start - 0.005,
    isFirst ? -0.5 : start + 0.065,
    isLast ? 1.5 : end - 0.065,
    isLast ? 2 : end + 0.005,
  ];

  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const y = useTransform(progress, range, [26, 0, 0, -26]);
  const scale = useTransform(progress, range, [1.045, 1, 1, 0.975]);
  const blurPx = useTransform(progress, range, [12, 0, 0, 12]);
  const filter = useMotionTemplate`blur(${blurPx}px)`;

  return (
    <motion.div
      style={{ opacity, y, scale, filter }}
      className="absolute inset-0 flex flex-col items-center justify-center"
    >
      <p
        className={`${DISPLAY} mx-auto max-w-[1000px] text-center text-[26px] leading-[1.24] sm:text-[36px] md:text-[50px] lg:text-[58px] ${
          isLast ? "" : "text-white"
        }`}
      >
        {isLast ? (
          <span className={`${GRADIENT_TEXT} pb-[0.08em]`}>{NARRATIVE[index]}</span>
        ) : (
          NARRATIVE[index]
        )}
      </p>
      {isLast && (
        <p className="mt-9 text-center font-supply text-[13px] font-medium uppercase tracking-[0.32em] text-[#7AA2FF] md:text-sm">
          We run it.
        </p>
      )}
    </motion.div>
  );
}

function PinnedNarrative() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(NARRATIVE.length - 1, Math.max(0, Math.floor(v * NARRATIVE.length)));
    setActive((prev) => (prev === next ? prev : next));
  });

  const railGlow = useTransform(scrollYProgress, [0, 1], ["12%", "88%"]);

  /* Reduced motion: no pin, no crossfade. Same words, stacked. */
  if (reduce) {
    return (
      <section className="relative">
        <div ref={ref} className={`${WRAP} py-24 md:py-32`}>
          <Eyebrow>The event</Eyebrow>
          <div className="mt-14 space-y-14 md:space-y-20">
            {NARRATIVE.map((line, i) => (
              <AnimatedSection key={line} delay={i * 0.05}>
                <p
                  className={`${DISPLAY} max-w-[900px] text-[24px] leading-[1.28] sm:text-[32px] md:text-[44px] ${
                    i === NARRATIVE.length - 1 ? "" : "text-white"
                  }`}
                >
                  {i === NARRATIVE.length - 1 ? (
                    <span className={`${GRADIENT_TEXT} pb-[0.08em]`}>{line}</span>
                  ) : (
                    line
                  )}
                </p>
                {i === NARRATIVE.length - 1 && (
                  <p className="mt-6 font-supply text-[13px] font-medium uppercase tracking-[0.32em] text-[#7AA2FF]">
                    We run it.
                  </p>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
        <Rule />
      </section>
    );
  }

  return (
    <section className="relative">
      <div ref={ref} className="relative h-[420vh]">
        <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        {/* Directed light: a wash that travels with the narrative. */}
        <motion.div
          aria-hidden
          style={{
            left: railGlow,
            background:
              "radial-gradient(closest-side, rgba(0,61,219,0.40), transparent 100%)",
          }}
          className="pointer-events-none absolute top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2"
        />

        <div className={`${WRAP} relative flex w-full flex-col items-center`}>
          <Eyebrow>The event</Eyebrow>

          {/* Fixed-height stage so every statement crossfades on the same
              optical centre line, whatever its length. */}
          <div className="relative mt-10 h-[46vh] min-h-[240px] w-full md:mt-14">
            {NARRATIVE.map((line, i) => (
              <NarrativeLine
                key={line}
                progress={scrollYProgress}
                index={i}
                total={NARRATIVE.length}
              />
            ))}
          </div>

          {/* Chapter rail. Reads as a film strip, not a scrollbar. */}
          <div className="mt-10 flex items-center justify-center gap-3 md:mt-14">
            {NARRATIVE.map((line, i) => (
              <span
                key={line}
                className={`h-px transition-all duration-500 ${
                  i === active ? "w-12 bg-[#7AA2FF]" : "w-5 bg-white/20"
                }`}
              />
            ))}
            <span className="ml-4 font-supply text-[11px] font-medium tracking-[0.22em] text-white/35">
              {String(active + 1).padStart(2, "0")} / {String(NARRATIVE.length).padStart(2, "0")}
            </span>
          </div>
        </div>
        </div>
      </div>
      <Rule />
    </section>
  );
}

/* ── 4 · THE 168 / 38 VISUAL ──────────────────────────────────────
 * 24 columns by 7 rows. Lit cells are Mon to Thu 9 to 5 and Fri 9 to 3,
 * which is exactly 38. Arithmetic, so no source line.
 * ─────────────────────────────────────────────────────────────────── */
const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function isCovered(day: number, hour: number) {
  if (day <= 3) return hour >= 9 && hour < 17;
  if (day === 4) return hour >= 9 && hour < 15;
  return false;
}

function HourGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();

  return (
    <section className="relative">
      <div className={`${WRAP} py-24 md:py-36`}>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <div>
            <Eyebrow>The arithmetic</Eyebrow>
            <div className="mt-10 flex items-end gap-8 md:gap-12">
              <div>
                <p className="font-condensed text-[76px] font-bold italic leading-[0.78] text-white md:text-[104px]">
                  168
                </p>
                <p className="mt-4 max-w-[190px] text-[13px] leading-relaxed text-white/45">
                  hours in a week
                </p>
              </div>
              <div
                aria-hidden
                className="mb-6 h-16 w-px"
                style={{
                  background:
                    "linear-gradient(180deg, transparent, rgba(255,255,255,0.18), transparent)",
                }}
              />
              <div>
                <p className="font-condensed text-[76px] font-bold italic leading-[0.78] text-[#7AA2FF] md:text-[104px]">
                  38
                </p>
                <p className="mt-4 max-w-[230px] text-[13px] leading-relaxed text-white/45">
                  hours a standard full-time desk covers, Mon to Thu 9 to 5 and
                  Fri 9 to 3
                </p>
              </div>
            </div>
            <p className={`${LABEL} mt-12 text-white/25`}>
              Arithmetic, not a statistic
            </p>
          </div>

          <div ref={ref}>
            <div className="flex flex-col gap-[3px] md:gap-[5px]">
              {DAY_LABELS.map((day, d) => (
                <div key={day} className="flex items-center gap-3 md:gap-4">
                  <span className="w-7 flex-shrink-0 font-supply text-[9px] font-medium uppercase tracking-[0.14em] text-white/25 md:w-9 md:text-[10px]">
                    {day}
                  </span>
                  <div className="grid flex-1 grid-cols-[repeat(24,minmax(0,1fr))] gap-[3px] md:gap-[5px]">
                    {Array.from({ length: 24 }).map((_, h) => {
                      const lit = isCovered(d, h);
                      const shown = reduce || inView;
                      return (
                        <span
                          key={h}
                          className="aspect-square w-full rounded-[1.5px]"
                          style={{
                            background: lit
                              ? "linear-gradient(180deg,#9CBAFF,#4F7EF0)"
                              : "rgba(255,255,255,0.07)",
                            boxShadow: lit
                              ? "0 0 10px rgba(122,162,255,0.55)"
                              : "none",
                            opacity: shown ? 1 : 0,
                            transform: shown ? "scale(1)" : "scale(0.55)",
                            transition:
                              "opacity 520ms cubic-bezier(0.25,0.4,0.25,1), transform 520ms cubic-bezier(0.25,0.4,0.25,1)",
                            transitionDelay: reduce
                              ? "0ms"
                              : `${(d * 24 + h) * 3.2}ms`,
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-6 pl-10 md:pl-[52px]">
              <span className="flex items-center gap-2 text-[11px] text-white/40">
                <span
                  className="h-2 w-2 rounded-[1.5px]"
                  style={{ background: "linear-gradient(180deg,#9CBAFF,#4F7EF0)" }}
                />
                Covered
              </span>
              <span className="flex items-center gap-2 text-[11px] text-white/40">
                <span className="h-2 w-2 rounded-[1.5px] bg-white/10" />
                Not covered
              </span>
            </div>
          </div>
        </div>
      </div>
      <Rule />
    </section>
  );
}

/* ── 5 · TWO DESKS ────────────────────────────────────────────────── */
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

function DeskPanel({ desk }: { desk: (typeof DESKS)[number] }) {
  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const light = useMotionTemplate`radial-gradient(38% 46% at ${px}% ${py}%, rgba(122,162,255,0.16), transparent 72%)`;

  return (
    <Link
      href={desk.href}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        px.set(((e.clientX - r.left) / r.width) * 100);
        py.set(((e.clientY - r.top) / r.height) * 100);
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/[0.09] bg-white/[0.018] p-8 transition-colors duration-500 hover:border-[#7AA2FF]/35 md:p-12"
    >
      <motion.span
        aria-hidden
        style={{ backgroundImage: light }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(122,162,255,0.5), transparent)",
        }}
      />

      <div className="relative">
        <Eyebrow>{desk.eyebrow}</Eyebrow>
        <h3
          className={`${DISPLAY} mt-7 text-[28px] leading-[1.08] text-white sm:text-[34px] md:text-[42px]`}
        >
          {desk.title}
        </h3>
        <p
          className="mt-6 max-w-[520px] text-[14px] leading-[1.8] md:text-[15px]"
          style={{ color: BODY_TEXT }}
        >
          {desk.body}
        </p>
      </div>

      <span className="relative mt-10 inline-flex items-center gap-2.5 font-supply text-[12px] font-medium uppercase tracking-[0.2em] text-white md:mt-auto md:pt-12">
        {desk.cta}
        <ArrowRight className="h-4 w-4 text-[#7AA2FF] transition-transform duration-300 group-hover:translate-x-1.5" />
      </span>
    </Link>
  );
}

function TwoDesks() {
  return (
    <section id="desks" className="relative scroll-mt-24">
      <div className={`${WRAP} py-24 md:py-36`}>
        <AnimatedSection className="max-w-[760px]">
          <Eyebrow>Two desks</Eyebrow>
          <h2
            className={`${DISPLAY} mt-8 text-[32px] leading-[1.04] text-white sm:text-[42px] md:text-[56px]`}
          >
            Every healthcare business has a desk.
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid gap-5 md:mt-20 lg:grid-cols-2">
          {DESKS.map((d, i) => (
            <AnimatedSection key={d.href} delay={i * 0.1} className="h-full">
              <DeskPanel desk={d} />
            </AnimatedSection>
          ))}
        </div>
      </div>
      <Rule />
    </section>
  );
}

/* ── 6 · HOW IT WORKS ─────────────────────────────────────────────── */
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
    <section id="how" className="relative scroll-mt-24">
      <div className={`${WRAP} py-24 md:py-36`}>
        <AnimatedSection>
          <Eyebrow>How it works</Eyebrow>
        </AnimatedSection>

        <div className="mt-14 md:mt-20">
          {STEPS.map((s, i) => (
            <AnimatedSection key={s.n} delay={i * 0.08}>
              <div className="group relative grid items-baseline gap-6 border-t border-white/[0.09] py-10 md:grid-cols-[190px_1fr] md:gap-14 md:py-14">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#7AA2FF]/55 transition-transform duration-700 group-hover:scale-x-100"
                />
                <span
                  className="font-condensed text-[68px] font-bold italic leading-[0.72] text-transparent transition-colors duration-700 group-hover:text-[#7AA2FF]/15 md:text-[112px]"
                  style={{ WebkitTextStroke: "1px rgba(122,162,255,0.55)" }}
                >
                  {s.n}
                </span>
                <div>
                  <h3
                    className={`${DISPLAY} text-[26px] leading-[1.06] text-white sm:text-[32px] md:text-[40px]`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-5 max-w-[640px] text-[14px] leading-[1.8] md:text-[16px]"
                    style={{ color: BODY_TEXT }}
                  >
                    {s.body}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
          <div className="border-t border-white/[0.09]" />
        </div>
      </div>
    </section>
  );
}

/* ── 7 · WHAT WE DON'T DO ─────────────────────────────────────────── */
const BOUNDARIES = [
  "Nothing clinical: no triage, no advice. Urgent matters route straight to your team under an agreed protocol.",
  "Nothing at the front counter: greeting, payments and in-person care stay with your people.",
  "We work alongside your front desk, not instead of it.",
  "Onshore team, Australian owned, and your data stays in your own systems.",
];

function Boundaries() {
  return (
    <section className="relative">
      <div className={`${WRAP} py-24 md:py-36`}>
        <AnimatedSection>
          <Eyebrow>What we don&apos;t do</Eyebrow>
        </AnimatedSection>
        <ul className="mt-14 md:mt-20">
          {BOUNDARIES.map((b, i) => (
            <AnimatedSection key={b} delay={i * 0.06}>
              <li className="flex items-start gap-6 border-t border-white/[0.09] py-8 md:gap-10 md:py-10">
                <span className="mt-2 font-supply text-[11px] font-medium tracking-[0.2em] text-[#7AA2FF]/55">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className={`${DISPLAY} max-w-[860px] text-[19px] leading-[1.46] text-white/90 sm:text-[24px] md:text-[30px]`}
                >
                  {b}
                </p>
              </li>
            </AnimatedSection>
          ))}
        </ul>
        <div className="border-t border-white/[0.09]" />
      </div>
    </section>
  );
}

/* ── 8 · WHY NOW (approved statistics only, each printing its source) ─ */
const EVIDENCE = [
  {
    figure: "+4.75%",
    size: "text-[46px] md:text-[64px]",
    body: "Award wages rose again on 1 July 2026, with superannuation now at 12%. The cost of the next admin hire rises every July.",
    source: "Fair Work Commission; ATO",
  },
  {
    figure: "46% vs 13%",
    size: "text-[40px] md:text-[54px]",
    body: "46% of Australian small businesses grew revenue last year. Only 13% grew headcount.",
    source: "CPA Australia Asia-Pacific Small Business Survey",
  },
  {
    figure: "$87,740 to $114,827",
    size: "text-[27px] md:text-[36px]",
    body: "What missed appointments cost two Queensland physiotherapy clinics per clinic, per year, in a peer-reviewed study.",
    source: "BMJ Open, 2025",
  },
];

function WhyNow() {
  return (
    <section className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[60%]"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, rgba(0,61,219,0.20), transparent 70%)",
        }}
      />
      <div className={`${WRAP} relative py-24 md:py-36`}>
        <AnimatedSection>
          <Eyebrow>Why now</Eyebrow>
        </AnimatedSection>

        <div className="mt-14 grid gap-px md:mt-20 md:grid-cols-3">
          {EVIDENCE.map((e, i) => (
            <AnimatedSection key={e.figure} delay={i * 0.1} className="h-full">
              <div className="flex h-full flex-col border-t border-white/[0.09] pt-9 md:border-l md:border-t-0 md:pl-9 md:pr-6 md:pt-0">
                <p
                  className={`font-condensed font-bold italic leading-[0.82] text-white ${e.size}`}
                >
                  {e.figure}
                </p>
                <p
                  className="mt-7 flex-1 text-[14px] leading-[1.8] md:text-[15px]"
                  style={{ color: BODY_TEXT }}
                >
                  {e.body}
                </p>
                <p
                  className="mt-8 border-t border-white/[0.07] pt-5 font-supply text-[10px] font-medium uppercase tracking-[0.16em]"
                  style={{ color: MUTED_TEXT }}
                >
                  Source: {e.source}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <p
            className={`${DISPLAY} mt-16 max-w-[900px] text-[20px] leading-[1.5] text-white/90 sm:text-[26px] md:mt-24 md:text-[32px]`}
          >
            Before you add the next salary, we&apos;ll benchmark the workload
            against the actual cost of that hire: your numbers, not industry
            claims.
          </p>
        </AnimatedSection>
      </div>
      <Rule />
    </section>
  );
}

/* ── 9 · THE MEASUREMENT PROMISE ──────────────────────────────────── */
function Measurement() {
  return (
    <section className="relative">
      <div className={`${WRAP} py-28 md:py-44`}>
        <AnimatedSection className="mx-auto max-w-[900px] text-center">
          <div className="flex justify-center">
            <Eyebrow>The measurement promise</Eyebrow>
          </div>
          <h2
            className={`${DISPLAY} mt-10 text-[30px] leading-[1.06] sm:text-[42px] md:text-[60px]`}
          >
            <span className={`${GRADIENT_TEXT} pb-[0.09em]`}>
              We won&apos;t quote you an industry statistic.
            </span>
          </h2>
          <p
            className="mx-auto mt-9 max-w-[720px] text-[15px] leading-[1.85] md:text-[17px]"
            style={{ color: BODY_TEXT }}
          >
            We traced this market&apos;s most-quoted numbers to their sources,
            and most dissolved on contact. So we don&apos;t use them. Instead we
            measure your desk: every enquiry, response time, booking outcome and
            reason lost, reported monthly. If a number is on this website, it
            carries its source in the same breath.
          </p>
        </AnimatedSection>
      </div>
      <Rule />
    </section>
  );
}

/* ── 10 · PROOF OF OPERATIONS ─────────────────────────────────────── */
function Proof() {
  return (
    <section className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46% 60% at 18% 50%, rgba(0,61,219,0.24), transparent 70%)",
        }}
      />
      <div className={`${WRAP} relative py-24 md:py-36`}>
        <AnimatedSection>
          <div className="border-l border-[#7AA2FF]/45 pl-7 md:pl-12">
            <Eyebrow>Proof of operations</Eyebrow>
            <p
              className={`${DISPLAY} mt-8 max-w-[940px] text-[21px] leading-[1.45] text-white sm:text-[28px] md:text-[38px]`}
            >
              This isn&apos;t a proposal. Our desk answers after-hours calls for
              Australian care providers every night of the year, inside their
              systems, to their escalation protocols, with a structured handover
              waiting every morning.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── 11 · CLOSING BAND ────────────────────────────────────────────── */
function ClosingBand() {
  return (
    <section className="relative py-10 md:py-12">
      <Rule />
      <Marquee
        items={["Every call answered", "Every shift covered", "Everything measured"]}
        duration={30}
        className="py-10 md:py-14"
        itemClassName="font-poppins text-[24px] font-extralight tracking-[-0.02em] text-white/55 md:text-[38px]"
      />
      <Rule />
    </section>
  );
}

/* ── 12 · FINAL CTA + BOOKING ─────────────────────────────────────── */
function FinalCta() {
  return (
    <section id="book" className="relative scroll-mt-24">
      <div className={`${WRAP} py-24 md:py-36`}>
        <AnimatedSection className="mx-auto max-w-[820px] text-center">
          <h2 className={`${DISPLAY} text-[36px] leading-[1.02] sm:text-[50px] md:text-[68px]`}>
            <span className={`${GRADIENT_TEXT} pb-[0.09em]`}>Book a review.</span>
          </h2>
          <p
            className="mx-auto mt-7 max-w-[620px] text-[15px] leading-[1.8] md:text-[17px]"
            style={{ color: BODY_TEXT }}
          >
            We&apos;ll map your workload and show you exactly what we&apos;d
            measure in your first 30 days.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="relative mx-auto mt-14 max-w-[920px]">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-10 -top-16 h-64"
            style={{
              background:
                "radial-gradient(50% 60% at 50% 0%, rgba(0,61,219,0.45), transparent 72%)",
            }}
          />
          <div className="relative">
            <BookingEmbed source="design-c" title="Book a review with Novada" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── PAGE ─────────────────────────────────────────────────────────── */
export default function DesignCPage() {
  return (
    <div
      data-theme="desk-dark"
      className="relative min-h-screen font-sans text-white antialiased"
      style={{ background: INK }}
    >
      <Backdrop />

      <div className="relative z-10">
        <DeskNav tone="dark" />
        <main>
          <Hero />
          <VerticalBand />
          <PinnedNarrative />
          <HourGrid />
          <TwoDesks />
          <HowItWorks />
          <Boundaries />
          <WhyNow />
          <Measurement />
          <Proof />
          <HomeFaq tone="dark" />
          <ClosingBand />
          <FinalCta />
        </main>
        <DeskFooter tone="dark" />
        <StickyCta />
      </div>
    </div>
  );
}
