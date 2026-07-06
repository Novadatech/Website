"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  Shield,
  TrendingUp,
  Cog,
  Compass,
  Play,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import HeroTrustBar from "@/components/HeroTrustBar";
import { useState, useCallback, useEffect } from "react";


const BOOKING_URL = "/book-call";

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative pt-16 pb-12 overflow-hidden">
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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ember-500/20 bg-ember-500/5 mb-4"
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
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance max-w-4xl mx-auto"
        >
          We Build The AI Systems That{" "}
          <span className="gradient-text">Grow Your Revenue</span> — And Cut
          The Costs That Eat It.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed"
        >
          Novada Tech installs Growth Infrastructure that books 15+ qualified
          sales meetings a month, and custom AI operations systems that remove
          your biggest bottlenecks. Engineered for your business. Run by us.
          Owned by you.
        </motion.p>

        {/* STANDALONE TRUST BAR — prominent social proof above the CTAs */}
        <HeroTrustBar className="mt-7" />

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href={BOOKING_URL} className="btn-primary text-base">
            See If You Qualify
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#solutions" className="btn-secondary text-base">
            Explore Our Solutions
          </a>
        </motion.div>

      </div>
    </section>
  );
}

/* ─── SOLUTIONS ROUTER ─── */
function SolutionsRouter() {
  const solutions = [
    {
      icon: TrendingUp,
      name: "Growth Infrastructure",
      outcome:
        "Become the obvious choice in your industry and book 15+ qualified sales meetings every month — guaranteed.",
      pills: ["Authority content", "Done-for-you outreach", "Pre-qualified bookings"],
      href: "/linkedin-growth",
      cta: "See How It Works",
    },
    {
      icon: Cog,
      name: "Operations Infrastructure",
      outcome:
        "Custom AI systems that take over quoting, admin, documents, and logistics — so you scale output without scaling headcount.",
      pills: ["Quoting & documents", "Logistics & inventory", "Client communication"],
      href: "/operations-infrastructure",
      cta: "See What We Build",
    },
    {
      icon: Compass,
      name: "AI Consulting",
      outcome:
        "A structured audit and ROI-ranked roadmap showing exactly where AI pays for itself in your business first.",
      pills: ["Process audit", "ROI-ranked roadmap", "Build vs buy guidance"],
      href: "/ai-consulting",
      cta: "See How The Audit Works",
    },
  ];

  return (
    <section id="solutions" className="section-spacing section-padding border-t border-white/[0.04]">
      <div className="max-container">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6">
            Our Solutions
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            One Agency. <span className="text-white/40">Three Ways To Win.</span>
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Whether your biggest constraint is pipeline, operations, or knowing
            where to start with AI — there&apos;s a system for it.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {solutions.map((s, i) => (
            <AnimatedSection key={s.href} delay={i * 0.1}>
              <Link
                href={s.href}
                className="block glass-card gradient-border rounded-2xl p-8 h-full group hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-ember-500/10 border border-ember-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="w-6 h-6 text-ember-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.name}</h3>
                <p className="text-base text-white/70 leading-relaxed">
                  {s.outcome}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.pills.map((pill, j) => (
                    <span
                      key={j}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/50"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ember-500 group-hover:text-ember-400 transition-colors">
                  {s.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PROBLEM ─── */
function ProblemSection() {
  const problems = [
    {
      tag: "The Pipeline Problem",
      headline: "Revenue is inconsistent and unpredictable",
      body: "Some months are great. Others are dead. You can't forecast revenue, plan capacity, or invest in growth when you have no idea where the next client is coming from.",
      pills: ["Feast and famine cycle", "No revenue visibility", "Growth stalls"],
    },
    {
      tag: "The Operations Problem",
      headline: "Manual work is quietly eating your margin",
      body: "Quoting, admin, document handling, chasing paperwork. Every hour of it is payroll spent producing nothing new — and growing means hiring more people to do more of it.",
      pills: ["Rising labour costs", "Founder bottleneck", "Profit stays flat"],
    },
    {
      tag: "The AI Problem",
      headline: "You know AI matters — but not where to start",
      body: "Every vendor says their tool is the answer. Every competitor claims they're using AI. Betting months and real budget on the wrong project is how AI becomes a sore point instead of an advantage.",
      pills: ["Tool overload", "Stalled pilots", "No clear ROI"],
    },
  ];

  return (
    <section className="section-spacing section-padding border-t border-white/[0.04]">
      <div className="max-container">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Your Business Is Great.{" "}
            <span className="text-white/40">Your Systems Aren&apos;t.</span>
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Most businesses don&apos;t have a growth problem or a people
            problem. They have a system problem. Here&apos;s what&apos;s
            keeping you stuck.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card border border-white/[0.06] rounded-2xl p-7 h-full flex flex-col">
                <div className="mb-5">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ember-500/10 border border-ember-500/25 text-xs font-medium text-ember-500">
                    <X className="w-3 h-3" /> {p.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{p.headline}</h3>
                <p className="text-base text-white/80 leading-relaxed flex-1">{p.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.pills.map((pill, j) => (
                    <span
                      key={j}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/50"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── STATS / PROOF ─── */
function ProofSection() {
  const stats = [
    { number: "77+", label: "Verified 5-Star Reviews", sublabel: "Trustpilot · Reviews are voluntary", href: "https://www.trustpilot.com/review/novadatech.com.au" },
    { number: "350+", label: "Businesses Scaled", sublabel: "And Growing" },
    { number: "$45.7M+", label: "Client Revenue Generated", sublabel: "Client Results" },
    { number: "30+", label: "Industries Scaled", sublabel: "Across Australia" },
  ];

  return (
    <section className="section-spacing section-padding border-t border-b border-white/[0.04]">
      <div className="max-container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6">
            Proof Over Promises
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Results That Speak for Themselves
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            From qualified-meeting pipelines to automated operations —
            documented results for businesses across Australia.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="h-full">
              {stat.href ? (
                <a href={stat.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="glass-card gradient-border p-6 md:p-8 text-center group hover:bg-white/[0.05] transition-colors duration-500 h-full">
                    <p className="text-4xl md:text-5xl font-bold tracking-tight leading-none gradient-text">{stat.number}</p>
                    <p className="mt-4 text-white/70 font-medium text-sm md:text-base min-h-[2.5rem] md:min-h-[3rem] flex items-center justify-center">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-white/30 text-xs uppercase tracking-wider underline underline-offset-2 decoration-white/20">
                      {stat.sublabel} ↗
                    </p>
                  </div>
                </a>
              ) : (
                <div className="glass-card gradient-border p-6 md:p-8 text-center group hover:bg-white/[0.05] transition-colors duration-500 h-full">
                  <p className="text-4xl md:text-5xl font-bold tracking-tight leading-none gradient-text">{stat.number}</p>
                  <p className="mt-4 text-white/70 font-medium text-sm md:text-base min-h-[2.5rem] md:min-h-[3rem] flex items-center justify-center">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-white/30 text-xs uppercase tracking-wider">
                    {stat.sublabel}
                  </p>
                </div>
              )}
            </AnimatedSection>
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
      offering: "LinkedIn Growth System™",
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
      offering: "Custom AI Build",
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
      offering: "LinkedIn Growth System™",
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

/* ─── TRUST BAR ─── */
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

/* ─── HOW WE WORK ─── */
function HowWeWork() {
  const steps = [
    {
      num: "01",
      title: "Diagnose",
      desc: "Every engagement starts by finding the real constraint. We look at your pipeline, your operations, and your numbers — and tell you whether the biggest return is in revenue, costs, or both.",
    },
    {
      num: "02",
      title: "Install",
      desc: "We build the system into your business — growth infrastructure for pipeline, custom AI for operations. Built around your actual workflow. Installed in your accounts. Owned by you.",
    },
    {
      num: "03",
      title: "Run & Scale",
      desc: "Our team runs and refines the system every month. And once one constraint is gone, we point at the next one — that's how results compound instead of plateau.",
    },
  ];

  return (
    <section id="how-it-works" className="section-spacing section-padding bg-gradient-to-b from-surface-950 via-zinc-900/40 to-surface-950">
      <div className="max-container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6">
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            One Method.
            <br />
            <span className="gradient-text">Every System We Build.</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card p-7 h-full border border-white/[0.04] group hover:border-ember-500/20 transition-all duration-500">
                <span className="text-3xl font-bold text-ember-500/20 group-hover:text-ember-500/40 transition-colors duration-500">
                  {step.num}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-base text-white/80 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
const HOME_VIDEO_TESTIMONIALS = [
  { id: "CBL83P7OYgI", title: "Nicole — Morasco Media Services", name: "Nicole", company: "Founder, Morasco Media Services" },
  { id: "upgMW2nwwpk", title: "Tony — South Line Media", name: "Tony", company: "Founder, South Line Media" },
  { id: "G44OKPVh3Uk", title: "Michael — Aaronson Investigations", name: "Michael", company: "Founder, Aaronson Investigations" },
  { id: "Ef4YTXOnCP0", title: "Jeff — Vertical Axis", name: "Jeff", company: "Founder, Vertical Axis" },
  { id: "0qabR5mfAfQ", title: "Anthony — Ripple Clarke", name: "Anthony", company: "Founder, Ripple Clarke" },
  { id: "JXEvONrDaOk", title: "Damian — Groundwork Ventures", name: "Damian", company: "Founder, Groundwork Ventures" },
  { id: "O3HUPQyflH8", title: "Jack — House Valley", name: "Jack", company: "Founder, House Valley" },
  { id: "w5iJNOADdXU", title: "Nate — Larsky Tach and Feed", name: "Nate", company: "Founder, Larsky Tach and Feed" },
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
            Hear It Directly From Our Partners
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

/* ─── WRITTEN TESTIMONIALS (big-photo cards) ─── */
function WrittenTestimonials() {
  const testimonials = [
    {
      metric: "$91K/mo",
      metricLabel: "monthly revenue",
      quote: "We went from $42K to $91K monthly in under 60 days. The pipeline became predictable for the first time — we could forecast and hire with confidence.",
      name: "Jeff",
      role: "Founder, Vertical Access",
      avatar: "/testimonials/jeff-verticalaccess.jpg",
    },
    {
      metric: "4 clients",
      metricLabel: "in first 45 days",
      quote: "We'd been burned by two agencies before. This was different — it was a system, not a service. 4 new retainer clients in the first 45 days.",
      name: "Nicola",
      role: "Founder, Morasco Media",
      avatar: "/testimonials/nicola-morasco.jpg",
    },
    {
      metric: "28% → 60%",
      metricLabel: "discovery call close rate",
      quote: "Discovery call conversion jumped from 28% to over 60%. The authority content meant prospects arrived already sold — we just confirmed fit.",
      name: "Michael",
      role: "Founder, Aaron's Investigation",
      avatar: "/testimonials/michael-aarons.jpg",
    },
    {
      metric: "6 months",
      metricLabel: "of meetings in month one",
      quote: "More qualified meetings in month one than the previous six months combined. The system ran on its own — I went back to delivery.",
      name: "Jessica",
      role: "Founder, Jessica Teds Coaching",
      avatar: "/testimonials/jessica-teds.jpg",
    },
  ];

  return (
    <section className="section-spacing section-padding border-t border-white/[0.04]">
      <div className="max-container">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-4">
            350+ Businesses &middot; $45.7M+ Tracked Revenue
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-balance leading-[1.05]">
            Real numbers from <span className="text-ember-500">real partners.</span>
          </h2>
          <p className="mt-5 text-base text-white/55 max-w-xl mx-auto">
            Every result below is from a named client engagement.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={(i % 2) * 0.1}>
              <article className="rounded-3xl border border-white/[0.08] bg-white/[0.02] overflow-hidden flex flex-col h-full">
                {/* Top: metric + stars + quote */}
                <div className="p-7 md:p-8">
                  <div className="flex items-baseline gap-2 mb-4 flex-wrap">
                    <p className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-none">{t.metric}</p>
                    <p className="text-sm text-white/40 font-medium">/ {t.metricLabel}</p>
                  </div>
                  <div className="text-ember-500 text-sm mb-4 tracking-widest">{"\u2605\u2605\u2605\u2605\u2605"}</div>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                </div>

                {/* Big customer image */}
                <div className="relative aspect-[4/5] bg-white/[0.02] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Name + role */}
                <div className="px-7 md:px-8 py-5 border-t border-white/[0.06]">
                  <p className="text-base font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-white/55">{t.role}</p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── COMPARISON ─── */
function ComparisonSection() {
  const rows = [
    { label: "What you buy", agency: "Campaigns & retainers", inhouse: "Salaries + management", novada: "Installed systems you own" },
    { label: "Results guaranteed", agency: false, inhouse: false, novada: true },
    { label: "Scope", agency: "Marketing only", inhouse: "One hire, one skill", novada: "Growth + operations + AI" },
    { label: "Time to value", agency: "60–90 days", inhouse: "3–6 months", novada: "Weeks, not quarters" },
    { label: "Your time investment", agency: "High", inhouse: "Very high", novada: "Low — we run it" },
    { label: "Scales without headcount", agency: false, inhouse: false, novada: true },
  ];

  return (
    <section className="section-spacing section-padding border-t border-white/[0.04]">
      <div className="max-container max-w-4xl">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6">
            Why Novada Tech
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            How We Compare
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Every way of solving growth and operations has a cost. Only one of
            them leaves you owning the system.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="rounded-2xl overflow-hidden border border-white/[0.06]">
            {/* Header */}
            <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/[0.06]">
              <div className="p-4 col-span-1" />
              <div className="p-4 text-center">
                <p className="text-sm font-medium text-white/55">Traditional Agency</p>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-medium text-white/55">In-House Team</p>
              </div>
              <div className="p-4 text-center bg-ember-500/[0.04] border-l border-ember-500/10">
                <p className="text-sm font-semibold text-ember-500">Novada Tech</p>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-4 border-b border-white/[0.04] last:border-0 ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}
              >
                <div className="p-4 flex items-center">
                  <span className="text-sm text-white/60">{row.label}</span>
                </div>
                <div className="p-4 flex items-center justify-center">
                  {typeof row.agency === "boolean" ? (
                    row.agency ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <X className="w-4 h-4 text-red-400/50" />
                    )
                  ) : (
                    <span className="text-sm text-white/50 text-center">{row.agency}</span>
                  )}
                </div>
                <div className="p-4 flex items-center justify-center">
                  {typeof row.inhouse === "boolean" ? (
                    row.inhouse ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <X className="w-4 h-4 text-red-400/50" />
                    )
                  ) : (
                    <span className="text-sm text-white/50 text-center">{row.inhouse}</span>
                  )}
                </div>
                <div className="p-4 flex items-center justify-center bg-ember-500/[0.04] border-l border-ember-500/10">
                  {typeof row.novada === "boolean" ? (
                    row.novada ? (
                      <Check className="w-4 h-4 text-ember-500" />
                    ) : (
                      <X className="w-4 h-4 text-red-400/50" />
                    )
                  ) : (
                    <span className="text-xs text-ember-500/80 font-medium text-center">{row.novada}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="text-center mt-10">
          <a href={BOOKING_URL} className="btn-primary text-base">
            See If You Qualify
            <ArrowRight className="w-5 h-5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── HOW TO START ─── */
function HowToStart() {
  const steps = [
    {
      num: "1",
      title: "Apply for a Strategy Call",
      desc: "We look at your business — offer, market, operations — and identify where the biggest return is hiding: pipeline, costs, or both.",
    },
    {
      num: "2",
      title: "Receive Your Plan",
      desc: "You'll get a clear plan for the system we'd install — growth infrastructure, operations automation, or an audit-first roadmap — and what it should return.",
    },
    {
      num: "3",
      title: "We Build. You Scale.",
      desc: "If we're a fit, we build the system into your business and run it for you — while you stay focused on delivery.",
    },
  ];

  return (
    <section className="py-16 section-padding bg-gradient-to-b from-surface-950 via-zinc-900/30 to-surface-950">
      <div className="max-container max-w-4xl">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6">
            Getting Started
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Three Steps to Predictable Growth
          </h2>
          <p className="mt-4 text-lg text-white/80">
            We only work with a small number of partners each quarter.
          </p>
        </AnimatedSection>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="glass-card gradient-border p-8 flex gap-6 items-start group hover:bg-white/[0.04] transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-ember-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-white/80 text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <a href={BOOKING_URL} className="btn-primary text-base">
            See If You Qualify
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-base text-white/80">
            Spots limited — selective partner program
          </p>
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
          <h2 className="text-3xl md:text-4xl font-bold">
            Your Questions Answered
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
    <section className="pt-6 pb-16 section-padding">
      <div className="max-container">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-surface-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,48,0.1)_0%,_transparent_70%)]" />

            <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6">
                Ready to Scale?
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance max-w-3xl mx-auto">
                The Systems Won&apos;t Build Themselves.
                <br />
                <span className="gradient-text">
                  Let&apos;s Build Them Together.
                </span>
              </h2>
              <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
                One call. No pressure. No hard sell. Just a clear plan showing
                where AI systems would return the most in your business —
                revenue, operations, or both.
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

/* ─── VSL SECTION ─── */
function VSLSection() {
  return (
    <section className="section-padding pb-0">
      <div className="max-container max-w-4xl">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-4">
            Our Flagship System
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Watch How We Generate High-Value Clients{" "}
            <span className="gradient-text">for Your Business</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex items-center justify-center gap-2 mb-3 text-sm text-white/50">
            <Play className="w-3.5 h-3.5 text-ember-500" />
            <span>Watch the 2-min overview</span>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl"
            style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/_fVB00BpPpI?autoplay=1&mute=1&rel=0"
              title="Novada Tech — How We Generate High-Value Clients"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-white/40">
            <div className="w-5 h-5 rounded-full bg-ember-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-[8px] font-bold text-ember-400">A</span>
            </div>
            <span>Presented by <span className="text-white/60 font-medium">Ade</span> — Novada Tech</span>
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
      <SolutionsRouter />
      <VSLSection />
      <ProblemSection />
      <ProofSection />
      <CaseStudies />
      <TrustBar />
      <HowWeWork />
      <Testimonials />
      <WrittenTestimonials />
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container text-center">
          <div className="inline-block w-px h-8 bg-gradient-to-b from-white/20 to-transparent mb-8" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready to build systems like theirs?
          </h2>
          <p className="mt-3 text-lg text-white/80 max-w-sm mx-auto leading-relaxed">
            Every one of those businesses started with a single free strategy session.
          </p>
          <a href={BOOKING_URL} className="btn-primary mt-6 mx-auto inline-flex">
            See If You Qualify
            <ArrowRight className="w-4 h-4" />
          </a>
          <div className="mt-5 flex items-center justify-center gap-5 text-xs text-white/35 flex-wrap">
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-ember-500/60" /> Zero obligation</span>
            <span className="text-white/15">|</span>
            <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-ember-500/60" /> 4.9 on Trustpilot</span>
            <span className="text-white/15">|</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-ember-500/60" /> No retainers</span>
          </div>
        </div>
      </section>
      <ComparisonSection />
      <HowToStart />
      <FAQ />
      <FinalCTA />
      <StickyCtaBar />
      <div className="h-16 sm:h-0" />
    </>
  );
}
