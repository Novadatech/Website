"use client";

/*
 * DESIGN A: "Editorial Operations".
 *
 * A design exploration for the home page. Content and structure are the
 * approved ones. Only the visual language is new.
 *
 * The idea: render the page as a serious operational publication rather
 * than a marketing site. Swiss grid discipline, hairline rules, hung
 * folios and running heads, a real ruled evidence table with tabular
 * figures, and one full bleed black plate carrying the arithmetic.
 *
 * Two acts. Front matter is printed on paper stock (warm off white),
 * because that is where the argument is set. Back matter (the
 * measurement promise, the proof, the questions and the booking) drops
 * to an ink plate, which is the cinematic register the founder liked.
 *
 * Type is cast in four voices with four jobs:
 *   Poppins ExtraLight  display sentences (the authored voice)
 *   Barlow Condensed    folios, numerals, the hammer line (the structure)
 *   Space Grotesk       labels, sources, captions (the apparatus)
 *   Inter               body copy (the reading)
 *
 * BINDING COPY RULES observed here, do not relax without sign off:
 *   Australian spelling, no em dashes anywhere.
 *   No pricing, no numbers, ranges, anchors or hints.
 *   Never a claim that we replace a receptionist or any whole role.
 *   Nothing clinical: no triage, assessment or advice language.
 *   No guarantees, ROI promises or performance claims.
 *   Statistics only from the approved table, each printing its source.
 *   168 and 38 are arithmetic, not statistics, so they carry no source
 *   and the figure says so on its face.
 *   No client names, logos or written testimonials.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import HomeFaq from "@/components/desk/HomeFaq";
import BookingEmbed from "@/components/desk/BookingEmbed";
import StickyCta from "@/components/desk/StickyCta";

/* ------------------------------------------------------------------ *
 * Local tokens. Deliberately not the Desk tokens: no rounded cards,
 * no shadows, no tint blues. Paper, ink, hairline, one spot colour.
 * ------------------------------------------------------------------ */

const PAPER = "#F3F1EB";
const PLATE = "#080808";

const WRAP = "mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12";

/* The apparatus: labels, sources, captions, buttons. */
const LABEL = "font-supply text-[10px] uppercase tracking-[0.22em]";
/* The authored voice. */
const DISPLAY = "font-poppins font-extralight tracking-[-0.02em]";
/* The structure: folios, numerals, the hammer. */
const COND = "font-condensed font-bold uppercase";

const TAB = { fontVariantNumeric: "tabular-nums" } as const;

/* ------------------------------------------------------------------ *
 * Content. Exactly the approved copy.
 * ------------------------------------------------------------------ */

const INDEX = [
  { id: "problem", n: "01", label: "The event" },
  { id: "week", n: "02", label: "One week" },
  { id: "desks", n: "03", label: "Two desks" },
  { id: "how", n: "04", label: "How it works" },
  { id: "boundaries", n: "05", label: "What we don’t do" },
  { id: "evidence", n: "06", label: "Why now" },
  { id: "measurement", n: "07", label: "Measurement" },
];

const PROBLEMS = [
  "The new-patient call rings out while reception is with the patient standing in front of them.",
  "The recall list has 400 names and nobody has time to run it.",
  "It is 4am, a shift just fell over, and someone senior is awake finding cover.",
];

const DESKS = [
  {
    letter: "A",
    over: "For clinics",
    title: "The Patient Access Desk",
    body: "For dental, physio, OT, psychology, podiatry, speech, vet and other private practices. We answer the calls, make the bookings in your own practice software, run the recalls every week and recover the cancellations, so a growing practice can add capacity without automatically adding another front-office salary.",
    href: "/patient-access-desk",
    cta: "For Clinics",
  },
  {
    letter: "B",
    over: "For care providers",
    title: "The Workforce Ops Desk",
    body: "For NDIS, home care and aged care providers. Rostering admin, after-hours call-offs answered every night, intake and onboarding admin, and compliance records kept to the 7-year statutory standard, so your managers stop being the overnight department.",
    href: "/workforce-ops-desk",
    cta: "For Care Providers",
  },
];

const STEPS = [
  {
    n: "01",
    label: "The review",
    body: "We map your call, booking and coordination workload, and what it is costing you today.",
  },
  {
    n: "02",
    label: "The baseline",
    body: "Week one. We measure your current numbers inside your own systems, before we change anything.",
  },
  {
    n: "03",
    label: "The desk runs",
    body: "We take the workload, and the monthly report shows every call, booking, recovery and event from day one.",
  },
];

const BOUNDARIES = [
  "Nothing clinical: no triage, no advice. Urgent matters route straight to your team under an agreed protocol.",
  "Nothing at the front counter: greeting, payments and in-person care stay with your people.",
  "We work alongside your front desk, not instead of it.",
  "Onshore team, Australian owned, and your data stays in your own systems.",
];

const EVIDENCE = [
  {
    figure: "+4.75%",
    statement:
      "Award wages rose again on 1 July 2026, with superannuation now at 12%. The cost of the next admin hire rises every July.",
    source: "Fair Work Commission; ATO",
  },
  {
    figure: "46% vs 13%",
    statement:
      "46% of Australian small businesses grew revenue last year. Only 13% grew headcount.",
    source: "CPA Australia Asia-Pacific Small Business Survey",
  },
  {
    figure: "$87,740 to $114,827",
    statement:
      "What missed appointments cost two Queensland physiotherapy clinics per clinic, per year, in a peer-reviewed study.",
    source: "BMJ Open, 2025",
  },
];

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/* Monday to Thursday, 9 to 5 is 32 hours. Friday, 9 to 3 is 6. Total 38. */
function isCovered(day: number, hour: number) {
  if (day <= 3) return hour >= 9 && hour < 17;
  if (day === 4) return hour >= 9 && hour < 15;
  return false;
}

/* ------------------------------------------------------------------ *
 * Small parts
 * ------------------------------------------------------------------ */

/* The Swiss column field, drawn faintly behind the front matter so the
   grid the page is set on is visible rather than implied. */
function ColumnField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
      <div className={`${WRAP} h-full`}>
        <div className="grid h-full grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-[#E5E1D8]" />
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionHead({
  n,
  kicker,
  title,
  dark = false,
  size = "text-[30px] sm:text-[40px] md:text-[50px]",
}: {
  n: string;
  kicker: string;
  title?: React.ReactNode;
  dark?: boolean;
  size?: string;
}) {
  return (
    <div
      className={`grid grid-cols-12 gap-x-6 gap-y-7 border-t pt-5 md:pt-6 ${
        dark ? "border-white/15" : "border-[#D8D3C7]"
      }`}
    >
      <div className="col-span-12 lg:col-span-3">
        <div className="flex items-baseline gap-4">
          <span
            className={`${COND} text-[13px] tracking-[0.12em]`}
            style={{ ...TAB, color: dark ? "#7AA2FF" : "#003DDB" }}
          >
            {n}
          </span>
          <span className={`${LABEL} ${dark ? "text-white/45" : "text-[#8C8E95]"}`}>
            {kicker}
          </span>
        </div>
      </div>
      {title ? (
        <h2
          className={`col-span-12 lg:col-span-9 ${DISPLAY} leading-[1.0] ${size} ${
            dark ? "text-white" : "text-[#111318]"
          }`}
        >
          {title}
        </h2>
      ) : null}
    </div>
  );
}

/* The document header: a running head with the live section and a
   hairline that fills as the page is read. */
function RunningHead() {
  /* -1 is the front matter, before section 01 is reached. */
  const [active, setActive] = useState(-1);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.3,
  });

  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let next = -1;
      INDEX.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= line) next = i;
      });
      setActive(next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="sticky top-16 z-40 md:top-20" style={{ backgroundColor: PLATE }}>
      <div className={WRAP}>
        <div className="flex h-9 items-center justify-between gap-4">
          <span className={`${LABEL} truncate text-white/40`}>Novada Tech · The Desk</span>
          <span
            className={`flex items-center gap-3 transition-opacity duration-500 ${
              active < 0 ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className={`${LABEL} truncate text-white/70`}>
              {INDEX[Math.max(active, 0)].label}
            </span>
            <span className={`${LABEL} text-white/30`} style={TAB}>
              {INDEX[Math.max(active, 0)].n} / 07
            </span>
          </span>
        </div>
      </div>
      <div className="h-px w-full bg-white/10">
        <motion.div
          className="h-px origin-left bg-[#003DDB]"
          style={{ scaleX: progress }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 1 · Masthead and hero
 * ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative">
      <ColumnField />

      <div className={`${WRAP} relative`}>
        {/* Masthead strip */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D8D3C7] py-3.5">
          <span className={`${LABEL} text-[#111318]`}>
            Healthcare Clinics · Care Providers · Australia
          </span>
          <span className={`${LABEL} hidden text-[#8C8E95] lg:block`}>
            Onshore team · Australian owned · Nothing clinical, ever
          </span>
        </div>

        <div className="pt-12 md:pt-16 lg:pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-[#111318]"
          >
            <span
              className={`${DISPLAY} block text-[38px] leading-[1.02] sm:text-[54px] md:text-[70px] lg:text-[84px]`}
            >
              Revenue is won or lost
              <br className="hidden sm:inline" /> at the desk.
            </span>
            <span
              className={`${COND} mt-2 block text-[56px] leading-[0.82] tracking-[-0.015em] text-[#003DDB] sm:text-[84px] md:text-[112px] lg:text-[128px]`}
            >
              We run it.
            </span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-12 items-start gap-x-6 pt-10 md:pt-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="col-span-12 lg:col-span-7"
          >
            <p className="max-w-[62ch] text-[16px] leading-[1.65] text-[#3C3F47] md:text-[18px]">
              Novada runs the front desk for Australian clinics and the
              coordination desk for care providers. Every call answered, every
              shift covered, everything measured. Alongside your team, not
              instead of them.
            </p>

            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="#book"
                className={`${LABEL} group inline-flex w-full items-center justify-center gap-3 bg-[#003DDB] px-8 py-[18px] text-white transition-colors hover:bg-[#0031ae] sm:w-auto`}
              >
                Book a Review
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#how"
                className={`${LABEL} group inline-flex items-center gap-3 border-b border-[#111318] py-2 text-[#111318]`}
              >
                See how it works
                <span className="h-px w-6 bg-[#111318] transition-all duration-300 group-hover:w-10" />
              </a>
            </div>
          </motion.div>

          {/* The contents page. It behaves like an index and reads like one. */}
          <motion.nav
            aria-label="Page contents"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="col-span-4 col-start-9 hidden lg:block"
          >
            <p className={`${LABEL} text-[#8C8E95]`}>Contents</p>
            <ul className="mt-4 border-t border-[#D8D3C7]">
              {INDEX.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-baseline gap-4 border-b border-[#E5E1D8] py-[9px]"
                  >
                    <span
                      className={`${COND} text-[12px] tracking-[0.12em] text-[#003DDB]`}
                      style={TAB}
                    >
                      {s.n}
                    </span>
                    <span className="text-[13px] text-[#5B5E66] transition-colors group-hover:text-[#111318]">
                      {s.label}
                    </span>
                    <ArrowRight className="ml-auto h-3.5 w-3.5 -translate-x-1 self-center text-[#003DDB] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        </div>

        {/* Trust strip, set as a ruled data band rather than badges. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="relative mt-14 grid grid-cols-1 border-t border-[#D8D3C7] bg-[#F3F1EB] md:mt-20 md:grid-cols-3"
        >
          <div className="border-b border-[#E5E1D8] py-5 md:border-b-0 md:pr-8">
            <p className="flex items-baseline gap-2">
              <span className="text-[15px] text-[#003DDB]">★</span>
              <span
                className={`${COND} text-[30px] leading-none text-[#111318]`}
                style={TAB}
              >
                4.9/5
              </span>
            </p>
            <Link
              href="/case-study"
              className="mt-2 inline-flex items-center gap-1.5 text-[13px] text-[#5B5E66] underline decoration-[#C9C3B4] underline-offset-4 transition-colors hover:text-[#003DDB] hover:decoration-[#003DDB]"
            >
              from 77+ independent client reviews
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="border-b border-[#E5E1D8] py-5 md:border-b-0 md:border-l md:border-l-[#D8D3C7] md:px-8">
            <p className={`${COND} text-[30px] leading-none text-[#111318]`} style={TAB}>
              350+
            </p>
            <p className="mt-2 text-[13px] text-[#5B5E66]">
              Australian businesses supported
            </p>
          </div>
          <div className="py-5 md:border-l md:border-l-[#D8D3C7] md:pl-8">
            <p className={`${LABEL} text-[#111318]`}>Onshore team</p>
            <p className="mt-2 text-[13px] leading-relaxed text-[#5B5E66]">
              Australian owned. Nothing clinical, ever.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * 2 · The event
 * ------------------------------------------------------------------ */

function Problem() {
  return (
    <section
      id="problem"
      className="scroll-mt-[112px] py-20 md:py-28 lg:py-32"
    >
      <div className={WRAP}>
        <SectionHead n="01" kicker="The event" />

        <div className="mt-8 border-t border-[#D8D3C7] md:mt-10">
          {PROBLEMS.map((p, i) => (
            <AnimatedSection key={p} delay={i * 0.08}>
              <div className="grid grid-cols-12 gap-x-6 border-b border-[#E5E1D8] py-8 md:py-10">
                <div className="col-span-12 lg:col-span-3">
                  <span
                    className={`${COND} text-[13px] tracking-[0.12em] text-[#003DDB]`}
                    style={TAB}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p
                  className={`col-span-12 mt-3 lg:col-span-9 lg:mt-0 ${DISPLAY} text-[22px] leading-[1.28] text-[#111318] sm:text-[27px] md:text-[32px]`}
                >
                  {p}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.1}>
          <div className="mt-12 grid grid-cols-12 gap-x-6 md:mt-16">
            <div className="col-span-12 lg:col-span-9 lg:col-start-4">
              <div className="border-l-2 border-[#003DDB] pl-6 md:pl-8">
                <p className={`${DISPLAY} text-[24px] leading-[1.25] text-[#111318] sm:text-[30px] md:text-[36px]`}>
                  Different businesses, same event: work that reached the desk
                  and left.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * 3 · The plate: 168 and 38
 * ------------------------------------------------------------------ */

function WeekPlate() {
  const cell = {
    hidden: { opacity: 0, scale: 0.55 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
  };

  const TEMPLATE =
    "grid-cols-[26px_repeat(24,minmax(0,1fr))] md:grid-cols-[44px_repeat(24,minmax(0,1fr))]";

  return (
    <section
      id="week"
      className="scroll-mt-[112px] py-20 md:py-28 lg:py-32"
      style={{ backgroundColor: PLATE }}
    >
      <div className={WRAP}>
        <SectionHead
          n="02"
          kicker="One week"
          dark
          title="The desk is a 168-hour job staffed for 38."
        />

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-20">
          {/* The two numerals. Their colours are the legend for the figure. */}
          <div className="col-span-12 lg:col-span-4">
            <div className="border-t border-white/15 pt-5">
              <p className={`${COND} text-[76px] leading-[0.8] text-white/20 md:text-[104px]`} style={TAB}>
                168
              </p>
              <p className={`${LABEL} mt-4 text-white/40`}>Hours in a week</p>
            </div>
            <div className="mt-8 border-t border-white/15 pt-5">
              <p
                className={`${COND} text-[76px] leading-[0.8] md:text-[104px]`}
                style={{ ...TAB, color: PAPER }}
              >
                38
              </p>
              <p className={`${LABEL} mt-4 text-white/40`}>Hours covered</p>
            </div>

            <p className="mt-8 max-w-[42ch] text-[14px] leading-[1.7] text-white/55">
              A week is 168 hours. A standard full-time desk covers about 38 of
              them: Monday to Thursday, 9 to 5, and Friday, 9 to 3.
            </p>
            <p className="mt-4 max-w-[42ch] text-[12px] leading-[1.6] text-white/35">
              Arithmetic, not a statistic, so it carries no source.
            </p>
          </div>

          {/* The figure. 168 cells. 38 of them are covered. */}
          <figure className="col-span-12 lg:col-span-8">
            <figcaption className={`${LABEL} mb-5 flex items-center gap-3 text-white/40`}>
              <span className="text-[#7AA2FF]">Fig. 01</span>
              <span className="h-px flex-1 bg-white/15" />
              <span>One week, hour by hour</span>
            </figcaption>

            {/* The 4am marker, hung above the column it belongs to. */}
            <div className={`grid ${TEMPLATE} items-end gap-[2px] md:gap-[3px]`}>
              <div />
              {Array.from({ length: 24 }).map((_, h) => (
                <div key={h} className="relative h-6">
                  {h === 4 ? (
                    <>
                      <span
                        className={`${LABEL} absolute bottom-[7px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] text-[#7AA2FF]`}
                      >
                        04:00
                      </span>
                      <span className="absolute bottom-0 left-1/2 h-[6px] w-px -translate-x-1/2 bg-[#7AA2FF]" />
                    </>
                  ) : null}
                </div>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.0045 } } }}
              className={`grid ${TEMPLATE} gap-[2px] md:gap-[3px]`}
            >
              {DAYS.flatMap((day, d) => [
                <div
                  key={`label-${day}`}
                  className={`${LABEL} flex items-center text-[9px] text-white/35 md:text-[10px]`}
                >
                  {day}
                </div>,
                ...Array.from({ length: 24 }).map((_, h) => {
                  const on = isCovered(d, h);
                  return (
                    <motion.div
                      key={`${day}-${h}`}
                      variants={cell}
                      className="aspect-square w-full"
                      style={{
                        backgroundColor: on ? PAPER : "rgba(255,255,255,0.055)",
                        boxShadow:
                          h === 4 ? "inset 0 0 0 1px rgba(122,162,255,0.45)" : undefined,
                      }}
                    />
                  );
                }),
              ])}
            </motion.div>

            {/* Hour axis */}
            <div className={`mt-3 hidden ${TEMPLATE} gap-[2px] sm:grid md:gap-[3px]`}>
              <div />
              {Array.from({ length: 24 }).map((_, h) => (
                <div key={h} className="relative h-3">
                  {h % 6 === 0 ? (
                    <span
                      className={`${LABEL} absolute left-1/2 top-0 -translate-x-1/2 text-[9px] text-white/30`}
                      style={TAB}
                    >
                      {String(h).padStart(2, "0")}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/15 pt-5">
              <span className={`${LABEL} flex items-center gap-2.5 text-white/45`}>
                <span className="h-3 w-3" style={{ backgroundColor: PAPER }} />
                Covered
              </span>
              <span className={`${LABEL} flex items-center gap-2.5 text-white/45`}>
                <span className="h-3 w-3 bg-white/[0.055]" />
                Not covered
              </span>
              <span className={`${LABEL} flex items-center gap-2.5 text-white/45`}>
                <span className="h-3 w-3 border border-[#7AA2FF]/60" />
                04:00
              </span>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * 4 · Two desks
 * ------------------------------------------------------------------ */

function Desks() {
  return (
    <section id="desks" className="scroll-mt-[112px] py-20 md:py-28 lg:py-32">
      <div className={WRAP}>
        <SectionHead n="03" kicker="Two desks" />

        <div className="mt-8 grid grid-cols-1 border-t border-[#D8D3C7] md:mt-10 md:grid-cols-2">
          {DESKS.map((d, i) => (
            <AnimatedSection
              key={d.title}
              delay={i * 0.12}
              className={
                i === 1
                  ? "border-t border-[#D8D3C7] md:border-l md:border-t-0 md:pl-10 lg:pl-14"
                  : "md:pr-10 lg:pr-14"
              }
            >
              <div className="group relative flex h-full flex-col pb-10 pt-9 md:pb-12 md:pt-11">
                <span
                  aria-hidden
                  className={`${COND} pointer-events-none absolute right-0 top-6 text-[68px] leading-none text-[#DFDACC] transition-colors duration-500 group-hover:text-[#003DDB]/25`}
                >
                  {d.letter}
                </span>

                <p className={`${LABEL} text-[#003DDB]`}>{d.over}</p>
                <h3
                  className={`${DISPLAY} mt-5 max-w-[14ch] text-[28px] leading-[1.05] text-[#111318] sm:text-[34px] md:text-[40px]`}
                >
                  {d.title}
                </h3>
                <p className="mt-6 max-w-[52ch] text-[15px] leading-[1.7] text-[#3C3F47] md:text-[16px]">
                  {d.body}
                </p>

                <div className="mt-auto pt-9">
                  <Link
                    href={d.href}
                    className={`${LABEL} inline-flex items-center gap-3 border-t border-[#111318] pt-4 text-[#111318] transition-colors hover:text-[#003DDB]`}
                  >
                    {d.cta}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="border-t border-[#D8D3C7]" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * 5 · How it works
 * ------------------------------------------------------------------ */

function How() {
  return (
    <section
      id="how"
      className="scroll-mt-[112px] border-y border-[#E0DBCE] py-20 md:py-28 lg:py-32"
      style={{ backgroundColor: "#EAE7DE" }}
    >
      <div className={WRAP}>
        <SectionHead n="04" kicker="How it works" />

        <div className="mt-8 grid grid-cols-1 border-t border-[#D2CCBC] md:mt-10 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <AnimatedSection
              key={s.n}
              delay={i * 0.1}
              className={
                i === 0
                  ? "md:pr-8"
                  : "border-t border-[#D2CCBC] md:border-l md:border-t-0 md:px-8"
              }
            >
              <div className="h-full pb-2 pt-8 md:pt-10">
                <p
                  className={`${COND} text-[64px] leading-[0.8] text-[#003DDB] md:text-[80px]`}
                  style={TAB}
                >
                  {s.n}
                </p>
                <h3 className="mt-6 text-[17px] font-semibold text-[#111318]">
                  {s.label}
                </h3>
                <p className="mt-3 max-w-[38ch] pb-8 text-[15px] leading-[1.7] text-[#3C3F47]">
                  {s.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * 6 · What we don't do
 * ------------------------------------------------------------------ */

function Boundaries() {
  return (
    <section id="boundaries" className="scroll-mt-[112px] py-20 md:py-28 lg:py-32">
      <div className={WRAP}>
        <SectionHead n="05" kicker="Boundaries" title="What we don’t do." />

        <div className="mt-12 grid grid-cols-1 border-t border-[#D8D3C7] sm:grid-cols-2 md:mt-16">
          {BOUNDARIES.map((b, i) => (
            <AnimatedSection
              key={b}
              delay={i * 0.07}
              className={`border-b border-[#E5E1D8] ${
                i % 2 === 1 ? "sm:border-l sm:border-l-[#E5E1D8]" : ""
              }`}
            >
              <div className={`flex h-full gap-5 py-8 md:gap-7 md:py-10 ${i % 2 === 1 ? "sm:pl-8 md:pl-10" : "sm:pr-8 md:pr-10"}`}>
                <span
                  className={`${COND} shrink-0 text-[13px] leading-[1.6] tracking-[0.12em] text-[#003DDB]`}
                  style={TAB}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="max-w-[46ch] text-[15px] leading-[1.7] text-[#3C3F47] md:text-[16px]">
                  {b}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * 7 · Why now. The ruled evidence table.
 * ------------------------------------------------------------------ */

function Evidence() {
  return (
    <section id="evidence" className="scroll-mt-[112px] py-20 md:py-28 lg:py-32">
      <div className={WRAP}>
        <SectionHead n="06" kicker="Why now" title="Why now." />

        <div className="mt-12 md:mt-16">
          {/* Column heads */}
          <div className="hidden grid-cols-12 gap-x-6 border-b border-[#111318] pb-3 md:grid">
            <span className={`${LABEL} col-span-4 text-[#8C8E95]`}>Figure</span>
            <span className={`${LABEL} col-span-5 text-[#8C8E95]`}>What it means</span>
            <span className={`${LABEL} col-span-3 text-[#8C8E95]`}>Source</span>
          </div>

          {EVIDENCE.map((e, i) => (
            <AnimatedSection key={e.figure} delay={i * 0.1}>
              <div className="grid grid-cols-12 gap-x-6 gap-y-4 border-b border-[#D8D3C7] py-8 transition-colors duration-300 hover:bg-[#EAE7DE]/60 md:py-9">
                <div className="col-span-12 md:col-span-4">
                  <p
                    className={`${COND} text-[34px] leading-[0.95] tracking-[-0.01em] text-[#003DDB] sm:text-[40px]`}
                    style={TAB}
                  >
                    {e.figure}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <p className="max-w-[46ch] text-[15px] leading-[1.7] text-[#111318] md:text-[16px]">
                    {e.statement}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <span className={`${LABEL} mb-2 block text-[#8C8E95] md:hidden`}>
                    Source
                  </span>
                  <p className={`${LABEL} leading-[1.9] text-[#5B5E66]`}>{e.source}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}

          <AnimatedSection delay={0.12}>
            <div className="grid grid-cols-12 gap-x-6 pt-10 md:pt-12">
              <p
                className={`col-span-12 md:col-span-9 md:col-start-4 ${DISPLAY} max-w-[44ch] text-[20px] leading-[1.35] text-[#111318] sm:text-[24px] md:text-[28px]`}
              >
                Before you add the next salary, we’ll benchmark the workload
                against the actual cost of that hire: your numbers, not industry
                claims.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * 8 · The plate: measurement promise and proof of operations
 * ------------------------------------------------------------------ */

function Measurement() {
  return (
    <section
      id="measurement"
      className="scroll-mt-[112px] py-20 md:py-28 lg:py-36"
      style={{ backgroundColor: PLATE }}
    >
      <div className={WRAP}>
        <div className="flex items-baseline justify-center gap-4">
          <span
            className={`${COND} text-[13px] tracking-[0.12em] text-[#7AA2FF]`}
            style={TAB}
          >
            07
          </span>
          <span className={`${LABEL} text-white/45`}>Measurement</span>
        </div>

        <AnimatedSection direction="none" delay={0.05}>
          <h2
            className={`${DISPLAY} mx-auto mt-9 max-w-[16ch] text-center text-[32px] leading-[1.06] text-white sm:text-[46px] md:text-[60px]`}
          >
            We won’t quote you an industry statistic.
          </h2>

          <p className="mx-auto mt-9 max-w-[68ch] text-center text-[16px] leading-[1.75] text-white/60 md:text-[17px]">
            We traced this market’s most-quoted numbers to their sources, and
            most dissolved on contact. So we don’t use them. Instead we measure
            your desk: every enquiry, response time, booking outcome and reason
            lost, reported monthly.{" "}
            <span className="text-white">
              If a number is on this website, it carries its source in the same
              breath.
            </span>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-20 grid grid-cols-12 gap-x-6 gap-y-6 border-t border-white/15 pt-6 md:mt-28">
            <p className={`${LABEL} col-span-12 text-[#7AA2FF] lg:col-span-3`}>
              Proof of operations
            </p>
            <p className="col-span-12 max-w-[58ch] text-[17px] leading-[1.6] text-white/85 lg:col-span-9 md:text-[19px]">
              This isn’t a proposal. Our desk answers after-hours calls for
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

/* ------------------------------------------------------------------ *
 * 9 · Book
 * ------------------------------------------------------------------ */

function Book() {
  return (
    <section
      id="book"
      className="scroll-mt-[112px] border-t border-white/10 py-20 md:py-28"
      style={{ backgroundColor: PLATE }}
    >
      <div className={WRAP}>
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className={`${LABEL} text-[#7AA2FF]`}>The next step</p>
              <h2
                className={`${DISPLAY} mt-6 text-[38px] leading-[1.0] text-white sm:text-[48px] md:text-[56px]`}
              >
                Book a review.
              </h2>
              <p className="mt-6 max-w-[38ch] text-[16px] leading-[1.7] text-white/60">
                We’ll map your workload and show you exactly what we’d measure in
                your first 30 days.
              </p>
              <div className="mt-8 border-t border-white/15 pt-5">
                <p className={`${LABEL} text-white/40`}>
                  Onshore team · Australian owned · Nothing clinical, ever
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <BookingEmbed source="design-a" title="Book a review with Novada" tone="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * The page
 * ------------------------------------------------------------------ */

export default function DesignAPage() {
  return (
    <div style={{ backgroundColor: PAPER, color: "#111318" }}>
      <DeskNav tone="dark" />
      <RunningHead />

      <main>
        <Hero />
        <Problem />
        <WeekPlate />
        <Desks />
        <How />
        <Boundaries />
        <Evidence />
        <Measurement />
        <HomeFaq tone="dark" />
        <Book />
      </main>

      <DeskFooter tone="dark" />
      <StickyCta label="Book a Review" tone="dark" />
    </div>
  );
}
