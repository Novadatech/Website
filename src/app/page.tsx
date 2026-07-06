"use client";

/*
 * Home page — structured on the Morningside AI homepage spine (user
 * direction, 2026-06-28): Hero (anti-hype claim) → industries marquee →
 * stacked problem narrative → "three things" client journey (Identify /
 * Build / Run & Scale) → testimonials → stats strip → case studies →
 * FAQ → closer. One CTA verb throughout ("See If You Qualify").
 *
 * The journey section is the connective tissue: AI Consulting is step 01
 * (Identify), Growth Infrastructure + Operations Infrastructure are what
 * gets built in step 02, and step 03 is the run-and-own model.
 */

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  Shield,
  TrendingUp,
  Cog,
  Search,
  Wrench,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import HeroTrustBar from "@/components/HeroTrustBar";
import { useState, useCallback, useEffect } from "react";

const BOOKING_URL = "/book-call";

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative pt-20 pb-14 md:pt-24 md:pb-16 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-surface-950 to-surface-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,90,48,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,90,48,0.06)_0%,_transparent_60%)]" />

      <div className="relative max-container section-padding text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ember-500/20 bg-ember-500/5 mb-5"
        >
          <span className="w-2 h-2 rounded-full bg-ember-500 animate-pulse-slow" />
          <span className="text-sm text-ember-500 font-medium">
            AI Consulting &amp; Automation Agency · Australia
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.08] text-balance max-w-4xl mx-auto"
        >
          We Don&apos;t Just Talk About AI.{" "}
          <span className="gradient-text">We Build It Into Your Business.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed"
        >
          We find the AI opportunities that will actually move your numbers,
          build the systems — Growth Infrastructure for revenue, Operations
          Infrastructure for costs — then run them for you. Engineered for
          your business. Owned by you.
        </motion.p>

        {/* STANDALONE TRUST BAR — social proof above the CTA */}
        <HeroTrustBar className="mt-7" />

        {/* CTA — single verb, mirrored throughout the page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-7 flex items-center justify-center"
        >
          <a href={BOOKING_URL} className="btn-primary text-base">
            See If You Qualify
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── INDUSTRIES MARQUEE (logo-carousel slot) ─── */
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
    <section className="py-12 border-t border-b border-white/[0.08] overflow-hidden bg-white/[0.02]">
      <div className="max-container section-padding mb-8">
        <p className="text-sm font-semibold text-white/70 text-center uppercase tracking-[0.2em]">
          Trusted by 350+ businesses across <span className="text-ember-500">30+ industries</span> in Australia
        </p>
      </div>
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 flex-shrink-0"
        >
          {[...industries, ...industries].map((industry, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-base text-white/80 whitespace-nowrap font-medium"
            >
              {industry}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── PROBLEM NARRATIVE (stacked statements) ─── */
function ProblemNarrative() {
  const statements = [
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
    },
  ];

  return (
    <section className="section-spacing section-padding">
      <div className="max-container max-w-3xl text-center">
        <div className="space-y-8 md:space-y-10">
          {statements.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <p
                className={
                  s.emphasis
                    ? "text-2xl md:text-4xl font-bold text-white leading-snug text-balance"
                    : "text-xl md:text-2xl text-white/70 leading-relaxed text-balance"
                }
              >
                {s.text}
              </p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-12">
          <a href={BOOKING_URL} className="btn-primary text-base">
            See If You Qualify
            <ArrowRight className="w-5 h-5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── THREE THINGS (client journey: Identify / Build / Run & Scale) ─── */
function ThreeThings() {
  return (
    <section id="solutions" className="section-spacing section-padding bg-gradient-to-b from-surface-950 via-zinc-900/40 to-surface-950">
      <div className="max-container max-w-6xl">
        <AnimatedSection className="text-center mb-14 md:mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            We Spend Our Days Doing{" "}
            <span className="gradient-text">Three Things.</span>
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Every client moves through the same journey — from finding where
            AI pays off, to a system running inside their business.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {/* 01 — Identify */}
          <AnimatedSection>
            <div className="glass-card gradient-border rounded-2xl p-8 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-ember-500/10 border border-ember-500/20 flex items-center justify-center">
                  <Search className="w-6 h-6 text-ember-500" />
                </div>
                <span className="text-4xl font-bold text-ember-500/20">01</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Identify</h3>
              <p className="text-base text-white/70 leading-relaxed flex-1">
                It starts with clarity, not code. We map how work and revenue
                actually flow through your business, find where time and
                margin leak, and isolate the opportunities with the highest
                return — ROI-ranked, with the assumptions documented.
              </p>
              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <Link
                  href="/ai-consulting"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ember-500 hover:text-ember-400 transition-colors group"
                >
                  The AI Opportunity Audit
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* 02 — Build */}
          <AnimatedSection delay={0.1}>
            <div className="glass-card gradient-border rounded-2xl p-8 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-ember-500/10 border border-ember-500/20 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-ember-500" />
                </div>
                <span className="text-4xl font-bold text-ember-500/20">02</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Build</h3>
              <p className="text-base text-white/70 leading-relaxed">
                Then we build the system that fits your constraint — revenue
                or costs. Working infrastructure integrated with how your
                business already runs, not another tool for the shelf.
              </p>
              <div className="mt-5 space-y-3 flex-1">
                <Link
                  href="/linkedin-growth"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-ember-500/30 hover:bg-white/[0.05] transition-colors group"
                >
                  <TrendingUp className="w-4 h-4 text-ember-500 flex-shrink-0" />
                  <span className="text-sm text-white/85 font-medium flex-1">
                    Growth Infrastructure
                    <span className="block text-xs text-white/45 font-normal mt-0.5">
                      15+ qualified sales meetings a month — guaranteed
                    </span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-ember-500 transition-colors flex-shrink-0" />
                </Link>
                <Link
                  href="/operations-infrastructure"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-ember-500/30 hover:bg-white/[0.05] transition-colors group"
                >
                  <Cog className="w-4 h-4 text-ember-500 flex-shrink-0" />
                  <span className="text-sm text-white/85 font-medium flex-1">
                    Operations Infrastructure
                    <span className="block text-xs text-white/45 font-normal mt-0.5">
                      Custom AI that cuts the manual work eating your margin
                    </span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-ember-500 transition-colors flex-shrink-0" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* 03 — Run & Scale */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card gradient-border rounded-2xl p-8 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-ember-500/10 border border-ember-500/20 flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-ember-500" />
                </div>
                <span className="text-4xl font-bold text-ember-500/20">03</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Run &amp; Scale</h3>
              <p className="text-base text-white/70 leading-relaxed flex-1">
                Systems go live inside your business, on your accounts — and
                our team runs and refines them every month. When one
                constraint is gone, we point at the next. You own everything,
                whether we&apos;re in the room or not.
              </p>
              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <Link
                  href="/case-study"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ember-500 hover:text-ember-400 transition-colors group"
                >
                  See The Results
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} className="text-center mt-12">
          <a href={BOOKING_URL} className="btn-primary text-base">
            See If You Qualify
            <ArrowRight className="w-5 h-5" />
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
        <motion.button
          onClick={prev}
          animate={{ boxShadow: ["0 0 0px rgba(255,90,48,0)", "0 0 16px rgba(255,90,48,0.4)", "0 0 0px rgba(255,90,48,0)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.93 }}
          className="hidden sm:flex absolute left-0 top-[42%] -translate-y-1/2 w-12 h-12 rounded-full bg-zinc-900/90 border border-ember-500/35 items-center justify-center text-ember-500 hover:border-ember-500/80 hover:bg-zinc-800 transition-colors duration-200 z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          onClick={next}
          animate={{ boxShadow: ["0 0 0px rgba(255,90,48,0)", "0 0 24px rgba(255,90,48,0.6)", "0 0 0px rgba(255,90,48,0)"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.93 }}
          className="hidden sm:flex absolute right-0 top-[42%] -translate-y-1/2 w-12 h-12 rounded-full bg-ember-500/15 border border-ember-500/60 items-center justify-center text-ember-500 hover:bg-ember-500/25 hover:border-ember-500 transition-colors duration-200 z-10"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        {/* Video card — full width on mobile, padded on desktop */}
        <div className="sm:px-16">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={video.id}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="glass-card gradient-border p-3"
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden">
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
                <div className="w-7 h-7 rounded-full bg-ember-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold text-ember-400">{video.name[0]}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/70">{video.name}</p>
                  <p className="text-[11px] text-white/35">{video.company}</p>
                </div>
                <div className="ml-auto text-ember-500 text-xs flex-shrink-0">★★★★★</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile arrows row — below video */}
      <div className="flex sm:hidden items-center justify-center gap-4 mt-4">
        <motion.button
          onClick={prev}
          animate={{ boxShadow: ["0 0 0px rgba(255,90,48,0)", "0 0 16px rgba(255,90,48,0.4)", "0 0 0px rgba(255,90,48,0)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          whileTap={{ scale: 0.93 }}
          className="w-12 h-12 rounded-full bg-zinc-900/90 border border-ember-500/35 flex items-center justify-center text-ember-500"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        {/* Dot indicators inline on mobile */}
        <div className="flex items-center gap-2">
          {HOME_VIDEO_TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-ember-500" : "w-2 bg-white/20"
              }`}
              aria-label={`Go to video ${i + 1}`}
            />
          ))}
        </div>

        <motion.button
          onClick={next}
          animate={{ boxShadow: ["0 0 0px rgba(255,90,48,0)", "0 0 24px rgba(255,90,48,0.6)", "0 0 0px rgba(255,90,48,0)"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          whileTap={{ scale: 0.93 }}
          className="w-12 h-12 rounded-full bg-ember-500/15 border border-ember-500/60 flex items-center justify-center text-ember-500"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Dot indicators — desktop only */}
      <div className="hidden sm:flex items-center justify-center gap-2 mt-5">
        {HOME_VIDEO_TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-ember-500" : "w-2 bg-white/20 hover:bg-white/40"
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
    <section className="section-spacing section-padding border-t border-white/[0.04]">
      <div className="max-container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6">
            Client Success
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Don&apos;t Just Take Our Word For It.
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Real business owners. Real results. No scripts.
          </p>
        </AnimatedSection>

        <HomeVideoSlider />

        <AnimatedSection delay={0.3} className="text-center mt-10">
          <a
            href="https://www.trustpilot.com/review/novadatech.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-base text-white/80 hover:text-white/70 transition-colors"
          >
            <div className="flex text-ember-500">★★★★★</div>
            <span className="underline underline-offset-2 decoration-white/20">
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
    <section className="section-padding py-16 md:py-20 border-t border-white/[0.04]">
      <div className="max-container max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <p className="text-3xl md:text-5xl font-bold text-ember-500 tracking-tight leading-none">
                {s.num}
              </p>
              <p className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.18em] text-white/45 font-medium">
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
      metricLabel: "Monthly Revenue Growth",
      result: "From $20K to $100K+ per month",
      challenge:
        "A capable agency stuck at $20K/month with no predictable way to reach the decision-makers who could afford its best work.",
      slug: "tony-south-line-media",
    },
    {
      company: "Groundwork Ventures",
      founder: "Damian — Founder",
      offering: "Operations Infrastructure™",
      metric: "80%+",
      metricLabel: "Operational Time Cut",
      result: "Manual workload replaced by AI systems",
      challenge:
        "A growing operation where the founder and team were buried in repetitive manual work that ate margin and blocked scale.",
      slug: "damian-groundwork-ventures",
    },
    {
      company: "Aaronson Investigations",
      founder: "Michael — Founder",
      offering: "Growth Infrastructure™",
      metric: "10x",
      metricLabel: "Revenue Growth In 30 Days",
      result: "Discovery calls arriving pre-sold",
      challenge:
        "An expert firm invisible to its ideal clients — great at the work, with no system to put that expertise in front of buyers.",
      slug: "michael-aaronson-investigations",
    },
  ];

  return (
    <section className="section-spacing section-padding border-t border-white/[0.04]">
      <div className="max-container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6">
            Client Results
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Real Businesses. Real Numbers.
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Documented results from both sides of the business — growth and
            operations. Every one links to the full story, told by the founder
            on video.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <AnimatedSection key={c.slug} delay={i * 0.12}>
              <Link
                href={`/case-study/${c.slug}`}
                className="glass-card gradient-border p-7 h-full flex flex-col group hover:bg-white/[0.04] transition-all duration-500"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <p className="font-bold text-white text-base">{c.company}</p>
                    <p className="text-sm text-white/60 mt-0.5">{c.founder}</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-ember-500/10 border border-ember-500/20 text-ember-500 whitespace-nowrap flex-shrink-0 ml-3">
                    {c.offering}
                  </span>
                </div>

                {/* Metric */}
                <div className="mb-5 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
                  <p className="text-3xl font-bold gradient-text">{c.metric}</p>
                  <p className="text-base text-white/80 mt-1">{c.metricLabel}</p>
                  <p className="text-xs text-ember-500/60 mt-1 font-medium">{c.result}</p>
                </div>

                {/* Challenge */}
                <p className="text-base text-white/80 leading-relaxed mb-5 flex-1">
                  <span className="text-white/80 font-medium">Before: </span>
                  {c.challenge}
                </p>

                {/* Read the story */}
                <div className="mt-auto pt-4 border-t border-white/[0.05]">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-ember-500 group-hover:text-ember-400 transition-colors">
                    Read The Full Story
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center mt-10">
          <Link
            href="/case-study"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors"
          >
            View all case studies
            <ArrowRight className="w-4 h-4" />
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
    <section className="pt-16 pb-0 section-padding border-t border-white/[0.04]">
      <div className="max-container max-w-3xl">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6">
            FAQs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            You&apos;ve Got Questions. We&apos;ve Got Answers.
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
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
    <AnimatedSection delay={index * 0.08}>
      <div className="glass-card border border-white/[0.04] rounded-xl overflow-hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
        >
          <span className="text-white/90 font-medium pr-4">{question}</span>
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
          <p className="px-6 pb-6 text-base text-white/80 leading-relaxed">{answer}</p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

/* ─── FINAL CTA ─── */
function FinalCTA() {
  return (
    <section className="pt-16 pb-16 section-padding">
      <div className="max-container">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-surface-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,48,0.1)_0%,_transparent_70%)]" />

            <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance max-w-3xl mx-auto">
                AI Is Here. Most Businesses Will React.
                <br />
                <span className="gradient-text">
                  The Few With Systems Will Lead.
                </span>
              </h2>
              <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
                We build for those few. One call, no pressure — just a clear
                plan showing where AI systems would return the most in your
                business.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={BOOKING_URL} className="btn-primary text-base">
                  See If You Qualify
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Performance Guaranteed</span>
                </div>
                <a
                  href="https://www.trustpilot.com/review/novadatech.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white/50 transition-colors"
                >
                  <Star className="w-4 h-4" />
                  <span className="underline underline-offset-2 decoration-white/20">4.9★ Trustpilot</span>
                </a>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Systems You Own</span>
                </div>
              </div>
            </div>
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
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} transition={{ duration: 0.3, ease: "easeOut" }} className="fixed bottom-0 left-0 right-0 z-50 bg-surface-950/95 backdrop-blur-xl border-t border-white/[0.08] py-3 px-5 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white">AI systems that grow revenue and cut costs</p>
              <p className="text-xs text-white/50">Installed by Novada Tech. Owned by you.</p>
            </div>
            <a href={BOOKING_URL} className="btn-primary text-sm py-3 px-6 w-full sm:w-auto text-center">
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
    <>
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
    </>
  );
}
