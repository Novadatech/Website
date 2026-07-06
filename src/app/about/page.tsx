"use client";

/* About — Morningside design language (see src/components/ms.ts).
 * Copy unchanged from the coherence pass; visual system swapped. */

import { motion } from "framer-motion";
import {
  ChevronRight,
  Target,
  Shield,
  Zap,
  Heart,
  TrendingUp,
  Users,
  Globe,
  Award,
  Star,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import {
  GRAD_TEXT,
  BTN_WHITE,
  MS_CARD,
  HERO_WASH,
  GLOW_BOTTOM,
} from "@/components/ms";

const BOOKING_URL = "/book-call";

/* ─── HERO ─── */
function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className={HERO_WASH} />

      <div className="relative max-container section-padding pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-supply text-xs uppercase tracking-[0.25em] text-[#0CC481] mb-6"
          >
            About Novada Tech
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={`text-4xl sm:text-5xl md:text-7xl font-light tracking-tight leading-[1.1] pb-1 ${GRAD_TEXT}`}
          >
            Built for growth.
            <br />
            Engineered for results.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-base md:text-xl font-light text-[#EDECE4]/80 max-w-2xl leading-relaxed"
          >
            We&apos;re the AI consulting &amp; automation agency that builds,
            runs, and scales the systems behind predictable revenue and lean
            operations — so business owners can focus on what they do best.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex items-center gap-4"
          >
            <div className="flex text-[#0CC481] text-sm tracking-wider">
              ★★★★★
            </div>
            <span className="font-supply text-xs uppercase tracking-[0.15em] text-[#EDECE4]/50">
              Trusted by 350+ businesses across 30+ industries
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
    <section className="section-spacing section-padding">
      <div className="max-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-5">
              Why We Exist
            </p>
            <h2 className={`inline-block text-3xl md:text-5xl font-light tracking-tight leading-tight pb-1 ${GRAD_TEXT}`}>
              We saw a broken system. So we built a better one.
            </h2>
            <div className="mt-8 space-y-5 font-light text-[#EDECE4]/75 leading-relaxed">
              <p>
                Most businesses are stuck in the same cycle: hire an agency, pay
                retainers, hope for results, start over. The model is broken
                because agencies sell activity, not outcomes — and the moment
                you stop paying, everything they built disappears with them.
              </p>
              <p>
                We started Novada Tech with a different premise:{" "}
                <span className="text-[#EDECE4]">
                  what if you stopped renting campaigns and started owning
                  systems — with the results guaranteed in writing?
                </span>
              </p>
              <p>
                That premise became our Growth Infrastructure — a system that
                books 15+ qualified sales meetings every month, backed by a
                90-day money-back guarantee. And as our partners grew, they
                asked us to point the same engineering at the other side of
                their businesses: the manual work eating their margins. That
                became Operations Infrastructure and our AI consulting practice.
              </p>
              <p>
                Based in Melbourne and serving businesses across Australia, we
                now build AI systems across the whole business — authority and
                outreach engines that fill calendars, and operations systems
                that cut costs — installed in your business, run by us, owned
                by you.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              <div className={`${MS_CARD} p-10 space-y-8`}>
                <div className="space-y-3">
                  <p className="font-supply text-[10px] uppercase tracking-[0.2em] text-[#0CC481]/70">
                    Founded
                  </p>
                  <p className="text-2xl font-light text-[#EDECE4]">Melbourne, Australia</p>
                </div>
                <div className="w-full h-px bg-[#EDECE4]/[0.08]" />
                <div className="space-y-3">
                  <p className="font-supply text-[10px] uppercase tracking-[0.2em] text-[#0CC481]/70">
                    Model
                  </p>
                  <p className="text-2xl font-light text-[#EDECE4]">
                    Guarantee-Backed Systems
                  </p>
                </div>
                <div className="w-full h-px bg-[#EDECE4]/[0.08]" />
                <div className="space-y-3">
                  <p className="font-supply text-[10px] uppercase tracking-[0.2em] text-[#0CC481]/70">
                    Focus
                  </p>
                  <p className="text-2xl font-light text-[#EDECE4]">
                    Growth, Operations &amp; AI Systems
                  </p>
                </div>
                <div className="w-full h-px bg-[#EDECE4]/[0.08]" />
                <div className="space-y-3">
                  <p className="font-supply text-[10px] uppercase tracking-[0.2em] text-[#0CC481]/70">
                    Track Record
                  </p>
                  <a
                    href="https://www.trustpilot.com/review/novadatech.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl font-light ${GRAD_TEXT} hover:opacity-80 transition-opacity`}
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
    <section className="section-spacing section-padding">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-14">
          <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-4">
            Meet the Founder
          </p>
          <h2 className={`inline-block text-3xl md:text-5xl font-light tracking-tight pb-1 ${GRAD_TEXT}`}>
            A message from Ade Eni
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Photo column */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden border border-[#EDECE4]/10 shadow-2xl">
                <Image
                  src="/founder.jpg"
                  alt="Ade Eni — Founder & CEO, Novada Tech"
                  width={480}
                  height={600}
                  className="w-full object-cover object-top"
                  unoptimized
                />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-lg font-normal text-white">Ade Eni</p>
                  <p className="font-supply text-[10px] uppercase tracking-[0.15em] text-[#0CC481]">Founder &amp; CEO, Novada Tech</p>
                </div>
              </div>

              {/* Floating stat card */}
              <div className={`absolute -right-4 top-8 ${MS_CARD} px-5 py-4 hidden lg:block`}>
                <p className={`text-2xl font-light ${GRAD_TEXT}`}>$45.7M+</p>
                <p className="font-supply text-[9px] uppercase tracking-[0.15em] text-[#EDECE4]/50 mt-1">Revenue Generated</p>
              </div>
              <div className={`absolute -right-4 bottom-20 ${MS_CARD} px-5 py-4 hidden lg:block`}>
                <p className={`text-2xl font-light ${GRAD_TEXT}`}>350+</p>
                <p className="font-supply text-[9px] uppercase tracking-[0.15em] text-[#EDECE4]/50 mt-1">Businesses Scaled</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Message column */}
          <AnimatedSection direction="right" delay={0.2} className="lg:col-span-3">
            <div className="relative">
              <div className="space-y-5 font-light text-[#EDECE4]/75 leading-relaxed text-base">
                <p>
                  I started Novada Tech after watching too many talented business owners — people with genuinely exceptional products and services — struggle to grow. Not because their offer wasn&apos;t good enough, but because they had no reliable, predictable system to bring in clients.
                </p>
                <p>
                  They were doing everything right. Posting on LinkedIn. Running ads. Attending events. Cold emailing. And still — inconsistent revenue, feast and famine cycles, and an over-reliance on referrals that could dry up overnight.
                </p>
                <p>
                  The problem wasn&apos;t effort. The problem was the model. Traditional agencies sell campaigns you rent — the moment you stop paying, the results stop. So I asked a different question:{" "}
                  <span className="text-[#EDECE4]">
                    what if a business could own the system that grows it — with the results guaranteed in writing?
                  </span>
                </p>
                <p>
                  That question became Novada Tech. It started with Growth Infrastructure — a guarantee-backed system that fills calendars with qualified sales meetings. Then our partners asked us to point the same engineering at their operations: the quoting, admin, and manual work quietly eating their margins. Today we build AI systems across both sides of the business.
                </p>
                <p>
                  So far, we&apos;ve helped over <span className="text-[#EDECE4]">350 business owners</span> across <span className="text-[#EDECE4]">30+ industries</span> generate more than <span className="text-[#EDECE4]">$45.7M in revenue</span> — and we&apos;re just getting started.
                </p>
                <p>
                  If you&apos;re a business owner tired of inconsistent revenue or operations that can&apos;t scale — I&apos;d love to have a conversation.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-[#EDECE4]/[0.08] flex items-center gap-5">
                <div>
                  <p className="text-[#EDECE4] text-lg">Ade Eni</p>
                  <p className="font-supply text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/50">Founder &amp; CEO, Novada Tech</p>
                  <div className="flex text-[#0CC481] text-sm mt-1">★★★★★</div>
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
      desc: "Instead of charging fees and hoping for results, we built systems with the outcome guaranteed in writing — and made sure every system we install stays owned by the client, not held hostage by us.",
    },
    {
      period: "The Build",
      title: "We Engineered Systems for Both Sides of the Business",
      desc: "Growth Infrastructure — authority content, targeted outreach, and pre-qualified bookings that fill calendars. Then Operations Infrastructure — custom AI that takes over quoting, admin, documents, and logistics. One method behind both: diagnose, install, run and scale.",
    },
    {
      period: "Today",
      title: "350+ Businesses Trust Us With Their Systems",
      desc: "With a 4.9-star rating across 77+ verified reviews and partnerships spanning 30+ industries, Novada Tech has become the AI systems partner Australian businesses rely on — for revenue, for operations, and for knowing where AI pays off first.",
    },
  ];

  return (
    <section className="section-spacing section-padding">
      <div className="max-container max-w-4xl">
        <AnimatedSection className="text-center mb-16">
          <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-5">
            The Journey
          </p>
          <h2 className={`inline-block text-3xl md:text-5xl font-light tracking-tight pb-1 ${GRAD_TEXT}`}>
            How we got here
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#0CC481]/40 via-[#0CC481]/10 to-transparent" />

          <div className="space-y-12">
            {milestones.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="flex gap-6 md:gap-10 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl border border-[#0CC481]/30 bg-[#080808] flex items-center justify-center group-hover:border-[#0CC481]/60 transition-all duration-500">
                      <span className="font-supply text-[#0CC481] text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="pb-2">
                    <p className="font-supply text-[10px] uppercase tracking-[0.2em] text-[#0CC481]/70 mb-2">
                      {item.period}
                    </p>
                    <h3 className="text-xl md:text-2xl font-light text-[#EDECE4] leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base font-light text-[#EDECE4]/65 leading-relaxed">
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
      title: "Guarantees In Writing",
      desc: "Our flagship system is backed by a written performance guarantee, and every build is scoped with its projected return shown up front. Accountability isn't a slogan — it's in the agreement.",
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
    <section className="section-spacing section-padding">
      <div className="max-container">
        <AnimatedSection className="text-center mb-16">
          <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-5">
            What We Stand For
          </p>
          <h2 className={`inline-block text-3xl md:text-5xl font-light tracking-tight pb-1 ${GRAD_TEXT}`}>
            The principles behind the partnership
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className={`${MS_CARD} p-8 h-full hover:border-[#EDECE4]/[0.14] transition-colors`}>
                <item.icon className="w-6 h-6 text-[#0CC481] mb-5" strokeWidth={1.4} />
                <h3 className="text-lg font-normal text-[#EDECE4] mb-3">
                  {item.title}
                </h3>
                <p className="text-base font-light text-[#EDECE4]/65 leading-relaxed">
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
    { icon: Award, number: "77+", label: "Verified Reviews · voluntary", href: "https://www.trustpilot.com/review/novadatech.com.au" },
    { icon: Globe, number: "30+", label: "Industries Served" },
    { icon: TrendingUp, number: "$45.7M+", label: "Client Revenue Generated" },
  ];

  return (
    <section className="section-spacing section-padding">
      <div className="max-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className={`inline-block text-3xl md:text-4xl font-light tracking-tight pb-1 ${GRAD_TEXT}`}>
            The numbers behind the trust
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 text-center max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              {stat.href ? (
                <a href={stat.href} target="_blank" rel="noopener noreferrer" className="block group">
                  <p className="text-4xl md:text-5xl font-normal text-white tracking-tight leading-none group-hover:text-[#0CC481] transition-colors">
                    {stat.number}
                  </p>
                  <p className="font-supply mt-4 text-[10px] md:text-xs uppercase tracking-[0.18em] text-[#EDECE4]/40 underline underline-offset-4 decoration-[#EDECE4]/15">
                    {stat.label} ↗
                  </p>
                </a>
              ) : (
                <div>
                  <p className="text-4xl md:text-5xl font-normal text-white tracking-tight leading-none">
                    {stat.number}
                  </p>
                  <p className="font-supply mt-4 text-[10px] md:text-xs uppercase tracking-[0.18em] text-[#EDECE4]/40">
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
    <section className="section-spacing section-padding">
      <div className="max-container max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-5">
              Why Clients Trust Us
            </p>
            <h2 className={`inline-block text-3xl md:text-5xl font-light tracking-tight leading-tight pb-1 ${GRAD_TEXT}`}>
              We don&apos;t just promise results. We put them in writing.
            </h2>
            <div className="mt-8 space-y-5 font-light text-[#EDECE4]/75 leading-relaxed">
              <p>
                Every agency talks about results. We&apos;re the ones who
                guarantee them in the agreement — 15+ qualified sales meetings
                a month on our flagship system, backed by a 90-day money-back
                guarantee, and operations builds we only take on when the
                projected saving clearly outweighs the investment.
              </p>
              <p>
                That&apos;s not a sales pitch. It&apos;s our business model.
                And it works because we&apos;ve spent years perfecting the
                systems, frameworks, and team behind predictable growth and
                lean operations.
              </p>
              <p>
                And everything we build is installed in your business, on your
                accounts. If we parted ways tomorrow, the systems stay yours.
                No hostage-taking. No vanity metrics. Just systems that work.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-4">
              {[
                {
                  label: "Guaranteed Outcomes",
                  desc: "15+ qualified meetings a month on Growth Infrastructure — backed by a 90-day money-back guarantee, in writing.",
                },
                {
                  label: "Proven Systems",
                  desc: "Every system we install — growth and operations — is battle-tested across 30+ industries.",
                },
                {
                  label: "Expert Team",
                  desc: "From AI-powered outreach to automation engineering — every role is filled by a specialist.",
                },
                {
                  label: "You Own Everything",
                  desc: "Systems are installed in your business, on your accounts. They keep working whether we're in the room or not.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border-t border-[#EDECE4]/10 pt-4 pb-2"
                >
                  <h4 className="font-supply text-sm uppercase tracking-[0.1em] text-[#EDECE4]">{item.label}</h4>
                  <p className="mt-2 text-base font-light text-[#EDECE4]/60">{item.desc}</p>
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
    <section className="relative pt-24 pb-32 md:pt-28 md:pb-40 section-padding overflow-hidden">
      <div className={GLOW_BOTTOM} />
      <div className="relative max-container text-center">
        <AnimatedSection>
          <h2 className={`text-4xl md:text-7xl font-light tracking-tight leading-[1.12] text-balance max-w-3xl mx-auto pb-2 ${GRAD_TEXT}`}>
            Stop watching. Start building.
          </h2>
          <p className="mt-6 text-lg font-light text-[#EDECE4]/70 max-w-xl mx-auto leading-relaxed">
            Whether your next constraint is pipeline, operations, or
            knowing where AI pays off first — one call is all it takes to
            see if we&apos;re the right fit.
          </p>
          <div className="mt-10">
            <a href={BOOKING_URL} className={BTN_WHITE}>
              See If You Qualify
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <p className="font-supply mt-8 text-[10px] uppercase tracking-[0.2em] text-[#EDECE4]/35">
            No pressure · No hard sell · Just a conversation
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
export default function AboutPage() {
  return (
    <div className="bg-[#080808] font-poppins">
      <AboutHero />
      <OriginStory />
      <FounderMessage />
      <Journey />
      <Principles />
      <TrustStats />
      <WhatMakesUsDifferent />
      <AboutCTA />
    </div>
  );
}
