"use client";

/*
 * /workforce: Novada Workforce single-page conversion lander (AU, B2B).
 * REBUILT 2026-08-23 to the After-Hours Coordination Offer Blueprint:
 *  - Category: Outsourced After-Hours Coordination. Service: the
 *    After-Hours Coordination Desk. 11 sections (down from ~19).
 *  - Leads with verified award economics (SCHADS 1 Jul 2026 rates,
 *    on-call allowance cl 20.11, remote response cl 25.10, right to
 *    disconnect cl 25A). Every figure in the cost table is sourced.
 *  - Single CTA: "Book an After-Hours Cost Review" (#cost-review).
 *  - Non-clinical boundary stated three times (hero microcopy, boundary
 *    strip, FAQ). Never promise shift fills; promise the process.
 *  - Coordinators are Australian-based (founder-confirmed 2026-08-23).
 *  - The leakage calculator was retired from this page (sales-call tool
 *    now; spec preserved in project memory + git history).
 *  - NO invented social proof, logos, testimonials or stats.
 * Own brand chrome (nav + footer in-page); route is in BARE_ROUTES.
 * Analytics: dataLayer events picked up by site-wide GTM. Sets the
 * nvt_wf_market="au" flag for /workforce-confirmed.
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
  UserX,
  Users,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

/* Brand tokens: parent-site Morningside system */
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

/* ── Hero visual: one exchange only. The full night lives in Section 8. ── */
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

      <div className="max-w-[85%] ml-auto mt-3 text-right">
        <div className="rounded-2xl rounded-br-md border border-[#0CC481]/25 bg-[#0CC481]/[0.08] px-4 py-3 text-left">
          <p className="text-sm text-[#EDECE4] leading-relaxed">
            Thanks for letting us know, rest up and feel better. We&apos;re
            arranging your cover now and we&apos;ll keep the client informed.
          </p>
        </div>
        <p className="font-supply mt-1 text-[9px] uppercase tracking-[0.12em] text-[#0CC481]/70">
          Your coordinator · 10:48 PM
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-[#EDECE4]/[0.08]">
        <div className="flex items-center justify-between gap-3 rounded-lg border border-[#0CC481]/25 bg-[#0CC481]/[0.06] px-3 py-2">
          <span className="text-xs font-medium text-white">
            Nobody at your organisation was woken.
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
              Outsourced After-Hours Coordination · Australian Care Providers &amp; Staffing Agencies
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
              Trained coordinators answer your after-hours line, arrange cover
              for sick calls and cancellations from your own approved
              workforce, update your roster and keep families and facilities
              informed. Your rules, your systems, and a written handover by
              8am.
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
                Australian-based coordinators · Flat monthly fee · Written handover by 8am
              </p>
              <p className="mt-2 text-xs text-[#EDECE4]/45 max-w-xl leading-relaxed">
                A non-clinical coordination service. Emergencies always go to
                000. Clinical matters go to your clinical on-call.
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
  "The 4:55am sick call before a 6am shift.",
  "The worker who is 40 minutes late and not answering, while the family rings an office line nobody picks up.",
  "The Saturday request a facility needs filled by tonight.",
  "The incident at 2am that starts a 24-hour reporting clock, whether or not anyone is awake to manage it.",
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
            Somebody in your organisation is the after-hours plan. Their
            mobile is the system.
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
            It works until it doesn&apos;t. And it runs on the evenings of the
            most senior, hardest-to-replace people you have.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── 04 · THE ALTERNATIVE ── */
function Alternative() {
  return (
    <section id="alternative" className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/[0.07]">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-10">
          <h2 className={H2}>
            There is a third option between &quot;the manager&apos;s mobile&quot;{" "}
            <span className={GRAD_TEXT}>and &quot;hire a night desk.&quot;</span>
          </h2>
          <p className={`mt-4 text-base md:text-lg ${BODY} max-w-3xl mx-auto leading-relaxed`}>
            It&apos;s called outsourced after-hours coordination: a trained
            desk that runs your after-hours operations under your rules, so
            the function exists without you employing it.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: "An answering service",
              desc: "takes a message and sends it to whoever is on call. The problem is still yours at 11pm.",
              ours: false,
            },
            {
              title: "A staffing agency",
              desc: "supplies workers when you ask. Somebody still has to notice the gap, make the calls and update the roster. That somebody is the point.",
              ours: false,
            },
            {
              title: "The After-Hours Coordination Desk",
              desc: "answers, acts and documents. The sick call is taken, cover is arranged from your approved workforce, your roster is updated, the family is informed, and your managers are only woken if your rules say so.",
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
    title: "Sick calls and cancellations",
    desc: "We take the call, find the affected shift or visit, and start your replacement process immediately.",
  },
  {
    icon: Users,
    title: "Cover coordination",
    desc: "We contact your approved, eligible workers in your preferred order, manage the responses and confirm the cover.",
  },
  {
    icon: UserX,
    title: "No-shows and late workers",
    desc: "We chase, we inform the client or family, and we line up cover if it's needed.",
  },
  {
    icon: ClipboardList,
    title: "Roster updates",
    desc: "Every confirmed change is recorded in your rostering platform. Your system stays the system of record.",
  },
  {
    icon: PhoneCall,
    title: "Client, family and facility communication",
    desc: "Authorised updates, in your name, on your number.",
  },
  {
    icon: ShieldCheck,
    title: "Incidents and escalations",
    desc: "Structured capture, immediate escalation to the right person under your matrix, and documentation that respects the 24-hour reporting clocks in NDIS and aged care.",
  },
];

function Services() {
  return (
    <section id="services" className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/[0.07] scroll-mt-24">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <h2 className={H2}>
            What the Desk handles <span className={GRAD_TEXT}>while your team is off.</span>
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
              response and recruitment. Emergencies go to 000. Clinical
              matters go to your clinical on-call. Your wake-me list decides
              what reaches your managers. Everything is in the service
              agreement, in writing.
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
    desc: "Escalation rules, delegated authority, contact hierarchy, communication rules, roster access. We learn your operation before we run it, including shadowing real nights.",
  },
  {
    title: "At close of business, your line diverts to the Desk.",
    desc: "Your number, answered in your name. No new software, nothing migrates.",
  },
  {
    title: "Coordinators work your nights, weekends and public holidays.",
    desc: "Calls answered, cover arranged, rosters updated, people informed.",
  },
  {
    title: "Only your rules wake your people.",
    desc: "Emergencies to 000, clinical matters to your clinical contact, wake-me list to your on-call manager. Everything else, handled.",
  },
  {
    title: "By 8am, the written handover is in your inbox.",
    desc: "Every contact, every action, every outcome, every open item. Your day team starts the day knowing exactly what happened, not guessing.",
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
            The coordination desk, after hours
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── 07 · THE COST (centrepiece: verified award economics) ── */
const COST_ROWS = [
  {
    option: "A manager keeps the phone",
    cost: "$25.66 to $50.81 per day in on-call allowances before a single call is answered, with every phone response payable on top at penalty rates. Under the right-to-disconnect rules, after-hours response is only required while that allowance is being paid.",
    gets: "Availability, not coverage. And your most senior people never switch off.",
    ours: false,
  },
  {
    option: "Hire an after-hours coordinator",
    cost: "Advertised today at $36 to $50.61 per hour. One full-time coordinator costs over $110,000 a year with super and on-costs, and covers about 40 of the week's 168 hours. Every departure costs around $24,000 to re-hire.",
    gets: "About a quarter of the week.",
    ours: false,
  },
  {
    option: "Staff a true 24/7 desk",
    cost: "Roughly five full-time staff to keep one seat filled around the clock, with most of the cost sitting in penalty-rate hours.",
    gets: "The whole week, at enterprise cost.",
    ours: false,
  },
  {
    option: "The After-Hours Coordination Desk",
    cost: "A flat monthly fee, sized to your organisation at the Cost Review. No salaries, penalties, allowances, super, leave, backfill or re-recruitment.",
    gets: "Evenings, nights, weekends and public holidays, run under your rules.",
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
            These are the real numbers for doing this internally, from the
            award and the current job market. Bring your own numbers to the
            Cost Review and we&apos;ll do the same maths on your operation.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {COST_ROWS.map((r, i) => (
            <AnimatedSection key={r.option} delay={i * 0.05}>
              <div
                className={`${CARD} p-5 md:p-6 grid md:grid-cols-[220px_1fr_240px] gap-3 md:gap-6 items-start ${
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
            Sources: Social, Community, Home Care and Disability Services
            Industry Award 2010 (MA000100), rates effective 1 July 2026
            (on-call allowance cl 20.11, remote response cl 25.10, right to
            disconnect cl 25A), Fair Work Commission; advertised rates from
            live Australian job listings, August 2026; average cost per hire
            from the AHRI/ELMO HR Industry Benchmark Survey. Full workings
            available at the Cost Review.
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
    title: "NDIS and disability providers",
    desc: "Support without interruption is the standard you're held to. The 4:55am sick call is where it breaks. We take that call.",
  },
  {
    title: "Home care providers",
    desc: "Evening no-shows, welfare concerns and urgent schedule changes, handled to your care plans and documented.",
  },
  {
    title: "Residential aged care",
    desc: "Your RN runs the clinical night. We run the operational one: carer backfill, agency ring-arounds, roster changes, family calls.",
  },
  {
    title: "Nursing staffing agencies",
    desc: "An after-hours allocations desk without employing one. The 10pm facility request stops going to the next agency on the list.",
  },
  {
    title: "Locum agencies",
    desc: "You promise 24/7 support. We staff the promise: sick calls, cancellations, travel failures, urgent fills from your pool.",
  },
];

function WhoFor() {
  return (
    <section id="who" className="section-padding py-16 md:py-24 border-t border-[#EDECE4]/[0.07]">
      <div className="max-container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <h2 className={H2}>
            Built for organisations where after-hours is{" "}
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
      </div>
    </section>
  );
}

/* ── 09 · ONE NIGHT, HANDLED ── */
const NIGHT_BEATS = [
  {
    time: "10:47pm",
    text: "Support worker texts: can't make tomorrow's 6am shift.",
  },
  {
    time: "10:48pm",
    text: "A coordinator picks it up. The shift is identified, your replacement process starts.",
  },
  {
    time: "10:52pm",
    text: "Calls and texts go out to your approved workers, in your preference order.",
  },
  {
    time: "11:19pm",
    text: "Cover confirmed. Your roster is updated in your system.",
  },
  {
    time: "11:24pm",
    text: "The participant's family is informed, in your name. Nobody at your organisation was woken, because your rules said this one didn't need it.",
  },
  {
    time: "7:55am",
    text: "The written handover lands in your inbox: what happened, who was contacted, what was confirmed, what needs a daytime decision.",
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
    desc: "We operate from documented rules you approve: delegated authority, contact hierarchy, wake-me list. Nothing is improvised.",
  },
  {
    icon: Lock,
    title: "Your systems stay yours",
    desc: "We work inside your existing rostering platform with access you approve. Your data never moves; your credentials are scoped and revocable.",
  },
  {
    icon: ShieldCheck,
    title: "Non-clinical, in writing",
    desc: "Operational coordination only. No clinical advice, no triage, no medication decisions. The boundary sits in the service agreement, not in fine print.",
  },
  {
    icon: FileText,
    title: "Documented like it matters",
    desc: "Every contact and action is timestamped. When a 24-hour reporting clock starts at 2am, your record starts with it.",
  },
  {
    icon: Users,
    title: "Australian-based coordinators",
    desc: "A staffed desk with backup coverage, not one person's mobile. You know who has access and what they're authorised to do.",
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
            Run like a function, <span className={GRAD_TEXT}>not a favour.</span>
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
                &quot;I watched care operators run serious organisations all
                day, then spend their nights being the after-hours plan. The
                work deserves a proper function, not a favour. If your
                current model is genuinely the right one, we&apos;ll tell you
                that at the Cost Review.&quot;
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
                  alt="A Novada Workforce coordinator on the desk after hours"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <p className="font-supply mt-3 text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/50">
                Julie · Workforce Coordinator · On the desk after hours
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
    a: "No. An answering service takes a message and hands the problem back to whoever is on call at your organisation. Our coordinators take the problem: they arrange the cover, update your roster, inform the right people and document the lot. Taking the message is where our work starts, not where it ends.",
  },
  {
    q: "Can you guarantee every shift gets filled?",
    a: "No, and be careful of anyone who says yes. Nobody can conjure workers who aren't there. What we promise: a coordinator starts working the problem within minutes, every approved worker is contacted in your preferred order, your escalation rules are followed when the pool is exhausted, and nothing goes undocumented.",
  },
  {
    q: "Are you a staffing agency? Do you supply workers?",
    a: "No. We coordinate your existing workforce: your employees, your casual pool, your agency panel, contacted under your rules. If you need more workers, that's a recruitment conversation, and it isn't ours.",
  },
  {
    q: "Who decides which workers you contact and what you're allowed to do?",
    a: "You do, always. At onboarding we document your delegated-authority schedule: what the Desk may do without asking, and what always goes to your on-call manager. We only contact workers your records mark as approved and eligible for that shift, and we never make our own judgement about clinical competence.",
  },
  {
    q: "What happens if something serious happens at 2am?",
    a: "Emergencies go to 000 first, every time. Clinical matters go to your clinical on-call. Anything on your wake-me list reaches your manager immediately, with full context. And because NDIS and aged care reporting clocks run on awareness, every escalation is timestamped and in the morning handover.",
  },
  {
    q: "Will our clients and staff know we've outsourced this?",
    a: "Calls are answered in your organisation's name, on your number, by our Australian-based coordinators. Workers and families experience your after-hours line, run properly. What you tell your team is your call; most clients simply introduce us as their after-hours coordination desk.",
  },
  {
    q: "What does it cost?",
    a: "A flat monthly fee, sized to your organisation and coverage window at the Cost Review. It's designed to sit well below the cost of employing the function: one internal coordinator runs past $110,000 a year with on-costs and covers about a quarter of the week. We'll put your current arrangement and our fee side by side, in writing, before you decide anything.",
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

/* ── 12 · FINAL CTA + BOOKING (embedded calendar; its booking form
       collects the qualification fields) ── */
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
            after-hours works today, price it properly against the award, and
            show you exactly what the Desk would take over. You leave with
            your own numbers either way, whether or not you go ahead.
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
              For Australian care providers and staffing agencies
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

export default function WorkforcePage() {
  useEffect(() => {
    track("workforce_page_view");
    // Market flag for /workforce-confirmed (which serves both landers)
    try { sessionStorage.setItem("nvt_wf_market", "au"); } catch {}
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
