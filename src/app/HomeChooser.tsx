"use client";

import { ArrowRight, Check, Mail, Phone } from "lucide-react";

import { FRAME, GUTTER, MICRO } from "@/components/desk/tokens";
import { Bar, CREAM, CREAM_DEEP, Cta, DEEP, SERIF, Tick } from "@/components/lp/kit";

/*
 * ══════════════════════════════════════════════════════════════════════
 * "/" — THE NEUTRAL HOME FOR BOTH OFFERS.
 *
 * Founder instruction, 25 Nov 2026: "make novadatech.com.au a home
 * page that covers both offers and visitors can choose the offer they
 * are after and it will take them to that offer's specific page."
 *
 *   AI Workforce          -> /ai-workforce          (care + practices)
 *   Workforce Continuity  -> /workforce-continuity  (casual workforce)
 *
 * The two offers are kept apart everywhere else: neither offer's pages
 * link to the other. This page is the only place both appear.
 *
 * ⚠️ Its visuals are its own (the two mini screens below). They are not
 * crops or re-labels of either offer's screens.
 * ══════════════════════════════════════════════════════════════════════
 */

const PHONE = "+61 485 000 813";
const TEL = "tel:+61485000813";
const EMAIL = "support@novadatech.com.au";

function AiMini() {
  const rows: [string, string][] = [
    ["Rostering Agent", "Evening shift reassigned"],
    ["Reception Agent", "Call answered · booking made"],
    ["Compliance Agent", "Clearance reminder sent"],
  ];
  return (
    <div className="rounded-lg border border-ink-100 bg-white shadow-raise">
      <div className="flex items-center justify-between border-b border-ink-100 px-4 py-3">
        <span className="text-[13px] font-bold text-ink-950">Overnight work</span>
        <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">143 verified</span>
      </div>
      <ul className="px-4 py-1">
        {rows.map(([a, t], i) => (
          <li key={a} className={`flex items-center gap-3 py-2.5 ${i ? "border-t border-ink-100" : ""}`}>
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-500 text-[11px] font-bold text-white">{a[0]}</span>
            <span className="min-w-0 flex-1"><span className="block text-[12px] font-semibold text-ink-900">{a}</span><span className="block truncate text-[11px] text-ink-500">{t}</span></span>
            <Check aria-hidden className="h-4 w-4 text-emerald-600" strokeWidth={3} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function WcMini() {
  const rows: [string, number][] = [["Prepared for the role", 82], ["Available this week", 64], ["Accepted Friday’s shift", 100]];
  return (
    <div className="rounded-lg border border-ink-100 bg-white shadow-raise">
      <div className="flex items-center justify-between border-b border-ink-100 px-4 py-3">
        <span className="text-[13px] font-bold text-ink-950">Your casual pool</span>
        <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-semibold text-brand-700 ring-1 ring-brand-200">24 workers</span>
      </div>
      <ul className="flex flex-col gap-3 px-4 py-3.5">
        {rows.map(([k, p]) => (
          <li key={k}>
            <div className="flex justify-between text-[12px]"><span className="font-semibold text-ink-800">{k}</span><span className="tabular text-ink-500">{p}%</span></div>
            <div className="mt-1.5"><Bar pct={p} tone={p === 100 ? "brand" : "warm"} /></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const OFFERS = [
  {
    eyebrow: "For care providers & medical practices",
    name: "AI Workforce",
    lead: "AI agents that complete the administration behind your service, inside the systems you already use, and record every action they take.",
    points: [
      "Rostering, compliance, HR, after-hours and claims for care providers",
      "Reception, bookings, referrals, recalls and billing for practices",
      "You approve anything consequential",
    ],
    href: "/ai-workforce",
    cta: "Explore the AI Workforce",
    Mini: AiMini,
  },
  {
    eyebrow: "For employers with recurring staffing gaps",
    name: "Workforce Continuity",
    lead: "Your own casual workforce, recruited, prepared and coordinated for your business. You employ the workers. We keep the pool ready and coordinate the cover you request.",
    points: [
      "Recruitment and onboarding coordinated",
      "Readiness and availability kept in view",
      "Requested cover, with a clear outcome every time",
    ],
    href: "/workforce-continuity",
    cta: "Explore Workforce Continuity",
    Mini: WcMini,
  },
];

const COMPARE: [string, string, string][] = [
  ["Best for", "Care providers and medical practices whose administration keeps piling up", "Employers with recurring shift gaps and casual workers to coordinate"],
  ["What it does", "Completes approved administrative work inside your existing systems", "Recruits and prepares your casual pool, keeps it ready and coordinates requested cover"],
  ["The people", "No new workers. The AI works alongside your team", "Your own casual workers. You interview, approve hires and employ them"],
  ["You keep", "Every consequential decision, with every action recorded", "Hiring decisions, your roster, timesheets and payroll"],
  ["Start with", "A free discovery call", "A free 30-minute workforce review"],
];

export default function HomeChooser() {
  return (
    <div data-theme="desk" data-lp="cream" className="min-h-screen font-sans" style={{ backgroundColor: CREAM }}>
      <header className="sticky top-0 z-40 border-b border-ink-100/70 backdrop-blur" style={{ backgroundColor: "rgba(255,251,244,0.92)" }}>
        <div className={`${FRAME} ${GUTTER} flex min-h-16 items-center justify-between gap-4`}>
          <a href="/" aria-label="Novada Tech, home" className="-mx-1.5 flex flex-shrink-0 items-center gap-2.5 rounded-xs px-1.5 py-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/favicon.png" alt="" width={32} height={32} className="h-7 w-7" />
            <span className="text-lg font-bold leading-none tracking-tight text-ink-950">Novada <span className="text-brand-500">Tech</span></span>
          </a>
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {OFFERS.map((o) => (
                <li key={o.href}><a href={o.href} className="inline-flex min-h-11 items-center text-sm font-semibold text-ink-700 transition-colors hover:text-brand-500">{o.name}</a></li>
              ))}
            </ul>
          </nav>
          <Cta href="#services">
            <span className="sm:hidden">Services</span>
            <span className="hidden sm:inline">Choose your service</span>
          </Cta>
        </div>
      </header>

      <main>
        <section style={{ backgroundColor: CREAM }}>
          <div className={`${FRAME} ${GUTTER} pb-14 pt-12 text-center md:pb-16 md:pt-20`}>
            <p className={`${MICRO} text-brand-500`}>Novada Tech · Australia</p>
            <h1 style={SERIF} className="mx-auto mt-5 max-w-[18ch] text-balance text-[clamp(2.2rem,1.35rem+3.4vw,3.75rem)] font-bold leading-[1.06] tracking-[-0.02em] text-ink-950">
              AI that does the work. <span className="text-brand-500">People ready for the shift.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[60ch] text-lg leading-relaxed text-ink-600">
              Novada Tech runs two services. The AI Workforce completes the administration behind care
              providers and medical practices. Workforce Continuity builds, prepares and coordinates your
              own casual workforce, so every cover request has a clear outcome.
            </p>
          </div>
        </section>

        <section id="services" className="scroll-mt-20" style={{ backgroundColor: CREAM }}>
          <div className={`${FRAME} ${GUTTER} grid gap-6 pb-20 md:grid-cols-2 md:pb-28`}>
            {OFFERS.map((o, i) => (
              <article key={o.href} className="flex flex-col overflow-hidden rounded-lg border border-ink-100 bg-white shadow-lift">
                <div className="px-8 pb-2 pt-8" style={{ backgroundColor: i ? CREAM_DEEP : "#EEF3FF" }}>
                  <div className="mx-auto max-w-[360px] translate-y-6"><o.Mini /></div>
                </div>
                <div className="flex flex-1 flex-col px-8 pb-8 pt-12">
                  <p className={`${MICRO} text-brand-500`}>{o.eyebrow}</p>
                  <h2 style={SERIF} className="mt-3 text-3xl font-bold text-ink-950">{o.name}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{o.lead}</p>
                  <ul className="mt-6 flex flex-1 flex-col gap-3">
                    {o.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3"><Tick /><span className="text-sm leading-relaxed text-ink-700">{pt}</span></li>
                    ))}
                  </ul>
                  <div className="mt-8"><Cta href={o.href}>{o.cta}</Cta></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section style={{ backgroundColor: CREAM_DEEP }}>
          <div className={`${FRAME} ${GUTTER} py-16 md:py-24`}>
            <h2 style={SERIF} className="mx-auto max-w-[22ch] text-balance text-center text-[clamp(1.75rem,1.15rem+2.3vw,2.6rem)] font-bold leading-[1.15] text-ink-950">
              Not sure which one you need?
            </h2>
            <p className="mx-auto mt-4 max-w-[52ch] text-center text-base text-ink-600">
              Both start with a free conversation. Here is how they differ.
            </p>
            {/* phones: one card per service, so neither column hides off-screen */}
            <div className="mt-10 grid gap-4 md:hidden">
              {OFFERS.map((o, j) => (
                <div key={o.href} className="rounded-lg border border-ink-100 bg-white p-5 shadow-raise">
                  <a href={o.href} style={SERIF} className="inline-flex items-center gap-1.5 text-xl font-bold text-ink-950">{o.name}<ArrowRight aria-hidden className="h-4 w-4 text-brand-500" /></a>
                  <dl className="mt-3">
                    {COMPARE.map((row) => (
                      <div key={row[0]} className="border-t border-ink-100 py-3">
                        <dt className="text-[11px] font-semibold uppercase tracking-caps text-ink-500">{row[0]}</dt>
                        <dd className="mt-1 text-[15px] leading-relaxed text-ink-700">{row[j + 1]}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
            <div className="mt-12 hidden overflow-x-auto rounded-lg border border-ink-100 bg-white shadow-raise md:block">
              <table className="w-full min-w-[640px] text-left text-[15px]">
                <thead>
                  <tr className="border-b border-ink-100">
                    <th className="px-6 py-4" />
                    {OFFERS.map((o) => (
                      <th key={o.href} style={SERIF} className="px-6 py-4 text-lg font-bold text-ink-950">
                        <a href={o.href} className="inline-flex items-center gap-1.5 hover:text-brand-500">{o.name}<ArrowRight aria-hidden className="h-4 w-4 text-brand-500" /></a>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map(([k, a, b]) => (
                    <tr key={k} className="border-b border-ink-100 last:border-0">
                      <th scope="row" className="px-6 py-4 align-top text-xs font-semibold uppercase tracking-caps text-ink-500">{k}</th>
                      <td className="px-6 py-4 align-top leading-relaxed text-ink-700">{a}</td>
                      <td className="px-6 py-4 align-top leading-relaxed text-ink-700">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: DEEP }}>
          <div className={`${FRAME} ${GUTTER} flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between`}>
            <div>
              <h2 style={SERIF} className="text-2xl font-bold text-white">Prefer to talk it through?</h2>
              <p className="mt-2 text-[15px] text-white/70">Tell us what you need and we will point you to the right service.</p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
              <a href={`mailto:${EMAIL}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white hover:underline"><Mail aria-hidden className="h-4 w-4" />{EMAIL}</a>
              <a href={TEL} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white hover:underline"><Phone aria-hidden className="h-4 w-4" />{PHONE}</a>
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
            {OFFERS.map((o) => <a key={o.href} href={o.href} className="inline-flex min-h-11 items-center hover:text-brand-500">{o.name}</a>)}
            <a href="/privacy-policy" className="inline-flex min-h-11 items-center hover:text-brand-500">Privacy policy</a>
            <a href="/terms-of-service" className="inline-flex min-h-11 items-center hover:text-brand-500">Terms of use</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
