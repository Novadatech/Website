"use client";

/*
 * DESIGN TEST — /linkedin-growth-v2
 * Growth Infrastructure content poured into the home page's Morningside
 * spine: hero → industries marquee → pinned scroll problem narrative →
 * "three things" giant-numeral journey cards → VSL → quote testimonials →
 * stats marquee → grayscale case-study thumbnails → FAQ → gradient closer.
 *
 * The live offer page stays at /linkedin-growth. This page is noindex
 * (see layout.tsx) and exists to compare the two patterns side by side.
 * Copy is drawn from /linkedin-growth (headline/subheadline verbatim).
 */

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ChevronRight, ChevronDown, Play } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import HeroTrustBar from "@/components/HeroTrustBar";
import NovadaLogo from "@/components/NovadaLogo";
import { CASE_STUDIES } from "@/app/case-study/data";
import {
  GRAD_TEXT,
  BTN_WHITE,
  MS_CARD,
  HERO_WASH,
  GLOW_BOTTOM,
} from "@/components/ms";
import { useState, useEffect, useRef } from "react";

const BOOKING_URL = "/book-call";

const LINKEDIN_CASE_STUDIES = CASE_STUDIES.filter(
  (c) => c.offering === "linkedin-growth",
);

/* ─── HEADER (standalone, like /linkedin-growth) ─── */
function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-xl border-b border-[#EDECE4]/10">
        <div className="max-container section-padding">
          <div className="flex items-center justify-between h-20">
            <Link href="/linkedin-growth-v2" className="flex items-center">
              <NovadaLogo variant="light" className="h-12 w-auto" />
            </Link>
            <a href={BOOKING_URL} className={`${BTN_WHITE} !py-2.5 !px-5`}>
              See If You Qualify
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>
      <div className="h-20" />
    </>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative pt-16 pb-16 md:pt-24 md:pb-20 overflow-hidden">
      <div className={HERO_WASH} />

      <div className="relative max-container section-padding text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-supply text-xs uppercase tracking-[0.25em] text-[#0CC481] mb-8"
        >
          Growth Infrastructure&trade; — For B2B Businesses That Want To Scale On LinkedIn
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={`text-3xl sm:text-4xl md:text-6xl font-light tracking-tight leading-[1.12] text-balance max-w-5xl mx-auto pb-2 ${GRAD_TEXT}`}
        >
          350+ B2B Founders Use Our System To Book 15+ Qualified Sales
          Meetings Every Month — Without Ads, SDRs, Or chasing prospects.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-7 text-lg md:text-xl font-light text-[#EDECE4]/80 max-w-2xl mx-auto leading-relaxed"
        >
          We position you as the trusted expert in your niche so high-value
          decision-makers already trust you before the sales conversation even
          begins. Then we leverage that authority through our proven outbound
          system to consistently generate 15+ qualified sales meetings every
          month. No paid ads. No guesswork. Backed by our 90-Day Money-Back
          Guarantee.
        </motion.p>

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
          Trusted by 350+ B2B founders across 30+ industries in Australia:
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
    text: "You're sending more LinkedIn messages than ever. Connection requests. Follow-ups. DMs.",
    final: false,
  },
  {
    text: "But prospects check your profile, see nothing that says expert — and archive you in three seconds.",
    final: false,
  },
  {
    text: "Posting daily doesn't fix it either. Likes go up. Impressions look healthy. The calendar stays empty.",
    final: false,
  },
  {
    text: "LinkedIn isn't broken. You're running the 2020 playbook in a 2026 inbox.",
    final: false,
  },
  {
    text: "That's why we built Growth Infrastructure.",
    sub: "Authority + outreach that books 15+ qualified meetings a month — guaranteed.",
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

/* ─── THREE THINGS (Authority / Outreach / Booked) ─── */

/* Thin line-art icons, matching the home page's style */
function IconAuthority() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-28 h-28 md:w-36 md:h-36" aria-hidden="true">
      <circle cx="60" cy="60" r="42" stroke="#EDECE4" strokeWidth="1.2" />
      <path d="M50 42 L80 60 L50 78 Z" stroke="#EDECE4" strokeWidth="1.2" />
    </svg>
  );
}
function IconOutreach() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-28 h-28 md:w-36 md:h-36" aria-hidden="true">
      <path d="M18 60 L102 24 L78 96 L60 68 Z" stroke="#EDECE4" strokeWidth="1.2" />
      <path d="M60 68 L102 24" stroke="#EDECE4" strokeWidth="1.2" />
    </svg>
  );
}
function IconBooked() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-28 h-28 md:w-36 md:h-36" aria-hidden="true">
      <rect x="22" y="28" width="76" height="68" rx="6" stroke="#EDECE4" strokeWidth="1.2" />
      <path d="M22 46 L98 46" stroke="#EDECE4" strokeWidth="1.2" />
      <path d="M38 20 L38 34 M82 20 L82 34" stroke="#EDECE4" strokeWidth="1.2" />
      <path d="M45 68 L56 79 L76 58" stroke="#EDECE4" strokeWidth="1.2" />
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
            The system does three things...
          </h2>
        </AnimatedSection>

        <div className="space-y-14 md:space-y-20">
          {/* 1 — Authority */}
          <AnimatedSection>
            <div className="relative">
              <span className={`${NUMERAL} md:left-0`}>1</span>
              <div className="relative z-10 block max-w-[820px] mt-2 md:mt-0 md:ml-36 rounded-xl border border-[#EDECE4]/[0.06] bg-gradient-to-br from-[#111413] to-[#050808] p-8 md:p-14">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                  <div className="flex-shrink-0"><IconAuthority /></div>
                  <div>
                    <h3 className="text-3xl md:text-[44px] font-light text-[#EDECE4] leading-tight">
                      Authority
                    </h3>
                    <p className="mt-4 text-base md:text-xl font-light text-[#EDECE4]/85 leading-relaxed">
                      4 – 6 short authority videos a month featuring you,
                      scripted around your expertise and distributed across
                      LinkedIn, YouTube and shorts. When prospects research
                      you, they find proof — not silence. You become the
                      obvious choice before a single message lands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 2 — Outreach */}
          <AnimatedSection>
            <div className="relative">
              <span className={`${NUMERAL} md:left-24`}>2</span>
              <div className="relative z-10 block max-w-[820px] mt-2 md:mt-0 md:ml-60 rounded-xl border border-[#EDECE4]/[0.06] bg-gradient-to-br from-[#111413] to-[#050808] p-8 md:p-14">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                  <div className="flex-shrink-0"><IconOutreach /></div>
                  <div>
                    <h3 className="text-3xl md:text-[44px] font-light text-[#EDECE4] leading-tight">
                      Outreach
                    </h3>
                    <p className="mt-4 text-base md:text-xl font-light text-[#EDECE4]/85 leading-relaxed">
                      Daily, targeted outreach to ICP-matched decision-makers —
                      sequences trained on your voice, reply handling fully
                      done for you, optimised every week. Prospects reply
                      because they&apos;re pre-sold before the conversation
                      starts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 3 — Booked */}
          <AnimatedSection>
            <div className="relative">
              <span className={`${NUMERAL} md:left-44`}>3</span>
              <div className="relative z-10 block max-w-[820px] mt-2 md:mt-0 md:ml-80 rounded-xl border border-[#EDECE4]/[0.06] bg-gradient-to-br from-[#111413] to-[#050808] p-8 md:p-14">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                  <div className="flex-shrink-0"><IconBooked /></div>
                  <div>
                    <h3 className="text-3xl md:text-[44px] font-light text-[#EDECE4] leading-tight">
                      Booked
                    </h3>
                    <p className="mt-4 text-base md:text-xl font-light text-[#EDECE4]/85 leading-relaxed">
                      Only decision-makers with budget and fit make it to your
                      calendar — pre-qualified, pre-sold, and ready to buy when
                      the call starts. 15+ every month, live within 14 days,
                      backed by our 90-Day Money-Back Guarantee.
                    </p>
                    <p className="font-supply mt-6 text-sm uppercase tracking-[0.1em] text-[#0CC481] inline-flex items-center gap-2">
                      <Link href="/case-study" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                        See The Results
                        <ChevronRight className="w-4 h-4" />
                      </Link>
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

/* ─── VSL (kept from the offer page — the one deviation from the home spine) ─── */
function VSL() {
  return (
    <section className="section-padding py-16 md:py-20 border-t border-[#EDECE4]/10">
      <div className="max-container max-w-3xl">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-2 mb-3 text-sm font-light text-[#EDECE4]/50">
            <Play className="w-3.5 h-3.5 text-[#0CC481]" />
            <span>Watch the 2-min overview</span>
          </div>
          <div className="relative rounded-xl overflow-hidden border border-[#EDECE4]/10 shadow-2xl" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/_fVB00BpPpI?rel=0"
              title="How Growth Infrastructure works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs font-light text-[#EDECE4]/40">
            <span>Presented by <span className="text-[#EDECE4]/70">Ade</span> — Novada Tech</span>
          </div>
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
    { num: "15+", label: "qualified meetings monthly — guaranteed" },
    { num: "$45.7M+", label: "client revenue generated" },
    { num: "14 days", label: "average time to first meeting" },
    { num: "$0", label: "ad spend required" },
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

/* ─── CASE STUDIES (grayscale thumbnails) ─── */
function CaseStudies() {
  return (
    <section className="section-spacing section-padding">
      <div className="max-container max-w-6xl">
        <AnimatedSection className="mb-14">
          <h2 className={`text-4xl md:text-6xl font-light tracking-tight leading-tight pb-2 ${GRAD_TEXT}`}>
            Founders already running the system.
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {LINKEDIN_CASE_STUDIES.map((c, i) => (
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
                  Case Study
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
      q: "Isn't LinkedIn outreach spammy?",
      a: "Spam is volume without targeting and personalisation. Our outreach is the opposite: precise ICP filters, authority content priming the conversation, and human-written sequences trained on your voice. Prospects respond because they already see you as relevant — not because they're being shouted at.",
    },
    {
      q: "What does the authority video content actually involve?",
      a: "We produce 4 – 6 short videos per month featuring you, edited for LinkedIn and short-form distribution. We write the scripts around your expertise, produce them remotely (you record from anywhere), and distribute across LinkedIn, YouTube and repurposed shorts. The result is a compounding authority asset on your profile that pre-sells before outreach ever lands.",
    },
    {
      q: "How much time do I personally need to put in?",
      a: "Less than 30 minutes per week once activated. You record content remotely on a flexible schedule (one batch usually covers 2 – 4 weeks). Outreach, reply handling, qualification and booking are entirely done for you. You show up to the qualified meetings on your calendar.",
    },
    {
      q: "Why not just hire an SDR or do this myself?",
      a: "An in-house SDR costs $80K – $120K loaded, takes 3 – 6 months to ramp, and quits inside 12 months. DIY means juggling content, outreach, reply handling, qualification and booking on top of delivery — which is why most founders abandon LinkedIn within 90 days. We install a system that costs less than a single SDR, launches in 14 days, never quits, and carries a written performance guarantee.",
    },
    {
      q: "What if I'm in a small or niche industry?",
      a: "Niche is exactly where this approach wins. The smaller and more defined your ICP, the easier it is to dominate LinkedIn through authority + targeted outreach. We've installed this in 30+ industries from healthcare to B2B SaaS to coaching to professional services.",
    },
    {
      q: "What does the guarantee actually mean?",
      a: "If we don't deliver 15+ qualified sales meetings, our 90-Day Money-Back Guarantee applies — you get your investment back. A qualified meeting is with a decision-maker who matches your ICP, has budget for your offer, and has confirmed interest — agreed in writing before activation. Not invented after the fact. It's written into the agreement, not a marketing line.",
    },
    {
      q: "How quickly will I see meetings booked?",
      a: "Most partners see the first qualified meeting on the calendar within 7 – 14 days of activation. The full 15+/month target is consistently hit by the end of month one. We move fast because the underlying system is already proven — we install it into your specific business.",
    },
    {
      q: "Who is this NOT for?",
      a: "If your offer is under $3K, if your service isn't validated yet, or if you're looking for a magic-button solution that requires zero involvement — this isn't the right fit. We're selective because the guarantee only works when the underlying business is ready to scale.",
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
            Stop sending messages. Start owning your industry.
          </h2>
          <p className={`mt-12 text-3xl md:text-6xl font-light tracking-tight pb-2 ${GRAD_TEXT}`}>
            We build for the founders who do.
          </p>
          <div className="mt-12">
            <a href={BOOKING_URL} className={BTN_WHITE}>
              See If You Qualify
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="font-supply mt-12 flex items-center justify-center gap-8 text-xs uppercase tracking-[0.15em] text-[#EDECE4]/40 flex-wrap">
            <span>15+ Meetings Guaranteed</span>
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
            <span>90-Day Money-Back Guarantee</span>
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
              <p className="text-sm font-light text-[#EDECE4]">15+ qualified meetings every month</p>
              <p className="font-supply text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/40">Authority + Outreach · Guaranteed or you don&apos;t pay</p>
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
export default function LinkedinGrowthV2Page() {
  return (
    <div className="bg-[#080808] font-poppins">
      <Header />
      <Hero />
      <TrustBar />
      <ProblemNarrative />
      <ThreeThings />
      <VSL />
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
