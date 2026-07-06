"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  X,
  Check,
  Shield,
  Map,
  Search,
  Presentation,
  FileText,
  ListOrdered,
  Scale,
  Database,
  Route,
  PlayCircle,
  TrendingUp,
  Cog,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const BOOKING_URL = "/book-call";

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-surface-950 to-surface-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,90,48,0.08)_0%,_transparent_60%)]" />

      <div className="relative max-container section-padding pt-32 pb-16 md:pt-40 md:pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ember-500/20 bg-ember-500/5 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-ember-500 animate-pulse-slow" />
          <span className="text-sm text-ember-500 font-medium">
            AI Consulting — The AI Opportunity Audit
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance max-w-4xl mx-auto"
        >
          Know Exactly Where AI Pays Off In Your Business —{" "}
          <span className="text-ember-500">
            Before You Spend A Dollar Building It.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
        >
          The AI Opportunity Audit is a structured deep-dive into your
          operations. You walk away with a prioritised, ROI-ranked roadmap of
          where AI will actually save you money and where it won&apos;t — built
          from real analysis of your workflows, not guesswork.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href={BOOKING_URL} className="btn-primary text-base">
            See If You Qualify
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#deliverables" className="btn-secondary text-base">
            See What You Get
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 text-sm text-white/40"
        >
          The roadmap is yours to keep — whoever you build with.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── STATS STRIP ─── */
function StatsStrip() {
  const stats = [
    { num: "350+", label: "Businesses Scaled" },
    { num: "30+", label: "Industries Across Australia" },
    { num: "2", label: "Infrastructure Offers The Roadmap Feeds" },
    { num: "4.9★", label: "Trustpilot Rating" },
  ];

  return (
    <section className="section-padding pb-16 md:pb-20">
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

/* ─── PROBLEM ─── */
function ProblemSection() {
  const problems = [
    {
      tag: "The Tool Trap",
      headline: "You bought the tools. Nothing changed.",
      body: "Your team has AI subscriptions, someone went to a webinar, and there's a chatbot no one uses. Tools without a plan don't transform a business — they just add another monthly invoice.",
      pills: ["Subscription sprawl", "No adoption", "No measurable return"],
    },
    {
      tag: "The Stalled Pilot",
      headline: "The demo worked. Production never came.",
      body: "Someone built a proof of concept that impressed everyone in the meeting — then quietly died because it was never connected to how your business actually runs day to day.",
      pills: ["Pilots that fizzle", "No integration", "Wasted months"],
    },
    {
      tag: "The Fear Of Betting Wrong",
      headline: "You know AI matters. You don't know where to start.",
      body: "Every competitor claims they're using AI. Every vendor says their tool is the answer. Betting six months and real budget on the wrong project is exactly how AI becomes a sore point instead of an advantage.",
      pills: ["Analysis paralysis", "Vendor noise", "Costly wrong turns"],
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
            Everyone Says Use AI.{" "}
            <span className="text-white/40">Nobody Shows You Where.</span>
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            The businesses winning with AI aren&apos;t the ones with the most
            tools. They&apos;re the ones who knew which problem to point AI at
            first.
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
                <h3 className="text-lg font-bold text-white mb-3">
                  {p.headline}
                </h3>
                <p className="text-base text-white/80 leading-relaxed flex-1">
                  {p.body}
                </p>
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

/* ─── DELIVERABLES ─── */
function Deliverables() {
  const deliverables = [
    {
      icon: Map,
      title: "Workflow & Bottleneck Map",
      desc: "A documented picture of how work actually flows through your business — and where time, money, and momentum leak out of it.",
    },
    {
      icon: ListOrdered,
      title: "ROI-Ranked Opportunity List",
      desc: "Every AI opportunity we find, scored by projected return, cost to implement, and time to value — so you know what to do first, second, and never.",
    },
    {
      icon: Scale,
      title: "Build vs Buy Recommendations",
      desc: "Where an off-the-shelf tool is genuinely enough, we say so. Where only a custom system will work, we show you why. No default answer.",
    },
    {
      icon: Database,
      title: "Data & Readiness Review",
      desc: "What your current systems and data can support today, and what needs fixing before the bigger opportunities become possible.",
    },
    {
      icon: Route,
      title: "Prioritised Implementation Roadmap",
      desc: "A staged plan — what to implement, in what order, with what expected return — that your team can execute with us or without us.",
    },
    {
      icon: PlayCircle,
      title: "Recorded Roadmap Walkthrough",
      desc: "A live readout session, recorded, walking your leadership through every finding — so the thinking survives the meeting.",
    },
  ];

  return (
    <section
      id="deliverables"
      className="section-spacing section-padding bg-gradient-to-b from-surface-950 via-zinc-900/40 to-surface-950"
    >
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6">
            What You Walk Away With
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Not A Slide Deck Of Ideas.{" "}
            <span className="text-white/50">A Plan You Can Execute.</span>
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Six concrete deliverables. Every recommendation tied to a number.
            Every assumption documented.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {deliverables.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 h-full hover:border-ember-500/30 hover:bg-white/[0.035] transition-colors">
                <div className="w-11 h-11 rounded-xl bg-ember-500/10 border border-ember-500/20 flex items-center justify-center mb-4 group-hover:bg-ember-500/15 transition-colors">
                  <item.icon className="w-5 h-5 text-ember-500" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
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

/* ─── PROCESS ─── */
function Process() {
  const steps = [
    {
      icon: Search,
      phase: "Step 1 · Discovery",
      title: "We sit inside your operation.",
      desc: "Structured sessions with you and your team, plus a review of the systems you run on. We map how work actually happens — not how the org chart says it happens.",
    },
    {
      icon: FileText,
      phase: "Step 2 · Analysis",
      title: "We score every opportunity.",
      desc: "Each candidate is modelled for return, implementation cost, and risk — with the assumptions documented. Opportunities that don't clear the bar get cut, and we tell you why.",
    },
    {
      icon: Presentation,
      phase: "Step 3 · Roadmap",
      title: "You get the plan, live.",
      desc: "A recorded readout with your leadership: the full roadmap, what to do first, what it should return, and exactly what building it would involve. Then the decision is yours.",
    },
  ];

  return (
    <section className="section-spacing section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,48,0.06)_0%,_transparent_60%)] pointer-events-none" />
      <div className="relative max-container max-w-5xl">
        <AnimatedSection className="text-center mb-14 md:mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            From first call to{" "}
            <span className="text-ember-500">ROI-ranked roadmap.</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] border-t border-dashed border-ember-500/40" />
          <div className="grid md:grid-cols-3 gap-y-12 md:gap-x-6">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div className="relative text-center px-4">
                  <div className="relative z-10 mx-auto w-20 h-20 rounded-full border-2 border-ember-500/60 bg-surface-950 flex items-center justify-center mb-5">
                    <step.icon className="w-8 h-8 text-ember-500" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45 font-semibold mb-2">
                    {step.phase}
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/65 leading-relaxed max-w-[300px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── WHERE IT LEADS ─── */
function WhereItLeads() {
  return (
    <section className="section-spacing section-padding border-t border-white/[0.04]">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6">
            Where The Roadmap Leads
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            The Audit Is The Map.{" "}
            <span className="gradient-text">These Are The Roads.</span>
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Most roadmaps point at one of two places. When you&apos;re ready to
            build, we&apos;re the team that builds both — or hand the roadmap
            to your own team. It&apos;s yours either way.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection>
            <Link
              href="/linkedin-growth"
              className="block glass-card gradient-border rounded-2xl p-8 h-full group hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-ember-500/10 border border-ember-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-ember-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Growth Infrastructure
              </h3>
              <p className="text-base text-white/70 leading-relaxed mb-5">
                If the biggest opportunity is revenue: a system that positions
                you as the authority in your niche and books 15+ qualified
                sales meetings every month — guaranteed.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-ember-500 group-hover:text-ember-400 transition-colors">
                See How It Works
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Link
              href="/operations-infrastructure"
              className="block glass-card gradient-border rounded-2xl p-8 h-full group hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-ember-500/10 border border-ember-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Cog className="w-6 h-6 text-ember-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Operations Infrastructure
              </h3>
              <p className="text-base text-white/70 leading-relaxed mb-5">
                If the biggest opportunity is cost: custom AI systems that take
                over quoting, admin, documents, and logistics — so you scale
                output without scaling headcount.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-ember-500 group-hover:text-ember-400 transition-colors">
                See What We Build
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── WHO IT'S FOR ─── */
function WhoItsFor() {
  const qualifies = [
    "You run an established business with real operational volume and real revenue",
    "You suspect AI could save you serious money but want evidence before you commit",
    "You want a prioritised plan your leadership can act on — not another opinion",
  ];
  const notFor = [
    "You've already decided what to build and just want validation",
    "You're pre-revenue or don't yet have processes worth automating",
    "You want a vendor to tell you their tool is the answer",
  ];

  return (
    <section className="section-spacing section-padding">
      <div className="max-container max-w-4xl">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6">
            Fit Check
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Built For Decision-Makers.{" "}
            <span className="text-white/40">Not Tyre-Kickers.</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection>
            <div className="glass-card gradient-border rounded-2xl p-7 h-full">
              <p className="text-sm font-semibold text-ember-500 uppercase tracking-[0.15em] mb-5">
                This is for you if
              </p>
              <div className="space-y-4">
                {qualifies.map((q, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <p className="text-base text-white/80 leading-relaxed">{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="glass-card border border-white/[0.06] rounded-2xl p-7 h-full">
              <p className="text-sm font-semibold text-white/50 uppercase tracking-[0.15em] mb-5">
                This is not for you if
              </p>
              <div className="space-y-4">
                {notFor.map((q, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400/60 mt-0.5 flex-shrink-0" />
                    <p className="text-base text-white/80 leading-relaxed">{q}</p>
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

/* ─── FAQ ─── */
function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group glass-card border border-white/[0.06] rounded-xl overflow-hidden">
      <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
        <span className="text-sm font-medium text-white">{q}</span>
        <ChevronDown className="w-4 h-4 text-white/40 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="px-5 pb-5 text-base text-white/80 leading-relaxed border-t border-white/[0.05] pt-4">
        {a}
      </div>
    </details>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "How long does the audit take?",
      a: "Typically one to two weeks end to end, depending on the size and complexity of your operation. It's designed to be fast on purpose — the value is in the decision it enables, and delayed clarity is expensive.",
    },
    {
      q: "Is this just a sales pitch for your build services?",
      a: "No — and the structure proves it. The roadmap includes build-vs-buy recommendations, which regularly means telling clients an off-the-shelf tool is enough for part of their plan. The roadmap is yours to execute with us, with your own team, or with someone else entirely. We'd rather earn the build by being right in the audit.",
    },
    {
      q: "What do you need from us during the audit?",
      a: "A few hours of structured conversation with you and the people who actually do the work, plus visibility into the systems you run on. No data science team, no preparation project — we work around your operation, not the other way round.",
    },
    {
      q: "Our data and processes are a mess. Should we clean up first?",
      a: "No — come as you are. Assessing what your data and systems can support today is literally one of the deliverables. Most businesses we audit have messy processes; that's usually where the biggest opportunities hide.",
    },
    {
      q: "What does the audit cost?",
      a: "It's scoped to the size and complexity of your business, and we'll give you the exact figure on the qualification call before anything starts. What we can say up front: it's a fixed price, agreed in advance, with no surprise extras.",
    },
    {
      q: "Can you actually build what you recommend?",
      a: "Yes. The roadmap feeds directly into our two infrastructure offers — Growth Infrastructure for revenue systems and Operations Infrastructure for custom AI automation. The same team that audits your business builds for it, which is exactly why we don't recommend things we can't make work.",
    },
    {
      q: "What kind of businesses is this for?",
      a: "Established businesses with real operational volume — teams doing repetitive work, established sales motions, meaningful revenue. Across 30+ industries in Australia the pattern holds: if people in your business spend hours on rule-based work, the audit will find return.",
    },
  ];

  return (
    <section className="pt-16 pb-0 section-padding border-t border-white/[0.04]">
      <div className="max-container max-w-2xl">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-3">
            Your Questions Answered
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Asked Before Every Audit
          </h2>
        </AnimatedSection>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─── */
function FinalCTA() {
  return (
    <section className="pt-16 pb-16 section-padding">
      <div className="max-container max-w-3xl">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-surface-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,90,48,0.14)_0%,_transparent_70%)]" />
            <div className="relative px-8 py-14 md:px-14">
              <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-4">
                Clarity Before Capital
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight text-balance">
                Six Months From Now, You&apos;ll Have Bet On Something.{" "}
                <span className="text-ember-500">Make It The Right Thing.</span>
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto leading-relaxed">
                One call to see if the audit fits your business. If it does,
                you&apos;ll know where AI pays off in your operation within
                weeks — with the numbers to back it.
              </p>
              <a
                href={BOOKING_URL}
                className="btn-primary mt-8 inline-flex text-base"
              >
                See If You Qualify
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="mt-5 text-xs text-white/35 flex items-center justify-center gap-2">
                <Shield className="w-3 h-3 text-ember-500/60" /> Fixed price.
                Fixed scope. The roadmap is yours to keep.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
export default function AiConsultingPage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ProblemSection />
      <Deliverables />
      <Process />
      <WhereItLeads />
      <WhoItsFor />
      <FAQ />
      <FinalCTA />
    </>
  );
}
