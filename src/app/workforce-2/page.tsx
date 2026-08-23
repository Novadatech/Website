"use client";

/*
 * /workforce-2: Novada Workforce, US market (B2B).
 * REBUILT 2026-08-23 to the After-Hours Coordination Blueprint.
 *
 * ⚠️ THE AUSTRALIAN COST ARGUMENT DOES NOT TRANSFER. Verified in the
 * 2026-08-23 US research: (1) the FLSA requires NO premium for night,
 * weekend or holiday work, so there are no penalty rates to cite;
 * (2) passive on-call at home is generally unpaid (29 CFR 785.17), so
 * there is no allowance floor; (3) there is no 24/7 requirement anywhere
 * in the Medicare home health CoPs (42 CFR Part 484). The US case is
 * therefore built on COVERAGE MATH (128 of 168 hours), turnover, revenue
 * capture and payer-contract exposure, never on wage on-costs.
 *
 * Do NOT reintroduce: SCHADS/award figures, "penalty rates", any claim of
 * a federal 24/7 home health rule, the CMS G622 surveyor quote (flagged
 * unverified), or the circulating speed-to-lead statistics (unverified
 * vendor claims from other industries).
 *
 * Cost figures used, all sourced: BLS OEWS May 2025 43-6013 in NAICS
 * 621600 = $47,770 annual mean; employer multiplier 1.45x (BLS ECEC
 * Mar 2026 top-down 1.47x and bottom-up 1.45x converge); NIC shift-relief
 * methodology gives 3.75-4.17 FTE for the after-hours window and 4.9-5.5
 * FTE for 24/7.
 *
 * Coordinators are Australia-based. Stated plainly on the page: their
 * working day covers the US after-hours window, which is a genuine
 * differentiator against on-call rotations and offshore night shifts.
 * Never imply US-based staff.
 *
 * Own brand chrome; route is in BARE_ROUTES. Sets nvt_wf_market="us".
 */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  CalendarX,
  Check,
  ChevronDown,
  ClipboardList,
  DoorOpen,
  FileText,
  Lock,
  PhoneCall,
  ShieldCheck,
  Sunrise,
  UserX,
  Users,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ACCENT = "#0CC481";

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
  href = "#cost-review",
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

/* ── 01 · NAVIGATION ── */
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
                ["The Problem", "#problem"],
                ["What We Handle", "#services"],
                ["How It Works", "#how"],
                ["The Cost", "#cost"],
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
            <CtaLink label="Book a Cost Review" source="nav" className={BTN_PRIMARY_SM} />
          </div>
        </div>
      </header>
      <div className="h-16 md:h-20" />
    </>
  );
}

/* ── Hero visual: one exchange. The full night is Section 8. ── */
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
            10:47 PM · A caregiver calls off
          </span>
        </div>
        <span className="font-supply text-[9px] uppercase tracking-[0.15em] text-[#EDECE4]/35">
          Illustrative example
        </span>
      </div>

      <div className="max-w-[85%]">
        <div className="rounded-2xl rounded-bl-md border border-[#EDECE4]/[0.10] bg-white/[0.04] px-4 py-3">
          <p className="text-sm text-[#EDECE4] leading-relaxed">
            Hi, I&apos;m really sick. I can&apos;t make tomorrow&apos;s 6am
            visit, I&apos;m so sorry.
          </p>
        </div>
        <p className="font-supply mt-1 text-[9px] uppercase tracking-[0.12em] text-[#EDECE4]/35">
          Caregiver · 10:47 PM
        </p>
      </div>

      <div className="max-w-[85%] ml-auto mt-3 text-right">
        <div className="rounded-2xl rounded-br-md border border-[#0CC481]/25 bg-[#0CC481]/[0.08] px-4 py-3 text-left">
          <p className="text-sm text-[#EDECE4] leading-relaxed">
            Thanks for letting us know, rest up and feel better. We&apos;re
            arranging your coverage now and we&apos;ll keep the client
            informed.
          </p>
        </div>
        <p className="font-supply mt-1 text-[9px] uppercase tracking-[0.12em] text-[#0CC481]/70">
          Your coordinator · 10:48 PM
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-[#EDECE4]/[0.08]">
        <div className="flex items-center justify-between gap-3 rounded-lg border border-[#0CC481]/25 bg-[#0CC481]/[0.06] px-3 py-2">
          <span className="text-xs font-medium text-white">
            Nobody at your agency was woken.
          </span>
          <span className="font-supply text-[9px] uppercase tracking-[0.1em] text-[#0CC481]">
            Handled
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── 02 · HERO ── */
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
              Outsourced After-Hours Coordination · U.S. Home Care, Home Health &amp; Staffing Agencies
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[34px] leading-[1.1] sm:text-4xl md:text-[52px] font-bold tracking-tight text-white text-balance"
            >
              The after-hours coordination team{" "}
              <span className={GRAD_TEXT}>you don&apos;t have to employ.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`mt-5 text-base md:text-lg ${BODY} max-w-xl leading-relaxed`}
            >
              Trained coordinators answer your after-hours line, arrange
              coverage for call-offs and no-shows from your own approved
              caregivers, update your scheduling platform and keep clients
              and families informed. Your rules, your systems, and a written
              handoff before your office opens.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <CtaLink
                label="Book an After-Hours Cost Review"
                source="hero"
                className={`${BTN_PRIMARY} w-full sm:w-auto`}
              />
              <a
                href="#cost"
                className={`${BTN_GHOST} w-full sm:w-auto`}
                onClick={() => track("workforce_cta_click", { cta_source: "hero-cost" })}
              >
                See what covering it yourself costs
                <ArrowDown className="w-4 h-4" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <p className="font-supply mt-5 text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-[#EDECE4]/50">
                Coordinators on shift, not on call · Flat monthly fee · Written handoff every morning
              </p>
              <p className="mt-2 text-xs text-[#EDECE4]/45 max-w-xl leading-relaxed">
                A non-clinical coordination service. Emergencies always go to
                911. Clinical matters go to your on-call nurse.
              </p>
            </motion.div>
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

/* ── 03 · THE PROBLEM ── */
const PROBLEM_LINES = [
  "The 4:55am call-off before a 6am visit, when the schedule shows nobody else cleared for that client.",
  "The caregiver who never clocked in, and the client's daughter calling an office line nobody is answering.",
  "The Saturday referral from a hospital discharge planner, sitting in a voicemail box until Monday.",
  "The missed visit that has to be actioned and documented, not noticed two days later.",
  "The Monday morning spent reconstructing what actually happened over the weekend.",
];

function Problem() {
  return (
    <section id="problem" className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/[0.07] scroll-mt-24">
      <div className="max-container max-w-4xl">
        <AnimatedSection className="text-center mb-10">
          <h2 className={H2}>
            Right now, &quot;after hours&quot; <span className={GRAD_TEXT}>is a person.</span>
          </h2>
          <p className={`mt-4 text-base md:text-lg ${BODY} max-w-2xl mx-auto leading-relaxed`}>
            Somebody at your agency is the after-hours plan. Their cell phone
            is the system.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className={`${CARD} p-6 md:p-8`}>
            <ul className="space-y-4">
              {PROBLEM_LINES.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#0CC481] flex-shrink-0" />
                  <span className={`text-sm md:text-base ${BODY} leading-relaxed`}>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className={`mt-6 text-center text-sm md:text-base ${BODY} leading-relaxed`}>
            Evenings, nights and weekends are 128 of the 168 hours in a week.
            Your office covers the other 40, and one person&apos;s cell phone
            covers the rest.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── 04 · THE ALTERNATIVE (framed against the two real US categories:
       per-minute answering services and by-the-hour remote schedulers) ── */
function Alternative() {
  return (
    <section id="alternative" className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/[0.07]">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-10">
          <h2 className={H2}>
            There is a third option between an answering service{" "}
            <span className={GRAD_TEXT}>and another hire.</span>
          </h2>
          <p className={`mt-4 text-base md:text-lg ${BODY} max-w-3xl mx-auto leading-relaxed`}>
            It&apos;s called outsourced after-hours coordination: a trained
            desk that runs your after-hours operation under your rules, so the
            function exists without you employing it.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: "An answering service",
              desc: "takes a message and pages whoever is on call, billed by the minute. At 11pm the problem is still yours, and the long calls are the expensive ones.",
              ours: false,
            },
            {
              title: "A remote scheduler",
              desc: "gives you a person by the hour. You still write the protocol, train them, supervise them, cover their sick days and carry the risk when they leave.",
              ours: false,
            },
            {
              title: "The After-Hours Coordination Desk",
              desc: "answers, acts and documents. The call-off is taken, coverage is arranged from your approved caregivers, your schedule is updated, the client is informed, and your team is only woken if your rules say so.",
              ours: true,
            },
          ].map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.08}>
              <div
                className={`${CARD} p-6 h-full ${
                  c.ours ? "border-[#0CC481]/40 shadow-[0_0_50px_rgba(12,196,129,0.10)]" : ""
                }`}
              >
                <h3 className={`text-base md:text-lg font-semibold mb-2 ${c.ours ? "text-[#0CC481]" : "text-white"}`}>
                  {c.title}
                </h3>
                <p className="text-sm text-[#EDECE4]/75 leading-relaxed">{c.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 05 · WHAT WE HANDLE ── */
const SERVICES = [
  {
    icon: CalendarX,
    title: "Call-offs and cancellations",
    desc: "We take the call, find the affected visit, and start your coverage process immediately.",
  },
  {
    icon: Users,
    title: "Coverage coordination",
    desc: "We contact your approved, qualified caregivers in your preferred order, manage the responses and confirm the coverage.",
  },
  {
    icon: UserX,
    title: "No-shows and late clock-ins",
    desc: "We follow up the caregiver, inform the client or family, and line up coverage if it's needed.",
  },
  {
    icon: ClipboardList,
    title: "Schedule and visit records",
    desc: "Every confirmed change is recorded in your scheduling platform, and missed or exception visits are documented while the detail is still fresh, not on Monday.",
  },
  {
    icon: PhoneCall,
    title: "Client, family and referral calls",
    desc: "Authorized updates in your agency's name, and after-hours referral inquiries captured properly instead of going to voicemail.",
  },
  {
    icon: ShieldCheck,
    title: "Incidents and escalation",
    desc: "Structured capture and immediate escalation to the right person under your protocol, with the timestamps your payer and licensing obligations depend on.",
  },
];

function Services() {
  return (
    <section id="services" className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/[0.07] scroll-mt-24">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <h2 className={H2}>
            What the Desk handles <span className={GRAD_TEXT}>while your office is closed.</span>
          </h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.05}>
              <div className={`${CARD} p-6 h-full`}>
                <s.icon className="w-6 h-6 mb-3" style={{ color: ACCENT }} strokeWidth={1.5} />
                <h3 className="text-base font-semibold text-white mb-1.5">{s.title}</h3>
                <p className="text-sm text-[#EDECE4]/70 leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.2}>
          <div className="mt-6 rounded-xl border border-[#EDECE4]/[0.10] bg-white/[0.02] p-5 md:p-6">
            <p className="text-sm text-[#EDECE4]/75 leading-relaxed">
              <span className="font-semibold text-white">Always outside our scope:</span>{" "}
              clinical advice or triage, medication decisions, emergency
              response and recruiting. Emergencies go to 911. Clinical matters
              go to your on-call nurse. Your escalation list decides what
              reaches your managers. Everything is in the service agreement, in
              writing.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── 06 · HOW IT WORKS ── */
const STEPS = [
  {
    title: "We map your after-hours playbook.",
    desc: "Escalation rules, delegated authority, contact hierarchy, communication rules, scheduling platform access. We learn your operation before we run it, including shadowing real nights.",
  },
  {
    title: "At close of business, your line forwards to the Desk.",
    desc: "Your number, answered in your agency's name. No new software, nothing migrates.",
  },
  {
    title: "Coordinators work your nights, weekends and holidays.",
    desc: "Calls answered, coverage arranged, schedules updated, people informed.",
  },
  {
    title: "Only your rules wake your people.",
    desc: "Emergencies to 911, clinical matters to your on-call nurse, escalation list to your manager on duty. Everything else, handled.",
  },
  {
    title: "Before your office opens, the written handoff is in your inbox.",
    desc: "Every contact, every action, every outcome, every open item. Your day team starts knowing exactly what happened, not guessing.",
  },
];

function HowItWorks() {
  return (
    <section id="how" className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/[0.07] scroll-mt-24">
      <div className="max-container max-w-4xl">
        <AnimatedSection className="text-center mb-12">
          <h2 className={H2}>
            Your playbook. Our coordinators. <span className={GRAD_TEXT}>Your systems.</span>
          </h2>
        </AnimatedSection>
        <div className="space-y-4">
          {STEPS.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.05}>
              <div className={`${CARD} p-5 md:p-6 flex items-start gap-4 md:gap-5`}>
                <span className="font-supply flex-shrink-0 w-9 h-9 rounded-lg border border-[#0CC481]/30 bg-[#0CC481]/[0.08] flex items-center justify-center text-sm font-semibold text-[#0CC481]">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1">{s.title}</h3>
                  <p className="text-sm text-[#EDECE4]/70 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.2}>
          <div className="mt-10 rounded-xl overflow-hidden border border-[#EDECE4]/[0.10]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/workforce/coordination-team.jpg"
              alt="Two Novada Workforce coordinators working through the night's priorities together"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <p className="font-supply mt-3 text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/50">
            The coordination desk, on shift
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── 07 · THE COST (US version: coverage math, not penalty rates) ── */
const COST_ROWS = [
  {
    option: "A manager keeps the phone",
    cost: "It looks free, because federal law does not require extra pay for nights or weekends and passive on-call at home is generally unpaid. The bill arrives elsewhere: every minute actually spent on calls is payable time that stacks toward overtime, and the person absorbing it is usually your most expensive and least replaceable.",
    gets: "Availability, not coverage.",
    ours: false,
  },
  {
    option: "Hire an after-hours coordinator",
    cost: "Scheduling and staffing coordinators in home health care average $22.97 an hour, about $47,770 a year, before benefits and payroll taxes. Loaded, that is roughly $69,000 for one person who covers 40 of the week's 168 hours and has to be replaced every time they leave.",
    gets: "About a quarter of the week.",
    ours: false,
  },
  {
    option: "Staff the after-hours window properly",
    cost: "Covering 128 hours a week takes 3.2 full-time positions on paper and closer to 4 once vacation, sick time, holidays and training are counted. That is roughly $260,000 to $289,000 a year, fully loaded.",
    gets: "The window covered, at the cost of a department.",
    ours: false,
  },
  {
    option: "The After-Hours Coordination Desk",
    cost: "A flat monthly fee, sized to your agency at the Cost Review. No salaries, benefits, payroll taxes, PTO coverage, overtime or rehiring, and no gap when one person quits.",
    gets: "Evenings, nights, weekends and holidays, run under your rules.",
    ours: true,
  },
];

function Cost() {
  return (
    <section id="cost" className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/[0.07] scroll-mt-24">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-10">
          <h2 className={H2}>
            What covering it yourself <span className={GRAD_TEXT}>actually costs.</span>
          </h2>
          <p className={`mt-4 text-base md:text-lg ${BODY} max-w-3xl mx-auto leading-relaxed`}>
            Most agencies aren&apos;t spending this today. They are covering
            the gap with somebody&apos;s evenings instead. This is what each
            in-house option would actually cost to run, from federal wage data
            and standard coverage math. Bring your own numbers to the Cost
            Review and we&apos;ll run them on your agency.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {COST_ROWS.map((r, i) => (
            <AnimatedSection key={r.option} delay={i * 0.05}>
              <div
                className={`${CARD} p-5 md:p-6 grid md:grid-cols-[220px_1fr_220px] gap-3 md:gap-6 items-start ${
                  r.ours ? "border-[#0CC481]/40 shadow-[0_0_50px_rgba(12,196,129,0.10)]" : ""
                }`}
              >
                <h3 className={`text-base font-semibold ${r.ours ? "text-[#0CC481]" : "text-white"}`}>
                  {r.option}
                </h3>
                <p className="text-sm text-[#EDECE4]/75 leading-relaxed">{r.cost}</p>
                <p className={`text-sm leading-relaxed md:text-right ${r.ours ? "text-white font-medium" : "text-[#EDECE4]/55"}`}>
                  {r.gets}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <p className="mt-5 text-[11px] text-[#EDECE4]/40 leading-relaxed max-w-4xl">
            Sources: wage figures from the U.S. Bureau of Labor Statistics
            Occupational Employment and Wage Statistics, May 2025, for
            secretaries and administrative assistants in Home Health Care
            Services (NAICS 621600). Employer cost loading from the BLS
            Employer Costs for Employee Compensation release, March 2026.
            Coverage requirements calculated using the shift relief factor
            method published by the U.S. National Institute of Corrections.
            On-call pay treatment per 29 CFR 785.17 and Department of Labor
            Fact Sheet #22. Full workings available at the Cost Review.
          </p>
          <div className="mt-8 text-center">
            <CtaLink
              label="Book an After-Hours Cost Review"
              source="cost-table"
              className={`${BTN_PRIMARY} w-full sm:w-auto`}
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── 08 · WHO IT'S FOR ── */
const SEGMENTS = [
  {
    title: "Home care agencies",
    desc: "Caregiver call-offs, no-shows and last-minute schedule changes, worked from your own approved caregivers instead of your owner's cell phone.",
  },
  {
    title: "Home health agencies",
    desc: "Weekend referrals answered while they are still live, missed visits actioned and documented, clinical questions routed to your on-call nurse.",
  },
  {
    title: "Senior care and private duty",
    desc: "Families call at night. Someone who knows your protocols answers, resolves what can be resolved, and escalates what can't.",
  },
  {
    title: "Nurse staffing agencies",
    desc: "An after-hours staffing desk without employing one. The 10pm facility request stops going to the next agency on the list.",
  },
  {
    title: "Travel and locum staffing",
    desc: "You promise 24/7 support. We staff the promise: call-offs, cancellations, travel failures, urgent coverage from your credentialed pool.",
  },
];

function WhoFor() {
  return (
    <section id="who" className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/[0.07]">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <h2 className={H2}>
            Built for agencies where after-hours is{" "}
            <span className={GRAD_TEXT}>operational, not optional.</span>
          </h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SEGMENTS.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.05}>
              <div className={`${CARD} p-6 h-full`}>
                <h3 className="text-base font-semibold text-white mb-1.5">{s.title}</h3>
                <p className="text-sm text-[#EDECE4]/70 leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.2}>
          <p className="mt-6 text-center text-sm text-[#EDECE4]/55 leading-relaxed max-w-3xl mx-auto">
            Several states make 24-hour availability a licensing condition, and
            Medicaid managed care plans require back-up plans in the service
            plan, with some plan contracts capping missed visits each month. We
            work inside whichever of those apply to you.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── 09 · ONE NIGHT, HANDLED ── */
const NIGHT_BEATS = [
  {
    time: "10:47pm",
    text: "Caregiver texts: can't make tomorrow's 6am visit.",
  },
  {
    time: "10:48pm",
    text: "A coordinator picks it up. The visit is identified, your coverage process starts.",
  },
  {
    time: "10:52pm",
    text: "Calls and texts go out to your approved, qualified caregivers, in your preference order.",
  },
  {
    time: "11:19pm",
    text: "Coverage confirmed. Your scheduling platform is updated.",
  },
  {
    time: "11:24pm",
    text: "The client's family is informed, in your agency's name. Nobody at your agency was woken, because your rules said this one didn't need it.",
  },
  {
    time: "7:55am",
    text: "The written handoff lands in your inbox: what happened, who was contacted, what was confirmed, what needs a daytime decision.",
  },
];

function OneNight() {
  return (
    <section id="night" className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/[0.07]">
      <div className="max-container max-w-3xl">
        <AnimatedSection className="text-center mb-12">
          <h2 className={H2}>
            One night, <span className={GRAD_TEXT}>handled.</span>
          </h2>
        </AnimatedSection>
        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[11px] md:left-[13px] top-2 bottom-2 w-px bg-[#EDECE4]/[0.12]" />
          <div className="space-y-6">
            {NIGHT_BEATS.map((b, i) => (
              <AnimatedSection key={b.time} delay={i * 0.05}>
                <div className="relative">
                  <span
                    className={`absolute -left-8 md:-left-10 top-1 flex h-[22px] w-[22px] md:h-[26px] md:w-[26px] items-center justify-center rounded-full border ${
                      i === NIGHT_BEATS.length - 1
                        ? "border-[#0CC481] bg-[#0CC481]/15"
                        : "border-[#EDECE4]/20 bg-[#0b0e0d]"
                    }`}
                  >
                    <Check
                      className={`w-3 h-3 ${i === NIGHT_BEATS.length - 1 ? "text-[#0CC481]" : "text-[#EDECE4]/50"}`}
                      strokeWidth={2.5}
                    />
                  </span>
                  <p className="font-supply text-[10px] uppercase tracking-[0.15em] text-[#0CC481] mb-1">
                    {b.time}
                  </p>
                  <p className={`text-sm md:text-base ${BODY} leading-relaxed`}>{b.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <AnimatedSection delay={0.2}>
          <p className="font-supply mt-8 text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/40 text-center">
            Illustrative example of the standard workflow. Your escalation
            rules decide what we handle and who we wake.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── 10 · TRUST AND GOVERNANCE ── */
const TRUST_TILES = [
  {
    icon: BookOpen,
    title: "Your playbook is the product",
    desc: "We operate from documented rules you approve: delegated authority, contact hierarchy, escalation list. Nothing is improvised.",
  },
  {
    icon: Sunrise,
    title: "On shift, not on call",
    desc: "Our coordinators are based in Australia, where your night is our working day. Your 2am call reaches someone mid-shift and wide awake, not someone woken by a pager.",
  },
  {
    icon: Lock,
    title: "Your systems stay yours",
    desc: "We work inside your existing scheduling platform under your Business Associate Agreement, with access you approve, scoped and revocable.",
  },
  {
    icon: ShieldCheck,
    title: "Non-clinical, in writing",
    desc: "Operational coordination only. No clinical advice, no triage, no medication decisions. The boundary sits in the service agreement, not in fine print.",
  },
  {
    icon: FileText,
    title: "Documented like it matters",
    desc: "Every contact and action is timestamped, so missed visits, exceptions and escalations are recorded when they happen rather than reconstructed later.",
  },
  {
    icon: DoorOpen,
    title: "No lock-in",
    desc: "Your playbook, your systems, your data. After the first three months, leave with 30 days' notice and everything stays yours.",
  },
];

function Trust() {
  return (
    <section id="trust" className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/[0.07]">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <h2 className={H2}>
            Run like a function, <span className={GRAD_TEXT}>not a favor.</span>
          </h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {TRUST_TILES.map((t, i) => (
            <AnimatedSection key={t.title} delay={i * 0.05}>
              <div className={`${CARD} p-6 h-full`}>
                <t.icon className="w-6 h-6 mb-3" style={{ color: ACCENT }} strokeWidth={1.5} />
                <h3 className="text-base font-semibold text-white mb-1.5">{t.title}</h3>
                <p className="text-sm text-[#EDECE4]/70 leading-relaxed">{t.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.15}>
          <div className="grid md:grid-cols-2 gap-5 items-stretch">
            <div className={`${CARD} p-6 md:p-8 flex flex-col justify-center`}>
              <p className={`text-sm md:text-base ${BODY} leading-relaxed`}>
                &quot;I watched agency owners run serious operations all day,
                then spend their nights being the after-hours plan. The work
                deserves a proper function, not a favor. If your current model
                is genuinely the right one, we&apos;ll tell you that at the
                Cost Review.&quot;
              </p>
              <p className="font-supply mt-4 text-[10px] uppercase tracking-[0.15em] text-[#0CC481]">
                Ade Eni · Founder, Novada Workforce
              </p>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden border border-[#EDECE4]/[0.10]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/workforce/coordinator.jpg"
                  alt="A Novada Workforce coordinator on the desk during a shift"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <p className="font-supply mt-3 text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/50">
                Julie · Workforce Coordinator · On the desk
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── 11 · FAQ ── */
const FAQS = [
  {
    q: "Is this an answering service?",
    a: "No. An answering service takes a message and hands the problem back to whoever is on call at your agency, usually billed by the minute. Our coordinators take the problem: they arrange the coverage, update your schedule, inform the right people and document all of it. Taking the message is where our work starts, not where it ends.",
  },
  {
    q: "Can you guarantee every shift gets covered?",
    a: "No, and be careful of anyone who says yes. Nobody can conjure caregivers who aren't available. What we promise: a coordinator starts working the problem within minutes, every approved caregiver is contacted in your preferred order, your escalation rules are followed when the list is exhausted, and nothing goes undocumented.",
  },
  {
    q: "Where are your coordinators based?",
    a: "In Australia, and we think that's the best part of the model. Australian working hours line up almost exactly with the U.S. after-hours window, so your evenings and nights are covered by people on a normal day shift rather than by someone woken at home or working against the clock on a night rotation. Every coordinator works to your documented playbook, under your Business Associate Agreement, with access you approve.",
  },
  {
    q: "Are you a staffing agency? Do you supply caregivers?",
    a: "No. We coordinate the workforce you already have: your employees, your PRN pool, your contracted agencies, contacted under your rules. If you need more caregivers, that's a recruiting conversation, and it isn't ours.",
  },
  {
    q: "Who decides which caregivers you contact and what you're allowed to do?",
    a: "You do, always. At onboarding we document your delegated-authority schedule: what the Desk may do without asking, and what always goes to your manager on duty. We only contact caregivers your records show as approved and qualified for that visit, and we never make our own judgment about clinical competence.",
  },
  {
    q: "What happens if something serious happens at 2am?",
    a: "Emergencies go to 911 first, every time. Clinical questions go to your on-call nurse. Anything on your escalation list reaches your manager immediately, with full context. Everything is timestamped, so when a payer or surveyor asks what happened and when, the record already exists.",
  },
  {
    q: "What does it cost?",
    a: "A flat monthly fee, sized to your agency and coverage window at the Cost Review. It is designed to sit well below the cost of employing the function: one in-house coordinator runs around $69,000 a year fully loaded and covers about a quarter of the week. We'll put your current arrangement and our fee side by side, in writing, before you decide anything.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/[0.07] scroll-mt-24">
      <div className="max-container max-w-3xl">
        <AnimatedSection className="text-center mb-10">
          <h2 className={H2}>
            Straight <span className={GRAD_TEXT}>answers.</span>
          </h2>
        </AnimatedSection>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <AnimatedSection key={f.q} delay={i * 0.03}>
              <div className={`${CARD} overflow-hidden`}>
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4 text-left"
                >
                  <span className="text-sm md:text-base font-medium text-white">{f.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 text-[#0CC481] transition-transform ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                {open === i && (
                  <p className="px-5 md:px-6 pb-5 text-sm text-[#EDECE4]/75 leading-relaxed">
                    {f.a}
                  </p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 12 · FINAL CTA + BOOKING ── */
function CostReviewBooking() {
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
    <section
      id="cost-review"
      className="relative section-padding py-20 md:py-28 border-t border-[#EDECE4]/[0.07] overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,109,74,0.35)_0%,rgba(8,8,8,0)_60%)] pointer-events-none" />
      <div className="relative max-container max-w-3xl">
        <AnimatedSection className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white text-balance">
            Find out what your after-hours really costs,{" "}
            <span className={GRAD_TEXT}>and what it would cost to hand it over.</span>
          </h2>
          <p className={`mt-6 text-base md:text-lg ${BODY} max-w-2xl mx-auto leading-relaxed`}>
            The After-Hours Cost Review is 45 minutes. We map how your
            after-hours works today, price it against real coverage math, and
            show you exactly what the Desk would take over. You leave with your
            own numbers either way, whether or not you go ahead.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
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
              title="Book an After-Hours Cost Review"
            />
          </div>
          <p className="mt-5 text-center text-sm text-[#EDECE4]/55 leading-relaxed">
            No obligation, no scripts read at you. If your current model is
            genuinely the right one, we&apos;ll tell you.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── 13 · FOOTER ── */
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
              Outsourced after-hours coordination
            </p>
            <p className="font-supply mt-1 text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/40">
              For U.S. home care, home health and staffing agencies
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#EDECE4]/40">
            <a href="tel:+18333853923" className="hover:text-[#EDECE4]/70 transition-colors">
              +1 833-385-3923
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

export default function Workforce2Page() {
  useEffect(() => {
    track("workforce_page_view");
    // Market flag for /workforce-confirmed (which serves both landers)
    try { sessionStorage.setItem("nvt_wf_market", "us"); } catch {}
  }, []);

  return (
    <div className="bg-[#080808] font-poppins overflow-x-clip">
      <WfNav />
      <main>
        <Hero />
        <Problem />
        <Alternative />
        <Services />
        <HowItWorks />
        <Cost />
        <WhoFor />
        <OneNight />
        <Trust />
        <Faq />
        <CostReviewBooking />
      </main>
      <WfFooter />
    </div>
  );
}
