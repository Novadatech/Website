"use client";

import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Star } from "lucide-react";

import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import BookingEmbed from "@/components/desk/BookingEmbed";
import StickyCta from "@/components/desk/StickyCta";
import Calculator from "@/components/desk/Calculator";
import { Band, BandHeading } from "@/components/desk/Band";
import { LEAKAGE_CALC } from "@/content/calculators";
import { BOOKING } from "@/content/offers";
import {
  BODY,
  BTN_PRIMARY,
  DISPLAY,
  D2,
  FRAME,
  GUTTER,
  MICRO,
  RAIL_GRID,
  SMALL,
} from "@/components/desk/tokens";

/*
 * ══════════════════════════════════════════════════════════════════════
 * /practices/revenue-audit — pillar one of the practices offer.
 *
 * 🔴 BUILT AS THE TWIN OF /care/rostering AND /care/workforce, on the
 * founder's instruction (29 October 2026): same shape, same components,
 * same section rhythm, the founder's copy. It replaced the PillarPage
 * build entirely, as all three care pages did.
 *
 * ⚠️ IT IS A CLIENT COMPONENT, so its metadata CANNOT live in this file.
 * It is exported from page.tsx, which wraps this. Do not add a
 * layout.tsx to this folder: ./confirmed exports no metadata of its own
 * and would inherit whatever a layout declared.
 *
 * ══════════════════════════════════════════════════════════════════════
 * 🔴 THE WORD "GAP" IS BANNED ON THIS PAGE, AND THE SUPPLIED COPY USED
 * IT TWELVE TIMES, INCLUDING IN THE HEADLINE AND A BUTTON.
 *
 * In Australian healthcare "the gap" is the PATIENT'S OUT-OF-POCKET
 * after the Medicare rebate or health fund benefit. It is the single
 * most loaded word in practice billing: "gap fee", "no gap", "known
 * gap" are all standard terms a principal reads every day. A headline
 * asking whether a practice is "losing revenue through billing gaps"
 * therefore reads as "are you losing money by not charging patients a
 * gap?", which is the opposite of what this page sells, and on a page
 * that goes on to discuss Medicare and health fund claims the misread
 * is close to guaranteed.
 *
 * So every instance is replaced with a word that says WHICH problem is
 * meant: unbilled services, revenue leaking, unfilled appointments,
 * unreconciled exceptions, weaknesses, discrepancies. No meaning was
 * changed; the sentences say the same thing more precisely.
 *
 * ⚠️ THIS IS NOT THE SAME CALL AS /care/rostering, where the founder
 * approved "billing gaps" in the headline. That is the CARE market,
 * where the word carries no rebate meaning. This is practices, where it
 * does. Flagged to the founder; revert is one pass if they disagree.
 * ══════════════════════════════════════════════════════════════════════
 *
 * 🔴 NO MISSED-CALL STATISTIC, EVER, and none is in the copy. There is
 * no credible Australian one in existence: every "$X per missed call"
 * and "80% will not leave a voicemail" in circulation is invented.
 *
 * 🔴 NO TESTIMONIALS, on the founder's own written instruction inside
 * the copy: "Do not reuse NDIS or aged care customer testimonials as if
 * they demonstrate results from the Patient Revenue Leakage Audit."
 * This page therefore has NO testimonial slider, unlike its three care
 * twins. AHPRA also narrows what a practice quote may ever say:
 * operational and commercial only, never about clinical quality or
 * patient outcomes. That instruction still stands.
 *
 * ⚠️ THE RATING AND REVIEW COUNT DO APPEAR, on the founder's explicit
 * instruction of 29 October, overriding my own call. I had left them
 * off on the reasoning that they were care proof and would imply
 * practice results; the founder treats them as firm-wide proof. Their
 * decision, and it is recorded here so it is not quietly reversed.
 *
 * ⚠️ BUT THE LABELS ARE NOT THE CARE LABELS, and must not be copied
 * from there. The care pages read "Provider reviews" and "NDIS and
 * aged care providers across Australia". On a practices page
 * "provider" means a CLINICIAN, which is a foreign-sounding usage that
 * marks the writer as not Australian, and the care audience line would
 * simply be false here. So: "Client reviews" and "Healthcare practices
 * across Australia".
 *
 * ⚠️ THE TWO ABS FIGURES WERE REMOVED to make room, also on the
 * founder's instruction. They remain the only STATISTICS permitted on
 * a practices page if one is ever wanted again: EVIDENCE.gpAccess and
 * EVIDENCE.gpWait. There is still no credible Australian missed-call
 * statistic, and inventing one is not an option.
 *
 * 🔴 PRICE REMOVED FROM THE FAQ. The supplied copy carried "from
 * A$5,000 plus GST". The founder removed the identical figure from the
 * care audit's FAQ in the same session, and the standing rule is that
 * price does not appear in writing before a call.
 *
 * 🔴 THE OBJECTIVE IS NOT TO MAXIMISE APPOINTMENTS OR CLAIMS. Both are
 * patient-safety and compliance lines, not positioning. Nothing here
 * may read as more treatment or as claiming more aggressively, and the
 * page says so in its own words in several places. We look for
 * OVERBILLING too, and say so.
 *
 * 🔴 WE NEVER DECIDE ANYTHING CLINICAL. Not whether a patient needs
 * treatment, not whether a recall is required, not MBS item selection
 * or eligibility. Those sit with the practice's qualified people, and
 * that boundary appears beside every component it applies to.
 *
 * ⚠️ THE SIBLING SERVICE IS CALLED "Patient Booking & Retention
 * Continuity", not "Practice Efficiency". The supplied copy used the
 * latter throughout section 12; the real product name comes from
 * BOOKING in offers.ts so the site cannot contradict its own nav, hub
 * and homepage. Flagged to the founder.
 *
 * ⚠️ THE DISCOVERY CALL IS 30 MINUTES. The supplied copy said 20 in two
 * places and 30 in two others. The founder ruled 30 on 29 October.
 *
 * ⚠️ MEASURE IS DELIBERATELY WIDE, as on the care twins: roughly 90ch
 * rather than the house 68ch, because the founder asked for the
 * right-hand space filled. Do not propagate it to reading pages.
 * ══════════════════════════════════════════════════════════════════════
 */

const PRIORITIES = [
  {
    n: "1",
    h: "Identify missed appointment opportunities",
    b: "Review how patient enquiries, bookings, cancellations and administrative follow-ups are handled.",
  },
  {
    n: "2",
    h: "Strengthen billing & claims accuracy",
    b: "Examine whether completed, eligible services have been billed appropriately and whether claims and payments reconcile.",
  },
  {
    n: "3",
    h: "Improve revenue administration",
    b: "Identify practical workflow improvements that can reduce avoidable administrative breakdowns and improve financial visibility.",
  },
];

/* ⚠️ "unfilled appointments", never "appointment gaps". */
const ACCESS_LEAKS = [
  "Patient calls that go unanswered during busy periods.",
  "Enquiries that do not result in a booking.",
  "Incomplete responses to appointment requests.",
  "Cancelled appointments that remain unfilled.",
  "Missed opportunities to offer available appointments to suitable patients.",
  "Incomplete administrative follow-ups.",
  "Clinically approved recall activities that remain administratively outstanding.",
  "Limited visibility into booking conversion and unused appointment capacity.",
];

const BILLING_LEAKS = [
  "Completed billable services that were never invoiced.",
  "Incorrect fees or billing amounts.",
  "Potential underbilling or overbilling.",
  "Incorrectly recorded or unresolved billing items.",
  "Rejected Medicare or private health insurance claims.",
  "Unpaid invoices and outstanding patient balances.",
  "Differences between clinical service records, invoices, claims and payments.",
  "Unresolved payment reconciliation exceptions.",
];

const SCENARIOS = [
  {
    n: "1",
    h: "The front desk is overloaded",
    b: "Reception staff are assisting patients at the counter while multiple phone enquiries arrive. Some calls go unanswered, and some enquiries may not receive timely follow-up. The practice may have sufficient patient demand but limited visibility over whether appointment enquiries are being handled effectively.",
  },
  {
    n: "2",
    h: "Cancellations leave appointments unfilled",
    b: "Patients cancel appointments, sometimes at short notice. Although the practice may have other patients who could use those appointments, there may be no consistent administrative process for offering suitable openings. This can result in avoidable unused appointment capacity.",
  },
  {
    n: "3",
    h: "Completed services are not fully billed",
    b: "Clinicians deliver services and record their work. However, administrative discrepancies may prevent some eligible services from being correctly invoiced or submitted for payment. Without reconciliation between service records and invoices, these issues may remain unnoticed.",
  },
  {
    n: "4",
    h: "Rejected claims remain unresolved",
    b: "Medicare, insurer or other claims are rejected or delayed. The reason may relate to eligibility, billing details, documentation, coding or system errors. Where exceptions are not systematically reviewed, legitimate payments may remain unresolved and incorrect claims may go uncorrected.",
  },
  {
    n: "5",
    h: "Management cannot see the entire revenue journey",
    b: "The practice has separate reports for calls, appointments, completed services, invoicing and payments. But management lacks a consistent view of where administrative bottlenecks or financial discrepancies are occurring.",
  },
];

/* ⚠️ TWO PILLARS, WEIGHTED EQUALLY AND READ IN SEQUENCE: everything
   before the appointment, then everything after it. The founder's brief
   is explicit that billing must never read as an administrative
   add-on, so both render with identical treatment. */
const PILLAR_ONE = [
  {
    h: "Patient enquiry handling",
    items: [
      "Incoming call volumes and response patterns.",
      "Missed or unanswered patient enquiries.",
      "Appointment enquiry response times.",
      "Enquiry follow-up procedures.",
      "Appointment requests that remain unresolved.",
      "Booking conversion reporting, where data is available.",
    ],
  },
  {
    h: "Appointment utilisation",
    items: [
      "Booking trends and appointment availability.",
      "Cancellation frequency and patterns.",
      "Unfilled appointment capacity.",
      "Administrative cancellation recovery workflows.",
      "No-show reporting and follow-up processes.",
      "Opportunities to improve suitable appointment allocation.",
    ],
  },
  {
    h: "Follow-ups & clinically approved recalls",
    items: [
      "Outstanding practice-approved follow-up tasks.",
      "Clinician-approved recall administration.",
      "Reminder workflow completion.",
      "Documentation of contact attempts where required.",
      "Administrative handover and escalation procedures.",
      "Visibility over incomplete follow-up actions.",
    ],
  },
];

const PILLAR_ONE_FINDS = [
  "Improve response to patient enquiries.",
  "Strengthen appointment administration.",
  "Reduce avoidable unfilled capacity.",
  "Improve cancellation recovery workflows.",
  "Strengthen clinically governed follow-up administration.",
  "Establish clearer appointment and patient-access reporting.",
];

const PILLAR_TWO = [
  {
    h: "Completed services vs. invoices",
    items: [
      "Completed services without corresponding invoices.",
      "Incorrectly recorded or omitted billable services.",
      "Differences between service records and invoicing.",
      "Unresolved administrative billing exceptions.",
      "Weaknesses in the process for confirming billing completion.",
    ],
  },
  {
    h: "Billing & fee accuracy",
    items: [
      "Applied fees and billing schedules.",
      "Incorrect billing amounts.",
      "Potential underbilling or overbilling.",
      "Billing data completeness.",
      "Relevant Medicare Benefits Schedule item applications.",
      "Service documentation supporting claimed items.",
    ],
  },
  {
    h: "Medicare, private health insurance & other claims",
    items: [
      "Rejected Medicare claims.",
      "Unresolved private health insurance claims.",
      "Outstanding DVA or other applicable payer claims.",
      "Claim submission and processing discrepancies.",
      "Claim rejection reasons and follow-up processes.",
      "Relevant administrative billing exceptions.",
    ],
  },
  {
    h: "Payments & reconciliation",
    items: [
      "Unpaid invoices.",
      "Outstanding patient payments.",
      "Claim and remittance discrepancies.",
      "Differences between invoices and payments received.",
      "Unallocated or unreconciled transactions.",
      "Administrative processes for investigating payment exceptions.",
    ],
  },
];

const PILLAR_TWO_FINDS = [
  "Identify legitimately billable services that may have been omitted.",
  "Improve billing accuracy.",
  "Strengthen rejected-claim follow-up processes.",
  "Investigate outstanding legitimate payments.",
  "Reduce administrative reconciliation exceptions.",
  "Improve ongoing billing and financial reporting controls.",
];

const OPPORTUNITY = [
  {
    h: "Better enquiry management",
    b: "A structured process for responding to suitable patient enquiries may improve the proportion that result in appropriate bookings.",
  },
  {
    h: "Improved cancellation recovery",
    b: "More consistent administrative follow-up may help suitable patients access appointments that become available.",
  },
  {
    h: "Stronger recall administration",
    b: "Clinician-approved recalls and follow-ups can be tracked more consistently, supporting continuity of care and reducing incomplete administrative tasks.",
  },
  {
    h: "More accurate billing",
    b: "Reviewing completed services against invoices can help identify legitimate billing omissions and other discrepancies.",
  },
  {
    h: "Fewer unresolved claims",
    b: "Clearer exception reporting and follow-up processes can help the practice investigate rejected or delayed claims.",
  },
  {
    h: "Better revenue visibility",
    b: "Connecting appointment, service delivery, billing and payment records can help management identify process weaknesses and make informed decisions.",
  },
];

const DIFFERENT = [
  {
    h: "We examine the full administrative revenue journey",
    b: "From initial patient enquiry through to appropriate appointment booking, completed service, invoice, claim and payment.",
  },
  {
    h: "We use your existing records",
    b: "We review available appointment, practice management, billing and financial information rather than relying solely on industry averages.",
  },
  {
    h: "We distinguish opportunity from earned revenue",
    b: "An unfilled appointment is a potential capacity opportunity, not an amount automatically owed. A completed eligible service that has not been billed may represent a different type of financial discrepancy. We distinguish these carefully in our findings.",
  },
  {
    h: "We consider accuracy as well as revenue",
    b: "Our review investigates potential underbilling and overbilling, documentation issues and claims that may require correction.",
  },
  {
    h: "We respect clinical decision-making",
    b: "We do not determine whether a patient needs treatment, whether a recall is clinically required or which service is medically appropriate. Those decisions remain with the practice's qualified clinicians.",
  },
  {
    h: "We focus on practical improvement",
    b: "Our goal is to provide management with clear findings, relevant evidence and an actionable roadmap.",
  },
];

const WHO = [
  {
    h: "General practices",
    b: "For GP clinics managing high enquiry volumes, appointment scheduling, patient recalls, Medicare billing and practice administration. We review relevant patient access workflows, appointment utilisation and billing assurance processes.",
  },
  {
    h: "Specialist medical practices",
    b: "For specialist clinics managing referrals, consultations, procedures, follow-up appointments, private billing, Medicare and insurer claims. We investigate relevant administrative booking, invoicing, claiming and reconciliation workflows.",
  },
  {
    h: "Allied health practices",
    b: "For practices delivering services such as physiotherapy, psychology, occupational therapy, speech pathology, podiatry and other allied health disciplines. We examine appointment administration, cancellation patterns, applicable billing processes and payment reconciliation.",
  },
  {
    h: "Multidisciplinary practices",
    b: "For healthcare organisations managing multiple practitioners, specialties, locations or appointment types. We review agreed workflows across relevant service lines to identify inconsistencies and improvement opportunities.",
  },
];

const COMMITMENTS = [
  {
    h: "Evidence-based analysis",
    b: "We use available practice records and clearly identify assumptions and data limitations.",
  },
  {
    h: "Respect for clinical governance",
    b: "The practice retains responsibility for clinical decisions, recall priorities, patient suitability and treatment recommendations.",
  },
  {
    h: "Billing accuracy & accountability",
    b: "We investigate potential billing discrepancies without assuming that every opportunity is recoverable or claimable.",
  },
  {
    h: "Actionable findings",
    b: "We focus on practical administrative improvements that management can assess and implement.",
  },
];

const STEPS = [
  {
    n: "1",
    h: "Initial discovery conversation",
    b: "A complimentary 30-minute conversation about your practice type and number of practitioners, your appointment and patient enquiry processes, your current booking and practice management systems, your billing and claims arrangements, the administrative workload and any existing concerns. The objective is to determine whether the audit would be appropriate.",
  },
  {
    n: "2",
    h: "Scope & information review",
    b: "We agree the audit scope, review period, deliverables, fees and information requirements. Relevant information may include aggregated call and enquiry reports, appointment and cancellation reports, administrative follow-up records, clinician-authorised recall workflow reports, completed service records, invoices and billing reports, Medicare and insurer claim reports, and payment reconciliation information.",
  },
  {
    n: "3",
    h: "Patient access & financial analysis",
    b: "We examine relevant records to identify enquiry handling weaknesses, booking and cancellation patterns, administrative follow-up breakdowns, potential unbilled eligible services, billing and claims discrepancies, and outstanding payment reconciliation exceptions. Where data supports it we quantify identified discrepancies, distinguishing confirmed findings from assumptions.",
  },
  {
    n: "4",
    h: "Findings & improvement roadmap",
    b: "We present the findings and explain the implications for your practice. The deliverables include a prioritised improvement roadmap covering the relevant patient access, appointment administration, billing and reconciliation processes.",
  },
];

const RECEIVE = [
  {
    h: "Patient access & appointment findings",
    b: "A review of enquiry handling, booking conversion where measurable, cancellations, unused capacity and relevant administrative follow-ups.",
  },
  {
    h: "Billing & claims assurance findings",
    b: "Identification of potential unbilled eligible services, incorrect billing records, rejected claims and payment discrepancies.",
  },
  {
    h: "Revenue opportunity assessment",
    b: "A structured assessment distinguishing supported outstanding receivables or billing discrepancies, potentially legitimate revenue requiring verification, and appointment capacity and workflow improvement opportunities.",
  },
  {
    h: "Operational process review",
    b: "Identification of relevant weaknesses in appointment administration, service-to-billing workflows, exception tracking and financial controls.",
  },
  {
    h: "Prioritised improvement action plan",
    b: "Clear recommendations organised according to potential impact, urgency, feasibility and implementation requirements.",
  },
  {
    h: "Management findings walkthrough",
    b: "A discussion of your audit results, supporting evidence and recommended next steps.",
  },
];

/* ⚠️ The sibling's real scope, in the founder's words from section 12.
   The service it belongs to is named from BOOKING in offers.ts. */
const SIBLING_SCOPE = [
  "Unlimited telephone-answering support during agreed service hours, subject to defined service capacity and operating terms.",
  "Administrative support for booking, rescheduling and appointment enquiry management.",
  "Practice-approved administrative follow-up coordination.",
  "Administrative support for recalling patients when authorised and directed by the practice's clinical team.",
  "Follow-up and rebooking administration for suitable patients when appointments become available.",
  "Administrative support for invoicing, claims processing, rejected-claim follow-up and payment reconciliation.",
];

const FAQ = [
  {
    q: "What is a Patient Revenue Leakage Audit?",
    a: "It is an operational and financial review of relevant patient enquiry, appointment administration, service billing, claims and payment processes. The purpose is to identify potential revenue discrepancies, missed administrative opportunities and workflow improvements.",
  },
  {
    q: "Does the audit cover both bookings and billing?",
    a: "Yes. Our review examines two distinct areas: patient access and appointment revenue leakage, and billing, claims and revenue assurance. The agreed scope determines which records, periods and processes will be analysed.",
  },
  {
    q: "Can the audit help identify missed patient enquiries?",
    a: "Yes. Where reliable enquiry and appointment data is available, we can assess relevant response patterns, incomplete enquiry follow-ups and booking processes. We do not assume that every missed call would have resulted in a patient booking.",
  },
  {
    q: "Does the audit include cancellations and no-shows?",
    a: "Yes. We review relevant cancellation and no-show patterns, appointment utilisation and administrative recovery processes. Any recommendation must respect patient choice, practitioner availability and clinical suitability.",
  },
  {
    q: "Do you review patient recalls?",
    a: "We can examine the administrative processes used to track and coordinate practice-approved recalls and reminders. The clinical decision to recall a patient, the urgency of contact and the appropriate clinical response remain the responsibility of authorised clinicians.",
  },
  {
    q: "Does the audit cover Medicare billing?",
    a: "Yes. The agreed scope can include identifying billing discrepancies, claim exceptions and relevant Medicare administrative processes. MBS item eligibility, appropriate item selection and clinical entitlement decisions must be verified by appropriately qualified and authorised personnel.",
  },
  {
    q: "Can you review private health insurance claims?",
    a: "Yes. Where relevant to the practice and included in the scope, we can investigate claim rejections, billing discrepancies and payment reconciliation exceptions.",
  },
  {
    q: "What if our practice already has billing software?",
    a: "That is fine. Our audit is designed to examine relevant information from your existing systems, subject to data availability and secure access arrangements. We are not proposing that you replace your software simply to conduct the review.",
  },
  {
    q: "Can you guarantee that we will recover lost revenue?",
    a: "No. The audit identifies supported discrepancies and potential opportunities. Whether an amount is legally claimable, recoverable or capable of correction depends on the facts, applicable rules, payer requirements and any relevant time limits.",
  },
  {
    q: "Does the audit replace a Medicare compliance audit?",
    a: "No. This is an operational and revenue assurance review. It does not replace a statutory audit, formal regulatory review or specialist legal, accounting or clinical advice.",
  },
  {
    /* 🔴 NO FIGURE. See the header note: the founder removed the
       identical A$5,000 from the care audit's FAQ in the same session,
       and price does not appear in writing before a call. */
    q: "How much does the audit cost?",
    a: "The fee depends on your practice's size, number of practitioners, locations, systems, data availability and the agreed audit scope, so we confirm it with you before any work begins. The initial discovery conversation is complimentary.",
  },
  {
    q: "How long does the audit take?",
    a: "The delivery schedule depends on the complexity of your practice, the review period and the availability and quality of relevant records. We confirm the expected timeline and deliverables before commencing.",
  },
  {
    /* 🔴 LOAD-BEARING. Privacy, and the one instruction on this page a
       reader must act on before they contact us. */
    q: "Will Novada require access to patient records?",
    a: "We aim to use aggregated or de-identified information wherever sufficient. If access to identifiable health information is necessary, this must be separately justified, authorised and managed through appropriate privacy, confidentiality, security and access arrangements. Please do not send patient names, medical histories, clinical results or other sensitive information through our website enquiry form.",
  },
  {
    q: "Can Novada help after the audit?",
    a: `Yes. Depending on your practice's requirements, we can discuss ongoing administrative support through our separate ${BOOKING.name} service. You may also implement the recommendations internally.`,
  },
  {
    q: "Is this suitable for a small practice?",
    a: "Potentially. The audit is most appropriate where there is enough appointment, billing or operational activity to justify a structured review. Our discovery conversation helps assess whether there is a reasonable business case.",
  },
];

/* ── building blocks. Same set as the three care pages. ──────────── */

const WIDE = "max-w-[90ch]";

function Cta({
  children,
  tone = "light",
  href = "#book",
}: {
  children: React.ReactNode;
  tone?: "light" | "brand";
  href?: string;
}) {
  /* 🔴 "brand" IS BTN_PRIMARY ON AN INK SURFACE, which tokens.ts warns
     against: brand-500 on canvas-ink is about 2:1, so the button's own
     edge all but disappears. The founder asked for the same blue on the
     hero as the other CTAs, so the FILL is exactly brand-500 and a
     light ring carries the boundary. ⚠️ Remove the ring and it stops
     reading as a button on this background. */
  const cls =
    tone === "brand"
      ? `${BTN_PRIMARY} min-h-12 px-6 shadow-cta ring-1 ring-white/25 hover:ring-white/40`
      : BTN_PRIMARY;
  return (
    <a href={href} className={`${cls} w-full text-base sm:w-auto`}>
      {children}
      <ArrowRight
        aria-hidden
        className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
      />
    </a>
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

/* ⚠️ UNBRANDED BY NECESSITY, and 🔴 NOT A LINK. No platform name, no
   wordmark, no Trustpilot green, nothing clickable. Same as the care twins,
   except that it says CLIENT reviews rather than provider reviews:
   on a practices page "provider" reads as a clinician. */
function RatingBar() {
  return (
    <div className="inline-flex min-h-11 flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5">
      <Stars />
      <span className="text-sm font-semibold text-white">5.0</span>
      <span className="text-sm text-white/70">from 77 client reviews</span>
    </div>
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

/** One component inside a pillar: a heading and the list under it. */
function SubGroup({ h, items }: { h: string; items: string[] }) {
  return (
    <div className="border-l-2 border-ink-100 pl-5">
      <h4 className="text-base font-semibold text-ink-950">{h}</h4>
      <Bullets items={items} />
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

export default function RevenueAuditPage() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <DeskNav tone="dark" audience="practices" bookHref="#book" />

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
              For Australian GP, specialist &amp; allied health practices
            </p>

            {/* 🔴 "Unbilled services", NOT "billing gaps". See the header:
                in Australian practice billing "the gap" is the patient's
                out-of-pocket, so the supplied headline would have read
                as "are you losing money by not charging a gap?".
                ⚠️ Same clamp as the three care pages: a 32px floor so
                the headline does not eat a phone screen, reaching the
                identical 76px cap by 1280px. */}
            <h1
              className={`${DISPLAY} mt-5 text-[clamp(2rem,0.89rem+4.83vw,4.75rem)] leading-[0.93] tracking-[-0.015em] text-white`}
            >
              Is your practice losing revenue through missed bookings and
              unbilled services?
            </h1>

            <div
              className={`mt-7 flex ${WIDE} flex-col gap-5 text-base text-white/75`}
            >
              <p>
                Missed patient enquiries. Unfilled appointments. Unbilled
                services. Rejected claims. Your practice could be missing
                legitimate revenue opportunities at multiple points, from the
                first patient enquiry through to the final payment. Novada
                Tech&apos;s Patient Revenue Leakage Audit examines your
                appointment revenue leakage alongside your billing, claims and
                revenue assurance, and identifies where revenue may be
                leaking, where processes are weak and what can practically be
                improved.
              </p>
            </div>

            <div className="mt-10">
              <Cta tone="brand">Book your revenue leakage review</Cta>
            </div>
            <p className="mt-5 text-sm text-white/55">
              Start with a complimentary, no-obligation 30-minute discovery
              conversation.
            </p>
          </div>
        </section>

        {/* ── PROOF STRIP ──────────────────────────────────────────────
             ⚠️ THE SAME THREE FIGURES AS THE CARE PAGES, on the
             founder's instruction, but NOT the same labels. "Provider
             reviews" and "NDIS and aged care providers" belong to the
             care audience; here "provider" would read as a clinician
             and the audience line would be false. See the file header
             for the decision and who made it. */}
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
                  {/* Stars in the same colour as the 5.0 beside them. */}
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

        {/* ── 2 WHY NOVADA TECH ────────────────────────────────────── */}
        <Band index="01" label="Why Novada Tech">
          <h2 className={`${D2} text-ink-950`}>
            Your practice works hard to care for patients. But is every revenue
            opportunity being managed properly?
          </h2>
          <div className={`mt-6 flex ${WIDE} flex-col gap-4`}>
            <p className={`${BODY} ${WIDE}`}>
              Running a successful healthcare practice involves more than
              delivering excellent clinical care. It also requires reliable
              appointment administration, responsive patient communication,
              accurate billing and effective payment reconciliation.
            </p>
            <p className={`${BODY} ${WIDE}`}>
              Yet many practices manage these responsibilities across different
              people, systems and processes. The front desk handles incoming
              enquiries. The appointment system tracks bookings and
              cancellations. Clinicians document services. The billing system
              processes invoices and claims. The finance team monitors
              payments.
            </p>
          </div>

          <p className="mt-8 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            But who is reviewing how all these processes connect?
          </p>

          <p className={`${BODY} ${WIDE} mt-8`}>
            At Novada Tech, we help healthcare practices examine the
            operational journey from patient enquiry to completed appointment,
            billing and payment. Our audit focuses on three priorities.
          </p>
          <BoxCards items={PRIORITIES} cols={3} />

          <p className={`${BODY} ${WIDE} mt-10`}>
            We look beyond individual transactions to understand the processes
            that connect patient access, service delivery and revenue
            collection.
          </p>
        </Band>

        {/* ── 3 THE PROBLEM ────────────────────────────────────────── */}
        <Band index="02" label="The problem">
          <h2 className={`${D2} text-ink-950`}>
            Two places your practice could be losing revenue without realising
            it
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Revenue leakage is not always caused by low patient demand. A
            practice may have a busy reception area, full consulting rooms and
            an established patient base while still experiencing avoidable
            administrative and billing inefficiencies. These usually fall into
            two areas.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
            <div className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8">
              <p className={`${MICRO} text-brand-500`}>
                One &middot; Patient access &amp; appointment leakage
              </p>
              <h3 className="mt-3 text-base font-semibold italic text-ink-950">
                Patient demand exists, but appointment opportunities may be
                missed.
              </h3>
              <Bullets items={ACCESS_LEAKS} />
              <p className={`${SMALL} mt-6 border-t border-ink-100 pt-4`}>
                Every unfilled appointment represents time that cannot
                necessarily be recovered.
              </p>
              {/* 🔴 THE HONESTY LINE. Not every enquiry is an opportunity,
                  and saying so is what keeps this page out of the
                  "turn missed calls into revenue" category. */}
              <p className={`${SMALL} mt-3`}>
                Not every enquiry is clinically appropriate, commercially
                viable or likely to result in an appointment. Our audit
                distinguishes genuine opportunities from speculative revenue
                assumptions.
              </p>
            </div>

            <div
              className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8"
              style={{ ["--reveal-delay" as string]: "70ms" }}
            >
              <p className={`${MICRO} text-brand-500`}>
                Two &middot; Billing, claims &amp; revenue leakage
              </p>
              <h3 className="mt-3 text-base font-semibold italic text-ink-950">
                Services may be completed, but the associated billing and
                collection process may not be working as intended.
              </h3>
              <Bullets items={BILLING_LEAKS} />
            </div>
          </div>

          <p className={`${BODY} ${WIDE} mt-10`}>
            These two problems can occur independently, or at the same time. A
            practice may improve appointment bookings but still have billing
            issues. Another practice may bill accurately but struggle with
            missed enquiries and unused appointment capacity. Novada&apos;s
            audit is designed to investigate both.
          </p>

          <div className="mt-10">
            <Cta>Find out where revenue may be leaking</Cta>
          </div>
        </Band>

        {/* ── 4 WHY THIS MATTERS ───────────────────────────────────── */}
        <Band index="03" label="Why this matters" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            A busy practice is not always an efficient practice
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Consider these common operational situations.
          </p>
          <BoxCards items={SCENARIOS} cols={2} />
          <p className={`${BODY} ${WIDE} mt-10`}>
            Novada helps bring the relevant information together, establish
            what the evidence shows and identify where improvements may be
            worthwhile.
          </p>
          {/* 🔴 LOAD-BEARING. These are illustrations, not an accusation. */}
          <p className={`${SMALL} ${WIDE} mt-5`}>
            These scenarios illustrate the issues an audit can investigate.
            They do not imply that every practice has these problems.
          </p>
        </Band>

        {/* ── 5 WHAT THE AUDIT INCLUDES ────────────────────────────── */}
        <Band index="04" label="What our audit includes">
          <h2 className={`${D2} text-ink-950`}>
            A comprehensive review of patient access, appointments, billing and
            revenue assurance
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Our Patient Revenue Leakage Audit examines two interconnected
            pillars, read in sequence: everything that happens before the
            appointment, and everything that happens after it.
          </p>

          {/* PILLAR 1 */}
          <div className="reveal mt-10 rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8">
            <p className={`${MICRO} text-brand-500`}>
              Pillar one &middot; Patient access &amp; appointment revenue
              leakage
            </p>
            <h3 className="mt-3 text-base font-semibold italic text-ink-950">
              Are patient enquiries becoming appointments, and is available
              capacity being managed effectively?
            </h3>
            <p className={`${BODY} ${WIDE} mt-4`}>
              We examine the administrative processes that connect patient
              enquiries with appropriately scheduled appointments.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3 md:gap-8">
              {PILLAR_ONE.map((g) => (
                <SubGroup key={g.h} h={g.h} items={g.items} />
              ))}
            </div>

            {/* 🔴 CLINICAL CONTROL STAYS WITH THE PRACTICE. This boundary
                sits beside the component it applies to, not in a
                footnote nobody reads. */}
            <p className={`${SMALL} mt-8 border-t border-ink-100 pt-5`}>
              All clinical recalls, urgency classifications, care
              recommendations and patient contact instructions remain under the
              control of the practice and its authorised clinicians.
            </p>

            <p className={`${MICRO} mt-8 text-brand-500`}>
              What this helps identify
            </p>
            <Bullets items={PILLAR_ONE_FINDS} />
            <p className={`${SMALL} mt-6`}>
              <span className="font-semibold text-ink-950">The objective:</span>{" "}
              help your practice make more effective use of appropriate
              appointment opportunities while respecting patient choice and
              clinical judgement.
            </p>
          </div>

          {/* PILLAR 2 */}
          <div
            className="reveal mt-6 rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8"
            style={{ ["--reveal-delay" as string]: "70ms" }}
          >
            <p className={`${MICRO} text-brand-500`}>
              Pillar two &middot; Billing, claims &amp; revenue assurance
            </p>
            <h3 className="mt-3 text-base font-semibold italic text-ink-950">
              Are completed services being billed correctly, and are legitimate
              payments being collected?
            </h3>
            <p className={`${BODY} ${WIDE} mt-4`}>
              We examine relevant service delivery, invoicing, claiming and
              payment processes.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8">
              {PILLAR_TWO.map((g) => (
                <SubGroup key={g.h} h={g.h} items={g.items} />
              ))}
            </div>

            {/* 🔴 WE DO NOT DECIDE ITEM NUMBERS. Absolute. */}
            <p className={`${SMALL} mt-8 border-t border-ink-100 pt-5`}>
              MBS item selection, eligibility, clinical entitlement and
              billing-code accuracy must be verified by appropriately qualified
              and authorised personnel.
            </p>

            <p className={`${MICRO} mt-8 text-brand-500`}>
              What this helps identify
            </p>
            <Bullets items={PILLAR_TWO_FINDS} />
            {/* 🔴 NOT MORE CLAIMING. Accuracy, in both directions. */}
            <p className={`${SMALL} mt-6`}>
              <span className="font-semibold text-ink-950">The objective:</span>{" "}
              not to increase claiming indiscriminately, but to help ensure
              services are recorded, billed, claimed and reconciled accurately
              under the applicable rules.
            </p>
          </div>

          <div className="mt-10">
            <Cta>Book your patient revenue review</Cta>
          </div>
        </Band>

        {/* ── 6 THE OPPORTUNITY ────────────────────────────────────── */}
        <Band index="05" label="The opportunity">
          <h2 className={`${D2} text-ink-950`}>
            Your practice may already have the patients, appointments and
            services. The opportunity is in the process.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Improving practice revenue does not always require more advertising
            or attracting more patients. Sometimes the most useful starting
            point is reviewing how existing demand and completed services are
            managed.
          </p>
          <BoxCards items={OPPORTUNITY} cols={3} />
          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            Revenue leakage is not always a patient acquisition problem. It can
            be an operational process problem.
          </p>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Our audit helps determine whether that applies to your practice,
            and what the evidence indicates should happen next.
          </p>
        </Band>

        {/* ── THE ARITHMETIC ───────────────────────────────────────────
             ⚠️ THE ONE INTERACTIVE THING ON THIS PAGE, and with no
             testimonials and no review score permitted here, it is also
             the only proof a reader can test for themselves. The
             starting values are placeholders, not claims. */}
        <Band index="06" label="Your own numbers" tone="tint">
          <Calculator config={LEAKAGE_CALC} locale="en-AU" currency="AUD" />
        </Band>

        {/* ── 7 OUR APPROACH ───────────────────────────────────────── */}
        <Band index="07" label="Our approach">
          <h2 className={`${D2} text-ink-950`}>
            We do not just look at bookings. And we do not just look at
            billing.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Many practices review their appointment books and billing reports
            separately. Novada takes a connected approach to the administrative
            and financial processes behind practice operations.
          </p>
          <BoxCards items={DIFFERENT} cols={3} />
          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            Better patient access administration. Stronger billing assurance.
            Clearer revenue visibility.
          </p>
        </Band>

        {/* ── 8 WHO WE WORK WITH ───────────────────────────────────── */}
        <Band index="08" label="Who we work with">
          <h2 className={`${D2} text-ink-950`}>
            Designed for Australian GP, specialist and allied health practices
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Our Patient Revenue Leakage Audit is designed for established
            healthcare practices that manage patient appointments, service
            delivery records and billing processes.
          </p>
          <BoxCards items={WHO} cols={2} />
          <p className={`${BODY} ${WIDE} mt-10`}>
            Whether you manage a single clinic or multiple practice locations,
            the audit is tailored to your operating model, available systems
            and agreed scope.
          </p>
          <div className="mt-10">
            <Cta>Discuss your practice&apos;s audit needs</Cta>
          </div>
        </Band>

        {/* ── 9 OUR COMMITMENTS ────────────────────────────────────────
             ⚠️ NO TESTIMONIALS HERE, on the founder's own written
             instruction inside the copy. Care quotes must never be
             reused as if they demonstrate practice results, and AHPRA
             narrows what a practice quote may say in any case. The four
             commitments carry this section on their own. */}
        <Band index="09" label="Our commitments" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            Built around the real operational challenges healthcare practices
            face
          </h2>
          <div className={`mt-6 flex ${WIDE} flex-col gap-4`}>
            <p className={`${BODY} ${WIDE}`}>
              Healthcare practices rely on multiple administrative functions
              working together. Appointments need to be scheduled
              appropriately. Patients need clear communication. Clinical
              services must be documented. Billing needs to be accurate. Claims
              must comply with relevant requirements. Payments need to be
              reconciled.
            </p>
            <p className={`${BODY} ${WIDE}`}>
              At Novada Tech, we believe these processes deserve the same
              operational discipline as other critical business functions. Our
              audit is designed around four commitments.
            </p>
          </div>
          <BoxCards items={COMMITMENTS} cols={2} />
        </Band>

        {/* ── 10 HOW THE AUDIT WORKS ───────────────────────────────── */}
        <Band index="10" label="How the audit works">
          <h2 className={`${D2} text-ink-950`}>
            Four steps to understanding your practice&apos;s revenue processes
          </h2>
          <BoxCards items={STEPS} cols={2} />
          {/* 🔴 PRIVACY POSTURE, stated where the information is asked
              for rather than only in the FAQ. */}
          <p className={`${SMALL} ${WIDE} mt-10`}>
            We seek to use de-identified or aggregated records where
            sufficient, and agree secure access procedures for any necessary
            sensitive information.
          </p>
        </Band>

        {/* ── 11 WHAT YOU RECEIVE ──────────────────────────────────── */}
        <Band index="11" label="What you receive">
          <h2 className={`${D2} text-ink-950`}>
            More than an audit report. A practical revenue improvement
            roadmap.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Our Patient Revenue Leakage Audit provides agreed deliverables
            tailored to your practice.
          </p>
          <BoxCards items={RECEIVE} cols={2} />
          <p className={`${BODY} ${WIDE} mt-10`}>
            Our goal is to give your practice a clearer picture of its revenue
            processes and practical information to support improvement
            decisions.
          </p>
          {/* 🔴 NO GUARANTEE. Load-bearing, and it sits with the
              deliverables rather than buried in the FAQ. */}
          <p className={`${SMALL} ${WIDE} mt-5`}>
            Financial opportunities are assessed using available evidence. Cost
            savings, increased bookings and revenue recovery are not
            guaranteed.
          </p>
        </Band>

        {/* ── 12 AFTER THE AUDIT ───────────────────────────────────── */}
        <Band index="12" label="After the audit">
          <h2 className={`${D2} text-ink-950`}>
            Finding the problem is the first step. Building better processes is
            the next.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            A one-off audit can help identify where appointment administration
            or billing controls need improvement. But keeping those processes
            working consistently requires ongoing attention. Following the
            audit, practices can choose to implement recommendations internally
            or explore additional support from Novada Tech.
          </p>

          <div className="reveal mt-10 rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8">
            {/* ⚠️ THE REAL PRODUCT NAME, from offers.ts. The supplied
                copy called this "Practice Efficiency", which is not what
                the nav, the hub or the homepage call it. */}
            <p className={`${MICRO} text-brand-500`}>
              Introducing Novada&apos;s {BOOKING.name} service
            </p>
            <p className={`${WIDE} mt-4 text-base text-ink-950`}>
              Our separate managed service provides ongoing administrative
              support across agreed areas of practice operations, including:
            </p>
            <Bullets items={SIBLING_SCOPE} />
            <p className={`${SMALL} ${WIDE} mt-6`}>
              The audit helps your practice identify where revenue may be
              leaking and where processes are weak. The managed service helps
              your practice maintain agreed administrative workflows on an
              ongoing basis. Both are available independently, and you do not
              need to purchase an audit before engaging the managed service.
            </p>
            <div className="mt-7">
              <Link
                href={BOOKING.href}
                className={`${BTN_PRIMARY} w-full text-base sm:w-auto`}
              >
                Explore {BOOKING.name}
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </Band>

        {/* ── 13 FAQ ───────────────────────────────────────────────── */}
        <Band index="13" label="Questions" tone="tint">
          <h2 className={`${D2} text-ink-950`}>Frequently asked questions</h2>
          <Faq />
        </Band>

        {/* ── 14 BOOK. Same layout as the care pages' #book. ───────── */}
        <section id="book" className="border-t border-white/10 bg-canvas-ink">
          <div
            className={`${FRAME} ${GUTTER} border-x border-white/10 py-16 md:py-24 lg:py-32`}
          >
            <div className={RAIL_GRID}>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-center gap-3 lg:block">
                  <span className={`${MICRO} tabular text-white/55`}>14</span>
                  <span
                    aria-hidden
                    className="h-px w-6 bg-white/20 lg:my-3 lg:h-6 lg:w-px"
                  />
                  <h2 className={`${MICRO} text-white/85`}>Book</h2>
                </div>
              </div>

              <div className="min-w-0">
                <BandHeading dark>
                  Your practice may already have the demand. Let us find out
                  whether the revenue processes are keeping up.
                </BandHeading>

                <div
                  className={`mt-7 flex ${WIDE} flex-col gap-5 text-base text-white/75`}
                >
                  <p>
                    Every patient enquiry deserves an appropriate response.
                    Every available appointment should be managed effectively.
                    Every completed billable service should be recorded
                    accurately. Every legitimate claim should be properly
                    submitted and followed up. Every payment should be
                    reconciled. But how confident are you that these processes
                    are working together across your practice?
                  </p>
                </div>

                <p className={`${WIDE} mt-7 text-base text-white/75`}>
                  Book your free 30-minute patient revenue discovery call.
                  During the conversation, we will:
                </p>
                <Bullets
                  tone="dark"
                  items={[
                    "Understand your practice's operations and current challenges.",
                    "Discuss patient access, booking, billing and claims processes.",
                    "Explain what the audit reviews and how it works.",
                    "Determine whether a comprehensive review would be appropriate.",
                    "Outline the potential next steps and indicative pricing.",
                  ]}
                />

                <div className="mt-10">
                  {/* ⚠️ desk="practices-revenue-audit" resolves to the
                      practices audit calendar in BookingEmbed. The care
                      pages use care-rostering and care-continuity.
                      Swapping these sends bookings to the wrong team. */}
                  <BookingEmbed
                    desk="practices-revenue-audit"
                    source="practices-revenue-audit"
                    tone="dark"
                    title="Book your revenue leakage review"
                  />
                </div>

                <p className="mt-6 text-sm text-white/55">
                  The initial discovery conversation is complimentary. The
                  comprehensive audit is a separately scoped, paid service.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DeskFooter />

      {/* ⚠️ CLEARANCE FOR THE STICKY BAR. Without it the bar covers the
          last line of the footer on a phone, where it is tallest because
          the tagline wraps above a full-width button. */}
      <div aria-hidden className="h-28 sm:h-20" />

      {/* 🔴 The calendar sits at the foot of a long page, so a bold action
          has to travel with the reader. Do not remove while it does. */}
      <StickyCta
        label="Book your revenue leakage review"
        tagline="Complimentary 30-minute discovery call."
        href="#book"
      />
    </div>
  );
}
