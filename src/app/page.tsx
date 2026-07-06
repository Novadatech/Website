"use client";

/*
 * Home page — Morningside AI design replica (user direction, 2026-06-28).
 * Every section mirrors morningside.ai's live treatment, measured via
 * Playwright screenshots + computed styles:
 *
 * - bg #080808; hero top wash linear-gradient(#0F1C1C → transparent)
 * - signature green #0CC481; deep glow #0B6D4A rising from the bottom of
 *   the pinned narrative + final CTA
 * - headings: Poppins w300, GRADIENT TEXT 90deg white→#0CC481
 * - labels/buttons: "PP Supply Sans" on their site → Space Grotesk here
 *   (font-supply), uppercase, wide tracking; buttons white/black 4px
 * - three things: giant 160px ITALIC w200 numerals in dark→green gradient
 *   sitting OUTSIDE wide rounded cards (12px radius, 135deg #111413→#050808,
 *   1px rgba(237,236,228,.06) border, 60/64 padding, line-art icon left),
 *   cards stacked vertically with a staggered left cascade
 * - testimonials: two centered text quotes, key phrases in green, dashed
 *   hairline grid
 * - stats: marquee row, 48px w400 white numbers
 * - case studies: grayscale imagery (YouTube thumbs), CASE STUDY tag, title
 * - FAQ: centered gradient "FAQs", borderless items
 * - closer: 72px gradient lines + "We build for those few." + green glow
 *
 * REVERT: design-backups/home-dark-ember-page.tsx.bak or
 * git checkout backup/home-dark-ember-2026-06-28 -- src/app/page.tsx
 */

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import HeroTrustBar from "@/components/HeroTrustBar";
import { useState, useEffect, useRef } from "react";

const BOOKING_URL = "/book-call";

/* Morningside tokens */
const GREEN = "#0CC481";
const OFFWHITE = "#EDECE4";
const GRAD_TEXT =
  "bg-gradient-to-r from-white to-[#0CC481] bg-clip-text text-transparent";
const BTN_WHITE =
  "font-supply inline-flex items-center gap-2 rounded bg-white px-6 py-3 text-sm font-medium uppercase tracking-[0.1em] text-black transition-colors hover:bg-white/85";

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden">
      {/* Teal-green top wash (their hero linear-gradient #0F1C1C → transparent) */}
      <div className="absolute inset-x-0 top-0 h-[85vh] bg-[linear-gradient(180deg,#0F1C1C_0%,rgba(8,8,8,0)_100%)] pointer-events-none" />

      <div className="relative max-container section-padding text-center">
        {/* Headline — gradient text, exactly their treatment */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`text-4xl sm:text-5xl md:text-7xl font-light tracking-tight leading-[1.12] text-balance max-w-5xl mx-auto pb-2 ${GRAD_TEXT}`}
        >
          We don&apos;t just talk AI. We build it into your business.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-7 text-lg md:text-xl font-light text-[#EDECE4]/90 max-w-2xl mx-auto leading-relaxed"
        >
          We find the AI opportunities that will actually move your numbers —
          then we build the systems, run them for you, and train your team to
          own them.
        </motion.p>

        {/* Trust bar + CTA */}
        <HeroTrustBar className="mt-9" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-9 flex items-center justify-center"
        >
          <a href={BOOKING_URL} className={BTN_WHITE}>
            See If You Qualify
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── CLIENT STRIP (their logo carousel slot) ─── */
function TrustBar() {
  const industries = [
    "Healthcare & Allied Health",
    "B2B Consulting",
    "Executive Coaching",
    "Legal Services",
    "Financial Advisory",
    "Real Estate",
    "SaaS & Tech",
    "E-commerce",
    "Recruitment",
    "Architecture & Design",
    "Accounting & Tax",
    "Insurance Broking",
  ];

  return (
    <section className="pt-4 pb-16 md:pb-20 overflow-hidden">
      <div className="max-container section-padding mb-10">
        <p className="font-supply text-sm uppercase tracking-[0.1em] text-[#EDECE4] text-center">
          From growing startups to established enterprises — 350+ businesses
          across 30+ industries:
        </p>
      </div>
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 flex-shrink-0 items-center"
        >
          {[...industries, ...industries].map((industry, i) => (
            <span
              key={i}
              className="flex-shrink-0 text-xl font-light text-white/40 whitespace-nowrap"
            >
              {industry}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── PROBLEM NARRATIVE (pinned scroll sequence w/ green bottom glow) ─── */
const PROBLEM_STATEMENTS = [
  {
    text: "You bought the AI tools. Read the case studies. Sat through the webinars.",
    final: false,
  },
  {
    text: "But months later, the pipeline is still unpredictable. The team is still buried in manual work. And the subscriptions sit unused.",
    final: false,
  },
  {
    text: "Or you're just getting started — trying to avoid those exact mistakes.",
    final: false,
  },
  {
    text: "You're not behind. You're just missing the systems.",
    final: false,
  },
  {
    text: "That's why we built Novada Tech.",
    sub: "AI systems that actually move the numbers.",
    final: true,
  },
];

function ProblemStatement({
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
  final: boolean;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const span = end - start;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const opacity = useTransform(
    progress,
    [start, start + span * 0.3, start + span * 0.7, end],
    [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0],
  );
  const y = useTransform(
    progress,
    [start, start + span * 0.3, start + span * 0.7, end],
    [isFirst ? 0 : 80, 0, 0, isLast ? 0 : -80],
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col items-center justify-center section-padding text-center"
    >
      <p
        className={
          final
            ? `text-3xl md:text-5xl font-light tracking-tight leading-tight text-balance max-w-3xl pb-1 ${GRAD_TEXT}`
            : "text-2xl md:text-4xl font-light text-[#EDECE4] leading-snug text-balance max-w-3xl"
        }
      >
        {text}
      </p>
      {sub && (
        <p className="mt-5 text-lg md:text-xl font-light text-[#EDECE4]/80">
          {sub}
        </p>
      )}
      {final && (
        <a href={BOOKING_URL} className={`${BTN_WHITE} mt-10`}>
          See If You Qualify
          <ChevronRight className="w-4 h-4" />
        </a>
      )}
    </motion.div>
  );
}

function ProblemNarrative() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const total = PROBLEM_STATEMENTS.length;

  return (
    <section ref={ref} className="relative h-[450vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Deep green glow rising from the bottom — their .radial-gradient:
            linear-gradient(0deg, #0B6D4A, transparent 46%) */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,109,74,0.55)_0%,rgba(11,109,74,0)_46%)] pointer-events-none" />

        {PROBLEM_STATEMENTS.map((s, i) => (
          <ProblemStatement
            key={i}
            index={i}
            total={total}
            progress={scrollYProgress}
            text={s.text}
            sub={s.sub}
            final={s.final}
          />
        ))}

        {/* Scroll progress dots — above the sticky CTA bar */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {PROBLEM_STATEMENTS.map((_, i) => (
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
      className="w-1.5 h-1.5 rounded-full bg-[#0CC481]"
    />
  );
}

/* ─── THREE THINGS (staggered wide cards + giant italic gradient numerals) ─── */

/* Thin line-art icons (their cards use minimal white stroke SVGs) */
function IconIdentify() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-28 h-28 md:w-36 md:h-36" aria-hidden="true">
      <circle cx="48" cy="48" r="26" stroke={OFFWHITE} strokeWidth="1.2" />
      <circle cx="72" cy="48" r="26" stroke={OFFWHITE} strokeWidth="1.2" />
      <circle cx="48" cy="72" r="26" stroke={OFFWHITE} strokeWidth="1.2" />
      <circle cx="72" cy="72" r="26" stroke={OFFWHITE} strokeWidth="1.2" />
    </svg>
  );
}
function IconBuild() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-28 h-28 md:w-36 md:h-36" aria-hidden="true">
      <path d="M60 22 L104 60 L60 98 L16 60 Z" stroke={OFFWHITE} strokeWidth="1.2" />
      <path d="M60 22 L60 98" stroke={OFFWHITE} strokeWidth="1.2" />
      <path d="M16 60 L104 60" stroke={OFFWHITE} strokeWidth="1.2" />
    </svg>
  );
}
function IconRun() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-28 h-28 md:w-36 md:h-36" aria-hidden="true">
      <path d="M20 90 C40 90 40 40 60 40 C80 40 80 70 100 70" stroke={OFFWHITE} strokeWidth="1.2" />
      <path d="M88 58 L100 70 L88 82" stroke={OFFWHITE} strokeWidth="1.2" />
      <circle cx="20" cy="90" r="3" fill={OFFWHITE} />
    </svg>
  );
}

const NUMERAL =
  "font-poppins italic font-extralight text-[120px] md:text-[170px] leading-none bg-gradient-to-r from-[#050707] via-[#0a5c40] to-[#0CC481] bg-clip-text text-transparent select-none";

function ThreeThings() {
  return (
    <section id="solutions" className="section-spacing section-padding">
      <div className="max-container max-w-6xl">
        <AnimatedSection className="mb-16 md:mb-24">
          <h2
            className={`text-4xl md:text-6xl font-light tracking-tight leading-tight pb-2 ${GRAD_TEXT}`}
          >
            We spend our days doing three things...
          </h2>
        </AnimatedSection>

        <div className="space-y-14 md:space-y-20">
          {/* 1 — Identify */}
          <AnimatedSection>
            <div className="relative md:ml-0">
              <span className={`${NUMERAL} absolute -left-4 md:-left-8 -top-10 md:-top-14 z-0`}>
                1
              </span>
              <Link
                href="/ai-consulting"
                className="relative z-10 block max-w-[880px] ml-10 md:ml-32 rounded-xl border border-[#EDECE4]/[0.06] bg-gradient-to-br from-[#111413] to-[#050808] p-8 md:p-14 hover:border-[#EDECE4]/[0.14] transition-colors group"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                  <div className="flex-shrink-0"><IconIdentify /></div>
                  <div>
                    <h3 className="text-3xl md:text-[44px] font-light text-[#EDECE4] leading-tight">
                      Identify
                    </h3>
                    <p className="mt-4 text-base md:text-xl font-light text-[#EDECE4]/85 leading-relaxed">
                      Every engagement starts with clarity. We map how work and
                      revenue actually flow through your business — where time
                      is lost, what slows things down, why margin leaks. From
                      there, we find the handful of opportunities actually
                      worth building.
                    </p>
                    <p className="font-supply mt-6 text-sm uppercase tracking-[0.1em] text-[#0CC481] inline-flex items-center gap-2">
                      The AI Opportunity Audit
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </AnimatedSection>

          {/* 2 — Build */}
          <AnimatedSection>
            <div className="relative">
              <span className={`${NUMERAL} absolute -left-2 md:left-4 -top-10 md:-top-14 z-0`}>
                2
              </span>
              <div className="relative z-10 block max-w-[880px] ml-10 md:ml-44 rounded-xl border border-[#EDECE4]/[0.06] bg-gradient-to-br from-[#111413] to-[#050808] p-8 md:p-14">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                  <div className="flex-shrink-0"><IconBuild /></div>
                  <div>
                    <h3 className="text-3xl md:text-[44px] font-light text-[#EDECE4] leading-tight">
                      Build
                    </h3>
                    <p className="mt-4 text-base md:text-xl font-light text-[#EDECE4]/85 leading-relaxed">
                      Then we build the system that fits your constraint —
                      revenue or costs. Working infrastructure integrated with
                      how your business already runs, live in weeks.
                    </p>
                    <div className="mt-6 space-y-3">
                      <Link
                        href="/linkedin-growth"
                        className="font-supply flex items-center justify-between text-sm uppercase tracking-[0.1em] text-[#EDECE4]/80 hover:text-[#0CC481] transition-colors border-t border-[#EDECE4]/[0.08] pt-3 group/l"
                      >
                        <span>
                          Growth Infrastructure
                          <span className="block font-poppins normal-case tracking-normal text-xs font-light text-[#EDECE4]/45 mt-0.5">
                            15+ qualified sales meetings a month — guaranteed
                          </span>
                        </span>
                        <ChevronRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover/l:translate-x-0.5" />
                      </Link>
                      <Link
                        href="/operations-infrastructure"
                        className="font-supply flex items-center justify-between text-sm uppercase tracking-[0.1em] text-[#EDECE4]/80 hover:text-[#0CC481] transition-colors border-t border-[#EDECE4]/[0.08] pt-3 group/l"
                      >
                        <span>
                          Operations Infrastructure
                          <span className="block font-poppins normal-case tracking-normal text-xs font-light text-[#EDECE4]/45 mt-0.5">
                            Custom AI that cuts the manual work eating your margin
                          </span>
                        </span>
                        <ChevronRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover/l:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 3 — Run & Scale */}
          <AnimatedSection>
            <div className="relative">
              <span className={`${NUMERAL} absolute -left-2 md:left-16 -top-10 md:-top-14 z-0`}>
                3
              </span>
              <Link
                href="/case-study"
                className="relative z-10 block max-w-[880px] ml-10 md:ml-56 rounded-xl border border-[#EDECE4]/[0.06] bg-gradient-to-br from-[#111413] to-[#050808] p-8 md:p-14 hover:border-[#EDECE4]/[0.14] transition-colors group"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                  <div className="flex-shrink-0"><IconRun /></div>
                  <div>
                    <h3 className="text-3xl md:text-[44px] font-light text-[#EDECE4] leading-tight">
                      Run &amp; Scale
                    </h3>
                    <p className="mt-4 text-base md:text-xl font-light text-[#EDECE4]/85 leading-relaxed">
                      Systems go live inside your business, on your accounts —
                      run and refined by our team every month. When one
                      constraint is gone, we point at the next. You own
                      everything, whether we&apos;re in the room or not.
                    </p>
                    <p className="font-supply mt-6 text-sm uppercase tracking-[0.1em] text-[#0CC481] inline-flex items-center gap-2">
                      See The Results
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-16 md:mt-20 text-center">
          <a href={BOOKING_URL} className={BTN_WHITE}>
            See If You Qualify
            <ChevronRight className="w-4 h-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS (two quotes, green highlights, dashed grid) ─── */
function Testimonials() {
  return (
    <section className="section-spacing section-padding">
      <div className="max-container max-w-6xl">
        <AnimatedSection className="mb-16 md:mb-20">
          <h2
            className={`text-4xl md:text-6xl font-light tracking-tight leading-tight pb-2 ${GRAD_TEXT}`}
          >
            Don&apos;t just take our word for it...
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 border-t border-b border-dashed border-[#EDECE4]/15">
          <AnimatedSection>
            <figure className="px-6 md:px-14 py-14 md:py-20 text-center md:border-r md:border-dashed md:border-[#EDECE4]/15">
              <blockquote className="text-lg md:text-xl font-light text-[#EDECE4] leading-relaxed">
                &ldquo;We went from{" "}
                <span className="text-[#0CC481]">
                  $42K to $91K monthly in under 60 days.
                </span>{" "}
                The pipeline became predictable for the first time — we could
                forecast and hire with confidence.&rdquo;
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-base text-[#EDECE4]">Jeff</p>
                <p className="font-supply mt-1 text-xs uppercase tracking-[0.15em] text-[#EDECE4]/40">
                  Vertical Axis
                </p>
              </figcaption>
            </figure>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <figure className="px-6 md:px-14 py-14 md:py-20 text-center border-t border-dashed border-[#EDECE4]/15 md:border-t-0">
              <blockquote className="text-lg md:text-xl font-light text-[#EDECE4] leading-relaxed">
                &ldquo;Discovery call conversion jumped from{" "}
                <span className="text-[#0CC481]">28% to over 60%.</span> The
                authority content meant prospects arrived already sold — we
                just confirmed fit.&rdquo;
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-base text-[#EDECE4]">Michael</p>
                <p className="font-supply mt-1 text-xs uppercase tracking-[0.15em] text-[#EDECE4]/40">
                  Aaronson Investigations
                </p>
              </figcaption>
            </figure>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.2} className="mt-10 text-center">
          <a
            href="https://www.trustpilot.com/review/novadatech.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="font-supply inline-flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-[#EDECE4]/50 hover:text-[#EDECE4] transition-colors"
          >
            <span className="text-[#0CC481]">★★★★★</span>
            Rated 4.9/5 from 77+ verified reviews on Trustpilot
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── STATS (marquee row, their format) ─── */
function StatsStrip() {
  const stats = [
    { num: "350+", label: "businesses scaled" },
    { num: "$45.7M+", label: "client revenue generated" },
    { num: "30+", label: "industries across Australia" },
    { num: "4.9★", label: "rating from 77+ Trustpilot reviews" },
    { num: "15+", label: "qualified meetings monthly — guaranteed" },
  ];

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {[...stats, ...stats].map((s, i) => (
            <div key={i} className="flex-shrink-0 w-[300px] md:w-[360px] text-center px-6">
              <p className="text-4xl md:text-5xl font-normal text-white leading-none">
                {s.num}
              </p>
              <p className="mt-4 text-base md:text-lg font-light text-[#EDECE4]/80">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── CASE STUDIES (grayscale imagery + CASE STUDY tag) ─── */
function CaseStudies() {
  const cases = [
    {
      title: "5x'ing Monthly Revenue With Growth Infrastructure",
      desc: "South Line Media was stuck at $20K/month with no predictable way to reach decision-makers. Within months, revenue passed $100K/month.",
      videoId: "upgMW2nwwpk",
      slug: "tony-south-line-media",
    },
    {
      title: "Cutting 80%+ of Operational Time With Custom AI",
      desc: "Groundwork Ventures' founder and team were buried in repetitive manual work. Custom AI systems replaced the bulk of it — margin came back.",
      videoId: "JXEvONrDaOk",
      slug: "damian-groundwork-ventures",
    },
    {
      title: "10x Revenue Growth In 30 Days For An Expert Firm",
      desc: "Aaronson Investigations was invisible to its ideal clients. Authority content plus targeted outreach put its expertise in front of buyers — pre-sold.",
      videoId: "G44OKPVh3Uk",
      slug: "michael-aaronson-investigations",
    },
  ];

  return (
    <section className="section-spacing section-padding">
      <div className="max-container max-w-6xl">
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-14">
          {cases.map((c, i) => (
            <AnimatedSection key={c.slug} delay={i * 0.1}>
              <Link href={`/case-study/${c.slug}`} className="block group">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${c.videoId}/hqdefault.jpg`}
                    alt={c.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="font-supply mt-6 text-xs uppercase tracking-[0.15em] text-[#EDECE4]/40">
                  Case Study
                </p>
                <h3 className="mt-3 text-2xl md:text-[26px] font-light text-[#EDECE4] leading-snug">
                  {c.title}
                </h3>
                <p className="mt-3 text-base font-light text-[#EDECE4]/70 leading-relaxed">
                  {c.desc}
                </p>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="mt-14 text-center">
          <Link
            href="/case-study"
            className="font-supply inline-flex items-center gap-2 text-sm uppercase tracking-[0.1em] text-[#EDECE4]/60 hover:text-[#0CC481] transition-colors group"
          >
            View all case studies
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── FAQ (centered gradient FAQs, borderless items) ─── */
function FAQ() {
  const faqs = [
    {
      q: "Which solution is right for my business?",
      a: "That's exactly what the strategy call answers. If your constraint is pipeline — not enough qualified conversations with buyers — that's Growth Infrastructure. If your constraint is operations — manual work eating margin and blocking scale — that's Operations Infrastructure. And if you're not sure where AI would return most, the AI Opportunity Audit finds out before you commit to building anything.",
    },
    {
      q: "Is this too good to be true?",
      a: "We understand the scepticism — most agencies have conditioned business owners to expect promises without delivery. That's why our commitments are written into agreements, not marketing copy: our flagship Growth Infrastructure is backed by a performance guarantee, and every operations build is scoped with the projected return shown before you commit. If we don't believe we can deliver, we won't take the engagement.",
    },
    {
      q: "What does 'performance guaranteed' actually mean?",
      a: "For Growth Infrastructure: 15+ qualified sales meetings every month, backed by our 90-Day Money-Back Guarantee — written into the agreement. For operations builds: we only take on systems where the projected saving clearly outweighs the investment, and we show you that math up front.",
    },
    {
      q: "What's the catch?",
      a: "There isn't one — but there is a qualifier. We only work with businesses we genuinely believe we can deliver for. We turn down more engagements than we accept. If we don't think we can deliver, we'll tell you on the strategy call rather than take your money.",
    },
    {
      q: "How do you get growth results without ads?",
      a: "We use precision outbound — authority content plus targeted LinkedIn and email campaigns that reach high-intent prospects directly. No ad spend, no bidding wars, no wasted budget. Your pipeline is built through direct outreach to the exact type of client you want.",
    },
    {
      q: "What makes this different from a marketing agency?",
      a: "Agencies sell campaigns — you pay every month, and the moment you stop, the results stop. We install systems into your business that you own: growth infrastructure that keeps producing meetings, and AI operations systems that keep saving hours. You're buying a permanent capability, not renting attention.",
    },
    {
      q: "How soon can results start?",
      a: "Growth Infrastructure partners typically see qualified meetings on their calendar within 7–14 days of activation. Operations systems typically go live within weeks, staged so you see the first system running before the next one starts.",
    },
    {
      q: "What kind of businesses do you work with?",
      a: "Established businesses across Australia — 30+ industries so far. For growth: service businesses selling $3K+ offers who are ready to scale. For operations: businesses with real volume, where teams spend serious hours on repetitive work. The strategy call confirms fit either way.",
    },
  ];

  return (
    <section className="section-spacing section-padding">
      <div className="max-container max-w-3xl">
        <AnimatedSection className="text-center mb-14">
          <h2
            className={`inline-block text-5xl md:text-7xl font-light tracking-tight pb-2 ${GRAD_TEXT}`}
          >
            FAQs
          </h2>
          <p className="mt-4 text-lg md:text-xl font-light text-[#EDECE4]/85">
            You&apos;ve got questions. We&apos;ve got answers.
          </p>
        </AnimatedSection>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 0.05}>
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-5 text-left group"
        >
          <span className="text-base md:text-lg font-light text-[#EDECE4] group-hover:text-white transition-colors pr-4">
            {question}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-[#EDECE4]/50 flex-shrink-0 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="pb-7 text-base font-light text-[#EDECE4]/70 leading-relaxed">
            {answer}
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

/* ─── FINAL CTA (giant gradient lines + green bottom glow) ─── */
function FinalCTA() {
  return (
    <section className="relative pt-24 pb-32 md:pt-32 md:pb-40 section-padding overflow-hidden">
      {/* Green glow rising from the bottom — their closer treatment */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,109,74,0.5)_0%,rgba(11,109,74,0)_50%)] pointer-events-none" />

      <div className="relative max-container text-center">
        <AnimatedSection>
          <h2
            className={`text-4xl md:text-7xl font-light tracking-tight leading-[1.15] text-balance max-w-5xl mx-auto pb-2 ${GRAD_TEXT}`}
          >
            AI is here. Most will react. The few with systems will lead.
          </h2>
          <p
            className={`mt-12 text-3xl md:text-6xl font-light tracking-tight pb-2 ${GRAD_TEXT}`}
          >
            We build for those few.
          </p>
          <div className="mt-12">
            <a href={BOOKING_URL} className={BTN_WHITE}>
              See If You Qualify
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="font-supply mt-12 flex items-center justify-center gap-8 text-xs uppercase tracking-[0.15em] text-[#EDECE4]/40 flex-wrap">
            <span>Performance Guaranteed</span>
            <span className="hidden sm:inline text-[#EDECE4]/15">·</span>
            <a
              href="https://www.trustpilot.com/review/novadatech.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EDECE4]/80 transition-colors underline underline-offset-4 decoration-[#EDECE4]/20"
            >
              4.9★ Trustpilot
            </a>
            <span className="hidden sm:inline text-[#EDECE4]/15">·</span>
            <span>Systems You Own</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── STICKY CTA BAR ─── */
function StickyCtaBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => { setVisible(window.scrollY > 600); };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} transition={{ duration: 0.3, ease: "easeOut" }} className="fixed bottom-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-xl border-t border-[#EDECE4]/10 py-3 px-5 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-sm font-light text-[#EDECE4]">AI systems that grow revenue and cut costs</p>
              <p className="font-supply text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/40">Installed by Novada Tech · Owned by you</p>
            </div>
            <a href={BOOKING_URL} className={`${BTN_WHITE} !py-2.5 w-full sm:w-auto justify-center`}>
              See If You Qualify
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── PAGE ─── */
export default function HomePage() {
  return (
    <div className="bg-[#080808] font-poppins">
      <Hero />
      <TrustBar />
      <ProblemNarrative />
      <ThreeThings />
      <Testimonials />
      <StatsStrip />
      <CaseStudies />
      <FAQ />
      <FinalCTA />
      <StickyCtaBar />
      <div className="h-16 sm:h-0" />
    </div>
  );
}
