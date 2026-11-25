"use client";

import { Check, Clock, MapPin, MessageSquare, X } from "lucide-react";

import { Bar, SERIF } from "@/components/lp/kit";
import ProductShot from "@/components/offer/ProductShot";

/*
 * ══════════════════════════════════════════════════════════════════════
 * WORKFORCE CONTINUITY: THE VISUALS, AU.
 *
 * 🔴 FOUNDER RULE, 25 Nov 2026: EVERY PAGE HAS ITS OWN SCREENS OR
 * MOCKUPS. Never one screen re-labelled for another page. So each key
 * below is used on exactly ONE page, and each concept is drawn from
 * what that page is about:
 *
 *   home        Workers & Credentials (real): records table, allocation checks
 *   what-we-do  Recruitment pipeline + Onboarding readiness (real)
 *   ndis        Candidate review + Training + Escalation owners (real)
 *   how-it-works        mockups: activation plan, working rules, SMS thread, status card
 *   who-we-support      mockups: demand map, fit check, starting pool
 *   hospitality         mockups: function request, open position, role pool
 *   construction        mockups: site crew board, replacement log, requirement profiles
 *   manufacturing...    mockups: depot shift, three-site board, expiring items
 *   mining...           mockups: readiness matrix, mobilisation timeline, site profiles
 *
 * Real crops: novada-website/tools/product-shots/build.py ("wc-*").
 * People and organisations in every mockup are invented.
 * ══════════════════════════════════════════════════════════════════════
 */

/* ── primitives ─────────────────────────────────────────────────────── */

function Mock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-ink-100 bg-white shadow-float ${className}`}>{children}</div>
  );
}

function Head({ t, s, chip }: { t: string; s?: string; chip?: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-ink-100 px-5 py-4">
      <div className="min-w-0">
        <p className="text-[15px] font-bold text-ink-950">{t}</p>
        {s ? <p className="mt-0.5 text-xs text-ink-500">{s}</p> : null}
      </div>
      {chip}
    </div>
  );
}

type Tone = "ok" | "warn" | "crit" | "info" | "muted";
const TONE: Record<Tone, string> = {
  ok: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  warn: "bg-amber-50 text-amber-800 ring-amber-200",
  crit: "bg-rose-50 text-rose-700 ring-rose-200",
  info: "bg-brand-50 text-brand-700 ring-brand-200",
  muted: "bg-ink-50 text-ink-500 ring-ink-200",
};
function Pill({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return (
    <span className={`inline-flex flex-shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${TONE[tone]}`}>
      {children}
    </span>
  );
}
function Dot({ tone }: { tone: Tone }) {
  const c = { ok: "bg-emerald-500", warn: "bg-amber-500", crit: "bg-rose-500", info: "bg-brand-500", muted: "bg-ink-300" }[tone];
  return <span aria-hidden className={`h-2 w-2 flex-shrink-0 rounded-full ${c}`} />;
}
function Float({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <div className={`absolute z-20 rounded-lg border border-ink-100 bg-white p-4 shadow-float ${className}`}>{children}</div>
  );
}
function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="text-[10px] font-semibold uppercase tracking-caps text-ink-400">{children}</p>;
}

/* ══ HOME ═════════════════════════════════════════════════════════════ */

function HomeHero() {
  return (
    <div className="relative pb-10 pl-0 pt-14 sm:pb-14 sm:pl-8">
      <Float className="left-0 top-0 w-[190px]">
        <Kicker>Pool readiness</Kicker>
        <p style={SERIF} className="mt-1 text-2xl font-bold text-ink-950">76 of 84</p>
        <div className="mt-3"><Bar pct={90} /></div>
        <p className="mt-2 text-[11px] text-ink-500">Credential-eligible today</p>
      </Float>
      <ProductShot src="/product/wc-home-records.webp" width={701} height={684}
        alt="Workforce records in Novada: each casual worker with their approved role, site and eligibility, from eligible to held for an expired induction"
        className="relative z-10" />
      <Float className="bottom-0 right-0 hidden w-[220px] sm:block">
        <div className="flex items-center gap-2"><Pill tone="ok"><Check className="h-3 w-3" strokeWidth={3} />Cover confirmed</Pill></div>
        <p className="mt-2 text-sm font-semibold text-ink-950">Fri 5:00–11:00 pm · North</p>
        <p className="mt-1 text-xs text-ink-500">Worker accepted 3:12 pm</p>
      </Float>
    </div>
  );
}

function HomeProcess() {
  const steps: [string, string, Tone][] = [
    ["2:48 pm", "Request received · Fri evening, north", "info"],
    ["2:51 pm", "3 eligible workers contacted", "info"],
    ["3:12 pm", "Accepted · assignment recorded", "ok"],
  ];
  return (
    <div className="relative pb-0 sm:pb-16 sm:pr-10">
      <ProductShot src="/product/wc-home-checks.webp" width={386} height={327}
        alt="Allocation checks in Novada: credentials and training, client fit, site and hours, worker acceptance and source read-back, checked in order"
        className="relative z-10 max-w-[420px]" />
      <Mock className="relative z-20 mt-4 sm:absolute sm:bottom-0 sm:right-0 sm:mt-0 sm:w-[290px]">
        <div className="px-4 py-3">
          <Kicker>Request outcome</Kicker>
          <ol className="mt-3 flex flex-col gap-2.5">
            {steps.map(([t, d, tone]) => (
              <li key={t} className="flex items-start gap-3 text-[13px]">
                <span className="mt-1.5"><Dot tone={tone} /></span>
                <span className="w-14 flex-shrink-0 tabular text-ink-400">{t}</span>
                <span className="text-ink-800">{d}</span>
              </li>
            ))}
          </ol>
        </div>
      </Mock>
    </div>
  );
}

/* ══ WHAT WE DO ═══════════════════════════════════════════════════════ */

function WwdHero() {
  return (
    <div className="relative pb-0 pt-12 sm:pb-12 sm:pr-24">
      <div className="absolute left-0 top-0 z-20">
        <Pill tone="info"><Check className="h-3 w-3" strokeWidth={3} />Hiring decisions stay with you</Pill>
      </div>
      <ProductShot src="/product/wc-wwd-requisitions.webp" width={698} height={625}
        alt="Approved requisitions in Novada: requisition intake, an approved advert, application intake, objective screening and interviews, each step with its status"
        className="relative z-10" />
      <ProductShot src="/product/wc-wwd-reqdetail.webp" width={386} height={607}
        alt="Requisition detail: role and site, hiring authority and advert receipt, with no advert published without approved demand"
        className="absolute bottom-0 right-0 z-20 hidden w-[210px] sm:block" />
    </div>
  );
}

function WwdReadiness() {
  return (
    <div className="relative">
      <ProductShot src="/product/wc-wwd-readiness.webp" width={698} height={625}
        alt="The readiness checklist in Novada: signed offer and identity, onboarding forms, induction, credentials and compliance handoff, each verified before allocation"
        className="relative z-10" />
      <div className="relative z-20 -mt-5 ml-5 inline-flex">
        <Pill tone="warn"><Clock className="h-3 w-3" />Not allocated until verified</Pill>
      </div>
    </div>
  );
}

/* ══ HOW IT WORKS ═════════════════════════════════════════════════════ */

function HiwHero() {
  const phases: { n: string; t: string; who: string; st: [string, Tone] }[] = [
    { n: "1", t: "Map your recurring gaps", who: "You confirm the scope", st: ["Done", "ok"] },
    { n: "2", t: "Set the working rules", who: "You approve the process", st: ["Approved", "ok"] },
    { n: "3", t: "Prepare your casual team", who: "You interview and hire", st: ["In progress", "info"] },
  ];
  return (
    <Mock>
      <Head t="Activation plan" s="Agreed with you before cover starts" chip={<Pill tone="info">Setup</Pill>} />
      <ol className="px-5 py-2">
        {phases.map((p, i) => (
          <li key={p.n} className={`flex items-center gap-4 py-4 ${i ? "border-t border-ink-100" : ""}`}>
            <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${p.st[1] === "ok" ? "bg-emerald-50 text-emerald-700" : "bg-brand-50 text-brand-700"}`}>
              {p.st[1] === "ok" ? <Check className="h-4 w-4" strokeWidth={3} /> : p.n}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-ink-950">{p.t}</span>
              <span className="block text-xs text-ink-500">{p.who}</span>
            </span>
            <Pill tone={p.st[1]}>{p.st[0]}</Pill>
          </li>
        ))}
      </ol>
      <div className="border-t border-ink-100 bg-ink-50/60 px-5 py-4">
        <div className="flex items-baseline justify-between text-xs text-ink-500">
          <span className="font-semibold text-ink-800">Pool build</span><span className="tabular">18 of 30 ready</span>
        </div>
        <div className="mt-2"><Bar pct={60} /></div>
      </div>
    </Mock>
  );
}

function HiwSetup() {
  const rows: [string, string][] = [
    ["Authorised contacts", "Operations lead · backup"],
    ["Service hours", "Every day, 6:00 am–10:00 pm"],
    ["Request channels", "Novada · agreed SMS line"],
    ["Escalation deadline", "2 hours before the shift"],
    ["Roster update", "Handover to your roster owner"],
  ];
  return (
    <Mock className="mx-auto max-w-[460px]">
      <Head t="Working rules" s="Version 1 · ready for your approval" chip={<Pill tone="ok"><Check className="h-3 w-3" strokeWidth={3} />Approved</Pill>} />
      <dl className="px-5 py-2">
        {rows.map(([k, v], i) => (
          <div key={k} className={`grid grid-cols-[150px_1fr] gap-3 py-3 text-[13px] ${i ? "border-t border-ink-100" : ""}`}>
            <dt className="text-ink-500">{k}</dt><dd className="font-semibold text-ink-900">{v}</dd>
          </div>
        ))}
      </dl>
    </Mock>
  );
}

function HiwSms() {
  return (
    <div className="mx-auto w-full max-w-[330px] rounded-[2.2rem] border-[10px] border-ink-900 bg-ink-900 shadow-float">
      <div className="overflow-hidden rounded-[1.6rem] bg-[#F4F6FA]">
        <div className="flex items-center gap-2 border-b border-ink-100 bg-white px-4 py-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">N</span>
          <span><span className="block text-sm font-semibold text-ink-950">Novada cover</span><span className="block text-[11px] text-ink-400">SMS</span></span>
        </div>
        <div className="flex flex-col gap-3 px-3 py-4 text-[13px] leading-snug">
          <p className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-3.5 py-2.5 text-ink-800 shadow-raise">
            Hi Sam, a shift is available on Fri, 5:00–11:00 pm, north location. Reply YES to accept or NO to pass.
          </p>
          <p className="ml-auto max-w-[40%] rounded-2xl rounded-br-sm bg-brand-500 px-3.5 py-2.5 text-white">YES</p>
          <p className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-3.5 py-2.5 text-ink-800 shadow-raise">
            Thanks Sam, you’re confirmed. Shift details are on their way.
          </p>
          <div className="mx-auto mt-1"><Pill tone="ok"><Check className="h-3 w-3" strokeWidth={3} />Accepted · assignment recorded</Pill></div>
        </div>
      </div>
    </div>
  );
}

function HiwStatus() {
  const rows: { k: string; v: string; tone: Tone; pill: string }[] = [
    { k: "Preparation", v: "Induction, evidence and approvals current", tone: "ok", pill: "Ready" },
    { k: "Availability", v: "Reported free Friday evening", tone: "info", pill: "Possible" },
    { k: "Acceptance", v: "Offer sent 2:51 pm", tone: "muted", pill: "Awaiting reply" },
  ];
  return (
    <Mock className="mx-auto max-w-[440px]">
      <div className="flex items-center gap-3 border-b border-ink-100 px-5 py-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">ST</span>
        <span><span className="block text-[15px] font-bold text-ink-950">Sam Taylor</span><span className="block text-xs text-ink-500">Casual · pool member</span></span>
      </div>
      <ul className="px-5 py-1">
        {rows.map((r, i) => (
          <li key={r.k} className={`flex items-center gap-3 py-3.5 ${i ? "border-t border-ink-100" : ""}`}>
            <span className="min-w-0 flex-1"><Kicker>{r.k}</Kicker><span className="mt-1 block text-[13px] text-ink-800">{r.v}</span></span>
            <Pill tone={r.tone}>{r.pill}</Pill>
          </li>
        ))}
      </ul>
    </Mock>
  );
}

/* ══ WHO WE SUPPORT ═══════════════════════════════════════════════════ */

function WwsHero() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const rows: [string, number[]][] = [
    ["North", [1, 1, 2, 1, 3, 4, 3]],
    ["Central", [0, 1, 1, 1, 2, 3, 2]],
    ["East", [1, 0, 1, 2, 2, 4, 4]],
    ["South", [0, 0, 1, 1, 1, 2, 1]],
  ];
  const shade = ["bg-ink-50", "bg-brand-100", "bg-brand-200", "bg-brand-400", "bg-brand-600"];
  return (
    <Mock>
      <Head t="Where cover is requested" s="Recurring requests by location, last 12 weeks" />
      <div className="overflow-x-auto px-5 py-4">
        <table className="w-full border-separate border-spacing-1.5 text-xs">
          <thead><tr><th />{days.map((d) => <th key={d} className="font-semibold text-ink-400">{d}</th>)}</tr></thead>
          <tbody>
            {rows.map(([loc, v]) => (
              <tr key={loc}>
                <th className="pr-2 text-left font-semibold text-ink-700">{loc}</th>
                {v.map((n, i) => <td key={i}><span aria-hidden className={`block h-8 min-w-[26px] rounded ${shade[n]}`} /></td>)}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-3 flex items-center gap-2 text-[11px] text-ink-500">
          <span>Fewer</span>{shade.map((s) => <span key={s} aria-hidden className={`h-2.5 w-5 rounded-sm ${s}`} />)}<span>More</span>
        </div>
      </div>
      <div className="border-t border-ink-100 px-5 py-3 text-[13px] text-ink-700">
        Weekend evenings drive most requests. <span className="font-semibold text-ink-950">Start the pool there.</span>
      </div>
    </Mock>
  );
}

function WwsFit() {
  const f: [string, string, number][] = [
    ["Recurring cover needs", "Weekly", 90], ["Roles and locations defined", "4 roles · 3 sites", 80],
    ["Employment and preparation process", "Documented", 75], ["Enough work to keep a pool engaged", "Yes", 85],
  ];
  return (
    <Mock className="mx-auto max-w-[440px]">
      <Head t="Fit check" s="Workforce review notes" chip={<Pill tone="ok">Good fit</Pill>} />
      <ul className="px-5 py-2">
        {f.map(([k, v, p], i) => (
          <li key={k} className={`py-3 ${i ? "border-t border-ink-100" : ""}`}>
            <div className="flex items-baseline justify-between gap-3 text-[13px]"><span className="text-ink-800">{k}</span><span className="font-semibold text-ink-950">{v}</span></div>
            <div className="mt-2"><Bar pct={p} /></div>
          </li>
        ))}
      </ul>
    </Mock>
  );
}

function WwsTeam() {
  return (
    <Mock className="mx-auto max-w-[460px] p-5">
      <Kicker>Starting pool plan</Kicker>
      <p style={SERIF} className="mt-1 text-xl font-bold text-ink-950">24 workers across 3 sites</p>
      <div aria-hidden className="mt-4 flex h-3 overflow-hidden rounded-full">
        <span className="w-[33%] bg-brand-600" /><span className="w-[25%] bg-brand-300" /><span className="w-[42%] bg-amber-300" />
      </div>
      <ul className="mt-4 grid gap-2 text-[13px]">
        <li className="flex items-center gap-2"><span aria-hidden className="h-2.5 w-2.5 rounded-sm bg-brand-600" /><span className="flex-1 text-ink-700">Existing casuals, ready</span><b className="tabular text-ink-950">8</b></li>
        <li className="flex items-center gap-2"><span aria-hidden className="h-2.5 w-2.5 rounded-sm bg-brand-300" /><span className="flex-1 text-ink-700">Existing casuals, records to update</span><b className="tabular text-ink-950">6</b></li>
        <li className="flex items-center gap-2"><span aria-hidden className="h-2.5 w-2.5 rounded-sm bg-amber-300" /><span className="flex-1 text-ink-700">To recruit into weekend gaps</span><b className="tabular text-ink-950">10</b></li>
      </ul>
    </Mock>
  );
}

/* ══ NDIS & AGED CARE ═════════════════════════════════════════════════ */

function NdisHero() {
  return (
    <div className="relative pb-10 pt-14 sm:pb-12">
      <Float className="right-0 top-0 w-[200px]">
        <Kicker>Pool target</Kicker>
        <p style={SERIF} className="mt-1 text-2xl font-bold text-ink-950">18 of 30</p>
        <div className="mt-3"><Bar pct={60} /></div>
        <p className="mt-2 text-[11px] text-ink-500">Support workers ready</p>
      </Float>
      <ProductShot src="/product/wc-ndis-evidence.webp" width={698} height={625}
        alt="The candidate evidence checklist in Novada: application and identity, minimum requirements, interview coordination, references and checks, and the decision packet prepared for a person to decide"
        className="relative z-10" />
      <div className="absolute bottom-0 left-4 z-20">
        <Pill tone="info"><Check className="h-3 w-3" strokeWidth={3} />You approve every hire</Pill>
      </div>
    </div>
  );
}

function NdisEscalation() {
  return (
    <ProductShot src="/product/wc-ndis-escalation.webp" width={1104} height={508}
      alt="Named escalation responsibilities in Novada: provider admins, business hours, out-of-hours on call and compliance contacts, each with a named owner and backup"
      className="relative z-10" />
  );
}

function NdisTraining() {
  return (
    <ProductShot src="/product/wc-ndis-training.webp" width={698} height={625}
      alt="Training requirements in Novada: mandatory induction, first aid, site and service modules and policy learning, each tracked against the source record"
      className="relative z-10" />
  );
}

function NdisDecision() {
  return (
    <ProductShot src="/product/wc-ndis-decision.webp" width={386} height={607}
      alt="The human decision panel: candidate, reviewer, selection outcome and offer authority, with offers blocked until a person approves"
      className="relative z-10 mx-auto max-w-[360px]" />
  );
}

/* ══ HOSPITALITY & TOURISM ═════════════════════════════════════════════ */

function HospHero() {
  return (
    <div className="relative pb-2 pt-10">
      <Mock className="relative z-10">
        <Head t="Saturday function" s="Function venue · 5:00–11:00 pm" chip={<Pill tone="warn">1 of 2 confirmed</Pill>} />
        <ul className="px-5 py-2">
          <li className="flex items-center gap-3 py-3.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700"><Check className="h-4 w-4" strokeWidth={3} /></span>
            <span className="flex-1"><span className="block text-sm font-semibold text-ink-950">Food & beverage attendant</span><span className="block text-xs text-ink-500">Mia R. accepted · venue induction current</span></span>
            <Pill tone="ok">Confirmed</Pill>
          </li>
          <li className="flex items-center gap-3 border-t border-ink-100 py-3.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-700"><MessageSquare className="h-4 w-4" /></span>
            <span className="flex-1"><span className="block text-sm font-semibold text-ink-950">Food & beverage attendant</span><span className="block text-xs text-ink-500">3 eligible casuals contacted</span></span>
            <Pill tone="info">Contacting</Pill>
          </li>
        </ul>
        <div className="border-t border-ink-100 px-5 py-3"><div className="flex justify-between text-xs text-ink-500"><span>Positions filled</span><span className="tabular">1 / 2</span></div><div className="mt-2"><Bar pct={50} tone="warm" /></div></div>
      </Mock>
      <Float className="right-0 top-0 hidden w-[180px] -translate-y-1/3 sm:block">
        <Kicker>Venue preparation</Kicker>
        <p className="mt-1 text-sm font-semibold text-ink-950">12 casuals inducted</p>
      </Float>
    </div>
  );
}

function HospFunction() {
  const out: [string, number, Tone][] = [["Contacted", 5, "info"], ["Accepted", 1, "ok"], ["Declined", 2, "muted"], ["No reply", 2, "warn"]];
  return (
    <Mock className="mx-auto max-w-[440px]">
      <Head t="Open position" s="Saturday function · F&B attendant" chip={<Pill tone="crit">Gap visible</Pill>} />
      <div className="grid grid-cols-4 divide-x divide-ink-100 border-b border-ink-100 text-center">
        {out.map(([k, n, t]) => (
          <div key={k} className="px-2 py-4"><p style={SERIF} className="text-2xl font-bold text-ink-950">{n}</p><p className="mt-1 flex items-center justify-center gap-1.5 text-[11px] text-ink-500"><Dot tone={t} />{k}</p></div>
        ))}
      </div>
      <dl className="px-5 py-3 text-[13px]">
        <div className="flex justify-between py-1.5"><dt className="text-ink-500">Sent to</dt><dd className="font-semibold text-ink-900">Venue manager</dd></div>
        <div className="flex justify-between py-1.5"><dt className="text-ink-500">Before deadline</dt><dd className="font-semibold text-ink-900">Sat 12:00 pm</dd></div>
        <div className="flex justify-between py-1.5"><dt className="text-ink-500">Next step</dt><dd className="font-semibold text-ink-900">Your decision</dd></div>
      </dl>
    </Mock>
  );
}

function HospRoles() {
  const r: [string, number][] = [["F&B attendants", 9], ["Bar staff", 5], ["Kitchen hands", 6], ["Housekeeping", 7], ["Guest services", 4], ["Event staff", 8]];
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {r.map(([k, n]) => (
        <Mock key={k} className="p-4 shadow-raise">
          <p style={SERIF} className="text-2xl font-bold text-ink-950">{n}</p>
          <p className="mt-1 text-xs text-ink-500">{k} ready</p>
        </Mock>
      ))}
    </div>
  );
}

/* ══ CONSTRUCTION ═════════════════════════════════════════════════════ */

function ConHero() {
  const crew: { r: string; w: string; tone: Tone; s: string }[] = [
    { r: "Labourer", w: "J. Lee", tone: "ok", s: "Ready" },
    { r: "Labourer", w: "Replacing withdrawal", tone: "warn", s: "Open" },
    { r: "Trade assistant", w: "A. Singh", tone: "ok", s: "Ready" },
    { r: "Site clean-up", w: "P. Wood", tone: "ok", s: "Ready" },
  ];
  return (
    <Mock>
      <div className="flex items-center justify-between gap-3 rounded-t-lg bg-ink-900 px-5 py-4 text-white">
        <span><span className="flex items-center gap-1.5 text-[15px] font-bold"><MapPin className="h-4 w-4" />Riverside site</span><span className="text-xs text-white/60">Monday · 7:00 am start</span></span>
        <Pill tone="warn">3 of 4 crew</Pill>
      </div>
      <ul className="px-5 py-1">
        {crew.map((c, i) => (
          <li key={i} className={`flex items-center gap-3 py-3 ${i ? "border-t border-ink-100" : ""}`}>
            <Dot tone={c.tone} />
            <span className="flex-1"><span className="block text-sm font-semibold text-ink-950">{c.r}</span><span className="block text-xs text-ink-500">{c.w}</span></span>
            <Pill tone={c.tone}>{c.s}</Pill>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 border-t border-ink-100 px-5 py-3">
        {["Site induction", "Construction induction card", "Task briefing"].map((b) => (
          <span key={b} className="rounded-xs bg-ink-50 px-2 py-1 text-[11px] font-semibold text-ink-600">{b}</span>
        ))}
      </div>
    </Mock>
  );
}

function ConReplace() {
  const log: [string, string, Tone][] = [
    ["Sun 4:10 pm", "Withdrawal received for Monday 7 am", "warn"],
    ["4:14 pm", "6 pool members checked · 2 not inducted for Riverside", "muted"],
    ["4:16 pm", "Offers sent to 4 eligible workers", "info"],
    ["5:02 pm", "D. Moore accepted · details rechecked", "ok"],
    ["5:05 pm", "Site contact notified", "ok"],
  ];
  return (
    <Mock className="mx-auto max-w-[460px]">
      <Head t="Replacement log" s="Riverside site · labourer" />
      <ol className="relative px-5 py-3">
        {log.map(([t, d, tone]) => (
          <li key={t} className="flex gap-3 py-2 text-[13px]">
            <span className="mt-1.5"><Dot tone={tone} /></span>
            <span className="w-[74px] flex-shrink-0 tabular text-ink-400">{t}</span>
            <span className="text-ink-800">{d}</span>
          </li>
        ))}
      </ol>
    </Mock>
  );
}

function ConRoles() {
  const cols = ["Site induction", "Evidence", "Task check"];
  const rows: [string, (boolean | null)[]][] = [
    ["General labourer", [true, true, null]], ["Trade assistant", [true, true, true]],
    ["Qualified tradesperson", [true, true, true]], ["Plant operator", [true, true, true]],
  ];
  return (
    <Mock className="overflow-x-auto">
      <table className="w-full text-[13px]">
        <thead><tr className="border-b border-ink-100 text-left">
          <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-caps text-ink-400">Requirement profile</th>
          {cols.map((c) => <th key={c} className="px-3 py-3 text-center text-[11px] font-semibold text-ink-500">{c}</th>)}
        </tr></thead>
        <tbody>{rows.map(([r, v]) => (
          <tr key={r} className="border-b border-ink-100 last:border-0">
            <td className="px-4 py-3 font-semibold text-ink-900">{r}</td>
            {v.map((x, i) => <td key={i} className="px-3 py-3 text-center">{x ? <Check aria-label="required" className="mx-auto h-4 w-4 text-emerald-600" strokeWidth={3} /> : <span className="text-ink-300">–</span>}</td>)}
          </tr>
        ))}</tbody>
      </table>
    </Mock>
  );
}

/* ══ MANUFACTURING, TRANSPORT & LOGISTICS ═════════════════════════════ */

function MfgHero() {
  return (
    <div className="relative pb-0 pt-4 sm:pb-14">
      <Mock className="relative z-10">
        <Head t="North depot" s="Tuesday · 6:00 am–2:00 pm" chip={<Pill tone="info">3 positions</Pill>} />
        <div className="grid gap-3 p-5 sm:grid-cols-2">
          <div className="rounded-lg border border-ink-100 p-4">
            <Kicker>Warehouse assistant</Kicker>
            <p style={SERIF} className="mt-1 text-xl font-bold text-ink-950">1 of 2</p>
            <div className="mt-2"><Bar pct={50} tone="warm" /></div>
            <p className="mt-2 text-xs text-ink-500">1 accepted · 2 contacted</p>
          </div>
          <div className="rounded-lg border border-ink-100 p-4">
            <Kicker>Forklift operator</Kicker>
            <p style={SERIF} className="mt-1 text-xl font-bold text-ink-950">1 of 1</p>
            <div className="mt-2"><Bar pct={100} /></div>
            <p className="mt-2 text-xs text-ink-500">Licence current · inducted</p>
          </div>
        </div>
      </Mock>
      <Float className="bottom-0 right-4 hidden w-[230px] sm:block">
        <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-amber-600" /><span className="text-sm font-semibold text-ink-950">Escalation at 4:00 am</span></div>
        <p className="mt-1 text-xs text-ink-500">If the second position stays open</p>
      </Float>
    </div>
  );
}

function MfgDepot() {
  const sites: [string, number, number][] = [["Factory", 14, 16], ["Warehouse", 11, 15], ["North depot", 9, 10]];
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {sites.map(([s, r, t]) => (
        <Mock key={s} className="p-4">
          <Kicker>{s}</Kicker>
          <p style={SERIF} className="mt-1 text-2xl font-bold text-ink-950">{r}<span className="text-base text-ink-400"> / {t}</span></p>
          <p className="mt-1 text-xs text-ink-500">inducted and available</p>
          <div className="mt-3"><Bar pct={Math.round((r / t) * 100)} /></div>
        </Mock>
      ))}
    </div>
  );
}

function MfgRoles() {
  const items: [string, string, Tone][] = [
    ["Forklift licence · K. Brown", "Expires 12 Dec", "warn"],
    ["Site induction · north depot", "3 outstanding", "warn"],
    ["Driver, agreed class · L. Ortiz", "Fitness to drive check due", "crit"],
    ["Pick packer induction · warehouse", "All current", "ok"],
  ];
  return (
    <Mock>
      <Head t="Requirements to follow up" s="Flagged before the next request" />
      <ul className="px-5 py-1">
        {items.map(([k, v, t], i) => (
          <li key={k} className={`flex items-center gap-3 py-3 text-[13px] ${i ? "border-t border-ink-100" : ""}`}>
            <Dot tone={t} /><span className="flex-1 text-ink-800">{k}</span><span className="font-semibold text-ink-950">{v}</span>
          </li>
        ))}
      </ul>
    </Mock>
  );
}

/* ══ MINING, RESOURCES & ENERGY ═══════════════════════════════════════ */

function MinHero() {
  const sites = ["Site A", "Site B", "Camp"];
  const rows: [string, ("ok" | "warn" | "crit")[]][] = [
    ["R. Clarke · stores", ["ok", "ok", "ok"]], ["T. Nguyen · trade assist", ["ok", "warn", "ok"]],
    ["M. Evans · maintenance", ["ok", "crit", "ok"]], ["S. Patel · site admin", ["warn", "crit", "ok"]],
  ];
  const icon = (s: "ok" | "warn" | "crit") =>
    s === "ok" ? <Check aria-label="ready" className="mx-auto h-4 w-4 text-emerald-600" strokeWidth={3} />
      : s === "warn" ? <Clock aria-label="expiring" className="mx-auto h-4 w-4 text-amber-600" />
        : <X aria-label="missing" className="mx-auto h-4 w-4 text-rose-600" strokeWidth={3} />;
  return (
    <Mock>
      <Head t="Readiness by site" s="Credentials, induction and training" />
      <div className="overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead><tr className="border-b border-ink-100">
            <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-caps text-ink-400">Worker</th>
            {sites.map((s) => <th key={s} className="px-3 py-3 text-center text-[11px] font-semibold text-ink-500">{s}</th>)}
          </tr></thead>
          <tbody>{rows.map(([w, v]) => (
            <tr key={w} className="border-b border-ink-100 last:border-0">
              <td className="px-5 py-3 font-semibold text-ink-900">{w}</td>
              {v.map((s, i) => <td key={i} className="px-3 py-3">{icon(s)}</td>)}
            </tr>
          ))}</tbody>
        </table>
      </div>
      <div className="flex flex-wrap gap-4 border-t border-ink-100 px-5 py-3 text-[11px] text-ink-500">
        <span className="flex items-center gap-1.5"><Check className="h-3 w-3 text-emerald-600" strokeWidth={3} />Ready</span>
        <span className="flex items-center gap-1.5"><Clock className="h-3 w-3 text-amber-600" />Expiring</span>
        <span className="flex items-center gap-1.5"><X className="h-3 w-3 text-rose-600" strokeWidth={3} />Missing</span>
      </div>
    </Mock>
  );
}

function MinMobilise() {
  const steps: [string, string, Tone][] = [
    ["Day 0", "Request · stores worker, Site A day shift", "info"],
    ["Day 0", "Site A requirements checked for 5 workers", "info"],
    ["Day 1", "R. Clarke accepted · mobilisation confirmed", "ok"],
    ["Day 3", "Day shift starts", "muted"],
  ];
  return (
    <Mock className="mx-auto max-w-[460px] p-5">
      <div className="flex items-center justify-between"><Kicker>Mobilisation</Kicker><Pill tone="info">Lead time agreed · 72 h</Pill></div>
      <ol className="mt-4 border-l-2 border-ink-100 pl-5">
        {steps.map(([d, t, tone], i) => (
          <li key={i} className="relative pb-4 last:pb-0">
            <span className="absolute -left-[26px] top-1"><Dot tone={tone} /></span>
            <p className="text-[11px] font-semibold uppercase tracking-caps text-ink-400">{d}</p>
            <p className="mt-0.5 text-[13px] text-ink-800">{t}</p>
          </li>
        ))}
      </ol>
    </Mock>
  );
}

function MinRoles() {
  const p: [string, string[]][] = [
    ["Site A", ["Site induction", "Medical", "Working at heights"]],
    ["Site B", ["Site induction", "Confined space", "Access approval"]],
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {p.map(([s, reqs]) => (
        <Mock key={s} className="p-4">
          <p className="flex items-center gap-1.5 text-sm font-bold text-ink-950"><MapPin className="h-4 w-4 text-brand-500" />{s} requirements</p>
          <ul className="mt-3 flex flex-col gap-2">
            {reqs.map((r) => <li key={r} className="flex items-center gap-2 text-[13px] text-ink-700"><Check className="h-3.5 w-3.5 text-emerald-600" strokeWidth={3} />{r}</li>)}
          </ul>
        </Mock>
      ))}
    </div>
  );
}

export const WC_VISUALS: Record<string, () => React.ReactElement> = {
  "home-hero": HomeHero, "home-process": HomeProcess,
  "wwd-hero": WwdHero, "wwd-readiness": WwdReadiness,
  "hiw-hero": HiwHero, "hiw-setup": HiwSetup, "hiw-sms": HiwSms, "hiw-status": HiwStatus,
  "wws-hero": WwsHero, "wws-fit": WwsFit, "wws-team": WwsTeam,
  "ndis-hero": NdisHero, "ndis-escalation": NdisEscalation, "ndis-training": NdisTraining, "ndis-decision": NdisDecision,
  "hosp-hero": HospHero, "hosp-function": HospFunction, "hosp-roles": HospRoles,
  "con-hero": ConHero, "con-replace": ConReplace, "con-roles": ConRoles,
  "mfg-hero": MfgHero, "mfg-depot": MfgDepot, "mfg-roles": MfgRoles,
  "min-hero": MinHero, "min-mobilise": MinMobilise, "min-matrix": MinRoles,
};
