"use client";

/*
 * Home page — Morningside AI design-language test (user direction,
 * 2026-06-28). Structure unchanged from the Morningside spine build:
 * Hero → industries marquee → pinned problem narrative → three-things
 * journey → testimonials → stats → case studies → FAQ → closer.
 *
 * Design tokens measured from morningside.ai with Playwright:
 * - background #080808 (near-black), pure white type
 * - Poppins at light weights (H1 72px w300, statements 40px w300)
 * - giant thin numerals (160px, w200) for the three steps
 * - white rectangular buttons: white bg, black uppercase text, 4px radius
 * - NO cards, borders, glows, or gradients — typography + whitespace only
 *
 * REVERT: previous dark-ember design saved at
 * design-backups/home-dark-ember-page.tsx.bak and on git branch
 * backup/home-dark-ember-2026-06-28.
 */

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import HeroTrustBar from "@/components/HeroTrustBar";
import { useState, useCallback, useEffect, useRef } from "react";

const BOOKING_URL = "/book-call";

/* Morningside-style button + link treatments */
const BTN_WHITE =
  "inline-flex items-center gap-2 rounded bg-white px-6 py-3 text-sm font-medium uppercase tracking-wider text-black transition-colors hover:bg-white/85";
const LINK_ARROW =
  "inline-flex items-center gap-2 text-sm uppercase tracking-wider text-white/70 hover:text-white transition-colors group";

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      <div className="relative max-container section-padding text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.3em] text-white/40 mb-8"
        >
          AI Consulting &amp; Automation Agency · Australia
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight leading-[1.1] text-white text-balance max-w-4xl mx-auto"
        >
          We don&apos;t just talk about AI.
          <br />
          We build it into your business.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-lg md:text-xl font-light text-white/55 max-w-2xl mx-auto leading-relaxed"
        >
          We find the AI opportunities that will actually move your numbers,
          build the systems — Growth Infrastructure for revenue, Operations
          Infrastructure for costs — then run them for you. Engineered for
          your business. Owned by you.
        </motion.p>

        {/* Trust bar */}
        <HeroTrustBar className="mt-9" />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-9 flex items-center justify-center"
        >
          <a href={BOOKING_URL} className={BTN_WHITE}>
            See If You Qualify
            <ArrowRight className="w-4 h-4" />
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
    <section className="py-12 border-t border-b border-white/10 overflow-hidden">
      <div className="max-container section-padding mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40 text-center">
          Trusted by 350+ businesses across 30+ industries in Australia
        </p>
      </div>
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="flex gap-14 flex-shrink-0 items-center"
        >
          {[...industries, ...industries].map((industry, i) => (
            <span
              key={i}
              className="flex-shrink-0 text-lg font-light text-white/35 whitespace-nowrap"
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
    text: "You bought the AI tools. Read the case studies. Sat through the webinars.",
    emphasis: false,
  },
  {
    text: "But months later, the pipeline is still unpredictable. The team is still buried in manual work. And the subscriptions sit unused.",
    emphasis: false,
  },
  {
    text: "Or you're just getting started — trying to avoid those exact mistakes.",
    emphasis: false,
  },
  {
    text: "You're not behind. You're just missing the systems.",
    emphasis: true,
  },
  {
    text: "That's why we built Novada Tech.",
    emphasis: true,
    withCta: true,
  },
];

function ProblemStatement({
  index,
  total,
  progress,
  text,
  emphasis,
  withCta,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  text: string;
  emphasis: boolean;
  withCta?: boolean;
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
          emphasis
            ? "text-3xl md:text-5xl font-light tracking-tight text-white leading-tight text-balance max-w-3xl"
            : "text-2xl md:text-4xl font-light text-white/80 leading-snug text-balance max-w-3xl"
        }
      >
        {text}
      </p>
      {withCta && (
        <a href={BOOKING_URL} className={`${BTN_WHITE} mt-10`}>
          See If You Qualify
          <ArrowRight className="w-4 h-4" />
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
        {PROBLEM_STATEMENTS.map((s, i) => (
          <ProblemStatement
            key={i}
            index={i}
            total={total}
            progress={scrollYProgress}
            text={s.text}
            emphasis={s.emphasis}
            withCta={s.withCta}
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
      className="w-1.5 h-1.5 rounded-full bg-white"
    />
  );
}

/* ─── THREE THINGS (Identify / Build / Run & Scale) ─── */
function ThreeThings() {
  return (
    <section id="solutions" className="section-spacing section-padding border-t border-white/10">
      <div className="max-container max-w-6xl">
        <AnimatedSection className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight text-balance">
            We spend our days doing three things...
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-x-10 gap-y-16">
          {/* 01 — Identify */}
          <AnimatedSection>
            <div className="flex flex-col h-full">
              <span className="text-[110px] md:text-[150px] font-extralight leading-none text-white select-none">
                1
              </span>
              <h3 className="mt-6 text-2xl font-normal text-white">Identify</h3>
              <p className="mt-4 text-base font-light text-white/55 leading-relaxed flex-1">
                It starts with clarity, not code. We map how work and revenue
                actually flow through your business, find where time and
                margin leak, and isolate the opportunities with the highest
                return — ROI-ranked, with the assumptions documented.
              </p>
              <div className="mt-8 pt-5 border-t border-white/10">
                <Link href="/ai-consulting" className={LINK_ARROW}>
                  The AI Opportunity Audit
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* 02 — Build */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col h-full">
              <span className="text-[110px] md:text-[150px] font-extralight leading-none text-white select-none">
                2
              </span>
              <h3 className="mt-6 text-2xl font-normal text-white">Build</h3>
              <p className="mt-4 text-base font-light text-white/55 leading-relaxed">
                Then we build the system that fits your constraint — revenue
                or costs. Working infrastructure integrated with how your
                business already runs, not another tool for the shelf.
              </p>
              <div className="mt-8 flex-1 flex flex-col justify-end">
                <Link
                  href="/linkedin-growth"
                  className="block py-4 border-t border-white/10 group"
                >
                  <span className="flex items-center justify-between">
                    <span className="text-sm uppercase tracking-wider text-white/70 group-hover:text-white transition-colors">
                      Growth Infrastructure
                    </span>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
                  </span>
                  <span className="block mt-1 text-xs font-light text-white/40">
                    15+ qualified sales meetings a month — guaranteed
                  </span>
                </Link>
                <Link
                  href="/operations-infrastructure"
                  className="block py-4 border-t border-white/10 group"
                >
                  <span className="flex items-center justify-between">
                    <span className="text-sm uppercase tracking-wider text-white/70 group-hover:text-white transition-colors">
                      Operations Infrastructure
                    </span>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
                  </span>
                  <span className="block mt-1 text-xs font-light text-white/40">
                    Custom AI that cuts the manual work eating your margin
                  </span>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* 03 — Run & Scale */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col h-full">
              <span className="text-[110px] md:text-[150px] font-extralight leading-none text-white select-none">
                3
              </span>
              <h3 className="mt-6 text-2xl font-normal text-white">
                Run &amp; Scale
              </h3>
              <p className="mt-4 text-base font-light text-white/55 leading-relaxed flex-1">
                Systems go live inside your business, on your accounts — and
                our team runs and refines them every month. When one
                constraint is gone, we point at the next. You own everything,
                whether we&apos;re in the room or not.
              </p>
              <div className="mt-8 pt-5 border-t border-white/10">
                <Link href="/case-study" className={LINK_ARROW}>
                  See The Results
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} className="mt-16 md:mt-20">
          <a href={BOOKING_URL} className={BTN_WHITE}>
            See If You Qualify
            <ArrowRight className="w-4 h-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
const HOME_VIDEO_TESTIMONIALS = [
  { id: "CBL83P7OYgI", title: "Nicola — Morasco Media Services", name: "Nicola", company: "Founder, Morasco Media Services" },
  { id: "upgMW2nwwpk", title: "Tony — South Line Media", name: "Tony", company: "Founder, South Line Media" },
  { id: "G44OKPVh3Uk", title: "Michael — Aaronson Investigations", name: "Michael", company: "Founder, Aaronson Investigations" },
  { id: "Ef4YTXOnCP0", title: "Jeff — Vertical Axis", name: "Jeff", company: "Founder, Vertical Axis" },
  { id: "0qabR5mfAfQ", title: "Anthony — Ripple Clarke", name: "Anthony", company: "Founder, Ripple Clarke" },
  { id: "JXEvONrDaOk", title: "Damian — Groundwork Ventures", name: "Damian", company: "Founder, Groundwork Ventures" },
  { id: "O3HUPQyflH8", title: "Jack — House Valley", name: "Jack", company: "Founder, House Valley" },
  { id: "w5iJNOADdXU", title: "Nate — Larsky Tack and Feed", name: "Nate", company: "Founder, Larsky Tack and Feed" },
];

function HomeVideoSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = HOME_VIDEO_TESTIMONIALS.length;

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const prev = () => goTo((current - 1 + total) % total, -1);
  const next = () => goTo((current + 1) % total, 1);

  const video = HOME_VIDEO_TESTIMONIALS[current];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Desktop: side arrows + padded card. Mobile: full-width card */}
      <div className="relative">
        {/* Side arrows — desktop only */}
        <button
          onClick={prev}
          className="hidden sm:flex absolute left-0 top-[42%] -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 items-center justify-center text-white/70 hover:text-white hover:border-white/60 transition-colors duration-200 z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={next}
          className="hidden sm:flex absolute right-0 top-[42%] -translate-y-1/2 w-12 h-12 rounded-full border border-white/40 bg-white/5 items-center justify-center text-white hover:border-white transition-colors duration-200 z-10"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Video card — full width on mobile, padded on desktop */}
        <div className="sm:px-16">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={video.id}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="border border-white/10 rounded p-3"
            >
              <div className="relative w-full aspect-video rounded overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
              <div className="flex items-center gap-3 mt-3 px-1 pb-1">
                <div>
                  <p className="text-xs font-medium text-white/70">{video.name}</p>
                  <p className="text-[11px] font-light text-white/35">{video.company}</p>
                </div>
                <div className="ml-auto text-white/60 text-xs flex-shrink-0">★★★★★</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile arrows row — below video */}
      <div className="flex sm:hidden items-center justify-center gap-4 mt-4">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Dot indicators inline on mobile */}
        <div className="flex items-center gap-2">
          {HOME_VIDEO_TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-white" : "w-1.5 bg-white/20"
              }`}
              aria-label={`Go to video ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-12 h-12 rounded-full border border-white/40 bg-white/5 flex items-center justify-center text-white"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dot indicators — desktop only */}
      <div className="hidden sm:flex items-center justify-center gap-2 mt-5">
        {HOME_VIDEO_TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-white" : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to video ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="section-spacing section-padding border-t border-white/10">
      <div className="max-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white text-balance">
            Don&apos;t just take our word for it...
          </h2>
          <p className="mt-5 text-lg font-light text-white/55 max-w-2xl mx-auto">
            Real business owners. Real results. No scripts.
          </p>
        </AnimatedSection>

        <HomeVideoSlider />

        <AnimatedSection delay={0.3} className="text-center mt-10">
          <a
            href="https://www.trustpilot.com/review/novadatech.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-base font-light text-white/60 hover:text-white/90 transition-colors"
          >
            <span className="text-white/80">★★★★★</span>
            <span className="underline underline-offset-4 decoration-white/20">
              Rated 4.9/5 from 77+ verified reviews on Trustpilot
            </span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── STATS STRIP ─── */
function StatsStrip() {
  const stats = [
    { num: "350+", label: "Businesses Scaled" },
    { num: "$45.7M+", label: "Client Revenue Generated" },
    { num: "30+", label: "Industries Across Australia" },
    { num: "4.9★", label: "Trustpilot · 77+ Reviews" },
  ];

  return (
    <section className="section-padding py-20 md:py-24 border-t border-white/10">
      <div className="max-container max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <p className="text-4xl md:text-6xl font-extralight text-white tracking-tight leading-none">
                {s.num}
              </p>
              <p className="mt-4 text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/35">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CASE STUDIES ─── */
function CaseStudies() {
  const cases = [
    {
      company: "South Line Media",
      founder: "Tony — Founder",
      offering: "Growth Infrastructure™",
      metric: "5x",
      metricLabel: "Monthly revenue growth — from $20K to $100K+ per month",
      challenge:
        "A capable agency stuck at $20K/month with no predictable way to reach the decision-makers who could afford its best work.",
      slug: "tony-south-line-media",
    },
    {
      company: "Groundwork Ventures",
      founder: "Damian — Founder",
      offering: "Operations Infrastructure™",
      metric: "80%+",
      metricLabel: "Operational time cut — manual workload replaced by AI systems",
      challenge:
        "A growing operation where the founder and team were buried in repetitive manual work that ate margin and blocked scale.",
      slug: "damian-groundwork-ventures",
    },
    {
      company: "Aaronson Investigations",
      founder: "Michael — Founder",
      offering: "Growth Infrastructure™",
      metric: "10x",
      metricLabel: "Revenue growth in 30 days — discovery calls arriving pre-sold",
      challenge:
        "An expert firm invisible to its ideal clients — great at the work, with no system to put that expertise in front of buyers.",
      slug: "michael-aaronson-investigations",
    },
  ];

  return (
    <section className="section-spacing section-padding border-t border-white/10">
      <div className="max-container max-w-6xl">
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white text-balance">
            Real businesses. Real numbers.
          </h2>
          <p className="mt-5 text-lg font-light text-white/55 max-w-2xl">
            Documented results from both sides of the business — growth and
            operations. Every one links to the full story, told by the founder
            on video.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-x-10 gap-y-14">
          {cases.map((c, i) => (
            <AnimatedSection key={c.slug} delay={i * 0.12}>
              <Link
                href={`/case-study/${c.slug}`}
                className="block h-full border-t border-white/20 pt-7 group"
              >
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-6">
                  {c.offering}
                </p>
                <p className="text-6xl md:text-7xl font-extralight text-white leading-none">
                  {c.metric}
                </p>
                <p className="mt-3 text-sm font-light text-white/55 leading-relaxed">
                  {c.metricLabel}
                </p>
                <p className="mt-6 text-base font-light text-white/55 leading-relaxed">
                  <span className="text-white/80">{c.company}</span> ·{" "}
                  {c.founder}. {c.challenge}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-wider text-white/70 group-hover:text-white transition-colors">
                  Read The Full Story
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="mt-14">
          <Link href="/case-study" className={LINK_ARROW}>
            View all case studies
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
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
    <section className="section-spacing section-padding border-t border-white/10">
      <div className="max-container max-w-3xl">
        <AnimatedSection className="mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-5">
            FAQs
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
            You&apos;ve got questions.
            <br />
            We&apos;ve got answers.
          </h2>
        </AnimatedSection>

        <div>
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
    <AnimatedSection delay={index * 0.06}>
      <div className="border-b border-white/10">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-6 text-left group"
        >
          <span className="text-lg font-light text-white/85 group-hover:text-white transition-colors pr-4">
            {question}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-white/40 flex-shrink-0 transition-transform duration-300 ${
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
          <p className="pb-7 text-base font-light text-white/55 leading-relaxed">
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
    <section className="section-spacing section-padding border-t border-white/10">
      <div className="max-container text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-6xl font-light tracking-tight leading-[1.15] text-white text-balance max-w-4xl mx-auto">
            AI is here. Most businesses will react.
            <br />
            The few with systems will lead.
          </h2>
          <p className="mt-8 text-lg md:text-xl font-light text-white/55 max-w-xl mx-auto">
            We build for those few.
          </p>
          <div className="mt-10">
            <a href={BOOKING_URL} className={BTN_WHITE}>
              See If You Qualify
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-8 text-xs uppercase tracking-[0.2em] text-white/30 flex-wrap">
            <span>Performance Guaranteed</span>
            <span className="hidden sm:inline text-white/15">·</span>
            <a
              href="https://www.trustpilot.com/review/novadatech.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors underline underline-offset-4 decoration-white/20"
            >
              4.9★ Trustpilot
            </a>
            <span className="hidden sm:inline text-white/15">·</span>
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
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} transition={{ duration: 0.3, ease: "easeOut" }} className="fixed bottom-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-xl border-t border-white/10 py-3 px-5 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-sm text-white">AI systems that grow revenue and cut costs</p>
              <p className="text-xs font-light text-white/45">Installed by Novada Tech. Owned by you.</p>
            </div>
            <a href={BOOKING_URL} className={`${BTN_WHITE} !py-2.5 w-full sm:w-auto justify-center`}>
              See If You Qualify
              <ArrowRight className="w-4 h-4" />
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
