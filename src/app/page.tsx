"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  Target,
  Zap,
  Users,
  BarChart3,
  MessageSquare,
  Settings,
  Phone,
  Layers,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  Shield,
  TrendingUp,
  Play,
  Clock,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useState, useCallback, useEffect } from "react";


const BOOKING_URL = "/book-call";

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative pt-16 pb-12 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,162,63,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(21,94,239,0.06)_0%,_transparent_60%)]" />

      <div className="relative max-container section-padding text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-slow" />
          <span className="text-sm text-gold-400 font-medium">
            Limited Availability This Quarter · Results Only · No Retainers
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-balance max-w-4xl mx-auto"
        >
          From $28K to $91K in 90 Days.{" "}
          We Build the{" "}
          <span className="gradient-text">Client Acquisition System</span>{" "}
          That Gets You There — Without Retainers
        </motion.h1>

        {/* Above-fold social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-3 flex items-center justify-center gap-3 text-sm text-white/50"
        >
          <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-gold-500/50" /> Join 350+ service businesses scaled</span>
          <span className="text-white/15">·</span>
          <a href="https://www.trustpilot.com/review/novadatech.com.au" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white/60 transition-colors">
            <span className="text-gold-400">{"\u2605\u2605\u2605\u2605\u2605"}</span>
            <span className="underline underline-offset-2 decoration-white/20">4.9 on Trustpilot</span>
          </a>
        </motion.div>

        {/* VSL — immediately below headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-4 max-w-4xl mx-auto"
        >
          {/* Video duration prompt */}
          <div className="flex items-center justify-center gap-2 mb-3 text-sm text-white/50">
            <Play className="w-3.5 h-3.5 text-gold-400" />
            <span>Watch the 2-min overview</span>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/_fVB00BpPpI?autoplay=1&mute=1"
              title="Novada Tech — How We Generate High-Value Clients"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>

          {/* Presenter identity */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-white/40">
            <div className="w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-[8px] font-bold text-gold-300">A</span>
            </div>
            <span>Presented by <span className="text-white/60 font-medium">Ade</span> — Novada Tech</span>
          </div>
        </motion.div>

        {/* Subheading — below video, bridges to CTA */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 text-xl md:text-2xl font-semibold text-white/90 max-w-2xl mx-auto leading-relaxed"
        >
          We install a complete client acquisition system into your business — from lead generation to sales closing. You only pay when we deliver results.
        </motion.p>
        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href={BOOKING_URL} className="btn-primary text-base">
            See If You Qualify
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#how-it-works" className="btn-secondary text-base">
            See How It Works
          </a>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-6 flex items-center justify-center gap-4"
        >
          <a
            href="https://www.trustpilot.com/review/novadatech.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:opacity-80 transition-opacity"
          >
            <div className="flex text-gold-400 text-sm tracking-wider">★★★★★</div>
            <span className="text-sm text-white/80 underline underline-offset-2 decoration-white/20">
              Rated 4.9/5 on Trustpilot · 77+ Verified Reviews
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── PROBLEM ─── */
function ProblemSection() {
  const problems = [
    {
      tag: "The Lead Quality Problem",
      headline: "You're getting leads — but they're the wrong ones",
      body: "Enquiries come in but they're time-wasters. Wrong budget. Wrong fit. You spend hours on discovery calls that go nowhere. The volume is there. The quality isn't.",
      pills: ["Low conversion rate", "Wasted sales time", "Wrong-fit clients"],
    },
    {
      tag: "The Conversion Problem",
      headline: "You're having calls — but they don't close",
      body: "Prospects seem interested. They ask good questions. Then they go quiet. Without a system that pre-qualifies and pre-sells before the call, you're doing all the hard work on the call itself.",
      pills: ["High no-show rate", "Long sales cycles", "Deals stall or ghost"],
    },
    {
      tag: "The Pipeline Problem",
      headline: "Your pipeline is inconsistent and unpredictable",
      body: "Some months are great. Others are dead. You can't forecast revenue, plan capacity, or invest in growth when you have no idea where the next client is coming from.",
      pills: ["Feast and famine cycle", "No revenue visibility", "Growth stalls"],
    },
  ];

  return (
    <section className="section-spacing section-padding border-t border-white/[0.04]">
      <div className="max-container">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Your Business Is Great.{" "}
            <span className="text-white/40">Your Pipeline Isn&apos;t.</span>
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Most businesses don&apos;t have a growth problem. They have a system
            problem. Here&apos;s what&apos;s keeping you stuck.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card border border-white/[0.06] rounded-2xl p-7 h-full flex flex-col">
                <div className="mb-5">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-medium text-red-400">
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

/* ─── SOLUTION ─── */
function SolutionSection() {
  const outcomes = [
    "Brings qualified prospects into your pipeline daily",
    "Books sales-ready meetings predictably",
    "Handles sales calls with a trained expert closer",
    "Converts leads into revenue systematically",
  ];

  return (
    <section className="section-spacing section-padding bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950">
      <div className="max-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6">
              The Solution
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              The Growth Partnership Model
            </h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              We don&apos;t sell courses, software, or complicated funnels. We
              partner with you to{" "}
              <span className="text-white font-medium">
                build, run, and scale
              </span>{" "}
              a complete client acquisition engine.
            </p>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              You only pay for results. And only pay when deals close.
            </p>
            <a
              href={BOOKING_URL}
              className="btn-primary mt-8 inline-flex text-base"
            >
              See If You Qualify
              <ArrowRight className="w-5 h-5" />
            </a>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-4">
              {outcomes.map((item, i) => (
                <div
                  key={i}
                  className="glass-card gradient-border px-6 py-5 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold-400" />
                  </div>
                  <p className="text-white/80 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
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
    { number: "$50M+", label: "Client Revenue Generated", sublabel: "Client Results" },
    { number: "30+", label: "Industries Scaled", sublabel: "Across Australia" },
  ];

  return (
    <section className="section-spacing section-padding border-t border-b border-white/[0.04]">
      <div className="max-container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6">
            Proof Over Promises
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Results That Speak for Themselves
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Consistently generating qualified meetings and predictable revenue pipelines for service-based businesses across Australia.
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
      company: "Maxicare Plus",
      industry: "Healthcare Services",
      challenge:
        "Over-reliant on GP referrals with no predictable intake system. Revenue fluctuated monthly with no way to control or forecast growth.",
      metric: "$91K/mo",
      metricLabel: "Monthly Revenue",
      result: "From $42K to $91K in 60 days",
      timeframe: "60 days",
      highlights: [
        "18 new high-value clients per month",
        "Referral dependency fully eliminated",
        "Full pipeline visibility established",
      ],
    },
    {
      company: "Growth-Loop Consulting",
      industry: "B2B Strategy Consulting",
      challenge:
        "Stuck under a $30K/month ceiling for 18 months. No outbound system — growth came entirely from word of mouth and LinkedIn posts.",
      metric: "171%",
      metricLabel: "Revenue Growth",
      result: "From $28K to $76K in 90 days",
      timeframe: "90 days",
      highlights: [
        "8–12 qualified discovery calls per week",
        "5 new retainer clients closed",
        "Predictable monthly pipeline built",
      ],
    },
    {
      company: "Jessica Ted Coaching",
      industry: "Executive Coaching",
      challenge:
        "Selling $1,200 group programs with no consistent lead flow. High delivery load, low margin, and no system to attract premium 1:1 clients.",
      metric: "$25.5K",
      metricLabel: "First Month Revenue",
      result: "3 × $8,500 clients in month one",
      timeframe: "30 days",
      highlights: [
        "Repositioned to an $8,500 offer",
        "Full calendar within 4 weeks",
        "Zero ad spend required",
      ],
    },
  ];

  return (
    <section className="section-spacing section-padding border-t border-white/[0.04]">
      <div className="max-container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6">
            Client Results
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Real Businesses. Real Numbers.
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            These are not projections. These are documented results from
            partners who were exactly where you are now.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div className="glass-card gradient-border p-7 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <p className="font-bold text-white text-base">{c.company}</p>
                    <p className="text-base text-white/80 mt-0.5">{c.industry}</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 whitespace-nowrap flex-shrink-0 ml-3">
                    {c.timeframe}
                  </span>
                </div>

                {/* Metric */}
                <div className="mb-5 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
                  <p className="text-3xl font-bold gradient-text">{c.metric}</p>
                  <p className="text-base text-white/80 mt-1">{c.metricLabel}</p>
                  <p className="text-xs text-gold-400/60 mt-1 font-medium">{c.result}</p>
                </div>

                {/* Challenge */}
                <p className="text-base text-white/80 leading-relaxed mb-5 flex-1">
                  <span className="text-white/80 font-medium">Before: </span>
                  {c.challenge}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mt-auto pt-4 border-t border-white/[0.05]">
                  {c.highlights.map((h, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="text-base text-white/80">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center mt-10">
          <a href={BOOKING_URL} className="btn-primary text-base">
            See If You Qualify
            <ArrowRight className="w-5 h-5" />
          </a>
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
          Trusted by 350+ businesses across <span className="text-gold-400">30+ industries</span> in Australia
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

/* ─── WHAT WE BUILD ─── */
function WhatWeBuild() {
  const mechanisms = [
    {
      icon: Target,
      title: "Offer & Positioning",
      desc: "We audit your offer, sharpen your positioning, and craft a compelling message that stops your ideal client mid-scroll — before we send a single outreach.",
    },
    {
      icon: Settings,
      title: "Acquisition Engine",
      desc: "We launch LinkedIn, email and outbound campaigns targeting high-intent prospects. Built from scratch, managed daily, fully done for you.",
    },
    {
      icon: Phone,
      title: "Expert Sales Closing",
      desc: "A professional closer handles every qualified call so you stay focused on delivery. We convert meetings into signed deals — you only pay when they close.",
    },
    {
      icon: BarChart3,
      title: "Scale & Optimise",
      desc: "We track results weekly, double down on what's working, and scale the system month over month. Your pipeline gets stronger over time — not weaker.",
    },
  ];

  return (
    <section id="how-it-works" className="section-spacing section-padding">
      <div className="max-container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6">
            Your Revenue Engine
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Everything You Need to Scale.
            <br />
            <span className="text-white/50">Nothing You Don&apos;t.</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {mechanisms.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card gradient-border p-6 md:p-7 h-full group hover:bg-white/[0.05] transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/10 to-accent-blue/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-white/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ─── FLYWHEEL PROCESS ─── */
function Flywheel() {
  const steps = [
    {
      num: "01",
      title: "Transform Your Offer",
      desc: "We reposition your service into a premium, irresistible offer that attracts high-value buyers.",
    },
    {
      num: "02",
      title: "Deploy Acquisition Engine",
      desc: "We build the full outbound architecture — messaging, targeting, sequencing — from the ground up.",
    },
    {
      num: "03",
      title: "Launch High-Intent Conversations",
      desc: "Daily outreach to qualified prospects generates consistent top-of-pipeline activity.",
    },
    {
      num: "04",
      title: "Book Qualified Meetings",
      desc: "Only sales-ready prospects land on your calendar. No tire-kickers. No wasted time.",
    },
    {
      num: "05",
      title: "Expert Sales Closing",
      desc: "Our trained closers handle the calls and convert qualified meetings into signed deals.",
    },
    {
      num: "06",
      title: "Revenue. Scale. Repeat.",
      desc: "Closed revenue feeds the machine. We scale what works. You grow predictably, month over month.",
    },
  ];

  return (
    <section id="how-it-works" className="section-spacing section-padding bg-gradient-to-b from-navy-950 via-navy-900/40 to-navy-950">
      <div className="max-container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6">
            The System
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            How This Becomes a
            <br />
            <span className="gradient-text">Predictable Revenue Engine</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card p-7 h-full border border-white/[0.04] group hover:border-gold-500/20 transition-all duration-500">
                <span className="text-3xl font-bold text-gold-500/20 group-hover:text-gold-500/40 transition-colors duration-500">
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
          animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 16px rgba(212,175,55,0.4)", "0 0 0px rgba(212,175,55,0)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.93 }}
          className="hidden sm:flex absolute left-0 top-[42%] -translate-y-1/2 w-12 h-12 rounded-full bg-navy-900/90 border border-gold-500/35 items-center justify-center text-gold-400 hover:border-gold-500/80 hover:bg-navy-800 transition-colors duration-200 z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          onClick={next}
          animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 24px rgba(212,175,55,0.6)", "0 0 0px rgba(212,175,55,0)"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.93 }}
          className="hidden sm:flex absolute right-0 top-[42%] -translate-y-1/2 w-12 h-12 rounded-full bg-gold-500/15 border border-gold-500/60 items-center justify-center text-gold-400 hover:bg-gold-500/25 hover:border-gold-500 transition-colors duration-200 z-10"
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
                <div className="w-7 h-7 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold text-gold-300">{video.name[0]}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/70">{video.name}</p>
                  <p className="text-[11px] text-white/35">{video.company}</p>
                </div>
                <div className="ml-auto text-gold-400 text-xs flex-shrink-0">★★★★★</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile arrows row — below video */}
      <div className="flex sm:hidden items-center justify-center gap-4 mt-4">
        <motion.button
          onClick={prev}
          animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 16px rgba(212,175,55,0.4)", "0 0 0px rgba(212,175,55,0)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          whileTap={{ scale: 0.93 }}
          className="w-12 h-12 rounded-full bg-navy-900/90 border border-gold-500/35 flex items-center justify-center text-gold-400"
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
                i === current ? "w-6 bg-gold-400" : "w-2 bg-white/20"
              }`}
              aria-label={`Go to video ${i + 1}`}
            />
          ))}
        </div>

        <motion.button
          onClick={next}
          animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 24px rgba(212,175,55,0.6)", "0 0 0px rgba(212,175,55,0)"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          whileTap={{ scale: 0.93 }}
          className="w-12 h-12 rounded-full bg-gold-500/15 border border-gold-500/60 flex items-center justify-center text-gold-400"
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
              i === current ? "w-6 bg-gold-400" : "w-2 bg-white/20 hover:bg-white/40"
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
          <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6">
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
            <div className="flex text-gold-400">★★★★★</div>
            <span className="underline underline-offset-2 decoration-white/20">
              Rated 4.9/5 from 77+ verified reviews on Trustpilot
            </span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── WRITTEN TESTIMONIALS ─── */
function WrittenTestimonials() {
  // TODO: Replace placeholder avatar URLs with actual client photos
  const testimonials = [
    { quote: "$42K to $91K monthly revenue in under 60 days. 18 new high-value clients per month. The ROI was clear within the first fortnight.", name: "Josh", role: "Director, Maxicare Plus", avatar: "https://i.pravatar.cc/150?img=12" },
    { quote: "4 new retainer clients closed in the first 45 days. After being burned by two agencies, the pay-for-results model was the only thing that made sense — and it delivered.", name: "Anthony", role: "Founder, Ripple Clarke", avatar: "https://i.pravatar.cc/150?img=33" },
    { quote: "Discovery call conversion jumped from 28% to over 60%. Prospects arrived already educated on our value — we just had to confirm the fit.", name: "Nate", role: "Owner, Larsky Tach and Feed", avatar: "https://i.pravatar.cc/150?img=53" },
    { quote: "More clients in month one than the previous 6 months combined. Had to pause the system at week 5 just to catch up with demand.", name: "Jessica", role: "Founder, Jessica Teds Coaching", avatar: "https://i.pravatar.cc/150?img=47" },
  ];

  return (
    <section className="section-spacing section-padding border-t border-white/[0.04]">
      <div className="max-container">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6">
            What Clients Say
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Don&apos;t Just Take Our Word for It
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            350+ businesses have been through this. Here&apos;s what they say on the other side.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={(i % 4) * 0.07}>
              <div className="glass-card border border-white/[0.05] p-6 h-full flex flex-col">
                <div className="text-gold-400 text-xs mb-3">{"\u2605\u2605\u2605\u2605\u2605"}</div>
                <p className="text-base text-white/80 leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-base text-white/80">{t.role}</p>
                  </div>
                </div>
              </div>
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
    { label: "Payment model", agency: "Monthly retainer", inhouse: "Salary + super", novada: "Pay on results only" },
    { label: "Results guaranteed", agency: false, inhouse: false, novada: true },
    { label: "Time to first leads", agency: "60–90 days", inhouse: "3–6 months", novada: "7–14 days" },
    { label: "Ad spend required", agency: true, inhouse: true, novada: false },
    { label: "Your time investment", agency: "High", inhouse: "Very high", novada: "Low — we handle it" },
    { label: "Scales with revenue", agency: false, inhouse: false, novada: true },
  ];

  return (
    <section className="section-spacing section-padding border-t border-white/[0.04]">
      <div className="max-container max-w-4xl">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6">
            Why Novada Tech
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            How We Compare
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Every option has a cost. Only one of them guarantees results.
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
              <div className="p-4 text-center bg-gold-500/[0.04] border-l border-gold-500/10">
                <p className="text-sm font-semibold text-gold-400">Novada Tech</p>
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
                <div className="p-4 flex items-center justify-center bg-gold-500/[0.04] border-l border-gold-500/10">
                  {typeof row.novada === "boolean" ? (
                    row.novada ? (
                      <Check className="w-4 h-4 text-gold-400" />
                    ) : (
                      <X className="w-4 h-4 text-red-400/50" />
                    )
                  ) : (
                    <span className="text-xs text-gold-400/80 font-medium text-center">{row.novada}</span>
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

/* ─── WHO THIS IS FOR ─── */
function QualificationSection() {
  const goodFit = [
    "A business owner who wants predictable revenue growth",
    "Selling a high-value product or service ($3K–$50K+)",
    "Ready to scale but lack the system or team to get there",
    "Tired of inconsistent outreach, random leads, and expensive ads",
    "Looking for a partner — not another marketing agency",
    "Wanting results without retainers or long-term contracts",
  ];

  const notFit = [
    "Don't have a deliverable product or service ready",
    "Expect overnight results without following a proven process",
    "Refuse to take calls or engage with qualified prospects",
  ];

  return (
    <section className="section-spacing section-padding bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950">
      <div className="max-container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6">
            Is This Right for You?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            We&apos;re Selective About Who We Partner With
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection direction="left">
            <div className="glass-card gradient-border p-8 h-full">
              <h3 className="text-xl font-semibold text-gold-400 mb-6">
                We&apos;re a Fit If You Are...
              </h3>
              <div className="space-y-4">
                {goodFit.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            <div className="glass-card p-8 h-full border border-white/[0.04]">
              <h3 className="text-xl font-semibold text-white/60 mb-6">
                We Are NOT a Fit If You...
              </h3>
              <div className="space-y-4">
                {notFit.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── RISK REVERSAL ─── */
function RiskReversal() {
  const traditional = [
    "Monthly retainers",
    "Upfront ad budgets",
    "Setup fees",
    "Long-term contracts",
  ];
  const partnership = [
    "You only pay for qualified meetings",
    "You only share revenue on closed deals",
    "You only invest when money comes in",
    "We handle the entire acquisition + sales cycle",
  ];

  return (
    <section className="section-spacing section-padding border-t border-white/[0.04]">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            We Take the Risk.
            <br />
            <span className="gradient-text">You Reap the Rewards.</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection direction="left">
            <div className="p-8 rounded-2xl border border-red-400/10 bg-red-400/[0.02] h-full">
              <p className="text-sm uppercase tracking-[0.2em] text-red-400/60 font-medium mb-6">
                Traditional Agencies Charge
              </p>
              <div className="space-y-4">
                {traditional.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <X className="w-4 h-4 text-red-400/50 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-base text-red-400/65">
                None of that guarantees results.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            <div className="glass-card gradient-border p-8 h-full">
              <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6">
                Our Growth Partnership
              </p>
              <div className="space-y-4">
                {partnership.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-white/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-base text-gold-400/70 font-medium">
                We don&apos;t win unless you win. This is how partnerships
                should work.
              </p>
            </div>
          </AnimatedSection>
        </div>
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
      desc: "We analyze your offer, your market, and your current acquisition process to see if there's a fit.",
    },
    {
      num: "2",
      title: "Receive Your Growth Plan",
      desc: "You'll get a clear strategy showing exactly how we'll build your client acquisition engine and grow your revenue.",
    },
    {
      num: "3",
      title: "We Build. You Scale.",
      desc: "If accepted, we deploy your system, book your meetings, close deals — and you scale with zero risk.",
    },
  ];

  return (
    <section className="py-16 section-padding bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950">
      <div className="max-container max-w-4xl">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6">
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
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center text-navy-950 font-bold text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
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
      q: "Is this too good to be true?",
      a: "We understand the scepticism — most agencies have conditioned business owners to expect promises without delivery. Our model is different by design: we don't charge retainers, we don't run ads on your budget, and we only earn when you do. If it didn't work, we wouldn't eat. That's the only reason we can make this offer.",
    },
    {
      q: "What's the catch?",
      a: "There isn't one — but there is a qualifier. We only work with businesses we genuinely believe we can grow. We turn down more partnerships than we accept. If we don't think we can deliver, we'll tell you on the strategy call rather than take your money.",
    },
    {
      q: "How do you get results without ads?",
      a: "We use precision outbound — targeted LinkedIn and email campaigns that reach high-intent prospects directly. No ad spend, no bidding wars, no wasted budget. We build your pipeline through direct outreach to the exact type of client you want.",
    },
    {
      q: "Do I need to spend on ads?",
      a: "No. Your outreach system is fully done for you. Paid advertising is optional and only recommended if it accelerates an already-working organic system.",
    },
    {
      q: "What if no deals close?",
      a: "Nothing. Our model is entirely performance-based — you don't pay us unless we generate results. That's not marketing language, it's how our agreements are structured. We only earn when you earn.",
    },
    {
      q: "What makes this different from a marketing agency?",
      a: "Agencies charge retainers regardless of results. We only get paid when you get paid. We're a growth partner, not a vendor — and we handle the entire acquisition and closing process, not just the top of funnel.",
    },
    {
      q: "How soon can results start?",
      a: "Most partners see qualified meetings on their calendar within 7–14 days after activation. Revenue timelines depend on your sales cycle length.",
    },
    {
      q: "What kind of businesses do you work with?",
      a: "We work best with service businesses selling $3K–$50K+ offers who are ready to scale but need a proven acquisition system to get there. If that's you, the strategy call will confirm it.",
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
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,162,63,0.1)_0%,_transparent_70%)]" />

            <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6">
                Ready to Scale?
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance max-w-3xl mx-auto">
                The Pipeline Won&apos;t Build Itself.
                <br />
                <span className="gradient-text">
                  Let&apos;s Build It Together.
                </span>
              </h2>
              <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
                One call. No pressure. No hard sell. Just a clear plan showing
                exactly how we&apos;d generate high-value clients for your
                business — on a performance basis.
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
                  <span>No Risk</span>
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
                  <span>Results in 14 Days</span>
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
          <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-4">
            Watch This First
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            See Exactly How We Generate High-Value Clients{" "}
            <span className="gradient-text">for Your Business</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl"
            style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/_fVB00BpPpI?autoplay=1&mute=1"
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
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} transition={{ duration: 0.3, ease: "easeOut" }} className="fixed bottom-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-xl border-t border-white/[0.08] py-3 px-5 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white">Performance-based growth partnership</p>
              <p className="text-xs text-white/50">You only pay when we deliver results.</p>
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
      <ProblemSection />
      <SolutionSection />
      <ProofSection />
      <CaseStudies />
      <TrustBar />
      <Flywheel />
      <Testimonials />
      <WrittenTestimonials />
      <section className="section-padding py-16 border-t border-white/[0.04]">
        <div className="max-container text-center">
          <div className="inline-block w-px h-8 bg-gradient-to-b from-white/20 to-transparent mb-8" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready to build a pipeline like theirs?
          </h2>
          <p className="mt-3 text-lg text-white/80 max-w-sm mx-auto leading-relaxed">
            Every one of those businesses started with a single free strategy session.
          </p>
          <a href={BOOKING_URL} className="btn-primary mt-6 mx-auto inline-flex">
            See If You Qualify
            <ArrowRight className="w-4 h-4" />
          </a>
          <div className="mt-5 flex items-center justify-center gap-5 text-xs text-white/35 flex-wrap">
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-gold-500/60" /> Zero obligation</span>
            <span className="text-white/15">|</span>
            <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-gold-500/60" /> 4.9 on Trustpilot</span>
            <span className="text-white/15">|</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-gold-500/60" /> No retainers</span>
          </div>
        </div>
      </section>
      <ComparisonSection />
      <QualificationSection />
      <RiskReversal />
      <HowToStart />
      <FAQ />
      <FinalCTA />
      <StickyCtaBar />
      <div className="h-16 sm:h-0" />
    </>
  );
}
