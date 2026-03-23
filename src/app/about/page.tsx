"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  Shield,
  Zap,
  Heart,
  TrendingUp,
  Users,
  Globe,
  Award,
  Star,
  Quote,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

const BOOKING_URL = "/book-call";

/* ─── HERO ─── */
function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(201,162,63,0.08)_0%,_transparent_60%)]" />

      <div className="relative max-container section-padding pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6"
          >
            About Novada Tech
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight"
          >
            Built for Growth.
            <br />
            <span className="gradient-text">Engineered for Results.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed"
          >
            We&apos;re the growth partnership that builds, runs, and scales
            complete client acquisition systems — so business owners can focus on
            what they do best while revenue grows predictably.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex items-center gap-4"
          >
            <div className="flex text-gold-400 text-sm tracking-wider">
              ★★★★★
            </div>
            <span className="text-sm text-white/40">
              Trusted by 77+ businesses across 30+ industries
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── ORIGIN STORY ─── */
function OriginStory() {
  return (
    <section className="section-spacing section-padding border-t border-white/[0.04]">
      <div className="max-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6">
              Why We Exist
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              We Saw a Broken System.
              <br />
              <span className="text-white/50">So We Built a Better One.</span>
            </h2>
            <div className="mt-8 space-y-5 text-white/50 leading-relaxed">
              <p>
                Most businesses are stuck in the same cycle: hire an agency, pay
                retainers, hope for leads, get inconsistent results, start over.
                The model is broken because agencies have no skin in the game.
                They get paid whether you grow or not.
              </p>
              <p>
                We started Novada Tech with a different premise:{" "}
                <span className="text-white font-medium">
                  what if the people building your acquisition system only got
                  paid when it actually worked?
                </span>
              </p>
              <p>
                That idea became the Growth Partnership — a model where we
                invest our time, expertise, and systems into your business, and
                only win when you win. No retainers. No ad spend required. No
                risk on your side.
              </p>
              <p>
                Based in Melbourne and serving businesses across Australia, we
                combine AI-powered outreach, proven sales frameworks, and
                dedicated expert closers into one seamless system — built to
                generate revenue on autopilot.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              {/* Decorative card stack representing the "system" */}
              <div className="glass-card gradient-border p-10 space-y-8">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold-400/60">
                    Founded
                  </p>
                  <p className="text-2xl font-bold text-white">Melbourne, Australia</p>
                </div>
                <div className="w-full h-px bg-white/[0.06]" />
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold-400/60">
                    Model
                  </p>
                  <p className="text-2xl font-bold text-white">
                    Pay-for-Results Partnership
                  </p>
                </div>
                <div className="w-full h-px bg-white/[0.06]" />
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold-400/60">
                    Focus
                  </p>
                  <p className="text-2xl font-bold text-white">
                    Client Acquisition Systems
                  </p>
                </div>
                <div className="w-full h-px bg-white/[0.06]" />
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold-400/60">
                    Track Record
                  </p>
                  <a
                    href="https://www.trustpilot.com/review/novadatech.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity underline underline-offset-2 decoration-gold-500/30"
                  >
                    4.9★ · 77+ Reviews
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── FOUNDER MESSAGE ─── */
function FounderMessage() {
  return (
    <section className="section-spacing section-padding border-t border-white/[0.04]">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-4">
            Meet the Founder
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            A Message From{" "}
            <span className="gradient-text">Ade Eni</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Photo column */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
                <Image
                  src="/founder.jpg"
                  alt="Ade Eni — Founder & CEO, Novada Tech"
                  width={480}
                  height={600}
                  className="w-full object-cover object-top"
                  unoptimized
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-lg font-bold text-white">Ade Eni</p>
                  <p className="text-sm text-gold-400">Founder & CEO, Novada Tech</p>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -right-4 top-8 glass-card gradient-border px-5 py-4 hidden lg:block">
                <p className="text-2xl font-bold gradient-text">$50M+</p>
                <p className="text-xs text-white/40 mt-0.5">Revenue Generated</p>
              </div>
              <div className="absolute -right-4 bottom-20 glass-card gradient-border px-5 py-4 hidden lg:block">
                <p className="text-2xl font-bold gradient-text">350+</p>
                <p className="text-xs text-white/40 mt-0.5">Businesses Scaled</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Message column */}
          <AnimatedSection direction="right" delay={0.2} className="lg:col-span-3">
            <div className="relative">
              <Quote className="w-10 h-10 text-gold-500/20 mb-6" />

              <div className="space-y-5 text-white/60 leading-relaxed text-base">
                <p>
                  I started Novada Tech after watching too many talented business owners — people with genuinely exceptional products and services — struggle to grow. Not because their offer wasn&apos;t good enough, but because they had no reliable, predictable system to bring in clients.
                </p>
                <p>
                  They were doing everything right. Posting on LinkedIn. Running ads. Attending events. Cold emailing. And still — inconsistent revenue, feast and famine cycles, and an over-reliance on referrals that could dry up overnight.
                </p>
                <p>
                  The problem wasn&apos;t effort. The problem was the model. Traditional agencies charge retainers whether you grow or not. They have no skin in the game. So I asked a different question:{" "}
                  <span className="text-white font-medium">
                    what if the people building your acquisition system only got paid when it actually worked?
                  </span>
                </p>
                <p>
                  That question became Novada Tech. We invest our time, our AI systems, and our expert team into your business — and we only win when you win. No retainers. No guesswork. No risk on your side.
                </p>
                <p>
                  Today, we&apos;ve helped over <span className="text-white font-medium">350 business owners</span> across <span className="text-white font-medium">30+ industries</span> generate more than <span className="text-white font-medium">$50M in revenue</span> using our AI-powered client acquisition system. And we&apos;re just getting started.
                </p>
                <p>
                  If you&apos;re a business owner who is tired of inconsistent leads and ready for a system that works — I&apos;d love to have a conversation.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-white/[0.06] flex items-center gap-5">
                <div>
                  <p className="text-white font-semibold text-lg">Ade Eni</p>
                  <p className="text-sm text-white/40">Founder & CEO, Novada Tech</p>
                  <div className="flex text-gold-400 text-sm mt-1">★★★★★</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── TIMELINE / JOURNEY ─── */
function Journey() {
  const milestones = [
    {
      period: "The Problem",
      title: "We Saw Businesses Bleeding Money on Broken Marketing",
      desc: "Agencies charging retainers with zero accountability. Business owners stuck doing outreach manually. Brilliant products with empty pipelines. The gap between potential and revenue was a system problem — and nobody was solving it.",
    },
    {
      period: "The Decision",
      title: "We Decided to Put Our Money Where Our Mouth Is",
      desc: "Instead of charging fees and hoping for results, we built a model where our revenue is directly tied to client outcomes. If we don't deliver, we don't eat. That changes everything about how we operate.",
    },
    {
      period: "The Build",
      title: "We Engineered a Complete Acquisition System",
      desc: "We combined AI-powered outreach, proven conversion frameworks, expert sales closers, and pipeline management into a single, turnkey system — purpose-built to generate predictable revenue for our partners.",
    },
    {
      period: "Today",
      title: "77+ Businesses Trust Us to Drive Their Growth",
      desc: "With a 4.9-star rating across 77+ reviews, partnerships spanning 30+ industries, and measurable revenue results for every partner, Novada Tech has become the growth engine Australian businesses rely on.",
    },
  ];

  return (
    <section className="section-spacing section-padding bg-gradient-to-b from-navy-950 via-navy-900/40 to-navy-950">
      <div className="max-container max-w-4xl">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6">
            The Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            How We Got Here
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/40 via-gold-500/10 to-transparent" />

          <div className="space-y-12">
            {milestones.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="flex gap-6 md:gap-10 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 border border-gold-500/20 flex items-center justify-center group-hover:border-gold-500/40 group-hover:from-gold-500/30 transition-all duration-500">
                      <span className="text-gold-400 font-bold text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="pb-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold-400/60 mb-2">
                      {item.period}
                    </p>
                    <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-white/45 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PRINCIPLES ─── */
function Principles() {
  const principles = [
    {
      icon: Shield,
      title: "Aligned Incentives",
      desc: "We only get paid when you get paid. Our model eliminates the conflict of interest that plagues the agency world.",
    },
    {
      icon: Target,
      title: "Systems Over Hustle",
      desc: "We don't believe in random acts of marketing. We build repeatable, scalable systems that generate revenue predictably.",
    },
    {
      icon: Zap,
      title: "Speed to Revenue",
      desc: "Most partners see qualified meetings within 14 days. We move fast because results matter more than process documentation.",
    },
    {
      icon: Heart,
      title: "Radical Accountability",
      desc: "No hiding behind vanity metrics. We track closed revenue, not impressions. Every dollar is visible, every result is measurable.",
    },
    {
      icon: TrendingUp,
      title: "Compound Growth",
      desc: "Our flywheel is designed to compound. What works gets scaled. What doesn't gets killed. Your revenue grows month over month.",
    },
    {
      icon: Users,
      title: "Partnership, Not Vendor",
      desc: "We don't treat you like a client number. We operate as an extension of your team — invested in your outcomes as if they were our own.",
    },
  ];

  return (
    <section className="section-spacing section-padding border-t border-white/[0.04]">
      <div className="max-container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6">
            What We Stand For
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            The Principles Behind the Partnership
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card gradient-border p-8 h-full group hover:bg-white/[0.04] transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/10 to-accent-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
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

/* ─── TRUST STATS ─── */
function TrustStats() {
  const stats = [
    { icon: Star, number: "4.9★", label: "Trustpilot Rating", href: "https://www.trustpilot.com/review/novadatech.com.au" },
    { icon: Award, number: "77+", label: "Verified Reviews", href: "https://www.trustpilot.com/review/novadatech.com.au" },
    { icon: Globe, number: "30+", label: "Industries Served" },
    { icon: TrendingUp, number: "35%", label: "Avg. Revenue Increase" },
  ];

  return (
    <section className="section-spacing section-padding bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950">
      <div className="max-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            The Numbers Behind the Trust
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              {stat.href ? (
                <a href={stat.href} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="glass-card gradient-border p-8 text-center group hover:bg-white/[0.05] transition-colors duration-500">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <p className="text-4xl md:text-5xl font-bold gradient-text">
                      {stat.number}
                    </p>
                    <p className="mt-2 text-white/50 text-sm font-medium underline underline-offset-2 decoration-white/20">
                      {stat.label} ↗
                    </p>
                  </div>
                </a>
              ) : (
                <div className="glass-card gradient-border p-8 text-center group hover:bg-white/[0.05] transition-colors duration-500">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <p className="text-4xl md:text-5xl font-bold gradient-text">
                    {stat.number}
                  </p>
                  <p className="mt-2 text-white/50 text-sm font-medium">
                    {stat.label}
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

/* ─── WHAT MAKES US DIFFERENT ─── */
function WhatMakesUsDifferent() {
  return (
    <section className="section-spacing section-padding border-t border-white/[0.04]">
      <div className="max-container max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500/80 font-medium mb-6">
              Why Clients Trust Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              We Don&apos;t Just Promise Growth.
              <br />
              <span className="text-white/50">We Stake Our Revenue on It.</span>
            </h2>
            <div className="mt-8 space-y-5 text-white/50 leading-relaxed">
              <p>
                Every growth partner talks about results. We&apos;re the ones
                who only get paid when they happen. Our pay-for-results model
                means we invest our own resources — time, team, technology —
                before you see a bill.
              </p>
              <p>
                That&apos;s not a sales pitch. It&apos;s our business model.
                And it works because we&apos;ve spent years perfecting the
                systems, frameworks, and team that make predictable client
                acquisition possible.
              </p>
              <p>
                When your growth is our growth, the alignment is absolute. No
                wasted budget. No vanity metrics. Just revenue.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-5">
              {[
                {
                  label: "Revenue Alignment",
                  desc: "We only earn when you earn. Our incentives are perfectly aligned with yours.",
                },
                {
                  label: "Proven Systems",
                  desc: "Every element of our acquisition engine is battle-tested across 30+ industries.",
                },
                {
                  label: "Expert Team",
                  desc: "From AI-powered outreach to professional closers — every role is filled by a specialist.",
                },
                {
                  label: "Speed to Results",
                  desc: "Most partners have qualified meetings on their calendar within 14 days of activation.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="glass-card gradient-border p-6 group hover:bg-white/[0.04] transition-all duration-500"
                >
                  <h4 className="text-white font-semibold">{item.label}</h4>
                  <p className="mt-1 text-sm text-white/40">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT CTA ─── */
function AboutCTA() {
  return (
    <section className="section-spacing section-padding">
      <div className="max-container">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,162,63,0.1)_0%,_transparent_70%)]" />

            <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance max-w-3xl mx-auto">
                Stop Watching.
                <br />
                <span className="gradient-text">Start Building.</span>
              </h2>
              <p className="mt-6 text-white/50 text-lg max-w-xl mx-auto">
                If you&apos;re ready for predictable revenue growth without the
                risk of retainers, let&apos;s talk. One call is all it takes to
                see if we&apos;re the right fit.
              </p>
              <div className="mt-10">
                <a href={BOOKING_URL} className="btn-primary text-base">
                  Book Your Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <p className="mt-4 text-sm text-white/30">
                No pressure. No hard sell. Just a conversation.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OriginStory />
      <FounderMessage />
      <Journey />
      <Principles />
      <TrustStats />
      <WhatMakesUsDifferent />
      <AboutCTA />
    </>
  );
}
