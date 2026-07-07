"use client";

/*
 * AI Consulting — the home page's Morningside spine carrying the audit
 * offer (same pattern as /linkedin-growth): hero → industries marquee →
 * pinned scroll problem narrative → "three things" giant-numeral journey
 * cards (Discovery / Analysis / Roadmap) → where-the-roadmap-leads →
 * attributed results → stats marquee → grayscale case-study thumbnails →
 * FAQ → gradient closer. Uses the shared Navbar/Footer.
 */

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ChevronRight, ChevronDown, TrendingUp, Cog } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import HeroTrustBar from "@/components/HeroTrustBar";
import { CASE_STUDIES } from "@/app/case-study/data";
import {
  GRAD_TEXT,
  BTN_WHITE,
  LINK_GREEN,
  MS_CARD,
  HERO_WASH,
  GLOW_BOTTOM,
} from "@/components/ms";
import { useState, useEffect, useRef } from "react";

const BOOKING_URL = "/book-call";

/* Mixed proof: the roadmap feeds both infrastructures */
const MIXED_CASE_SLUGS = [
  "tony-south-line-media",
  "damian-groundwork-ventures",
  "michael-aaronson-investigations",
  "jack-house-valley",
];
const MIXED_CASE_STUDIES = MIXED_CASE_SLUGS.map(
  (slug) => CASE_STUDIES.find((c) => c.slug === slug)!,
);

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className={HERO_WASH} />

      <div className="relative max-container section-padding text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-supply text-xs uppercase tracking-[0.25em] text-[#0CC481] mb-8"
        >
          AI Consulting — The AI Opportunity Audit
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.12] text-balance max-w-4xl mx-auto pb-2 ${GRAD_TEXT}`}
        >
          Know exactly where AI pays off — before you spend a dollar building
          it.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-7 text-lg md:text-xl font-light text-[#EDECE4]/80 max-w-2xl mx-auto leading-relaxed"
        >
          The AI Opportunity Audit is a structured deep-dive into your
          operations. You walk away with a prioritised, ROI-ranked roadmap of
          where AI will actually save you money and where it won&apos;t — built
          from real analysis of your workflows, not guesswork.
        </motion.p>

        <HeroTrustBar className="mt-9" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-9 flex items-center justify-center"
        >
          <a href={BOOKING_URL} className={BTN_WHITE}>
            See If You Qualify
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="font-supply mt-8 text-[10px] uppercase tracking-[0.2em] text-[#EDECE4]/35"
        >
          The roadmap is yours to keep — whoever you build with
        </motion.p>
      </div>
    </section>
  );
}

/* ─── INDUSTRIES MARQUEE ─── */
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
    <section className="py-12 border-t border-b border-[#EDECE4]/10 overflow-hidden">
      <div className="max-container section-padding mb-10">
        <p className="font-supply text-sm uppercase tracking-[0.1em] text-[#EDECE4] text-center">
          Trusted by 350+ businesses across 30+ industries in Australia:
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

/* ─── PROBLEM NARRATIVE (pinned scroll sequence) ─── */
const PROBLEM_STATEMENTS = [
  {
    text: "You bought the tools. Someone went to a webinar. There's a chatbot no one uses.",
    final: false,
  },
  {
    text: "The pilot impressed everyone in the demo. It never made it to production.",
    final: false,
  },
  {
    text: "And every vendor swears their tool is the answer. Betting six months on the wrong project is how AI becomes a sore point.",
    final: false,
  },
  {
    text: "The businesses winning with AI knew which problem to point it at first.",
    final: false,
  },
  {
    text: "That's why we built the AI Opportunity Audit.",
    sub: "An ROI-ranked roadmap of where AI pays off in your business — real analysis, not guesswork.",
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

/* ─── THREE THINGS (Discovery / Analysis / Roadmap) ─── */

function IconDiscovery() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-28 h-28 md:w-36 md:h-36" aria-hidden="true">
      <circle cx="48" cy="48" r="26" stroke="#EDECE4" strokeWidth="1.2" />
      <circle cx="72" cy="48" r="26" stroke="#EDECE4" strokeWidth="1.2" />
      <circle cx="60" cy="72" r="26" stroke="#EDECE4" strokeWidth="1.2" />
    </svg>
  );
}
function IconAnalysis() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-28 h-28 md:w-36 md:h-36" aria-hidden="true">
      <path d="M60 18 L60 40" stroke="#EDECE4" strokeWidth="1.2" />
      <path d="M30 40 L90 40" stroke="#EDECE4" strokeWidth="1.2" />
      <path d="M30 40 L20 68 A14 10 0 0 0 48 68 L38 40" stroke="#EDECE4" strokeWidth="1.2" />
      <path d="M90 40 L80 68 A14 10 0 0 0 108 68 L98 40" stroke="#EDECE4" strokeWidth="1.2" />
      <path d="M48 98 L72 98" stroke="#EDECE4" strokeWidth="1.2" />
      <path d="M60 40 L60 98" stroke="#EDECE4" strokeWidth="1.2" />
    </svg>
  );
}
function IconRoadmap() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-28 h-28 md:w-36 md:h-36" aria-hidden="true">
      <path d="M24 96 C24 60 60 84 60 52 C60 28 84 36 96 24" stroke="#EDECE4" strokeWidth="1.2" strokeDasharray="6 6" />
      <circle cx="24" cy="96" r="5" stroke="#EDECE4" strokeWidth="1.2" />
      <path d="M96 12 L108 24 L96 36 L84 24 Z" stroke="#EDECE4" strokeWidth="1.2" />
    </svg>
  );
}

const NUMERAL =
  "font-poppins italic font-extralight text-[88px] md:text-[160px] leading-none bg-gradient-to-b from-[#12513c] to-[#0CC481] bg-clip-text text-transparent select-none px-4 md:px-6 block md:absolute md:top-1/2 md:-translate-y-1/2 z-0";

function ThreeThings() {
  return (
    <section className="section-spacing section-padding">
      <div className="max-container max-w-6xl">
        <AnimatedSection className="mb-16 md:mb-24">
          <h2
            className={`text-4xl md:text-6xl font-light tracking-tight leading-tight pb-2 ${GRAD_TEXT}`}
          >
            The audit does three things...
          </h2>
        </AnimatedSection>

        <div className="space-y-14 md:space-y-20">
          {/* 1 — Discovery */}
          <AnimatedSection>
            <div className="relative">
              <span className={`${NUMERAL} md:left-0`}>1</span>
              <div className="relative z-10 block max-w-[820px] mt-2 md:mt-0 md:ml-36 rounded-xl border border-[#EDECE4]/[0.06] bg-gradient-to-br from-[#111413] to-[#050808] p-8 md:p-14">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                  <div className="flex-shrink-0"><IconDiscovery /></div>
                  <div>
                    <h3 className="text-3xl md:text-[44px] font-light text-[#EDECE4] leading-tight">
                      Discovery
                    </h3>
                    <p className="mt-4 text-base md:text-xl font-light text-[#EDECE4]/85 leading-relaxed">
                      We sit inside your operation — structured sessions with
                      you and the people who actually do the work, plus a
                      review of the systems you run on. We map how work
                      actually happens, not how the org chart says it happens.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 2 — Analysis */}
          <AnimatedSection>
            <div className="relative">
              <span className={`${NUMERAL} md:left-24`}>2</span>
              <div className="relative z-10 block max-w-[820px] mt-2 md:mt-0 md:ml-60 rounded-xl border border-[#EDECE4]/[0.06] bg-gradient-to-br from-[#111413] to-[#050808] p-8 md:p-14">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                  <div className="flex-shrink-0"><IconAnalysis /></div>
                  <div>
                    <h3 className="text-3xl md:text-[44px] font-light text-[#EDECE4] leading-tight">
                      Analysis
                    </h3>
                    <p className="mt-4 text-base md:text-xl font-light text-[#EDECE4]/85 leading-relaxed">
                      Every opportunity is scored for return, implementation
                      cost, and risk — with the assumptions documented, and
                      honest build-vs-buy recommendations. Opportunities that
                      don&apos;t clear the bar get cut, and we tell you why.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 3 — Roadmap */}
          <AnimatedSection>
            <div className="relative">
              <span className={`${NUMERAL} md:left-44`}>3</span>
              <div className="relative z-10 block max-w-[820px] mt-2 md:mt-0 md:ml-80 rounded-xl border border-[#EDECE4]/[0.06] bg-gradient-to-br from-[#111413] to-[#050808] p-8 md:p-14">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                  <div className="flex-shrink-0"><IconRoadmap /></div>
                  <div>
                    <h3 className="text-3xl md:text-[44px] font-light text-[#EDECE4] leading-tight">
                      Roadmap
                    </h3>
                    <p className="mt-4 text-base md:text-xl font-light text-[#EDECE4]/85 leading-relaxed">
                      You get the plan, live: a recorded readout with your
                      leadership covering the workflow map, the ROI-ranked
                      opportunity list, data readiness, and a staged
                      implementation roadmap your team can execute — with us
                      or without us. Then the decision is yours.
                    </p>
                  </div>
                </div>
              </div>
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

/* ─── WHERE IT LEADS ─── */
function WhereItLeads() {
  return (
    <section className="section-spacing section-padding border-t border-[#EDECE4]/10">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="mb-12">
          <h2 className={`text-4xl md:text-6xl font-light tracking-tight leading-tight pb-2 ${GRAD_TEXT}`}>
            The audit is the map. These are the roads.
          </h2>
          <p className="mt-4 text-lg font-light text-[#EDECE4]/70 max-w-2xl">
            Most roadmaps point at one of two places. When you&apos;re ready to
            build, we&apos;re the team that builds both — or hand the roadmap
            to your own team. It&apos;s yours either way.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection>
            <Link
              href="/linkedin-growth"
              className={`block ${MS_CARD} p-8 h-full group hover:border-[#EDECE4]/[0.14] transition-colors`}
            >
              <TrendingUp className="w-7 h-7 text-[#0CC481] mb-5" strokeWidth={1.4} />
              <h3 className="text-xl font-normal text-[#EDECE4] mb-3">
                Growth Infrastructure
              </h3>
              <p className="text-base font-light text-[#EDECE4]/65 leading-relaxed mb-5">
                If the biggest opportunity is revenue: a system that positions
                you as the authority in your niche and books 15+ qualified
                sales meetings every month — guaranteed.
              </p>
              <span className={LINK_GREEN}>
                See How It Works
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Link
              href="/operations-infrastructure"
              className={`block ${MS_CARD} p-8 h-full group hover:border-[#EDECE4]/[0.14] transition-colors`}
            >
              <Cog className="w-7 h-7 text-[#0CC481] mb-5" strokeWidth={1.4} />
              <h3 className="text-xl font-normal text-[#EDECE4] mb-3">
                Operations Infrastructure
              </h3>
              <p className="text-base font-light text-[#EDECE4]/65 leading-relaxed mb-5">
                If the biggest opportunity is cost: custom AI systems that take
                over quoting, admin, documents, and logistics — so you scale
                output without scaling headcount.
              </p>
              <span className={LINK_GREEN}>
                See What We Build
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── RESULTS (attributed outcomes, dashed grid) ─── */
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
                &ldquo;We&apos;d been burned by two agencies before. This was
                different — it was a system, not a service.{" "}
                <span className="text-[#0CC481]">
                  4 new retainer clients in the first 45 days.
                </span>&rdquo;
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-base text-[#EDECE4]">Nicola</p>
                <p className="font-supply mt-1 text-xs uppercase tracking-[0.15em] text-[#EDECE4]/40">
                  Morasco Media
                </p>
              </figcaption>
            </figure>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <figure className="px-6 md:px-14 py-14 md:py-20 text-center border-t border-dashed border-[#EDECE4]/15 md:border-t-0">
              <blockquote className="text-lg md:text-xl font-light text-[#EDECE4] leading-relaxed">
                Procurement went from constant firefighting to{" "}
                <span className="text-[#0CC481]">
                  proactive, with AI handling the analytical heavy lifting
                </span>{" "}
                — smoother operations, healthier margins, and a function that
                scales with the business.
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-base text-[#EDECE4]">Anthony</p>
                <p className="font-supply mt-1 text-xs uppercase tracking-[0.15em] text-[#EDECE4]/40">
                  Ripple Clarke
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

/* ─── STATS MARQUEE ─── */
function StatsStrip() {
  const stats = [
    { num: "1–2 wks", label: "typical audit — end to end" },
    { num: "6", label: "concrete deliverables in every audit" },
    { num: "350+", label: "businesses scaled" },
    { num: "30+", label: "industries across Australia" },
    { num: "4.9★", label: "rating from 77+ Trustpilot reviews" },
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

/* ─── CASE STUDIES (grayscale thumbnails, mixed pillars) ─── */
function MixedCaseStudies() {
  return (
    <section className="section-spacing section-padding">
      <div className="max-container max-w-6xl">
        <AnimatedSection className="mb-14">
          <h2 className={`text-4xl md:text-6xl font-light tracking-tight leading-tight pb-2 ${GRAD_TEXT}`}>
            Where the roadmap has led.
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {MIXED_CASE_STUDIES.map((c, i) => (
            <AnimatedSection key={c.slug} delay={i * 0.08}>
              <Link href={`/case-study/${c.slug}`} className="block group">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${c.videoId}/hqdefault.jpg`}
                    alt={c.pageTitle}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="font-supply mt-5 text-xs uppercase tracking-[0.15em] text-[#EDECE4]/40">
                  {c.offeringLabel}
                </p>
                <h3 className="mt-2 text-lg font-light text-[#EDECE4] leading-snug">
                  {c.cardHeadline}
                </h3>
                <p className="mt-2 text-sm font-light text-[#EDECE4]/50">
                  {c.customerName} — {c.customerRole}, {c.customerCompany}
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

/* ─── FAQ ─── */
function FAQ() {
  const faqs = [
    {
      q: "How long does the audit take?",
      a: "Typically one to two weeks end to end, depending on the size and complexity of your operation. It's designed to be fast on purpose — the value is in the decision it enables, and delayed clarity is expensive.",
    },
    {
      q: "Is this just a sales pitch for your build services?",
      a: "No — and the structure proves it. The roadmap includes build-vs-buy recommendations, which regularly means telling clients an off-the-shelf tool is enough for part of their plan. The roadmap is yours to execute with us, with your own team, or with someone else entirely. We'd rather earn the build by being right in the audit.",
    },
    {
      q: "What do you need from us during the audit?",
      a: "A few hours of structured conversation with you and the people who actually do the work, plus visibility into the systems you run on. No data science team, no preparation project — we work around your operation, not the other way round.",
    },
    {
      q: "Our data and processes are a mess. Should we clean up first?",
      a: "No — come as you are. Assessing what your data and systems can support today is literally one of the deliverables. Most businesses we audit have messy processes; that's usually where the biggest opportunities hide.",
    },
    {
      q: "What does the audit cost?",
      a: "It's scoped to the size and complexity of your business, and we'll give you the exact figure on the qualification call before anything starts. What we can say up front: it's a fixed price, agreed in advance, with no surprise extras.",
    },
    {
      q: "Can you actually build what you recommend?",
      a: "Yes. The roadmap feeds directly into our two infrastructure offers — Growth Infrastructure for revenue systems and Operations Infrastructure for custom AI automation. The same team that audits your business builds for it, which is exactly why we don't recommend things we can't make work.",
    },
    {
      q: "What kind of businesses is this for?",
      a: "Established businesses with real operational volume — teams doing repetitive work, established sales motions, meaningful revenue. Across 30+ industries in Australia the pattern holds: if people in your business spend hours on rule-based work, the audit will find return.",
    },
  ];

  return (
    <section className="section-spacing section-padding border-t border-[#EDECE4]/10">
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

/* ─── FINAL CTA ─── */
function FinalCTA() {
  return (
    <section className="relative pt-24 pb-32 md:pt-32 md:pb-40 section-padding overflow-hidden">
      <div className={GLOW_BOTTOM} />

      <div className="relative max-container text-center">
        <AnimatedSection>
          <h2 className={`text-3xl md:text-6xl font-light tracking-tight leading-[1.15] text-balance max-w-4xl mx-auto pb-2 ${GRAD_TEXT}`}>
            Six months from now, you&apos;ll have bet on something.
          </h2>
          <p className={`mt-12 text-3xl md:text-6xl font-light tracking-tight pb-2 ${GRAD_TEXT}`}>
            Make it the right thing.
          </p>
          <div className="mt-12">
            <a href={BOOKING_URL} className={BTN_WHITE}>
              See If You Qualify
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="font-supply mt-12 flex items-center justify-center gap-8 text-xs uppercase tracking-[0.15em] text-[#EDECE4]/40 flex-wrap">
            <span>Fixed Price</span>
            <span className="hidden sm:inline text-[#EDECE4]/15">·</span>
            <span>Fixed Scope</span>
            <span className="hidden sm:inline text-[#EDECE4]/15">·</span>
            <span>The Roadmap Is Yours To Keep</span>
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
              <p className="text-sm font-light text-[#EDECE4]">Know where AI pays off — before you build</p>
              <p className="font-supply text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/40">Fixed price · Fixed scope · Roadmap yours to keep</p>
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
export default function AiConsultingPage() {
  return (
    <div className="bg-[#080808] font-poppins">
      <Hero />
      <TrustBar />
      <ProblemNarrative />
      <ThreeThings />
      <WhereItLeads />
      <Testimonials />
      <StatsStrip />
      <MixedCaseStudies />
      <FAQ />
      <FinalCTA />
      <StickyCtaBar />
      <div className="h-16 sm:h-0" />
    </div>
  );
}
