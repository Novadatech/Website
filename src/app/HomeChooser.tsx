"use client";

import { ArrowRight, Bot, CalendarCheck, Check, ChevronDown, Mail, Phone, ShieldCheck, Users } from "lucide-react";

import StickyCta from "@/components/desk/StickyCta";
import { FRAME, GUTTER, MICRO } from "@/components/desk/tokens";
import { Bar, Blobs, CREAM, CREAM_DEEP, Cta, DEEP, SERIF, Stars } from "@/components/lp/kit";

/*
 * ══════════════════════════════════════════════════════════════════════
 * "/" — THE LANDING PAGE FOR BOTH OFFERS.
 *
 * Founder instructions, 25 Nov 2026:
 *   "make novadatech.com.au a home page that covers both offers"
 *   then, on seeing the first chooser: "build it like a proper landing
 *   page that sells the offer ... a proper high converting landing page
 *   that would drive conversion immediately."
 *
 * So this is the care page's structure and style (cream ground, serif,
 * HiBob-frame hero image, client strip, icon trio, alternating feature
 * blocks, one deep band, testimonials, FAQ, a closing booking band and
 * the sticky bar), selling a CHOICE: every band ends in one of the two
 * doors.
 *
 *   AI Workforce          -> /ai-workforce
 *   Workforce Continuity  -> /workforce-continuity
 *
 * 🔴 NO FIGURES THAT DESCRIBE WHAT NOVADA ACHIEVES. Numbers inside the
 * product cards describe one fictional record, as on every page. The
 * rating line is the same unbranded line the care page runs.
 * 🔴 The two offers stay apart everywhere else; this page is the only
 * place both appear. Its hero (tools/hero-build variant home-both) and
 * its two product cards are its own.
 * ⚠️ NO EM DASHES. ⚠️ NO PRICE IN WRITING.
 * ══════════════════════════════════════════════════════════════════════
 */

/* ── PER MARKET (the US copy of this file differs only in this block) ── */
const M = {
  phone: "+61 485 000 813",
  tel: "tel:+61485000813",
  email: "support@novadatech.com.au",
  eyebrow: "For care providers, medical practices and shift-based employers",
  strip: "Care providers across Australia already work with Novada Tech",
  pool: "casual",
  aiFor: "For care providers & medical practices",
  aiPoints: [
    "Rostering, compliance, HR and payroll, after-hours calls and claims for care providers",
    "Reception, bookings, referrals, recalls and billing for medical practices",
    "Works inside the software you already pay for",
    "Asks before anything consequential, and records every action",
  ],
  agents: [["Rostering Agent", "Evening shift reassigned", "R"], ["Compliance Agent", "Screening renewal chased", "C"], ["Reception Agent", "Call answered · booking made", "A"], ["HR Agent", "Onboarding pack sent", "H"]] as [string, string, string][],
  orgs: "organisation",
  quotes: [
    { org: "Maxicare Plus", name: "Founder, Josh", quote: "One thing we value about Novada Tech is that they understand the operational challenges NDIS providers face. Building a care business requires more than finding workers. It requires reliable processes, proper planning and consistent support. Novada brings a practical, proactive approach and genuinely takes the time to understand what our organisation needs." },
    { org: "Morning Star Community Services", name: "Founder, Emmanuella", quote: "In the care sector, having reliable people and well-managed processes makes a real difference. What stands out about Novada Tech is their professionalism, attention to detail and focus on making operations more manageable. They understand the importance of accountability, consistency and having the right support behind service delivery." },
    { org: "Support Link", name: "Founder, Peter", quote: "Novada Tech takes a structured and professional approach to understanding business needs. They recognise the importance of strong workforce processes, clear communication and dependable administrative support. Their commitment to practical solutions and ongoing improvement is what makes them a valuable partner." },
  ],
  roster: "roster",
  times: ["06:08", "06:11", "06:21"],
};
/* ── END PER MARKET ─────────────────────────────────────────────────── */

const AI = "/ai-workforce";
const WC = "/workforce-continuity";

const PROVIDERS = [
  { name: "Maxicare Plus", file: "maxicare.png", h: "h-9 md:h-10" },
  { name: "Morning Star Community Services", file: "morningstar.png", h: "h-14 md:h-16" },
  { name: "Supportslink", file: "supportslink.png", h: "h-9 md:h-11" },
];

const PAINS = [
  {
    img: "/ai-workforce/why-employees.png",
    h: "Admin that never ends",
    b: "Rosters, compliance evidence, bookings, onboarding, claims. The work keeps arriving, and someone capable on your team has to move it.",
  },
  {
    img: "/ai-workforce/why-control.png",
    h: "The early-morning phone marathon",
    b: `A worker calls in sick and a manager spends the next hour ringing around, hoping someone picks up and is ready for the shift.`,
  },
  {
    img: "/ai-workforce/why-systems.png",
    h: "Software that stores, but does not do",
    b: "Your systems hold the information. Your people still do the moving, checking and chasing between them.",
  },
];

const FAQ = [
  { q: "Which service is right for us?",
    a: `If the pressure is administration (rosters, compliance, HR, bookings, claims), start with the AI Workforce. If the pressure is uncovered shifts and a ${"{pool}"} team that is hard to keep ready, start with Workforce Continuity. Not sure? Book either free call and we will tell you honestly which one fits.` },
  { q: "Can we use both?",
    a: "Yes. They are separate services and you can start with one and add the other later. Each is scoped on its own." },
  { q: "Do we need to replace our current software?",
    a: "No. The AI Workforce works inside supported systems you already use, and Workforce Continuity leaves your regular roster, timesheets and payroll where they are. Connections and handovers are confirmed during scoping." },
  { q: "Who employs the workers in Workforce Continuity?",
    a: "Your business does. You interview, approve hires and directly employ your workers. Novada coordinates the agreed recruitment, readiness and requested-cover work around them." },
  { q: "Do you guarantee results?",
    a: "No. Administrative value depends on the workflows, volumes and systems involved, and shift cover depends on an eligible worker accepting. What we do guarantee is a clear scope before you commit, and a clear record of the work once it starts." },
  { q: "What does it cost?",
    a: "Pricing depends on the scope: the AI Workforce agents and workflows you choose, or the pool, roles and service hours you need covered. Your proposal sets out the costs once we understand the work. Both first calls are free." },
];

/* ── PRODUCT CARDS, this page's own ─────────────────────────────────── */

function AiPanel() {
  return (
    <div className="relative pb-0 pt-12 sm:pb-16 sm:pr-10">
      <div className="absolute right-0 top-0 z-20 w-[210px] rounded-lg border border-ink-100 bg-white p-4 text-center shadow-float">
        <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-white"><Check aria-hidden className="h-4 w-4" strokeWidth={3} /></span>
        <p className="mt-2 text-[10px] font-semibold uppercase tracking-caps text-ink-400">Approval needed</p>
        <p style={SERIF} className="mt-1 text-sm font-bold text-ink-950 [text-wrap:balance]">Held for you. Nothing sent.</p>
      </div>
      <div className="relative z-10 rounded-lg border border-ink-100 bg-white shadow-float sm:mr-8">
        <div className="flex items-center justify-between border-b border-ink-100 px-5 py-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-caps text-ink-400">AI Workforce · this morning</p>
            <p style={SERIF} className="mt-1 text-base font-bold text-ink-950">Work completed overnight</p>
          </div>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">All verified</span>
        </div>
        <ul className="px-5 py-2">
          {M.agents.map(([a, t, l], i) => (
            <li key={a} className={`flex items-center gap-3 py-3 ${i ? "border-t border-ink-100" : ""}`}>
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-brand-500 text-[12px] font-bold text-white">{l}</span>
              <span className="min-w-0 flex-1">
                <span className="block text-[13px] font-semibold text-ink-900">{a}</span>
                <span className="block truncate text-[12px] text-ink-500">{t}</span>
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check aria-hidden className="h-3.5 w-3.5" strokeWidth={3} /></span>
            </li>
          ))}
        </ul>
        <div className="border-t border-ink-100 px-5 py-4">
          <div className="flex justify-between text-[12px]"><span className="font-semibold text-ink-800">Tasks done without a person</span><span className="tabular text-ink-500">Example</span></div>
          <div className="mt-2"><Bar pct={86} /></div>
        </div>
      </div>
      <Blobs flip />
    </div>
  );
}

function WcPanel() {
  const steps: [string, string, string][] = [
    [M.times[0], "Request received", "Friday evening · north location"],
    [M.times[1], "3 eligible workers contacted", "Readiness and availability checked"],
    [M.times[2], "Sam accepted the shift", `Assignment recorded · ${M.roster} handover sent`],
  ];
  return (
    <div className="relative px-2 pb-16 pt-[88px] sm:px-6">
      <div className="absolute left-0 top-0 z-20 w-[180px] rounded-lg border border-ink-100 bg-white p-4 shadow-float">
        <div className="flex items-baseline justify-between gap-2">
          <p style={SERIF} className="text-2xl font-bold text-ink-950">24</p>
          <span className="text-[10px] font-semibold uppercase tracking-caps text-ink-400">Ready today</span>
        </div>
        <div className="mt-3"><Bar pct={80} /></div>
      </div>
      <div className="relative z-10 rounded-lg border border-ink-100 bg-white shadow-float">
        <div className="flex items-center justify-between border-b border-ink-100 px-5 py-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-caps text-ink-400">Cover request · CR-2050</p>
            <p style={SERIF} className="mt-1 text-base font-bold text-ink-950">Friday evening, covered</p>
          </div>
          <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700 ring-1 ring-brand-200">Your own pool</span>
        </div>
        <ol className="px-5 py-3">
          {steps.map(([t, h, d], i) => (
            <li key={h} className="relative flex gap-4 py-3">
              {i < steps.length - 1 ? <span aria-hidden className="absolute left-[11px] top-9 h-[calc(100%-1.5rem)] w-px bg-brand-100" /> : null}
              <span className={`relative flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${i === steps.length - 1 ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-600"}`}>
                <Check aria-hidden className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-baseline justify-between gap-3">
                  <span className="text-[13px] font-semibold text-ink-900">{h}</span>
                  <span className="tabular text-[12px] text-ink-400">{t}</span>
                </span>
                <span className="block text-[12px] text-ink-500">{d}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
      <div className="absolute bottom-0 right-0 z-20 w-[220px] rounded-lg border border-ink-100 bg-white p-4 text-center shadow-float">
        <p style={SERIF} className="text-sm font-bold text-ink-950">If nobody accepts</p>
        <p className="mt-1 text-[12px] leading-snug text-ink-500">Your contact gets the open gap before the deadline.</p>
      </div>
      <Blobs />
    </div>
  );
}

/* ── PAGE ───────────────────────────────────────────────────────────── */

function Head({ eyebrow, children, sub, dark = false }: { eyebrow?: string; children: React.ReactNode; sub?: string; dark?: boolean }) {
  return (
    <div className="mx-auto max-w-[46ch] text-center">
      {eyebrow ? <p className={`${MICRO} mb-4 ${dark ? "text-brand-200" : "text-brand-500"}`}>{eyebrow}</p> : null}
      <h2 style={SERIF} className={`text-balance text-[clamp(1.75rem,1.15rem+2.3vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.015em] ${dark ? "text-white" : "text-ink-950"}`}>{children}</h2>
      {sub ? <p className={`mx-auto mt-5 max-w-[56ch] text-base leading-relaxed ${dark ? "text-white/70" : "text-ink-600"}`}>{sub}</p> : null}
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span aria-hidden className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-white"><Check className="h-3 w-3" strokeWidth={3} /></span>
      <span className="text-[15px] leading-relaxed text-ink-600">{children}</span>
    </li>
  );
}

const SOFT = "inline-flex min-h-12 items-center justify-center gap-2 rounded-xs bg-brand-100 px-6 text-[13px] font-bold uppercase tracking-caps text-brand-700 transition-colors duration-150 ease-standard hover:bg-brand-200 sm:whitespace-nowrap";

export default function HomeChooser() {
  const pool = M.pool;
  const wcPoints = [
    `Recruitment and onboarding of your own ${pool} workers, coordinated for you`,
    "Readiness, credentials and availability kept in view",
    "Cover requests worked through to a recorded outcome",
    "You employ the workers and keep your regular roster and payroll",
  ];
  const offers = [
    { key: "ai", eyebrow: M.aiFor, name: "AI Workforce", promise: "Your admin, done. Not just flagged.",
      lead: "AI agents that complete the administration behind your service, inside the systems you already use, and record every action they take.",
      points: M.aiPoints.slice(0, 3), href: AI, cta: "Explore the AI Workforce", best: "Best when the administration keeps piling up." },
    { key: "wc", eyebrow: "For employers with recurring shift gaps", name: "Workforce Continuity", promise: "Your own team, ready for the shift.",
      lead: `We recruit and prepare your own ${pool} workforce, keep it ready, and coordinate the cover you request. You employ the workers.`,
      points: wcPoints.slice(0, 3), href: WC, cta: "Explore Workforce Continuity", best: "Best when open shifts keep landing on a manager." },
  ];

  return (
    <div id="top" data-theme="desk" data-lp="cream" className="min-h-screen font-sans" style={{ backgroundColor: CREAM }}>
      {/* ── HEADER ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-ink-100/70 backdrop-blur" style={{ backgroundColor: "rgba(255,251,244,0.92)" }}>
        <div className={`${FRAME} ${GUTTER} flex min-h-16 items-center justify-between gap-4`}>
          <a href="/" aria-label="Novada Tech, home" className="-mx-1.5 flex flex-shrink-0 items-center gap-2.5 rounded-xs px-1.5 py-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/favicon.png" alt="" width={32} height={32} className="h-7 w-7" />
            <span className="text-lg font-bold leading-none tracking-tight text-ink-950">Novada <span className="text-brand-500">Tech</span></span>
          </a>
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              <li><a href={AI} className="inline-flex min-h-11 items-center text-sm font-semibold text-ink-700 transition-colors hover:text-brand-500">AI Workforce</a></li>
              <li><a href={WC} className="inline-flex min-h-11 items-center text-sm font-semibold text-ink-700 transition-colors hover:text-brand-500">Workforce Continuity</a></li>
              <li><a href="#how" className="inline-flex min-h-11 items-center text-sm font-semibold text-ink-700 transition-colors hover:text-brand-500">How to start</a></li>
              <li><a href="#faq" className="inline-flex min-h-11 items-center text-sm font-semibold text-ink-700 transition-colors hover:text-brand-500">FAQ</a></li>
            </ul>
          </nav>
          <Cta href="#start">
            <span className="sm:hidden">Get started</span>
            <span className="hidden sm:inline">Book a free call</span>
          </Cta>
        </div>
      </header>

      <main>
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: CREAM }}>
          <div className={`${FRAME} ${GUTTER} relative grid items-center gap-12 pb-20 pt-6 md:pb-28 md:pt-16 lg:grid-cols-[0.92fr_1.12fr] lg:gap-10`}>
            <div className="min-w-0">
              <p className={`${MICRO} text-brand-500`}>{M.eyebrow}</p>
              <h1 style={SERIF} className="mt-5 text-[clamp(2.1rem,1.35rem+3.2vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.02em] text-ink-950">
                Less admin. Fewer uncovered shifts. More time to run your business.
              </h1>
              <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-ink-600">
                Novada Tech takes two of the heaviest loads off your team. Our <b className="font-semibold text-ink-900">AI Workforce</b> completes
                your administration inside the systems you already use. <b className="font-semibold text-ink-900">Workforce Continuity</b> builds
                and coordinates your own {pool} workforce, so every shift request gets a clear answer.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Cta href={AI}>Automate my admin</Cta>
                <a href={WC} className={SOFT}>Cover my shifts<ArrowRight aria-hidden className="h-4 w-4" /></a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                <div className="flex items-center gap-2.5">
                  <Stars />
                  <span className="text-sm font-bold text-ink-950">5.0</span>
                  <span className="text-sm text-ink-500">from 77 client reviews</span>
                </div>
                <span className="text-sm font-semibold text-ink-500">Free first call · No obligation</span>
              </div>
            </div>
            <div className="min-w-0 lg:pl-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/home/hero.webp" width={938} height={654} fetchPriority="high" decoding="async"
                alt="One Novada view of both services: AI Workforce agents completing overnight work and shifts covered from your own pool, beside an operations manager"
                className="h-auto w-full lg:-mr-6 xl:-mr-10" />
            </div>
          </div>
        </section>

        {/* ── CLIENT STRIP ─────────────────────────────────────────── */}
        <section className="border-y border-ink-100/70" style={{ backgroundColor: CREAM_DEEP }}>
          <div className={`${FRAME} ${GUTTER} py-10`}>
            <p style={SERIF} className="text-center text-lg font-bold text-ink-800">{M.strip}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-20">
              {PROVIDERS.map((p) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img key={p.name} src={`/clients/${p.file}`} alt={p.name} className={`${p.h} w-auto object-contain`} />
              ))}
            </div>
          </div>
        </section>

        {/* ── THE PROBLEM ──────────────────────────────────────────── */}
        <section style={{ backgroundColor: CREAM }}>
          <div className={`${FRAME} ${GUTTER} py-16 md:py-24`}>
            <Head eyebrow="Sound familiar?">Your best people should not spend the day doing this</Head>
            <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
              {PAINS.map((w) => (
                <div key={w.h} className="reveal text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={w.img} alt="" width={130} height={130} className="mx-auto h-[104px] w-[104px] object-contain" />
                  <h3 style={SERIF} className="mt-5 text-xl font-bold text-ink-950">{w.h}</h3>
                  <p className="mx-auto mt-3 max-w-[34ch] text-[15px] leading-relaxed text-ink-600">{w.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE TWO DOORS ────────────────────────────────────────── */}
        <section id="services" className="scroll-mt-20" style={{ backgroundColor: CREAM_DEEP }}>
          <div className={`${FRAME} ${GUTTER} py-16 md:py-24`}>
            <Head eyebrow="Two services" sub="Pick the pressure that costs you most. You can add the other later.">
              Start where it hurts most
            </Head>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {offers.map((o) => (
                <article key={o.key} className="reveal flex flex-col rounded-lg border border-ink-100 bg-white p-8 shadow-lift md:p-10">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-500 text-white">
                      {o.key === "ai" ? <Bot aria-hidden className="h-5 w-5" /> : <Users aria-hidden className="h-5 w-5" />}
                    </span>
                    <p className={`${MICRO} text-brand-500`}>{o.eyebrow}</p>
                  </div>
                  <h3 style={SERIF} className="mt-6 text-[clamp(1.6rem,1.2rem+1.4vw,2.1rem)] font-bold leading-tight text-ink-950">{o.name}</h3>
                  <p style={SERIF} className="mt-2 text-lg font-bold text-brand-500">{o.promise}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-600">{o.lead}</p>
                  <ul className="mt-6 flex flex-1 flex-col gap-3.5">{o.points.map((p) => <CheckItem key={p}>{p}</CheckItem>)}</ul>
                  <p className="mt-7 border-t border-ink-100 pt-5 text-sm font-semibold text-ink-700">{o.best}</p>
                  <div className="mt-6"><Cta href={o.href}>{o.cta}</Cta></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURE: AI WORKFORCE ────────────────────────────────── */}
        <section className="overflow-hidden" style={{ backgroundColor: CREAM }}>
          <div className={`${FRAME} ${GUTTER} grid items-center gap-14 py-16 md:py-24 lg:grid-cols-2 lg:gap-16`}>
            <div className="min-w-0">
              <p className={`${MICRO} mb-4 text-brand-500`}>AI Workforce</p>
              <h2 style={SERIF} className="text-balance text-[clamp(1.6rem,1.15rem+1.8vw,2.35rem)] font-bold leading-[1.15] tracking-[-0.015em] text-ink-950">
                Wake up to administration that is already done
              </h2>
              <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-ink-600">
                Not a dashboard that tells your team what is outstanding. AI agents that check your systems, take the permitted actions, ask for approval when it matters and confirm the result.
              </p>
              <ul className="mt-7 flex flex-col gap-4">{M.aiPoints.map((p) => <CheckItem key={p}>{p}</CheckItem>)}</ul>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Cta href={AI}>See the AI Workforce</Cta>
              </div>
            </div>
            <div className="relative min-w-0"><AiPanel /></div>
          </div>
        </section>

        {/* ── FEATURE: WORKFORCE CONTINUITY ───────────────────────── */}
        <section className="overflow-hidden" style={{ backgroundColor: CREAM_DEEP }}>
          <div className={`${FRAME} ${GUTTER} grid items-center gap-14 py-16 md:py-24 lg:grid-cols-2 lg:gap-16`}>
            <div className="min-w-0 lg:order-2">
              <p className={`${MICRO} mb-4 text-brand-500`}>Workforce Continuity</p>
              <h2 style={SERIF} className="text-balance text-[clamp(1.6rem,1.15rem+1.8vw,2.35rem)] font-bold leading-[1.15] tracking-[-0.015em] text-ink-950">
                When a shift opens up, your own people are ready
              </h2>
              <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-ink-600">
                Send the request. We check your pool, contact eligible workers, secure acceptance and record the outcome. If nobody can take it, your nominated contact knows before the deadline.
              </p>
              <ul className="mt-7 flex flex-col gap-4">{wcPoints.map((p) => <CheckItem key={p}>{p}</CheckItem>)}</ul>
              <div className="mt-8"><Cta href={WC}>See Workforce Continuity</Cta></div>
            </div>
            <div className="relative min-w-0 lg:order-1"><WcPanel /></div>
          </div>
        </section>

        {/* ── THE DEEP BAND ────────────────────────────────────────── */}
        <section style={{ backgroundColor: DEEP }}>
          <div className={`${FRAME} ${GUTTER} py-16 md:py-24`}>
            <Head dark eyebrow="Whichever you choose">You get the work done. You keep the decisions.</Head>
            <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { img: "/ai-workforce/stat-control-light.png", h: "You approve what matters", b: "Approval thresholds, escalation contacts and service hours are agreed with you before anything runs." },
                { img: "/ai-workforce/stat-ops-light.png", h: "Your systems stay", b: "No wholesale software replacement. Your existing systems remain the records for their own work." },
                { img: "/ai-workforce/stat-roles-light.png", h: "Every action on the record", b: "See what was done, when and by whom, and take over whenever you need to." },
              ].map((s) => (
                <div key={s.h} className="reveal text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt="" width={78} height={78} className="mx-auto h-[62px] w-[62px] object-contain" />
                  <p style={SERIF} className="mx-auto mt-4 max-w-[22ch] text-[clamp(1.2rem,1rem+0.8vw,1.5rem)] font-bold leading-snug text-white">{s.h}</p>
                  <p className="mx-auto mt-3 max-w-[34ch] text-[15px] leading-relaxed text-white/75">{s.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW TO START: a real sequence ────────────────────────── */}
        <section id="how" className="scroll-mt-20" style={{ backgroundColor: CREAM }}>
          <div className={`${FRAME} ${GUTTER} py-16 md:py-24`}>
            <Head eyebrow="How to start" sub="No commitment until you have seen a clear scope.">Three steps to a lighter week</Head>
            <ol className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                { icon: CalendarCheck, h: "Book a free call", b: "Choose the service and pick a time. 30 minutes, no cost." },
                { icon: ShieldCheck, h: "We map the work", b: "Your admin workload and systems, or your roles, sites and recurring shift gaps." },
                { icon: Check, h: "You get a clear scope", b: "What we would take on, what stays with you, and how to get started." },
              ].map((s, i) => (
                <li key={s.h} className="reveal relative rounded-lg border border-ink-100 bg-white p-7 shadow-lift">
                  <div className="flex items-center gap-3">
                    <span style={SERIF} className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-base font-bold text-white">{i + 1}</span>
                    <s.icon aria-hidden className="h-5 w-5 text-brand-500" />
                  </div>
                  <h3 style={SERIF} className="mt-5 text-lg font-bold text-ink-950">{s.h}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.b}</p>
                </li>
              ))}
            </ol>
            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Cta href="#start">Book a free call</Cta>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
        <section style={{ backgroundColor: CREAM_DEEP }}>
          <div className={`${FRAME} ${GUTTER} py-16 md:py-24`}>
            <Head>What our clients say about working with Novada Tech</Head>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {M.quotes.map((t) => (
                <figure key={t.org} className="reveal flex flex-col rounded-lg border border-ink-100 bg-white px-7 py-8 text-center shadow-lift">
                  <p style={SERIF} className="text-[15px] font-bold uppercase tracking-[0.03em] text-ink-950">{t.org}</p>
                  <blockquote style={SERIF} className="mt-6 flex-1 text-[15px] italic leading-relaxed text-ink-700">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-7 text-sm text-ink-500">{t.name}, {t.org}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section id="faq" className="scroll-mt-20" style={{ backgroundColor: CREAM }}>
          <div className={`${FRAME} ${GUTTER} py-16 md:py-24`}>
            <Head>Questions, answered straight</Head>
            <div className="mx-auto mt-12 flex max-w-[76ch] flex-col gap-3">
              {FAQ.map((f) => (
                <details key={f.q} className="group rounded-lg border border-ink-100 bg-white shadow-raise [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 p-6 text-base font-semibold text-ink-950">
                    <span>{f.q}</span>
                    <ChevronDown aria-hidden className="mt-0.5 h-5 w-5 flex-shrink-0 text-ink-400 transition-transform duration-200 ease-standard group-open:rotate-180" />
                  </summary>
                  <p className="px-6 pb-6 text-sm leading-relaxed text-ink-600">{f.a.replace("{pool}", pool)}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── START ────────────────────────────────────────────────── */}
        <section id="start" className="scroll-mt-16" style={{ backgroundColor: DEEP }}>
          <div className={`${FRAME} ${GUTTER} py-16 md:py-24`}>
            <Head dark sub="Both start with a free 30-minute conversation. Choose the service and book a time on its page.">
              Book your free call
            </Head>
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
              {[
                { h: "AI Workforce", p: "A free discovery call about your administrative workload and systems.", href: `${AI}#book`, cta: "Book an AI Workforce call" },
                { h: "Workforce Continuity", p: "A free workforce review of your shift gaps, roles and existing team.", href: `${WC}#review`, cta: "Book a workforce review" },
              ].map((o) => (
                <div key={o.h} className="flex flex-col rounded-lg bg-white p-8 shadow-float">
                  <h3 style={SERIF} className="text-2xl font-bold text-ink-950">{o.h}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-600">{o.p}</p>
                  <div className="mt-6"><Cta href={o.href}>{o.cta}</Cta></div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-8">
              <span className="text-sm text-white/60">Prefer to talk first?</span>
              <a href={M.tel} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white hover:underline"><Phone aria-hidden className="h-4 w-4" />{M.phone}</a>
              <a href={`mailto:${M.email}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white hover:underline"><Mail aria-hidden className="h-4 w-4" />{M.email}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink-100 bg-ink-50">
        <div className={`${FRAME} ${GUTTER} flex flex-col gap-6 py-10 text-sm text-ink-600 md:flex-row md:items-center md:justify-between`}>
          <span className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/favicon.png" alt="" width={24} height={24} className="h-6 w-6" />
            <span className="font-bold text-ink-950">Novada <span className="text-brand-500">Tech</span></span>
            <span className="text-ink-400">© 2026</span>
          </span>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-1">
            <a href={AI} className="inline-flex min-h-11 items-center hover:text-brand-500">AI Workforce</a>
            <a href={WC} className="inline-flex min-h-11 items-center hover:text-brand-500">Workforce Continuity</a>
            <a href="/privacy-policy" className="inline-flex min-h-11 items-center hover:text-brand-500">Privacy policy</a>
            <a href="/terms-of-service" className="inline-flex min-h-11 items-center hover:text-brand-500">Terms of use</a>
          </nav>
        </div>
      </footer>
      <div aria-hidden className="h-28 sm:h-20" />
      <StickyCta label="Book a free call" tagline="AI Workforce or Workforce Continuity. Free 30-minute call." href="#start" />
    </div>
  );
}
