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
import BookingEmbed from "@/components/desk/BookingEmbed";
import StickyCta from "@/components/desk/StickyCta";
import Calculator from "@/components/desk/Calculator";
import { Band, BandHeading } from "@/components/desk/Band";
import { ROSTERING_CALC } from "@/content/calculators";
import {
  BODY,
  BTN_ON_INK,
  BTN_PRIMARY,
  D1,
  DISPLAY,
  D2,
  D4,
  FRAME,
  GUTTER,
  MICRO,
  MICRO_TIGHT,
  RAIL_GRID,
  SMALL,
} from "@/components/desk/tokens";

/*
 * ══════════════════════════════════════════════════════════════════════
 * /care/rostering2 — THE COPYWRITER'S PAGE, ON THE COMPETITOR'S SHAPE.
 *
 * For review. noindex, not linked. Revised 29 October 2026 against the
 * founder's mark-up of the first build.
 *
 * ⚠️ MEASURE IS DELIBERATELY WIDE HERE. The rest of the estate sets body
 * copy at 68ch, which is the right measure for reading. The founder
 * asked for the right-hand space filled, so the hero and the section
 * intros run to roughly 90ch. That is a trade: it fills the frame and it
 * is a longer line than the house standard. Do not propagate it to the
 * pages that are built for reading rather than for a paid click.
 *
 * ⚠️ THE CARDS ARE ELEVATED AND SEPARATED, not the hairline `gap-px`
 * grid the rest of the estate uses, because the founder asked for the
 * competitor's box style. Reveal animation is the site's own `.reveal`
 * class: server-rendered visible, 12px of travel, stagger capped, and
 * it respects reduced motion. Never framer-motion with opacity 0, which
 * once shipped this site's pages blank until hydration.
 *
 * 🔴 THE TESTIMONIALS ARE REAL AND FOUNDER-SUPPLIED. Three named
 * organisations with named people. They are quoted verbatim. Nothing
 * here may be edited for punch, because an altered quote attributed to
 * a named person is no longer their words.
 *
 * ⚠️ MORNING STAR COMMUNITY SERVICES is recorded in project memory as a
 * separate business that merely shares the CRM agency, explicitly "not a
 * Novada Tech client", with an instruction to confirm before assuming
 * otherwise. The founder has now supplied a testimonial from them, which
 * answers that. Flagged, not blocked.
 *
 * ⚠️ THE CALCULATOR'S DEFAULT FOOTNOTE IS SUPPRESSED on this page at the
 * founder's instruction, via an additive `showFootnote` prop so the live
 * /care/rostering page keeps it. That footnote was the disclaimer saying
 * the figures contain no industry averages and are not a projection of
 * what engaging us would produce. The FAQ still answers "Can Novada
 * guarantee cost savings or recovered revenue? No."
 *
 * ⚠️ THE RATING IS UNBRANDED. No platform name, no wordmark, no link to
 * a review site. Two compliance notices; C&D named as the next step.
 *
 * ⚠️ PRICING (A$5,000 + GST) is in the FAQ because the supplied copy put
 * it there. The rest of the estate still says investment is discussed on
 * the call.
 * ══════════════════════════════════════════════════════════════════════
 */

/* 🔴 VERBATIM, FOUNDER-SUPPLIED. Do not reword. */
const TESTIMONIALS = [
  {
    org: "Maxicare Plus",
    quote:
      "Novada Tech took the time to understand our NDIS business, our challenges and what we were trying to achieve. What stood out was their practical approach, attention to detail and genuine commitment to our business outcomes. They felt like a partner who understood our sector, not just another service provider.",
    name: "Founder, Josh",
  },
  {
    org: "Morning Star Community Services",
    quote:
      "What we value about Novada Tech is their focus on meaningful business outcomes. They bring a structured, proactive approach and understand the importance of getting the operational details right. Their focus on accountability and practical solutions makes them a valuable business partner.",
    name: "Founder, Emmanuela",
  },
  {
    org: "Support Link",
    quote:
      "Novada Tech stands out for their professionalism, preparation and commitment to quality. They take time to understand our requirements rather than offering generic solutions, and their structured approach makes working with them straightforward and productive.",
    name: "Founder, Peter",
  },
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

/* ── building blocks ────────────────────────────────────────────── */

const WIDE = "max-w-[90ch]";

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

/* ⚠️ ELEVATED AND SEPARATED, the competitor's box style, with the
   site's own reveal class rather than a new animation system. */
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
              {c.n.replace(/^Step\s*/i, "")}
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

function Stars({ className = "h-4 w-4 fill-[#0CC481] text-[#0CC481]" }) {
  return (
    <span aria-hidden className="flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={className} strokeWidth={0} />
      ))}
    </span>
  );
}

/* ⚠️ UNBRANDED BY NECESSITY. No platform name, no link to a review site,
   no #00B67A. Links to our own /case-study. */
function RatingBar() {
  return (
    <Link
      href="/case-study"
      className="inline-flex min-h-11 flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 transition-colors duration-150 hover:border-white/30"
    >
      <Stars />
      <span className="text-sm font-semibold text-white">5.0</span>
      <span className="text-sm text-white/70">from 77 provider reviews</span>
    </Link>
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
            className={`${FRAME} ${GUTTER} relative border-x border-white/10 pb-16 pt-10 md:pb-20 md:pt-14`}
          >
            <RatingBar />

            <p className={`${MICRO} mt-7 text-brand-200`}>
              For NDIS &amp; aged care providers
            </p>

            {/* ⚠️ No max-width. The founder asked for the right-hand space
                filled, and this headline is the whole point of the page. */}
            {/* ⚠️ NOT the d1 token. Its clamp floor is 42px, which put
                this eleven-word headline over five lines at 390px and
                pushed everything else off the first screen.

                The floor is 32px, and the SLOPE IS STEEPER THAN d1'S on
                purpose: it has to climb from a lower floor and still
                reach the same 76px cap by 1280px, so desktop is
                untouched and only phones get the shorter headline. A
                gentler slope left the desktop h1 8px short of every
                other page on the site. It never exceeds d1 at any
                width. Measured, not assumed. */}
            <h1
              className={`${DISPLAY} mt-5 text-[clamp(2rem,0.89rem+4.83vw,4.75rem)] leading-[0.93] tracking-[-0.015em] text-white`}
            >
              Are rostering costs eating into your margins while billing gaps
              go unnoticed?
            </h1>

            <div
              className={`mt-7 flex ${WIDE} flex-col gap-5 text-base text-white/75`}
            >
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
              <p>
                The result is clear, evidence-based findings and an actionable
                improvement plan to help you control avoidable costs,
                strengthen billing accuracy and maintain reliable care
                delivery.
              </p>
            </div>

            <div className="mt-10">
              <Cta tone="dark">Book your rostering &amp; revenue review</Cta>
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
                  style={{
                    ["--reveal-delay" as string]: `${i * 70}ms`,
                  }}
                >
                  <p className={`${D2} text-brand-500`}>{s.v}</p>
                  {/* Stars in the same colour as the 5.0 beside them. */}
                  {s.stars ? (
                    <div className="mt-3 flex justify-center">
                      <Stars className="h-4 w-4 fill-brand-500 text-brand-500" />
                    </div>
                  ) : null}
                  <p className="mt-3 text-sm font-medium text-ink-600">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2 WHY NOVADA TECH ────────────────────────────────────── */}
        <Band index="01" label="Why Novada Tech">
          <h2 className={`${D2} text-ink-950`}>
            An independent look at the financial and operational performance
            behind your care services
          </h2>
          <div className={`mt-6 flex ${WIDE} flex-col gap-4`}>
            <p className={`${BODY} ${WIDE}`}>
              Good care depends on more than filling shifts. It depends on
              running an efficient operation and accurately capturing the
              revenue your organisation is entitled to.
            </p>
            <p className={`${BODY} ${WIDE}`}>
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
          <BoxCards items={APPROACH} cols={3} />

          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            We do not simply look at what your organisation spends. We also
            examine whether the care you deliver is being recorded, billed and
            paid for correctly.
          </p>
        </Band>

        {/* ── 3 CUSTOMER PROOF ─────────────────────────────────────── */}
        <Band index="02" label="Customer proof" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            Supporting care organisations across Australia
          </h2>
          <TestimonialSlider />
        </Band>

        {/* ── 4 THE PROBLEM ────────────────────────────────────────── */}
        <Band index="03" label="The problem">
          <h2 className={`${D2} text-ink-950`}>
            One provider. Two ways to lose money.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Your organisation could be paying more than necessary to deliver
            care while also missing legitimate revenue from services already
            delivered. These two financial risks can occur at the same time.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
            <div className="reveal rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-sm font-bold text-white">
                1
              </span>
              <h3 className={`${D4} mt-4 text-ink-950`}>
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

            <div
              className="reveal rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8"
              style={{ ["--reveal-delay" as string]: "70ms" }}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-sm font-bold text-white">
                2
              </span>
              <h3 className={`${D4} mt-4 text-ink-950`}>
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

          <p className={`${BODY} ${WIDE} mt-9`}>
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
          <h2 className={`${D2} text-ink-950`}>
            A comprehensive review of rostering efficiency, billing and revenue
            assurance
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Our Rostering Audit &amp; Efficiency service examines two critical
            areas of your organisation.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
            <div className="reveal rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8">
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

            <div
              className="reveal rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8"
              style={{ ["--reveal-delay" as string]: "70ms" }}
            >
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
          <BoxCards items={FUNDING} cols={3} />
        </Band>

        {/* ── 6 THE OPPORTUNITY ────────────────────────────────────── */}
        <Band index="05" label="The opportunity">
          <h2 className={`${D2} text-ink-950`}>
            Small operational inefficiencies can create significant financial
            pressure
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Consider what can happen inside a busy care organisation.
          </p>
          <BoxCards items={OPPORTUNITY} />
          <p className={`${BODY} ${WIDE} mt-9`}>
            Novada&apos;s audit helps bring these records together, identify
            supported discrepancies and prioritise meaningful improvements. We
            do not assign speculative dollar values to every empty shift or
            billing exception. We examine the evidence to determine what the
            findings actually mean.
          </p>
        </Band>

        {/* ── THE ARITHMETIC ───────────────────────────────────────── */}
        <Band id="calculator" index="06" label="Your own numbers" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            Do the arithmetic before you talk to us
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            We will not invent a figure for you. Here is the sum, on your own
            numbers.
          </p>
          <div className="mt-10">
            {/* ⚠️ showFootnote={false} at the founder's instruction. The
                live /care/rostering page still shows it. */}
            <Calculator
              config={ROSTERING_CALC}
              locale="en-AU"
              currency="AUD"
              bookHref="#book"
              showFootnote={false}
            />
          </div>
        </Band>

        {/* ── 7 OUR APPROACH ───────────────────────────────────────── */}
        <Band index="07" label="Our approach">
          <h2 className={`${D2} text-ink-950`}>
            Not just another report. Clear findings you can act on.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Our approach is built around four principles.
          </p>
          <BoxCards items={DIFFERENT} />
          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            Our goal is not to recommend unnecessary changes. It is to identify
            what is working, what requires attention and where improvements
            could provide meaningful value.
          </p>
        </Band>

        {/* ── 8 WHO WE HELP ────────────────────────────────────────── */}
        <Band index="08" label="Who we help" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            Designed for NDIS and aged care providers managing complex
            workforce operations
          </h2>
          <BoxCards items={WHO} cols={3} />
          <p className={`${BODY} ${WIDE} mt-9`}>
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
          <h2 className={`${D2} text-ink-950`}>
            Four simple steps to greater operational and financial clarity
          </h2>
          <BoxCards items={STEPS} />
          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            No guesswork. No invented savings figures. Just a structured
            assessment using your organisation&apos;s records.
          </p>
        </Band>

        {/* ── 10 WHAT YOU RECEIVE ──────────────────────────────────── */}
        <Band index="10" label="What you receive" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            Walk away with a clearer picture of your operations
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Your comprehensive audit provides agreed deliverables tailored to
            your organisation.
          </p>
          <BoxCards items={RECEIVE} cols={3} />
          <p className={`${BODY} ${WIDE} mt-9`}>
            The objective is to give you information you can act on, not
            another document that sits on a shelf.
          </p>
        </Band>

        {/* ── 11 AFTER THE AUDIT ───────────────────────────────────── */}
        <Band index="11" label="After the audit">
          <h2 className={`${D2} text-ink-950`}>
            Finding the problem is the first step. Keeping operations strong is
            the next.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Once improvement opportunities have been identified, providers can
            choose how they want to implement the recommendations. Some
            organisations may prefer to manage improvements internally. Others
            may benefit from additional operational support.
          </p>

          <div className="reveal mt-10 rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8">
            <p className={`${MICRO} text-brand-500`}>
              Introducing Novada&apos;s Workforce Continuity service
            </p>
            <p className={`${WIDE} mt-4 text-base text-ink-950`}>
              We also help NDIS and aged care providers build and maintain
              dependable internal workforce capacity through:
            </p>
            <Bullets items={CONTINUITY} />
            <p className={`${SMALL} ${WIDE} mt-6`}>
              Our objective is to help providers build a more reliable
              workforce and reduce avoidable dependence on expensive external
              agency coverage. Workforce Continuity is a separate service, and
              there is no obligation to engage Novada for ongoing support after
              the audit.
            </p>
            <div className="mt-7">
              <Link
                href="/care/workforce"
                className={`${BTN_PRIMARY} w-full text-base sm:w-auto`}
              >
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
          <h2 className={`${D2} text-ink-950`}>Frequently asked questions</h2>
          <Faq />
        </Band>

        {/* ── 13 BOOK. Laid out like /care/workforce#book: rail label,
             full-width embed in the main column. ──────────────────── */}
        <section id="book" className="border-t border-white/10 bg-canvas-ink">
          <div
            className={`${FRAME} ${GUTTER} border-x border-white/10 py-16 md:py-24 lg:py-32`}
          >
            <div className={RAIL_GRID}>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-center gap-3 lg:block">
                  <span className={`${MICRO} tabular text-white/55`}>13</span>
                  <span
                    aria-hidden
                    className="h-px w-6 bg-white/20 lg:my-3 lg:h-6 lg:w-px"
                  />
                  <h2 className={`${MICRO} text-white/85`}>Book</h2>
                </div>
              </div>

              <div className="min-w-0">
                <BandHeading dark>
                  Your organisation already has the records. Let us find out
                  what they are telling you.
                </BandHeading>

                <p className={`${WIDE} mt-7 text-base text-white/75`}>
                  Book your free 20-minute rostering and revenue discovery
                  call. During this conversation, we will:
                </p>
                <Bullets
                  tone="dark"
                  items={[
                    "Learn about your service delivery and workforce arrangements.",
                    "Discuss relevant rostering, staffing cost and billing concerns.",
                    "Explain the audit process and the information reviewed.",
                    "Determine whether a comprehensive audit would be appropriate.",
                    "Outline the next steps and indicative pricing.",
                  ]}
                />

                <div className="mt-10">
                  <BookingEmbed
                    desk="care-rostering"
                    source="care-rostering2"
                    tone="dark"
                    title="Book your rostering and revenue review"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DeskFooter />

      {/* ⚠️ CLEARANCE FOR THE STICKY BAR. Without it the bar covers
          the last line of the footer on a phone, where it is tallest
          because the tagline wraps above a full-width button. */}
      <div aria-hidden className="h-28 sm:h-20" />

      {/* 🔴 The calendar sits at the foot of a long page, so a bold action
          has to travel with the reader. Do not remove while it does. */}
      <StickyCta
        label="Book your rostering and revenue review"
        tagline="Complimentary 20-minute discovery call."
        href="#book"
      />
    </div>
  );
}
