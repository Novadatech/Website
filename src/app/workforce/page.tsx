"use client";

/*
 * /workforce — Novada Workforce single-page conversion lander (AU, B2B).
 * After-Hours Workforce Operations for healthcare / aged-care / disability
 * staffing agencies. Built to the 42-section brief (2026-07-27):
 *  - NOT positioned as a call centre / answering service / VA / outsourcing.
 *  - One idea: "Your agency promises staffing around the clock. We help
 *    you deliver that promise." We work the problem, not the phone.
 *  - Primary CTA: Book an After-Hours Operations Assessment (→ #assessment
 *    form). Secondary: Apply for the 30-Day Pilot (same form).
 *  - NO invented social proof, logos, testimonials or stats. Dashboard
 *    numbers are explicitly labelled "Illustrative example".
 *  - No security certifications shown (none held).
 *  - Own brand chrome (nav + footer in-page); route is in BARE_ROUTES.
 * Lead form posts to /api/workforce-lead (GHL upsert + note). Analytics:
 * dataLayer pushes (workforce_cta_click / form_start / form_submit) picked
 * up by the site-wide GTM container.
 */

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  CalendarX,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Eye,
  FileText,
  Lock,
  Moon,
  PhoneCall,
  PhoneOff,
  ShieldCheck,
  UserX,
  Users,
  X,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

/* ─── Brand tokens (Novada Workforce — control-room blue, distinct from
       the parent site's green) ─── */
const ACCENT = "#4D9FFF";
const GREEN = "#2BD98F";
const AMBER = "#FFB454";
const RED = "#FF6B6B";

const BTN_PRIMARY =
  "font-supply inline-flex items-center justify-center gap-2 rounded-lg bg-[#4D9FFF] px-7 py-4 text-sm md:text-base font-semibold uppercase tracking-[0.06em] text-[#04101f] transition-all hover:bg-[#6cb0ff] hover:shadow-[0_0_40px_rgba(77,159,255,0.35)]";
const BTN_PRIMARY_SM =
  "font-supply inline-flex items-center justify-center gap-2 rounded-lg bg-[#4D9FFF] px-4 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-[0.06em] text-[#04101f] transition-colors hover:bg-[#6cb0ff] whitespace-nowrap";
const BTN_GHOST =
  "font-supply inline-flex items-center justify-center gap-2 rounded-lg border border-[#E8ECF2]/20 px-7 py-4 text-sm md:text-base font-semibold uppercase tracking-[0.06em] text-[#E8ECF2] transition-colors hover:border-[#E8ECF2]/40 hover:bg-white/[0.03]";
const EYEBROW =
  "font-supply text-[11px] md:text-xs uppercase tracking-[0.2em] text-[#4D9FFF] mb-4";
const H2 = "text-2xl md:text-4xl font-bold tracking-tight text-white text-balance";
const CARD =
  "rounded-xl border border-[#E8ECF2]/[0.08] bg-gradient-to-br from-[#0B1119] to-[#060910]";
const BODY = "text-[#E8ECF2]/85";

function track(event: string, data?: Record<string, string>) {
  try {
    (window as unknown as { dataLayer?: Record<string, unknown>[] }).dataLayer?.push({
      event,
      ...data,
    });
  } catch {
    /* analytics must never break the page */
  }
}

function CtaLink({
  label,
  source,
  className = BTN_PRIMARY,
  href = "#assessment",
}: {
  label: string;
  source: string;
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => track("workforce_cta_click", { cta_source: source })}
    >
      {label}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}

/* ─── 01 · NAVIGATION ─── */
function WfNav() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#05070B]/95 backdrop-blur-xl border-b border-[#E8ECF2]/10">
        <div className="max-container section-padding">
          <div className="flex items-center justify-between gap-3 h-16 md:h-20">
            <a href="#top" className="flex items-baseline gap-1.5 flex-shrink-0">
              <span className="text-white font-bold text-lg md:text-xl tracking-tight">
                Novada
              </span>
              <span className="font-semibold text-lg md:text-xl tracking-tight" style={{ color: ACCENT }}>
                Workforce
              </span>
            </a>
            <nav className="hidden lg:flex items-center gap-8">
              {[
                ["How It Works", "#how"],
                ["What We Handle", "#services"],
                ["Why Novada", "#why"],
                ["Pilot", "#pilot"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-[#E8ECF2]/70 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
            <CtaLink label="Book an Assessment" source="nav" className={BTN_PRIMARY_SM} />
          </div>
        </div>
      </header>
      <div className="h-16 md:h-20" />
    </>
  );
}

/* ─── Hero dashboard mockup (brief §8 — operations system, not stock
       photos) ─── */
const HERO_CASES = [
  {
    event: "Worker Cancellation",
    shift: "RN · 10pm–7am",
    status: "Replacement Search",
    color: ACCENT,
  },
  {
    event: "Urgent Booking",
    shift: "AIN · 6am–2pm",
    status: "Worker Outreach",
    color: ACCENT,
  },
  {
    event: "No-Show",
    shift: "Support Worker",
    status: "Escalated",
    color: AMBER,
  },
  {
    event: "Worker Cancellation",
    shift: "PCA · 7am–3pm",
    status: "Replacement Found",
    color: GREEN,
  },
];

function HeroDashboard() {
  return (
    <div className={`${CARD} p-5 md:p-6 shadow-[0_24px_80px_rgba(77,159,255,0.12)]`}>
      <div className="flex items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4D9FFF] opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4D9FFF]" />
          </span>
          <span className="font-supply text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#E8ECF2]/60">
            Live After-Hours Operations
          </span>
        </div>
        <span className="font-supply text-[9px] uppercase tracking-[0.15em] text-[#E8ECF2]/35">
          Illustrative example
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          ["6", "Active Cases", "#E8ECF2"],
          ["2", "Urgent", AMBER],
          ["1", "Escalation", RED],
        ].map(([num, label, color]) => (
          <div key={label} className="rounded-lg border border-[#E8ECF2]/[0.07] bg-white/[0.02] px-3 py-3 text-center">
            <p className="font-supply text-xl md:text-2xl font-medium" style={{ color }}>
              {num}
            </p>
            <p className="font-supply mt-1 text-[9px] md:text-[10px] uppercase tracking-[0.14em] text-[#E8ECF2]/45">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        {HERO_CASES.map((c, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-3 rounded-lg border border-[#E8ECF2]/[0.06] bg-white/[0.015] px-3.5 py-3"
          >
            <div className="min-w-0">
              <p className="text-sm text-white truncate">{c.event}</p>
              <p className="font-supply text-[10px] uppercase tracking-[0.12em] text-[#E8ECF2]/45 mt-0.5">
                {c.shift}
              </p>
            </div>
            <span
              className="font-supply flex-shrink-0 rounded-full border px-2.5 py-1 text-[9px] md:text-[10px] uppercase tracking-[0.1em]"
              style={{
                color: c.color,
                borderColor: `${c.color}44`,
                backgroundColor: `${c.color}11`,
              }}
            >
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── 02 · HERO ─── */
function Hero() {
  return (
    <section id="top" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[70vh] bg-[linear-gradient(180deg,#0A1526_0%,rgba(5,7,11,0)_100%)] pointer-events-none" />
      <div className="relative max-container section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={EYEBROW}
            >
              After-Hours Workforce Operations for Healthcare Staffing Agencies
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[34px] leading-[1.1] sm:text-4xl md:text-[52px] font-bold tracking-tight text-white text-balance"
            >
              More after-hours shifts filled.{" "}
              <span style={{ color: ACCENT }}>Fewer managers on-call.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`mt-5 text-base md:text-lg ${BODY} max-w-xl leading-relaxed`}
            >
              Novada Workforce operates your after-hours staffing desk —
              handling worker cancellations, urgent client bookings,
              replacement coordination and workforce communication while your
              internal team is offline.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <CtaLink
                label="Book an After-Hours Operations Assessment"
                source="hero"
                className={`${BTN_PRIMARY} w-full sm:w-auto`}
              />
              <a href="#how" className={`${BTN_GHOST} w-full sm:w-auto`}>
                See How It Works
                <ArrowDown className="w-4 h-4" />
              </a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="font-supply mt-5 text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-[#E8ECF2]/40"
            >
              Built for Australian healthcare, aged-care and disability
              staffing operations.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── 03 · PROBLEM ─── */
const SCENARIOS = [
  {
    time: "10:47 PM",
    title: "Worker cancellation",
    quote: "“I'm sick and can't work tomorrow morning.”",
    detail:
      "Now someone has to identify the shift, find eligible replacement workers, contact them and keep the client informed.",
    icon: CalendarX,
  },
  {
    time: "4:55 AM",
    title: "Urgent client request",
    quote: "“We need another AIN for the 7am shift.”",
    detail:
      "Every minute matters when the client may have other staffing agencies available.",
    icon: PhoneCall,
  },
  {
    time: "6:42 AM",
    title: "Worker no-show",
    quote: "“Your worker hasn't arrived.”",
    detail:
      "Someone needs to contact the worker, establish what's happening, coordinate replacement if necessary and update the facility.",
    icon: UserX,
  },
];

function Problem() {
  return (
    <section className="section-padding py-16 md:py-24 border-t border-[#E8ECF2]/[0.07]">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <p className={EYEBROW}>The After-Hours Reality</p>
          <h2 className={H2}>
            Your office closes.{" "}
            <span style={{ color: ACCENT }}>Your staffing operation doesn&apos;t.</span>
          </h2>
          <p className={`mt-4 text-base md:text-lg ${BODY} max-w-2xl mx-auto leading-relaxed`}>
            Cancellations, no-shows and urgent client requests don&apos;t wait
            until business hours. When they happen overnight, on weekends or on
            public holidays, somebody still has to respond.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5">
          {SCENARIOS.map((s, i) => (
            <AnimatedSection key={s.time} delay={i * 0.08}>
              <div className={`${CARD} p-6 h-full flex flex-col`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-supply text-sm font-medium" style={{ color: AMBER }}>
                    {s.time}
                  </span>
                  <s.icon className="w-5 h-5 text-[#E8ECF2]/40" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-base text-[#E8ECF2] italic mb-3">{s.quote}</p>
                <p className="text-sm text-[#E8ECF2]/70 leading-relaxed">{s.detail}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.15} className="text-center mt-14">
          <p className="text-2xl md:text-4xl font-bold tracking-tight text-white text-balance">
            The problem isn&apos;t answering the phone.{" "}
            <span style={{ color: ACCENT }}>
              It&apos;s everything that has to happen next.
            </span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── 04 · ANSWERING SERVICE VS NOVADA ─── */
function FlowStep({ label, dim = false }: { label: string; dim?: boolean }) {
  return (
    <div
      className={`rounded-lg border px-4 py-2.5 text-sm text-center ${
        dim
          ? "border-[#E8ECF2]/[0.08] text-[#E8ECF2]/60 bg-white/[0.01]"
          : "border-[#4D9FFF]/25 text-[#E8ECF2] bg-[#4D9FFF]/[0.05]"
      }`}
    >
      {label}
    </div>
  );
}

function FlowArrow() {
  return <ArrowDown className="w-3.5 h-3.5 text-[#E8ECF2]/25 mx-auto my-1.5" />;
}

function Comparison() {
  const answering = ["Call received", "Message recorded", "Manager contacted", "Manager handles problem"];
  const novada = [
    "Issue received",
    "Triage",
    "Approved workflow initiated",
    "Worker outreach",
    "Replacement coordination",
    "Client updated",
    "Roster updated",
    "Escalate only when required",
    "Morning handover",
  ];

  return (
    <section id="why" className="section-padding py-16 md:py-24 scroll-mt-24">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <p className={EYEBROW}>Not an Answering Service</p>
          <h2 className={H2}>
            An answering service takes the message.{" "}
            <span style={{ color: ACCENT }}>We work the problem.</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <AnimatedSection>
            <div className="rounded-xl border border-[#E8ECF2]/[0.08] p-7 h-full flex flex-col">
              <div className="flex items-center gap-2.5 mb-6">
                <PhoneOff className="w-5 h-5 text-[#E8ECF2]/40" strokeWidth={1.5} />
                <h3 className="font-supply text-[11px] uppercase tracking-[0.15em] text-[#E8ECF2]/50">
                  Traditional After-Hours Answering
                </h3>
              </div>
              <div className="flex-1">
                {answering.map((s, i) => (
                  <div key={s}>
                    <FlowStep label={s} dim />
                    {i < answering.length - 1 && <FlowArrow />}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-[#E8ECF2]/[0.08]">
                <p className="text-base font-semibold text-[#E8ECF2]/70 text-center">
                  Your team is still on-call.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-xl border border-[#4D9FFF]/30 bg-gradient-to-br from-[#4D9FFF]/[0.06] to-transparent p-7 h-full flex flex-col shadow-[0_24px_80px_rgba(77,159,255,0.10)]">
              <div className="flex items-center gap-2.5 mb-6">
                <ClipboardList className="w-5 h-5" style={{ color: ACCENT }} strokeWidth={1.5} />
                <h3 className="font-supply text-[11px] uppercase tracking-[0.15em]" style={{ color: ACCENT }}>
                  Novada Workforce
                </h3>
              </div>
              <div className="flex-1">
                {novada.map((s, i) => (
                  <div key={s}>
                    <FlowStep label={s} />
                    {i < novada.length - 1 && <FlowArrow />}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-[#4D9FFF]/20">
                <p className="text-base font-semibold text-white text-center">
                  After-hours operations actually get handled.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── 05 · WHAT WE HANDLE ─── */
const SERVICES = [
  {
    title: "Worker Cancellations",
    desc: "Receive sick calls and cancellations, document the affected shift and initiate the approved replacement process.",
    icon: CalendarX,
  },
  {
    title: "Urgent Client Bookings",
    desc: "Capture urgent after-hours staffing requests and begin worker fulfilment according to your procedures.",
    icon: PhoneCall,
  },
  {
    title: "Replacement Coordination",
    desc: "Contact agency-approved workers and coordinate replacement acceptance.",
    icon: Users,
  },
  {
    title: "No-Shows & Late Workers",
    desc: "Investigate worker status, communicate updates and initiate replacement procedures when required.",
    icon: UserX,
  },
  {
    title: "Client Communication",
    desc: "Keep facilities and authorised client contacts updated throughout the staffing workflow.",
    icon: PhoneCall,
  },
  {
    title: "Escalation & Handover",
    desc: "Escalate matters that genuinely require management involvement and provide a documented morning handover.",
    icon: FileText,
  },
];

function WhatWeHandle() {
  return (
    <section id="services" className="section-padding py-16 md:py-24 border-t border-[#E8ECF2]/[0.07] scroll-mt-24">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <p className={EYEBROW}>What We Handle</p>
          <h2 className={H2}>Your after-hours workforce desk.</h2>
          <p className={`mt-4 text-base md:text-lg ${BODY} max-w-2xl mx-auto leading-relaxed`}>
            Our coordinators operate within your approved procedures and
            existing workforce systems.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <AnimatedSection key={s.title} delay={(i % 3) * 0.07}>
              <div className={`${CARD} p-6 h-full`}>
                <s.icon className="w-6 h-6 mb-4" style={{ color: ACCENT }} strokeWidth={1.5} />
                <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-[#E8ECF2]/70 leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Scope statement (§12) */}
        <AnimatedSection delay={0.15}>
          <div className="mt-8 rounded-xl border border-[#4D9FFF]/25 bg-[#4D9FFF]/[0.04] p-6 md:p-7 text-center">
            <p className="text-lg font-semibold text-white mb-2">
              Your systems remain your systems.
            </p>
            <p className={`text-sm md:text-base ${BODY} max-w-2xl mx-auto leading-relaxed`}>
              Novada Workforce does not replace your rostering platform. Our
              authorised operations team works within your existing systems and
              approved procedures.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── 06 · HOW IT WORKS ─── */
const STEPS = [
  {
    num: "01",
    title: "Connect",
    desc: "Your after-hours phone and approved operational workflows transition to Novada Workforce.",
  },
  {
    num: "02",
    title: "Operate",
    desc: "Our workforce coordinators manage approved after-hours staffing events using your procedures and existing systems.",
  },
  {
    num: "03",
    title: "Escalate",
    desc: "Only issues outside our authority or requiring management judgement are escalated according to your rules.",
  },
  {
    num: "04",
    title: "Handover",
    desc: "Your daytime team receives a clear record of what happened, what was resolved and what remains outstanding.",
  },
];

function HowItWorks() {
  return (
    <section id="how" className="section-padding py-16 md:py-24 scroll-mt-24">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <p className={EYEBROW}>How It Works</p>
          <h2 className={H2}>At close of business, we take over.</h2>
        </AnimatedSection>

        <div className="relative">
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] border-t border-dashed border-[#E8ECF2]/15" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {STEPS.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 0.08}>
                <div className="relative text-center px-2">
                  <div className="relative z-10 mx-auto w-14 h-14 rounded-full border border-[#4D9FFF]/50 bg-[#05070B] flex items-center justify-center mb-5">
                    <span className="font-supply text-sm" style={{ color: ACCENT }}>
                      {s.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-[#E8ECF2]/70 leading-relaxed max-w-[280px] mx-auto">
                    {s.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.2} className="text-center mt-12">
          <p className="text-xl md:text-2xl font-bold text-white">
            At 5pm, we take over. <span style={{ color: ACCENT }}>At 8am, we hand back.</span>
          </p>
          <p className="font-supply mt-3 text-[10px] uppercase tracking-[0.15em] text-[#E8ECF2]/40">
            Coverage times are illustrative and configured to your service agreement
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── 07 · CANCELLATION-TO-REPLACEMENT WORKFLOW ─── */
const WORKFLOW = [
  { title: "Worker cancels", detail: "10:37 PM", highlight: true },
  { title: "Shift identified", detail: "Client's existing roster checked." },
  { title: "Replacement workflow begins", detail: "Agency-approved workers identified." },
  { title: "Worker outreach", detail: "Eligible workers contacted." },
  { title: "Replacement accepts", detail: "Shift confirmed." },
  { title: "Client updated", detail: "Facility receives confirmation." },
  { title: "Roster updated", detail: "Client's existing system remains the source of truth." },
  { title: "Case closed", detail: "Full activity trail recorded.", done: true },
];

function WorkflowVisual() {
  return (
    <section className="section-padding py-16 md:py-24 border-t border-[#E8ECF2]/[0.07]">
      <div className="max-container max-w-3xl">
        <AnimatedSection className="text-center mb-12">
          <p className={EYEBROW}>The Workflow</p>
          <h2 className={H2}>From cancellation to replacement.</h2>
        </AnimatedSection>

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[13px] md:left-[17px] top-2 bottom-2 w-px bg-gradient-to-b from-[#FFB454]/60 via-[#4D9FFF]/40 to-[#2BD98F]/60" />
          <div className="space-y-6">
            {WORKFLOW.map((w, i) => (
              <AnimatedSection key={w.title} delay={i * 0.05}>
                <div className="relative">
                  <span
                    className="absolute -left-8 md:-left-10 top-1 flex h-[26px] w-[26px] md:h-[34px] md:w-[34px] items-center justify-center rounded-full border bg-[#05070B]"
                    style={{
                      borderColor: w.highlight ? `${AMBER}66` : w.done ? `${GREEN}66` : "#4D9FFF33",
                    }}
                  >
                    {w.done ? (
                      <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4" style={{ color: GREEN }} />
                    ) : (
                      <span
                        className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full"
                        style={{ backgroundColor: w.highlight ? AMBER : ACCENT }}
                      />
                    )}
                  </span>
                  <div className={`${CARD} px-5 py-4`}>
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <h3 className="text-base font-semibold text-white">{w.title}</h3>
                      {w.highlight && (
                        <span className="font-supply text-xs" style={{ color: AMBER }}>
                          {w.detail}
                        </span>
                      )}
                    </div>
                    {!w.highlight && (
                      <p className="text-sm text-[#E8ECF2]/65 mt-1">{w.detail}</p>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.2}>
          <p className={`mt-10 text-center text-base md:text-lg ${BODY}`}>
            <span className="text-white font-semibold">
              Management is only involved when the agreed escalation rules
              require it.
            </span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── 08 · MANAGEMENT BENEFIT ─── */
function ManagementBenefit() {
  const before = [
    "On-call phone",
    "Manager receives cancellation",
    "Manager searches roster",
    "Manager messages workers",
    "Manager calls facility",
    "Manager updates system",
    "Manager documents issue",
  ];
  const withNovada = [
    "Novada receives event",
    "Novada follows approved workflow",
    "Novada coordinates workers",
    "Novada updates client",
    "Novada documents activity",
  ];

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <p className={EYEBROW}>The Management Cost</p>
          <h2 className={H2}>
            Your managers shouldn&apos;t be{" "}
            <span style={{ color: ACCENT }}>the overnight operations department.</span>
          </h2>
          <p className={`mt-4 text-base md:text-lg ${BODY} max-w-2xl mx-auto leading-relaxed`}>
            When every cancellation, no-show and urgent booking ends up on a
            manager&apos;s phone, the business may technically provide 24/7
            coverage — but management never really switches off.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection>
            <div className="rounded-xl border border-[#E8ECF2]/[0.08] p-7 h-full">
              <h3 className="font-supply text-[11px] uppercase tracking-[0.15em] text-[#E8ECF2]/50 mb-5">
                Before
              </h3>
              <div className="space-y-3">
                {before.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Moon className="w-4 h-4 text-[#E8ECF2]/35 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <p className="text-sm text-[#E8ECF2]/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-xl border border-[#4D9FFF]/30 bg-gradient-to-br from-[#4D9FFF]/[0.06] to-transparent p-7 h-full flex flex-col">
              <h3 className="font-supply text-[11px] uppercase tracking-[0.15em] mb-5" style={{ color: ACCENT }}>
                With Novada
              </h3>
              <div className="space-y-3 flex-1">
                {withNovada.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} strokeWidth={1.5} />
                    <p className="text-sm text-[#E8ECF2]">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 pt-5 border-t border-[#4D9FFF]/20 text-base font-bold text-white">
                Manager contacted only when required.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── Diagnostic (§33) — placed mid-page ─── */
const DIAGNOSTIC_OPTIONS = [
  "Owner",
  "Operations Manager",
  "Roster Coordinator",
  "External Provider",
  "Nobody consistently",
];

function Diagnostic() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="section-padding py-14 md:py-20 border-t border-[#E8ECF2]/[0.07]">
      <div className="max-container max-w-3xl">
        <AnimatedSection className="text-center">
          <p className={EYEBROW}>A Quick Diagnostic</p>
          <h2 className={H2}>Who handles your 10:30pm cancellation?</h2>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {DIAGNOSTIC_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  setSelected(opt);
                  track("workforce_diagnostic_select", { answer: opt });
                }}
                className={`rounded-lg border px-5 py-3 text-sm transition-all ${
                  selected === opt
                    ? "border-[#4D9FFF] bg-[#4D9FFF]/10 text-white"
                    : "border-[#E8ECF2]/15 text-[#E8ECF2]/75 hover:border-[#E8ECF2]/35 hover:text-white"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden"
              >
                <p className={`mt-8 text-base md:text-lg ${BODY} max-w-xl mx-auto leading-relaxed`}>
                  If the answer is someone from your daytime team carrying an
                  on-call phone, there may be a better operating model.
                </p>
                <div className="mt-6">
                  <CtaLink label="Book an Assessment" source="diagnostic" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── 09 · PERFORMANCE DASHBOARD ─── */
const KPI_STATS = [
  ["184", "Cases Managed"],
  ["41", "Worker Cancellations"],
  ["31", "Successful Recoveries"],
  ["83.8%", "Cancellation Recovery Rate"],
  ["27", "Urgent Bookings"],
  ["23", "Urgent Bookings Filled"],
  ["85.2%", "Urgent Fill Rate"],
  ["95.1%", "Management Deflection"],
];

const KPI_EXPLAINERS = [
  {
    title: "Cancellation Recovery Rate",
    desc: "How many replacement-required cancellations were successfully recovered.",
  },
  {
    title: "Urgent Booking Fill Rate",
    desc: "How many urgent after-hours requests resulted in successful fills.",
  },
  {
    title: "Time to First Action",
    desc: "How quickly the operation begins responding.",
  },
  {
    title: "Management Deflection",
    desc: "How many operational cases are handled without requiring management escalation.",
  },
];

function PerformanceDashboard() {
  return (
    <section className="section-padding py-16 md:py-24">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <p className={EYEBROW}>Measured Operations</p>
          <h2 className={H2}>
            Don&apos;t just know that calls were answered.{" "}
            <span style={{ color: ACCENT }}>Know what was recovered.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className={`${CARD} p-6 md:p-8`}>
            <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
              <span className="font-supply text-[11px] uppercase tracking-[0.18em] text-[#E8ECF2]/60">
                After-Hours Performance
              </span>
              <span
                className="font-supply rounded-full border px-3 py-1 text-[9px] md:text-[10px] uppercase tracking-[0.12em]"
                style={{ color: AMBER, borderColor: `${AMBER}55`, backgroundColor: `${AMBER}11` }}
              >
                Illustrative Dashboard Example
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {KPI_STATS.map(([num, label]) => (
                <div key={label} className="rounded-lg border border-[#E8ECF2]/[0.06] bg-white/[0.015] px-4 py-5 text-center">
                  <p className="font-supply text-2xl md:text-3xl font-medium text-white">{num}</p>
                  <p className="font-supply mt-2 text-[9px] md:text-[10px] uppercase tracking-[0.12em] text-[#E8ECF2]/45 leading-relaxed">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {[
                ["1m 14s", "Median First Action"],
                ["18m", "Median Replacement Time"],
              ].map(([num, label]) => (
                <div key={label} className="rounded-lg border border-[#4D9FFF]/20 bg-[#4D9FFF]/[0.04] px-4 py-5 text-center">
                  <p className="font-supply text-2xl md:text-3xl font-medium" style={{ color: ACCENT }}>
                    {num}
                  </p>
                  <p className="font-supply mt-2 text-[10px] uppercase tracking-[0.12em] text-[#E8ECF2]/50">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {KPI_EXPLAINERS.map((k, i) => (
            <AnimatedSection key={k.title} delay={i * 0.06}>
              <div className="h-full">
                <h3 className="text-sm font-semibold text-white mb-1.5">{k.title}</h3>
                <p className="text-sm text-[#E8ECF2]/65 leading-relaxed">{k.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.1}>
          <p className={`mt-8 text-center text-sm md:text-base ${BODY}`}>
            These metrics are why an operations desk is different from call
            answering.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── 10 · MORNING HANDOVER ─── */
function MorningHandover() {
  return (
    <section className="section-padding py-16 md:py-24 border-t border-[#E8ECF2]/[0.07]">
      <div className="max-container max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <AnimatedSection>
            <p className={EYEBROW}>Morning Handover</p>
            <h2 className={H2}>
              Start the morning knowing{" "}
              <span style={{ color: ACCENT }}>exactly what happened overnight.</span>
            </h2>
            <p className={`mt-5 text-base md:text-lg ${BODY} leading-relaxed`}>
              Your daytime team receives a clear operational handover showing
              what was resolved, what was escalated and what still requires
              attention.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className={`${CARD} p-6`}>
              <div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
                <span className="font-supply text-[11px] uppercase tracking-[0.18em] text-[#E8ECF2]/60">
                  Overnight Workforce Report
                </span>
                <span className="font-supply text-[10px] uppercase tracking-[0.12em] text-[#E8ECF2]/40">
                  Coverage: 5:00 PM – 8:00 AM
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                {[
                  ["27", "Cases Managed"],
                  ["9", "Cancellations"],
                  ["7", "Replacements Confirmed"],
                  ["5", "Urgent Bookings"],
                  ["4", "Filled"],
                  ["1", "No-Show"],
                ].map(([num, label]) => (
                  <div key={label} className="rounded-lg border border-[#E8ECF2]/[0.06] bg-white/[0.015] px-3 py-3 text-center">
                    <p className="font-supply text-xl font-medium text-white">{num}</p>
                    <p className="font-supply mt-1 text-[9px] uppercase tracking-[0.1em] text-[#E8ECF2]/45">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 mb-4 text-sm text-[#E8ECF2]/70">
                <span
                  className="font-supply rounded-full border px-2.5 py-0.5 text-[10px] uppercase tracking-[0.1em]"
                  style={{ color: AMBER, borderColor: `${AMBER}44` }}
                >
                  2 Management Escalations
                </span>
              </div>

              <div className="rounded-lg border border-[#FFB454]/25 bg-[#FFB454]/[0.05] px-4 py-3.5">
                <p className="font-supply text-[10px] uppercase tracking-[0.15em] text-[#E8ECF2]/50 mb-1.5">
                  Outstanding
                </p>
                <p className="text-sm font-semibold text-white">RN — 10am shift</p>
                <p className="text-sm text-[#E8ECF2]/70 mt-0.5">
                  Replacement still required. 18 approved workers contacted.
                  Next action scheduled.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── 11 · EXISTING SYSTEMS ─── */
function ExistingSystems() {
  return (
    <section className="section-padding py-16 md:py-24">
      <div className="max-container max-w-4xl">
        <AnimatedSection className="text-center mb-12">
          <p className={EYEBROW}>Your Technology Stays</p>
          <h2 className={H2}>No workforce-platform migration required.</h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-stretch">
            <div className={`${CARD} p-6`}>
              <h3 className="font-supply text-[11px] uppercase tracking-[0.15em] text-[#E8ECF2]/50 mb-4 text-center">
                Your Existing Systems
              </h3>
              <div className="space-y-2.5">
                {["Rostering Platform", "Worker Database", "Client Records"].map((s) => (
                  <div key={s} className="rounded-lg border border-[#E8ECF2]/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-[#E8ECF2] text-center">
                    {s}
                  </div>
                ))}
              </div>
              <p className="font-supply mt-4 text-[9px] uppercase tracking-[0.12em] text-[#E8ECF2]/40 text-center">
                System of record — unchanged
              </p>
            </div>

            <div className="flex md:flex-col items-center justify-center gap-1 py-2">
              <ArrowRight className="hidden md:block w-5 h-5 text-[#4D9FFF]/60" />
              <ArrowDown className="md:hidden w-5 h-5 text-[#4D9FFF]/60" />
            </div>

            <div className="rounded-xl border border-[#4D9FFF]/30 bg-gradient-to-br from-[#4D9FFF]/[0.06] to-transparent p-6">
              <h3 className="font-supply text-[11px] uppercase tracking-[0.15em] mb-4 text-center" style={{ color: ACCENT }}>
                Novada Workforce
              </h3>
              <div className="space-y-2.5">
                {["Workflow", "Coordination", "Escalation", "Documentation", "Reporting"].map((s) => (
                  <div key={s} className="rounded-lg border border-[#4D9FFF]/20 bg-[#4D9FFF]/[0.05] px-4 py-3 text-sm text-white text-center">
                    {s}
                  </div>
                ))}
              </div>
              <p className="font-supply mt-4 text-[9px] uppercase tracking-[0.12em] text-[#E8ECF2]/40 text-center">
                The after-hours operational layer
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="text-center mt-12">
          <p className="text-2xl md:text-3xl font-bold tracking-tight text-white text-balance">
            We don&apos;t replace your workforce technology.{" "}
            <span style={{ color: ACCENT }}>We make it work after hours.</span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── 12 · OPERATING BOUNDARIES ─── */
function Boundaries() {
  const can = [
    "Worker cancellations",
    "Replacement outreach",
    "Urgent staffing requests",
    "No-show coordination",
    "Roster updates",
    "Client communication",
    "Operational documentation",
    "Management escalation",
  ];
  const cannot = [
    "Clinical decisions",
    "Credential approvals",
    "Worker disciplinary decisions",
    "Regulatory determinations",
    "Clinical suitability assessments outside your approved records",
    "Medical decisions",
  ];

  return (
    <section className="section-padding py-16 md:py-24 border-t border-[#E8ECF2]/[0.07]">
      <div className="max-container max-w-4xl">
        <AnimatedSection className="text-center mb-12">
          <p className={EYEBROW}>Operating Boundaries</p>
          <h2 className={H2}>
            Clear authority. <span style={{ color: ACCENT }}>Clear escalation.</span>
          </h2>
          <p className={`mt-4 text-base md:text-lg ${BODY} max-w-2xl mx-auto leading-relaxed`}>
            Novada operates within procedures agreed during onboarding. Our
            coordinators execute authorised workforce workflows and escalate
            decisions that should remain with your organisation.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection>
            <div className={`${CARD} p-7 h-full`}>
              <h3 className="text-base font-semibold text-white mb-5">
                We can manage approved workflows such as:
              </h3>
              <div className="space-y-3">
                {can.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: GREEN }} strokeWidth={1.5} />
                    <p className="text-sm text-[#E8ECF2]/85">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className={`${CARD} p-7 h-full`}>
              <h3 className="text-base font-semibold text-white mb-5">
                We don&apos;t independently make:
              </h3>
              <div className="space-y-3">
                {cannot.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <X className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#FF6B6B]/70" strokeWidth={1.5} />
                    <p className="text-sm text-[#E8ECF2]/85">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.15}>
          <p className={`mt-8 text-center text-sm md:text-base ${BODY} max-w-2xl mx-auto`}>
            Your organisation maintains authority over clinical, employment,
            credentialing and regulatory decisions.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── 13 · ONBOARDING (Shadow → Co-Managed → Managed) ─── */
function Onboarding() {
  const stages = [
    {
      stage: "Stage 1",
      title: "Shadow",
      desc: "We observe your existing after-hours workflows, escalation rules and systems.",
      icon: Eye,
    },
    {
      stage: "Stage 2",
      title: "Co-Managed",
      desc: "Our coordinators begin managing approved routine workflows with your team available for exceptions.",
      icon: Users,
    },
    {
      stage: "Stage 3",
      title: "Managed",
      desc: "Novada operates within the agreed playbook and escalates only where required.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <p className={EYEBROW}>Onboarding</p>
          <h2 className={H2}>We learn your operation before we run it.</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5">
          {stages.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div className={`${CARD} p-7 h-full text-center`}>
                <s.icon className="w-7 h-7 mx-auto mb-4" style={{ color: ACCENT }} strokeWidth={1.4} />
                <p className="font-supply text-[10px] uppercase tracking-[0.18em] text-[#E8ECF2]/45 mb-2">
                  {s.stage}
                </p>
                <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-sm text-[#E8ECF2]/70 leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 14 · PILOT ─── */
function Pilot() {
  const measures = [
    "After-hours staffing events",
    "Worker cancellations",
    "Replacement attempts",
    "Successful recoveries",
    "Urgent bookings",
    "Urgent booking fills",
    "Time to first action",
    "Management escalations",
    "Outstanding handovers",
  ];

  return (
    <section id="pilot" className="section-padding py-16 md:py-24 scroll-mt-24">
      <div className="max-container max-w-4xl">
        <AnimatedSection>
          <div className="rounded-2xl border border-[#4D9FFF]/30 bg-[linear-gradient(135deg,rgba(77,159,255,0.10)_0%,rgba(10,21,38,0.6)_55%,rgba(5,7,11,0.4)_100%)] p-8 md:p-12 text-center shadow-[0_32px_100px_rgba(77,159,255,0.12)]">
            <p className={EYEBROW}>30-Day Workforce Recovery Pilot</p>
            <h2 className={H2}>
              See what your after-hours operation could look like{" "}
              <span style={{ color: ACCENT }}>
                without your management team carrying it.
              </span>
            </h2>
            <p className={`mt-5 text-base md:text-lg ${BODY} max-w-2xl mx-auto leading-relaxed`}>
              We configure Novada Workforce around your existing systems and
              after-hours procedures, then measure the operational events we
              manage during the pilot.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 text-left max-w-2xl mx-auto">
              {measures.map((m) => (
                <div key={m} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: GREEN }} strokeWidth={1.5} />
                  <p className="text-sm text-[#E8ECF2]/85">{m}</p>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <CtaLink
                label="Apply for the 30-Day Pilot"
                source="pilot"
                className={`${BTN_PRIMARY} w-full sm:w-auto`}
              />
            </div>
            <p className="font-supply mt-4 text-[10px] uppercase tracking-[0.14em] text-[#E8ECF2]/40 max-w-xl mx-auto leading-relaxed">
              Pilot suitability is assessed based on staffing model,
              after-hours volume, systems and operational requirements
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── 15 · WHO IT'S FOR ─── */
function WhoFor() {
  const types = [
    "Nursing Staffing Agencies",
    "Aged-Care Staffing Agencies",
    "Disability & NDIS Staffing Agencies",
    "Healthcare Staffing Agencies",
    "Community-Care Workforce Agencies",
  ];

  return (
    <section className="section-padding py-16 md:py-24 border-t border-[#E8ECF2]/[0.07]">
      <div className="max-container max-w-4xl">
        <AnimatedSection className="text-center mb-10">
          <p className={EYEBROW}>Who It&apos;s For</p>
          <h2 className={H2}>
            Built for staffing operations that{" "}
            <span style={{ color: ACCENT }}>don&apos;t stop at 5pm.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3">
            {types.map((t) => (
              <div
                key={t}
                className="rounded-lg border border-[#E8ECF2]/[0.10] bg-white/[0.02] px-5 py-3.5 text-sm md:text-base font-medium text-[#E8ECF2]"
              >
                {t}
              </div>
            ))}
          </div>
          <p className={`mt-8 text-center text-base ${BODY} max-w-2xl mx-auto`}>
            Particularly suited to agencies providing temporary, casual,
            urgent, same-day or 24/7 workforce coverage.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── 16 · QUALIFICATION ─── */
function Qualification() {
  const fit = [
    "You provide temporary/casual healthcare or care workers.",
    "You receive staffing requests outside normal business hours.",
    "Workers cancel shifts after your office closes.",
    "Managers or daytime coordinators currently rotate an on-call phone.",
    "Your clients expect urgent or 24/7 staffing support.",
    "You're willing to provide controlled access to approved workforce systems and procedures.",
  ];
  const notFit = [
    "You only provide permanent recruitment.",
    "You have virtually no after-hours staffing activity.",
    "You only want someone to take messages.",
    "Third-party operators cannot perform any approved actions within your systems.",
  ];

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="max-container max-w-4xl">
        <AnimatedSection className="text-center mb-12">
          <p className={EYEBROW}>Fit Check</p>
          <h2 className={H2}>Is Novada Workforce right for your agency?</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection>
            <div className={`${CARD} p-7 h-full`}>
              <h3 className="text-base font-semibold mb-5" style={{ color: GREEN }}>
                Strong fit if:
              </h3>
              <div className="space-y-3.5">
                {fit.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: GREEN }} strokeWidth={1.5} />
                    <p className="text-sm text-[#E8ECF2]/85 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className={`${CARD} p-7 h-full`}>
              <h3 className="text-base font-semibold text-[#E8ECF2]/60 mb-5">
                Probably not suitable if:
              </h3>
              <div className="space-y-3.5">
                {notFit.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <X className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#FF6B6B]/70" strokeWidth={1.5} />
                    <p className="text-sm text-[#E8ECF2]/85 leading-relaxed">{item}</p>
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

/* ─── 17 · SECURITY ─── */
function Security() {
  const items = [
    {
      title: "Role-Based Access",
      desc: "Authorised operators receive controlled system access.",
      icon: Lock,
    },
    {
      title: "Client Separation",
      desc: "Operational information is segregated between client accounts.",
      icon: ShieldCheck,
    },
    {
      title: "Activity Tracking",
      desc: "Important operational actions are documented.",
      icon: FileText,
    },
    {
      title: "Minimum Necessary Data",
      desc: "The service is designed around collecting only information needed to perform approved workforce operations.",
      icon: ClipboardList,
    },
  ];

  return (
    <section className="section-padding py-16 md:py-24 border-t border-[#E8ECF2]/[0.07]">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <p className={EYEBROW}>Security &amp; Control</p>
          <h2 className={H2}>Built for controlled operations.</h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.06}>
              <div className={`${CARD} p-6 h-full`}>
                <s.icon className="w-6 h-6 mb-4" style={{ color: ACCENT }} strokeWidth={1.5} />
                <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-[#E8ECF2]/70 leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 18 · FAQ ─── */
const FAQS = [
  {
    q: "Does Novada replace our rostering software?",
    a: "No. Your existing rostering/workforce system remains your system of record. Our team works within approved access and procedures while Novada Workforce manages workflow, documentation, escalation and reporting.",
  },
  {
    q: "Do you simply answer our after-hours calls?",
    a: "No. The service is designed around operational execution rather than message taking. Within agreed authority, our team can manage staffing workflows such as cancellations, replacement outreach, urgent bookings and client updates.",
  },
  {
    q: "Can Novada guarantee every shift will be filled?",
    a: "No. Worker availability cannot be guaranteed. Novada provides structured response, outreach, coordination, documentation and escalation designed to improve how after-hours staffing events are handled.",
  },
  {
    q: "Who decides whether a worker is qualified for a shift?",
    a: "Your organisation does. Novada operates from the approved worker information, eligibility rules and procedures provided through your systems. We do not independently determine clinical competence.",
  },
  {
    q: "What happens when something requires management approval?",
    a: "The issue is escalated according to the escalation matrix agreed during onboarding.",
  },
  {
    q: "Do we need to change workforce systems?",
    a: "No. The initial service is specifically designed to operate alongside your existing technology.",
  },
  {
    q: "Can you work with our existing roster platform?",
    a: "This is assessed during onboarding. The service is designed to work with existing client systems through authorised access rather than requiring a platform migration.",
  },
  {
    q: "How quickly can we start?",
    a: "Implementation depends on the complexity of your workflows, system access and escalation procedures. Suitable agencies can begin with a controlled shadow/co-managed implementation before moving to managed after-hours operations.",
  },
  {
    q: "Is this suitable for permanent recruitment agencies?",
    a: "Generally not. Novada Workforce is primarily designed for staffing businesses managing temporary, casual or shift-based workers.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E8ECF2]/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base md:text-lg text-[#E8ECF2] group-hover:text-white transition-colors pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#E8ECF2]/50 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-base text-[#E8ECF2]/80 leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
}

function FAQ() {
  return (
    <section id="faq" className="section-padding py-16 md:py-24 scroll-mt-24">
      <div className="max-container max-w-2xl">
        <AnimatedSection className="text-center mb-10">
          <p className={EYEBROW}>FAQ</p>
          <h2 className={H2}>Straight answers.</h2>
        </AnimatedSection>
        <div>
          {FAQS.map((f) => (
            <FAQItem key={f.q} question={f.q} answer={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 19 · FINAL CTA ─── */
function FinalCta() {
  return (
    <section className="relative section-padding py-20 md:py-28 border-t border-[#E8ECF2]/[0.07] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(20,50,95,0.35)_0%,rgba(5,7,11,0)_60%)] pointer-events-none" />
      <div className="relative max-container max-w-3xl text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white text-balance">
            Find out what your after-hours operation{" "}
            <span style={{ color: ACCENT }}>is really costing you.</span>
          </h2>
          <p className={`mt-6 text-base md:text-lg ${BODY} max-w-2xl mx-auto leading-relaxed`}>
            We&apos;ll review how your agency currently handles cancellations,
            urgent bookings, no-shows and replacement shifts — and determine
            whether a specialised after-hours workforce desk makes commercial
            sense.
          </p>
          <div className="mt-9">
            <CtaLink
              label="Book an After-Hours Operations Assessment"
              source="final"
              className={`${BTN_PRIMARY} w-full sm:w-auto`}
            />
          </div>
          <p className="font-supply mt-5 text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-[#E8ECF2]/40">
            Designed for Australian healthcare, aged-care and disability
            staffing agencies.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── 20 · LEAD FORM ─── */
const AGENCY_TYPES = [
  "Healthcare Staffing",
  "Nursing Staffing",
  "Aged Care Staffing",
  "Disability / NDIS Staffing",
  "Community Care Staffing",
  "Other",
];
const WORKFORCE_SIZES = ["Under 50", "50–100", "101–250", "251–500", "501–1,000", "1,000+"];
const CURRENT_HANDLING = [
  "Owner/Director",
  "Managers rotate on-call",
  "Internal after-hours coordinators",
  "Outsourced provider",
  "No structured coverage",
  "Other",
];

const INPUT =
  "w-full rounded-lg border border-[#E8ECF2]/15 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-[#E8ECF2]/35 focus:outline-none focus:border-[#4D9FFF]/60 focus:bg-white/[0.05] transition-colors";
const SELECT = `${INPUT} appearance-none pr-10 [&>option]:bg-[#0B1119] [&>option]:text-white`;

function SelectField({
  label,
  name,
  options,
  value,
  onChange,
}: {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm text-[#E8ECF2]/75 mb-1.5">
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={SELECT}
        >
          <option value="" disabled>
            Select…
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#E8ECF2]/40" />
      </div>
    </div>
  );
}

function LeadForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const startedRef = useRef(false);
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    agencyType: "",
    workforceSize: "",
    currentHandling: "",
  });

  const set = (key: keyof typeof fields) => (v: string) => {
    if (!startedRef.current) {
      startedRef.current = true;
      track("workforce_form_start");
    }
    setFields((f) => ({ ...f, [key]: v }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/workforce-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        track("workforce_form_submit", { outcome: "success" });
        setStatus("success");
      } else {
        track("workforce_form_submit", { outcome: "error" });
        setStatus("error");
      }
    } catch {
      track("workforce_form_submit", { outcome: "network_error" });
      setStatus("error");
    }
  }

  return (
    <section id="assessment" className="section-padding pb-20 md:pb-28 scroll-mt-24">
      <div className="max-container max-w-2xl">
        <AnimatedSection>
          <div className={`${CARD} p-7 md:p-10`}>
            {status === "success" ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-5" style={{ color: GREEN }} strokeWidth={1.2} />
                <h3 className="text-2xl font-bold text-white mb-3">
                  Assessment request received.
                </h3>
                <p className={`text-base ${BODY} max-w-md mx-auto leading-relaxed`}>
                  Thank you — our team will review your after-hours operating
                  model and contact you within one business day to arrange your
                  assessment.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <p className={EYEBROW}>Request Your Assessment</p>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                    Book an After-Hours Operations Assessment
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="wf-first" className="block text-sm text-[#E8ECF2]/75 mb-1.5">
                        First Name
                      </label>
                      <input
                        id="wf-first"
                        required
                        className={INPUT}
                        value={fields.firstName}
                        onChange={(e) => set("firstName")(e.target.value)}
                        autoComplete="given-name"
                      />
                    </div>
                    <div>
                      <label htmlFor="wf-last" className="block text-sm text-[#E8ECF2]/75 mb-1.5">
                        Last Name
                      </label>
                      <input
                        id="wf-last"
                        required
                        className={INPUT}
                        value={fields.lastName}
                        onChange={(e) => set("lastName")(e.target.value)}
                        autoComplete="family-name"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="wf-email" className="block text-sm text-[#E8ECF2]/75 mb-1.5">
                        Work Email
                      </label>
                      <input
                        id="wf-email"
                        type="email"
                        required
                        className={INPUT}
                        value={fields.email}
                        onChange={(e) => set("email")(e.target.value)}
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <label htmlFor="wf-phone" className="block text-sm text-[#E8ECF2]/75 mb-1.5">
                        Phone
                      </label>
                      <input
                        id="wf-phone"
                        type="tel"
                        required
                        className={INPUT}
                        value={fields.phone}
                        onChange={(e) => set("phone")(e.target.value)}
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="wf-company" className="block text-sm text-[#E8ECF2]/75 mb-1.5">
                      Company
                    </label>
                    <input
                      id="wf-company"
                      required
                      className={INPUT}
                      value={fields.company}
                      onChange={(e) => set("company")(e.target.value)}
                      autoComplete="organization"
                    />
                  </div>

                  <SelectField
                    label="Agency Type"
                    name="wf-agency-type"
                    options={AGENCY_TYPES}
                    value={fields.agencyType}
                    onChange={set("agencyType")}
                  />
                  <SelectField
                    label="Approximate active workforce"
                    name="wf-size"
                    options={WORKFORCE_SIZES}
                    value={fields.workforceSize}
                    onChange={set("workforceSize")}
                  />
                  <SelectField
                    label="How do you currently handle after-hours staffing?"
                    name="wf-handling"
                    options={CURRENT_HANDLING}
                    value={fields.currentHandling}
                    onChange={set("currentHandling")}
                  />

                  {status === "error" && (
                    <p className="text-sm text-[#FF6B6B] text-center">
                      Something went wrong submitting your request. Please try
                      again, or email us at{" "}
                      <a href="mailto:support@novadatech.com.au" className="underline">
                        support@novadatech.com.au
                      </a>
                      .
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={`${BTN_PRIMARY} w-full disabled:opacity-60 disabled:cursor-not-allowed`}
                  >
                    {status === "submitting" ? "Submitting…" : "Request Assessment"}
                  </button>
                </form>
              </>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── 21 · FOOTER ─── */
function WfFooter() {
  return (
    <footer className="border-t border-[#E8ECF2]/[0.07] bg-[#05070B]">
      <div className="max-container section-padding py-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <div>
            <p className="text-white font-bold text-lg tracking-tight">
              Novada <span style={{ color: ACCENT }}>Workforce</span>
            </p>
            <p className="font-supply mt-1 text-[10px] uppercase tracking-[0.15em] text-[#E8ECF2]/40">
              After-Hours Workforce Operations
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-[#E8ECF2]/40">
            <a href="/privacy-policy" className="hover:text-[#E8ECF2]/70 transition-colors">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="/terms-of-service" className="hover:text-[#E8ECF2]/70 transition-colors">
              Terms
            </a>
            <span>·</span>
            <a href="mailto:support@novadatech.com.au" className="hover:text-[#E8ECF2]/70 transition-colors">
              Contact
            </a>
          </div>
          <p className="text-xs text-[#E8ECF2]/35">
            A <span className="text-[#E8ECF2]/55">Novada Tech</span> service · ©{" "}
            {new Date().getFullYear()} Novada Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function WorkforcePage() {
  useEffect(() => {
    track("workforce_page_view");
  }, []);

  return (
    <div className="bg-[#05070B] font-poppins overflow-x-clip">
      <WfNav />
      <Hero />
      <Problem />
      <Comparison />
      <WhatWeHandle />
      <HowItWorks />
      <WorkflowVisual />
      <ManagementBenefit />
      <Diagnostic />
      <PerformanceDashboard />
      <MorningHandover />
      <ExistingSystems />
      <Boundaries />
      <Onboarding />
      <Pilot />
      <WhoFor />
      <Qualification />
      <Security />
      <FAQ />
      <FinalCta />
      <LeadForm />
      <WfFooter />
    </div>
  );
}
