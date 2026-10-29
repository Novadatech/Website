"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Quote,
  Star,
} from "lucide-react";

import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import StickyCta from "@/components/desk/StickyCta";
import { Band, BandHeading } from "@/components/desk/Band";
import {
  BODY,
  BTN_ON_INK,
  BTN_PRIMARY,
  D2,
  DISPLAY,
  FRAME,
  GUTTER,
  MICRO,
  MICRO_TIGHT,
  RAIL_GRID,
  SMALL,
} from "@/components/desk/tokens";
import { CONTINUITY, ROSTERING } from "@/content/offers";

/*
 * ══════════════════════════════════════════════════════════════════════
 * /care — the care audience hub.
 *
 * 🔴 REBUILT 29 OCTOBER 2026 as the third of three, after /care/rostering
 * and /care/workforce. The founder's copy, the two pillar pages' shape,
 * and THE HOME PAGE'S HERO FORMAT, which they asked for by name: proof
 * strip, display headline, then the two doors as the largest object in
 * the fold. The previous hub build is gone.
 *
 * ⚠️ IT IS A CLIENT COMPONENT, so its metadata CANNOT live in this file.
 * It is exported from page.tsx, which wraps this. Same arrangement as
 * both pillar pages.
 *
 * 🔴 NO CALENDAR ON THIS PAGE, and that is not an oversight. It is the
 * one rule carried over intact from the build this replaced. Each
 * pillar has its OWN calendar feeding its OWN pipeline:
 *     /care/rostering   InaO8Qj92uCQ8BglSMhW
 *     /care/workforce   8J16HJQJHvwiqzmxaEEm
 * A calendar here would be named for one half, wrong for the other at
 * the moment of commitment, and would file the booking against the
 * wrong offer. So every booking action on this page is a LINK to a
 * pillar's #book, never an embed. Do not add one.
 *
 * ⚠️ WHICH IS WHY THE FINAL ASK IS A RANKED PAIR, not a third button.
 * The founder's copy ends with "Not Sure Where to Start? Book a
 * complimentary conversation", and a booking button has to land on a
 * calendar. Sending an undecided reader to one calendar silently files
 * them against that offer, so instead the block recommends the audit,
 * says why in one line, and demotes the other route to a text link. A
 * reader who already knows it is the staffing half still gets there in
 * one click, on the right calendar.
 *
 * ⚠️ THIS REVERSES TWO EARLIER STANDING NOTES, both deliberately, both
 * because the founder's own copy says otherwise:
 *   · The old build said "the ask is a PRESCRIPTION, NOT A CHOOSER" and
 *     "never flatten the two routes into equal buttons". Section 4 of
 *     the new copy is a chooser by design, with an equal pair. Shipped
 *     as written. The ranked pair survives only in the final ask, where
 *     it has to, because that is the one place a calendar is chosen.
 *   · The old build kept a fixed pair of phrases ("the workers you
 *     already have" / "the workers you do not have yet") as the
 *     comprehension spine across all three care pages. Both pillar
 *     pages lost it earlier today when they were rebuilt, so this page
 *     is the last instance and the spine is now fully retired.
 *
 * ⚠️ NO PATHWAY DIAGRAM. The build this replaced carried one. It is
 * still on every other offer page via the shared component; this hub no
 * longer shows it. Flagged to the founder.
 *
 * 🔴 NO PRICE, anywhere. The founder's copy already avoids figures here,
 * which matches where both pillar pages landed today. Keep it that way.
 *
 * 🔴 NEVER PROMISE THE FILL OR THE SAVING. The FAQ says outright that
 * savings are not guaranteed and that outcomes depend on the provider's
 * circumstances. Load-bearing, both of them.
 *
 * ⚠️ THE TESTIMONIALS ARE VERBATIM AND FOUNDER-SUPPLIED, and they are a
 * DIFFERENT SET from the two pillar pages: same three organisations,
 * three new quotes. Do not reword, and do not sync them with the other
 * pages.
 * ══════════════════════════════════════════════════════════════════════
 */

/* 🔴 VERBATIM, FOUNDER-SUPPLIED. Do not reword.
   ⚠️ THE NAME IS EMMANUELLA, two Ls. Founder-confirmed 29 October
   after /care/rostering was found carrying one L. All three care
   pages now agree. Do not "correct" it back. */
const TESTIMONIALS = [
  {
    org: "Maxicare Plus",
    quote:
      "Novada Tech understands the realities of running and growing an NDIS business. What stood out was their willingness to understand our challenges, their structured approach and their commitment to delivering meaningful outcomes. They brought a level of professionalism and accountability that made them feel like a genuine business partner.",
    name: "Founder, Josh",
  },
  {
    org: "Morning Star Community Services",
    quote:
      "Working with Novada Tech has been a positive experience. Their team is proactive, organised and focused on delivering practical results. They understand that running a care organisation requires consistency, clear communication and reliable support behind the scenes. That is what we value about working with them.",
    name: "Founder, Emmanuella",
  },
  {
    org: "Support Link",
    quote:
      "What impressed us about Novada Tech was their attention to detail and their commitment to understanding our business before recommending solutions. Their communication, professionalism and structured approach gave us confidence that we were working with a team that genuinely cared about delivering value.",
    name: "Founder, Peter",
  },
];

/* ⚠️ THE TWO DOORS. Hrefs come from offers.ts so they cannot drift from
   the rest of the estate; the wording is the founder's. */
const DOORS = [
  {
    href: ROSTERING.href,
    name: "Rostering Audit & Efficiency",
    body: "We review workforce costs, rostering practices, billing and claims to identify avoidable expenditure, potential revenue leakage and practical improvement opportunities.",
    foot: "One-off, independently scoped review",
  },
  {
    href: CONTINUITY.href,
    name: "Workforce Continuity",
    body: "We help you build and maintain a dependable internal workforce through proactive recruitment, onboarding, induction, training administration and ongoing compliance support.",
    foot: "Ongoing managed workforce support",
  },
];

const PROBLEMS = [
  {
    h: "Rising workforce costs",
    b: "Overtime, inefficient rosters, agency expenditure and last-minute shift changes can increase the cost of delivering care.",
  },
  {
    h: "Billing & claims discrepancies",
    b: "Eligible services may be delivered but not invoiced or claimed accurately. Rejected claims and reconciliation gaps can leave legitimate revenue unresolved.",
  },
  {
    h: "Ongoing staffing challenges",
    b: "Vacancies, worker turnover and unexpected absences can place pressure on existing employees and service coordinators.",
  },
  {
    h: "Increasing administrative workload",
    b: "Recruitment, screening, onboarding, training and compliance tracking all require consistent follow-through.",
  },
];

const AUDIT_WORKFORCE = [
  "Overtime and penalty expenditure.",
  "Agency staffing costs.",
  "Inefficient shift allocation.",
  "Worker availability and utilisation.",
  "Roster changes and coverage inefficiencies.",
  "Relevant timesheet and payroll discrepancies.",
];

const AUDIT_BILLING = [
  "Eligible services that may not have been billed or claimed.",
  "Incorrect fees and billing applications.",
  "Rejected, unpaid or unresolved claims.",
  "Service delivery and invoice discrepancies.",
  "Payment reconciliation gaps.",
  "Potential underbilling and overbilling exceptions.",
];

const CONTINUITY_INCLUDES = [
  {
    h: "Proactive recruitment",
    b: "Ongoing sourcing, candidate screening coordination and recruitment pipeline management for agreed frontline roles.",
  },
  {
    h: "Screening & clearance coordination",
    b: "Administrative support for applicable worker screening, reference checks, clearances and qualification records.",
  },
  {
    h: "Worker onboarding & induction",
    b: "Structured onboarding, documentation coordination, induction administration and worker readiness tracking.",
  },
  {
    h: "Training administration",
    b: "Training coordination, completion tracking, refresher reminders and maintenance of relevant learning records.",
  },
  {
    h: "Compliance tracking & monitoring",
    b: "Ongoing administrative tracking of relevant worker credentials, clearances, training records and outstanding requirements.",
  },
  {
    h: "Workforce administration & reporting",
    b: "Recruitment pipeline visibility, onboarding progress updates and ongoing workforce-readiness reporting.",
  },
];

const ASK_AUDIT = [
  "Are our staffing costs higher than they need to be?",
  "Are we relying too heavily on overtime or agencies?",
  "Are we making the best use of available workers?",
  "Are delivered services being billed and claimed correctly?",
  "Are there financial discrepancies hidden across our operational records?",
];

const ASK_CONTINUITY = [
  "How can we build a stronger internal workforce?",
  "How do we reduce recurring recruitment pressure?",
  "Can we prepare suitable workers before vacancies become urgent?",
  "How can we improve onboarding and induction processes?",
  "How do we keep training and compliance administration under control?",
];

const PRINCIPLES = [
  {
    n: "1",
    h: "Practical operational understanding",
    b: "We focus on real challenges care providers manage every day: workforce coverage, recruitment, scheduling, documentation, billing and administrative coordination.",
  },
  {
    n: "2",
    h: "Evidence-based improvement",
    b: "Where an audit is required, we examine actual operational and financial records rather than relying on speculative savings or generic assumptions.",
  },
  {
    n: "3",
    h: "Proactive workforce support",
    b: "We help organisations approach recruitment and worker readiness as ongoing responsibilities rather than tasks that begin only when a staffing shortage occurs.",
  },
  {
    n: "4",
    h: "Clear accountability",
    b: "We establish defined responsibilities, consistent processes and reporting arrangements so important operational activities have an owner.",
  },
];

const WHO = [
  {
    h: "NDIS service providers",
    b: "Organisations delivering disability support services, including supported independent living, in-home support, community access and related support services. Our solutions help providers examine workforce costs, billing processes and workforce capacity.",
  },
  {
    h: "Support at Home providers",
    b: "Organisations coordinating home care workers, service visits, travel and administrative processes across community-based services. We help examine relevant rostering and billing arrangements while supporting recruitment and worker readiness.",
  },
  {
    h: "Residential aged care providers",
    b: "Organisations managing ongoing staffing requirements, relief arrangements, workforce administration and relevant aged care billing processes. Our solutions are tailored to the operational and funding arrangements that apply to the provider.",
  },
];

const STEPS = [
  {
    n: "1",
    h: "Tell us about your organisation",
    b: "Book a complimentary discovery conversation. We will learn about your service model, workforce arrangements, operational challenges and current priorities.",
  },
  {
    n: "2",
    h: "Identify the right solution",
    b: "We will discuss whether your organisation would benefit from an independent Rostering Audit & Efficiency review, ongoing Workforce Continuity support, or a combination of the two. We will explain the differences and help you understand which approach is most appropriate.",
  },
  {
    n: "3",
    h: "Agree on the scope",
    b: "If there is a suitable fit, we will outline the recommended service scope, responsibilities, information requirements, commercial terms and implementation arrangements.",
  },
  {
    n: "4",
    h: "Begin the engagement",
    b: "Depending on the service selected, we begin the agreed audit process or establish ongoing workforce support. Throughout the engagement, we focus on clear communication, defined responsibilities and practical outcomes.",
  },
];

const FAQ = [
  {
    q: "What does Novada Tech do?",
    a: "Novada Tech helps NDIS and aged care providers improve workforce efficiency, examine billing and claims processes, and build more dependable internal workforce capacity. Our two core care-sector services are Rostering Audit & Efficiency and Workforce Continuity.",
  },
  {
    q: "What is the difference between the two services?",
    a: "Rostering Audit & Efficiency is a one-off operational and financial review designed to identify potential workforce cost inefficiencies, billing discrepancies and improvement opportunities. Workforce Continuity is an ongoing managed support service focused on recruitment, screening coordination, onboarding, induction, training administration and workforce compliance tracking.",
  },
  {
    q: "Does the Rostering Audit include billing and claims?",
    a: "Yes. The agreed audit scope includes relevant billing, claims and payment reconciliation processes. The review is tailored to applicable NDIS, Support at Home or residential aged care funding arrangements.",
  },
  {
    q: "Can Novada help us reduce agency staffing costs?",
    a: "Yes, reducing avoidable agency reliance is one of the objectives of our workforce efficiency and continuity offerings. However, outcomes depend on your organisation's circumstances, worker availability and the improvements implemented. Savings are not guaranteed.",
  },
  {
    q: "Does Workforce Continuity replace our recruitment or HR team?",
    a: "Not necessarily. Our service can work alongside your existing internal team, taking responsibility for agreed administrative and recruitment coordination processes. Your organisation retains employment decisions, suitability assessments and final worker deployment approvals.",
  },
  {
    q: "Do we need new software?",
    a: "Not necessarily. Our approach is designed to work with relevant existing systems and records where practical, subject to agreed access and technical arrangements.",
  },
  {
    q: "Can we engage Workforce Continuity without completing an audit?",
    a: "Yes. Both services are available independently, and we will discuss which approach is appropriate for your needs.",
  },
  {
    /* 🔴 NO FIGURE, matching both pillar pages. The founder's copy for
       this page already answers the question without one. */
    q: "How much do your services cost?",
    a: "Pricing depends on your organisation's size, operational requirements and the agreed service scope. Our Rostering Audit & Efficiency service is a separately scoped, one-off engagement. Workforce Continuity is an ongoing managed service. You can discuss current starting prices and the appropriate service scope during a complimentary discovery conversation.",
  },
  {
    q: "How do we get started?",
    a: "Book a complimentary 30-minute discovery call. We will learn about your organisation, explain our services and help establish whether there is a suitable fit.",
  },
];

/* ── building blocks. Same set as both pillar pages. ─────────────── */

const WIDE = "max-w-[90ch]";

/* ⚠️ ELEVATED AND SEPARATED, matching /care/rostering and
   /care/workforce. The site's own reveal class, not a new system. */
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

/* 🔴 BLUE, NOT GREEN, on the founder's instruction (29 October
   2026): a five-star row in Trustpilot's green invites a brand
   complaint we have already had two notices about, whatever the exact
   hex. Trustpilot green is #00B67A and this was #0CC481, close enough
   to be the problem.

   ⚠️ BUT NOT brand-500. The raw brand blue #003DDB on canvas-ink
   #0A0D14 is about 2:1 and the stars all but vanish, the same trap
   tokens.ts flags for buttons. brand-200 #A6BEFF is 10.58:1 on that
   ground and is the brand's own on-ink blue, already used by the
   eyebrow directly above this bar.

   ⚠️ The PROOF STRIP passes brand-500 explicitly, because those
   cards sit on white. Light surface gets the deep blue, ink surface
   gets the light one. Do not unify them. */
function Stars({ className = "h-4 w-4 fill-brand-200 text-brand-200" }) {
  return (
    <span aria-hidden className="flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={className} strokeWidth={0} />
      ))}
    </span>
  );
}

function TestimonialSlider() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const go = (d: number) =>
    setI((v) => (v + d + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div className="relative mt-10">
      <div className="overflow-hidden rounded-xl bg-brand-500 p-7 shadow-raise md:p-12 lg:p-16">
        <Quote
          aria-hidden
          className="h-9 w-9 fill-white/90 text-white/90"
          strokeWidth={0}
        />
        <blockquote className="mt-6 max-w-[46ch] text-xl font-medium leading-snug text-white md:text-2xl lg:max-w-[52ch] lg:text-[32px] lg:leading-[1.3]">
          {t.quote}
        </blockquote>
        <figcaption className="mt-8">
          <p className="text-base font-semibold text-white">{t.name}</p>
          <p className={`${MICRO_TIGHT} mt-1.5 text-white/75`}>{t.org}</p>
        </figcaption>
      </div>

      <div className="mt-5 flex items-center justify-between">
        {/* ⚠️ -ml cancels the first dot button's own padding so the
            row still lines up with the quote above it. */}
        <div className="-ml-[13px] flex items-center">
          {TESTIMONIALS.map((x, n) => (
            <button
              key={x.org}
              type="button"
              aria-label={`Show the quote from ${x.org}`}
              aria-current={n === i ? "true" : undefined}
              onClick={() => setI(n)}
              /* ⚠️ The HIT AREA is 36x44 and the dot inside it is 10px.
                 An 8px button is not tappable on a phone. */
              className="group/dot flex h-11 w-9 items-center justify-center"
            >
              <span
                aria-hidden
                className={`block h-2.5 rounded-full transition-all duration-200 ${
                  n === i
                    ? "w-7 bg-brand-500"
                    : "w-2.5 bg-ink-200 group-hover/dot:bg-ink-300"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous quote"
            onClick={() => go(-1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-700 transition-colors duration-150 hover:border-brand-500 hover:text-brand-500"
          >
            <ArrowLeft aria-hidden className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next quote"
            onClick={() => go(1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-700 transition-colors duration-150 hover:border-brand-500 hover:text-brand-500"
          >
            <ArrowRight aria-hidden className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
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

/** A link styled as the page's primary action. */
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

export default function CarePage() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <DeskNav tone="dark" audience="care" bookHref="#book" />

      <main>
        {/* ══ 1 HERO ══════════════════════════════════════════════════
            🔴 THE HOME PAGE'S FORMAT, on the founder's instruction:
            rail, proof strip, display headline, then THE TWO DOORS as
            the largest object in the fold. A visitor decides in about
            three seconds, and on a hub the answer they need is not
            "what is this" but "which half am I".
            ═════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden border-b border-white/10 bg-canvas-ink">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -left-40 -top-56 h-[620px] w-[620px] rounded-full bg-brand-500/20 blur-[130px]" />
            <div className="absolute -bottom-72 -right-40 h-[560px] w-[560px] rounded-full bg-signal-600/10 blur-[140px]" />
          </div>

          {/* ⚠️ NO RAIL ON THIS HERO, and no max-width on the
              headline. Both were inherited from the home page format and
              both narrowed the text: the rail grid cut the column from
              1240px to 970px, and max-w-display (17ch) then cut the
              headline itself to 585px, which left half the frame empty
              on a desktop. The founder asked for it to fill the width
              the way /care/rostering and /care/workforce do, and those
              two run the headline edge to edge at 1142px with no cap.
              Measured on all three before and after.

              ⚠️ The BANDS below still have their rails. It is only
              the hero that runs full width, which is exactly how the two
              pillar pages are built. */}
          <div
            className={`${FRAME} ${GUTTER} relative border-x border-white/10 pb-16 pt-10 md:pb-20 md:pt-14`}
          >
            {/* ⚠️ NO RATING BAR IN THIS HERO, unlike the two
                pillar pages. Two reasons that agree: the HOME PAGE
                FORMAT the founder asked for does not have one, its
                hero trust signal IS the proof strip below; and it
                cost 73px at the top of the fold, which was enough
                to push THE DOORS off the screen at 360px. The 5.0
                and the 77 reviews are still the first thing under
                the hero, in the proof strip section. */}
            <p className={`${MICRO} text-brand-200`}>
              For Australian NDIS &amp; aged care providers
            </p>

            {/* ⚠️ THE HOME PAGE'S FORMAT, BUT NOT ITS d1 TOKEN.
                d1's clamp floor is 42px, which is right for the home
                page's seven-word position line and wrong for this
                twelve-word headline: measured at 42px it ran to five
                or six lines and pushed THE DOORS off the first
                screen entirely at 320 and 360px. The doors are the
                main event of a hub, so they have to be in the fold.

                This is the same clamp both pillar pages use: a 32px
                floor, a steeper slope, and the identical 76px cap by
                1280px, so the desktop hero still matches the home
                page exactly and only phones change. Measured, not
                assumed. */}
            <h1
              className={`${DISPLAY} mt-5 text-[clamp(2rem,0.89rem+4.83vw,4.75rem)] leading-[0.93] tracking-[-0.015em] text-white`}
            >
              Control workforce costs. Protect revenue. Build a workforce
              you can rely on.
            </h1>

            <div
              className={`mt-7 flex ${WIDE} flex-col gap-5 text-base text-white/75`}
            >
              <p>
                Running a care organisation should not mean constantly
                managing roster disruptions, escalating staffing costs,
                recruitment challenges and billing discrepancies. At Novada
                Tech, we help NDIS and aged care providers strengthen the
                operations behind care through two specialised services.
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
                  <span className="flex items-start justify-between gap-3">
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
                    className={`${MICRO_TIGHT} mt-6 block border-t border-white/10 pt-5 text-white/55`}
                  >
                    {d.foot}
                  </span>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ── PROOF STRIP ──────────────────────────────────────────── */}
        <section className="border-b border-ink-100 bg-ink-50">
          <div
            className={`${FRAME} ${GUTTER} border-x border-ink-100 py-10 md:py-12`}
          >
            <div className="grid gap-5 md:grid-cols-3 md:gap-6">
              {[
                { v: "5.0", l: "Average client rating", stars: true },
                { v: "77", l: "Provider reviews", stars: false },
                {
                  v: "205",
                  l: "NDIS and aged care providers across Australia",
                  stars: false,
                },
              ].map((s, i) => (
                <div
                  key={s.l}
                  className="reveal rounded-xl border border-ink-100 bg-white p-6 text-center shadow-raise md:p-7"
                  style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
                >
                  <p className={`${D2} text-brand-500`}>{s.v}</p>
                  {s.stars ? (
                    <div className="mt-3 flex justify-center">
                      <Stars className="h-4 w-4 fill-brand-500 text-brand-500" />
                    </div>
                  ) : null}
                  <p className="mt-3 text-sm font-medium text-ink-600">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2 THE PROBLEM ────────────────────────────────────────── */}
        <Band index="01" label="The problem">
          <h2 className={`${D2} text-ink-950`}>
            Delivering great care is challenging enough. The operations behind
            it should not make it harder.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Every day, care providers are balancing service delivery, workforce
            requirements, administrative responsibilities and financial
            pressures. The challenge is that operational inefficiencies do not
            always appear as obvious problems.
          </p>
          <BoxCards items={PROBLEMS} cols={2} />
          <p className={`${BODY} ${WIDE} mt-10`}>
            When these operational demands become difficult to manage, the
            pressure reaches beyond administration. It can affect financial
            performance, management capacity and the reliability of service
            delivery.
          </p>
          <p className="mt-8 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            That is why Novada focuses on the systems and processes behind the
            care itself.
          </p>
        </Band>

        {/* ── 3 THE TWO SERVICES ───────────────────────────────────── */}
        <Band index="02" label="Our two core services">
          <h2 className={`${D2} text-ink-950`}>
            Two specialist solutions. One goal: stronger care operations.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Every care provider faces different challenges. Some need better
            financial and operational visibility. Others need dependable
            workforce capacity. Novada offers two distinct solutions designed
            to address these needs.
          </p>

          {/* SERVICE 1 */}
          <div className="reveal mt-12 rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8">
            <p className={`${MICRO} text-brand-500`}>Service one</p>
            <h3 className="mt-3 text-xl font-semibold text-ink-950 md:text-2xl">
              Are rostering costs eating into your margins while billing gaps
              go unnoticed?
            </h3>
            <p className={`${BODY} ${WIDE} mt-5`}>
              Your organisation may be spending more than necessary to deliver
              care while also experiencing legitimate revenue discrepancies
              from services already delivered. Our comprehensive Rostering
              Audit &amp; Efficiency service examines both sides of your
              financial and operational performance.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8">
              <div>
                <p className={`${MICRO} text-brand-500`}>
                  Workforce cost &amp; rostering efficiency
                </p>
                <Bullets items={AUDIT_WORKFORCE} />
              </div>
              <div>
                <p className={`${MICRO} text-brand-500`}>
                  Billing, claims &amp; revenue assurance
                </p>
                <Bullets items={AUDIT_BILLING} />
              </div>
            </div>

            <p className={`${SMALL} mt-8 border-t border-ink-100 pt-5`}>
              <span className="font-semibold text-ink-950">
                What you receive:
              </span>{" "}
              an evidence-based assessment of potential financial and
              operational discrepancies, supported by prioritised
              recommendations and a practical improvement roadmap.
            </p>
            <p className={`${SMALL} mt-3`}>
              <span className="font-semibold text-ink-950">The goal:</span>{" "}
              help your organisation identify avoidable workforce expenditure,
              improve billing accuracy and make more informed operational
              decisions.
            </p>

            <div className="mt-8">
              <GoTo href={ROSTERING.href}>
                Explore Rostering Audit &amp; Efficiency
              </GoTo>
            </div>
            <p className={`${SMALL} mt-4`}>
              One-off, independently scoped operational and financial review.
            </p>
          </div>

          {/* SERVICE 2 */}
          <div
            className="reveal mt-6 rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8"
            style={{ ["--reveal-delay" as string]: "70ms" }}
          >
            <p className={`${MICRO} text-brand-500`}>Service two</p>
            <h3 className="mt-3 text-xl font-semibold text-ink-950 md:text-2xl">
              Stop the roster headaches. Build a workforce you can rely on.
            </h3>
            <p className={`${BODY} ${WIDE} mt-5`}>
              Stop waiting until a vacancy or staffing emergency before
              building your workforce. Our Workforce Continuity service
              provides ongoing support to help NDIS and aged care providers
              develop and maintain their own workforce capacity. Instead of
              continually starting recruitment from scratch, we help you create
              a consistent approach to attracting, preparing and
              administratively supporting frontline workers.
            </p>

            <p className={`${MICRO} mt-8 text-brand-500`}>
              What our service includes
            </p>
            <div className="mt-5 grid gap-5 md:grid-cols-2 md:gap-6">
              {CONTINUITY_INCLUDES.map((c) => (
                <div key={c.h} className="border-l-2 border-ink-100 pl-5">
                  <h4 className="text-base font-semibold text-ink-950">
                    {c.h}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {c.b}
                  </p>
                </div>
              ))}
            </div>

            <p className={`${SMALL} mt-8 border-t border-ink-100 pt-5`}>
              <span className="font-semibold text-ink-950">
                What you receive:
              </span>{" "}
              an ongoing workforce support function designed to reduce
              administrative pressure and help your organisation build
              dependable internal staffing capacity.
            </p>
            {/* 🔴 "Reduce avoidable" is the ceiling of the claim. Never
                let this become a promise to eliminate agency use. */}
            <p className={`${SMALL} mt-3`}>
              <span className="font-semibold text-ink-950">The goal:</span>{" "}
              reduce avoidable agency dependence, strengthen worker readiness
              and support reliable, sustainable service delivery.
            </p>

            <div className="mt-8">
              <GoTo href={CONTINUITY.href}>Explore Workforce Continuity</GoTo>
            </div>
            <p className={`${SMALL} mt-4`}>
              Ongoing managed workforce support tailored to your organisation.
            </p>
          </div>
        </Band>

        {/* ── 4 WHICH SOLUTION ─────────────────────────────────────── */}
        <Band index="03" label="Which solution" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            Start with the challenge that matters most to your organisation
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Not every provider needs the same solution.
          </p>

          {/* ⚠️ AN EQUAL PAIR, on the founder's instruction. The build
              this replaced ranked them deliberately. Section 4 of the new
              copy is a chooser by design, so here the two are equals. The
              ranked pair survives only in the final ask, where a calendar
              has to be chosen. */}
          <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
            <div className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8">
              <p className={`${MICRO} text-brand-500`}>
                Choose Rostering Audit &amp; Efficiency if you are asking
              </p>
              <Bullets items={ASK_AUDIT} />
              <div className="mt-7">
                <GoTo href={ROSTERING.href}>Explore the audit</GoTo>
              </div>
            </div>
            <div
              className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8"
              style={{ ["--reveal-delay" as string]: "70ms" }}
            >
              <p className={`${MICRO} text-brand-500`}>
                Choose Workforce Continuity if you are asking
              </p>
              <Bullets items={ASK_CONTINUITY} />
              <div className="mt-7">
                <GoTo href={CONTINUITY.href}>Explore Workforce Continuity</GoTo>
              </div>
            </div>
          </div>

          <div className="reveal mt-6 rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8">
            <h3 className="text-base font-semibold text-ink-950">Need both?</h3>
            <p className={`${BODY} ${WIDE} mt-3`}>
              Some providers benefit from understanding existing workforce and
              financial inefficiencies while also strengthening their future
              workforce capacity. Our services can complement each other, but
              they are available independently. You do not need to purchase an
              audit before engaging Workforce Continuity.
            </p>
          </div>
        </Band>

        {/* ── 5 WHY NOVADA TECH ────────────────────────────────────── */}
        <Band index="04" label="Why Novada Tech">
          <h2 className={`${D2} text-ink-950`}>
            We focus on the work behind the care
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            At Novada Tech, we believe reliable care delivery depends on
            effective operational systems, strong workforce processes and
            accurate information. Our approach is built around four principles.
          </p>
          <BoxCards items={PRINCIPLES} cols={2} />
          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            We believe good technology, structured processes and capable people
            should work together to make care operations more reliable.
          </p>
        </Band>

        {/* ── 6 CUSTOMER EXPERIENCE ────────────────────────────────── */}
        <Band index="05" label="Customer experience" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            Experience supporting organisations across the care sector
          </h2>
          <TestimonialSlider />
        </Band>

        {/* ── 7 WHO WE SUPPORT ─────────────────────────────────────── */}
        <Band index="06" label="Who we support">
          <h2 className={`${D2} text-ink-950`}>
            Built for the operational realities of Australian care providers
          </h2>
          <BoxCards items={WHO} cols={3} />
          <p className={`${BODY} ${WIDE} mt-10`}>
            Whether you are managing an established care operation or preparing
            for growth, Novada helps you strengthen the systems that support
            your workforce and service delivery.
          </p>
        </Band>

        {/* ── 8 HOW WE WORK ────────────────────────────────────────── */}
        <Band index="07" label="How we work">
          <h2 className={`${D2} text-ink-950`}>
            A simple, practical approach to getting started
          </h2>
          <BoxCards items={STEPS} cols={2} />
          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            No unnecessary complexity. Just a structured approach to improving
            the operations behind care.
          </p>
          <div className="mt-10">
            <GoTo href="#book">Book a 30-minute discovery conversation</GoTo>
          </div>
        </Band>

        {/* ── 9 OUR PHILOSOPHY ─────────────────────────────────────── */}
        <Band index="08" label="Our philosophy" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            Stronger operations support better care
          </h2>
          <div className={`mt-6 flex ${WIDE} flex-col gap-4`}>
            <p className={`${BODY} ${WIDE}`}>
              Care providers exist to deliver safe, reliable and meaningful
              services to the people who depend on them. But behind every
              successfully delivered service is an operational system.
            </p>
            <p className={`${BODY} ${WIDE}`}>
              Someone has to coordinate the workforce. Someone has to make sure
              the right people are ready. Someone has to maintain records,
              track requirements and reconcile financial information.
            </p>
            <p className={`${BODY} ${WIDE}`}>
              When those systems work well, providers can operate with greater
              clarity and confidence. When they become inefficient or difficult
              to manage, unnecessary pressure can fall on staff, coordinators,
              managers and the organisation itself.
            </p>
          </div>
          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            At Novada Tech, we believe important operational work should have
            clear ownership, reliable processes and appropriate oversight. That
            is the work we are here to strengthen.
          </p>
        </Band>

        {/* ── 10 FAQ ───────────────────────────────────────────────── */}
        <Band index="09" label="Questions">
          <h2 className={`${D2} text-ink-950`}>Frequently asked questions</h2>
          <Faq />
        </Band>

        {/* ══ 11 THE ASK ══════════════════════════════════════════════
            🔴 NO CALENDAR HERE. See the file header: each pillar owns
            its own calendar and its own pipeline, so every action in
            this section is a LINK to a pillar's #book.
            ═════════════════════════════════════════════════════════ */}
        <section id="book" className="border-t border-white/10 bg-canvas-ink">
          <div
            className={`${FRAME} ${GUTTER} border-x border-white/10 py-16 md:py-24 lg:py-32`}
          >
            <div className={RAIL_GRID}>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-center gap-3 lg:block">
                  <span className={`${MICRO} tabular text-white/55`}>10</span>
                  <span
                    aria-hidden
                    className="h-px w-6 bg-white/20 lg:my-3 lg:h-6 lg:w-px"
                  />
                  <h2 className={`${MICRO} text-white/85`}>Get started</h2>
                </div>
              </div>

              <div className="min-w-0">
                <BandHeading dark>
                  Better workforce efficiency starts with better operational
                  support.
                </BandHeading>

                <p className={`${WIDE} mt-7 text-base text-white/75`}>
                  Whether your organisation needs greater visibility over
                  rostering costs and billing performance or ongoing help
                  building a reliable internal workforce, Novada Tech offers
                  practical solutions designed for the care sector. Find the
                  right support for your organisation.
                </p>

                <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-white/10 md:grid-cols-2">
                  {[
                    {
                      href: ROSTERING.href,
                      name: "Rostering Audit & Efficiency",
                      body: "Identify potential cost inefficiencies, billing discrepancies and improvement opportunities.",
                      cta: "Explore the audit",
                    },
                    {
                      href: CONTINUITY.href,
                      name: "Workforce Continuity",
                      body: "Build and maintain dependable workforce capacity through proactive recruitment and ongoing worker-readiness support.",
                      cta: "Explore Workforce Continuity",
                    },
                  ].map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="group flex h-full flex-col bg-canvas-raised p-6 transition-colors duration-150 ease-standard hover:bg-[#161C29] md:p-8"
                    >
                      <span className="flex items-start justify-between gap-3">
                        <span className="text-lg font-semibold text-white">
                          {s.name}
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

                {/* ⚠️ A RANKED PAIR, and it has to be. A booking button
                    must land on a calendar, and this page has none. An
                    equal pair here would send an undecided reader to a
                    calendar at random and file them against the wrong
                    offer. So: recommend one, say why, and keep the other
                    route one click away for the reader who already
                    knows. */}
                <p className="mt-12 text-lg font-semibold text-white">
                  Not sure where to start?
                </p>
                <p className={`${WIDE} mt-3 text-base text-white/75`}>
                  Start with the audit conversation. It reads your own records,
                  so it is the quickest way to find out which half your problem
                  is actually in. If you already know the harder problem is
                  that there is nobody to ring, book the workforce
                  conversation instead. Each one is booked on its own page.
                </p>

                <div className="mt-8">
                  <GoTo href={`${ROSTERING.href}#book`} tone="ink">
                    Book a free 30-minute discovery call
                  </GoTo>
                </div>

                <p className="mt-7">
                  <Link
                    href={`${CONTINUITY.href}#book`}
                    className="group inline-flex items-center gap-2 border-b border-white/25 pb-0.5 text-sm font-semibold text-white transition-colors duration-150 ease-standard hover:border-brand-200 hover:text-brand-200"
                  >
                    Staffing is the bigger problem? Book the workforce
                    conversation
                    <ArrowRight
                      aria-hidden
                      className="h-3.5 w-3.5 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
                    />
                  </Link>
                </p>

                <p className="mt-8 text-sm text-white/55">
                  No obligation to proceed.
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
        tagline="NDIS, home care and aged care providers."
        href="#book"
      />
    </div>
  );
}
