"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  X,
  Check,
  Shield,
  Search,
  Wrench,
  RefreshCw,
  FileText,
  MessageSquare,
  Boxes,
  BarChart3,
  Workflow,
  ClipboardCheck,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { CASE_STUDIES } from "@/app/case-study/data";

const BOOKING_URL = "/book-call";

const OPS_CASE_STUDIES = CASE_STUDIES.filter((c) => c.offering === "custom-ai");

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-surface-950 to-surface-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,90,48,0.08)_0%,_transparent_60%)]" />

      <div className="relative max-container section-padding pt-32 pb-16 md:pt-40 md:pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ember-500/20 bg-ember-500/5 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-ember-500 animate-pulse-slow" />
          <span className="text-sm text-ember-500 font-medium">
            Operations Infrastructure&trade; — Custom AI Systems
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance max-w-4xl mx-auto"
        >
          Your Best People Are Doing Work{" "}
          <span className="text-ember-500">A System Should Be Doing.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
        >
          We design and build custom AI systems that take over the repetitive
          work slowing your business down — quoting, admin, document handling,
          reporting, logistics — so you scale output without scaling headcount.
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
          <a href="#results" className="btn-secondary text-base">
            See Client Results
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 text-sm text-white/40"
        >
          Built for your business. Run by us. Owned by you.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── STATS STRIP ─── */
function StatsStrip() {
  const stats = [
    { num: "80%+", label: "Operational Time Cut — Client Result" },
    { num: "350+", label: "Businesses Scaled" },
    { num: "30+", label: "Industries Across Australia" },
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
      tag: "The Founder Bottleneck",
      headline: "Everything still runs through you",
      body: "Quotes, approvals, scheduling, client updates — if you step away for a week, the business slows down. You didn't build a company. You built a job with staff.",
      pills: ["No time for growth", "Decision fatigue", "Can't step away"],
    },
    {
      tag: "The Margin Leak",
      headline: "Admin is quietly eating your profit",
      body: "Hours of manual data entry, double-handling, chasing paperwork, and copy-pasting between systems. Every one of those hours is payroll spent on work that produces nothing new.",
      pills: ["Rising labour costs", "Slow turnaround", "Human error"],
    },
    {
      tag: "The Scaling Trap",
      headline: "Growing means hiring — and hiring kills margin",
      body: "More clients means more admin, which means more staff, which means more cost and more management. Revenue grows but profit doesn't. The business gets bigger, not better.",
      pills: ["Linear scaling", "Profit stays flat", "More management load"],
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
            Your Operations Grew By Accident.{" "}
            <span className="text-white/40">Now They&apos;re The Ceiling.</span>
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Most businesses don&apos;t have a people problem. They have a
            process problem — and it compounds every month you leave it manual.
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

/* ─── WHAT WE BUILD ─── */
function WhatWeBuild() {
  const systems = [
    {
      icon: FileText,
      title: "Quoting & Procurement Systems",
      desc: "AI that reads specs, matches suppliers, and produces accurate quotes in minutes instead of days — the system we built for a construction procurement firm.",
    },
    {
      icon: ClipboardCheck,
      title: "Document & Report Automation",
      desc: "Appraisals, assessments, compliance documents, client reports — generated end-to-end from your data, reviewed by your team instead of written by them.",
    },
    {
      icon: Boxes,
      title: "Inventory & Logistics Systems",
      desc: "Stock tracking, reordering, dispatch coordination and supplier communication that runs itself — built for businesses moving physical product.",
    },
    {
      icon: MessageSquare,
      title: "Client Communication Engines",
      desc: "Enquiry handling, follow-ups, booking coordination and status updates that respond in minutes, 24/7 — without a human touching the keyboard.",
    },
    {
      icon: Workflow,
      title: "Workflow Orchestration",
      desc: "Your existing tools — CRM, email, calendars, accounting — connected into one pipeline so data flows automatically instead of being re-typed.",
    },
    {
      icon: BarChart3,
      title: "Operational Dashboards",
      desc: "Live visibility over jobs, capacity, and cash flow. One screen that answers the questions you currently answer by ringing three staff members.",
    },
  ];

  return (
    <section className="section-spacing section-padding bg-gradient-to-b from-surface-950 via-zinc-900/40 to-surface-950">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6">
            What We Build
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Custom AI Systems.{" "}
            <span className="text-white/50">Not Off-The-Shelf Tools.</span>
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Every build starts with your actual workflow — not a template.
            These are the categories of systems we install most often.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {systems.map((item, i) => (
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

/* ─── HOW IT WORKS ─── */
function HowItWorks() {
  const steps = [
    {
      icon: Search,
      phase: "Step 1 · Diagnose",
      title: "Map the bottleneck.",
      desc: "We sit inside your operation and map where time and margin actually leak — not where you think they do. You get a prioritised list of what to automate first, ranked by return.",
    },
    {
      icon: Wrench,
      phase: "Step 2 · Build",
      title: "Build the system.",
      desc: "We design and build the AI system around your real workflow, test it against live work, and train your team. Nothing goes live until it performs alongside the manual process it replaces.",
    },
    {
      icon: RefreshCw,
      phase: "Step 3 · Run & Refine",
      title: "Run, measure, expand.",
      desc: "The system goes live with our team monitoring performance. We refine it as your business changes — and once one bottleneck is gone, we move to the next one.",
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
            From bottleneck to{" "}
            <span className="text-ember-500">running system.</span>
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

/* ─── COMPARISON ─── */
function ComparisonSection() {
  const rows = [
    {
      label: "How it scales",
      hire: "Linearly — more work, more salaries",
      saas: "You adapt to the tool's limits",
      novada: "Output grows, headcount doesn't",
    },
    {
      label: "Fit to your workflow",
      hire: "Depends on the hire",
      saas: "Generic — built for everyone",
      novada: "Built around your exact process",
    },
    {
      label: "Ongoing cost",
      hire: "Salary + super + management",
      saas: "Per-seat fees forever",
      novada: "One system, yours to keep",
    },
    {
      label: "Availability",
      hire: "Business hours, leave, turnover",
      saas: "Always on, rarely right",
      novada: "24/7, consistent, no sick days",
    },
    {
      label: "Who maintains it",
      hire: "You manage the person",
      saas: "You manage the tool",
      novada: "We run and refine it for you",
    },
  ];

  return (
    <section className="section-spacing section-padding border-t border-white/[0.04]">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6">
            Why Custom Systems
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Hiring Fixes Today.{" "}
            <span className="gradient-text">Systems Fix Forever.</span>
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            There are three ways to deal with an operational bottleneck. Only
            one of them compounds.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
            <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/[0.06]">
              <div className="p-4 col-span-1" />
              <div className="p-4 text-center">
                <p className="text-xs md:text-sm font-medium text-white/55">
                  Hire More Staff
                </p>
              </div>
              <div className="p-4 text-center">
                <p className="text-xs md:text-sm font-medium text-white/55">
                  Off-The-Shelf Software
                </p>
              </div>
              <div className="p-4 text-center bg-ember-500/[0.05] border-l border-ember-500/15">
                <p className="text-xs md:text-sm font-semibold text-ember-500">
                  Operations Infrastructure
                </p>
              </div>
            </div>
            {rows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-4 border-b border-white/[0.04] last:border-0 ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}
              >
                <div className="p-4 flex items-center">
                  <span className="text-xs md:text-sm text-white/60">
                    {row.label}
                  </span>
                </div>
                <div className="p-4 flex items-center justify-center text-center">
                  <span className="text-xs text-white/45">{row.hire}</span>
                </div>
                <div className="p-4 flex items-center justify-center text-center">
                  <span className="text-xs text-white/45">{row.saas}</span>
                </div>
                <div className="p-4 flex items-center justify-center text-center bg-ember-500/[0.04] border-l border-ember-500/10">
                  <span className="text-xs text-ember-500/90 font-medium">
                    {row.novada}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── CASE STUDIES ─── */
function OpsCaseStudies() {
  return (
    <section id="results" className="section-spacing section-padding border-t border-white/[0.04]">
      <div className="max-container">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6">
            Client Results
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Real Operations. <span className="text-ember-500">Real Systems.</span>
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Four founders who replaced manual bottlenecks with custom AI
            systems — in their own words.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {OPS_CASE_STUDIES.map((c, i) => (
            <AnimatedSection key={c.slug} delay={(i % 2) * 0.08}>
              <article className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden flex flex-col h-full hover:border-ember-500/30 hover:bg-white/[0.035] transition-colors">
                <div className="relative w-full aspect-video bg-black overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${c.videoId}?rel=0`}
                    title={c.pageTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ border: "none" }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-ember-500/80 font-semibold mb-3">
                    {c.offeringLabel}
                  </p>
                  <p className="text-base md:text-lg font-semibold text-white leading-snug mb-4">
                    {c.cardHeadline}
                  </p>
                  <p className="text-xs text-white/45 mb-5">
                    {c.customerName} — {c.customerRole}, {c.customerCompany}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={`/case-study/${c.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ember-500 hover:text-ember-400 transition-colors group/cta"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="text-center mt-10">
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

/* ─── WHO IT'S FOR ─── */
function WhoItsFor() {
  const qualifies = [
    "Your team spends hours every week on repetitive admin, quoting, or data handling",
    "Growth means hiring more people to do more manual work",
    "You have an established business with real volume — not an idea stage startup",
  ];
  const notFor = [
    "You want a chatbot bolted on for the sake of saying you use AI",
    "Your processes change completely every month",
    "You're looking for the cheapest possible off-the-shelf tool",
  ];

  return (
    <section className="section-spacing section-padding">
      <div className="max-container max-w-4xl">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-ember-500/80 font-medium mb-6">
            Fit Check
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Built For Operators. <span className="text-white/40">Not Everyone.</span>
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
      q: "What kinds of processes can actually be automated?",
      a: "More than most owners expect. If a task follows rules a competent staff member could write down — quoting, document generation, data entry, enquiry responses, scheduling, stock tracking, reporting — it's a candidate. The diagnostic phase exists precisely to separate what should be automated from what shouldn't.",
    },
    {
      q: "Our processes are messy and undocumented. Is that a problem?",
      a: "No — it's normal. Almost none of our clients had documented processes when we started. Part of the build is mapping how work actually flows through your business today. You end up with documented, systemised processes as a by-product of the build.",
    },
    {
      q: "Do we need technical staff to run the system?",
      a: "No. We build systems your existing team uses through the tools they already know, and our team runs and maintains the infrastructure. If your staff can use email and a web browser, they can use what we build.",
    },
    {
      q: "How long does a build take?",
      a: "It depends on the system. Focused single-workflow builds typically go live in weeks; larger multi-system builds are staged so you see the first system running before the next one starts. You're never waiting months for the first result.",
    },
    {
      q: "What does it cost?",
      a: "Every build is scoped individually after the diagnostic, because a quoting engine and a full logistics system are very different projects. What we can tell you up front: we only take on builds where the projected saving clearly outweighs the investment — and we'll show you that math before you commit.",
    },
    {
      q: "Who owns the system once it's built?",
      a: "You do. The system is installed in your business, on your accounts, with your data. We run and refine it for you, but you're not held hostage — if we parted ways tomorrow, the infrastructure stays yours.",
    },
    {
      q: "What about our data — is it secure?",
      a: "Your data stays in your systems and your accounts. We design builds around the tools you already trust, apply least-privilege access, and never train public models on your business data.",
    },
    {
      q: "Will this replace our staff?",
      a: "In our experience, it redeploys them. The businesses we work with are growing — the goal is for your best people to stop doing data entry and start doing the work that actually needs judgment. You scale without the next three hires, not by cutting the team you have.",
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
            The Questions Serious Operators Ask
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
                Stop Renting Hours. Start Owning Systems.
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight text-balance">
                Find Out What Your Bottlenecks{" "}
                <span className="text-ember-500">Are Actually Costing You.</span>
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto leading-relaxed">
                One call. We&apos;ll tell you which parts of your operation are
                worth automating, what the return looks like — and whether
                we&apos;re the right team to build it.
              </p>
              <a
                href={BOOKING_URL}
                className="btn-primary mt-8 inline-flex text-base"
              >
                See If You Qualify
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="mt-5 text-xs text-white/35 flex items-center justify-center gap-2">
                <Shield className="w-3 h-3 text-ember-500/60" /> Built for your
                business. Run by us. Owned by you.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
export default function OperationsInfrastructurePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ProblemSection />
      <WhatWeBuild />
      <HowItWorks />
      <OpsCaseStudies />
      <ComparisonSection />
      <WhoItsFor />
      <FAQ />
      <FinalCTA />
    </>
  );
}
