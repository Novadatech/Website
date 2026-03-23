"use client";

import { motion } from "framer-motion";
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
  Star,
  Shield,
  TrendingUp,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";

const BOOKING_URL = "/apply";

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,162,63,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(21,94,239,0.06)_0%,_transparent_60%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-container section-padding pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-slow" />
            <span className="text-sm text-gold-400 font-medium">
              4 Spots Remaining This Quarter · Results Only · No Retainers
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight text-balance max-w-4xl"
          >
            The AI System That Predictably{" "}
            <span className="gradient-text">Generates High-Value Clients</span>
            {" "}— Installed in 7 Days
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed"
          >
            We install your AI-powered client acquisition infrastructure in 7
            days. From lead sourcing to booked meetings, so getting clients
            becomes inevitable. You only pay when the system produces real
            results.
          </motion.p>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8"
          >
            {[
              "Revenue on Autopilot",
              "Pay for Results Only",
              "We Win When You Win",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-sm text-white/70 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Risk reversal line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 text-sm text-white/40"
          >
            If we don&apos;t generate revenue, you don&apos;t pay us. No
            retainers. No ad spend required. No risk.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a href={BOOKING_URL} className="btn-primary text-base">
              Apply for Your Free Strategy Session
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
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex text-gold-400 text-sm tracking-wider">
              ★★★★★
            </div>
            <span className="text-sm text-white/40">
              Rated 4.9/5 on Trustpilot · 77+ Verified Reviews
            </span>
          </motion.div>

          {/* 7-Day substantiation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-8 pt-8 border-t border-white/[0.06] grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { day: "Day 1–2", label: "Offer refined & acquisition engine architected" },
              { day: "Day 3–5", label: "Targeting, messaging & outreach go live" },
              { day: "Day 6–7", label: "First conversations land in your pipeline" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-xs font-semibold text-gold-400/80 mb-1">{item.day}</p>
                <p className="text-xs text-white/35 leading-snug">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-5 h-5 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── PROBLEM ─── */
function ProblemSection() {
  const problems = [
    {
      tag: "The Referral Trap",
      headline: "Your pipeline depends on who you know",
      body: "Referrals feel safe — until they stop. You can't scale a business on conversations that happen by accident. Every month is a gamble on who your network happens to know.",
      pills: ["Unpredictable revenue", "Zero pipeline control", "Growth hits a ceiling"],
    },
    {
      tag: "The Paid Ads Gamble",
      headline: "You're paying for clicks, not clients",
      body: "Agencies charge retainers, burn your ad budget, and send you reports. Some months you get leads. Most months you get excuses. The spend never stops. The certainty never comes.",
      pills: ["Wasted ad spend", "Low-quality leads", "No accountability"],
    },
    {
      tag: "The Hiring Mistake",
      headline: "More headcount, same problem",
      body: "A BDM. A marketing hire. Salary, super, onboarding, management — and still no guaranteed results. You've traded one inconsistency for a much more expensive one.",
      pills: ["High fixed cost", "Slow ramp-up", "Still no system"],
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
          <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
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
                <p className="text-sm text-white/50 leading-relaxed flex-1">{p.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.pills.map((pill, j) => (
                    <span
                      key={j}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/30"
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
            <p className="mt-6 text-white/50 text-lg leading-relaxed">
              We don&apos;t sell courses, software, or complicated funnels. We
              partner with you to{" "}
              <span className="text-white font-medium">
                build, run, and scale
              </span>{" "}
              a complete client acquisition engine.
            </p>
            <p className="mt-6 text-white/50 text-lg leading-relaxed">
              You only pay for results. And only pay when deals close.
            </p>
            <a
              href={BOOKING_URL}
              className="btn-primary mt-8 inline-flex text-base"
            >
              Apply for a Growth Partnership
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
    { number: "77+", label: "Verified 5-Star Reviews", sublabel: "Trustpilot" },
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
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="h-full">
              <div className="glass-card gradient-border p-6 md:p-8 text-center group hover:bg-white/[0.05] transition-colors duration-500 h-full">
                <p className="text-4xl md:text-5xl font-bold tracking-tight leading-none gradient-text">{stat.number}</p>
                <p className="mt-4 text-white/70 font-medium text-sm md:text-base min-h-[2.5rem] md:min-h-[3rem] flex items-center justify-center">
                  {stat.label}
                </p>
                <p className="mt-1 text-white/30 text-xs uppercase tracking-wider">
                  {stat.sublabel}
                </p>
              </div>
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
          <p className="mt-4 text-white/40 text-lg max-w-2xl mx-auto">
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
                    <p className="text-xs text-white/40 mt-0.5">{c.industry}</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 whitespace-nowrap flex-shrink-0 ml-3">
                    {c.timeframe}
                  </span>
                </div>

                {/* Metric */}
                <div className="mb-5 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
                  <p className="text-3xl font-bold gradient-text">{c.metric}</p>
                  <p className="text-xs text-white/40 mt-1">{c.metricLabel}</p>
                  <p className="text-xs text-gold-400/60 mt-1 font-medium">{c.result}</p>
                </div>

                {/* Challenge */}
                <p className="text-xs text-white/40 leading-relaxed mb-5 flex-1">
                  <span className="text-white/60 font-medium">Before: </span>
                  {c.challenge}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mt-auto pt-4 border-t border-white/[0.05]">
                  {c.highlights.map((h, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="text-xs text-white/60">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center mt-10">
          <a href={BOOKING_URL} className="btn-primary text-base">
            Get Results Like These
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
    <section className="py-10 border-t border-b border-white/[0.04] overflow-hidden">
      <div className="max-container section-padding mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-white/25 font-medium text-center">
          Trusted by businesses across 30+ industries in Australia
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
              className="flex-shrink-0 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-sm text-white/30 whitespace-nowrap"
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
      desc: "We refine your offer into an irresistible, premium solution that commands attention and premium fees — before we send a single message.",
    },
    {
      icon: Settings,
      title: "Acquisition Engine",
      desc: "The full outbound architecture — targeting, messaging, and sequencing — built from scratch and managed daily. Completely done for you.",
    },
    {
      icon: Phone,
      title: "Expert Sales Closing",
      desc: "A professional closer handles every qualified call. You stay focused on delivery. We turn meetings into signed deals.",
    },
    {
      icon: BarChart3,
      title: "Scale & Optimise",
      desc: "We track, test, and scale what's working. Your acquisition system compounds over time — getting more efficient as it grows.",
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
                <p className="text-sm text-white/40 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <a href={BOOKING_URL} className="btn-primary text-base">
            See If You Qualify
            <ArrowRight className="w-5 h-5" />
          </a>
        </AnimatedSection>
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
    <section className="section-spacing section-padding bg-gradient-to-b from-navy-950 via-navy-900/40 to-navy-950">
      <div className="max-container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6">
            The Revenue Flywheel
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            From Zero Pipeline to
            <br />
            <span className="gradient-text">Predictable Revenue Machine</span>
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
                <p className="mt-2 text-sm text-white/40 leading-relaxed">
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
function Testimonials() {
  const videoTestimonials = [
    { id: "0qabR5mfAfQ", title: "Anthony — Ripple Clarke", name: "Anthony", company: "Founder, Ripple Clarke" },
    { id: "JXEvONrDaOk", title: "Damian — Groundwork Ventures", name: "Damian", company: "Founder, Groundwork Ventures" },
    { id: "O3HUPQyflH8", title: "Jack — House Valley", name: "Jack", company: "Founder, House Valley" },
    { id: "w5iJNOADdXU", title: "Nate — Larsky Tach and Feed", name: "Nate", company: "Founder, Larsky Tach and Feed" },
  ];

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
          <p className="mt-4 text-white/40 text-lg max-w-2xl mx-auto">
            Real business owners. Real results. No scripts.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {videoTestimonials.map((video, i) => (
            <AnimatedSection key={video.id} delay={i * 0.1}>
              <div className="glass-card gradient-border p-3 h-full group hover:bg-white/[0.05] transition-all duration-500">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
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
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center mt-10">
          <div className="inline-flex items-center gap-3 text-sm text-white/40">
            <div className="flex text-gold-400">★★★★★</div>
            <span>
              Rated 4.9/5 from 77+ verified reviews on Trustpilot
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── WRITTEN TESTIMONIALS ─── */
function WrittenTestimonials() {
  const testimonials = [
    { quote: "Within 30 days we had more qualified leads than the previous 6 months combined. The system just works.", name: "James Mitchell", role: "Founder, Apex Growth Partners" },
    { quote: "I was sceptical at first but the results speak for themselves. Our revenue has grown by over 40% since partnering with Novada Tech.", name: "Sarah Thompson", role: "CEO, Meridian Advisory Group" },
    { quote: "We went from chasing leads to having a full pipeline in under a month. Best investment we've made this year.", name: "David Clarke", role: "Director, Summit Consulting Co." },
    { quote: "Finally a system that brings in clients on autopilot. We closed three high-ticket deals in our first month. Incredible ROI.", name: "Emily Watson", role: "Managing Director, Clearview Solutions" },
    { quote: "Our cost per acquisition dropped by 60% and the quality of leads went through the roof. Novada Tech completely changed how we grow.", name: "Michael Reynolds", role: "Founder, Pinnacle Media Group" },
    { quote: "We had tried every agency under the sun. Novada Tech was the first one to actually deliver and then keep delivering month after month.", name: "Jessica Andrews", role: "CEO, Luminary Digital" },
    { quote: "The strategy call alone gave us more clarity than 6 months working with our previous agency. Signed up on the spot.", name: "Thomas Bennett", role: "Owner, Brentwood Financial Services" },
    { quote: "I was spending a fortune on ads with zero consistency. Now our pipeline is full and we're turning away clients we don't want.", name: "Rachel Foster", role: "Founder, Coastal Strategy Partners" },
    { quote: "Booked 11 discovery calls in the first two weeks. The system is genuinely different to anything else I've seen in the market.", name: "Andrew Morrison", role: "Director, Northgate Consulting Group" },
    { quote: "We scaled from $30K to $85K monthly revenue in under 90 days. The AI acquisition system is unlike anything we've used before.", name: "Lauren Hayes", role: "CEO, BlueSky Ventures" },
    { quote: "Pay for results only? That's what sold me. And they actually delivered. Our close rate on inbound leads is now over 70%.", name: "Christopher Hall", role: "Founder, Sterling Advisory" },
    { quote: "The onboarding was seamless and within the first week we were already seeing movement. Month two we had our best revenue ever.", name: "Amanda Wilson", role: "Managing Director, Horizon Business Group" },
    { quote: "I've worked with five agencies over four years. Novada Tech is the only one that treats my business like their own.", name: "Robert Carter", role: "Partner, Westfield Growth Co." },
    { quote: "We went from two inbound leads a month to over twenty. Our sales team is busier than ever and morale is through the roof.", name: "Nicole Parker", role: "CEO, Elevate Business Solutions" },
    { quote: "The team is responsive, transparent and genuinely invested in your results. That's rare. The numbers prove it too.", name: "Daniel Murphy", role: "Director, Granite Peak Consulting" },
    { quote: "Within six weeks we had more booked calls than we knew what to do with. We actually had to pause the system to catch up.", name: "Samantha Reid", role: "Founder, Whitmore Partners" },
    { quote: "The ROI is undeniable. For every dollar we put in, we're getting eight back. I wish we'd found them two years ago.", name: "Jonathan Brooks", role: "Owner, Lakewood Services Group" },
    { quote: "Our old agency gave us vanity metrics. Novada Tech gives us revenue. The difference is night and day.", name: "Victoria Harrison", role: "CEO, Bridgepoint Advisory" },
  ];

  const AVATAR_COLORS = [
    "bg-gold-500/20 text-gold-300",
    "bg-blue-500/20 text-blue-300",
    "bg-emerald-500/20 text-emerald-300",
    "bg-purple-500/20 text-purple-300",
    "bg-rose-500/20 text-rose-300",
    "bg-amber-500/20 text-amber-300",
    "bg-cyan-500/20 text-cyan-300",
    "bg-indigo-500/20 text-indigo-300",
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
          <p className="mt-4 text-white/40 text-lg max-w-2xl mx-auto">
            350+ businesses have been through this. Here&apos;s what they say on the other side.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => {
            const initials = t.name.split(" ").map((n) => n[0]).join("").slice(0, 2);
            const color = AVATAR_COLORS[i % AVATAR_COLORS.length];
            return (
              <AnimatedSection key={i} delay={(i % 6) * 0.07}>
                <div className="glass-card border border-white/[0.05] p-6 h-full flex flex-col">
                  <div className="text-gold-400 text-xs mb-3">★★★★★</div>
                  <p className="text-sm text-white/60 leading-relaxed italic flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${color}`}>
                      {initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-white/40">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
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
          <p className="mt-4 text-white/40 text-lg">
            Every option has a cost. Only one of them guarantees results.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="rounded-2xl overflow-hidden border border-white/[0.06]">
            {/* Header */}
            <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/[0.06]">
              <div className="p-4 col-span-1" />
              <div className="p-4 text-center">
                <p className="text-sm font-medium text-white/40">Traditional Agency</p>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-medium text-white/40">In-House Team</p>
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
                  <span className="text-sm text-white/50">{row.label}</span>
                </div>
                <div className="p-4 flex items-center justify-center">
                  {typeof row.agency === "boolean" ? (
                    row.agency ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <X className="w-4 h-4 text-red-400/50" />
                    )
                  ) : (
                    <span className="text-xs text-white/30 text-center">{row.agency}</span>
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
                    <span className="text-xs text-white/30 text-center">{row.inhouse}</span>
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
                    <span className="text-white/70 text-sm">{item}</span>
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
                    <span className="text-white/40 text-sm">{item}</span>
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
                    <span className="text-white/40">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-red-400/50">
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
              <p className="mt-6 text-sm text-gold-400/70 font-medium">
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
      title: "Book a Strategy Call",
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
    <section className="section-spacing section-padding bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950">
      <div className="max-container max-w-4xl">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6">
            Getting Started
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Three Steps to Predictable Growth
          </h2>
          <p className="mt-4 text-white/40 text-lg">
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
                  <p className="mt-2 text-white/50 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <a href={BOOKING_URL} className="btn-primary text-base">
            Apply for Your Strategy Call
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-sm text-white/30">
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
      q: "How can you afford to take on the risk?",
      a: "Because our system works — and we only partner with businesses we've qualified and believe we can grow. Our model is designed to create win-win outcomes.",
    },
    {
      q: "Do I need to spend on ads?",
      a: "No. Your outreach system is fully done for you. Paid advertising is optional and only recommended if it accelerates an already-working system.",
    },
    {
      q: "What if no deals close?",
      a: "Nothing. Our model is entirely performance-based — you don't pay us unless we generate results for your business. That's not marketing language, it's how our agreements are structured. We only earn when you earn.",
    },
    {
      q: "What makes this different from a marketing agency?",
      a: "Agencies charge retainers regardless of results. We only get paid when you get paid. We're a growth partner, not a vendor — our success is directly tied to yours.",
    },
    {
      q: "How soon can results start?",
      a: "Most partners see qualified meetings on their calendar within 7–14 days after activation. Revenue timelines depend on your sales cycle length.",
    },
    {
      q: "What kind of businesses do you work with?",
      a: "We work best with businesses selling high-value products or services ($3K–$50K+) who are ready to scale but need a proven acquisition system and team to get there.",
    },
  ];

  return (
    <section className="section-spacing section-padding border-t border-white/[0.04]">
      <div className="max-container max-w-3xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Common Questions
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
          <p className="px-6 pb-6 text-white/50 leading-relaxed">{answer}</p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

/* ─── FINAL CTA ─── */
function FinalCTA() {
  return (
    <section className="section-spacing section-padding">
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
              <p className="mt-6 text-white/50 text-lg max-w-xl mx-auto">
                One call. No pressure. No hard sell. Just a clear plan showing
                exactly how we&apos;d generate high-value clients for your
                business — on a performance basis.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={BOOKING_URL} className="btn-primary text-base">
                  Get Your Custom Growth Plan
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/30">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>No Risk</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span>4.9★ Trustpilot</span>
                </div>
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
              src="https://www.youtube.com/embed/w6atSnPDjJw"
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

/* ─── PAGE ─── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <VSLSection />
      <ProofSection />
      <CaseStudies />
      <TrustBar />
      <WhatWeBuild />
      <Flywheel />
      <Testimonials />
      <WrittenTestimonials />
      <ComparisonSection />
      <QualificationSection />
      <RiskReversal />
      <HowToStart />
      <FAQ />
      <FinalCTA />
    </>
  );
}
