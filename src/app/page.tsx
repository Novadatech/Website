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

const BOOKING_URL = "/book-call";

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
              Growth Partnership · Results Only · Limited Spots
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-balance"
          >
            The AI System That Predictably{" "}
            <span className="gradient-text">Generates High-Value Clients</span>{" "}
            For Your Business
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed"
          >
            We build and deploy your entire AI-powered client acquisition
            infrastructure in 7 Days. From lead sourcing to booked meetings.
            You only pay when the system produces real results.
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
              Book Your Growth Strategy Call
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

/* ─── WHY HIGH-TICKET ─── */
function ProblemSection() {
  return (
    <section className="section-spacing section-padding border-t border-white/[0.04]">
      <div className="max-container">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6">
            Why High-Ticket
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight italic text-balance">
            Stop playing the low-ticket game
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
            You don&apos;t need more leads. You need better offers and a system that sells them.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1 — The Low-Ticket Trap */}
          <AnimatedSection delay={0.1}>
            <div className="glass-card border border-white/[0.06] rounded-2xl p-7 h-full flex flex-col">
              {/* Visual: tags */}
              <div className="mb-6 min-h-[100px] flex flex-col justify-end gap-2">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-medium text-red-400">
                    <X className="w-3 h-3" /> 20+ clients/month
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-medium text-red-400">
                    <X className="w-3 h-3" /> Price competition
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-medium text-red-400">
                    <TrendingUp className="w-3 h-3" /> Leads ghost
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-medium text-red-400">
                    <X className="w-3 h-3" /> Hours for dollars
                  </span>
                </div>
              </div>
              {/* Text */}
              <div className="mt-auto">
                <h3 className="text-lg font-bold text-white mb-2">
                  The Low-Ticket Trap
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Coaches and consultants stuck selling $500 offers, needing 20+ clients just to hit $10K. Chasing leads who ghost, competing on price, and burning out.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 2 — The High-Ticket System */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card border border-white/[0.06] rounded-2xl p-7 h-full flex flex-col">
              {/* Visual: bar chart */}
              <div className="mb-6 min-h-[100px] flex items-end justify-center gap-1.5">
                {[35, 45, 55, 50, 65, 75, 90].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                    className="w-6 rounded-t-md bg-emerald-500/80"
                    style={{ maxHeight: `${h}px` }}
                  />
                ))}
                <div className="ml-2 self-start">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-medium text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    $3K-$10K offers
                  </span>
                </div>
              </div>
              {/* Text */}
              <div className="mt-auto">
                <h3 className="text-lg font-bold text-white mb-2">
                  The High-Ticket System
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  One AI system that handles everything — content, sales agents, data analysis, ads, and CRM. Launch $3K-$10K offers in 60 minutes.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 3 — 60-Minute Launch */}
          <AnimatedSection delay={0.3}>
            <div className="glass-card border border-white/[0.06] rounded-2xl p-7 h-full flex flex-col">
              {/* Visual: tags */}
              <div className="mb-6 min-h-[100px] flex flex-col justify-end gap-2">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
                    <Zap className="w-3 h-3" /> 2-5 clients to $10K+
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
                    <Check className="w-3 h-3" /> Premium positioning
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
                    <TrendingUp className="w-3 h-3" /> Full automation
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
                    <Check className="w-3 h-3" /> AI-powered sales
                  </span>
                </div>
              </div>
              {/* Text */}
              <div className="mt-auto">
                <h3 className="text-lg font-bold text-white mb-2">
                  60-Minute Launch
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Built-in leverage and full automation. Need only 2-5 clients to hit $10K+.
                </p>
              </div>
            </div>
          </AnimatedSection>
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
    { number: "350+", label: "Clients Served", sublabel: "And Growing" },
    { number: "$50M+", label: "Client Revenue Generated", sublabel: "Client Results" },
    { number: "30+", label: "Industries Served", sublabel: "Across Australia" },
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

/* ─── WHAT WE BUILD ─── */
function WhatWeBuild() {
  const mechanisms = [
    {
      icon: Target,
      title: "Offer Transformation",
      desc: "We refine and reposition your offer into an irresistible, premium, high-converting solution that commands attention.",
    },
    {
      icon: Settings,
      title: "Acquisition Engine",
      desc: "The full architecture of your outbound system — messaging, targeting, and sequencing, built from scratch.",
    },
    {
      icon: Users,
      title: "Targeted Outreach",
      desc: "Daily outbound conversations to high-value prospects in your ideal market. Completely done for you.",
    },
    {
      icon: Zap,
      title: "Campaign Strategy",
      desc: "Strategic execution built to increase demand, authority, and lead quality across every touchpoint.",
    },
    {
      icon: BarChart3,
      title: "Pipeline Management",
      desc: "Your pipeline becomes a visual, organized revenue machine with full visibility and accountability.",
    },
    {
      icon: Phone,
      title: "Expert Sales Closer",
      desc: "A professional closer handles your calls so you can stay focused on delivering exceptional work.",
    },
    {
      icon: MessageSquare,
      title: "Conversion Frameworks",
      desc: "World-class messaging frameworks that eliminate objections and consistently increase close rates.",
    },
    {
      icon: Layers,
      title: "Full System Deployment",
      desc: "Everything is built, integrated, and deployed — no tech headaches, no moving parts left unmanaged.",
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
            <AnimatedSection key={i} delay={i * 0.08}>
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
    { id: "0qabR5mfAfQ", title: "Client Testimonial" },
    { id: "JXEvONrDaOk", title: "Client Testimonial" },
    { id: "O3HUPQyflH8", title: "Client Testimonial" },
    { id: "w5iJNOADdXU", title: "Client Testimonial" },
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
                    title={`${video.title} ${i + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
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
      a: "You only pay the activation fee and meeting fees — nothing else. The sales risk sits with us. We're incentivized to deliver results because we only earn when you earn.",
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
                Stop Chasing Clients.
                <br />
                <span className="gradient-text">
                  Start Building a Revenue Machine.
                </span>
              </h2>
              <p className="mt-6 text-white/50 text-lg max-w-xl mx-auto">
                Let&apos;s see if you qualify for the Growth Partnership. One
                call. No pressure. No hard sell. Just a conversation to see if
                we&apos;re the right fit.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={BOOKING_URL} className="btn-primary text-base">
                  Book Your Strategy Call
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

/* ─── PAGE ─── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ProofSection />
      <WhatWeBuild />
      <QualificationSection />
      <RiskReversal />
      <Flywheel />
      <Testimonials />
      <HowToStart />
      <FAQ />
      <FinalCTA />
    </>
  );
}
