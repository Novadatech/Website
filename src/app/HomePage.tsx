"use client";

import Link from "next/link";
import { ArrowRight, Check, ChevronDown } from "lucide-react";

import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import StickyCta from "@/components/desk/StickyCta";
import { Band, BandHeading } from "@/components/desk/Band";
import { AUDIENCES, BOOKING, CONTINUITY, LEAKAGE, ROSTERING } from "@/content/offers";
import {
  BODY,
  BTN_ON_INK,
  BTN_PRIMARY,
  DISPLAY,
  D2,
  FRAME,
  GUTTER,
  MICRO,
  MICRO_TIGHT,
  RAIL_GRID,
  SMALL,
} from "@/components/desk/tokens";

/*
 * ══════════════════════════════════════════════════════════════════════
 * / — the main home page, and the router between the two audiences.
 *
 * 🔴 REBUILT 29 OCTOBER 2026, last of seven, on the founder's copy and
 * the shape of the six pages before it. page.tsx is a thin server
 * wrapper around this file.
 *
 * 🔴 NO CALENDAR ON THE ROUTER, carried over intact and now true of all
 * three hubs. There are FOUR offers and four calendars, so any calendar
 * here would be named for one of them and wrong for the other three at
 * the exact moment of commitment. The router's job is to route. Every
 * booking action is a LINK to an audience hub's #book, which recommends
 * an offer, whose page carries the calendar.
 *
 * ══════════════════════════════════════════════════════════════════════
 * 🔴 THE POSITION LINE LEAVES THE H1, AND THAT IS THE BIGGEST SINGLE
 * CHANGE ON THIS PAGE.
 *
 * "We streamline the work behind the care." was the homepage H1. The
 * founder's copy replaces it with an offer-led headline. It renders in
 * five places and this was number one; the other four are untouched and
 * must stay that way:
 *   2. DeskFooter on every page, with its load-bearing second sentence
 *      "Alongside your team, never instead of them."
 *   3. StickyCta's default tagline
 *   4. The metadata title here in page.tsx (hardcoded)
 *   5. The share image in opengraph-image.tsx (hardcoded)
 * So the brand promise still signs off every page, including this one,
 * exactly as the founder's copy ends it. ⚠️ The metadata title and the
 * share card were deliberately NOT changed to match the new H1: they
 * carry the position line, they are hardcoded in two separate files,
 * and the copy does not ask for them. Flagged to the founder.
 * ══════════════════════════════════════════════════════════════════════
 *
 * 🔴 "GAP" SURVIVES IN EXACTLY ONE PLACE ON THIS PAGE, and nowhere
 * else. In Australian healthcare "the gap" is the PATIENT'S
 * OUT-OF-POCKET after the rebate, which is why it is banned across the
 * practices estate. The one exception is the Rostering Audit heading,
 * because that is the live H1 of /care/rostering, approved by the
 * founder for the CARE market where the word carries no rebate
 * meaning, and a router that promises a different headline from the
 * page it links to is its own bug. Every other instance in the supplied
 * copy, including the practices audit heading, now says which problem
 * is meant. The practices heading matches ITS live page: "unbilled
 * services".
 *
 * 🔴 NO PRICES. The copy listed all four (A$5,000, A$5,000, A$3,500/mo,
 * A$3,500/mo) and then carried the line "All prices should be confirmed
 * before publication", which is an internal note that must never ship.
 * The founder stripped every figure from the six pages before this one.
 *
 * ⚠️ THE DISCOVERY CALL IS 30 MINUTES. The copy said 20 twice and 30
 * twice.
 *
 * ⚠️ NO 5.0 / 77 / 205 PROOF STRIP HERE, unlike the four offer pages
 * and the practices hub. The 205 is labelled by audience on every page
 * that carries it, and this page has two audiences: "healthcare
 * practices" would be wrong for a care reader and "NDIS and aged care
 * providers" wrong for a practice one. Rather than invent a combined
 * label, it is left off. Flagged to the founder, who can give the
 * number a dual-audience wording if they want it here.
 *
 * ⚠️ THE THREE CLIENTS ARE NAMED, NOT QUOTED. The founder's copy lists
 * Maxicare Plus, Morning Star and Support Link as organisations worked
 * with, which is accurate for both audiences, and carefully does NOT
 * present them as evidence of practice results. The care quotes stay on
 * the care pages. Do not promote this list into testimonials.
 *
 * ⚠️ NO PATHWAY DIAGRAM. The build this replaces carried two. Both
 * audience hubs lost theirs in the same rebuild. Flagged.
 * ══════════════════════════════════════════════════════════════════════
 */

/* ⚠️ Hrefs from offers.ts so they cannot drift from the nav, the hubs
   and the sitemap. The wording is the founder's. */
const DOORS = [
  {
    href: AUDIENCES.find((a) => a.slug === "care")!.href,
    eyebrow: "Care providers",
    name: "NDIS & aged care",
    body: "Improve rostering efficiency, investigate billing accuracy and build a reliable internal workforce.",
    cta: "Explore care provider solutions",
  },
  {
    href: AUDIENCES.find((a) => a.slug === "practices")!.href,
    eyebrow: "Healthcare practices",
    name: "GP, specialist & allied health",
    body: "Identify patient revenue leakage and get ongoing support with calls, bookings, follow-ups and billing.",
    cta: "Explore healthcare practice solutions",
  },
];

const RELIES_ON = [
  "Workforces need to be planned.",
  "Staff need to be recruited and prepared.",
  "Appointments need to be coordinated.",
  "Service delivery records need to be accurate.",
  "Billing and claims need to be processed correctly.",
  "And administrative tasks need consistent follow-through.",
];

const CHALLENGES = [
  {
    h: "Avoidable workforce expenditure",
    b: "Overtime, agency staffing and inefficient rostering can increase the cost of delivering care.",
  },
  {
    h: "Billing & revenue discrepancies",
    b: "Eligible services may go unbilled, claims may remain unresolved and payments may not fully reconcile.",
  },
  {
    h: "Recruitment & readiness pressure",
    b: "Late recruitment, delayed onboarding and inconsistent worker preparation can create ongoing staffing pressure.",
  },
  {
    h: "Missed enquiries & appointment opportunities",
    b: "Busy front desks, unfilled cancellations and incomplete administrative follow-ups can affect patient access and appointment utilisation.",
  },
  {
    h: "Growing administrative workload",
    b: "Managers, receptionists and coordinators may spend increasing amounts of time managing repetitive tasks instead of focusing on their primary responsibilities.",
  },
];

const TYPES = [
  {
    n: "1",
    h: "Audit & efficiency",
    b: "Understand what is happening inside your operations. Our audit services examine relevant records and workflows to identify potential cost inefficiencies, legitimate revenue discrepancies and opportunities for improvement. We help management understand where issues may exist, their possible financial implications and which actions deserve priority.",
  },
  {
    n: "2",
    h: "Managed continuity services",
    b: "Get ongoing support to keep important processes moving. Our managed services help organisations maintain the administrative and workforce processes that need consistent attention, from recruitment and onboarding to patient enquiries, appointment administration and billing support, within an agreed service scope.",
  },
];

const ROSTERING_WORKFORCE = [
  "Avoidable overtime and penalty expenditure.",
  "Agency staffing costs and utilisation.",
  "Inefficient shift allocation.",
  "Workforce availability and utilisation patterns.",
  "Roster changes and coverage inefficiencies.",
  "Relevant timesheet and payroll discrepancies.",
];

const ROSTERING_BILLING = [
  "Eligible services that may not have been invoiced or claimed.",
  "Incorrect fees and claim applications.",
  "Potential underbilling and overbilling.",
  "Rejected or unresolved claims.",
  "Service delivery and billing discrepancies.",
  "Outstanding payments and unreconciled exceptions.",
];

const WORKFORCE_INCLUDES = [
  {
    h: "Proactive recruitment",
    b: "Ongoing candidate sourcing, recruitment coordination and workforce pipeline management for agreed roles.",
  },
  {
    h: "Screening & clearance coordination",
    b: "Administrative support for relevant worker checks, qualifications, credentials and clearance requirements.",
  },
  {
    h: "Worker onboarding & induction",
    b: "Structured onboarding workflows, documentation coordination, induction tracking and worker preparation.",
  },
  {
    h: "Training administration",
    b: "Training scheduling, completion tracking, refresher reminders and relevant learning records.",
  },
  {
    h: "Compliance monitoring",
    b: "Administrative tracking of applicable worker credentials, clearances, training and outstanding documentation.",
  },
  {
    h: "Workforce reporting",
    b: "Visibility over recruitment progress, onboarding status and outstanding workforce-readiness requirements.",
  },
];

const LEAKAGE_ACCESS = [
  "Missed and unanswered patient enquiries.",
  "Incomplete appointment requests and follow-ups.",
  "Booking conversion patterns where measurable.",
  "Cancelled appointments and unused capacity.",
  "Incomplete administrative cancellation recovery.",
  "Clinician-approved recall administration.",
  "Appointment scheduling inefficiencies.",
];

const LEAKAGE_BILLING = [
  "Completed eligible services that may not have been invoiced.",
  "Incorrect fees and billing discrepancies.",
  "Potential underbilling and overbilling.",
  "Rejected Medicare or private health insurance claims.",
  "Unresolved claims and outstanding payments.",
  "Differences between service records, invoices and payments.",
  "Unreconciled financial exceptions.",
];

const BOOKING_INCLUDES = [
  {
    h: "Unlimited telephone answering",
    b: "Incoming patient call support during agreed operating hours and within the contracted service arrangements.",
  },
  {
    h: "Appointment bookings & scheduling",
    b: "Routine enquiries, appointment bookings, confirmations and rescheduling.",
  },
  {
    h: "Cancellation recovery",
    b: "Administrative coordination to offer available appointments to suitable patients through practice-approved processes.",
  },
  {
    h: "Patient follow-ups",
    b: "Support for approved appointment enquiries, reminders, callbacks and outstanding administrative tasks.",
  },
  {
    h: "Clinician-approved recall administration",
    b: "Administrative coordination of authorised recall communications, booking and contact tracking.",
  },
  {
    h: "Billing & claims support",
    b: "Routine invoice preparation, authorised claims processing, rejection follow-up and reconciliation administration.",
  },
];

const PRINCIPLES = [
  {
    n: "1",
    h: "Industry-focused solutions",
    b: "We tailor our services to the operating realities of NDIS and aged care providers and of GP, specialist and allied health practices. We recognise that their workforce, billing, patient access and funding arrangements are different.",
  },
  {
    n: "2",
    h: "Evidence-based assessments",
    b: "Our audit services examine available organisational records and distinguish confirmed discrepancies from potential opportunities requiring verification. We do not rely on speculative savings promises.",
  },
  {
    n: "3",
    h: "Practical ongoing support",
    b: "Our managed services focus on the administrative tasks that need consistent follow-through, from recruitment and onboarding to patient bookings and billing.",
  },
  {
    n: "4",
    h: "Support for existing teams & systems",
    b: "We aim to work alongside your current staff and systems where practical, with defined responsibilities and appropriate access arrangements.",
  },
  {
    n: "5",
    h: "Clear accountability",
    b: "Agreed workflows, operational reporting, confidentiality procedures and escalation arrangements guide our engagements.",
  },
];

const WHO = [
  {
    h: "NDIS service providers",
    b: "Organisations delivering disability support services, including supported independent living, in-home support, community access and related services. Our solutions focus on rostering efficiency, relevant billing assurance, recruitment and workforce administration.",
  },
  {
    h: "Support at Home providers",
    b: "Organisations coordinating care workers and community-based services. Our solutions focus on workforce allocation, travel-related efficiency, relevant service billing and worker readiness.",
  },
  {
    h: "Residential aged care providers",
    b: "Organisations managing workforce coverage, relief requirements, rostering expenditure and relevant residential aged care financial processes.",
  },
  {
    h: "General practices",
    b: "GP clinics managing patient enquiries, appointment schedules, administrative follow-ups, clinician-approved recalls and Medicare billing workflows.",
  },
  {
    h: "Specialist medical practices",
    b: "Specialist clinics coordinating consultations, referrals, appointment changes, private billing and relevant claim processes.",
  },
  {
    h: "Allied health practices",
    b: "Physiotherapy, psychology, occupational therapy, speech pathology, podiatry and other allied health practices, with relevant patient administration and billing workflows.",
  },
];

const STEPS = [
  {
    n: "1",
    h: "Understand your organisation",
    b: "We start with a complimentary 30-minute discovery conversation. We will learn about your industry, service model, existing systems and current operational priorities.",
  },
  {
    n: "2",
    h: "Recommend the appropriate service",
    b: "We will discuss whether your organisation may benefit from an audit, ongoing managed support or a combination of both. Our goal is to understand the actual problem before recommending an engagement.",
  },
  {
    n: "3",
    h: "Agree on the scope & responsibilities",
    b: "If there is a suitable fit, we will outline the proposed deliverables, workflows, information requirements, responsibilities, fees and operating arrangements.",
  },
  {
    n: "4",
    h: "Begin the engagement",
    b: "For an audit, we review the agreed records and processes, present findings and provide recommendations. For a managed continuity service, we establish the approved workflows, access arrangements and ongoing administrative support process.",
  },
  {
    n: "5",
    h: "Review & improve",
    b: "Where ongoing services are engaged, we provide agreed reporting, escalate issues and review processes as organisational needs change.",
  },
];

const FAQ = [
  {
    q: "What does Novada Tech do?",
    a: "Novada Tech provides operational audit and managed administrative support services for Australian NDIS and aged care providers and for healthcare practices. We help organisations investigate potential financial and operational inefficiencies, and we support recurring workforce or practice administration tasks.",
  },
  {
    q: "What are your four main services?",
    a: "Rostering Audit & Efficiency, Workforce Continuity, Patient Revenue Leakage Audit, and Patient Booking & Retention Continuity. The two care-provider services focus on workforce operations, rostering costs and relevant billing assurance. The two healthcare-practice services focus on patient access, appointments, billing and administrative continuity.",
  },
  {
    q: "What is the difference between an audit and a continuity service?",
    a: "An audit is a separately scoped review designed to identify potential discrepancies, inefficiencies and improvement opportunities. A continuity service provides ongoing support for agreed administrative or workforce processes.",
  },
  {
    q: "Do I need an audit before using your managed services?",
    a: "No. All four services can be engaged independently. We will discuss the most appropriate solution based on your organisation's needs.",
  },
  {
    q: "Can Novada help reduce agency staffing costs?",
    a: "Our Rostering Audit can investigate relevant agency expenditure and workforce inefficiencies, and our Workforce Continuity service can help build a stronger internal recruitment pipeline and improve worker readiness. Any actual reduction in agency expenditure depends on the organisation's circumstances and is not guaranteed.",
  },
  {
    q: "Can you help healthcare practices manage missed calls and appointment cancellations?",
    a: "Yes. Our Patient Revenue Leakage Audit can review relevant enquiry and appointment data to identify possible administrative weaknesses. Our Patient Booking & Retention Continuity service provides ongoing telephone answering, booking and cancellation recovery support within agreed operating arrangements.",
  },
  {
    q: "Does Novada support Medicare and private health insurance billing?",
    a: "Our healthcare-practice services can include relevant billing and claims reviews or administration within the agreed scope. Clinical entitlement, Medicare item eligibility, billing-code decisions and other matters requiring professional judgement must be verified by appropriately qualified personnel.",
  },
  {
    q: "Does Novada help with NDIS and aged care billing?",
    a: "Our Rostering Audit & Efficiency service includes relevant billing, claims and reconciliation assurance within the agreed scope. NDIS, Support at Home and residential aged care arrangements are considered separately according to the applicable requirements.",
  },
  {
    q: "Can you work with our current systems?",
    a: "Where practical, we aim to work with your existing rostering, HR, appointment, practice management and billing systems. Compatibility, security, user permissions and access requirements are confirmed before implementation.",
  },
  {
    /* 🔴 NO FIGURES. The copy listed all four and then said "All prices
       should be confirmed before publication", which is an internal
       note. The founder removed every figure from the six pages before
       this one. */
    q: "How much do your services cost?",
    a: "The two audits are separately scoped, one-off engagements. The two continuity services are ongoing managed services charged monthly. Final pricing depends on the agreed scope, operational complexity, service volumes and delivery requirements, so we confirm it with you during a discovery conversation, before any work begins.",
  },
  {
    /* 🔴 LOAD-BEARING. One answer covering every guarantee we refuse to
       make, across all four offers. */
    q: "Can Novada guarantee savings or revenue recovery?",
    a: "No. Our audits identify evidence-supported findings and potential opportunities. Actual outcomes depend on the circumstances, the applicable rules and the decisions made after the review. Our managed services likewise do not guarantee that every vacancy will be filled, every call answered immediately or every appointment cancellation recovered.",
  },
  {
    q: "How do we get started?",
    a: "Book a complimentary 30-minute discovery conversation. We will discuss your organisation's challenges, explain our services and determine whether there is a suitable fit.",
  },
];

/* ── building blocks. Same set as the six pages before it. ───────── */

const WIDE = "max-w-[90ch]";

function BoxCards({
  items,
  cols = 2,
}: {
  items: { h: string; b: string; n?: string }[];
  cols?: 2 | 3;
}) {
  return (
    <div
      className={`mt-10 grid gap-5 md:gap-6 ${
        cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
      }`}
    >
      {items.map((c, i) => (
        <div
          key={c.h}
          className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise transition-[transform,box-shadow] duration-200 ease-standard hover:-translate-y-0.5 hover:shadow-lift md:p-7"
          style={{ ["--reveal-delay" as string]: `${Math.min(i, 4) * 70}ms` }}
        >
          {c.n ? (
            <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-sm font-bold text-white">
              {c.n}
            </span>
          ) : null}
          <h3 className="text-base font-semibold text-ink-950">{c.h}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{c.b}</p>
        </div>
      ))}
    </div>
  );
}

function Bullets({
  items,
  tone = "light",
}: {
  items: string[];
  tone?: "light" | "dark";
}) {
  return (
    <ul className="mt-5 flex flex-col gap-2.5">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3">
          <Check
            aria-hidden
            strokeWidth={2.4}
            className={`mt-1 h-3.5 w-3.5 flex-shrink-0 ${
              tone === "dark" ? "text-brand-200" : "text-brand-500"
            }`}
          />
          <span
            className={`text-sm leading-relaxed ${
              tone === "dark" ? "text-white/80" : "text-ink-600"
            }`}
          >
            {t}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ⚠️ NATIVE <details>. No JS, keyboard and screen reader support for
   free, and it still works if hydration never finishes. */
function Faq() {
  return (
    <div className="mt-10 flex flex-col gap-3">
      {FAQ.map((f, i) => (
        <details
          key={f.q}
          className="reveal group rounded-xl border border-ink-100 bg-white shadow-raise [&_summary::-webkit-details-marker]:hidden"
          style={{ ["--reveal-delay" as string]: `${Math.min(i, 4) * 50}ms` }}
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 p-6 text-base font-semibold text-ink-950 md:p-7">
            <span>{f.q}</span>
            <ChevronDown
              aria-hidden
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-ink-400 transition-transform duration-200 ease-standard group-open:rotate-180"
            />
          </summary>
          <p className="px-6 pb-6 text-sm leading-relaxed text-ink-600 md:px-7 md:pb-7">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}

function GoTo({
  href,
  children,
  tone = "light",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "light" | "ink";
}) {
  return (
    <Link
      href={href}
      className={`${tone === "ink" ? BTN_ON_INK : BTN_PRIMARY} w-full text-base sm:w-auto`}
    >
      {children}
      <ArrowRight
        aria-hidden
        className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
      />
    </Link>
  );
}

/** One of the four offers, rendered identically whichever audience. */
function OfferCard({
  eyebrow,
  heading,
  kind,
  intro,
  groups,
  cards,
  receive,
  goal,
  href,
  cta,
  foot,
  delay = 0,
}: {
  eyebrow: string;
  heading: string;
  kind: string;
  intro: string;
  groups?: { label: string; items: string[] }[];
  cards?: { h: string; b: string }[];
  receive: string;
  goal: string;
  href: string;
  cta: string;
  foot: string;
  delay?: number;
}) {
  return (
    <div
      className="reveal mt-6 rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8"
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <p className={`${MICRO} text-brand-500`}>{eyebrow}</p>
        <span aria-hidden className="text-ink-300">
          &middot;
        </span>
        <p className={`${MICRO_TIGHT} text-ink-500`}>{kind}</p>
      </div>
      <h3 className="mt-3 text-xl font-semibold text-ink-950 md:text-2xl">
        {heading}
      </h3>
      <p className={`${BODY} ${WIDE} mt-5`}>{intro}</p>

      {groups ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8">
          {groups.map((g) => (
            <div key={g.label}>
              <p className={`${MICRO} text-brand-500`}>{g.label}</p>
              <Bullets items={g.items} />
            </div>
          ))}
        </div>
      ) : null}

      {cards ? (
        <div className="mt-8 grid gap-5 md:grid-cols-2 md:gap-6">
          {cards.map((c) => (
            <div key={c.h} className="border-l-2 border-ink-100 pl-5">
              <h4 className="text-base font-semibold text-ink-950">{c.h}</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{c.b}</p>
            </div>
          ))}
        </div>
      ) : null}

      <p className={`${SMALL} mt-8 border-t border-ink-100 pt-5`}>
        <span className="font-semibold text-ink-950">What you receive:</span>{" "}
        {receive}
      </p>
      <p className={`${SMALL} mt-3`}>
        <span className="font-semibold text-ink-950">The goal:</span> {goal}
      </p>

      <div className="mt-8">
        <GoTo href={href}>{cta}</GoTo>
      </div>
      <p className={`${SMALL} mt-4`}>{foot}</p>
    </div>
  );
}

export default function HomePage() {
  const care = AUDIENCES.find((a) => a.slug === "care")!;
  const practices = AUDIENCES.find((a) => a.slug === "practices")!;

  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <DeskNav tone="dark" bookHref="#book" />

      <main>
        {/* ══ 1 HERO ══════════════════════════════════════════════════
            Same shape as /care and /practices: no rail, no cap on the
            headline, and THE TWO DOORS as the largest object in the
            fold. On a router the question a visitor needs answered is
            not "what is this" but "which half am I".
            ═════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden border-b border-white/10 bg-canvas-ink">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -left-40 -top-56 h-[620px] w-[620px] rounded-full bg-brand-500/20 blur-[130px]" />
            <div className="absolute -bottom-72 -right-40 h-[560px] w-[560px] rounded-full bg-signal-600/10 blur-[140px]" />
          </div>

          <div
            className={`${FRAME} ${GUTTER} relative border-x border-white/10 pb-16 pt-10 md:pb-20 md:pt-14`}
          >
            <p className={`${MICRO} text-brand-200`}>
              For Australian care providers &amp; healthcare practices
            </p>

            {/* 🔴 THIS REPLACED THE POSITION LINE AS THE H1. See the file
                header: the line still signs off every page from the
                footer, the sticky bar, the metadata title and the share
                card, which is four of its five homes.
                ⚠️ Same clamp as all six sibling pages: a 32px floor so
                the headline does not eat a phone screen, reaching the
                identical 76px cap by 1280px. */}
            <h1
              className={`${DISPLAY} mt-5 text-[clamp(2rem,0.89rem+4.83vw,4.75rem)] leading-[0.93] tracking-[-0.015em] text-white`}
            >
              Protect revenue. Build reliable workforces. Keep care operations
              moving.
            </h1>

            <div
              className={`mt-7 flex ${WIDE} flex-col gap-5 text-base text-white/75`}
            >
              <p>
                Staffing shortages, rising workforce costs, missed patient
                enquiries, inefficient appointment processes, billing
                discrepancies and administrative backlogs can all place
                pressure on your organisation. At Novada Tech, we help you
                tackle the work behind care delivery, through specialised
                audit and managed support services for NDIS and aged care
                providers and for GP, specialist and allied health practices.
              </p>
            </div>

            {/* ── THE TWO DOORS. Each is a whole link, so on a phone a
                text target becomes a card target. ── */}
            <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-white/10 md:grid-cols-2">
              {DOORS.map((d) => (
                <Link
                  key={d.href}
                  href={d.href}
                  className="group flex h-full flex-col bg-canvas-raised p-6 transition-colors duration-150 ease-standard hover:bg-[#161C29] md:p-8"
                >
                  <span className={`${MICRO} text-brand-200`}>{d.eyebrow}</span>
                  <span className="mt-3 flex items-start justify-between gap-3">
                    <span className={`${D2} text-white`}>{d.name}</span>
                    <ArrowRight
                      aria-hidden
                      className="mt-1.5 h-5 w-5 shrink-0 text-white/40 transition-[transform,color] duration-150 ease-standard group-hover:translate-x-1 group-hover:text-brand-200"
                    />
                  </span>
                  <span className="mt-4 block text-sm leading-relaxed text-white/65">
                    {d.body}
                  </span>
                  <span
                    className={`${MICRO_TIGHT} mt-6 block border-t border-white/10 pt-5 text-brand-200`}
                  >
                    {d.cta}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href="#book" className={BTN_ON_INK}>
                Book a free discovery call
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
                />
              </a>
              <span className="text-sm text-white/60">
                Complimentary 30-minute conversation. No obligation to proceed.
              </span>
            </div>
          </div>
        </section>

        {/* ── 2 THE OPERATIONAL CHALLENGE ──────────────────────────── */}
        <Band index="01" label="The challenge">
          <h2 className={`${D2} text-ink-950`}>
            Great care depends on strong operations behind the scenes
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Every successful care organisation relies on more than the services
            delivered to its participants, residents or patients. It relies on
            the operational processes that make those services possible.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {RELIES_ON.map((t) => (
              <li
                key={t}
                className="reveal border-l-2 border-ink-200 pl-5 text-base text-ink-700"
              >
                {t}
              </li>
            ))}
          </ul>

          <p className={`${BODY} ${WIDE} mt-8`}>
            But when these responsibilities become fragmented, important issues
            can go unnoticed.
          </p>
          <BoxCards items={CHALLENGES} cols={3} />

          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            Important operational activities are often managed across different
            systems, people and workflows, without enough time, visibility or
            capacity to review and improve them.
          </p>
        </Band>

        {/* ── 3 WHAT NOVADA DOES ───────────────────────────────────── */}
        <Band index="02" label="What we do" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            We help you find what is leaking, and manage the work behind it
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Novada Tech provides two complementary types of support.
          </p>
          <BoxCards items={TYPES} cols={2} />
          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            Find what is leaking. Strengthen the processes. Keep operations
            moving.
          </p>
          <p className={`${BODY} ${WIDE} mt-6`}>
            You can engage either type of service independently, or combine
            them where appropriate.
          </p>
        </Band>

        {/* ── 4 THE FOUR OFFERS ────────────────────────────────────── */}
        <Band index="03" label="Our four solutions">
          <h2 className={`${D2} text-ink-950`}>
            Four specialised services designed around the challenges you face
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            We support two distinct sectors with solutions tailored to their
            operating models and administrative responsibilities.
          </p>

          {/* ── CARE ── */}
          <div className="mt-12 border-t-2 border-brand-500 pt-8">
            <p className={`${MICRO} text-brand-500`}>
              For NDIS &amp; aged care providers
            </p>
            <h3 className={`${D2} mt-4 text-ink-950`}>
              Control workforce costs. Strengthen staffing capacity. Support
              reliable care.
            </h3>
            <p className={`${BODY} ${WIDE} mt-5`}>
              Running an NDIS or aged care organisation means balancing service
              delivery, workforce requirements, financial performance and
              ongoing administrative responsibilities. Novada Tech offers two
              specialised services to help providers strengthen the operations
              behind care.
            </p>

            {/* 🔴 THE ONE PLACE "GAP" SURVIVES ON THIS PAGE. It is the
                live H1 of /care/rostering, approved by the founder for
                the CARE market where the word carries no rebate
                meaning, and a router that promises a different headline
                from the page it links to is its own bug. Do NOT copy
                this wording into anything practices-facing. */}
            <OfferCard
              eyebrow="Offer one"
              kind="One-off audit"
              heading="Are rostering costs eating into your margins while billing gaps go unnoticed?"
              intro="Your organisation could be spending more than necessary to deliver care while also experiencing discrepancies in legitimate billing, claims and payments. Our Rostering Audit & Efficiency examines both sides of your financial and operational performance."
              groups={[
                {
                  label: "Workforce cost & rostering efficiency",
                  items: ROSTERING_WORKFORCE,
                },
                {
                  label: "Billing, claims & revenue assurance",
                  items: ROSTERING_BILLING,
                },
              ]}
              receive="an evidence-based operational and financial review, supported by clear findings and a prioritised improvement roadmap."
              goal="help your organisation identify avoidable workforce expenditure, improve billing accuracy and make more informed operational decisions."
              href={ROSTERING.href}
              cta="Explore Rostering Audit & Efficiency"
              foot="One-off audit, for NDIS and aged care providers."
            />

            <OfferCard
              delay={70}
              eyebrow="Offer two"
              kind="Ongoing managed service"
              heading="Stop the roster headaches. Build a workforce you can rely on."
              intro="Stop constantly reacting to vacancies, chasing onboarding documents and relying on expensive agency staffing to fill preventable shortfalls. Novada Tech's Workforce Continuity service helps providers recruit proactively, prepare suitable workers and maintain administrative visibility over workforce readiness."
              cards={WORKFORCE_INCLUDES}
              receive="a managed workforce support function designed to reduce administrative pressure and help your organisation build dependable internal staffing capacity."
              goal="reduce avoidable agency dependence, strengthen workforce readiness and support more reliable service delivery."
              href={CONTINUITY.href}
              cta="Explore Workforce Continuity"
              foot="Ongoing managed service, for NDIS and aged care providers."
            />
          </div>

          {/* ── PRACTICES ── */}
          <div className="mt-14 border-t-2 border-brand-500 pt-8">
            <p className={`${MICRO} text-brand-500`}>
              For GP, specialist &amp; allied health practices
            </p>
            <h3 className={`${D2} mt-4 text-ink-950`}>
              Better patient access. Stronger revenue assurance. Less
              front-desk pressure.
            </h3>
            <p className={`${BODY} ${WIDE} mt-5`}>
              Healthcare practices face a different set of operational
              challenges. Missed patient calls, appointment cancellations,
              incomplete follow-ups, billing discrepancies and administrative
              backlogs can all affect practice efficiency and financial
              visibility.
            </p>

            {/* ⚠️ MATCHES ITS LIVE PAGE: "unbilled services", not the
                copy's "billing gaps". On a practices page the gap is
                the patient's out-of-pocket. */}
            <OfferCard
              eyebrow="Offer three"
              kind="One-off audit"
              heading="Is your practice losing revenue through missed bookings and unbilled services?"
              intro="Your practice may already have patient demand and completed services, but administrative inefficiencies or billing discrepancies could be affecting revenue performance. Our Patient Revenue Leakage Audit investigates two connected areas."
              groups={[
                {
                  label: "Patient access & appointment revenue leakage",
                  items: LEAKAGE_ACCESS,
                },
                {
                  label: "Billing, claims & revenue assurance",
                  items: LEAKAGE_BILLING,
                },
              ]}
              receive="an evidence-based review of relevant patient access, booking, billing and claims processes, supported by findings and a prioritised improvement roadmap."
              goal="help your practice identify potential revenue leakage, strengthen billing accuracy and improve administrative processes."
              href={LEAKAGE.href}
              cta="Explore Patient Revenue Leakage Audit"
              foot="One-off audit, for GP, specialist and allied health practices."
            />

            <OfferCard
              delay={70}
              eyebrow="Offer four"
              kind="Ongoing managed service"
              heading="Busy front desk? Do not let patient enquiries, bookings and billing fall behind."
              intro="Your reception team should not have to manage every incoming call, appointment change, cancellation, patient follow-up and billing exception without adequate support. Novada Tech's Patient Booking & Retention Continuity provides ongoing administrative assistance to help keep essential practice activities moving."
              cards={BOOKING_INCLUDES}
              receive="an ongoing administrative support function that works alongside your existing practice team."
              goal="reduce front-desk pressure, improve patient administration consistency and strengthen the processes supporting appointment utilisation and billing."
              href={BOOKING.href}
              cta="Explore Booking & Retention Continuity"
              foot="Ongoing managed service, for GP, specialist and allied health practices."
            />
          </div>
        </Band>

        {/* ── 5 WHICH SERVICE ──────────────────────────────────────── */}
        <Band index="04" label="Which service" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            Start with the challenge you want to solve
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
            <div className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8">
              <p className={`${MICRO} text-brand-500`}>
                I run an NDIS or aged care organisation
              </p>
              <dl className="mt-5 flex flex-col gap-5">
                <div>
                  <dt className="text-sm italic text-ink-700">
                    &ldquo;Our staffing costs are increasing, and I want to
                    understand where money may be lost.&rdquo;
                  </dt>
                  <dd className="mt-2 text-sm font-semibold text-ink-950">
                    Start with {ROSTERING.name}.
                  </dd>
                </div>
                <div>
                  <dt className="text-sm italic text-ink-700">
                    &ldquo;We are struggling with recruitment, onboarding,
                    workforce readiness or recurring staffing shortages.&rdquo;
                  </dt>
                  <dd className="mt-2 text-sm font-semibold text-ink-950">
                    Explore {CONTINUITY.name}.
                  </dd>
                </div>
              </dl>
              <div className="mt-7">
                <GoTo href={care.href}>Explore care provider solutions</GoTo>
              </div>
            </div>

            <div
              className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8"
              style={{ ["--reveal-delay" as string]: "70ms" }}
            >
              <p className={`${MICRO} text-brand-500`}>
                I run a GP, specialist or allied health practice
              </p>
              <dl className="mt-5 flex flex-col gap-5">
                <div>
                  <dt className="text-sm italic text-ink-700">
                    &ldquo;I want to know whether we are losing revenue through
                    missed enquiries, empty appointments or billing
                    discrepancies.&rdquo;
                  </dt>
                  <dd className="mt-2 text-sm font-semibold text-ink-950">
                    Start with {LEAKAGE.name}.
                  </dd>
                </div>
                <div>
                  <dt className="text-sm italic text-ink-700">
                    &ldquo;Our front desk is overloaded, and we need ongoing
                    help with calls, appointments, follow-ups and
                    billing.&rdquo;
                  </dt>
                  <dd className="mt-2 text-sm font-semibold text-ink-950">
                    Explore {BOOKING.name}.
                  </dd>
                </div>
              </dl>
              <div className="mt-7">
                <GoTo href={practices.href}>
                  Explore healthcare practice solutions
                </GoTo>
              </div>
            </div>
          </div>

          <div className="reveal mt-6 rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8">
            <h3 className="text-base font-semibold text-ink-950">
              What if you need more than one service?
            </h3>
            {/* ⚠️ NOT A GATE. True of all four offers, and saying so is
                what stops the audits reading as a funnel into the
                managed services. */}
            <p className={`${BODY} ${WIDE} mt-3`}>
              Some organisations may benefit from both an audit and ongoing
              managed support. The services are designed to complement each
              other, but no audit is required before engaging a continuity
              service.
            </p>
          </div>
        </Band>

        {/* ── 6 WHY NOVADA ─────────────────────────────────────────── */}
        <Band index="05" label="Why Novada Tech">
          <h2 className={`${D2} text-ink-950`}>
            We are not just looking at one task. We are looking at the
            operations behind your business.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            At Novada Tech, we believe stronger care organisations are built on
            reliable operational processes, accurate information and clearly
            defined responsibilities. Our approach is designed around five
            principles.
          </p>
          <BoxCards items={PRINCIPLES} cols={3} />
          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            Better operations do not require unnecessary complexity. They
            require the right processes, consistent follow-through and
            appropriate oversight.
          </p>
        </Band>

        {/* ── 7 EXPERIENCE ─────────────────────────────────────────────
             ⚠️ NAMED, NOT QUOTED. These are organisations worked with,
             which is accurate for both audiences. They are NOT presented
             as evidence of results, and the care quotes stay on the care
             pages. Do not promote this into testimonials. */}
        <Band index="06" label="Experience" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            Experience supporting organisations across the care sector
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            We have had the opportunity to work with organisations operating in
            the care sector, including:
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
            {["Maxicare Plus", "Morning Star Community Services", "Support Link"].map(
              (n, i) => (
                <div
                  key={n}
                  className="reveal rounded-xl border border-ink-100 bg-white p-6 text-center shadow-raise md:p-7"
                  style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
                >
                  <p className="text-base font-semibold text-ink-950">{n}</p>
                </div>
              ),
            )}
          </div>
          <p className={`${BODY} ${WIDE} mt-10`}>
            Our experience with care-sector businesses informs our
            understanding of administrative pressures, operational
            coordination, business growth and the importance of reliable
            support behind service delivery.
          </p>
          <p className="mt-8 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            We focus on clear expectations, effective communication,
            documented processes and practical support.
          </p>
          <div className="mt-10">
            <GoTo href="/why-novada">Learn more about Novada Tech</GoTo>
          </div>
        </Band>

        {/* ── 8 WHO WE HELP ────────────────────────────────────────── */}
        <Band index="07" label="Who we help">
          <h2 className={`${D2} text-ink-950`}>
            Supporting care providers and healthcare practices across Australia
          </h2>
          <BoxCards items={WHO} cols={3} />
          <p className={`${BODY} ${WIDE} mt-10`}>
            Whether you are operating a growing care business or managing an
            established healthcare practice, our services are tailored to your
            organisation&apos;s operational requirements.
          </p>
        </Band>

        {/* ── 9 HOW WE WORK ────────────────────────────────────────── */}
        <Band index="08" label="How we work" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            A straightforward approach to strengthening your operations
          </h2>
          <BoxCards items={STEPS} cols={2} />
          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            Practical support. Defined responsibilities. Clear next steps.
          </p>
        </Band>

        {/* ── 10 AUDIT VS CONTINUITY ───────────────────────────────── */}
        <Band index="09" label="Find, then maintain">
          <h2 className={`${D2} text-ink-950`}>
            Find what is leaking. Strengthen the processes. Keep operations
            moving.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Operational challenges do not always have the same solution.
            Sometimes the first step is understanding where inefficiencies or
            financial discrepancies exist. Other times, the organisation
            already understands the problem but needs additional capacity to
            manage recurring tasks. Novada provides both options.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
            <div className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8">
              <p className={`${MICRO} text-brand-500`}>
                Audit services &middot; find &amp; understand
              </p>
              <Bullets
                items={[
                  `${ROSTERING.name}: investigate avoidable workforce expenditure and relevant billing and claims discrepancies.`,
                  `${LEAKAGE.name}: investigate missed patient appointment opportunities and weaknesses in billing, claims and revenue administration.`,
                ]}
              />
            </div>
            <div
              className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8"
              style={{ ["--reveal-delay" as string]: "70ms" }}
            >
              <p className={`${MICRO} text-brand-500`}>
                Managed continuity &middot; support &amp; maintain
              </p>
              <Bullets
                items={[
                  `${CONTINUITY.name}: coordinate recruitment, onboarding, induction, training administration and workforce readiness.`,
                  `${BOOKING.name}: support calls, bookings, cancellations, approved follow-ups, recalls and billing administration.`,
                ]}
              />
            </div>
          </div>

          <p className={`${BODY} ${WIDE} mt-10`}>
            You choose the support your organisation needs. An audit does not
            require a managed-service commitment, and you do not need to
            complete an audit before engaging one of our continuity services.
          </p>
        </Band>

        {/* ── 11 FAQ ───────────────────────────────────────────────── */}
        <Band index="10" label="Questions" tone="tint">
          <h2 className={`${D2} text-ink-950`}>Frequently asked questions</h2>
          <Faq />
        </Band>

        {/* ══ 12 THE ASK ══════════════════════════════════════════════
            🔴 NO CALENDAR ON THE ROUTER. Four offers, four calendars.
            Every action here is a LINK to an audience hub's #book,
            which recommends an offer, whose page carries the calendar.
            ═════════════════════════════════════════════════════════ */}
        <section id="book" className="border-t border-white/10 bg-canvas-ink">
          <div
            className={`${FRAME} ${GUTTER} border-x border-white/10 py-16 md:py-24 lg:py-32`}
          >
            <div className={RAIL_GRID}>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-center gap-3 lg:block">
                  <span className={`${MICRO} tabular text-white/55`}>11</span>
                  <span
                    aria-hidden
                    className="h-px w-6 bg-white/20 lg:my-3 lg:h-6 lg:w-px"
                  />
                  <h2 className={`${MICRO} text-white/85`}>Get started</h2>
                </div>
              </div>

              <div className="min-w-0">
                <BandHeading dark>
                  Better care operations start with the right support behind
                  the scenes.
                </BandHeading>

                <div
                  className={`mt-7 flex ${WIDE} flex-col gap-5 text-base text-white/75`}
                >
                  <p>
                    Whether you are managing a care workforce, running a
                    healthcare practice or trying to improve financial and
                    administrative processes, operational pressure can become
                    expensive and time-consuming. But you do not necessarily
                    need another software platform, another internal position
                    or another complex system to begin addressing it. You need
                    clarity about the problem, and a practical approach to
                    solving it.
                  </p>
                </div>

                <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-white/10 md:grid-cols-2">
                  {[
                    {
                      href: `${care.href}#book`,
                      eyebrow: "For NDIS & aged care providers",
                      body: "Reduce avoidable workforce costs, strengthen billing assurance and build dependable internal workforce capacity.",
                      cta: "Explore care provider solutions",
                    },
                    {
                      href: `${practices.href}#book`,
                      eyebrow: "For GP, specialist & allied health practices",
                      body: "Investigate patient revenue leakage and get ongoing support with enquiries, appointments and billing.",
                      cta: "Explore healthcare practice solutions",
                    },
                  ].map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="group flex h-full flex-col bg-canvas-raised p-6 transition-colors duration-150 ease-standard hover:bg-[#161C29] md:p-8"
                    >
                      <span className={`${MICRO} text-brand-200`}>
                        {s.eyebrow}
                      </span>
                      <span className="mt-3 flex items-start justify-between gap-3">
                        <span className="text-lg font-semibold text-white">
                          Book a review
                        </span>
                        <ArrowRight
                          aria-hidden
                          className="mt-1 h-5 w-5 shrink-0 text-white/40 transition-[transform,color] duration-150 ease-standard group-hover:translate-x-1 group-hover:text-brand-200"
                        />
                      </span>
                      <span className="mt-3 block text-sm leading-relaxed text-white/65">
                        {s.body}
                      </span>
                      <span
                        className={`${MICRO_TIGHT} mt-6 block border-t border-white/10 pt-5 text-brand-200`}
                      >
                        {s.cta}
                      </span>
                    </Link>
                  ))}
                </div>

                <p className="mt-10 text-sm text-white/55">
                  Complimentary 30-minute conversation. Nothing is signed on
                  the call, and there is no obligation to proceed.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DeskFooter bookHref="#book" />

      {/* ⚠️ CLEARANCE FOR THE STICKY BAR. Without it the bar covers the
          last line of the footer on a phone, where it is tallest because
          the tagline wraps above a full-width button. */}
      <div aria-hidden className="h-28 sm:h-20" />

      <StickyCta
        label="Find the right service"
        tagline="Care providers and healthcare practices."
        href="#book"
      />
    </div>
  );
}
