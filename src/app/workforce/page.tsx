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
  Check,
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
const ACCENT = "#0CC481";
const GREEN = "#0CC481";
const AMBER = "#FFB454";
const RED = "#FF6B6B";

const BTN_PRIMARY =
  "font-supply inline-flex items-center justify-center gap-2 rounded-lg bg-[#0CC481] px-7 py-4 text-sm md:text-base font-semibold uppercase tracking-[0.06em] text-[#04160e] transition-all hover:bg-[#10e094] hover:shadow-[0_0_40px_rgba(12,196,129,0.35)]";
const BTN_PRIMARY_SM =
  "font-supply inline-flex items-center justify-center gap-2 rounded-lg bg-[#0CC481] px-4 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-[0.06em] text-[#04160e] transition-colors hover:bg-[#10e094] whitespace-nowrap";
const BTN_GHOST =
  "font-supply inline-flex items-center justify-center gap-2 rounded-lg border border-[#EDECE4]/20 px-7 py-4 text-sm md:text-base font-semibold uppercase tracking-[0.06em] text-[#EDECE4] transition-colors hover:border-[#EDECE4]/40 hover:bg-white/[0.03]";
const GRAD_TEXT =
  "bg-gradient-to-r from-white to-[#0CC481] bg-clip-text text-transparent";
const EYEBROW =
  "font-supply text-[11px] md:text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-4";
const H2 = "text-2xl md:text-4xl font-bold tracking-tight text-white text-balance";
const CARD =
  "rounded-xl border border-[#EDECE4]/[0.08] bg-gradient-to-br from-[#111413] to-[#050808]";
const BODY = "text-[#EDECE4]/85";

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-xl border-b border-[#EDECE4]/10">
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
                ["Cost Calculator", "#calculator"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-[#EDECE4]/70 hover:text-white transition-colors"
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

/* ─── Hero visual: a human moment, not a dashboard (CRO pass 2026-08-20).
       The service is people working the problem; the visual shows exactly
       that: a worker cancelling, a coordinator responding within a minute,
       and the night's work done before the client's team wakes up. ─── */
function HeroConversation() {
  return (
    <div className={`${CARD} p-5 md:p-6 shadow-[0_24px_80px_rgba(12,196,129,0.12)]`}>
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0CC481] opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0CC481]" />
          </span>
          <span className="font-supply text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#EDECE4]/60">
            10:47 PM · A worker cancels
          </span>
        </div>
        <span className="font-supply text-[9px] uppercase tracking-[0.15em] text-[#EDECE4]/35">
          Illustrative example
        </span>
      </div>

      {/* Worker message */}
      <div className="max-w-[85%]">
        <div className="rounded-2xl rounded-bl-md border border-[#EDECE4]/[0.10] bg-white/[0.04] px-4 py-3">
          <p className="text-sm text-[#EDECE4] leading-relaxed">
            Hi, I&apos;m really unwell. I can&apos;t make tomorrow&apos;s 6am
            shift, I&apos;m so sorry.
          </p>
        </div>
        <p className="font-supply mt-1 text-[9px] uppercase tracking-[0.12em] text-[#EDECE4]/35">
          Support worker · 10:47 PM
        </p>
      </div>

      {/* Coordinator reply */}
      <div className="max-w-[85%] ml-auto mt-3 text-right">
        <div className="rounded-2xl rounded-br-md border border-[#0CC481]/25 bg-[#0CC481]/[0.08] px-4 py-3 text-left">
          <p className="text-sm text-[#EDECE4] leading-relaxed">
            Thanks for letting us know, rest up and feel better. We&apos;re
            arranging your cover now and we&apos;ll keep the client informed.
          </p>
        </div>
        <p className="font-supply mt-1 text-[9px] uppercase tracking-[0.12em] text-[#0CC481]/70">
          Your Novada coordinator · 10:48 PM
        </p>
      </div>

      {/* The night's work */}
      <div className="mt-4 pt-4 border-t border-[#EDECE4]/[0.08] space-y-2">
        {[
          ["Roster checked, eligible workers identified", "10:50 PM"],
          ["6 approved workers contacted", "10:52 PM"],
          ["Replacement accepted the shift", "11:01 PM"],
          ["Client informed · roster updated", "11:04 PM"],
        ].map(([step, time]) => (
          <div key={time} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <Check className="w-3.5 h-3.5 text-[#0CC481] flex-shrink-0" strokeWidth={2} />
              <span className="text-xs text-[#EDECE4]/80 truncate">{step}</span>
            </div>
            <span className="font-supply text-[9px] uppercase tracking-[0.1em] text-[#EDECE4]/40 flex-shrink-0">{time}</span>
          </div>
        ))}
        <div className="flex items-center justify-between gap-3 rounded-lg border border-[#0CC481]/25 bg-[#0CC481]/[0.06] px-3 py-2 mt-1">
          <span className="text-xs font-medium text-white">
            Case closed. In your morning handover.
          </span>
          <span className="font-supply text-[9px] uppercase tracking-[0.1em] text-[#0CC481]">11:08 PM</span>
        </div>
      </div>
    </div>
  );
}

/* ─── 02 · HERO ─── */
function Hero() {
  return (
    <section id="top" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[70vh] bg-[linear-gradient(180deg,#0F1C1C_0%,rgba(5,7,11,0)_100%)] pointer-events-none" />
      <div className="relative max-container section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={EYEBROW}
            >
              After-Hours Workforce Operations · Australian Healthcare, Aged Care &amp; NDIS Providers
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[34px] leading-[1.1] sm:text-4xl md:text-[52px] font-bold tracking-tight text-white text-balance"
            >
              More after-hours shifts filled.{" "}
              <span className={GRAD_TEXT}>Fewer managers on-call.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`mt-5 text-base md:text-lg ${BODY} max-w-xl leading-relaxed`}
            >
              Our trained coordinators run your after-hours staffing desk:
              worker cancellations, urgent client bookings, replacement
              coordination and client communication, handled inside your
              existing systems while your team is offline. A real after-hours
              team, not another platform.
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
              <a
                href="#calculator"
                className={`${BTN_GHOST} w-full sm:w-auto`}
                onClick={() => track("workforce_cta_click", { cta_source: "hero-calculator" })}
              >
                Calculate What After-Hours Is Costing You
                <ArrowDown className="w-4 h-4" />
              </a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="font-supply mt-5 text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-[#EDECE4]/40"
            >
              Built for Australian healthcare, aged care and NDIS/disability
              providers.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <HeroConversation />
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
    <section className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/[0.07]">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <p className={EYEBROW}>The After-Hours Reality</p>
          <h2 className={H2}>
            Your office closes.{" "}
            <span className={GRAD_TEXT}>Your staffing operation doesn&apos;t.</span>
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
                  <s.icon className="w-5 h-5 text-[#EDECE4]/40" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-base text-[#EDECE4] italic mb-3">{s.quote}</p>
                <p className="text-sm text-[#EDECE4]/70 leading-relaxed">{s.detail}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.15} className="text-center mt-14">
          <p className="text-2xl md:text-4xl font-bold tracking-tight text-white text-balance">
            The problem isn&apos;t answering the phone.{" "}
            <span className={GRAD_TEXT}>
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
          ? "border-[#EDECE4]/[0.08] text-[#EDECE4]/60 bg-white/[0.01]"
          : "border-[#0CC481]/25 text-[#EDECE4] bg-[#0CC481]/[0.05]"
      }`}
    >
      {label}
    </div>
  );
}

function FlowArrow() {
  return <ArrowDown className="w-3.5 h-3.5 text-[#EDECE4]/25 mx-auto my-1.5" />;
}

function Comparison() {
  const answering = ["Call received", "Message recorded", "Manager contacted", "Manager handles problem"];
  const novada = [
    "A coordinator answers",
    "We find the affected shift",
    "The replacement search starts",
    "Your approved workers called and texted",
    "Cover locked in",
    "Your client told tonight",
    "Your roster updated",
    "We only wake you if your rules say so",
    "Written handover by 8am",
  ];

  return (
    <section id="why" className="section-padding py-16 md:py-24 scroll-mt-24">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <p className={EYEBROW}>Not an Answering Service</p>
          <h2 className={H2}>
            An answering service takes the message.{" "}
            <span className={GRAD_TEXT}>We work the problem.</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <AnimatedSection>
            <div className="rounded-xl border border-[#EDECE4]/[0.08] p-7 h-full flex flex-col">
              <div className="flex items-center gap-2.5 mb-6">
                <PhoneOff className="w-5 h-5 text-[#EDECE4]/40" strokeWidth={1.5} />
                <h3 className="font-supply text-[11px] uppercase tracking-[0.15em] text-[#EDECE4]/50">
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
              <div className="mt-6 pt-5 border-t border-[#EDECE4]/[0.08]">
                <p className="text-base font-semibold text-[#EDECE4]/70 text-center">
                  Your team is still on-call.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-xl border border-[#0CC481]/30 bg-gradient-to-br from-[#0CC481]/[0.06] to-transparent p-7 h-full flex flex-col shadow-[0_24px_80px_rgba(12,196,129,0.10)]">
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
              <div className="mt-6 pt-5 border-t border-[#0CC481]/20">
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
    desc: "We take the sick call, find the affected shift and start lining up a replacement straight away.",
    icon: CalendarX,
  },
  {
    title: "Urgent Client Bookings",
    desc: "A client needs someone for the morning? We take the request and start filling it your way, immediately.",
    icon: PhoneCall,
  },
  {
    title: "Replacement Coordination",
    desc: "We call and text your approved workers, manage the replies and lock in the cover.",
    icon: Users,
  },
  {
    title: "No-Shows & Late Workers",
    desc: "We chase the worker, find out what is happening, keep everyone informed and line up cover if it is needed.",
    icon: UserX,
  },
  {
    title: "Client Communication",
    desc: "We keep facilities and authorised client contacts in the loop, so nobody is left waiting for your office to open.",
    icon: PhoneCall,
  },
  {
    title: "Escalation & Handover",
    desc: "We only wake your managers when your rules say to, and your daytime team gets a full written handover.",
    icon: FileText,
  },
];

function WhatWeHandle() {
  return (
    <section id="services" className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/[0.07] scroll-mt-24">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <p className={EYEBROW}>What We Handle</p>
          <h2 className={H2}>Your after-hours workforce desk.</h2>
          <p className={`mt-4 text-base md:text-lg ${BODY} max-w-2xl mx-auto leading-relaxed`}>
            Real coordinators, working from your procedures, in your systems, all night.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <AnimatedSection key={s.title} delay={(i % 3) * 0.07}>
              <div className={`${CARD} p-6 h-full`}>
                <s.icon className="w-6 h-6 mb-4" style={{ color: ACCENT }} strokeWidth={1.5} />
                <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-[#EDECE4]/70 leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Scope statement (§12) */}
        <AnimatedSection delay={0.15}>
          <div className="mt-8 rounded-xl border border-[#0CC481]/25 bg-[#0CC481]/[0.04] p-6 md:p-7 text-center">
            <p className="text-lg font-semibold text-white mb-2">
              Your systems remain your systems.
            </p>
            <p className={`text-sm md:text-base ${BODY} max-w-2xl mx-auto leading-relaxed`}>
              Novada Workforce does not replace your rostering platform. Our coordinators log in to the systems you already use and work them the way your team does.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── WHO ANSWERS THE PHONE (CRO pass 2026-08-20: the page sells a human
       service; this section puts the humans on the page) ─── */
function RealPeople() {
  return (
    <section className="section-padding py-16 md:py-24">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <p className={EYEBROW}>Who Answers The Phone</p>
          <h2 className={H2}>
            A trained team answers. <span className={GRAD_TEXT}>Every night.</span>
          </h2>
          <p className={`mt-4 text-base md:text-lg ${BODY} max-w-2xl mx-auto leading-relaxed`}>
            Not an app. Not a bot. Not a message bank. Workforce coordinators
            who work staffing events for a living, on duty through the hours
            your team is not.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          <AnimatedSection>
            <div className={`${CARD} p-7 h-full text-center`}>
              <Users className="w-7 h-7 mx-auto mb-4" style={{ color: ACCENT }} strokeWidth={1.4} />
              <h3 className="text-lg font-semibold text-white mb-2">Trained coordinators</h3>
              <p className="text-sm text-[#EDECE4]/70 leading-relaxed">
                People who answer, triage and get to work within minutes,
                because a 6am shift can&apos;t wait for the morning.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <div className={`${CARD} p-7 h-full text-center`}>
              <ClipboardList className="w-7 h-7 mx-auto mb-4" style={{ color: ACCENT }} strokeWidth={1.4} />
              <h3 className="text-lg font-semibold text-white mb-2">Working your rules</h3>
              <p className="text-sm text-[#EDECE4]/70 leading-relaxed">
                They operate from your written playbook, inside your systems,
                and your escalation rules decide when anyone wakes you.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.16}>
            <div className={`${CARD} p-7 h-full text-center`}>
              <PhoneCall className="w-7 h-7 mx-auto mb-4" style={{ color: ACCENT }} strokeWidth={1.4} />
              <h3 className="text-lg font-semibold text-white mb-2">Calls, texts, confirmations</h3>
              <p className="text-sm text-[#EDECE4]/70 leading-relaxed">
                Worker outreach, client updates and roster changes are done by
                people and documented for your 8am handover.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div>
              <div className="rounded-xl overflow-hidden border border-[#EDECE4]/[0.10]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/workforce/coordinator.jpg"
                  alt="Julie, workforce coordinator, taking an after-hours call"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <p className="font-supply mt-3 text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/50">
                Julie · Workforce Coordinator · On the desk after hours
              </p>
            </div>
            <div className="border-l-2 border-[#0CC481] pl-6 md:pl-8">
              <p className={EYEBROW}>A Note From The Founder</p>
            <p className="text-lg md:text-xl text-[#EDECE4] leading-relaxed">
              &ldquo;We built Novada Workforce because we kept seeing the same
              thing: good providers delivering great care all day, then a
              manager running the whole operation again all night from a
              mobile phone. Fixing that shouldn&apos;t mean buying new
              software or handing your clients to a call centre. It means
              capable people, working your rules, inside your systems, who
              treat your 2am problem like it&apos;s their own. That&apos;s the
              team we&apos;ve built, and the standard we hold every single
              night.&rdquo;
            </p>
            <p className="mt-5 text-base text-white">Ade Eni</p>
            <p className="font-supply text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/40 mt-1">
              Founder, Novada Workforce
            </p>
            </div>
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
    desc: "At close of business, your after-hours line diverts to our coordinators. No new software, no migration.",
  },
  {
    num: "02",
    title: "Operate",
    desc: "Our coordinators answer the calls, fill the shifts and keep your clients informed, your way.",
  },
  {
    num: "03",
    title: "Escalate",
    desc: "We only call your managers when your rules say we should. Everything else, we handle.",
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
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] border-t border-dashed border-[#EDECE4]/15" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {STEPS.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 0.08}>
                <div className="relative text-center px-2">
                  <div className="relative z-10 mx-auto w-14 h-14 rounded-full border border-[#0CC481]/50 bg-[#080808] flex items-center justify-center mb-5">
                    <span className="font-supply text-sm" style={{ color: ACCENT }}>
                      {s.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-[#EDECE4]/70 leading-relaxed max-w-[280px] mx-auto">
                    {s.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.2} className="text-center mt-12">
          <p className="text-xl md:text-2xl font-bold text-white">
            At 5pm, we take over. <span className={GRAD_TEXT}>At 8am, we hand back.</span>
          </p>
          <p className="font-supply mt-3 text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/40">
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
  { title: "The search begins", detail: "Your approved workers shortlisted." },
  { title: "Calls and texts go out", detail: "Eligible workers contacted, replies managed." },
  { title: "Replacement accepts", detail: "Shift confirmed." },
  { title: "Client updated", detail: "Facility receives confirmation." },
  { title: "Roster updated", detail: "Client's existing system remains the source of truth." },
  { title: "Wrapped up", detail: "Everything written down for your morning handover.", done: true },
];

function WorkflowVisual() {
  return (
    <section className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/[0.07]">
      <div className="max-container max-w-3xl">
        <AnimatedSection className="text-center mb-12">
          <p className={EYEBROW}>The Workflow</p>
          <h2 className={H2}>From cancellation to replacement.</h2>
        </AnimatedSection>

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[13px] md:left-[17px] top-2 bottom-2 w-px bg-gradient-to-b from-[#FFB454]/60 via-[#0CC481]/40 to-[#0CC481]/60" />
          <div className="space-y-6">
            {WORKFLOW.map((w, i) => (
              <AnimatedSection key={w.title} delay={i * 0.05}>
                <div className="relative">
                  <span
                    className="absolute -left-8 md:-left-10 top-1 flex h-[26px] w-[26px] md:h-[34px] md:w-[34px] items-center justify-center rounded-full border bg-[#080808]"
                    style={{
                      borderColor: w.highlight ? `${AMBER}66` : w.done ? `${GREEN}66` : "#0CC48133",
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
                      <p className="text-sm text-[#EDECE4]/65 mt-1">{w.detail}</p>
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
    "Our coordinator takes the call",
    "They work your playbook",
    "They ring workers and fill the shift",
    "They update your client",
    "They write everything down",
  ];

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <p className={EYEBROW}>The Management Cost</p>
          <h2 className={H2}>
            Your managers shouldn&apos;t be{" "}
            <span className={GRAD_TEXT}>the overnight operations department.</span>
          </h2>
          <p className={`mt-4 text-base md:text-lg ${BODY} max-w-2xl mx-auto leading-relaxed`}>
            When every cancellation, no-show and urgent booking ends up on a
            manager&apos;s phone, the business may technically provide 24/7
            coverage — but management never really switches off.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection>
            <div className="rounded-xl border border-[#EDECE4]/[0.08] p-7 h-full">
              <h3 className="font-supply text-[11px] uppercase tracking-[0.15em] text-[#EDECE4]/50 mb-5">
                Before
              </h3>
              <div className="space-y-3">
                {before.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Moon className="w-4 h-4 text-[#EDECE4]/35 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <p className="text-sm text-[#EDECE4]/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-xl border border-[#0CC481]/30 bg-gradient-to-br from-[#0CC481]/[0.06] to-transparent p-7 h-full flex flex-col">
              <h3 className="font-supply text-[11px] uppercase tracking-[0.15em] mb-5" style={{ color: ACCENT }}>
                With Novada
              </h3>
              <div className="space-y-3 flex-1">
                {withNovada.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} strokeWidth={1.5} />
                    <p className="text-sm text-[#EDECE4]">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 pt-5 border-t border-[#0CC481]/20 text-base font-bold text-white">
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
    <section className="section-padding py-14 md:py-20 border-t border-[#EDECE4]/[0.07]">
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
                    ? "border-[#0CC481] bg-[#0CC481]/10 text-white"
                    : "border-[#EDECE4]/15 text-[#EDECE4]/75 hover:border-[#EDECE4]/35 hover:text-white"
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
            <span className={GRAD_TEXT}>Know what was recovered.</span>
          </h2>
          <p className={`mt-4 text-base md:text-lg ${BODY} max-w-2xl mx-auto leading-relaxed`}>
            Every month, your coordination team prepares this report for you,
            so after-hours performance stops being a mystery.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className={`${CARD} p-6 md:p-8`}>
            <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
              <span className="font-supply text-[11px] uppercase tracking-[0.18em] text-[#EDECE4]/60">
                Your Monthly Operations Report
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
                <div key={label} className="rounded-lg border border-[#EDECE4]/[0.06] bg-white/[0.015] px-4 py-5 text-center">
                  <p className="font-supply text-2xl md:text-3xl font-medium text-white">{num}</p>
                  <p className="font-supply mt-2 text-[9px] md:text-[10px] uppercase tracking-[0.12em] text-[#EDECE4]/45 leading-relaxed">
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
                <div key={label} className="rounded-lg border border-[#0CC481]/20 bg-[#0CC481]/[0.04] px-4 py-5 text-center">
                  <p className="font-supply text-2xl md:text-3xl font-medium" style={{ color: ACCENT }}>
                    {num}
                  </p>
                  <p className="font-supply mt-2 text-[10px] uppercase tracking-[0.12em] text-[#EDECE4]/50">
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
                <p className="text-sm text-[#EDECE4]/65 leading-relaxed">{k.desc}</p>
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
    <section className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/[0.07]">
      <div className="max-container max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <AnimatedSection>
            <p className={EYEBROW}>Morning Handover</p>
            <h2 className={H2}>
              Start the morning knowing{" "}
              <span className={GRAD_TEXT}>exactly what happened overnight.</span>
            </h2>
            <p className={`mt-5 text-base md:text-lg ${BODY} leading-relaxed`}>
              Prepared by the coordinators who worked the night: a clear
              handover showing what was resolved, what was escalated and what
              still requires your team&apos;s attention.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className={`${CARD} p-6`}>
              <div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
                <span className="font-supply text-[11px] uppercase tracking-[0.18em] text-[#EDECE4]/60">
                  Overnight Workforce Report
                </span>
                <span className="font-supply text-[10px] uppercase tracking-[0.12em] text-[#EDECE4]/40">
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
                  <div key={label} className="rounded-lg border border-[#EDECE4]/[0.06] bg-white/[0.015] px-3 py-3 text-center">
                    <p className="font-supply text-xl font-medium text-white">{num}</p>
                    <p className="font-supply mt-1 text-[9px] uppercase tracking-[0.1em] text-[#EDECE4]/45">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 mb-4 text-sm text-[#EDECE4]/70">
                <span
                  className="font-supply rounded-full border px-2.5 py-0.5 text-[10px] uppercase tracking-[0.1em]"
                  style={{ color: AMBER, borderColor: `${AMBER}44` }}
                >
                  2 Management Escalations
                </span>
              </div>

              <div className="rounded-lg border border-[#FFB454]/25 bg-[#FFB454]/[0.05] px-4 py-3.5">
                <p className="font-supply text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/50 mb-1.5">
                  Outstanding
                </p>
                <p className="text-sm font-semibold text-white">RN — 10am shift</p>
                <p className="text-sm text-[#EDECE4]/70 mt-0.5">
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
              <h3 className="font-supply text-[11px] uppercase tracking-[0.15em] text-[#EDECE4]/50 mb-4 text-center">
                Your Existing Systems
              </h3>
              <div className="space-y-2.5">
                {["Rostering Platform", "Worker Database", "Client Records"].map((s) => (
                  <div key={s} className="rounded-lg border border-[#EDECE4]/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-[#EDECE4] text-center">
                    {s}
                  </div>
                ))}
              </div>
              <p className="font-supply mt-4 text-[9px] uppercase tracking-[0.12em] text-[#EDECE4]/40 text-center">
                Your records, your rules, unchanged
              </p>
            </div>

            <div className="flex md:flex-col items-center justify-center gap-1 py-2">
              <ArrowRight className="hidden md:block w-5 h-5 text-[#0CC481]/60" />
              <ArrowDown className="md:hidden w-5 h-5 text-[#0CC481]/60" />
            </div>

            <div className="rounded-xl border border-[#0CC481]/30 bg-gradient-to-br from-[#0CC481]/[0.06] to-transparent p-6">
              <h3 className="font-supply text-[11px] uppercase tracking-[0.15em] mb-4 text-center" style={{ color: ACCENT }}>
                Novada Workforce
              </h3>
              <div className="space-y-2.5">
                {["Calls answered", "Shifts filled", "Clients updated", "Escalations made", "Handovers written"].map((s) => (
                  <div key={s} className="rounded-lg border border-[#0CC481]/20 bg-[#0CC481]/[0.05] px-4 py-3 text-sm text-white text-center">
                    {s}
                  </div>
                ))}
              </div>
              <p className="font-supply mt-4 text-[9px] uppercase tracking-[0.12em] text-[#EDECE4]/40 text-center">
                Your after-hours team
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="text-center mt-12">
          <p className="text-2xl md:text-3xl font-bold tracking-tight text-white text-balance">
            We don&apos;t replace your workforce technology.{" "}
            <span className={GRAD_TEXT}>We make it work after hours.</span>
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
    <section className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/[0.07]">
      <div className="max-container max-w-4xl">
        <AnimatedSection className="text-center mb-12">
          <p className={EYEBROW}>Operating Boundaries</p>
          <h2 className={H2}>
            Clear authority. <span className={GRAD_TEXT}>Clear escalation.</span>
          </h2>
          <p className={`mt-4 text-base md:text-lg ${BODY} max-w-2xl mx-auto leading-relaxed`}>
            Our coordinators do what you have authorised, the way you have documented it, and bring everything else to you.
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
                    <p className="text-sm text-[#EDECE4]/85">{item}</p>
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
                    <p className="text-sm text-[#EDECE4]/85">{item}</p>
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
      desc: "We watch how your team handles real nights, and learn your systems, your rules and your clients.",
      icon: Eye,
    },
    {
      stage: "Stage 2",
      title: "Co-Managed",
      desc: "Our coordinators start taking the routine nights, with your team a phone call away.",
      icon: Users,
    },
    {
      stage: "Stage 3",
      title: "Managed",
      desc: "We run your after-hours desk night after night, and only call when your rules say so.",
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

        <AnimatedSection>
          <div className="rounded-xl overflow-hidden border border-[#EDECE4]/[0.10] mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/workforce/coordination-team.jpg"
              alt="Two Novada Workforce coordinators working through the night's priorities together"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <p className="font-supply mb-8 text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/50">
            The coordination desk, after hours
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5">
          {stages.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div className={`${CARD} p-7 h-full text-center`}>
                <s.icon className="w-7 h-7 mx-auto mb-4" style={{ color: ACCENT }} strokeWidth={1.4} />
                <p className="font-supply text-[10px] uppercase tracking-[0.18em] text-[#EDECE4]/45 mb-2">
                  {s.stage}
                </p>
                <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-sm text-[#EDECE4]/70 leading-relaxed">{s.desc}</p>
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
          <div className="rounded-2xl border border-[#0CC481]/30 bg-[linear-gradient(135deg,rgba(12,196,129,0.10)_0%,rgba(15,28,28,0.6)_55%,rgba(5,7,11,0.4)_100%)] p-8 md:p-12 text-center shadow-[0_32px_100px_rgba(12,196,129,0.12)]">
            <p className={EYEBROW}>30-Day Workforce Recovery Pilot</p>
            <h2 className={H2}>
              See what your after-hours operation could look like{" "}
              <span className={GRAD_TEXT}>
                without your management team carrying it.
              </span>
            </h2>
            <p className={`mt-5 text-base md:text-lg ${BODY} max-w-2xl mx-auto leading-relaxed`}>
              We learn your systems and your procedures, then our coordinators run your after-hours desk for 30 measured days.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 text-left max-w-2xl mx-auto">
              {measures.map((m) => (
                <div key={m} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: GREEN }} strokeWidth={1.5} />
                  <p className="text-sm text-[#EDECE4]/85">{m}</p>
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
            <p className="font-supply mt-4 text-[10px] uppercase tracking-[0.14em] text-[#EDECE4]/40 max-w-xl mx-auto leading-relaxed">
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
    "NDIS & Disability Providers",
    "Aged Care Providers",
    "Home Care Providers",
    "Community Nursing",
    "…and the Agencies That Staff Them",
  ];

  return (
    <section className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/[0.07]">
      <div className="max-container max-w-4xl">
        <AnimatedSection className="text-center mb-10">
          <p className={EYEBROW}>Who It&apos;s For</p>
          <h2 className={H2}>
            Built for staffing operations that{" "}
            <span className={GRAD_TEXT}>don&apos;t stop at 5pm.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3">
            {types.map((t) => (
              <div
                key={t}
                className="rounded-lg border border-[#EDECE4]/[0.10] bg-white/[0.02] px-5 py-3.5 text-sm md:text-base font-medium text-[#EDECE4]"
              >
                {t}
              </div>
            ))}
          </div>
          <p className={`mt-8 text-center text-base ${BODY} max-w-2xl mx-auto`}>
            Particularly suited to providers and staffing agencies delivering
            temporary, casual, urgent, same-day or 24/7 workforce coverage.
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
          <h2 className={H2}>Is Novada Workforce right for your organisation?</h2>
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
                    <p className="text-sm text-[#EDECE4]/85 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className={`${CARD} p-7 h-full`}>
              <h3 className="text-base font-semibold text-[#EDECE4]/60 mb-5">
                Probably not suitable if:
              </h3>
              <div className="space-y-3.5">
                {notFit.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <X className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#FF6B6B]/70" strokeWidth={1.5} />
                    <p className="text-sm text-[#EDECE4]/85 leading-relaxed">{item}</p>
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
      title: "Only Authorised Coordinators",
      desc: "Named, authorised coordinators receive access, scoped to exactly what you approve.",
      icon: Lock,
    },
    {
      title: "Your Information Stays Yours",
      desc: "Nothing about your business is ever mixed with another client's.",
      icon: ShieldCheck,
    },
    {
      title: "Everything Written Down",
      desc: "Every important action is documented, so you can always see what was done and when.",
      icon: FileText,
    },
    {
      title: "Only What We Need",
      desc: "We work with the minimum information needed to fill shifts and keep clients informed. Nothing more.",
      icon: ClipboardList,
    },
  ];

  return (
    <section className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/[0.07]">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <p className={EYEBROW}>Security &amp; Control</p>
          <h2 className={H2}>Careful with your systems. Careful with your information.</h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.06}>
              <div className={`${CARD} p-6 h-full`}>
                <s.icon className="w-6 h-6 mb-4" style={{ color: ACCENT }} strokeWidth={1.5} />
                <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-[#EDECE4]/70 leading-relaxed">{s.desc}</p>
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
    a: "No. You keep the rostering system you have today. Our coordinators log in with the access you approve and work it the way your team does. The only thing that changes is who is doing the work at night.",
  },
  {
    q: "Do you simply answer our after-hours calls?",
    a: "No. Taking the message is where our work starts, not where it ends. Our coordinators actually fill the shift: they contact your workers, arrange the replacement, update your client and your roster, and write it all down for the morning.",
  },
  {
    q: "Can Novada guarantee every shift will be filled?",
    a: "No, and be careful of anyone who promises that. Nobody can conjure workers who are not there. What we promise: a coordinator starts working on it within minutes, every approved worker is contacted, you are kept informed, and nothing goes undocumented.",
  },
  {
    q: "Who decides whether a worker is qualified for a shift?",
    a: "You do, always. Our coordinators only contact workers your records mark as approved and eligible for that shift. We never make our own judgement about clinical competence.",
  },
  {
    q: "What happens when something requires management approval?",
    a: "Your escalation rules decide. If it is on your wake-me list, we call the right person with full context. If it is not, we handle it, and you read about it in the morning handover.",
  },
  {
    q: "Do we need to change workforce systems?",
    a: "No. Our coordinators work inside whatever you use today. Nothing is migrated, nothing is replaced.",
  },
  {
    q: "Can you work with our existing roster platform?",
    a: "Almost certainly. We work in your platform with logins you authorise, and we confirm the details during onboarding. You never migrate anything.",
  },
  {
    q: "How quickly can we start?",
    a: "We learn your operation first: a few shadow nights watching how your team works, then co-managing with your team a call away, then the full desk. Simple operations move fast; complex ones take longer, and we will give you an honest timeline at the assessment.",
  },
  {
    q: "Is this suitable for permanent recruitment agencies?",
    a: "Generally not. Novada Workforce is primarily designed for staffing businesses managing temporary, casual or shift-based workers.",
  },
];

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
        <p className="pb-6 text-base text-[#EDECE4]/80 leading-relaxed">{answer}</p>
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

/* ─── 19 · FINAL CTA + LEAKAGE CALCULATOR ─── */
const fmtAud = (n: number) => `$${Math.round(n).toLocaleString("en-AU")}`;

function NumberField({
  label,
  value,
  onChange,
  prefix,
  suffix,
  min = 0,
  step = 1,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  step?: number;
}) {
  return (
    <div>
      <label className="block text-sm text-[#EDECE4]/75 mb-1.5">{label}</label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-[#EDECE4]/45">
            {prefix}
          </span>
        )}
        <input
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={Number.isFinite(value) ? value : ""}
          onChange={(e) => onChange(Math.max(min, Number(e.target.value)))}
          className={`w-full rounded-lg border border-[#EDECE4]/15 bg-white/[0.03] py-3 text-sm text-white focus:outline-none focus:border-[#0CC481]/60 focus:bg-white/[0.05] transition-colors ${
            prefix ? "pl-8" : "pl-4"
          } ${suffix ? "pr-16" : "pr-4"}`}
        />
        {suffix && (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#EDECE4]/45">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function PercentSlider({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-sm text-[#EDECE4]/75">{label}</label>
        <span className="font-supply text-sm text-[#0CC481]">{value}%</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        step={5}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#0CC481] cursor-pointer"
      />
    </div>
  );
}

/* Modelled improvement applied to the "potential value" figure. Kept
   deliberately conservative and clearly labelled as an illustrative
   scenario — NOT a performance promise (same honesty rule as the KPI
   dashboard; the FAQ explicitly says fills can't be guaranteed). */
const IMPROVEMENT_PTS = 15;
const IMPROVEMENT_CAP = 95;

function LeakageCalculator() {
  const trackedRef = useRef(false);
  const [inputs, setInputs] = useState({
    billRate: 65,
    workerCost: 48,
    shiftHours: 8,
    requests: 30,
    fillRate: 60,
    cancellations: 25,
    recoveryRate: 40,
  });

  const set = (key: keyof typeof inputs) => (v: number) => {
    if (!trackedRef.current) {
      trackedRef.current = true;
      track("workforce_calculator_use");
    }
    setInputs((s) => ({ ...s, [key]: v }));
  };

  const { billRate, workerCost, shiftHours, requests, fillRate, cancellations, recoveryRate } =
    inputs;

  const marginPerHour = Math.max(billRate - workerCost, 0);
  const revenuePerShift = billRate * shiftHours;
  const marginPerShift = marginPerHour * shiftHours;

  // Current monthly leakage
  const lostUnfilled = requests * (1 - fillRate / 100);
  const lostUnrecovered = cancellations * (1 - recoveryRate / 100);
  const lostShifts = lostUnfilled + lostUnrecovered;
  const revenueLeakage = lostShifts * revenuePerShift;
  const marginLeakage = lostShifts * marginPerShift;

  // Modelled improvement scenario (+pts, capped; never below current)
  const improvedFill = Math.min(fillRate + IMPROVEMENT_PTS, Math.max(IMPROVEMENT_CAP, fillRate));
  const improvedRecovery = Math.min(
    recoveryRate + IMPROVEMENT_PTS,
    Math.max(IMPROVEMENT_CAP, recoveryRate),
  );
  const regainedShifts =
    requests * ((improvedFill - fillRate) / 100) +
    cancellations * ((improvedRecovery - recoveryRate) / 100);
  const potentialRevenue = regainedShifts * revenuePerShift;
  const potentialMargin = regainedShifts * marginPerShift;

  return (
    <div className={`${CARD} p-6 md:p-9 text-left`}>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
        {/* Inputs */}
        <div className="space-y-4">
          <p className="font-supply text-[11px] uppercase tracking-[0.18em] text-[#EDECE4]/50 mb-1">
            Your after-hours numbers · per month
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <NumberField
              label="Average client bill rate"
              prefix="$"
              suffix="/ hour"
              value={billRate}
              onChange={set("billRate")}
            />
            <NumberField
              label="Worker fully loaded cost"
              prefix="$"
              suffix="/ hour"
              value={workerCost}
              onChange={set("workerCost")}
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <NumberField
              label="Average shift duration"
              suffix="hours"
              value={shiftHours}
              onChange={set("shiftHours")}
              step={0.5}
            />
            <NumberField
              label="After-hours booking requests"
              suffix="/ month"
              value={requests}
              onChange={set("requests")}
            />
          </div>
          <PercentSlider label="Currently filled" value={fillRate} onChange={set("fillRate")} />
          <NumberField
            label="After-hours cancellations"
            suffix="/ month"
            value={cancellations}
            onChange={set("cancellations")}
          />
          <PercentSlider
            label="Currently recovered"
            value={recoveryRate}
            onChange={set("recoveryRate")}
          />
        </div>

        {/* Results */}
        <div className="flex flex-col gap-4">
          <div className="rounded-xl border border-[#FF6B6B]/25 bg-[#FF6B6B]/[0.05] p-6 flex-1">
            <p className="font-supply text-[11px] uppercase tracking-[0.18em] text-[#FF6B6B] mb-3">
              Current after-hours revenue leakage
            </p>
            <p className="font-supply text-3xl md:text-4xl font-medium text-white leading-none">
              {fmtAud(revenueLeakage)}
              <span className="text-base text-[#EDECE4]/50 font-normal"> / month</span>
            </p>
            <p className="mt-2 text-sm text-[#EDECE4]/70">
              {fmtAud(revenueLeakage * 12)} a year · {fmtAud(marginLeakage)}/month in
              gross margin
            </p>
            <p className="font-supply mt-4 text-[10px] uppercase tracking-[0.12em] text-[#EDECE4]/45 leading-relaxed">
              {Math.round(lostUnfilled)} unfilled bookings + {Math.round(lostUnrecovered)}{" "}
              unrecovered cancellations = {Math.round(lostShifts)} lost shifts a month
            </p>
          </div>

          <div className="rounded-xl border border-[#0CC481]/30 bg-[#0CC481]/[0.05] p-6 flex-1">
            <p className="font-supply text-[11px] uppercase tracking-[0.18em] text-[#0CC481] mb-3">
              Potential value of improved fill rate
            </p>
            <p className="font-supply text-3xl md:text-4xl font-medium text-white leading-none">
              {fmtAud(potentialRevenue)}
              <span className="text-base text-[#EDECE4]/50 font-normal"> / month</span>
            </p>
            <p className="mt-2 text-sm text-[#EDECE4]/70">
              {fmtAud(potentialRevenue * 12)} a year · {fmtAud(potentialMargin)}/month in
              gross margin
            </p>
            <p className="font-supply mt-4 text-[10px] uppercase tracking-[0.12em] text-[#EDECE4]/45 leading-relaxed">
              Modelled at +{IMPROVEMENT_PTS} percentage points on fill and recovery,
              capped at {IMPROVEMENT_CAP}%
            </p>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-[#EDECE4]/50 leading-relaxed max-w-2xl mx-auto">
        Modelling is based entirely on the numbers you enter and is
        illustrative only — it is not a guarantee of performance. Worker
        availability can never be guaranteed.
      </p>
    </div>
  );
}

function FinalCta() {
  return (
    <section
      id="calculator"
      className="relative section-padding py-20 md:py-28 border-t border-[#EDECE4]/[0.07] overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,109,74,0.35)_0%,rgba(8,8,8,0)_60%)] pointer-events-none" />
      <div className="relative max-container max-w-5xl text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white text-balance">
            Find out what your after-hours operation{" "}
            <span className={GRAD_TEXT}>is really costing you.</span>
          </h2>
          <p className={`mt-6 text-base md:text-lg ${BODY} max-w-2xl mx-auto leading-relaxed`}>
            Enter your own numbers. Then we&apos;ll review how your agency
            currently handles cancellations, urgent bookings, no-shows and
            replacement shifts — and determine whether a specialised
            after-hours workforce desk makes commercial sense.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-10">
          <LeakageCalculator />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mt-10">
            <CtaLink
              label="Book an After-Hours Operations Assessment"
              source="calculator"
              className={`${BTN_PRIMARY} w-full sm:w-auto`}
            />
          </div>
          <p className="font-supply mt-5 text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-[#EDECE4]/40">
            Designed for Australian healthcare, aged care and NDIS/disability
            providers.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── 20 · ASSESSMENT BOOKING (embedded GHL calendar — replaces the
       custom qualification form; the calendar's own booking form collects
       the qualification fields, so /api/workforce-lead is currently unused) ─── */
function AssessmentBooking() {
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
    <section id="assessment" className="section-padding pb-20 md:pb-28 scroll-mt-24">
      <div className="max-container max-w-3xl">
        <AnimatedSection>
          <div className="text-center mb-8">
            <p className={EYEBROW}>Request Your Assessment</p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Book an After-Hours Operations Assessment
            </h3>
          </div>
          <div className={`${CARD} p-2 md:p-3`}>
            <iframe
              src="https://link.novadatech.com/widget/booking/InaO8Qj92uCQ8BglSMhW"
              style={{
                width: "100%",
                minHeight: "760px",
                border: "none",
                overflow: "hidden",
                display: "block",
              }}
              scrolling="no"
              id="InaO8Qj92uCQ8BglSMhW_workforce"
              title="Book an After-Hours Operations Assessment"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── 21 · FOOTER ─── */
function WfFooter() {
  return (
    <footer className="border-t border-[#EDECE4]/[0.07] bg-[#080808]">
      <div className="max-container section-padding py-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <div>
            <p className="text-white font-bold text-lg tracking-tight">
              Novada <span className={GRAD_TEXT}>Workforce</span>
            </p>
            <p className="font-supply mt-1 text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/40">
              After-Hours Workforce Operations
            </p>
            <p className="font-supply mt-1 text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/40">
              Built for Australian healthcare, aged care and NDIS/disability providers
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#EDECE4]/40">
            <a href="tel:+61414727740" className="hover:text-[#EDECE4]/70 transition-colors">
              0414 727 740
            </a>
            <span>·</span>
            <a href="mailto:support@novadatech.com.au" className="hover:text-[#EDECE4]/70 transition-colors">
              support@novadatech.com.au
            </a>
            <span>·</span>
            <a href="/privacy-policy" className="hover:text-[#EDECE4]/70 transition-colors">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="/terms-of-service" className="hover:text-[#EDECE4]/70 transition-colors">
              Terms
            </a>
          </div>
          <p className="text-xs text-[#EDECE4]/35">
            A <span className="text-[#EDECE4]/55">Novada Tech</span> service · ©{" "}
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
    // Market flag for /workforce-confirmed (which serves both landers)
    try { sessionStorage.setItem("nvt_wf_market", "au"); } catch {}
  }, []);

  return (
    <div className="bg-[#080808] font-poppins overflow-x-clip">
      <WfNav />
      <Hero />
      <Problem />
      <Comparison />
      <WhatWeHandle />
      <RealPeople />
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
      <AssessmentBooking />
      <WfFooter />
    </div>
  );
}
