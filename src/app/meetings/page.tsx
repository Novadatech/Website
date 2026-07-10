"use client";

/*
 * /meetings — paid-ads lander (Facebook cold traffic).
 *
 * Offer (source: Blueprint/Phase 3 proposals, positioned as ONE offer):
 * pay-per-result qualified meetings. $0 upfront, one per-meeting fee
 * (only charged when a qualified meeting is booked; figure agreed on the
 * call — deliberately not printed since the two proposal tiers differ),
 * you never pay for a cancelled meeting, reschedules never charged twice,
 * no retainer/minimums/lock-in, <30 min/week client time, and 15+
 * qualified meetings a month GUARANTEED (user-confirmed 2026-07-10 —
 * overrides the proposals, which the user is updating; matches the live
 * Facebook ads' "Written Guarantee" for message match).
 *
 * Structure mandated by user for the top: headline → subheadline →
 * Trustpilot evidence → VSL → video testimonial case studies. Everything
 * below is conversion architecture for burned-by-agencies B2B owners.
 * All CTAs anchor to the embedded booking calendar (#book) — no page hop.
 *
 * No conversion tags fire here (see /book-call note): the booking
 * conversion fires on /confirmed-call after a real booking.
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronDown,
  Play,
  Check,
  X,
  ShieldCheck,
  BadgeDollarSign,
  RotateCcw,
  Clock,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import HeroTrustBar from "@/components/HeroTrustBar";
import NovadaLogo from "@/components/NovadaLogo";

const BOOK_ANCHOR = "#book";

/* Conversion-first button treatments (green = highest attention on dark) */
const BTN_CTA =
  "font-supply inline-flex items-center justify-center gap-2 rounded-lg bg-[#0CC481] px-8 py-4 text-base font-semibold uppercase tracking-[0.06em] text-[#04160e] transition-all hover:bg-[#10e094] hover:shadow-[0_0_40px_rgba(12,196,129,0.35)]";
const BTN_CTA_SM =
  "font-supply inline-flex items-center justify-center gap-2 rounded-lg bg-[#0CC481] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.06em] text-[#04160e] transition-colors hover:bg-[#10e094]";
const GRAD_TEXT =
  "bg-gradient-to-r from-white to-[#0CC481] bg-clip-text text-transparent";

/* ─── HEADER (minimal — logo + CTA only) ─── */
function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-xl border-b border-[#EDECE4]/10">
        <div className="max-container section-padding">
          <div className="flex items-center justify-between gap-3 h-16 md:h-20">
            <NovadaLogo variant="light" className="h-9 md:h-12 w-auto flex-shrink-0" />
            <a href={BOOK_ANCHOR} className={`${BTN_CTA_SM} !px-4 whitespace-nowrap`}>
              <span className="sm:hidden">Book A Call</span>
              <span className="hidden sm:inline">Book My Free Call</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>
      <div className="h-16 md:h-20" />
    </>
  );
}

/* ─── HERO (3-second test) ─── */
function Hero() {
  return (
    <section className="relative pt-10 pb-8 md:pt-16 md:pb-10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[80vh] bg-[linear-gradient(180deg,#0F1C1C_0%,rgba(8,8,8,0)_100%)] pointer-events-none" />

      <div className="relative max-container section-padding text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-supply text-[11px] md:text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-5"
        >
          Pay-Per-Result Client Acquisition · For B2B &amp; Service Businesses
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[32px] leading-[1.12] sm:text-4xl md:text-6xl font-bold tracking-tight text-balance max-w-4xl mx-auto text-white"
        >
          We Book Qualified Sales Meetings Onto Your Calendar.{" "}
          <span className={GRAD_TEXT}>
            You Only Pay When We Do.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-5 text-base md:text-xl text-[#EDECE4]/95 max-w-2xl mx-auto leading-relaxed"
        >
          Done-for-you outreach across every channel that matters, run by our
          team — <span className="text-white font-semibold">15+ qualified
          meetings a month, guaranteed</span>. $0 upfront. No retainers. No lock-in. And
          you never pay for a meeting that doesn&apos;t happen.
        </motion.p>

        {/* Trustpilot evidence — mandated position */}
        <HeroTrustBar className="mt-6" />

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-7"
        >
          <a href={BOOK_ANCHOR} className={`${BTN_CTA} w-full sm:w-auto`}>
            Book My Free Strategy Call
            <ChevronRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-sm md:text-base text-[#EDECE4]/90">
            No meeting booked? <span className="text-white font-medium">No charge.</span>{" "}
            Meeting cancelled? <span className="text-white font-medium">You don&apos;t pay a cent.</span>
          </p>
          <p className="font-supply mt-3 text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/40">
            30 minutes · No obligation · Written guarantee
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── VSL — mandated after headline / subheadline / Trustpilot ─── */
function VSL() {
  return (
    <section className="section-padding pt-2 pb-14 md:pb-20">
      <div className="max-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-3 text-sm text-[#EDECE4]/80">
            <Play className="w-3.5 h-3.5 text-[#0CC481]" />
            <span>Watch the 2-minute overview</span>
          </div>
          <div
            className="relative rounded-xl overflow-hidden border border-[#0CC481]/25 shadow-[0_0_60px_rgba(12,196,129,0.12)]"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              src="https://www.youtube.com/embed/_fVB00BpPpI?autoplay=1&mute=1&rel=0"
              title="How we book qualified sales meetings for your business"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#EDECE4]/50">
            <span>Presented by <span className="text-[#EDECE4]/70">Ade</span> — Founder, Novada Tech</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── VIDEO CASE STUDIES — mandated after VSL ─── */
const CASE_VIDEOS = [
  {
    id: "CBL83P7OYgI",
    metric: "3 High-Value Clients In 30 Days",
    who: "Nicola — Founder, Morasco Media Services",
  },
  {
    id: "upgMW2nwwpk",
    metric: "$20K → $100K+ Monthly Revenue",
    who: "Tony — Founder, South Line Media",
  },
  {
    id: "G44OKPVh3Uk",
    metric: "10× Revenue In 30 Days",
    who: "Michael — Founder, Aaronson Investigations",
  },
  {
    id: "Ef4YTXOnCP0",
    metric: "1–2 Calls A Week → 30–60 A Month",
    who: "Jeff — Founder, Vertical Axis",
  },
];

function VideoCaseStudies() {
  return (
    <section className="section-padding pb-16 md:pb-24">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-10">
          <p className="font-supply text-[11px] uppercase tracking-[0.2em] text-[#0CC481] mb-4">
            Real Clients · Real Results · In Their Own Words
          </p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white text-balance">
            Don&apos;t take our word for it.{" "}
            <span className={GRAD_TEXT}>Hear it from them.</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {CASE_VIDEOS.map((c, i) => (
            <AnimatedSection key={c.id} delay={(i % 2) * 0.08}>
              <div className="rounded-xl border border-[#EDECE4]/[0.08] bg-gradient-to-br from-[#111413] to-[#050808] overflow-hidden">
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${c.id}?rel=0`}
                    title={c.metric}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ border: "none" }}
                  />
                </div>
                <div className="p-5">
                  <p className="text-lg md:text-xl font-normal text-white leading-snug">
                    {c.metric}
                  </p>
                  <p className="font-supply mt-1.5 text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/45">
                    {c.who}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="text-center mt-10">
          <a href={BOOK_ANCHOR} className={`${BTN_CTA} w-full sm:w-auto`}>
            I Want Results Like These
            <ChevronRight className="w-5 h-5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── BURNED BEFORE (empathy + agitation) ─── */
function BurnedBefore() {
  const oldWay = [
    "Paid a retainer for months — got reports, not revenue",
    "Promised \"leads\" that were never going to buy",
    "Locked into a contract while nothing changed",
    "Left doing the follow-up and chasing yourself",
  ];

  return (
    <section className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/10">
      <div className="max-container max-w-4xl">
        <AnimatedSection className="text-center mb-10">
          <p className="font-supply text-[11px] uppercase tracking-[0.2em] text-[#0CC481] mb-4">
            Been Burned By An Agency Before?
          </p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white text-balance">
            You paid first. They promised. Nothing landed on your calendar.{" "}
            <span className={GRAD_TEXT}>We built the opposite model.</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <AnimatedSection>
            <div className="rounded-xl border border-[#EDECE4]/[0.08] p-7 h-full">
              <p className="font-supply text-[11px] uppercase tracking-[0.15em] text-[#EDECE4]/40 mb-5">
                How most agencies work
              </p>
              <div className="space-y-4">
                {oldWay.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400/60 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <p className="text-base text-[#EDECE4]/90 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-xl border border-[#0CC481]/30 bg-gradient-to-br from-[#0CC481]/[0.06] to-transparent p-7 h-full">
              <p className="font-supply text-[11px] uppercase tracking-[0.15em] text-[#0CC481] mb-5">
                How we work
              </p>
              <div className="space-y-4">
                {[
                  "You pay $0 upfront — no activation, onboarding or setup fee",
                  "You're only charged when a qualified meeting is booked",
                  "A cancelled meeting costs you nothing — you’re simply not charged",
                  "No retainer, no minimums, no lock-in — ever",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0CC481] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <p className="text-base text-[#EDECE4] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.15} className="text-center mt-8">
          <p className="text-lg md:text-xl text-[#EDECE4]/95 max-w-2xl mx-auto leading-relaxed">
            If we don&apos;t book meetings, we don&apos;t get paid — and
            15+ qualified meetings a month is{" "}
            <span className="text-white">guaranteed, in writing.</span>{" "}
            Our incentive and yours point in exactly the same direction —
            from day one.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── FOUNDER NOTE (accountability — the PPQL pattern for burned buyers) ─── */
function FounderNote() {
  return (
    <section className="section-padding py-14 md:py-20">
      <div className="max-container max-w-2xl">
        <AnimatedSection>
          <div className="border-l-2 border-[#0CC481] pl-6 md:pl-8">
            <p className="font-supply text-[11px] uppercase tracking-[0.2em] text-[#0CC481] mb-4">
              A Note From The Founder
            </p>
            <p className="text-lg md:text-xl text-[#EDECE4] leading-relaxed">
              &ldquo;We don&apos;t take on every business, and we won&apos;t
              pretend we&apos;re the right fit for everyone. But when we do
              partner, the risk sits with us — you pay nothing to start, and
              nothing at all unless a qualified meeting is booked. That&apos;s
              the standard we hold ourselves to, every single month.&rdquo;
            </p>
            <p className="mt-5 text-base text-white">Ade Eni</p>
            <p className="font-supply text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/40 mt-1">
              Founder &amp; CEO, Novada Tech
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── RISK REVERSAL (the commercial model, unmissable) ─── */
function RiskReversal() {
  const cards = [
    {
      icon: BadgeDollarSign,
      title: "$0 To Start",
      desc: "No activation fee. No onboarding fee. No setup fee. You commit no budget to begin — the risk sits with us.",
    },
    {
      icon: ShieldCheck,
      title: "Pay Per Meeting Only",
      desc: "One simple per-meeting fee, agreed before we start — charged only when a qualified meeting is booked into your calendar.",
    },
    {
      icon: RotateCcw,
      title: "Cancellations Cost Nothing",
      desc: "If a prospect cancels, you don't pay for that meeting — and a reschedule is never charged twice. You only ever pay for meetings that hold.",
    },
  ];

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <p className="font-supply text-[11px] uppercase tracking-[0.2em] text-[#0CC481] mb-4">
            No Upfront · No Retainer · No Risk
          </p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white text-balance">
            The only time money changes hands is when{" "}
            <span className={GRAD_TEXT}>
              a qualified meeting lands on your calendar.
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="rounded-xl border border-[#EDECE4]/[0.08] bg-gradient-to-br from-[#111413] to-[#050808] p-7 h-full text-center">
                <c.icon className="w-8 h-8 text-[#0CC481] mx-auto mb-4" strokeWidth={1.3} />
                <h3 className="text-lg font-normal text-white mb-2">{c.title}</h3>
                <p className="text-sm text-[#EDECE4]/85 leading-relaxed">{c.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="text-center mt-10">
          <a href={BOOK_ANCHOR} className={`${BTN_CTA} w-full sm:w-auto`}>
            Book My Free Strategy Call
            <ChevronRight className="w-5 h-5" />
          </a>
          <p className="font-supply mt-4 text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/40">
            We&apos;ll define your exact per-meeting fee on the call — before you commit to anything
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── THE MECHANISM (why this works when agencies failed) ─── */
function Mechanism() {
  return (
    <section className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/10">
      <div className="max-container max-w-4xl">
        <AnimatedSection className="text-center mb-12">
          <p className="font-supply text-[11px] uppercase tracking-[0.2em] text-[#0CC481] mb-4">
            Why This Works When Cold Outreach Doesn&apos;t
          </p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white text-balance">
            First we make your market trust you.{" "}
            <span className={GRAD_TEXT}>Then we start the conversations.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#EDECE4]/90 max-w-2xl mx-auto leading-relaxed">
            Most outreach fails because prospects look you up, see nothing
            that says expert, and archive you. Our system fixes both sides —
            trust and reach — so replies turn into booked, qualified meetings.
          </p>
        </AnimatedSection>

        <div className="space-y-5">
          <AnimatedSection>
            <div className="rounded-xl border border-[#EDECE4]/[0.08] bg-gradient-to-br from-[#111413] to-[#050808] p-7 md:p-9 flex flex-col md:flex-row gap-5 md:items-center">
              <span className="font-poppins italic font-extralight text-6xl md:text-7xl leading-none bg-gradient-to-b from-[#12513c] to-[#0CC481] bg-clip-text text-transparent select-none flex-shrink-0 px-2">
                1
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-normal text-white mb-2">
                  Trust Engineering&trade;
                </h3>
                <p className="text-base text-[#EDECE4]/90 leading-relaxed">
                  We position you as the recognised authority in your niche —
                  a rewritten profile, an authority-video content engine and
                  credibility assets — so when a decision-maker looks you up,
                  the answer to &ldquo;can I trust them?&rdquo; is already yes.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-xl border border-[#EDECE4]/[0.08] bg-gradient-to-br from-[#111413] to-[#050808] p-7 md:p-9 flex flex-col md:flex-row gap-5 md:items-center">
              <span className="font-poppins italic font-extralight text-6xl md:text-7xl leading-none bg-gradient-to-b from-[#12513c] to-[#0CC481] bg-clip-text text-transparent select-none flex-shrink-0 px-2">
                2
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-normal text-white mb-2">
                  The Outbound Growth System
                </h3>
                <p className="text-base text-[#EDECE4]/90 leading-relaxed">
                  Our dedicated SDR team runs daily, done-for-you outreach
                  across every channel that matters — social, email, SMS and
                  phone — handling replies, qualifying leads against your
                  exact criteria, and booking meetings straight onto your
                  calendar.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.15} className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 rounded-lg border border-[#EDECE4]/10 px-5 py-3">
            <Clock className="w-4 h-4 text-[#0CC481]" />
            <span className="text-sm text-[#EDECE4]/95">
              Your total time investment: <span className="text-white">under 30 minutes a week.</span> We handle the rest.
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS / TIMELINE ─── */
function Timeline() {
  const steps = [
    {
      period: "Step 1 · Your Free Call",
      title: "We define a meeting worth your time.",
      desc: "Industry, seniority, company size, your disqualifiers — we agree the exact profile of a qualified meeting, and your exact per-meeting fee. No pressure, no obligation.",
    },
    {
      period: "Step 2 · We Build & Launch",
      title: "The system switches on.",
      desc: "Positioning, authority content and outreach sequences are built and launched by our team. You spend about an hour with us in onboarding — we do the rest.",
    },
    {
      period: "Step 3 · Meetings Land",
      title: "Qualified meetings hit your calendar.",
      desc: "First qualified meetings typically land inside your first month — then we optimise targeting and messaging, scaling to your guaranteed 15+ every month.",
    },
  ];

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <p className="font-supply text-[11px] uppercase tracking-[0.2em] text-[#0CC481] mb-4">
            How It Works
          </p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white text-balance">
            From this page to a calendar{" "}
            <span className={GRAD_TEXT}>that fills itself.</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="hidden md:block absolute top-6 left-[16.67%] right-[16.67%] border-t border-dashed border-[#EDECE4]/15" />
          <div className="grid md:grid-cols-3 gap-y-10 md:gap-x-6">
            {steps.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative text-center px-4">
                  <div className="relative z-10 mx-auto w-12 h-12 rounded-full border border-[#0CC481]/60 bg-[#080808] flex items-center justify-center mb-5">
                    <span className="font-supply text-[#0CC481] text-sm">{i + 1}</span>
                  </div>
                  <p className="font-supply text-[10px] uppercase tracking-[0.18em] text-[#EDECE4]/45 mb-2">
                    {s.period}
                  </p>
                  <h3 className="text-lg md:text-xl font-normal text-white mb-3">{s.title}</h3>
                  <p className="text-sm md:text-base text-[#EDECE4]/80 leading-relaxed max-w-[300px] mx-auto">
                    {s.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.2} className="text-center mt-12">
          <a href={BOOK_ANCHOR} className={`${BTN_CTA} w-full sm:w-auto`}>
            Start With A Free Call
            <ChevronRight className="w-5 h-5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── STATS ─── */
function Stats() {
  const stats = [
    { num: "350+", label: "Businesses Scaled" },
    { num: "$45.7M+", label: "Client Revenue Generated" },
    { num: "30+", label: "Industries Across Australia" },
    { num: "4.9★", label: "Trustpilot · 77+ Reviews" },
  ];

  return (
    <section className="section-padding py-14 md:py-20 border-t border-b border-[#EDECE4]/10">
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
              <p className="text-3xl md:text-5xl font-normal text-white tracking-tight leading-none">
                {s.num}
              </p>
              <p className="font-supply mt-3 text-[10px] md:text-xs uppercase tracking-[0.18em] text-[#EDECE4]/40">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WRITTEN TESTIMONIALS ─── */
function WrittenTestimonials() {
  const quotes = [
    {
      quote:
        "We went from $42K to $91K monthly in under 60 days. The pipeline became predictable for the first time — we could forecast and hire with confidence.",
      name: "Jeff",
      role: "Founder, Vertical Axis",
      avatar: "/testimonials/jeff-verticalaccess.jpg",
    },
    {
      quote:
        "We'd been burned by two agencies before. This was different — it was a system, not a service. 4 new retainer clients in the first 45 days.",
      name: "Nicola",
      role: "Founder, Morasco Media",
      avatar: "/testimonials/nicola-morasco.jpg",
    },
  ];

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="max-container max-w-4xl">
        <div className="grid md:grid-cols-2 gap-6">
          {quotes.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <figure className="rounded-xl border border-[#EDECE4]/[0.08] bg-gradient-to-br from-[#111413] to-[#050808] p-7 h-full flex flex-col">
                <div className="text-[#0CC481] text-sm tracking-widest mb-4">★★★★★</div>
                <blockquote className="text-base md:text-lg text-[#EDECE4] leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-sm text-white">{t.name}</p>
                    <p className="font-supply text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/40">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const faqs = [
    {
      q: "What counts as a \"qualified meeting\"?",
      a: "A booked appointment with a decision-maker who matches the criteria we agree with you at onboarding — industry, seniority, company size, and your own disqualifiers. Every conversation we start is aimed at that definition, and it's agreed before anything launches — not invented after the fact.",
    },
    {
      q: "What does it cost?",
      a: "$0 upfront — no activation, onboarding or setup fee. There's one simple per-meeting fee, agreed with you before we start, and it's only charged when a qualified meeting is actually booked into your calendar. No meeting booked means no charge.",
    },
    {
      q: "Is the 15+ meetings a month actually guaranteed?",
      a: "Yes — 15+ qualified meetings every month, and it's written into your service agreement, not a marketing line. Combined with $0 upfront and pay-per-meeting billing, the risk sits with us end to end: you never pre-pay, you only pay for meetings actually booked, and the monthly target is guaranteed in writing.",
    },
    {
      q: "What happens if a meeting cancels or doesn't hold?",
      a: "You don't pay for it — simple as that. A cancelled meeting costs you nothing, and a reschedule is never charged twice; it remains the same single meeting. You only ever pay for meetings that hold.",
    },
    {
      q: "I've been burned by agencies before. Why is this different?",
      a: "Because with a retainer, the agency gets paid whether or not you get results — you carry all the risk. Our model is the reverse: we only earn when a qualified meeting is booked, so if we don't perform, we're the ones who lose. There's no retainer to waste and no contract trapping you.",
    },
    {
      q: "How much of my time will this take?",
      a: "Under 30 minutes a week once we're running. Onboarding takes about an hour of your time — we handle positioning, content, outreach, replies, qualification and booking. Your job is to show up to qualified meetings.",
    },
    {
      q: "Do I need to spend money on ads?",
      a: "No. There's no ad budget required from you — the system runs on done-for-you outreach and authority content, not on your ad spend.",
    },
    {
      q: "How quickly will I see meetings?",
      a: "The system is typically built and live within your first two weeks, and the first qualified meetings usually land inside the first month — then we scale to your guaranteed 15+ qualified meetings every month.",
    },
    {
      q: "Is there a lock-in contract?",
      a: "No retainer, no minimums, no lock-in. The commercial model only works for us if it keeps working for you — that's the point.",
    },
    {
      q: "Who is this NOT for?",
      a: "We're selective, because the pay-per-result model only works when the underlying business is ready. If your offer is under $3K, your service isn't validated yet, or you're after a magic-button solution with zero involvement — we're not the right fit, and we'll tell you that on the call rather than waste your time.",
    },
  ];

  return (
    <section className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/10">
      <div className="max-container max-w-2xl">
        <AnimatedSection className="text-center mb-10">
          <p className="font-supply text-[11px] uppercase tracking-[0.2em] text-[#0CC481] mb-4">
            FAQs
          </p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
            Everything sceptics ask us. <span className={GRAD_TEXT}>Answered straight.</span>
          </h2>
        </AnimatedSection>

        <div>
          {faqs.map((f, i) => (
            <FAQItem key={i} question={f.q} answer={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#EDECE4]/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base md:text-lg text-[#EDECE4] group-hover:text-white transition-colors pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#EDECE4]/50 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-base text-[#EDECE4]/90 leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
}

/* ─── BOOKING (embedded calendar — the conversion) ─── */
function Booking() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.novadatech.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="book" className="relative section-padding py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,109,74,0.4)_0%,rgba(11,109,74,0)_55%)] pointer-events-none" />
      <div className="relative max-container max-w-5xl">
        <AnimatedSection className="text-center mb-10">
          <p className="font-supply text-[11px] uppercase tracking-[0.2em] text-[#0CC481] mb-4">
            Free 30-Minute Strategy Call
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance text-white">
            Pick a time. <span className={GRAD_TEXT}>See exactly how many meetings we&apos;d book you.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#EDECE4]/90 max-w-2xl mx-auto leading-relaxed">
            On the call we&apos;ll define what a qualified meeting looks like
            for your business, agree your exact per-meeting fee, and map your
            first 90 days. If it&apos;s not a fit, you&apos;ll leave with a
            clear plan anyway — that&apos;s the worst case.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* What to expect */}
          <AnimatedSection direction="left" className="lg:col-span-1">
            <div className="rounded-xl border border-[#EDECE4]/[0.08] bg-gradient-to-br from-[#111413] to-[#050808] p-7 lg:sticky lg:top-24">
              <h3 className="text-lg font-normal text-white mb-5">On this call, we&apos;ll:</h3>
              <div className="space-y-4">
                {[
                  "Review your offer and your ideal client profile",
                  "Define exactly what a qualified meeting means for you",
                  "Agree your per-meeting fee — before you commit to anything",
                  "Map your first 90 days, week by week",
                  "Tell you honestly if we're not the right fit",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0CC481] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-sm text-[#EDECE4]/95 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <div className="font-supply mt-6 pt-5 border-t border-[#EDECE4]/[0.08] text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/40 leading-relaxed">
                30 minutes · No obligation · No hard sell
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-[#EDECE4]/80">
                <span className="text-[#0CC481]">★★★★★</span>
                <span>4.9 on Trustpilot · 350+ businesses scaled</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Calendar embed */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-[#0CC481]/25 bg-white/[0.02] p-2 min-h-[600px] relative z-10">
              <iframe
                src="https://link.novadatech.com/widget/booking/8j4TVe5uOcjxbNfVC3kp"
                style={{
                  width: "100%",
                  minHeight: "700px",
                  border: "none",
                  display: "block",
                }}
                scrolling="yes"
                id="8j4TVe5uOcjxbNfVC3kp_meetings"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── STICKY MOBILE CTA ─── */
function StickyCta() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-xl border-t border-[#EDECE4]/10 py-3 px-5 sm:px-8"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-sm text-[#EDECE4]">
                Qualified meetings, booked for you — $0 upfront
              </p>
              <p className="font-supply text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/40">
                15+ a month guaranteed · Pay only per booked meeting
              </p>
            </div>
            <a href={BOOK_ANCHOR} className={`${BTN_CTA_SM} w-full sm:w-auto`}>
              Book My Free Call
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── PAGE ─── */
export default function MeetingsLanderPage() {
  return (
    <div className="bg-[#080808] font-poppins overflow-x-clip">
      <Header />
      <Hero />
      <VSL />
      <VideoCaseStudies />
      <BurnedBefore />
      <FounderNote />
      <RiskReversal />
      <Mechanism />
      <Timeline />
      <Stats />
      <WrittenTestimonials />
      <FAQ />
      <Booking />
      <StickyCta />
      <div className="h-16 sm:h-0" />
    </div>
  );
}
