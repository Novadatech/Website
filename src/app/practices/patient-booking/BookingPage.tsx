"use client";

import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Star } from "lucide-react";

import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import BookingEmbed from "@/components/desk/BookingEmbed";
import StickyCta from "@/components/desk/StickyCta";
import { Band, BandHeading } from "@/components/desk/Band";
import { LEAKAGE } from "@/content/offers";
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
 * /practices/patient-booking — pillar two of the practices offer.
 *
 * 🔴 THE LAST OF FIVE, built 29 October 2026 on the founder's
 * instruction: same shape, same components, same section rhythm as
 * /care/rostering, /care/workforce, /care and
 * /practices/revenue-audit. The PillarPage build is gone.
 *
 * ⚠️ IT IS A CLIENT COMPONENT, so its metadata CANNOT live in this
 * file. It is exported from page.tsx, which wraps this. Do not add a
 * layout.tsx: ./confirmed exports no metadata of its own and would
 * inherit whatever a layout declared.
 *
 * ⚠️ MONTH TO MONTH, where the audit is a one-off. Never let "one piece
 * of work" drift here from its sibling.
 *
 * ══════════════════════════════════════════════════════════════════════
 * THREE RULES CARRIED FORWARD FROM THE BUILD THIS REPLACES. The
 * founder's copy does not contain any of them, and all three are
 * safety or regulatory lines rather than positioning, so they were
 * added back. Each is flagged where it sits.
 *
 * 🔴 1. "RETENTION" IS DEFINED ON THE PAGE, EARLY AND IN ONE SENTENCE.
 * The word is in the service name. On its own it reads as persuading
 * patients into treatment, which is the one line this offer must never
 * cross. If the name is ever shortened in a deck or an ad, that
 * definition has to travel with it.
 *
 * 🔴 2. RECALLS ARE ADMINISTERED, NEVER ORIGINATED, and three promises
 * travel together as one: we add nobody to the list, no offer or
 * incentive ever goes into a recall message, and we never ask a patient
 * for a review. The first is clinical governance. The second and third
 * are AHPRA: inducements in recall messaging and soliciting patient
 * reviews are the two most-litigated areas in this market, and refusing
 * both is a trust win rather than a limitation.
 *
 * 🔴 3. THE WORD "GAP" IS BANNED. In Australian healthcare the gap is
 * the PATIENT'S OUT-OF-POCKET after the rebate. The supplied copy used
 * it three times ("a gap in the schedule", "operational gaps",
 * "reconciliation gaps"); each now says which problem is meant. Same
 * call as the sibling audit page, same reasoning, and it is NOT the
 * call made on /care/rostering, where the care market gives the word no
 * rebate meaning.
 * ══════════════════════════════════════════════════════════════════════
 *
 * 🔴 NO PRICE. The supplied copy carried "from A$3,500 per month plus
 * GST". The founder removed the equivalent figures from the care audit
 * and the practices audit in the same session, and the standing rule is
 * that price does not appear in writing before a call.
 *
 * ⚠️ THE DISCOVERY CALL IS 30 MINUTES. The copy said 20 in one place
 * and 30 in two others. The founder ruled 30 on 29 October.
 *
 * ⚠️ THE RATING AND REVIEW COUNT APPEAR, matching the sibling audit
 * page, where the founder added them on 29 October. The labels are the
 * PRACTICES labels, not the care ones: "Client reviews" and "Healthcare
 * practices across Australia". On a practices page "provider" means a
 * clinician, and the care audience line would be false here.
 *
 * 🔴 NO TESTIMONIALS. No practice quotes exist yet, and care quotes
 * must never be reused as if they demonstrate practice results. AHPRA
 * also narrows what a practice quote may ever say: operational and
 * commercial only, never clinical quality or patient outcomes.
 *
 * ⚠️ NO CALCULATOR, unlike the audit page. This is a managed service;
 * there is no honest sum to show. Same split as the care pair.
 *
 * 🔴 "UNLIMITED" IS QUALIFIED EVERY TIME IT APPEARS, and the
 * qualification is the founder's own wording. It is not 24/7 and it is
 * not a guarantee that every call is answered. Never print the word
 * without the qualifier nearby.
 * ══════════════════════════════════════════════════════════════════════
 */

const AREAS = [
  {
    n: "1",
    h: "Patient access",
    b: "Make it easier for patients to reach your practice and have their administrative enquiries handled.",
  },
  {
    n: "2",
    h: "Booking & follow-up continuity",
    b: "Maintain consistent processes for appointments, cancellations and practice-authorised patient communications.",
  },
  {
    n: "3",
    h: "Billing & claims administration",
    b: "Support routine billing workflows, claim exception follow-up and payment reconciliation.",
  },
];

/* ⚠️ "an unfilled slot", never "a gap in the schedule". */
const COMPETING = [
  "A patient calls while reception is assisting someone at the counter.",
  "A cancelled appointment leaves an unfilled slot in the schedule.",
  "A clinician-approved recall is waiting for administrative follow-up.",
  "A rejected claim requires investigation.",
  "Meanwhile, the phones keep ringing.",
];

const PROBLEMS = [
  {
    h: "Missed patient enquiries",
    b: "Patients call, but reception may be busy assisting people in person or handling other administrative work. Some enquiries may not receive a timely response.",
  },
  {
    h: "Unfilled cancellations",
    b: "Appointments become available unexpectedly, but there may be limited capacity to contact suitable patients or manage rebooking.",
  },
  {
    h: "Incomplete follow-ups",
    b: "Administrative follow-up tasks can build up when staff are focused on immediate front-desk demands.",
  },
  {
    h: "Outstanding recalls",
    b: "Clinician-approved recalls require timely, appropriately directed administrative contact and reliable escalation when patients cannot be reached.",
  },
  {
    h: "Billing & claims backlogs",
    b: "Invoices, rejected claims, outstanding balances and reconciliation exceptions can accumulate when there is not enough administrative capacity.",
  },
  {
    h: "Overloaded practice staff",
    b: "Receptionists and practice managers spend significant time switching between competing tasks, making it harder to maintain consistency.",
  },
];

/* The seven components. Each carries its own boundary, because each has
   a different thing the practice must keep. */
const SERVICE = [
  {
    n: "1",
    eyebrow: "Unlimited patient telephone answering",
    lead: "Help ensure more patient enquiries receive the attention they deserve.",
    items: [
      "Incoming patient call answering.",
      "Routine appointment enquiries.",
      "General administrative questions.",
      "Appointment availability enquiries.",
      "Message-taking and appropriate routing.",
      "Administrative call-back coordination.",
      "Escalation of enquiries outside our authorised scope.",
    ],
    /* 🔴 THE QUALIFIER TRAVELS WITH THE WORD. Always. */
    note: "Unlimited refers to eligible incoming-call volume within agreed hours, service capacity, call-handling arrangements and contractual terms. It does not mean 24/7 service or a guarantee that every call will be answered immediately.",
    benefit:
      "more consistent telephone coverage and less interruption for your internal reception staff.",
  },
  {
    n: "2",
    eyebrow: "Patient appointment bookings",
    lead: "Make it easier for patients to book and manage appropriate appointments.",
    items: [
      "New and existing patient appointment enquiries.",
      "Booking appointments in approved schedules.",
      "Appointment confirmations.",
      "Administrative rescheduling.",
      "Routine appointment information.",
      "Appointment request tracking.",
      "Updating booking records in agreed systems.",
    ],
    note: "All bookings follow the practice's scheduling policies, practitioner availability and instructions relating to appointment suitability.",
    benefit:
      "a more organised booking process and fewer routine appointment tasks falling back on your internal team.",
  },
  {
    n: "3",
    eyebrow: "Cancellation recovery & appointment coordination",
    lead: "When an appointment becomes available, make the administrative follow-up count.",
    items: [
      "Monitoring approved cancellation notifications.",
      "Updating appointment availability.",
      "Contacting suitable patients from practice-approved lists.",
      "Offering available appointments within agreed booking rules.",
      "Rescheduling patients where appropriate.",
      "Maintaining cancellation recovery records.",
      "Reporting on unfilled appointment capacity.",
    ],
    /* 🔴 PATIENT SAFETY LINE, not positioning. */
    note: "We do not encourage clinically unnecessary appointments or pressure patients to accept services.",
    benefit:
      "better coordination of available appointments and reduced administrative effort associated with cancellations.",
  },
  {
    n: "4",
    eyebrow: "Patient follow-up administration",
    lead: "Keep practice-approved follow-up tasks moving.",
    items: [
      "Outstanding appointment enquiries.",
      "Patient-requested booking callbacks.",
      "Incomplete administrative booking requests.",
      "Practice-approved follow-up communications.",
      "Appointment confirmations and reminders.",
      "Recording contact attempts and outcomes.",
      "Escalating unresolved tasks to authorised practice staff.",
    ],
    note: "Every follow-up runs on the practice's own instructions, through the channels the practice has approved.",
    benefit:
      "more consistent follow-through and clearer visibility over outstanding administrative tasks.",
  },
  {
    n: "5",
    eyebrow: "Clinician-approved recall administration",
    lead: "Support appropriate follow-up without taking clinical decisions away from your practice.",
    items: [
      "Working from clinician-approved recall lists.",
      "Contacting patients using approved scripts.",
      "Arranging appropriate recall appointments.",
      "Tracking communication attempts.",
      "Recording administrative outcomes.",
      "Escalating unsuccessful contact attempts.",
      "Maintaining visibility over outstanding recalls.",
    ],
    /* 🔴 THE THREE PROMISES, AS ONE. See the file header: clinical
       governance, then the two AHPRA lines. Never split them up. */
    note: "Your practice retains responsibility for clinical decisions, urgency classifications, recall instructions, patient advice and management of clinically significant results. We administer the list your practitioners set, at the intervals they set. We add nobody to it, no offer or incentive ever goes into a recall message, and we never ask a patient for a review.",
    benefit:
      "more consistent recall administration that supports the practice's clinical governance processes.",
  },
  {
    n: "6",
    eyebrow: "Billing & claims administration",
    lead: "Do not let routine billing tasks continually compete with front-desk demands.",
    items: [
      "Preparing invoices for approved completed services.",
      "Routine billing data entry.",
      "Processing authorised claims through approved systems.",
      "Following up rejected or unresolved claims.",
      "Tracking outstanding invoices and payments.",
      "Identifying administrative reconciliation exceptions.",
      "Maintaining billing follow-up records.",
      "Escalating coding, eligibility and payment discrepancies for review.",
    ],
    /* 🔴 WE NEVER DECIDE AN ITEM NUMBER. Absolute. */
    note: "Billing item selection, Medicare eligibility, clinical entitlement, fee approvals and corrections requiring professional judgement remain with the practice's authorised personnel.",
    benefit:
      "more consistent billing administration and follow-up of legitimate payment exceptions.",
  },
  {
    n: "7",
    eyebrow: "Administrative reporting & handover",
    lead: "Give your practice better visibility over the work being managed.",
    items: [
      "Incoming call activity.",
      "Bookings and rescheduling.",
      "Cancellation recovery activity.",
      "Outstanding administrative follow-ups.",
      "Clinician-approved recall administration status.",
      "Billing and claims exceptions.",
      "Unresolved matters requiring practice action.",
    ],
    note: "Depending on the agreed service.",
    benefit:
      "clearer administrative oversight and more consistent handovers between Novada and your team.",
  },
];

const MEANS = [
  {
    h: "More reliable patient enquiry handling",
    b: "Provide additional capacity for routine telephone enquiries and appointment requests during agreed service hours.",
  },
  {
    h: "Fewer missed administrative follow-ups",
    b: "Create a more structured process for managing outstanding appointment requests and practice-approved follow-up tasks.",
  },
  {
    h: "Better appointment coordination",
    b: "Support suitable booking, cancellation recovery and rescheduling workflows so available appointments can be managed more effectively.",
  },
  {
    h: "Reduced front-desk workload",
    b: "Allow in-house staff to spend more time assisting patients on-site and managing responsibilities that require their direct attention.",
  },
  {
    h: "Stronger recall administration",
    b: "Maintain more consistent tracking and escalation of clinician-approved patient recalls.",
  },
  {
    h: "More consistent billing support",
    b: "Help your practice manage invoices, claims follow-ups, administrative billing exceptions and payment reconciliation tasks.",
  },
];

const DIFFERENT = [
  {
    h: "We support the full administrative journey",
    b: "From a patient's initial enquiry through to appropriate appointment coordination, authorised follow-ups and routine billing administration.",
  },
  {
    h: "We work alongside your practice",
    b: "Our service is designed to complement your existing receptionists, practice manager and clinical team.",
  },
  {
    h: "We use your established processes",
    b: "We work within approved appointment rules, communication instructions, billing workflows and authorised system access arrangements.",
  },
  {
    h: "We maintain clear task ownership",
    b: "Your practice knows which tasks Novada is handling, which matters need escalation and which decisions must remain internal.",
  },
  {
    h: "We focus on ongoing consistency",
    b: "Rather than providing a one-off report, we support the administrative work that needs attention day after day.",
  },
  {
    h: "Clinical decisions stay with clinicians",
    b: "We provide administrative support, not clinical triage, treatment recommendations or independent decisions about medical necessity.",
  },
];

const WHO = [
  {
    h: "General practices",
    b: "For GP clinics managing high telephone demand, appointment schedules, patient communication, clinician-approved recalls and Medicare billing administration. We help support routine front-desk and revenue administration processes.",
  },
  {
    h: "Specialist medical practices",
    b: "For specialist clinics managing referral enquiries, appointment coordination, follow-ups, procedures, private billing and relevant insurer or Medicare claims. Support is tailored to practitioner schedules and approved administrative workflows.",
  },
  {
    h: "Allied health practices",
    b: "For practices delivering services such as physiotherapy, psychology, occupational therapy, speech pathology, podiatry and other allied health services. We help coordinate appointment enquiries, cancellations, rescheduling and relevant billing administration.",
  },
  {
    h: "Multidisciplinary practices",
    b: "For organisations managing multiple practitioners, appointment types and administrative workflows. We help establish more consistent processes across agreed practice functions.",
  },
];

const TRUST = [
  {
    h: "Clear scope of work",
    b: "Defined responsibilities for calls, bookings, administrative follow-ups, recalls and billing tasks.",
  },
  {
    h: "Approved practice procedures",
    b: "Use of agreed communication scripts, appointment rules, escalation pathways and administrative instructions.",
  },
  {
    h: "Confidentiality & secure information handling",
    b: "Appropriate privacy, confidentiality, access-control and information-security arrangements.",
  },
  {
    h: "Clear escalation",
    b: "Clinical questions, urgent concerns, billing eligibility issues and other matters outside the agreed administrative scope are referred to authorised practice personnel.",
  },
  {
    h: "Consistent reporting",
    b: "Management receives agreed updates on administrative activity, outstanding matters and exceptions.",
  },
  {
    h: "Professional accountability",
    b: "Our work is structured around clear roles, documented workflows and ongoing operational communication.",
  },
];

const STEPS = [
  {
    n: "1",
    h: "Free discovery conversation",
    b: "A complimentary 30-minute discussion about your practice type and number of practitioners, telephone and enquiry volumes, current reception arrangements, appointment booking systems, cancellation and follow-up processes, recall administration, billing and claims workload, and your current administrative challenges. We will discuss whether our ongoing service is suitable.",
  },
  {
    n: "2",
    h: "Scope & workflow setup",
    b: "We agree the services to be managed, operating hours, expected volumes, responsibilities, service capacity, reporting arrangements and fees. We then establish approved procedures for telephone answering, patient enquiries and messages, appointment bookings, cancellations and follow-ups, clinician-authorised recalls, billing and claims administration, escalations and practice handovers, and confidentiality and system access.",
  },
  {
    n: "3",
    h: "Begin ongoing administrative support",
    b: "Once the necessary training, access controls and operational arrangements are in place, Novada begins the agreed service activities. Our team follows authorised workflows and coordinates with your practice on matters requiring internal decisions.",
  },
  {
    n: "4",
    h: "Monitor, report & improve",
    b: "We provide agreed operational reporting, review outstanding tasks and work with your practice to refine administrative processes. As enquiry volumes or practice requirements change, the service scope can be reviewed.",
  },
];

const RECEIVE = [
  {
    h: "Unlimited telephone answering",
    b: "Ongoing eligible call-handling support during agreed service hours and within contracted service arrangements.",
  },
  {
    h: "Appointment booking & scheduling",
    b: "Routine booking, rescheduling, confirmations and appointment-related administrative support.",
  },
  {
    h: "Cancellation recovery",
    b: "Follow-up of suitable appointment opportunities through practice-approved processes.",
  },
  {
    h: "Patient follow-up administration",
    b: "Coordination and tracking of authorised patient communication and outstanding appointment enquiries.",
  },
  {
    h: "Clinician-approved recall support",
    b: "Administrative recall coordination, contact tracking and escalation under the practice's clinical governance.",
  },
  {
    h: "Billing & claims support",
    b: "Routine invoicing administration, authorised claims processing, rejected-claim follow-up and payment reconciliation support.",
  },
  {
    h: "Operational reporting",
    b: "Agreed updates covering calls, appointments, outstanding administrative tasks and billing exceptions.",
  },
  {
    h: "A managed administrative partner",
    b: "A defined external support function working alongside your practice's reception and management team.",
  },
];

/* ⚠️ "unreconciled exceptions", never "reconciliation gaps". */
const AUDIT_COVERS = [
  "Missed patient enquiries.",
  "Incomplete appointment follow-ups.",
  "Unfilled cancellations and unused capacity.",
  "Clinician-approved recall administration.",
  "Unbilled eligible services.",
  "Incorrect billing and claim exceptions.",
  "Outstanding legitimate payments and unreconciled exceptions.",
];

const CONTINUITY_COVERS = [
  "Telephone answering.",
  "Bookings and appointment changes.",
  "Cancellation recovery.",
  "Practice-approved follow-ups.",
  "Clinician-approved recall administration.",
  "Billing and claims administration.",
  "Ongoing administrative reporting.",
];

const FAQ = [
  {
    q: "What is Patient Booking & Retention Continuity?",
    a: "It is an ongoing managed administrative support service for GP, specialist and allied health practices. The service covers agreed telephone answering, patient bookings, cancellation recovery, administrative follow-ups, clinician-approved recalls, billing and claims support, and reporting.",
  },
  {
    q: "Is unlimited telephone answering included?",
    a: "Yes. Our service includes unlimited eligible incoming-call answering during agreed operating hours under the contracted service model. The agreement specifies hours, call-handling capacity, supported call types, service arrangements and any fair-use conditions. Unlimited calling support does not mean unrestricted 24/7 coverage or guaranteed immediate answering of every call.",
  },
  {
    q: "Can Novada book appointments directly into our practice software?",
    a: "Where appropriate system access and approved workflows are available, our team can support appointment bookings using your existing systems. We confirm compatibility, permissions and operational processes before commencing.",
  },
  {
    q: "Do we need to replace our current receptionists?",
    a: "No. The service is designed to complement your existing team. Novada can help manage agreed administrative activities while your internal staff continue supporting patients and handling responsibilities that require their presence or authorisation.",
  },
  {
    q: "Can you help fill cancelled appointments?",
    a: "Yes. We can coordinate cancellation recovery by contacting suitable patients through practice-approved workflows and offering appointments that meet the practice's scheduling requirements. We do not guarantee every cancellation will be filled.",
  },
  {
    q: "Do you handle patient recalls?",
    a: "We support the administrative coordination of clinician-approved recalls. We work the list your practitioners set, at the intervals they set, and we add nobody to it. Clinical urgency, recall decisions, medical advice and management of clinically significant findings remain with authorised practice personnel.",
  },
  {
    /* 🔴 AHPRA. The two most-litigated areas in this market, answered
       plainly. Refusing both is a trust win, not a limitation. */
    q: "Do you put offers in recall messages, or ask patients for reviews?",
    a: "No to both, and neither is negotiable. A recall exists because a practitioner set a clinical interval, so attaching an offer or incentive to it would turn clinical follow-up into marketing. We also never solicit patient reviews on a practice's behalf.",
  },
  {
    q: "Can Novada give medical advice or decide how urgently a patient needs care?",
    a: "No. Novada's service is administrative, not clinical. Our team follows agreed procedures to refer medical questions, potentially urgent concerns and other out-of-scope matters to the practice's authorised clinical team or established emergency pathways.",
  },
  {
    q: "Does the service include billing and Medicare claims?",
    a: "Yes. Agreed billing and claims administration may include invoice preparation, processing authorised claims, tracking rejections, following up exceptions and supporting reconciliation. Item eligibility, coding, medical necessity and claims requiring professional judgement must be approved or verified by authorised personnel.",
  },
  {
    q: "Do you support private health insurance billing?",
    a: "Yes, where applicable to your practice and included in the agreed service scope. We can support routine administration and exception follow-up within approved workflows.",
  },
  {
    q: "Does the service include patient marketing or lead generation?",
    a: "No. This service focuses on enquiries, appointment administration, practice-approved follow-ups and billing support. It is not a patient advertising or lead-generation service.",
  },
  {
    q: "Does the service include payroll?",
    a: "No. Payroll is not included in the standard Patient Booking & Retention Continuity offering.",
  },
  {
    q: "Can you work with our existing practice management systems?",
    a: "Our service is intended to work alongside relevant existing systems where practical. Integration, access arrangements, user permissions and any technical requirements are confirmed during setup.",
  },
  {
    q: "How is patient information protected?",
    a: "We use agreed confidentiality, secure access, privacy and information-handling arrangements appropriate to the service. The specific processing arrangements, permitted access, data locations, subprocessors and responsibilities must be established before patient information is accessed.",
  },
  {
    q: "Are patients pressured to book appointments?",
    a: "No. Booking and follow-up activities must respect patient choice and the practice's clinical instructions. We do not promote clinically unnecessary appointments or make independent treatment recommendations.",
  },
  {
    /* 🔴 NO FIGURE. The founder removed the equivalent from the care
       audit and the practices audit in the same session. */
    q: "How much does the service cost?",
    a: "Pricing depends on agreed service hours, call and administrative volumes, number of practitioners, system requirements and the scope of managed tasks, so we confirm it with you before any engagement begins. Any third-party telephony, software, messaging, transaction or other external costs are clarified beforehand. The initial discovery conversation is complimentary.",
  },
  {
    q: "Is there a minimum contract period?",
    a: "The minimum term, cancellation arrangements and any notice period will be specified in the agreed service proposal.",
  },
  {
    q: "Can we use this service without completing a Patient Revenue Leakage Audit?",
    a: "Yes. The audit and ongoing managed service are separate offerings. Your practice can engage Patient Booking & Retention Continuity directly if ongoing support is the priority.",
  },
  {
    q: "How do we get started?",
    a: "Book a complimentary 30-minute discovery call. We will review your practice's administrative workload, existing systems and support requirements, then discuss an appropriate service arrangement.",
  },
];

/* ── building blocks. Same set as the other four pages. ──────────── */

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
     hero, so the FILL is exactly brand-500 and a light ring carries the
     boundary. ⚠️ Remove the ring and it stops reading as a button. */
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

function Stars({ className = "h-4 w-4 fill-[#0CC481] text-[#0CC481]" }) {
  return (
    <span aria-hidden className="flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={className} strokeWidth={0} />
      ))}
    </span>
  );
}

/* ⚠️ UNBRANDED BY NECESSITY, and 🔴 NOT A LINK. No platform name, no
   wordmark, no #00B67A, nothing clickable. CLIENT reviews, not provider
   reviews: on a practices page "provider" reads as a clinician. */
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

export default function BookingPage() {
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

            {/* ⚠️ Same clamp as the other four pages: a 32px floor so the
                headline does not eat a phone screen, reaching the
                identical 76px cap by 1280px. */}
            <h1
              className={`${DISPLAY} mt-5 text-[clamp(2rem,0.89rem+4.83vw,4.75rem)] leading-[0.93] tracking-[-0.015em] text-white`}
            >
              Busy front desk? Do not let patient enquiries, bookings and
              billing fall behind.
            </h1>

            <div
              className={`mt-7 flex ${WIDE} flex-col gap-5 text-base text-white/75`}
            >
              <p>
                When your reception team is juggling phone calls, patients at
                the counter, appointment changes, recalls and billing
                administration, important tasks can quickly pile up. Missed
                enquiries may go unanswered. Cancelled appointments can remain
                unfilled. Follow-ups become harder to manage. Billing and
                claims exceptions wait for attention. Novada Tech&apos;s
                Patient Booking &amp; Retention Continuity provides ongoing
                administrative support to help your practice manage these
                responsibilities consistently.
              </p>
            </div>

            <div className="mt-10">
              <Cta tone="brand">Book your practice continuity call</Cta>
            </div>
            <p className="mt-5 text-sm text-white/55">
              Free 30-minute discovery conversation. No obligation to proceed.
            </p>
            {/* 🔴 "RETENTION", DEFINED, EARLY, IN ONE SENTENCE. The word is
                in the service name directly above. On its own it reads as
                persuading patients into treatment, which is the one line
                this offer must never cross, so it never ships undefined.
                If the name is ever shortened in a deck or an ad, this
                sentence travels with it.

                ⚠️ ITS SIZE AND POSITION ARE BOTH BY MEASUREMENT, not by
                taste. As two sentences at body size ABOVE the CTA it put
                the CTA at y=986 on a 390px screen; one sentence at
                text-sm still left it at y=873. Both are below the 844
                fold, where all four sibling pages keep theirs above it.
                Moved below the CTA it costs the fold nothing and is
                still on the first screen, which is what "early" is for.
                Do not move it back up or grow it. */}
            <p className={`${WIDE} mt-4 text-sm text-white/60`}>
              Retention here means the practice&apos;s own follow-up actually
              getting done, never persuading anybody into an appointment they
              do not need.
            </p>
          </div>
        </section>

        {/* ── PROOF STRIP. Same three figures as the sibling audit page,
             with the PRACTICES labels. See the file header. ───────── */}
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

        {/* ── 2 WHY NOVADA TECH ────────────────────────────────────── */}
        <Band index="01" label="Why Novada Tech">
          <h2 className={`${D2} text-ink-950`}>
            Your reception team cannot do everything at once
          </h2>
          <div className={`mt-6 flex ${WIDE} flex-col gap-4`}>
            <p className={`${BODY} ${WIDE}`}>
              Your front desk is often the first point of contact between
              patients and your practice. But reception is not just about
              answering phones. Your team manages incoming enquiries,
              appointment bookings, changes to schedules, patient requests,
              follow-up administration and billing. And when the practice gets
              busy, one task often competes with another.
            </p>
          </div>

          <ul className="mt-8 flex flex-col gap-3">
            {COMPETING.map((t) => (
              <li
                key={t}
                className="reveal border-l-2 border-ink-200 pl-5 text-base text-ink-700"
              >
                {t}
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            The problem is not that your reception team is not working hard
            enough. It is that the volume of administrative work can exceed the
            time and capacity available.
          </p>

          <p className={`${BODY} ${WIDE} mt-8`}>
            That is where Novada comes in. We provide a managed administrative
            support function that works alongside your practice to help keep
            calls, appointments, authorised follow-ups and revenue
            administration moving.
          </p>

          <p className={`${MICRO} mt-10 text-brand-500`}>
            Three areas we help strengthen
          </p>
          <BoxCards items={AREAS} cols={3} />

          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            Our goal is simple: help your practice manage the work behind
            patient care more consistently, without continually adding pressure
            to your internal team.
          </p>
        </Band>

        {/* ── 3 THE PROBLEM ────────────────────────────────────────── */}
        <Band index="02" label="The problem" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            How much administrative work is falling between the cracks?
          </h2>
          {/* ⚠️ "work can fall behind", never "operational gaps". */}
          <p className={`${BODY} ${WIDE} mt-6`}>
            Even an established healthcare practice can see work fall behind
            when patient enquiries and administrative responsibilities compete
            for limited staff time.
          </p>
          <BoxCards items={PROBLEMS} cols={3} />
          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            These are not always separate problems. They are often signs that
            your practice needs a stronger administrative support process.
          </p>
          <div className="mt-10">
            <Cta>Take the pressure off your front desk</Cta>
          </div>
        </Band>

        {/* ── 4 THE SERVICE ────────────────────────────────────────── */}
        <Band index="03" label="The service">
          <h2 className={`${D2} text-ink-950`}>
            A managed patient administration support service for busy
            healthcare practices
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            One ongoing service. Multiple essential administrative functions.
            Instead of separately managing phone overflow, appointment
            coordination, follow-ups, recall administration and billing
            backlogs, your practice can engage Novada to support these
            activities through one structured service.
          </p>

          {/* Seven components. Each carries its own boundary line,
              because each has a different thing the practice keeps. */}
          <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
            {SERVICE.map((s, i) => (
              <div
                key={s.eyebrow}
                className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise transition-[transform,box-shadow] duration-200 ease-standard hover:-translate-y-0.5 hover:shadow-lift md:p-8"
                style={{
                  ["--reveal-delay" as string]: `${Math.min(i, 4) * 70}ms`,
                }}
              >
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-sm font-bold text-white">
                  {s.n}
                </span>
                <p className={`${MICRO} text-brand-500`}>{s.eyebrow}</p>
                <h3 className="mt-3 text-base font-semibold italic text-ink-950">
                  {s.lead}
                </h3>
                <Bullets items={s.items} />
                <p className={`${SMALL} mt-6`}>{s.note}</p>
                <p className={`${SMALL} mt-4 border-t border-ink-100 pt-4`}>
                  <span className="font-semibold text-ink-950">
                    The benefit:
                  </span>{" "}
                  {s.benefit}
                </p>
              </div>
            ))}
          </div>
        </Band>

        {/* ── 5 WHAT THIS MEANS ────────────────────────────────────── */}
        <Band index="04" label="What this means">
          <h2 className={`${D2} text-ink-950`}>
            Less administrative pressure. More consistent patient support.
          </h2>
          <BoxCards items={MEANS} cols={3} />
          <p className={`${BODY} ${WIDE} mt-10`}>
            Better operational visibility, too: management gets clearer
            reporting on work completed, outstanding items and issues requiring
            attention.
          </p>
          {/* 🔴 THE POINT IS NOT CALL VOLUME. Keeps the offer out of the
              answering-service category it would otherwise fall into. */}
          <p className="mt-8 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            The goal is not simply to answer more calls. It is to make the
            administrative processes behind your practice more dependable.
          </p>
          <div className="mt-10">
            <Cta>Explore managed practice support</Cta>
          </div>
        </Band>

        {/* ── 6 OUR APPROACH ───────────────────────────────────────── */}
        <Band index="05" label="Our approach" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            More than a telephone answering service
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            A telephone answering service may take a message. A booking service
            may update your calendar. A billing administrator may process
            invoices. Novada brings these connected administrative functions
            together under one ongoing service.
          </p>
          <BoxCards items={DIFFERENT} cols={3} />
          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            One coordinated administrative support partner. Clear
            responsibilities. Consistent follow-through.
          </p>
        </Band>

        {/* ── 7 WHO WE WORK WITH ───────────────────────────────────── */}
        <Band index="06" label="Who we work with">
          <h2 className={`${D2} text-ink-950`}>
            Supporting GP, specialist and allied health practices across
            Australia
          </h2>
          <BoxCards items={WHO} cols={2} />
          <p className={`${BODY} ${WIDE} mt-10`}>
            Whether you have a small reception team or manage a busy
            multi-practitioner clinic, we can discuss a support arrangement
            suited to your administrative needs.
          </p>
          <div className="mt-10">
            <Cta>Discuss your practice&apos;s needs</Cta>
          </div>
        </Band>

        {/* ── 8 TRUST & CONFIDENCE ─────────────────────────────────── */}
        <Band index="07" label="Trust & confidence">
          <h2 className={`${D2} text-ink-950`}>
            Your practice needs an administrative partner who understands the
            importance of getting the details right
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Healthcare administration involves sensitive information, important
            workflows and responsibilities that cannot simply be handed over
            without proper oversight. At Novada Tech, our approach emphasises:
          </p>
          <BoxCards items={TRUST} cols={3} />
          {/* 🔴 THE THREE THINGS EFFICIENCY MUST NEVER COST. */}
          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            Administrative efficiency must support patient care. It must never
            replace clinical judgement, compromise privacy or encourage
            unnecessary appointments.
          </p>
        </Band>

        {/* ── 9 HOW IT WORKS ───────────────────────────────────────── */}
        <Band index="08" label="How our service works" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            A straightforward process for bringing Novada into your practice
          </h2>
          <BoxCards items={STEPS} cols={2} />
          <p className={`${BODY} ${WIDE} mt-10`}>
            From setup to ongoing administration, the aim is to make the
            process clear, manageable and consistent.
          </p>
        </Band>

        {/* ── 10 WHAT YOU RECEIVE ──────────────────────────────────── */}
        <Band index="09" label="What you receive">
          <h2 className={`${D2} text-ink-950`}>
            Ongoing administrative support without managing every task yourself
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Depending on your agreed scope, Patient Booking &amp; Retention
            Continuity provides:
          </p>
          <BoxCards items={RECEIVE} cols={2} />
          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            Your practice retains the clinical decision-making and oversight.
            Novada helps manage the agreed administrative workload.
          </p>
        </Band>

        {/* ── 11 WITH THE AUDIT ────────────────────────────────────── */}
        <Band index="10" label="With the audit">
          <h2 className={`${D2} text-ink-950`}>
            Two complementary services. One more efficient practice.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Novada Tech offers two distinct solutions for healthcare practices.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
            <div className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8">
              <p className={`${MICRO} text-brand-500`}>{LEAKAGE.name}</p>
              <h3 className="mt-3 text-base font-semibold italic text-ink-950">
                Find out where your practice&apos;s revenue and administrative
                processes may need attention.
              </h3>
              <Bullets items={AUDIT_COVERS} />
              <p className={`${SMALL} mt-6 border-t border-ink-100 pt-4`}>
                A one-off review. You receive evidence-based findings and a
                prioritised improvement plan.
              </p>
              <div className="mt-7">
                <Link
                  href={LEAKAGE.href}
                  className={`${BTN_PRIMARY} w-full text-base sm:w-auto`}
                >
                  Explore {LEAKAGE.name}
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>

            <div
              className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8"
              style={{ ["--reveal-delay" as string]: "70ms" }}
            >
              <p className={`${MICRO} text-brand-500`}>
                Patient Booking &amp; Retention Continuity
              </p>
              <h3 className="mt-3 text-base font-semibold italic text-ink-950">
                Get ongoing support to manage the administrative work.
              </h3>
              <Bullets items={CONTINUITY_COVERS} />
              <p className={`${SMALL} mt-6 border-t border-ink-100 pt-4`}>
                A managed service, month to month, where the audit is a one-off
                piece of work.
              </p>
            </div>
          </div>

          {/* ⚠️ NOT A GATE. Saying so plainly is what stops the two
              pillars reading as a funnel. */}
          <p className={`${BODY} ${WIDE} mt-10`}>
            You do not need to purchase the audit before engaging Patient
            Booking &amp; Retention Continuity. The services are available
            independently and can also complement each other.
          </p>
        </Band>

        {/* ── 12 FAQ ───────────────────────────────────────────────── */}
        <Band index="11" label="Questions" tone="tint">
          <h2 className={`${D2} text-ink-950`}>Frequently asked questions</h2>
          <Faq />
        </Band>

        {/* ── 13 BOOK. Same layout as the other four pages. ────────── */}
        <section id="book" className="border-t border-white/10 bg-canvas-ink">
          <div
            className={`${FRAME} ${GUTTER} border-x border-white/10 py-16 md:py-24 lg:py-32`}
          >
            <div className={RAIL_GRID}>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-center gap-3 lg:block">
                  <span className={`${MICRO} tabular text-white/55`}>12</span>
                  <span
                    aria-hidden
                    className="h-px w-6 bg-white/20 lg:my-3 lg:h-6 lg:w-px"
                  />
                  <h2 className={`${MICRO} text-white/85`}>Book</h2>
                </div>
              </div>

              <div className="min-w-0">
                <BandHeading dark>
                  Your practice has enough to manage. Let us help with the work
                  behind the appointments.
                </BandHeading>

                <div
                  className={`mt-7 flex ${WIDE} flex-col gap-5 text-base text-white/75`}
                >
                  <p>
                    Your front desk should not have to manage every incoming
                    call, booking change, cancellation, follow-up and billing
                    exception without adequate support. And your clinicians
                    should be able to focus on patient care while reliable
                    administrative processes support the practice around them.
                  </p>
                </div>

                <p className={`${WIDE} mt-7 text-base text-white/75`}>
                  Book your free 30-minute practice continuity call. During the
                  call, we will:
                </p>
                <Bullets
                  tone="dark"
                  items={[
                    "Learn about your practice and administrative workload.",
                    "Discuss telephone, booking and patient follow-up challenges.",
                    "Review current billing and claims support requirements.",
                    "Explain how our managed service operates.",
                    "Discuss suitable service scope, pricing and next steps.",
                  ]}
                />

                <div className="mt-10">
                  {/* ⚠️ desk="practices-patient-booking" resolves to this
                      offer's own calendar in BookingEmbed. The audit page
                      uses practices-revenue-audit. Swapping these sends
                      bookings to the wrong pipeline. */}
                  <BookingEmbed
                    desk="practices-patient-booking"
                    source="practices-patient-booking"
                    tone="dark"
                    title="Book your practice continuity call"
                  />
                </div>

                <p className="mt-6 text-sm text-white/55">
                  The discovery conversation is complimentary. The ongoing
                  managed service is a separately agreed paid engagement.
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
        label="Book your practice continuity call"
        tagline="Free 30-minute discovery conversation."
        href="#book"
      />
    </div>
  );
}
