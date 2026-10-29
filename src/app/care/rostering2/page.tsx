"use client";

import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";

import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import BookingEmbed from "@/components/desk/BookingEmbed";
import StickyCta from "@/components/desk/StickyCta";
import Calculator from "@/components/desk/Calculator";
import { Band } from "@/components/desk/Band";
import { ROSTERING_CALC } from "@/content/calculators";
import {
  BODY,
  BTN_ON_INK,
  BTN_PRIMARY,
  D1,
  D2,
  D4,
  FRAME,
  GUTTER,
  MICRO,
  MICRO_TIGHT,
  SMALL,
} from "@/components/desk/tokens";

/*
 * ══════════════════════════════════════════════════════════════════════
 * /care/rostering2 — THE COPYWRITER'S PAGE, ON THE COMPETITOR'S SHAPE.
 *
 * For review. noindex, not linked from anywhere. 29 October 2026.
 *
 * Copy supplied by the founder's copywriter and used as written, with
 * three mechanical house-style passes applied and nothing else:
 *   · em dashes removed (standing founder preference)
 *   · long prose broken into card grids, which the founder asked for
 *     so thirteen sections do not become an endless page
 *   · section order kept exactly as supplied
 *
 * ⚠️ TWO THINGS DEPART FROM THE BRIEF AND BOTH ARE DELIBERATE.
 *
 * 1. 🔴 THE TESTIMONIALS ARE EMPTY PLACEHOLDERS, NOT WRITTEN QUOTES.
 *    The brief says "please create customer testimonials related to the
 *    offer". Invented quotes attributed to named providers are fake
 *    reviews: they would be shown to real buyers as though real people
 *    said them, which is misleading conduct under the Australian
 *    Consumer Law and something the ACCC actively pursues. The card
 *    layout is built and ready. The quotes have to come from actual
 *    clients who approve them. Anything in these cards that is not a
 *    real, approved quote must be deleted before this page is indexed
 *    or linked.
 *
 * 2. ⚠️ THE RATING IS RENDERED UNBRANDED, with no review-platform name
 *    and no link to one. Trustpilot has sent TWO brand-compliance
 *    notices about this site, the second because an unbranded lockup
 *    still LINKED to their profile, which is their detection signal and
 *    is itself treated as displaying their score outside an official
 *    widget. C&D was threatened as the next step. So: no name, no
 *    wordmark, no green #00B67A, no tile-stars, no link. The rating
 *    links to /case-study, which is ours. Do not "improve" this by
 *    adding the platform name back.
 *
 * ⚠️ PRICING IS ON THIS PAGE (A$5,000 + GST, in the FAQ) because the
 * supplied copy puts it there. That reverses the standing "no pricing
 * anywhere, investment is discussed on the call" rule which the rest of
 * the estate still follows. Flagged to the founder rather than silently
 * applied to other pages.
 *
 * ⚠️ "Billing gaps" is used as the copywriter wrote it. The founder
 * confirmed on 19 October they mean a deficiency in how billing is
 * done, not a patient out-of-pocket, and has now supplied copy using
 * the word. Their call, made twice.
 *
 * RULES THAT STILL BIND: never recommend less care; a rostered hour is
 * not automatically claimable; we do not guarantee savings or recovered
 * revenue; this is not a registration, statutory or accreditation
 * audit. All four are in the copy and all four stay.
 * ══════════════════════════════════════════════════════════════════════
 */

/* 🔴 PLACEHOLDERS. Replace `quote`, `name` and `org` with real approved
   client quotes, or delete the section. Never publish invented ones. */
const TESTIMONIALS = [
  { quote: null, name: null, org: null, service: "NDIS provider" },
  { quote: null, name: null, org: null, service: "Support at Home provider" },
  { quote: null, name: null, org: null, service: "Residential aged care" },
];

const HERO_POINTS = [
  "Both sides reviewed: what you spend, and what you bill and collect",
  "Built on your own rosters, timesheets, service records and claims",
  "Evidence-based findings, with assumptions and limitations stated",
  "A prioritised improvement roadmap your team can act on",
];

const APPROACH = [
  {
    n: "1",
    h: "Workforce Cost Efficiency",
    b: "Identify avoidable overtime, inefficient worker allocation, unnecessary agency reliance and rostering practices that may be driving up costs.",
  },
  {
    n: "2",
    h: "Billing & Revenue Assurance",
    b: "Examine whether eligible services have been billed and claimed accurately, and whether submitted claims and payments have been properly reconciled.",
  },
  {
    n: "3",
    h: "Practical Operational Improvements",
    b: "Turn findings into prioritised recommendations your management team can act on.",
  },
];

const WORKFORCE_RISKS = [
  "Avoidable overtime and penalty expenditure.",
  "Excessive reliance on agency staffing.",
  "Inefficient shift allocation and worker utilisation.",
  "Unnecessary travel and scheduling inefficiencies.",
  "Short-notice staffing changes and administrative workload.",
];

const BILLING_RISKS = [
  "Eligible services delivered but not invoiced or claimed.",
  "Incorrect billing rates or support item applications.",
  "Rejected or unresolved claims.",
  "Underbilling and potential overbilling.",
  "Outstanding payments and reconciliation discrepancies.",
];

const COVERS_WORKFORCE = [
  "Overtime and penalty expenditure.",
  "Agency staffing costs.",
  "Worker availability and utilisation.",
  "Shift allocation and rostering patterns.",
  "Unfilled shifts and last-minute coverage.",
  "Travel and scheduling efficiency.",
  "Roster, timesheet and payroll discrepancies.",
  "Administrative effort involved in workforce coordination.",
];

const COVERS_BILLING = [
  "Eligible delivered services that may not have been invoiced or claimed.",
  "Underbilling and incorrectly applied charges.",
  "Rejected, delayed and unresolved claims.",
  "Discrepancies between service records, invoices and payments.",
  "Outstanding legitimate payments.",
  "Potential overbilling and compliance exceptions.",
  "Payment reconciliation and billing control weaknesses.",
];

const FUNDING = [
  {
    h: "NDIS providers",
    b: "Review relevant support item applications, service records, applicable pricing conditions, invoices, claims and payment reconciliation.",
  },
  {
    h: "Support at Home providers",
    b: "Review relevant service claims, agreed prices, participant contributions where applicable, service delivery evidence and payment reconciliation.",
  },
  {
    h: "Residential aged care providers",
    b: "Review relevant subsidy and supplement records, resident billing, funding adjustments and payment reconciliation processes.",
  },
];

const OPPORTUNITY = [
  {
    h: "Overtime becomes routine",
    b: "Last-minute shift changes regularly result in overtime. The required care is delivered, but management may have limited visibility over whether better workforce planning could reduce avoidable expenditure.",
  },
  {
    h: "Agency cover becomes the default",
    b: "External agencies are repeatedly used to fill vacancies. Agency support may be necessary, but without reviewing internal availability and recruitment readiness, unnecessary dependence can develop.",
  },
  {
    h: "Delivered services do not fully reconcile with claims",
    b: "Support records show eligible services were delivered, but the corresponding claims or payments do not consistently match. Some discrepancies may represent recoverable revenue. Others may indicate billing errors requiring correction.",
  },
  {
    h: "Management reports do not tell the whole story",
    b: "Rostering, payroll, service delivery and billing data sit in separate systems, making it difficult for management to identify connected financial problems.",
  },
];

const DIFFERENT = [
  {
    h: "Evidence before assumptions",
    b: "We examine actual organisational records rather than applying generic estimates to your workforce or revenue.",
  },
  {
    h: "Workforce costs and revenue together",
    b: "We review both sides of the financial equation: the cost of delivering care and the accuracy of billing and payments.",
  },
  {
    h: "Clear financial distinctions",
    b: "We separate confirmed discrepancies, potential recoverable amounts requiring verification and estimated future improvement opportunities.",
  },
  {
    h: "Practical recommendations",
    b: "We provide prioritised recommendations that management can assess, assign and implement.",
  },
];

const WHO = [
  {
    h: "NDIS service providers",
    b: "For providers delivering disability support services, including supported independent living, community access, in-home support and other applicable services. We help examine workforce scheduling, support delivery records, expenditure and claiming processes.",
  },
  {
    h: "Support at Home providers",
    b: "For organisations coordinating support workers, home visits, travel and community-based care. We examine relevant workforce allocation, travel efficiency, billing and payment reconciliation processes.",
  },
  {
    h: "Residential aged care providers",
    b: "For organisations managing ongoing staffing requirements, shift coverage, relief arrangements and resident funding processes. We review relevant workforce expenditure, rostering efficiency and financial reconciliation processes.",
  },
];

const STEPS = [
  {
    n: "Step 1",
    h: "Initial discovery conversation",
    b: "We begin with a complimentary 20-minute discussion to understand your service model, workforce arrangements, systems and current challenges. We will explain how the audit works and determine whether it is a suitable fit.",
  },
  {
    n: "Step 2",
    h: "Scope and records review",
    b: "We agree on the scope, review period, information requirements, timelines and fees. Relevant information may include rosters, timesheets, payroll summaries, agency invoices, service delivery records, billing and claims reports. All information access is subject to agreed confidentiality and security arrangements.",
  },
  {
    n: "Step 3",
    h: "Operational and financial analysis",
    b: "We analyse the relevant records to investigate rostering efficiency, staffing expenditure, service delivery alignment, billing discrepancies and payment reconciliation. Where sufficient evidence exists, we estimate the financial implications and distinguish confirmed discrepancies from matters needing further verification.",
  },
  {
    n: "Step 4",
    h: "Findings and improvement roadmap",
    b: "We present the audit findings and explain what they mean for your organisation. You receive prioritised recommendations, supporting evidence and a practical roadmap for addressing the identified issues.",
  },
];

const RECEIVE = [
  {
    h: "Workforce efficiency findings",
    b: "Understand where scheduling patterns, overtime, agency expenditure or worker allocation may be creating avoidable costs.",
  },
  {
    h: "Billing and revenue assurance findings",
    b: "Identify potential unbilled services, billing discrepancies, rejected claims and reconciliation exceptions.",
  },
  {
    h: "Financial opportunity assessment",
    b: "See supported estimates of potential cost improvements and legitimate revenue opportunities, with relevant assumptions and limitations clearly explained.",
  },
  {
    h: "Operational risk and controls review",
    b: "Understand where recordkeeping, workflow gaps or financial controls may need strengthening.",
  },
  {
    h: "Prioritised improvement roadmap",
    b: "Receive a clear action plan showing what should be addressed, why it matters and how improvement efforts can be prioritised.",
  },
  {
    h: "Findings walkthrough",
    b: "Discuss the findings with Novada so your leadership team understands the evidence and recommended next steps.",
  },
];

const CONTINUITY = [
  "Proactive recruitment and workforce pipeline support.",
  "Candidate screening and clearance coordination.",
  "Worker onboarding and induction.",
  "Training administration.",
  "Compliance and credential tracking.",
  "Payroll administration and workforce reporting.",
];

const FAQ = [
  {
    q: "What is included in the Rostering Audit & Efficiency service?",
    a: "The audit reviews agreed areas of workforce scheduling, labour expenditure, service delivery records, billing, claims and payment reconciliation. It is designed to identify potential inefficiencies, financial discrepancies and improvement opportunities.",
  },
  {
    q: "Does the audit also review NDIS billing and claims?",
    a: "Yes. For NDIS providers, the agreed scope can include support delivery records, invoices, relevant support items, pricing applications, rejected claims and payment reconciliation. All potential claim corrections are subject to applicable rules and verification.",
  },
  {
    q: "Does the audit cover aged care billing?",
    a: "Yes. We tailor the review to relevant Support at Home or residential aged care funding and billing arrangements.",
  },
  {
    q: "Will we need to replace our rostering software?",
    a: "No. Our audit is designed to use relevant records from your existing systems, subject to availability and agreed access arrangements.",
  },
  {
    q: "What if our rostering is already working well?",
    a: "That is a positive starting point. The audit may still help validate existing practices and identify issues relating to billing, claims or financial reconciliation. We will discuss whether there is a genuine need before recommending an engagement.",
  },
  {
    q: "How much does the audit cost?",
    a: "Comprehensive Rostering Audit & Efficiency engagements start from A$5,000 plus GST. Final fees depend on your organisation's size, operational complexity and the agreed scope. The initial 20-minute discovery conversation is complimentary.",
  },
  {
    q: "How long does the audit take?",
    a: "The review period and delivery timeline depend on your organisation's size, systems, service locations and data availability. We confirm the scope and expected schedule before commencing.",
  },
  {
    q: "Can Novada guarantee cost savings or recovered revenue?",
    a: "No. We identify evidence-supported discrepancies and potential opportunities, but actual savings and revenue recovery depend on the underlying circumstances, applicable rules and implementation decisions.",
  },
  {
    q: "Is this an official NDIS registration or compliance certification audit?",
    a: "No. This is an operational and financial efficiency review. It does not replace an NDIS registration audit, statutory financial audit, accreditation review or specialist regulatory advice.",
  },
  {
    q: "Is our operational and participant information kept confidential?",
    a: "We use agreed confidentiality, access and information-handling controls. The review should use the minimum personal information necessary, and sensitive records should not be submitted through the general website enquiry form.",
  },
  {
    q: "Can Novada help implement the recommendations?",
    a: "Yes. We can discuss suitable follow-on operational support, including our separate Workforce Continuity offering. You may also choose to implement recommendations using your own team.",
  },
];

/* ── small building blocks ──────────────────────────────────────── */

function Cta({
  children,
  tone = "light",
  href = "#book",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  href?: string;
}) {
  return (
    <a
      href={href}
      className={`${tone === "dark" ? BTN_ON_INK : BTN_PRIMARY} w-full text-base sm:w-auto`}
    >
      {children}
      <ArrowRight
        aria-hidden
        className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
      />
    </a>
  );
}

function CardGrid({
  items,
  cols = 2,
}: {
  items: { h: string; b: string; n?: string }[];
  cols?: 2 | 3;
}) {
  const filler = (cols - (items.length % cols)) % cols;
  return (
    <div
      className={`mt-10 grid gap-px overflow-hidden rounded-lg bg-ink-100 ${
        cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
      }`}
    >
      {items.map((c) => (
        <div key={c.h} className="bg-white p-6 md:p-7">
          {c.n ? (
            <span className={`${MICRO} tabular text-brand-500`}>{c.n}</span>
          ) : null}
          <h3
            className={`text-base font-semibold text-ink-950 ${c.n ? "mt-3" : ""}`}
          >
            {c.h}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{c.b}</p>
        </div>
      ))}
      {Array.from({ length: filler }).map((_, i) => (
        <div key={`f${i}`} aria-hidden className="hidden bg-white md:block" />
      ))}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-col gap-2.5">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3">
          <Check
            aria-hidden
            strokeWidth={2.4}
            className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-brand-500"
          />
          <span className="text-sm leading-relaxed text-ink-600">{t}</span>
        </li>
      ))}
    </ul>
  );
}

/* ⚠️ UNBRANDED BY NECESSITY. No platform name, no wordmark, no link to
   a review site, no #00B67A. Two compliance notices; C&D threatened.
   The rating links to our own /case-study page. */
function RatingBar() {
  return (
    <Link
      href="/case-study"
      className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 transition-colors duration-150 hover:border-white/30"
    >
      <span aria-hidden className="flex items-center gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5 fill-[#0CC481] text-[#0CC481]"
            strokeWidth={0}
          />
        ))}
      </span>
      <span className="text-sm font-semibold text-white">5.0</span>
      <span className="text-sm text-white/70">
        from 77 provider reviews
      </span>
    </Link>
  );
}

export default function Page() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <DeskNav tone="dark" audience="care" bookHref="#book" />

      <main>
        {/* ── 1 HERO ───────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-white/10 bg-canvas-ink">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -left-40 -top-56 h-[620px] w-[620px] rounded-full bg-brand-500/20 blur-[130px]" />
            <div className="absolute -bottom-72 -right-40 h-[560px] w-[560px] rounded-full bg-signal-600/10 blur-[140px]" />
          </div>

          <div
            className={`${FRAME} ${GUTTER} relative border-x border-white/10 pb-16 pt-10 md:pb-24 md:pt-14`}
          >
            <RatingBar />

            <p className={`${MICRO} mt-7 text-brand-200`}>
              For NDIS &amp; aged care providers
            </p>
            <h1 className={`${D1} mt-5 max-w-headline text-white`}>
              Are rostering costs eating into your margins while billing gaps
              go unnoticed?
            </h1>

            <div className="mt-7 flex max-w-prose flex-col gap-5 text-base text-white/75">
              <p>
                Avoidable overtime, expensive agency cover and inefficient
                rostering can quietly increase the cost of delivering care. At
                the same time, unbilled services, rejected claims and
                reconciliation gaps may mean legitimate revenue is being left
                uncollected.
              </p>
              <p>
                Novada Tech&apos;s Rostering Audit &amp; Efficiency examines
                both sides of your operations: what you are spending to deliver
                care, and whether you are accurately billing and collecting
                what you are entitled to.
              </p>
              <p>
                Using your existing rosters, timesheets, service delivery
                records, billing and claims data, we identify potential cost
                inefficiencies, revenue discrepancies and practical
                opportunities for improvement.
              </p>
            </div>

            <div className="mt-8 grid max-w-3xl gap-x-8 gap-y-3 sm:grid-cols-2">
              {HERO_POINTS.map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <Check
                    aria-hidden
                    strokeWidth={2.4}
                    className="mt-1 h-4 w-4 flex-shrink-0 text-brand-200"
                  />
                  <span className="text-sm text-white/85">{t}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Cta tone="dark">Book your rostering &amp; revenue review</Cta>
              <p className="mt-4 text-sm text-white/60">
                Start with a complimentary, no-obligation 20-minute discovery
                conversation.
              </p>
            </div>
          </div>
        </section>

        {/* ── PROOF STRIP ──────────────────────────────────────────── */}
        <section className="border-b border-ink-100 bg-ink-50">
          <div
            className={`${FRAME} ${GUTTER} border-x border-ink-100 py-10 md:py-12`}
          >
            <div className="grid gap-px overflow-hidden rounded-lg bg-ink-200 md:grid-cols-3">
              {[
                { v: "5.0", l: "Average client rating" },
                { v: "77", l: "Provider reviews" },
                {
                  v: "205",
                  l: "NDIS and aged care providers across Australia",
                },
              ].map((s) => (
                <div key={s.l} className="bg-white p-6 text-center md:p-7">
                  <p className={`${D2} text-brand-500`}>{s.v}</p>
                  <p className="mt-2 text-sm font-medium text-ink-600">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2 WHY NOVADA TECH ────────────────────────────────────── */}
        <Band index="01" label="Why Novada Tech">
          <h2 className={`${D2} max-w-headline text-ink-950`}>
            An independent look at the financial and operational performance
            behind your care services
          </h2>
          <div className="mt-6 flex max-w-prose flex-col gap-4">
            <p className={BODY}>
              Good care depends on more than filling shifts. It depends on
              running an efficient operation and accurately capturing the
              revenue your organisation is entitled to.
            </p>
            <p className={BODY}>
              At Novada Tech, we help NDIS and aged care providers examine the
              relationship between workforce expenditure, service delivery,
              billing and payments. Rather than relying on assumptions, we use
              your organisation&apos;s existing records to understand what is
              happening, identify potential discrepancies and recommend
              improvements.
            </p>
          </div>

          <p className={`${MICRO} mt-10 text-brand-500`}>
            Our approach focuses on three things
          </p>
          <CardGrid items={APPROACH} cols={3} />

          <p className="mt-8 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            We do not simply look at what your organisation spends. We also
            examine whether the care you deliver is being recorded, billed and
            paid for correctly.
          </p>
        </Band>

        {/* ── 3 CUSTOMER PROOF ─────────────────────────────────────── */}
        <Band index="02" label="Customer proof" tone="tint">
          <h2 className={`${D2} max-w-headline text-ink-950`}>
            Supporting care organisations across Australia
          </h2>

          {/* 🔴 PLACEHOLDERS, NOT COPY. See the file header. Replace with
              real approved client quotes or delete this band. */}
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-ink-200 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="flex flex-col bg-white p-6 md:p-7">
                <span aria-hidden className="flex items-center gap-0.5">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star
                      key={s}
                      className="h-3.5 w-3.5 fill-ink-200 text-ink-200"
                      strokeWidth={0}
                    />
                  ))}
                </span>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-400">
                  {t.quote ?? "Awaiting an approved client quote."}
                </p>
                <div className="mt-5 border-t border-ink-100 pt-4">
                  <p className="text-sm font-semibold text-ink-400">
                    {t.name ?? "Name, role"}
                  </p>
                  <p className={`${MICRO_TIGHT} mt-1 text-ink-300`}>
                    {t.org ?? t.service}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className={`${SMALL} mt-5 max-w-prose`}>
            Placeholder cards. Real, client-approved quotes go here before this
            page is linked or indexed.
          </p>
        </Band>

        {/* ── 4 THE PROBLEM ────────────────────────────────────────── */}
        <Band index="03" label="The problem">
          <h2 className={`${D2} max-w-headline text-ink-950`}>
            One provider. Two ways to lose money.
          </h2>
          <p className={`${BODY} mt-6`}>
            Your organisation could be paying more than necessary to deliver
            care while also missing legitimate revenue from services already
            delivered. These two financial risks can occur at the same time.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-ink-100 md:grid-cols-2">
            <div className="bg-white p-6 md:p-8">
              <span className={`${MICRO} tabular text-brand-500`}>1</span>
              <h3 className={`${D4} mt-3 text-ink-950`}>
                Avoidable workforce costs
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                Every unplanned roster change, unnecessary agency booking or
                avoidable overtime shift can increase your operating costs.
                Over time, inefficient workforce allocation and excessive
                staffing administration may reduce your financial margins.
              </p>
              <p className={`${MICRO_TIGHT} mt-6 text-ink-400`}>
                Common areas worth investigating
              </p>
              <Bullets items={WORKFORCE_RISKS} />
            </div>

            <div className="bg-white p-6 md:p-8">
              <span className={`${MICRO} tabular text-brand-500`}>2</span>
              <h3 className={`${D4} mt-3 text-ink-950`}>
                Billing &amp; revenue leakage
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                Your organisation may deliver eligible services but experience
                discrepancies between what was provided, what was billed or
                claimed, and what was actually paid.
              </p>
              <p className={`${MICRO_TIGHT} mt-6 text-ink-400`}>
                Common areas worth investigating
              </p>
              <Bullets items={BILLING_RISKS} />
            </div>
          </div>

          <p className={`${BODY} mt-9`}>
            The real challenge is that these problems often sit in different
            systems, reports and teams. Your roster shows scheduled work. Your
            service records show what was delivered. Your billing system shows
            what was claimed. Your financial reports show what was paid.
          </p>
          <p className="mt-6 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            But are those records being reviewed together? That is where
            Novada&apos;s audit comes in.
          </p>

          <div className="mt-9">
            <Cta>Find out what your records reveal</Cta>
          </div>
        </Band>

        {/* ── 5 WHAT OUR AUDIT COVERS ──────────────────────────────── */}
        <Band index="04" label="What our audit covers" tone="tint">
          <h2 className={`${D2} max-w-headline text-ink-950`}>
            A comprehensive review of rostering efficiency, billing and revenue
            assurance
          </h2>
          <p className={`${BODY} mt-6`}>
            Our Rostering Audit &amp; Efficiency service examines two critical
            areas of your organisation.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-ink-100 md:grid-cols-2">
            <div className="bg-white p-6 md:p-8">
              <p className={`${MICRO} text-brand-500`}>
                Workforce cost &amp; rostering efficiency
              </p>
              <h3 className="mt-3 text-base font-semibold italic text-ink-950">
                Are you making the best use of your workforce without
                compromising care delivery?
              </h3>
              <Bullets items={COVERS_WORKFORCE} />
              <p className={`${SMALL} mt-6 border-t border-ink-100 pt-4`}>
                <span className="font-semibold text-ink-950">
                  The objective:
                </span>{" "}
                identify opportunities to reduce avoidable staffing costs,
                strengthen workforce allocation and improve service delivery
                reliability while maintaining appropriate staffing and care
                standards.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8">
              <p className={`${MICRO} text-brand-500`}>
                Billing, claims &amp; revenue assurance
              </p>
              <h3 className="mt-3 text-base font-semibold italic text-ink-950">
                Are you accurately claiming and collecting what your
                organisation is legitimately entitled to receive?
              </h3>
              <Bullets items={COVERS_BILLING} />
              <p className={`${SMALL} mt-6 border-t border-ink-100 pt-4`}>
                <span className="font-semibold text-ink-950">
                  The objective:
                </span>{" "}
                identify potential revenue discrepancies, improve billing
                accuracy and strengthen the controls that support legitimate,
                compliant claiming.
              </p>
            </div>
          </div>

          <p className={`${MICRO} mt-12 text-brand-500`}>
            Tailored to your funding arrangements
          </p>
          <CardGrid items={FUNDING} cols={3} />

          <p className={`${SMALL} mt-5 max-w-prose`}>
            All potential billing corrections and claim entitlements must be
            verified against the applicable rules and supporting evidence by
            appropriately qualified personnel.
          </p>
        </Band>

        {/* ── 6 THE OPPORTUNITY ────────────────────────────────────── */}
        <Band index="05" label="The opportunity">
          <h2 className={`${D2} max-w-headline text-ink-950`}>
            Small operational inefficiencies can create significant financial
            pressure
          </h2>
          <p className={`${BODY} mt-6`}>
            Consider what can happen inside a busy care organisation.
          </p>
          <CardGrid items={OPPORTUNITY} />
          <p className={`${BODY} mt-9`}>
            Novada&apos;s audit helps bring these records together, identify
            supported discrepancies and prioritise meaningful improvements. We
            do not assign speculative dollar values to every empty shift or
            billing exception. We examine the evidence to determine what the
            findings actually mean.
          </p>
        </Band>

        {/* ── THE ARITHMETIC, back where it was. ───────────────────── */}
        <Band id="calculator" index="06" label="Your own numbers" tone="tint">
          <h2 className={`${D2} max-w-headline text-ink-950`}>
            Do the arithmetic before you talk to us
          </h2>
          <p className={`${BODY} mt-6`}>
            We will not invent a figure for you. Here is the sum, on your own
            numbers.
          </p>
          <div className="mt-10">
            <Calculator
              config={ROSTERING_CALC}
              locale="en-AU"
              currency="AUD"
              bookHref="#book"
            />
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <p className={`${SMALL} max-w-prose`}>
              Both figures ask for the premium, not the whole cost. The shift
              still has to be covered and the worker still paid. The only
              avoidable part is the extra you pay to cover it the expensive
              way.
            </p>
            <p className={`${SMALL} max-w-prose`}>
              This sum covers the workforce half only. What was delivered and
              never claimed is counted from your own service and claim records
              during the review.
            </p>
          </div>
        </Band>

        {/* ── 7 WHAT MAKES OUR APPROACH DIFFERENT ──────────────────── */}
        <Band index="07" label="Our approach">
          <h2 className={`${D2} max-w-headline text-ink-950`}>
            Not just another report. Clear findings you can act on.
          </h2>
          <p className={`${BODY} mt-6`}>
            Our approach is built around four principles.
          </p>
          <CardGrid items={DIFFERENT} />
          <p className="mt-9 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            Our goal is not to recommend unnecessary changes. It is to identify
            what is working, what requires attention and where improvements
            could provide meaningful value.
          </p>
        </Band>

        {/* ── 8 WHO WE HELP ────────────────────────────────────────── */}
        <Band index="08" label="Who we help" tone="tint">
          <h2 className={`${D2} max-w-headline text-ink-950`}>
            Designed for NDIS and aged care providers managing complex
            workforce operations
          </h2>
          <CardGrid items={WHO} cols={3} />
          <p className={`${BODY} mt-9`}>
            Whether you operate one service location or manage several teams,
            the review is scoped to your organisation&apos;s needs and
            operational complexity.
          </p>
          <div className="mt-9">
            <Cta>Discuss your audit requirements</Cta>
          </div>
        </Band>

        {/* ── 9 HOW THE AUDIT WORKS ────────────────────────────────── */}
        <Band index="09" label="How it works">
          <h2 className={`${D2} max-w-headline text-ink-950`}>
            Four simple steps to greater operational and financial clarity
          </h2>
          <CardGrid items={STEPS} />
          <p className="mt-9 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            No guesswork. No invented savings figures. Just a structured
            assessment using your organisation&apos;s records.
          </p>
        </Band>

        {/* ── 10 WHAT YOU RECEIVE ──────────────────────────────────── */}
        <Band index="10" label="What you receive" tone="tint">
          <h2 className={`${D2} max-w-headline text-ink-950`}>
            Walk away with a clearer picture of your operations
          </h2>
          <p className={`${BODY} mt-6`}>
            Your comprehensive audit provides agreed deliverables tailored to
            your organisation.
          </p>
          <CardGrid items={RECEIVE} cols={3} />
          <p className={`${BODY} mt-9`}>
            The objective is to give you information you can act on, not
            another document that sits on a shelf.
          </p>
        </Band>

        {/* ── 11 FROM AUDIT TO ONGOING IMPROVEMENT ─────────────────── */}
        <Band index="11" label="After the audit">
          <h2 className={`${D2} max-w-headline text-ink-950`}>
            Finding the problem is the first step. Keeping operations strong is
            the next.
          </h2>
          <div className="mt-6 flex max-w-prose flex-col gap-4">
            <p className={BODY}>
              Once improvement opportunities have been identified, providers
              can choose how they want to implement the recommendations. Some
              organisations may prefer to manage improvements internally.
              Others may benefit from additional operational support.
            </p>
          </div>

          <div className="mt-10 rounded-lg border border-ink-200 bg-ink-50 p-6 md:p-8">
            <p className={`${MICRO} text-brand-500`}>
              Introducing Novada&apos;s Workforce Continuity service
            </p>
            <p className="mt-4 max-w-prose text-base text-ink-950">
              We also help NDIS and aged care providers build and maintain
              dependable internal workforce capacity through:
            </p>
            <Bullets items={CONTINUITY} />
            <p className={`${SMALL} mt-6 max-w-prose`}>
              Our objective is to help providers build a more reliable
              workforce and reduce avoidable dependence on expensive external
              agency coverage. Workforce Continuity is a separate service, and
              there is no obligation to engage Novada for ongoing support after
              the audit.
            </p>
            <div className="mt-7">
              <Link href="/care/workforce" className={`${BTN_PRIMARY} w-full text-base sm:w-auto`}>
                Explore Workforce Continuity
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </Band>

        {/* ── 12 FAQ ───────────────────────────────────────────────── */}
        <Band index="12" label="Questions" tone="tint">
          <h2 className={`${D2} max-w-headline text-ink-950`}>
            Frequently asked questions
          </h2>
          <dl className="mt-10 flex flex-col gap-px overflow-hidden rounded-lg bg-ink-100">
            {FAQ.map((f) => (
              <div
                key={f.q}
                className="grid gap-2 bg-white p-6 md:grid-cols-[minmax(0,340px)_minmax(0,1fr)] md:gap-8 md:p-7"
              >
                <dt className="text-base font-semibold text-ink-950">{f.q}</dt>
                <dd className="text-sm leading-relaxed text-ink-600">{f.a}</dd>
              </div>
            ))}
          </dl>
        </Band>

        {/* ── 13 FINAL CTA, with the calendar back at the bottom. ──── */}
        <section className="border-t border-white/10 bg-canvas-ink">
          <div
            className={`${FRAME} ${GUTTER} border-x border-white/10 py-16 md:py-24`}
          >
            <h2 className={`${D2} max-w-headline text-white`}>
              Your organisation already has the records. Let us find out what
              they are telling you.
            </h2>

            <div className="mt-8 grid max-w-4xl gap-x-10 gap-y-3 sm:grid-cols-2">
              {[
                "Your rosters show who was scheduled.",
                "Your timesheets and service records show what was worked and delivered.",
                "Your billing and claims records show what was submitted.",
                "Your financial reports show what was received.",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <Check
                    aria-hidden
                    strokeWidth={2.4}
                    className="mt-1 h-4 w-4 flex-shrink-0 text-brand-200"
                  />
                  <span className="text-sm text-white/85">{t}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-statement border-l-2 border-brand-400 pl-6 text-lg font-medium text-white">
              But are these records telling a consistent financial story?
            </p>

            <div
              id="book"
              className="mt-12 grid scroll-mt-24 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-14"
            >
              <div className="min-w-0">
                <p className={`${MICRO} text-brand-200`}>
                  Book your free 20-minute rostering &amp; revenue discovery
                  call
                </p>
                <p className="mt-5 max-w-prose text-base text-white/75">
                  During this conversation, we will:
                </p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {[
                    "Learn about your service delivery and workforce arrangements.",
                    "Discuss relevant rostering, staffing cost and billing concerns.",
                    "Explain the audit process and the information reviewed.",
                    "Determine whether a comprehensive audit would be appropriate.",
                    "Outline the next steps and indicative pricing.",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <Check
                        aria-hidden
                        strokeWidth={2.4}
                        className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-brand-200"
                      />
                      <span className="text-sm text-white/80">{t}</span>
                    </li>
                  ))}
                </ul>
                <p className={`${MICRO_TIGHT} mt-8 text-white/55`}>
                  Complimentary initial consultation &nbsp;·&nbsp; No
                  obligation to proceed &nbsp;·&nbsp; The comprehensive audit is
                  a separately scoped paid engagement
                </p>
              </div>

              <div className="min-w-0">
                <BookingEmbed
                  desk="care-rostering"
                  source="care-rostering2"
                  tone="dark"
                  title="Book your rostering & revenue review"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <DeskFooter />

      {/* 🔴 THIS IS DOING THE WORK THE HERO FORM DOES ON THE COMPETITOR'S
          PAGE. The founder asked for the calendar back at the bottom,
          which is where it is. With the full thirteen-section copy that
          puts it 93% down a 24,500px mobile page, so without a CTA that
          travels with the reader this page would repeat the exact fault
          that produced 75 clicks and no bookings. The sticky bar keeps a
          bold, always-visible action on screen the whole way down, and
          three in-page buttons jump to the same anchor. Do not remove
          it while the calendar sits at the foot of the page. */}
      <StickyCta
        label="Book your rostering and revenue review"
        tagline="Complimentary 20-minute discovery call."
        href="#book"
      />
    </div>
  );
}
