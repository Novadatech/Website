"use client";

/* AI Consulting — Morningside design language (see src/components/ms.ts).
 * Copy unchanged; visual system swapped. */

import { motion } from "framer-motion";
import {
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
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import {
  GRAD_TEXT,
  BTN_WHITE,
  LINK_GREEN,
  LINK_MUTED,
  MS_CARD,
  HERO_WASH,
  GLOW_BOTTOM,
} from "@/components/ms";

const BOOKING_URL = "/book-call";

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className={HERO_WASH} />

      <div className="relative max-container section-padding pt-32 pb-16 md:pt-40 md:pb-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-supply text-xs uppercase tracking-[0.25em] text-[#0CC481] mb-6"
        >
          AI Consulting — The AI Opportunity Audit
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.12] text-balance max-w-4xl mx-auto pb-1 ${GRAD_TEXT}`}
        >
          Know exactly where AI pays off — before you spend a dollar building
          it.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl font-light text-[#EDECE4]/80 max-w-2xl mx-auto leading-relaxed"
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
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a href={BOOKING_URL} className={BTN_WHITE}>
            See If You Qualify
            <ChevronRight className="w-4 h-4" />
          </a>
          <a href="#deliverables" className={LINK_MUTED}>
            See What You Get
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="font-supply mt-8 text-[10px] uppercase tracking-[0.2em] text-[#EDECE4]/35"
        >
          The roadmap is yours to keep — whoever you build with
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
    <section className="section-spacing section-padding">
      <div className="max-container">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-5">
            The Problem
          </p>
          <h2 className={`inline-block text-3xl md:text-5xl font-light tracking-tight leading-tight text-balance pb-1 ${GRAD_TEXT}`}>
            Everyone says use AI. Nobody shows you where.
          </h2>
          <p className="mt-4 text-lg font-light text-[#EDECE4]/70 max-w-2xl mx-auto">
            The businesses winning with AI aren&apos;t the ones with the most
            tools. They&apos;re the ones who knew which problem to point AI at
            first.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className={`${MS_CARD} p-7 h-full flex flex-col`}>
                <p className="font-supply text-[10px] uppercase tracking-[0.15em] text-[#0CC481]/80 mb-3">
                  {p.tag}
                </p>
                <h3 className="text-lg font-normal text-[#EDECE4] mb-3">
                  {p.headline}
                </h3>
                <p className="text-base font-light text-[#EDECE4]/65 leading-relaxed flex-1">
                  {p.body}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.pills.map((pill, j) => (
                    <span
                      key={j}
                      className="font-supply text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 rounded border border-[#EDECE4]/[0.08] text-[#EDECE4]/45"
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
    <section id="deliverables" className="section-spacing section-padding">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-14">
          <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-5">
            What You Walk Away With
          </p>
          <h2 className={`inline-block text-3xl md:text-5xl font-light tracking-tight text-balance pb-1 ${GRAD_TEXT}`}>
            Not a slide deck of ideas. A plan you can execute.
          </h2>
          <p className="mt-4 text-lg font-light text-[#EDECE4]/70 max-w-2xl mx-auto">
            Six concrete deliverables. Every recommendation tied to a number.
            Every assumption documented.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {deliverables.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className={`group ${MS_CARD} p-6 h-full hover:border-[#EDECE4]/[0.14] transition-colors`}>
                <item.icon className="w-6 h-6 text-[#0CC481] mb-4" strokeWidth={1.4} />
                <h3 className="text-base md:text-lg font-normal text-[#EDECE4] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm font-light text-[#EDECE4]/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center mt-12">
          <a href={BOOKING_URL} className={BTN_WHITE}>
            See If You Qualify
            <ChevronRight className="w-4 h-4" />
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
      <div className="relative max-container max-w-5xl">
        <AnimatedSection className="text-center mb-14 md:mb-20">
          <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-5">
            How It Works
          </p>
          <h2 className={`inline-block text-3xl md:text-5xl font-light tracking-tight leading-[1.1] text-balance pb-1 ${GRAD_TEXT}`}>
            From first call to ROI-ranked roadmap.
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] border-t border-dashed border-[#EDECE4]/15" />
          <div className="grid md:grid-cols-3 gap-y-12 md:gap-x-6">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div className="relative text-center px-4">
                  <div className="relative z-10 mx-auto w-20 h-20 rounded-full border border-[#0CC481]/50 bg-[#080808] flex items-center justify-center mb-5">
                    <step.icon className="w-8 h-8 text-[#0CC481]" strokeWidth={1.2} />
                  </div>
                  <p className="font-supply text-xs uppercase tracking-[0.18em] text-[#EDECE4]/45 mb-2">
                    {step.phase}
                  </p>
                  <h3 className="text-lg md:text-xl font-normal text-[#EDECE4] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base font-light text-[#EDECE4]/60 leading-relaxed max-w-[300px] mx-auto">
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
    <section className="section-spacing section-padding">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-5">
            Where The Roadmap Leads
          </p>
          <h2 className={`inline-block text-3xl md:text-4xl font-light tracking-tight text-balance pb-1 ${GRAD_TEXT}`}>
            The audit is the map. These are the roads.
          </h2>
          <p className="mt-4 text-lg font-light text-[#EDECE4]/70 max-w-2xl mx-auto">
            Most roadmaps point at one of two places. When you&apos;re ready to
            build, we&apos;re the team that builds both — or hand the roadmap
            to your own team. It&apos;s yours either way.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection>
            <Link
              href="/linkedin-growth"
              className={`block ${MS_CARD} p-8 h-full group hover:border-[#EDECE4]/[0.14] transition-colors`}
            >
              <TrendingUp className="w-7 h-7 text-[#0CC481] mb-5" strokeWidth={1.4} />
              <h3 className="text-xl font-normal text-[#EDECE4] mb-3">
                Growth Infrastructure
              </h3>
              <p className="text-base font-light text-[#EDECE4]/65 leading-relaxed mb-5">
                If the biggest opportunity is revenue: a system that positions
                you as the authority in your niche and books 15+ qualified
                sales meetings every month — guaranteed.
              </p>
              <span className={`${LINK_GREEN}`}>
                See How It Works
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Link
              href="/operations-infrastructure"
              className={`block ${MS_CARD} p-8 h-full group hover:border-[#EDECE4]/[0.14] transition-colors`}
            >
              <Cog className="w-7 h-7 text-[#0CC481] mb-5" strokeWidth={1.4} />
              <h3 className="text-xl font-normal text-[#EDECE4] mb-3">
                Operations Infrastructure
              </h3>
              <p className="text-base font-light text-[#EDECE4]/65 leading-relaxed mb-5">
                If the biggest opportunity is cost: custom AI systems that take
                over quoting, admin, documents, and logistics — so you scale
                output without scaling headcount.
              </p>
              <span className={`${LINK_GREEN}`}>
                See What We Build
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
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
          <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-5">
            Fit Check
          </p>
          <h2 className={`inline-block text-3xl md:text-4xl font-light tracking-tight text-balance pb-1 ${GRAD_TEXT}`}>
            Built for decision-makers. Not tyre-kickers.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection>
            <div className={`${MS_CARD} p-7 h-full`}>
              <p className="font-supply text-xs uppercase tracking-[0.15em] text-[#0CC481] mb-5">
                This is for you if
              </p>
              <div className="space-y-4">
                {qualifies.map((q, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0CC481] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <p className="text-base font-light text-[#EDECE4]/80 leading-relaxed">{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="rounded-xl border border-[#EDECE4]/[0.06] p-7 h-full">
              <p className="font-supply text-xs uppercase tracking-[0.15em] text-[#EDECE4]/40 mb-5">
                This is not for you if
              </p>
              <div className="space-y-4">
                {notFor.map((q, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-[#EDECE4]/35 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <p className="text-base font-light text-[#EDECE4]/70 leading-relaxed">{q}</p>
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
    <details className="group border-b border-[#EDECE4]/10">
      <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none">
        <span className="text-base font-light text-[#EDECE4]">{q}</span>
        <ChevronDown className="w-4 h-4 text-[#EDECE4]/50 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="pb-6 text-base font-light text-[#EDECE4]/70 leading-relaxed">
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
    <section className="pt-16 pb-0 section-padding">
      <div className="max-container max-w-2xl">
        <AnimatedSection className="text-center mb-10">
          <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-4">
            FAQs
          </p>
          <h2 className={`inline-block text-2xl md:text-4xl font-light tracking-tight pb-1 ${GRAD_TEXT}`}>
            Asked Before Every Audit
          </h2>
        </AnimatedSection>
        <div>
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
    <section className="relative pt-24 pb-32 md:pt-28 md:pb-40 section-padding overflow-hidden">
      <div className={GLOW_BOTTOM} />
      <div className="relative max-container text-center">
        <AnimatedSection>
          <p className="font-supply text-xs uppercase tracking-[0.25em] text-[#0CC481] mb-6">
            Clarity Before Capital
          </p>
          <h2 className={`text-3xl md:text-6xl font-light tracking-tight leading-[1.15] text-balance max-w-4xl mx-auto pb-2 ${GRAD_TEXT}`}>
            Six months from now, you&apos;ll have bet on something. Make it the
            right thing.
          </h2>
          <p className="mt-6 text-lg font-light text-[#EDECE4]/70 max-w-xl mx-auto leading-relaxed">
            One call to see if the audit fits your business. If it does,
            you&apos;ll know where AI pays off in your operation within
            weeks — with the numbers to back it.
          </p>
          <a href={BOOKING_URL} className={`${BTN_WHITE} mt-10`}>
            See If You Qualify
            <ChevronRight className="w-5 h-5" />
          </a>
          <p className="font-supply mt-10 text-[10px] uppercase tracking-[0.2em] text-[#EDECE4]/35 flex items-center justify-center gap-2">
            <Shield className="w-3 h-3 text-[#0CC481]/60" /> Fixed price ·
            Fixed scope · The roadmap is yours to keep
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
export default function AiConsultingPage() {
  return (
    <div className="bg-[#080808] font-poppins">
      <Hero />
      <StatsStrip />
      <ProblemSection />
      <Deliverables />
      <Process />
      <WhereItLeads />
      <WhoItsFor />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
