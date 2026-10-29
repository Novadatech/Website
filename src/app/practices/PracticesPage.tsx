"use client";

import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Star } from "lucide-react";

import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import StickyCta from "@/components/desk/StickyCta";
import { Band, BandHeading } from "@/components/desk/Band";
import { BOOKING, LEAKAGE } from "@/content/offers";
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
 * /practices — the practices audience hub.
 *
 * 🔴 BUILT AS THE TWIN OF /care, on the founder's instruction (29
 * October 2026), after both practices pillar pages. Same hero shape,
 * same components, same section rhythm, the founder's copy. The
 * previous hub build is gone.
 *
 * ⚠️ IT IS A CLIENT COMPONENT, so its metadata CANNOT live in this
 * file. It is exported from page.tsx, which wraps this.
 *
 * ⚠️ DO NOT ADD A layout.tsx TO THIS FOLDER. Everything under
 * /practices/* would inherit it, including both pillar pages and both
 * confirmation pages, and the confirmation pages' layouts carry the
 * noindex that keeps them out of search.
 *
 * 🔴 NO CALENDAR ON THIS PAGE, carried over intact from the build this
 * replaces and from /care. Each pillar owns its OWN calendar feeding
 * its OWN pipeline:
 *     /practices/revenue-audit    dkDB0IYyu8LRjFdUfsYb
 *     /practices/patient-booking  7Jpcos7VK92p2vDDTdvE
 * A calendar here would be named for one half, wrong for the other at
 * the moment of commitment, and would file the booking against the
 * wrong offer. Every booking action on this page is a LINK to a
 * pillar's #book. Do not add an embed.
 *
 * ⚠️ WHICH IS WHY THE FINAL ASK IS A RANKED PAIR even though section 4
 * is an equal one. A booking button has to land on a calendar, and
 * sending an undecided reader to one at random mis-files them. Exactly
 * as /care does it.
 *
 * ══════════════════════════════════════════════════════════════════════
 * 🔴 "GAP" IS BANNED, AND THE SUPPLIED COPY USED IT TEN TIMES.
 *
 * In Australian healthcare "the gap" is the PATIENT'S OUT-OF-POCKET
 * after the Medicare rebate or fund benefit. "Gap fee", "no gap",
 * "known gap" are terms a practice principal reads every day. Every
 * instance now says which problem is meant: unbilled services, revenue
 * leaking, unfilled appointments, unreconciled exceptions, weaknesses.
 * No meaning changed.
 *
 * ⚠️ THE SERVICE-ONE HEADING HERE MUST MATCH ITS OWN PAGE. The copy
 * reused the old "...and Billing Gaps?" headline; /practices/revenue-
 * audit now reads "...and unbilled services?", and a hub that promises
 * a different headline from the page it links to is its own bug.
 * ══════════════════════════════════════════════════════════════════════
 *
 * ⚠️ NO TESTIMONIALS, unlike /care, which runs three care quotes. The
 * founder's written instruction on the practices copy stands: care
 * quotes must never be reused as if they demonstrate practice results,
 * and no practice quotes exist yet. AHPRA also narrows what a practice
 * quote may ever say: operational and commercial only, never clinical
 * quality or patient outcomes.
 *
 * ⚠️ THE PROOF STRIP USES THE PRACTICES LABELS, as on both pillar
 * pages: "Client reviews" and "Healthcare practices across Australia".
 * On a practices page "provider" means a clinician, and the care
 * audience line would be false here.
 *
 * 🔴 NO PRICE. The founder stripped figures from all four pages before
 * this one. The copy's FAQ pointed readers at "starting prices on the
 * individual service pages"; those pages no longer print any, so that
 * answer now points at the conversation instead.
 *
 * ⚠️ THE DISCOVERY CALL IS 30 MINUTES. The copy said 20 in two places
 * and 30 in one. The founder ruled 30 on 29 October.
 *
 * ⚠️ NO PATHWAY DIAGRAM. The build this replaces carried one, as /care
 * did before its rebuild. Flagged to the founder.
 * ══════════════════════════════════════════════════════════════════════
 */

/* ⚠️ THE TWO DOORS. Hrefs come from offers.ts so they cannot drift from
   the nav, the homepage and the sitemap; the wording is the founder's,
   with "revenue gaps" replaced. */
const DOORS = [
  {
    href: LEAKAGE.href,
    name: "Patient Revenue Leakage Audit",
    body: "Identify where revenue may be leaking across patient enquiries, appointment utilisation, billing, claims and payment reconciliation.",
    foot: "One-off, independently scoped review",
  },
  {
    href: BOOKING.href,
    name: "Patient Booking & Retention Continuity",
    body: "Get ongoing support with telephone answering, appointments, cancellation recovery, clinician-approved recalls, patient follow-ups and billing administration.",
    foot: "Ongoing managed administrative support",
  },
];

const DAILY = [
  "Patients call to book appointments.",
  "Receptionists respond to enquiries.",
  "Appointments are cancelled and rescheduled.",
  "Clinicians approve follow-ups and recalls.",
  "Services are delivered, invoices are prepared and claims are submitted.",
];

const PROBLEMS = [
  {
    h: "Missed patient enquiries",
    b: "Busy phone lines and competing reception tasks can result in patient enquiries going unanswered or not receiving timely follow-up.",
  },
  {
    h: "Unfilled appointment capacity",
    b: "Cancellations and scheduling changes can leave available practitioner time unused.",
  },
  {
    h: "Outstanding patient follow-ups",
    b: "Routine appointment requests and clinician-approved recall administration may become difficult to manage consistently.",
  },
  {
    h: "Unbilled services & claims discrepancies",
    b: "Completed eligible services may not always reconcile correctly with invoices, claims and payments.",
  },
  {
    h: "Overloaded reception teams",
    b: "Practice staff may spend valuable time switching between incoming calls, patients at the counter, billing tasks and administrative follow-ups.",
  },
  {
    h: "Limited revenue visibility",
    b: "Appointment, service delivery, billing and payment data may sit in different systems, making it harder to identify connected operational or financial issues.",
  },
];

const AUDIT_ACCESS = [
  "Missed and unanswered patient enquiries.",
  "Appointment requests that remain unresolved.",
  "Booking conversion patterns where measurable.",
  "Cancelled appointments and unfilled capacity.",
  "Incomplete administrative follow-ups.",
  "Clinician-approved recall administration.",
  "Patient access and scheduling workflow inefficiencies.",
];

const AUDIT_BILLING = [
  "Completed eligible services that may not have been invoiced.",
  "Incorrect fees and billing discrepancies.",
  "Potential underbilling and overbilling.",
  "Rejected or unresolved Medicare claims.",
  "Relevant private health insurance and other payer claims.",
  "Outstanding payments.",
  "Differences between clinical service records, invoices, claims and payments.",
];

const CONTINUITY_INCLUDES = [
  {
    h: "Unlimited telephone answering",
    b: "Ongoing patient call answering during agreed service hours and within contracted service arrangements.",
  },
  {
    h: "Appointment bookings & scheduling",
    b: "Support with routine patient enquiries, appointment bookings, confirmations and rescheduling.",
  },
  {
    h: "Cancellation recovery",
    b: "Administrative follow-up to offer available appointments to suitable patients through practice-approved processes.",
  },
  {
    h: "Patient follow-up administration",
    b: "Coordination of approved appointment-related callbacks, reminders and outstanding administrative tasks.",
  },
  {
    h: "Clinician-approved recall administration",
    b: "Support for authorised recall communications, appointment coordination, contact tracking and escalation.",
  },
  {
    h: "Billing & claims administration",
    b: "Routine invoice preparation, authorised claims processing, rejected-claim follow-up and payment reconciliation support.",
  },
  {
    h: "Administrative reporting & handovers",
    b: "Clear updates on activity, outstanding tasks and matters requiring practice attention.",
  },
];

/* ⚠️ "unfilled appointments", never "gaps in our appointment calendar". */
const ASK_AUDIT = [
  "Are we missing legitimate revenue opportunities?",
  "Are patient enquiries being handled effectively?",
  "Are cancellations leaving avoidable unfilled appointments?",
  "Are relevant follow-up processes working consistently?",
  "Are completed eligible services being invoiced correctly?",
  "Are Medicare, insurer or other claims remaining unresolved?",
  "Do our service delivery, billing and payment records reconcile accurately?",
];

const ASK_CONTINUITY = [
  "How can we manage our practice's administrative workload more effectively?",
  "Who will answer patient calls when reception is busy?",
  "How can we take pressure off our front desk?",
  "Can someone help manage bookings and cancellations?",
  "How do we maintain more consistent approved patient follow-ups?",
  "Who can coordinate clinician-approved recalls?",
  "Can we get ongoing help with billing and claims administration?",
];

const PRINCIPLES = [
  {
    n: "1",
    h: "We look at the entire administrative journey",
    b: "From the first patient enquiry through to appointment coordination, completed services, invoicing, claims and payments.",
  },
  {
    n: "2",
    h: "We work with your existing systems",
    b: "Our services are designed to use relevant existing practice management, appointment and billing systems where practical and subject to agreed access.",
  },
  {
    n: "3",
    h: "We focus on practical improvements",
    b: "We do not believe in unnecessary complexity. Whether we are reviewing a process or supporting it on an ongoing basis, the objective is to make operations more manageable and consistent.",
  },
  {
    n: "4",
    h: "We respect clinical governance",
    b: "Your practice retains responsibility for patient treatment, clinical triage, recall decisions, billing eligibility and other matters requiring professional judgement. Novada provides agreed administrative and analytical support.",
  },
  {
    n: "5",
    h: "We believe in clear accountability",
    b: "Defined responsibilities, documented workflows, appropriate escalation and consistent reporting are central to our approach.",
  },
];

const FIRST_QS = [
  "Are patient enquiries being missed?",
  "Are appointment cancellations managed effectively?",
  "Are eligible services being billed accurately?",
  "Are claims and payments being reconciled?",
];

const SECOND_QS = [
  "Who answers the calls?",
  "Who coordinates the bookings?",
  "Who follows up approved patient requests?",
  "Who handles billing exceptions?",
  "Who ensures important administrative tasks are escalated?",
];

const WHO = [
  {
    h: "General practices",
    b: "For GP clinics managing patient phone enquiries, routine appointments, clinician-approved recalls, Medicare billing and ongoing front-desk responsibilities. We help investigate where revenue may be leaking and provide ongoing support with agreed patient access and billing workflows.",
  },
  {
    h: "Specialist medical practices",
    b: "For specialist clinics coordinating referral enquiries, consultations, follow-up appointments, procedures, private billing and relevant claims. Our services can help identify process discrepancies and support routine administrative activity.",
  },
  {
    h: "Allied health practices",
    b: "For physiotherapy, psychology, occupational therapy, speech pathology, podiatry and other allied health practices. We help review appointment utilisation, cancellation patterns, relevant billing processes and patient administration requirements.",
  },
  {
    h: "Multidisciplinary practices",
    b: "For healthcare organisations managing multiple practitioners, service types, appointment schedules or locations. We support more consistent processes across agreed administrative functions.",
  },
];

const COMMITMENTS = [
  {
    h: "Clear processes",
    b: "Agreed workflows for patient enquiries, appointment administration, billing support and escalation.",
  },
  {
    h: "Defined responsibilities",
    b: "Clarity about what Novada handles and what must remain with the practice.",
  },
  {
    h: "Data confidentiality",
    b: "Appropriate information access, privacy, security and confidentiality arrangements.",
  },
  {
    h: "Appropriate escalation",
    b: "Clinical concerns, billing eligibility questions and other matters outside our authorised scope are referred to the practice.",
  },
  {
    h: "Consistent communication",
    b: "Clear handovers, reporting and updates on outstanding administrative matters.",
  },
];

const STEPS = [
  {
    n: "1",
    h: "Tell us about your practice",
    b: "Book a complimentary 30-minute discovery conversation. We will learn about your practice type, number of practitioners, appointment systems, administrative workload and current challenges.",
  },
  {
    n: "2",
    h: "Identify the right solution",
    b: "We will discuss whether your practice would benefit from a Patient Revenue Leakage Audit, ongoing Patient Booking & Retention Continuity, or both where appropriate. We will explain what each service includes and how it could apply to your operations.",
  },
  {
    n: "3",
    h: "Agree on the scope",
    b: "If there is a suitable fit, we will outline the recommended engagement: defined responsibilities, information and system requirements, approved administrative workflows, reporting and escalation arrangements, privacy and confidentiality controls, and fees and contractual terms.",
  },
  {
    n: "4",
    h: "Begin the engagement",
    b: "For the audit, we begin the agreed review of relevant records and processes. For the ongoing service, we establish approved workflows, access permissions and the necessary administrative support arrangements.",
  },
];

const FAQ = [
  {
    q: "What does Novada Tech do for healthcare practices?",
    a: "Novada Tech helps Australian GP, specialist and allied health practices improve patient access administration, identify potential revenue discrepancies and manage ongoing appointment and billing processes. We offer a one-off Patient Revenue Leakage Audit and an ongoing Patient Booking & Retention Continuity service.",
  },
  {
    q: "What is the difference between the two offers?",
    a: "The Patient Revenue Leakage Audit is a structured review designed to identify where revenue may be leaking across patient enquiry handling, appointment administration, billing, claims and payment reconciliation. Patient Booking & Retention Continuity provides ongoing administrative support with telephone answering, bookings, cancellation recovery, approved follow-ups, recalls and billing processes.",
  },
  {
    q: "Does the audit cover both patient bookings and billing?",
    a: "Yes. The audit examines two connected areas: patient access and appointment revenue leakage, and billing, claims and revenue assurance. The specific scope is agreed before the audit begins.",
  },
  {
    q: "Does the ongoing service include unlimited telephone answering?",
    a: "Yes. Patient Booking & Retention Continuity includes unlimited eligible incoming-call answering during agreed operating hours, subject to the service capacity and conditions established in the agreement. This does not mean unlimited 24/7 coverage or guaranteed immediate answering of every call.",
  },
  {
    q: "Can Novada help fill cancelled appointments?",
    a: "Our ongoing service can support cancellation recovery by contacting suitable patients and coordinating appointments through practice-approved workflows. The audit can also review existing cancellation patterns and unused appointment capacity. We do not guarantee that every cancelled appointment can be filled.",
  },
  {
    q: "Do you support patient recalls?",
    a: "Yes, within an administrative scope. Novada can coordinate clinician-approved recall communications, contact tracking and appointment administration. Clinical decisions, recall urgency and medical advice remain with authorised practice personnel.",
  },
  {
    q: "Do you support Medicare and private health insurance billing?",
    a: "Yes. Both offers can include relevant billing and claims processes within their agreed scopes. The audit reviews potential discrepancies and financial controls. The ongoing service supports authorised routine billing, claims administration, exception follow-up and reconciliation activities. Professional billing eligibility, item selection and clinical entitlement decisions remain with appropriately qualified and authorised personnel.",
  },
  {
    q: "Will we need to replace our existing practice software?",
    a: "Not necessarily. We aim to work with relevant existing systems where practical, subject to technical compatibility, access permissions and agreed operating arrangements.",
  },
  {
    q: "Can we engage the ongoing service without purchasing an audit?",
    a: "Yes. Both services are available independently.",
  },
  {
    q: "Are these services suitable for a small practice?",
    a: "Potentially. Suitability depends on practitioner numbers, appointment and call volumes, administrative workload, financial activity and the likely value of the service. A discovery conversation can help determine whether an engagement is appropriate.",
  },
  {
    /* 🔴 NO FIGURE, AND NO POINTER TO ONE. The copy sent readers to
       "starting prices on the individual service pages"; neither page
       prints a price any more, so that would have been a dead end. */
    q: "How much do your services cost?",
    a: "Pricing depends on the size and complexity of your practice and the agreed service requirements. The Patient Revenue Leakage Audit is a separately scoped, one-off engagement. Patient Booking & Retention Continuity is an ongoing managed administrative service. We confirm the investment with you during a discovery conversation, before any work begins.",
  },
  {
    q: "Can Novada provide clinical advice or determine which treatment a patient needs?",
    a: "No. Novada provides operational, administrative and analytical support. Your practice remains responsible for clinical decisions, triage, medical advice, treatment suitability and professional billing authorisations.",
  },
  {
    q: "How is patient information protected?",
    a: "We use agreed confidentiality, secure access and information-handling arrangements appropriate to the engagement. Where practical, audits use aggregated or de-identified data. The parties must establish suitable privacy, security and access arrangements before identifiable patient information is processed.",
  },
  {
    q: "How do we get started?",
    a: "Book a complimentary 30-minute discovery conversation. We will learn about your practice, discuss your operational challenges and help identify which service may be suitable.",
  },
];

/* ── building blocks. Same set as the other five pages. ──────────── */

const WIDE = "max-w-[90ch]";

function Stars({ className = "h-4 w-4 fill-[#0CC481] text-[#0CC481]" }) {
  return (
    <span aria-hidden className="flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={className} strokeWidth={0} />
      ))}
    </span>
  );
}

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

export default function PracticesPage() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <DeskNav tone="dark" audience="practices" bookHref="#book" />

      <main>
        {/* ══ 1 HERO ══════════════════════════════════════════════════
            ⚠️ THE SAME SHAPE AS /care's HERO, which is the home page
            format with its rail and its max-width removed: no rail, no
            cap on the headline, and THE TWO DOORS as the largest object
            in the fold. A visitor decides in about three seconds, and on
            a hub the answer they need is not "what is this" but "which
            half am I".

            ⚠️ NOTHING AFTER THE DOORS. The founder removed the
            equivalent trailing line from /care on 29 October, so the
            copy's "Whether your priority is..." and "Practical
            operational and administrative solutions..." are not
            rendered. The doors say both. Flagged to the founder.
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
              For Australian GP, specialist &amp; allied health practices
            </p>

            {/* ⚠️ Same clamp as all five sibling pages: a 32px floor so
                the headline does not eat a phone screen, reaching the
                identical 76px cap by 1280px. No max-width, so it fills
                the frame. */}
            <h1
              className={`${DISPLAY} mt-5 text-[clamp(2rem,0.89rem+4.83vw,4.75rem)] leading-[0.93] tracking-[-0.015em] text-white`}
            >
              Better patient access. Stronger revenue assurance. Less
              front-desk pressure.
            </h1>

            <div
              className={`mt-7 flex ${WIDE} flex-col gap-5 text-base text-white/75`}
            >
              <p>
                Running a healthcare practice means balancing patient care with
                the operational demands of a busy front desk, appointment
                schedules, patient follow-ups and revenue administration. When
                those processes become overloaded or disconnected, legitimate
                revenue opportunities may be missed, billing exceptions can
                remain unresolved and valuable staff time gets consumed by
                repetitive administrative work. Novada Tech helps healthcare
                practices strengthen the operations behind patient care through
                two specialised services.
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

        {/* ── PROOF STRIP. Practices labels, as on both pillar pages.
             "Provider" means a clinician here, and the care audience
             line would be false. ──────────────────────────────────── */}
        <section className="border-b border-ink-100 bg-ink-50">
          <div
            className={`${FRAME} ${GUTTER} border-x border-ink-100 py-10 md:py-12`}
          >
            <div className="grid gap-5 md:grid-cols-3 md:gap-6">
              {[
                { v: "5.0", l: "Average client rating", stars: true },
                { v: "77", l: "Client reviews", stars: false },
                {
                  v: "205",
                  l: "Healthcare practices across Australia",
                  stars: false,
                },
              ].map((x, i) => (
                <div
                  key={x.l}
                  className="reveal rounded-xl border border-ink-100 bg-white p-6 text-center shadow-raise md:p-7"
                  style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
                >
                  <p className={`${D2} text-brand-500`}>{x.v}</p>
                  {x.stars ? (
                    <div className="mt-3 flex justify-center">
                      <Stars className="h-4 w-4 fill-brand-500 text-brand-500" />
                    </div>
                  ) : null}
                  <p className="mt-3 text-sm font-medium text-ink-600">{x.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2 THE PROBLEM ────────────────────────────────────────── */}
        <Band index="01" label="The problem">
          <h2 className={`${D2} text-ink-950`}>
            Your practice could be busier than ever. But are your
            administrative processes keeping up?
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Every day, healthcare practices manage hundreds of small
            operational activities.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {DAILY.map((t) => (
              <li
                key={t}
                className="reveal border-l-2 border-ink-200 pl-5 text-base text-ink-700"
              >
                {t}
              </li>
            ))}
          </ul>

          <p className={`${BODY} ${WIDE} mt-8`}>
            But when administrative processes become overloaded, important
            tasks can be delayed or overlooked.
          </p>
          <BoxCards items={PROBLEMS} cols={3} />

          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            The problem is not necessarily a lack of patients or effort from
            your staff. It may be that your administrative processes need
            better visibility, stronger coordination or additional support.
          </p>
        </Band>

        {/* ── 3 THE TWO SERVICES ───────────────────────────────────── */}
        <Band index="02" label="Our two core services">
          <h2 className={`${D2} text-ink-950`}>
            Two specialist solutions. One goal: a more efficient healthcare
            practice.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Every practice faces different challenges. Some need to understand
            where legitimate revenue may be going uncollected. Others need
            ongoing administrative support to manage patient enquiries,
            appointment schedules and billing workflows more consistently.
            Novada offers two solutions designed to address these needs.
          </p>

          {/* SERVICE 1 */}
          <div className="reveal mt-12 rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8">
            <p className={`${MICRO} text-brand-500`}>Service one</p>
            {/* ⚠️ THIS HEADING MATCHES ITS OWN PAGE. The copy reused the
                old "...and Billing Gaps?" line; the audit page now says
                "unbilled services", and a hub promising a different
                headline from the page it links to is its own bug. */}
            <h3 className="mt-3 text-xl font-semibold text-ink-950 md:text-2xl">
              Is your practice losing revenue through missed bookings and
              unbilled services?
            </h3>
            <p className={`${BODY} ${WIDE} mt-5`}>
              Your practice may already have the patients and completed
              services needed to support stronger financial performance. The
              question is whether your administrative and billing processes are
              capturing the opportunities appropriately. Our Patient Revenue
              Leakage Audit examines two connected areas of your
              practice&apos;s operations.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8">
              <div>
                <p className={`${MICRO} text-brand-500`}>
                  Patient access &amp; appointment revenue leakage
                </p>
                <Bullets items={AUDIT_ACCESS} />
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
              an evidence-based review of relevant revenue and administrative
              processes, supported by clear findings and a prioritised
              improvement roadmap.
            </p>
            <p className={`${SMALL} mt-3`}>
              <span className="font-semibold text-ink-950">
                The outcome we are working towards:
              </span>{" "}
              greater visibility over where revenue may be leaking, stronger
              billing accuracy and clearer opportunities to improve appointment
              administration.
            </p>

            <div className="mt-8">
              <GoTo href={LEAKAGE.href}>
                Explore Patient Revenue Leakage Audit
              </GoTo>
            </div>
            <p className={`${SMALL} mt-4`}>
              One-off, independently scoped patient access and revenue
              assurance review.
            </p>
          </div>

          {/* SERVICE 2 */}
          <div
            className="reveal mt-6 rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8"
            style={{ ["--reveal-delay" as string]: "70ms" }}
          >
            <p className={`${MICRO} text-brand-500`}>Service two</p>
            <h3 className="mt-3 text-xl font-semibold text-ink-950 md:text-2xl">
              Busy front desk? Do not let patient enquiries, bookings and
              billing fall behind.
            </h3>
            <p className={`${BODY} ${WIDE} mt-5`}>
              Your reception team should not have to manage every incoming
              call, appointment change, patient follow-up and billing exception
              without adequate support. Our Patient Booking &amp; Retention
              Continuity service provides ongoing administrative support to
              help keep essential practice activities moving.
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
              an ongoing managed administrative support function that works
              alongside your existing practice team, designed to reduce
              repetitive administrative workload, improve consistency and
              support more reliable patient access and billing workflows.
            </p>
            <p className={`${SMALL} mt-3`}>
              <span className="font-semibold text-ink-950">
                The outcome we are working towards:
              </span>{" "}
              less pressure on your reception team, more consistent patient
              administration and stronger support for the financial processes
              behind your practice.
            </p>

            <div className="mt-8">
              <GoTo href={BOOKING.href}>
                Explore Booking &amp; Retention Continuity
              </GoTo>
            </div>
            <p className={`${SMALL} mt-4`}>
              Ongoing managed patient administration and billing support.
            </p>
          </div>
        </Band>

        {/* ── 4 WHICH SOLUTION ─────────────────────────────────────── */}
        <Band index="03" label="Which solution" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            Start with the problem you most want to solve
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Not every practice needs the same service.
          </p>

          {/* ⚠️ AN EQUAL PAIR, exactly as /care does it. Section 4 of the
              founder's copy is a chooser by design. The ranked pair
              survives only in the final ask, where a calendar has to be
              chosen. */}
          <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
            <div className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8">
              <p className={`${MICRO} text-brand-500`}>
                Choose the audit if you are asking
              </p>
              <Bullets items={ASK_AUDIT} />
              <p className={`${SMALL} mt-6 border-t border-ink-100 pt-4`}>
                The audit helps you understand what is happening and what needs
                improvement.
              </p>
              <div className="mt-7">
                <GoTo href={LEAKAGE.href}>Explore the Revenue Leakage Audit</GoTo>
              </div>
            </div>
            <div
              className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8"
              style={{ ["--reveal-delay" as string]: "70ms" }}
            >
              <p className={`${MICRO} text-brand-500`}>
                Choose continuity if you are asking
              </p>
              <Bullets items={ASK_CONTINUITY} />
              <p className={`${SMALL} mt-6 border-t border-ink-100 pt-4`}>
                Continuity helps you manage the work on an ongoing basis.
              </p>
              <div className="mt-7">
                <GoTo href={BOOKING.href}>
                  Explore Booking &amp; Retention Continuity
                </GoTo>
              </div>
            </div>
          </div>

          <div className="reveal mt-6 rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8">
            <h3 className="text-base font-semibold text-ink-950">
              What if your practice needs both?
            </h3>
            {/* ⚠️ NOT A GATE. Saying so plainly is what stops the two
                pillars reading as a funnel. */}
            <p className={`${BODY} ${WIDE} mt-3`}>
              Some practices benefit from identifying existing revenue and
              workflow weaknesses before improving their ongoing administrative
              processes. Our services can complement each other, but each is
              available independently. You do not need to purchase a Patient
              Revenue Leakage Audit before engaging Patient Booking &amp;
              Retention Continuity.
            </p>
          </div>
        </Band>

        {/* ── 5 WHY NOVADA TECH ────────────────────────────────────── */}
        <Band index="04" label="Why Novada Tech">
          <h2 className={`${D2} text-ink-950`}>
            We focus on the work behind your patient care
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            At Novada Tech, we believe efficient healthcare practices depend on
            more than capable clinicians and a busy appointment calendar. They
            also depend on reliable patient access processes, accurate billing,
            effective administrative coordination and clear operational
            accountability. Our approach is built around five principles.
          </p>
          <BoxCards items={PRINCIPLES} cols={3} />
          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            Our role is to help strengthen the processes that support your
            practice, so your clinical and management teams can focus on their
            core responsibilities.
          </p>
        </Band>

        {/* ── 6 WHY THE TWO WORK TOGETHER ──────────────────────────── */}
        <Band index="05" label="How they fit together">
          <h2 className={`${D2} text-ink-950`}>
            Find where revenue is leaking. Strengthen the processes. Support
            long-term efficiency.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Improving practice operations often involves two different
            challenges.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
            <div className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8">
              <p className={`${MICRO} text-brand-500`}>
                First, understanding what is happening
              </p>
              <Bullets items={FIRST_QS} />
              <p className={`${SMALL} mt-6 border-t border-ink-100 pt-4`}>
                <span className="font-semibold text-ink-950">
                  {LEAKAGE.name}:
                </span>{" "}
                a structured, evidence-based review that helps your practice
                identify potential revenue discrepancies, administrative
                weaknesses and improvement opportunities.
              </p>
            </div>
            <div
              className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8"
              style={{ ["--reveal-delay" as string]: "70ms" }}
            >
              <p className={`${MICRO} text-brand-500`}>
                Second, making sure the work happens consistently
              </p>
              <Bullets items={SECOND_QS} />
              <p className={`${SMALL} mt-6 border-t border-ink-100 pt-4`}>
                <span className="font-semibold text-ink-950">
                  {BOOKING.name}:
                </span>{" "}
                ongoing administrative support to help your practice manage
                agreed patient access, appointment, follow-up and billing
                activities more consistently.
              </p>
            </div>
          </div>

          <p className={`${BODY} ${WIDE} mt-10`}>
            Together, these services provide a pathway from identifying
            operational weaknesses to improving the administrative processes
            behind care. Each service can also be used independently.
          </p>
        </Band>

        {/* ── 7 WHO WE SUPPORT ─────────────────────────────────────── */}
        <Band index="06" label="Who we support" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            Supporting GP, specialist and allied health practices across
            Australia
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Healthcare practices operate differently depending on their
            services, practitioner mix, patient volumes and billing
            arrangements. Our solutions are tailored to the administrative
            requirements of each practice.
          </p>
          <BoxCards items={WHO} cols={2} />
          <p className={`${BODY} ${WIDE} mt-10`}>
            Whether your practice has a small reception team or a busy
            multi-practitioner operation, Novada can help you assess your needs
            and explore suitable support.
          </p>
        </Band>

        {/* ── 8 EXPERIENCE & TRUST ─────────────────────────────────── */}
        <Band index="07" label="Experience & trust">
          <h2 className={`${D2} text-ink-950`}>
            Practical operational experience. A commitment to getting the
            details right.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Behind every well-run healthcare practice are important
            administrative processes. Patient enquiries need appropriate
            responses. Bookings need accurate coordination. Approved recalls
            require reliable administration. Billing must be accurate. Claims
            and payments need proper follow-up. At Novada Tech, we approach
            these responsibilities with an emphasis on structured workflows,
            accountability, confidentiality and appropriate professional
            oversight.
          </p>
          <BoxCards items={COMMITMENTS} cols={3} />
          <div className="mt-10">
            <GoTo href="/why-novada">Learn more about Novada Tech</GoTo>
          </div>
        </Band>

        {/* ── 9 HOW WE WORK ────────────────────────────────────────── */}
        <Band index="08" label="How we work" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            Getting started is straightforward
          </h2>
          <BoxCards items={STEPS} cols={2} />
          <p className={`${BODY} ${WIDE} mt-10`}>
            Our aim is to provide practical support with clear responsibilities
            and minimal unnecessary disruption to your practice.
          </p>
          <div className="mt-10">
            <GoTo href="#book">Book your free discovery call</GoTo>
          </div>
        </Band>

        {/* ── 10 OUR PHILOSOPHY ────────────────────────────────────── */}
        <Band index="09" label="Our philosophy">
          <h2 className={`${D2} text-ink-950`}>
            Better practice operations support better patient care
          </h2>
          <div className={`mt-6 flex ${WIDE} flex-col gap-4`}>
            <p className={`${BODY} ${WIDE}`}>
              Healthcare practices exist to provide appropriate clinical
              services to their patients. But every clinical appointment
              depends on administrative processes happening around it.
            </p>
            <p className={`${BODY} ${WIDE}`}>
              Someone needs to answer the enquiry. Someone needs to manage the
              appointment schedule. Someone needs to coordinate authorised
              follow-ups. Someone needs to prepare accurate billing
              information. Someone needs to investigate outstanding claims and
              payments.
            </p>
            <p className={`${BODY} ${WIDE}`}>
              When those processes work well, the practice can operate with
              greater clarity and consistency. When they become overloaded or
              disconnected, unnecessary pressure can fall on receptionists,
              practice managers, clinicians and patients.
            </p>
          </div>
          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            At Novada Tech, we believe the work behind patient care deserves
            structured processes, reliable administration and clear
            accountability. That is the work we are here to strengthen.
          </p>
        </Band>

        {/* ── 11 FAQ ───────────────────────────────────────────────── */}
        <Band index="10" label="Questions" tone="tint">
          <h2 className={`${D2} text-ink-950`}>Frequently asked questions</h2>
          <Faq />
        </Band>

        {/* ══ 12 THE ASK ══════════════════════════════════════════════
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
                  Your practice deserves administrative processes that work as
                  hard as your team does.
                </BandHeading>

                <p className={`${WIDE} mt-7 text-base text-white/75`}>
                  Every patient enquiry deserves appropriate attention. Every
                  appointment should be coordinated effectively. Every
                  completed billable service should be recorded accurately.
                  Every legitimate claim deserves appropriate follow-up. And
                  your reception team should have the support it needs to
                  manage a busy practice.
                </p>

                <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-white/10 md:grid-cols-2">
                  {[
                    {
                      href: LEAKAGE.href,
                      name: LEAKAGE.name,
                      body: "Identify potential missed appointment opportunities, billing discrepancies and weaknesses in revenue administration.",
                      cta: "Explore the Revenue Leakage Audit",
                    },
                    {
                      href: BOOKING.href,
                      name: BOOKING.name,
                      body: "Get ongoing support with patient telephone enquiries, bookings, follow-ups, cancellation recovery and billing administration.",
                      cta: "Explore Booking & Retention Continuity",
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
                    route one click away for the reader who knows. */}
                <p className="mt-12 text-lg font-semibold text-white">
                  Not sure which service you need?
                </p>
                <p className={`${WIDE} mt-3 text-base text-white/75`}>
                  Start with the audit conversation. It reads your practice&apos;s
                  own records, so it is the quickest way to find out whether
                  the problem is the money or the workload. If you already know
                  the problem is that your front desk cannot keep up, book the
                  continuity conversation instead. Each one is booked on its
                  own page.
                </p>

                <div className="mt-8">
                  <GoTo href={`${LEAKAGE.href}#book`} tone="ink">
                    Book your free discovery call
                  </GoTo>
                </div>

                <p className="mt-7">
                  <Link
                    href={`${BOOKING.href}#book`}
                    className="group inline-flex items-center gap-2 border-b border-white/25 pb-0.5 text-sm font-semibold text-white transition-colors duration-150 ease-standard hover:border-brand-200 hover:text-brand-200"
                  >
                    The front desk is the bigger problem? Book the continuity
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
        tagline="GP, specialist and allied health practices."
        href="#book"
      />
    </div>
  );
}
