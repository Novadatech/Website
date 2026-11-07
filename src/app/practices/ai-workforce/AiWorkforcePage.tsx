"use client";

import { ArrowRight, Check, ChevronDown, Star } from "lucide-react";

import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import StickyCta from "@/components/desk/StickyCta";
import { Band, BandHeading } from "@/components/desk/Band";
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
 * /practices/ai-workforce — NOVADA AI WORKFORCE, AUSTRALIAN PRACTICES.
 *
 * Built 8 November 2026 from founder-supplied copy, fifteen sections, as
 * the third practices landing page. Same components and rhythm as
 * /practices/revenue-audit and /practices/patient-booking.
 *
 * 🔴 THERE ARE NOW TWO "NOVADA AI WORKFORCE" PAGES ON THIS DOMAIN AND
 * THEY ARE NOT THE SAME PRODUCT PAGE. /care/ai-workforce sells FIVE AI
 * employees to NDIS and aged care providers; this one sells SIX to
 * healthcare practices, and the six are different roles answering a
 * different operational day. They share a product name and nothing
 * else. Never sync them, never diff them, and never move copy between
 * them: the care page says roster, support worker and participant, and
 * this one says appointment, clinician and patient.
 *
 * ⚠️ IT IS A CLIENT COMPONENT (the sticky bar and nav need one), so its
 * metadata lives in page.tsx. Do not add a layout.tsx here: ./confirmed
 * has one carrying the noindex.
 *
 * ══════════════════════════════════════════════════════════════════════
 * 🔴 THE PRODUCT EXISTS AND THIS PAGE SPEAKS IN THE PRESENT TENSE.
 * Founder ruling, 7 November 2026: "The product already exists." The
 * hedges that called the platform "proposed" were stripped from
 * /care/ai-workforce on that ruling and never existed in this copy.
 * Banned here too: "proposed AI-powered", "is intended to", "capabilities
 * are offered", "before production use", "current product availability".
 *
 * 🔴 THE SCOPE AND ACCOUNTABILITY LIMITS ARE A DIFFERENT KIND OF
 * SENTENCE AND THEY ARE THIS PAGE'S LEGAL FLOOR. In a practice setting
 * they are the sharpest on the whole estate, because this is the only
 * offer where an AI SPEAKS DIRECTLY TO PATIENTS:
 *
 *   · "Clearly identify itself as an AI assistant."
 *   · "Patients interacting directly with an AI assistant are informed
 *      that they are communicating with AI."
 *   · "Can patients speak directly to a real person?  Yes."
 *   · "Escalate urgent or potentially clinical matters through approved
 *      procedures."
 *   · "The AI does not independently assess clinical urgency, accept or
 *      reject referrals on clinical grounds, or determine whether
 *      specialist care is medically appropriate."
 *   · "The AI does not interpret test results, decide who needs clinical
 *      review or independently close safety-critical recalls."
 *   · "The AI does not invent billable services, determine Medicare
 *      eligibility, select clinical billing codes independently or
 *      guarantee claim approval or revenue recovery."
 *   · "It cannot guarantee every available appointment will be filled."
 *   · "Does Novada guarantee additional revenue?  No."
 *   · the whole Human Control & Patient Safety band
 *
 * ⚠️ A FUTURE EDITOR WILL READ THE "PRODUCT EXISTS" RULING AND REACH FOR
 * THESE NEXT. They are not the same thing. "The product exists" does not
 * mean "the product may decide clinical urgency".
 *
 * 🔴 AN AI ANSWERING A PATIENT CALL IS THE HIGHEST-RISK SURFACE IN THIS
 * ENTIRE ESTATE, because a routine-sounding booking call can carry a
 * clinical emergency. Two sentences carry that risk and both are in the
 * AI Reception role: it identifies itself as AI, and it escalates
 * urgent or potentially clinical matters. Neither is decoration.
 * ══════════════════════════════════════════════════════════════════════
 *
 * 🔴 NO TESTIMONIALS, unlike all three care pages. The founder's written
 * instruction on the practices copy stands: "Do not reuse NDIS or aged
 * care customer testimonials as if they demonstrate results from" a
 * practices offer. No practice quotes exist yet. AHPRA also narrows what
 * a practice quote may ever say: operational and commercial only, never
 * clinical quality or patient outcomes. Do not add a slider here.
 *
 * ⚠️ THE PROOF STRIP USES THE PRACTICES LABELS. "Client reviews" and
 * "Healthcare practices across Australia", NOT the care page's "Provider
 * reviews" and "NDIS and aged care providers". On a practices page
 * "provider" means a CLINICIAN and the care line would be false here.
 *
 * 🔴 THE WORD "GAP" IS BANNED. In Australian healthcare the gap is the
 * PATIENT'S OUT-OF-POCKET after the rebate, so it cannot be used for a
 * hole in a schedule or a reconciliation discrepancy. The supplied copy
 * is already clean of it; keep it that way. Same call as both practices
 * siblings, and NOT the call made on /care/rostering, where the care
 * market gives the word no rebate meaning.
 *
 * 🔴 AHPRA: NO INDUCEMENT EVER GOES INTO A PATIENT MESSAGE, and we never
 * ask a patient for a review. Inducements in recall messaging and
 * soliciting patient reviews are the two most-litigated areas in this
 * market. Nothing on this page may describe the AI offering a discount,
 * a gift or a review request.
 *
 * ⚠️ NO PRICE. The FAQ answers the cost question the way the rest of the
 * estate does: price does not appear in writing before a call.
 *
 * ⚠️ NO EM DASHES IN RENDERED PROSE. The supplied copy carried six. Each
 * became a full stop or a colon and no words were changed.
 *
 * 🔴 NO CALENDAR YET. #book carries the full closing copy and a
 * PLACEHOLDER. It is NOT pointed at practices-revenue-audit or
 * practices-patient-booking: those feed their own pipelines and their
 * own confirmation pages. When the id arrives: add a
 * `practices-ai-workforce` key to Desk and CALENDARS in
 * BookingEmbed.tsx, swap the placeholder, clear the `robots` block in
 * page.tsx, set `indexed` back to true in offers.ts and point the
 * calendar redirect at ./confirmed, which is already built.
 * ══════════════════════════════════════════════════════════════════════
 */

/* Section 2. One ordinary morning at the front desk, one line per
   interruption. The point is the LENGTH, so do not merge into prose. */
const A_TYPICAL_DAY = [
  "The phone rings while reception is checking in a patient.",
  "Someone wants to reschedule their appointment.",
  "Another patient cancels at short notice.",
  "A specialist referral arrives with missing administrative information.",
  "A clinician-approved recall remains outstanding because nobody has followed it up.",
  "An invoice needs attention, while several Medicare or private health fund claims remain unresolved.",
  "And your practice manager is trying to keep track of all of it.",
];

const CHALLENGES = [
  {
    h: "Missed calls and unconverted enquiries",
    b: "When reception is busy, incoming patient enquiries can go unanswered or require follow-up that is difficult to complete consistently.",
  },
  {
    h: "Cancellations and unfilled appointment capacity",
    b: "A patient cancels. The appointment becomes available. But your team may not have enough time to contact suitable patients and offer the opening.",
  },
  {
    h: "Front-desk overload",
    b: "Reception staff manage calls, bookings, arrivals, payments, patient enquiries, clinician requests and administration simultaneously.",
  },
  {
    h: "Referral and intake backlogs",
    b: "Referrals require review, missing documents need follow-up and patients may be waiting for an administrative response.",
  },
  {
    h: "Incomplete recalls and follow-ups",
    b: "Even when clinicians identify patients requiring follow-up, the administrative work of contacting them, tracking responses and escalating unresolved actions takes time.",
  },
  {
    h: "Billing and claims administration",
    b: "Rejected claims, unpaid invoices, incorrect administrative details and payment reconciliation exceptions require repeated investigation and follow-up.",
  },
  {
    h: "Disconnected systems",
    b: "Different applications hold information about appointments, patients, billing and communications, yet practice staff must still coordinate the work between them.",
  },
];

const NOT_THIS = [
  "More than an AI receptionist.",
  "More than a chatbot.",
  "More than a dashboard that tells you what needs attention.",
];

const DIFFERENCE = [
  {
    h: "Traditional practice management software",
    b: "Holds patient, appointment and billing records and provides the tools your staff use to complete administrative work.",
  },
  {
    h: "Basic automation",
    b: "Performs specific actions when predetermined conditions are met, such as sending an appointment reminder.",
  },
  {
    h: "Novada AI Workforce",
    b: "Coordinates multi-step administrative workflows across connected practice systems, performs permitted actions, verifies completion and keeps your team informed.",
  },
];

const IMAGINE = [
  "Answer a routine patient enquiry and complete an eligible appointment booking.",
  "Receive a cancellation, check the waitlist and offer the appointment to an appropriate patient.",
  "Identify incomplete referral paperwork and follow up the missing administrative information.",
  "Contact a patient under an approved recall workflow and record the response.",
  "Identify an unresolved claim, check available administrative information and prepare the exception for authorised review.",
];

/* ── Section 4. The six roles. ────────────────────────────────────────
 *
 * 🔴 FOUR OF THE SIX CARRY A `limit` AND EVERY ONE IS LOAD-BEARING.
 * Reception must identify itself as AI and escalate anything clinical.
 * Referrals must not judge clinical urgency. Recalls must not interpret
 * results or close a safety-critical recall. Billing must not determine
 * Medicare eligibility or select a clinical code. In a practice setting
 * each of those is the sentence that keeps a regulated decision with a
 * qualified person. Deleting one is not an edit, it is a change of
 * liability.
 * ──────────────────────────────────────────────────────────────────── */
const EMPLOYEES = [
  {
    n: "01",
    role: "AI Reception & Patient Access Coordinator",
    lead: "Answer the calls. Handle the enquiries. Keep your front desk moving.",
    sub: "An AI receptionist that does more than answer the phone.",
    problem:
      "Your reception team is often the first point of contact for patients, but staff can only handle so many conversations at once. When reception is occupied with check-ins, payments or complex enquiries, new calls may go unanswered, routine questions take longer to resolve and appointment requests can be delayed. Adding another receptionist increases capacity, but it also increases fixed employment costs.",
    doesLead:
      "Your AI employee handles approved patient-facing administrative conversations and the tasks that follow. It can:",
    does: [
      "Answer incoming patient calls through supported telephony channels.",
      "Clearly identify itself as an AI assistant.",
      "Respond to routine questions using approved practice information.",
      "Explain opening hours, locations and published administrative policies.",
      "Provide approved information about available services and booking procedures.",
      "Check permitted appointment availability.",
      "Assist patients with eligible appointment requests.",
      "Book routine appointments under the practice's configured rules.",
      "Record relevant administrative enquiries.",
      "Send approved booking information and confirmations.",
      "Route complex requests to reception staff.",
      "Escalate urgent or potentially clinical matters through approved procedures.",
      "Maintain a record of enquiries, actions and unresolved requests.",
    ],
    exampleTitle: "Example: a patient calls while reception is busy",
    example:
      "A patient calls to book a routine consultation. Instead of waiting for a receptionist to become available, the AI Reception Coordinator answers the call, identifies itself, confirms the relevant administrative booking requirements and checks available appointments. If the requested appointment meets the practice's configured booking rules, it completes the booking in the connected system and sends an approved confirmation. If the patient raises a clinical question or requires an appointment outside the AI's permitted rules, the matter is referred to the appropriate person.",
    means: [
      "Fewer routine enquiries requiring manual handling.",
      "More consistent patient access during agreed service hours.",
      "Reduced pressure on reception staff.",
      "Faster administrative response to patients.",
      "More opportunities to convert legitimate appointment enquiries into completed bookings.",
    ],
    /* 🔴 THE HIGHEST-RISK SENTENCE ON THE PAGE. A routine-sounding
       booking call can carry a clinical emergency. */
    limit:
      "The AI identifies itself as an AI assistant on every patient call, and urgent or potentially clinical matters are escalated through the practice's approved procedures rather than handled by the AI. A patient can always be put through to a person.",
  },
  {
    n: "02",
    role: "AI Appointment & Cancellation Recovery Coordinator",
    lead: "Do not let valuable appointment time go unused.",
    sub: "An AI employee that helps keep your appointment book moving.",
    problem:
      "A patient cancels an appointment at short notice. Your practice now has an available appointment that could be offered to someone else. But your reception team is managing incoming calls, patient arrivals and other administration. Contacting suitable patients, checking their availability and completing the booking takes time, and by the time the team gets to it the appointment may already have passed.",
    doesLead:
      "It manages eligible appointment administration and cancellation recovery workflows. It can:",
    does: [
      "Monitor cancellations and newly available appointment times.",
      "Review approved waitlist and appointment-request information.",
      "Identify patients eligible for an available appointment under configured rules.",
      "Send authorised appointment offers.",
      "Track patient responses.",
      "Confirm accepted appointments.",
      "Update the connected appointment schedule.",
      "Coordinate routine rescheduling requests.",
      "Send approved appointment confirmations and reminders.",
      "Identify outstanding booking requests.",
      "Flag scheduling conflicts or exceptions.",
      "Escalate requests requiring clinical or administrative judgement.",
      "Track appointment recovery activity and outcomes.",
    ],
    exampleTitle: "Example: an appointment becomes available tomorrow",
    example:
      "A patient cancels an appointment scheduled for 11:00 am. The AI Appointment Coordinator identifies the available time, checks the relevant scheduling requirements and reviews patients who have agreed to be contacted about earlier appointments. It offers the appointment through an approved communication channel. When an eligible patient accepts, the AI verifies the booking conditions, completes the authorised schedule update and sends confirmation. The practice's appointment book is updated without reception having to conduct every step by hand.",
    means: [
      "More consistent cancellation recovery.",
      "Less manual waitlist coordination.",
      "Better utilisation of available appointment capacity.",
      "Fewer repetitive booking follow-ups.",
      "Improved visibility into cancellations and appointment recovery.",
    ],
    value:
      "More efficient use of existing clinician availability, with the potential to protect legitimate appointment revenue without increasing consultation hours.",
    limit:
      "Appointment offers remain subject to clinical suitability, patient choice and approved scheduling requirements.",
  },
  {
    n: "03",
    role: "AI Referrals & Intake Coordinator",
    lead: "Stop letting referrals sit in an administrative queue.",
    sub: "An AI employee that keeps referral administration moving.",
    problem:
      "Referral management can become one of the most time-consuming administrative processes in a practice. A referral arrives. Someone needs to register it, check whether the necessary information is present, identify missing administrative documents, contact the referrer or patient, follow up outstanding information, arrange clinical review where required and communicate the next administrative steps. When referral volumes increase, the backlog grows quickly.",
    doesLead:
      "It manages the permitted administrative steps involved in receiving and progressing referrals. It can:",
    does: [
      "Register incoming referrals through supported channels.",
      "Identify and track new referral administration tasks.",
      "Check documents for required administrative fields.",
      "Identify missing referral information.",
      "Request outstanding administrative documentation through approved channels.",
      "Track the progress of incomplete referral files.",
      "Prepare referral information for authorised clinical review.",
      "Route referrals to the correct practice workflow.",
      "Coordinate eligible appointment offers after required approvals.",
      "Send approved patient intake forms.",
      "Follow up incomplete intake paperwork.",
      "Maintain referral status and outstanding-action registers.",
      "Escalate clinical questions, urgency indicators and incomplete information to authorised staff.",
    ],
    exampleTitle: "Example: a specialist referral arrives with missing information",
    example:
      "The AI Referral Coordinator receives a referral through a supported channel and checks it against the practice's administrative intake requirements. It identifies missing information and initiates an approved request to obtain the required documentation. Once the administrative file is complete, it is forwarded for the appropriate clinician's review. Following that review, the AI coordinates the permitted next steps, including appointment administration where authorised.",
    means: [
      "Less manual referral chasing.",
      "More consistent intake administration.",
      "Clearer visibility into referral backlogs.",
      "Faster movement through routine administrative steps.",
      "Fewer incomplete administrative files waiting unnoticed.",
      "More time for staff to handle complex patient and referrer enquiries.",
    ],
    limit:
      "The AI does not independently assess clinical urgency, accept or reject referrals on clinical grounds, or determine whether specialist care is medically appropriate.",
  },
  {
    n: "04",
    role: "AI Recalls & Follow-Up Coordinator",
    lead: "Keep clinician-approved follow-ups moving without endless manual chasing.",
    sub: "An AI employee that supports your practice's recall and reminder processes.",
    problem:
      "Practices rely on consistent follow-up processes. Some patients need routine preventive reminders. Others require a clinician-directed recall or follow-up. But the administrative work of contacting patients, tracking responses, arranging bookings and escalating non-response places additional pressure on practice teams. If follow-up tasks are fragmented across different systems or team members, management may have limited visibility into their status.",
    doesLead:
      "It executes approved administrative recall and reminder workflows under the practice's clinical governance arrangements. It can:",
    does: [
      "Monitor approved recall and reminder worklists.",
      "Identify outstanding administrative contact tasks.",
      "Send clinician-authorised communications.",
      "Coordinate routine patient contact attempts through permitted channels.",
      "Record patient responses.",
      "Offer eligible follow-up appointments.",
      "Update administrative recall statuses.",
      "Track unresolved contact attempts.",
      "Follow approved escalation rules for non-response.",
      "Refer patient questions to appropriate clinical staff.",
      "Maintain contact and action histories.",
      "Generate outstanding recall administration reports.",
    ],
    exampleTitle: "Example: a clinician has approved a follow-up appointment",
    example:
      "A clinician has determined that a patient requires follow-up and authorised the appropriate recall workflow. The AI Follow-Up Coordinator contacts the patient using the approved message and communication channel. If the patient responds and wishes to book, the AI coordinates the appointment under the practice's scheduling rules. If the patient cannot be reached or raises clinical concerns, the task follows the approved escalation process. All administrative contact attempts and outcomes are recorded in the appropriate systems.",
    means: [
      "Less repetitive patient chasing.",
      "More consistent administrative follow-through.",
      "Clearer visibility into unresolved recall tasks.",
      "Reduced pressure on reception and nursing administration.",
      "Improved coordination of clinician-directed patient follow-up.",
    ],
    /* 🔴 THE DISTINCTION IS THE WHOLE POINT OF THIS ROLE. A reminder and
       a clinically significant recall are not the same object, and
       conflating them is the failure mode that ends in a coroner's
       court. Keep both sentences. */
    limit:
      "Clinical recalls and appointment reminders are not the same thing. Clinically significant results, urgent follow-ups and patient safety concerns remain under the practice's clinical governance and escalation procedures. The AI does not interpret test results, decide who needs clinical review or independently close safety-critical recalls.",
  },
  {
    n: "05",
    role: "AI Billing & Claims Coordinator",
    lead: "Stop spending hours chasing billing exceptions and unresolved claims.",
    sub: "An AI employee that helps keep your billing administration on track.",
    problem:
      "Revenue assurance depends on more than completing consultations. Practices also need accurate administrative records, timely invoicing, appropriate claims processing and payment reconciliation. Routine exceptions include missing billing information, unresolved rejected claims, outstanding invoices, unmatched payments, incomplete administrative details and discrepancies requiring practitioner verification. When these sit unresolved, they create additional work for reception, finance and practice management teams.",
    doesLead:
      "It manages authorised billing administration and exception workflows. It can:",
    does: [
      "Monitor relevant billing and claims worklists.",
      "Identify completed-service records awaiting billing administration.",
      "Check permitted administrative billing fields.",
      "Flag missing or inconsistent information.",
      "Track submitted claim statuses through supported systems.",
      "Identify rejected or unresolved claims.",
      "Prepare exception details for authorised review.",
      "Coordinate follow-up on administrative claim errors.",
      "Track outstanding patient invoices.",
      "Send approved payment reminders where appropriate.",
      "Assist with payment matching and reconciliation.",
      "Prepare billing exception and ageing reports.",
      "Update permitted records following required approvals.",
      "Escalate coding, eligibility and clinical-entitlement questions to qualified personnel.",
    ],
    exampleTitle: "Example: a Medicare claim is rejected",
    example:
      "The AI Billing Coordinator identifies the rejected claim in the connected system. It retrieves the permitted rejection information, checks whether the issue relates to an administrative field and prepares the exception for review. Where an authorised correction is appropriate, the AI follows the approved workflow to update the relevant administrative information and coordinate further action. If the matter involves MBS item selection, medical necessity, clinical entitlement or other professional judgement, it is escalated to the responsible practitioner or appropriately qualified person.",
    means: [
      "Less repetitive claims administration.",
      "Clearer visibility into unresolved billing exceptions.",
      "More consistent follow-up on outstanding payments.",
      "Reduced manual reconciliation workload.",
      "Better management reporting on administrative revenue exceptions.",
    ],
    value:
      "More reliable billing administration and faster resolution of legitimate claim exceptions may support cash flow, reduce avoidable delays and strengthen financial control.",
    limit:
      "The AI does not invent billable services, determine Medicare eligibility, select clinical billing codes independently or guarantee claim approval or revenue recovery.",
  },
  {
    n: "06",
    role: "AI Practice Operations Coordinator",
    lead: "Keep your entire practice administration moving, from one central place.",
    sub: "Your AI operations coordinator for the work behind patient care.",
    problem:
      "Practice managers often become the person everyone turns to when something is incomplete. A referral is waiting for information. A billing issue needs resolving. A patient has not responded to a follow-up. Reception needs help clearing the booking backlog. An appointment has become available. Managers spend considerable time moving between systems, checking statuses and asking employees for updates.",
    doesLead:
      "It coordinates assigned operational workflows across the practice. It can:",
    does: [
      "Monitor administrative tasks across supported systems.",
      "Identify overdue or incomplete workflows.",
      "Coordinate follow-ups between AI employees.",
      "Track unresolved appointment and patient administration tasks.",
      "Review referral and intake progress.",
      "Monitor billing administration exception queues.",
      "Prepare daily practice operations summaries.",
      "Flag matters requiring management approval.",
      "Track delegated actions and completion status.",
      "Coordinate routine administrative handovers.",
      "Generate management activity and performance reports.",
      "Maintain a consolidated record of AI operational activity.",
    ],
    exampleTitle: "Example: the practice manager's morning review",
    example:
      "Your practice manager opens the Novada AI Control Centre. Instead of reviewing multiple systems and asking staff for updates, they see a consolidated summary of appointments recovered after cancellations, routine enquiries handled, referrals awaiting clinical review, administrative recall tasks requiring follow-up, billing exceptions awaiting approval and outstanding operational tasks. Every item can be traced to the underlying workflow, action history and connected system.",
    means: [
      "Less time chasing updates.",
      "Greater visibility over practice administration.",
      "Clearer ownership of outstanding tasks.",
      "More consistent cross-functional coordination.",
      "More time for practice managers to focus on staff, patient experience and business performance.",
    ],
  },
];

const CONTROL_SHOWS = [
  {
    h: "AI employee activity",
    b: "See which AI employees are active and the administrative workflows assigned to them.",
  },
  {
    h: "Patient access and enquiries",
    b: "Review routine enquiry volumes, outcomes, escalations and administrative follow-up.",
  },
  {
    h: "Appointment activity",
    b: "See booking activity, cancellations, recovered appointment capacity and unresolved scheduling tasks.",
  },
  {
    h: "Referral administration",
    b: "Track incoming referrals, outstanding paperwork and administrative progress.",
  },
  {
    h: "Recall and follow-up administration",
    b: "Monitor approved contact attempts, responses, unresolved tasks and escalation statuses.",
  },
  {
    h: "Billing and claims",
    b: "View billing administration exceptions, unresolved claims and outstanding reconciliation activities.",
  },
  {
    h: "Approvals and escalations",
    b: "Review actions awaiting human authorisation or specialist intervention.",
  },
  {
    h: "Completed work",
    b: "See which actions occurred, when they were completed and whether connected system updates succeeded.",
  },
  {
    h: "Operational performance",
    b: "Track task volumes, administrative turnaround, outstanding actions and other measurable workflow outcomes.",
  },
];

const WORKFLOW = [
  {
    n: "1",
    h: "Cancellation recorded",
    b: "The AI identifies the available appointment in the connected system.",
  },
  {
    n: "2",
    h: "Eligibility checked",
    b: "It reviews the practice's approved booking rules, appointment type and relevant waitlist information.",
  },
  {
    n: "3",
    h: "Suitable patients identified",
    b: "It identifies patients who are eligible to receive an earlier appointment offer and have the appropriate contact preferences.",
  },
  {
    n: "4",
    h: "Appointment offered",
    b: "The AI contacts eligible patients through permitted channels, following the practice's configured offer process.",
  },
  {
    n: "5",
    h: "Patient response received",
    b: "An eligible patient accepts the offer.",
  },
  {
    n: "6",
    h: "Appointment updated",
    b: "The AI completes the authorised booking update and sends confirmation.",
  },
  {
    n: "7",
    h: "Work recorded",
    b: "The Control Centre logs the actions taken, booking outcome and any unresolved exceptions.",
  },
];

const VALUE = [
  {
    n: "1",
    h: "Operational efficiency",
    b: "Reduce the manual work involved in routine patient communication, appointment administration, referral tracking, recalls and billing follow-up. Expected value: lower repetitive workload, more consistent administration and improved staff capacity.",
  },
  {
    n: "2",
    h: "Patient access and appointment utilisation",
    b: "Help patients connect with the practice, complete appropriate bookings and access available appointment times. Expected value: improved administrative responsiveness, fewer missed booking opportunities and more effective use of existing appointment capacity.",
  },
  {
    n: "3",
    h: "Billing and revenue assurance",
    b: "Maintain structured follow-up of eligible billing and claims exceptions, outstanding payments and unresolved administrative discrepancies. Expected value: better financial visibility, reduced administrative delays and improved control over legitimate revenue processes.",
  },
];

const MEANS_FOR = [
  {
    h: "For the practice manager",
    b: "Less time managing routine task queues and chasing operational updates.",
  },
  {
    h: "For reception",
    b: "More capacity to help patients who need personal assistance.",
  },
  {
    h: "For clinicians",
    b: "Fewer interruptions from routine administrative tasks and more attention available for patient care.",
  },
  {
    h: "For practice owners",
    b: "Greater visibility over operational performance, more efficient use of existing resources and a clearer basis for managing administrative growth.",
  },
];

const START_WITH = [
  {
    h: "Need help answering calls?",
    b: "Hire an AI Reception & Patient Access Coordinator.",
  },
  {
    h: "Too many cancellations and booking follow-ups?",
    b: "Hire an AI Appointment & Cancellation Recovery Coordinator.",
  },
  {
    h: "Referrals creating an administrative backlog?",
    b: "Hire an AI Referrals & Intake Coordinator.",
  },
  {
    h: "Your team spending too much time on recalls?",
    b: "Hire an AI Recalls & Follow-Up Coordinator.",
  },
  {
    h: "Billing and claims administration falling behind?",
    b: "Hire an AI Billing & Claims Coordinator.",
  },
  {
    h: "Need better visibility across practice operations?",
    b: "Hire an AI Practice Operations Coordinator.",
  },
];

const SEGMENTS = [
  {
    h: "General practices",
    b: "For GP clinics balancing incoming patient enquiries, appointments, cancellations, recalls, referrals and billing administration.",
    uses: "AI reception, booking coordination, clinician-approved recalls, billing exceptions and practice operations.",
  },
  {
    h: "Specialist medical practices",
    b: "For specialist clinics managing referral administration, consultation scheduling, patient intake and complex administrative follow-up.",
    uses: "Referral coordination, appointment administration, intake paperwork, approved follow-up and billing workflows.",
  },
  {
    h: "Allied health practices",
    b: "For physiotherapy, psychology, occupational therapy, speech pathology and other allied health practices.",
    uses: "Enquiry handling, appointments, cancellations, waitlist management, intake and invoicing administration.",
  },
  {
    h: "Multi-practitioner clinics",
    b: "For healthcare businesses managing several clinicians, schedules and administrative processes.",
    uses: "Centralised appointment coordination, billing exception tracking, task management and daily practice reporting.",
  },
  {
    h: "Multi-location healthcare groups",
    b: "For organisations operating multiple practices or locations.",
    uses: "Consolidated administrative visibility, standardised workflows and cross-location task coordination.",
  },
];

const HOW_STEPS = [
  {
    n: "1",
    h: "Book your AI Workforce demonstration",
    b: "We show you how the relevant AI employees perform administrative workflows and how those activities appear in the Novada AI Control Centre.",
  },
  {
    n: "2",
    h: "Review your existing systems",
    b: "We identify your practice-management, appointment, telephony, messaging and billing platforms and confirm the supported integration requirements.",
  },
  {
    n: "3",
    h: "Choose your AI employees",
    b: "Select the roles that match your practice's workload and operational priorities.",
  },
  {
    n: "4",
    h: "Configure your workflows",
    b: "We set up your approved operating procedures, patient communication rules, permissions, approval points and escalation pathways.",
  },
  {
    n: "5",
    h: "Activate your AI workforce",
    b: "Your AI employees begin handling the agreed administrative workflows across connected systems.",
  },
  {
    n: "6",
    h: "Monitor and optimise",
    b: "Your practice monitors completed tasks, exceptions, approvals and performance through the Control Centre.",
  },
];

/* ── Section 11. ──────────────────────────────────────────────────────
 * 🔴 THE MOST IMPORTANT BAND ON THIS PAGE. The two columns are not
 * decorative: the right-hand one is the list of things an administrative
 * AI must never decide in a healthcare setting, and a reader has to
 * finish on it. Do not reorder them, do not shorten the right column,
 * and do not move either into a footnote.
 * ──────────────────────────────────────────────────────────────────── */
const AI_HANDLES = [
  "Approved patient communications.",
  "Routine administrative bookings.",
  "Cancellation and waitlist coordination.",
  "Referral document follow-up.",
  "Clinician-authorised reminder and recall administration.",
  "Billing exception tracking.",
  "Administrative record updates.",
  "Routine operational reporting.",
];

const HUMAN_OVERSIGHT = [
  "Clinical urgency and triage.",
  "Diagnosis, treatment and medical advice.",
  "Clinical referral prioritisation.",
  "Review of test results and clinically significant recalls.",
  "Determinations of MBS eligibility or clinical entitlement.",
  "Final billing-code decisions requiring professional judgement.",
  "Consequential decisions affecting patient care.",
];

const EXISTING_SYSTEMS = [
  "Clinical and patient records.",
  "Appointments and scheduling.",
  "Patient communications.",
  "Referrals and intake.",
  "Medicare and private billing.",
  "Claims administration.",
  "Payment reconciliation.",
  "Practice reporting.",
];

const INTEGRATION = [
  {
    h: "Keep your existing systems",
    b: "Continue using your established clinical and practice-management applications.",
  },
  {
    h: "Give your systems an AI workforce",
    b: "Your AI employees coordinate permitted tasks across the systems you already use.",
  },
  {
    h: "See the results in one place",
    b: "The Novada AI Control Centre provides central visibility over AI activity, approvals, actions and exceptions.",
  },
  {
    h: "Maintain clear system ownership",
    b: "Your practice-management systems remain the authoritative sources for clinical records, appointments and financial transactions.",
  },
];

const WHY = [
  {
    h: "Specialised AI employees",
    b: "Purpose-built operational roles for the different administrative functions within a healthcare practice.",
  },
  {
    h: "Action-based workflows",
    b: "AI employees carry out authorised tasks rather than simply provide recommendations.",
  },
  {
    h: "Cross-system coordination",
    b: "Permitted workflows connect the information and actions across your supported practice applications.",
  },
  {
    h: "Centralised oversight",
    b: "Monitor tasks, approvals, exceptions and completed work in one Control Centre.",
  },
  {
    h: "Flexible operational capacity",
    b: "Engage the AI employees your practice needs and expand as your administrative requirements change.",
  },
  {
    h: "Clear human accountability",
    b: "Important clinical, billing and patient-safety decisions remain with appropriately qualified professionals.",
  },
];

/* 🔴 NINETEEN QUESTIONS, FOUNDER-SUPPLIED. SIX ARE THE LEGAL FLOOR AND
   ARE NOT TO BE SOFTENED, SHORTENED OR REORDERED:
     · "Can it recover cancelled appointments?"   no guaranteed fill
     · "Can it manage referrals?"                 clinical review stays
     · "Can it manage patient recalls?"           governance stays
     · "Can it handle Medicare billing and claims?"  no MBS eligibility
     · "Can patients speak directly to a real person?"   YES
     · "Does Novada guarantee additional revenue?"       NO */
const FAQ = [
  {
    q: "What is Novada AI Workforce for healthcare practices?",
    a: "It is a specialised AI operations service that allows Australian healthcare practices to engage AI employees to carry out authorised administrative workflows across supported practice systems.",
  },
  {
    q: "Is this just an AI receptionist?",
    a: "No. AI Reception is one of six specialised roles. Novada also offers AI employees for appointment coordination, referral intake, recall administration, billing and claims, and practice operations.",
  },
  {
    q: "Do the AI employees actually complete tasks?",
    a: "Yes. Within the agreed workflows and system permissions, the AI employees carry out authorised administrative actions, update supported systems, record outcomes and escalate exceptions.",
  },
  {
    q: "Can the AI answer patient phone calls?",
    a: "The AI Reception Coordinator handles approved patient enquiries through supported telephony arrangements. Call handling, operating hours, escalation arrangements and service capacity are configured for your practice.",
  },
  {
    q: "Can the AI book and reschedule appointments?",
    a: "Yes, for appointment types and booking conditions authorised by the practice and supported by its connected scheduling system.",
  },
  {
    q: "Can the AI recover cancelled appointments?",
    a: "It can monitor cancellations, check approved waitlist information, contact eligible patients and coordinate bookings under the practice's rules. It cannot guarantee every available appointment will be filled.",
  },
  {
    q: "Can it manage referrals?",
    a: "The AI Referrals Coordinator handles permitted administrative intake tasks, including document checking, missing-information requests and referral status tracking. Clinical review and prioritisation remain with appropriate practitioners.",
  },
  {
    q: "Can it manage patient recalls?",
    a: "The AI Recalls Coordinator executes clinician-authorised administrative recall and reminder workflows. Clinical urgency, follow-up decisions and safety-critical escalation remain under the practice's clinical governance.",
  },
  {
    q: "Can it handle Medicare billing and claims?",
    a: "The AI Billing Coordinator supports authorised administrative processes, including claim status tracking, exception follow-up and payment reconciliation. It does not independently determine MBS item eligibility, clinical coding or entitlement.",
  },
  {
    q: "Can it work with our current practice management software?",
    a: "Novada connects to supported systems through authorised integrations. We confirm the applicable functionality and system requirements during the integration assessment.",
  },
  {
    q: "Does Novada replace our existing practice-management software?",
    a: "No. Your existing systems continue to hold their respective patient, appointment, clinical and financial records. Novada provides the centralised AI workflow and operational execution environment.",
  },
  {
    q: "Can it replace our reception staff?",
    a: "The service is designed to reduce routine administrative workload and improve operational capacity. The extent to which it changes staffing requirements depends on your practice, workload and the tasks appropriate for automation. It does not replace the need for human assistance, clinical judgement or suitable patient escalation.",
  },
  {
    q: "Is patient information protected?",
    a: "Novada workflows operate under defined access permissions and applicable privacy and security arrangements. Your practice's data handling, integration requirements and relevant agreements are addressed during implementation.",
  },
  {
    q: "Can patients speak directly to a real person?",
    a: "Yes. Patient-facing workflows provide appropriate referral or escalation to human staff where needed, in accordance with the practice's procedures.",
  },
  {
    q: "Can we hire just one AI employee?",
    a: "Yes. Practices can select an individual AI employee or combine multiple roles within the Control Centre.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing is based on the selected AI employees, integration requirements, administrative workflow scope, service capacity and implementation arrangements. Novada provides a tailored commercial proposal after understanding the practice's needs.",
  },
  {
    q: "Is there a setup fee?",
    a: "Any applicable onboarding, integration and configuration charges are detailed in your proposal.",
  },
  {
    q: "Does Novada guarantee additional revenue?",
    a: "No. Revenue-related outcomes depend on the practice's demand, appointment availability, pricing, claiming eligibility and operational circumstances. Novada supports administrative processes designed to improve utilisation and revenue assurance.",
  },
  {
    q: "How do we get started?",
    a: "Book a live demonstration. We will show you the relevant AI employees, discuss your current workflows and assess how Novada can integrate into your practice's administrative operations.",
  },
];

/* ── building blocks ──────────────────────────────────────────────────
 * Lifted from the care AI Workforce page, minus the testimonial slider,
 * which this page must not have. See the header note.
 * ──────────────────────────────────────────────────────────────────── */

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
     against: brand-500 #003DDB on canvas-ink #0A0D14 is about 2:1, so
     the button's own edge all but disappears. The founder asked for the
     same blue on the hero as the other CTAs, so the FILL is exactly
     brand-500 and a light ring carries the boundary instead. */
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

function BoxCards({
  items,
  cols = 2,
}: {
  items: { h: string; b: string; n?: string; uses?: string }[];
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
          {c.uses ? (
            <p className={`${SMALL} mt-auto pt-4`}>
              <span className="font-semibold text-ink-950">
                Common applications:
              </span>{" "}
              {c.uses}
            </p>
          ) : null}
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

function RuledList({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 flex flex-col gap-3">
      {items.map((t) => (
        <li
          key={t}
          className="reveal border-l-2 border-ink-200 pl-5 text-base text-ink-700"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function Statement({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
      {children}
    </p>
  );
}

/* 🔴 BLUE, NOT GREEN, on the founder's instruction: a five-star row in
   Trustpilot's green invites a brand complaint. ⚠️ But not brand-500 on
   ink, which is about 2:1 there. brand-200 #A6BEFF is 10.58:1. The PROOF
   STRIP passes brand-500 because those cards sit on white. */
function Stars({ className = "h-4 w-4 fill-brand-200 text-brand-200" }) {
  return (
    <span aria-hidden className="flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={className} strokeWidth={0} />
      ))}
    </span>
  );
}

/* ⚠️ UNBRANDED BY NECESSITY, and ⚠️ "CLIENT reviews", not "provider
   reviews": on a practices page "provider" means a clinician. */
function RatingBar() {
  return (
    <div className="inline-flex min-h-11 flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5">
      <Stars />
      <span className="text-sm font-semibold text-white">5.0</span>
      <span className="text-sm text-white/70">from 77 client reviews</span>
    </div>
  );
}

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

function EmployeeBlock({
  e,
  delay,
}: {
  e: (typeof EMPLOYEES)[number];
  delay: number;
}) {
  return (
    <article
      className="reveal rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8 lg:p-10"
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      <div className="flex items-center gap-4">
        <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-500 text-sm font-bold text-white">
          {e.n}
        </span>
        <p className={`${MICRO} text-brand-500`}>{e.role}</p>
      </div>

      {/* ⚠️ NOT max-w-headline. That token is 20ch and sized for the
          CONDENSED display face; on Inter at 2xl it strands this line
          down the left half of the card with the right half empty. */}
      <h3 className="mt-5 max-w-[42ch] text-xl font-semibold leading-snug text-ink-950 md:text-2xl">
        {e.lead}
      </h3>
      <p className="mt-2 max-w-[52ch] text-base italic text-ink-500">{e.sub}</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className={`${MICRO} text-ink-400`}>The problem</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">
            {e.problem}
          </p>

          <p className={`${MICRO} mt-8 text-ink-400`}>{e.exampleTitle}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">
            {e.example}
          </p>
        </div>

        <div>
          <p className={`${MICRO} text-ink-400`}>What it does</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">
            {e.doesLead}
          </p>
          <Bullets items={e.does} />
        </div>
      </div>

      <div className="mt-8 border-t border-ink-100 pt-6">
        <p className={`${MICRO} text-brand-500`}>
          What this means for your practice
        </p>
        <div className="grid gap-x-10 md:grid-cols-2">
          <Bullets items={e.means.slice(0, 3)} />
          <Bullets items={e.means.slice(3)} />
        </div>

        {e.value ? (
          <p className={`${SMALL} mt-7`}>
            <span className="font-semibold text-ink-950">
              The business value:
            </span>{" "}
            {e.value}
          </p>
        ) : null}

        {/* 🔴 THE BOUNDARY. On four of the six roles this is the only
            sentence keeping a clinical, Medicare or patient-safety
            decision with a qualified person. See the note above
            EMPLOYEES. Never delete one to tighten a card. */}
        {e.limit ? (
          <p className={`${SMALL} mt-5 border-l-2 border-ink-200 pl-4`}>
            <span className="font-semibold text-ink-950">Important:</span>{" "}
            {e.limit}
          </p>
        ) : null}
      </div>
    </article>
  );
}

export default function AiWorkforcePage() {
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
            className={`${FRAME} ${GUTTER} relative border-x border-white/10 pb-16 pt-8 md:pb-20 md:pt-14`}
          >
            <RatingBar />

            <p className={`${MICRO} mt-7 text-brand-200`}>
              For Australian GP, specialist &amp; allied health practices
            </p>

            {/* ⚠️ NOT the d1 token. d1's clamp floor is 42px, which puts a
                headline this long over five lines on a phone and pushes
                the CTA off the first screen. */}
            <h1
              className={`${DISPLAY} mt-5 text-[clamp(2rem,0.89rem+4.83vw,4.75rem)] leading-[0.93] tracking-[-0.015em] text-white`}
            >
              Hire AI employees that actually run your practice
              administration.
            </h1>

            <div
              className={`mt-7 flex ${WIDE} flex-col gap-5 text-base text-white/75`}
            >
              <p>
                Novada AI Workforce is a team of specialised AI employees that
                connect to your existing practice systems and complete
                authorised administrative tasks. From answering patient
                enquiries and coordinating appointments to managing referral
                administration, clinician-approved recalls and billing
                follow-ups, your AI employees help run the everyday operations
                behind your practice. And with the Novada AI Control Centre,
                you can see exactly what work is being done, monitor
                outstanding tasks, approve sensitive actions and track
                operational performance, all from one centralised platform.
              </p>
            </div>

            {/* 🔴 BOTH STRAP LINES. The supplied copy carries two and an
                earlier draft of this page shipped only the first. The
                second is the benefit line and it is the one a practice
                owner scans for.

                ⚠️ THIS HERO IS THE LONGEST ON THE ESTATE: 144 words
                against 102 on /practices/revenue-audit and 124 on
                /practices/patient-booking. Measured at 390x844 the first
                CTA lands below the fold, which neither twin does. The
                spacing here is already as tight as it goes without
                cutting founder copy; the remaining fix is a shorter hero
                paragraph, which is the founder's call. Do not open this
                spacing back up. */}
            <div
              className={`mt-7 flex flex-col gap-1.5 border-t border-white/10 pt-6`}
            >
              <p className={`${MICRO} text-white/60`}>
                Six specialised AI employees. One centralised platform. Real
                administrative work getting done.
              </p>
              <p className={`${MICRO} text-brand-200`}>
                Less front-desk pressure. Better appointment utilisation. More
                time for patient care.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Cta tone="brand">Book your live AI Workforce demo</Cta>
              {/* The copy's secondary button. Deliberately quiet: it is a
                  jump link down the page, not a second ask. */}
              <a
                href="#employees"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm border border-white/20 bg-white/[0.06] px-6 text-base font-semibold text-white transition-colors duration-150 ease-standard hover:border-white/35 hover:bg-white/10 sm:w-auto sm:text-sm"
              >
                Meet your AI employees
                <ChevronDown aria-hidden className="h-4 w-4" />
              </a>
            </div>

            {/* 🔴 THE CLINICAL BOUNDARY IS IN THE HERO ON PURPOSE. This is
                the only offer on the estate where an AI speaks to
                patients, and a practice owner should meet that limit
                before the first CTA, not in a footnote. */}
            <p className="mt-6 text-sm text-white/55">
              Built for Australian healthcare practices. Works with supported
              practice systems. Important clinical and billing decisions remain
              with appropriately authorised professionals.
            </p>
          </div>
        </section>

        {/* ── PROOF STRIP ──────────────────────────────────────────── */}
        {/* ⚠️ THE PRACTICES LABELS, NOT THE CARE ONES. "Client reviews"
            and "Healthcare practices across Australia". On this audience
            "provider" means a clinician and the care line is false. */}
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
            Your practice is busy. But how much of that work really needs a
            human?
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Think about what happens during a typical day at your practice.
          </p>

          <RuledList items={A_TYPICAL_DAY} />

          <p className={`${BODY} ${WIDE} mt-8`}>
            Every task matters. But not every task needs to be performed
            manually.
          </p>

          <p className={`${MICRO} mt-10 text-brand-500`}>
            The operational challenges holding practices back
          </p>
          <BoxCards items={CHALLENGES} cols={3} />

          <Statement>
            Your practice has invested in systems that manage information. But
            your team still spends hours doing the administrative work required
            to keep those systems running.
          </Statement>
          <div className={`mt-6 flex ${WIDE} flex-col gap-4`}>
            <p className={`${BODY} ${WIDE}`}>
              As patient demand increases, the administrative workload can grow
              faster than your practice&apos;s available capacity. Hiring more
              people is not always the most efficient or sustainable answer.
            </p>
            <p className={`${BODY} ${WIDE} font-medium text-ink-950`}>
              There is another way to get the work done.
            </p>
          </div>
        </Band>

        {/* ── 3 THE SOLUTION ───────────────────────────────────────── */}
        <Band index="02" label="The solution">
          <h2 className={`${D2} text-ink-950`}>
            Meet the AI employees that work across your existing practice
            systems.
          </h2>

          <RuledList items={NOT_THIS} />

          <Statement>
            It is a workforce of specialised AI employees designed to take
            authorised action.
          </Statement>

          <p className={`${BODY} ${WIDE} mt-6`}>
            Your AI employees can receive routine requests, access permitted
            information, initiate workflows, communicate through approved
            channels, update connected records, follow up outstanding actions
            and escalate exceptions requiring human judgement.
          </p>

          <p className={`${MICRO} mt-10 text-brand-500`}>
            Here is the difference
          </p>
          <BoxCards items={DIFFERENCE} cols={3} />

          <p className={`${MICRO} mt-10 text-brand-500`}>
            Imagine having an AI employee that can
          </p>
          <Bullets items={IMAGINE} />
          <p className={`${BODY} ${WIDE} mt-7`}>
            All without requiring your reception or administration team to
            manually coordinate every step. That is the work Novada AI
            Workforce takes off your team&apos;s hands.
          </p>

          <div className="mt-10">
            <Cta>See how your AI employees work</Cta>
          </div>
        </Band>

        {/* ── 4 MEET YOUR AI EMPLOYEES ─────────────────────────────── */}
        <Band id="employees" index="03" label="Your AI employees">
          <h2 className={`${D2} text-ink-950`}>
            Six specialised AI employees. Hire the ones your practice needs.
          </h2>
          <div className={`mt-6 flex ${WIDE} flex-col gap-4`}>
            <p className={`${BODY} ${WIDE}`}>
              Every healthcare practice operates differently. A busy GP clinic
              may need help answering calls and managing appointment demand. A
              specialist practice may need additional capacity for referrals,
              intake and billing administration. An allied health clinic may
              want better cancellation recovery, patient follow-ups and
              scheduling coordination.
            </p>
            <p className={`${BODY} ${WIDE}`}>
              Novada AI Workforce gives practices the flexibility to engage
              specialised AI employees that match their operational priorities.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-5 md:gap-6">
            {EMPLOYEES.map((e, i) => (
              <EmployeeBlock key={e.role} e={e} delay={Math.min(i, 2) * 70} />
            ))}
          </div>
        </Band>

        {/* ── 5 THE CONTROL CENTRE ─────────────────────────────────── */}
        <Band index="04" label="Control Centre">
          <h2 className={`${D2} text-ink-950`}>
            Six AI employees. One central place to see the work getting done.
          </h2>
          <div className={`mt-6 flex ${WIDE} flex-col gap-4`}>
            <p className={`${BODY} ${WIDE}`}>
              Your AI employees operate across different parts of the practice.
              But your management team should not need to open six separate
              systems to understand what they are doing.
            </p>
            <p className={`${BODY} ${WIDE}`}>
              The Control Centre provides a consolidated view of your AI
              employees, their operational responsibilities, completed
              activities and outstanding exceptions.
            </p>
          </div>

          <p className={`${MICRO} mt-10 text-brand-500`}>What you can monitor</p>
          <BoxCards items={CONTROL_SHOWS} cols={3} />

          <Statement>
            One centralised view, without replacing your practice management
            system.
          </Statement>
          {/* ⚠️ LOAD-BEARING. This is the sentence that stops the Control
              Centre reading as a replacement system of record, which is a
              claim we cannot support and a migration we are not selling. */}
          <p className={`${BODY} ${WIDE} mt-6`}>
            Your existing clinical and practice-management systems remain
            authoritative for patient records, appointments, clinical
            documentation and financial transactions. Novada becomes the central
            record of AI workflow activities, system interactions, approvals and
            execution history.
          </p>
          <p className={`${BODY} ${WIDE} mt-6 font-medium text-ink-950`}>
            Your existing software holds the records. Your Novada AI employees
            help get the work done.
          </p>

          <div className="mt-10">
            <Cta>See the Novada AI Control Centre</Cta>
          </div>
        </Band>

        {/* ── 6 SEE IT IN ACTION ───────────────────────────────────── */}
        <Band index="05" label="Worked example" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            One cancelled appointment. A complete workflow. Minimal manual
            coordination.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            It is 9:15 am. A patient cancels their 2:00 pm appointment. The
            clinician now has available time, and your reception team is already
            busy with incoming calls, patient arrivals and payments.
          </p>

          <div className="mt-10 rounded-xl border border-ink-200 bg-white p-6 md:p-8">
            <p className={`${MICRO} text-ink-500`}>Without Novada</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-700">
              Someone must notice the cancellation, check the waitlist, contact
              suitable patients, confirm availability, update the appointment
              book and send confirmation. If nobody has time, the appointment
              may remain unfilled.
            </p>
          </div>

          <p className={`${MICRO} mt-10 text-brand-500`}>
            With Novada AI Workforce
          </p>
          <BoxCards items={WORKFLOW} cols={2} />

          <Statement>
            Your practice has a repeatable process for responding to
            cancellations without reception staff manually handling every step.
          </Statement>
          <p className={`${BODY} ${WIDE} mt-6`}>
            That is the difference between seeing an available appointment and
            having an AI employee coordinate the work needed to fill it.
          </p>

          <div className="mt-10">
            <Cta>Watch the AI appointment workflow demo</Cta>
          </div>
        </Band>

        {/* ── 7 THE BUSINESS VALUE ─────────────────────────────────── */}
        <Band index="06" label="The value">
          <h2 className={`${D2} text-ink-950`}>
            More efficient administration. Better patient access. Stronger
            practice performance.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Novada AI Workforce delivers value in three areas that matter to
            practice owners and managers.
          </p>
          <BoxCards items={VALUE} cols={3} />

          <p className={`${MICRO} mt-10 text-brand-500`}>
            What this means for your team
          </p>
          <BoxCards items={MEANS_FOR} cols={2} />

          <Statement>
            Less administration for your team. Better access for patients. More
            control over practice operations.
          </Statement>
          {/* 🔴 NEVER PROMISE THE REVENUE. The FAQ repeats this outright
              with a one-word answer. */}
          <p className={`${SMALL} ${WIDE} mt-8`}>
            Actual improvements depend on the practice&apos;s systems,
            administrative volumes, workflow configuration and operating
            conditions.
          </p>

          <div className="mt-10">
            <Cta>Explore your practice&apos;s AI workforce opportunity</Cta>
          </div>
        </Band>

        {/* ── 8 WHERE TO START ─────────────────────────────────────── */}
        <Band index="07" label="Where to start">
          <h2 className={`${D2} text-ink-950`}>
            Start with one AI employee. Build the team your practice needs.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            You do not need to change how your whole practice operates
            overnight. You can engage the AI employees that address your most
            immediate operational constraints.
          </p>
          <BoxCards items={START_WITH} cols={3} />
          <p className={`${BODY} ${WIDE} mt-10`}>
            Or combine several AI employees into a coordinated operational team.
          </p>

          <div className="mt-10">
            <Cta>Find the right AI employee for your practice</Cta>
          </div>
        </Band>

        {/* ── 9 WHO WE HELP ────────────────────────────────────────── */}
        <Band index="08" label="Who we help">
          <h2 className={`${D2} text-ink-950`}>
            One AI workforce platform. Different practice environments.
          </h2>
          <BoxCards items={SEGMENTS} cols={2} />
          <Statement>
            Your clinical model and software environment remain your own. Novada
            helps execute the administrative work around them.
          </Statement>
        </Band>

        {/* ── 10 HOW IT WORKS ──────────────────────────────────────── */}
        <Band index="09" label="How it works">
          <h2 className={`${D2} text-ink-950`}>
            Getting your AI employees working in your practice.
          </h2>
          <BoxCards items={HOW_STEPS} cols={2} />
          <p className={`${BODY} ${WIDE} mt-10 font-medium text-ink-950`}>
            Your practice keeps its systems. Your AI employees take on the
            authorised administrative work.
          </p>

          <div className="mt-10">
            <Cta>Book your AI Workforce demo</Cta>
          </div>
        </Band>

        {/* ── 11 HUMAN CONTROL & PATIENT SAFETY ────────────────────── */}
        <Band index="10" label="Control &amp; safety" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            AI handles the administration. Your clinicians remain responsible
            for care.
          </h2>
          <div className={`mt-6 flex ${WIDE} flex-col gap-4`}>
            <p className={`${BODY} ${WIDE}`}>
              Healthcare administration is different from ordinary business
              administration. A patient enquiry may contain a clinical concern.
              A referral may require urgent professional review. A recall may
              relate to a clinically significant result. A billing question may
              require interpretation of Medicare rules and clinical
              documentation.
            </p>
            <p className={`${BODY} ${WIDE} font-medium text-ink-950`}>
              These are not decisions an administrative AI employee should make
              independently.
            </p>
          </div>

          {/* 🔴 TWO COLUMNS, AND THE READER MUST FINISH ON THE RIGHT ONE.
              See the note above AI_HANDLES. Do not reorder. */}
          <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
            <div className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-8">
              <h3 className="text-base font-semibold text-ink-950">
                What your AI employees can handle
              </h3>
              <Bullets items={AI_HANDLES} />
            </div>
            <div
              className="reveal flex flex-col rounded-xl border-2 border-brand-500 bg-white p-6 shadow-raise md:p-8"
              style={{ ["--reveal-delay" as string]: "70ms" }}
            >
              <h3 className="text-base font-semibold text-ink-950">
                What requires human oversight
              </h3>
              <Bullets items={HUMAN_OVERSIGHT} />
            </div>
          </div>

          <p className={`${MICRO} mt-10 text-brand-500`}>
            Patient privacy and transparency
          </p>
          <div className={`mt-4 flex ${WIDE} flex-col gap-4`}>
            <p className={`${BODY} ${WIDE}`}>
              Novada&apos;s operational workflows use authorised access and
              appropriate controls for handling patient information.
            </p>
            {/* 🔴 THE DISCLOSURE SENTENCE. An AI that speaks to patients
                without saying so is the single fastest way to lose a
                practice's trust and attract a complaint. */}
            <p className={`${BODY} ${WIDE} font-medium text-ink-950`}>
              Patients interacting directly with an AI assistant are informed
              that they are communicating with AI.
            </p>
            <p className={`${BODY} ${WIDE}`}>
              Sensitive information is handled under the applicable privacy
              arrangements, with access permissions, approved communication
              processes and appropriate escalation procedures.
            </p>
          </div>

          <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            AI should remove avoidable administrative pressure without removing
            clinical accountability or compromising patient safety.
          </p>
        </Band>

        {/* ── 12 YOUR EXISTING SYSTEMS ─────────────────────────────── */}
        <Band index="11" label="Your systems">
          <h2 className={`${D2} text-ink-950`}>
            Your practice does not need another disconnected software platform.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Your organisation may already use software for:
          </p>
          <Bullets items={EXISTING_SYSTEMS} />
          <p className={`${BODY} ${WIDE} mt-8`}>
            Novada AI Workforce connects through supported integrations and
            authorised workflows.
          </p>
          <BoxCards items={INTEGRATION} cols={2} />
          <Statement>
            Novada is not another practice-management system. It is the
            operational execution layer that helps your existing systems work
            together.
          </Statement>

          <div className="mt-10">
            <Cta>Check your practice&apos;s integration requirements</Cta>
          </div>
        </Band>

        {/* ── 13 WHY NOVADA ────────────────────────────────────────── */}
        <Band index="12" label="Why Novada">
          <h2 className={`${D2} text-ink-950`}>
            Your practice does not need more reminders about work that is not
            finished. It needs more work getting done.
          </h2>
          <div className={`mt-6 flex ${WIDE} flex-col gap-4`}>
            <p className={`${BODY} ${WIDE}`}>
              Many practice-management systems already provide appointment
              lists, notifications, task queues and reporting. But a reminder
              that a task is outstanding does not complete the task.
            </p>
            <p className={`${BODY} ${WIDE}`}>
              A cancellation notification does not automatically coordinate the
              work needed to offer the appointment to someone else. A claim
              rejection does not resolve itself. And a referral marked
              incomplete still requires follow-up.
            </p>
          </div>
          <BoxCards items={WHY} cols={3} />
          <Statement>
            A practice that is less dependent on manual coordination for routine
            administrative work, without losing visibility or control.
          </Statement>
        </Band>

        {/* ── 14 FAQ ───────────────────────────────────────────────── */}
        <Band index="13" label="Questions" tone="tint">
          <h2 className={`${D2} text-ink-950`}>Frequently asked questions</h2>
          <Faq />
        </Band>

        {/* ── 15 BOOK ──────────────────────────────────────────────── */}
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
                  You did not open a healthcare practice to spend your day
                  managing administration.
                </BandHeading>

                <div
                  className={`mt-7 flex ${WIDE} flex-col gap-5 text-base text-white/75`}
                >
                  <p>
                    You built your practice to provide care. But running a
                    successful practice also means managing patient access,
                    appointment schedules, referrals, recalls, invoices, claims
                    and everything else that keeps the business moving. Your
                    software helps organise that work. Novada AI Workforce helps
                    get it done.
                  </p>
                  <p>
                    Hire specialised AI employees to handle routine
                    administrative processes across your existing practice
                    systems. Let your team focus on the patients and decisions
                    that need them. See the work, approvals and outcomes through
                    one centralised Control Centre.
                  </p>
                </div>

                <p className="mt-8 max-w-statement border-l-2 border-brand-400 pl-6 text-2xl font-medium text-white">
                  Less administration. Better patient access. More time for
                  care.
                </p>

                <p className={`${WIDE} mt-8 text-base text-white/75`}>
                  Book a live demonstration. On the call we will:
                </p>
                <Bullets
                  tone="dark"
                  items={[
                    "Show you the relevant AI employees performing real administrative workflows.",
                    "Review your practice-management, appointment, telephony, messaging and billing systems.",
                    "Confirm the supported integration requirements for your environment.",
                    "Agree which tasks can run automatically, which need approval and what must always be escalated.",
                    "Discuss which AI employee to introduce first, and how to measure the result.",
                  ]}
                />

                <div className="mt-10">
                  {/*
                   * 🔴 PLACEHOLDER, NOT A CALENDAR. See the file header.
                   * The founder is supplying this offer's demo calendar
                   * separately, and until the id exists this page has NO
                   * embed rather than a borrowed one:
                   * practices-revenue-audit and
                   * practices-patient-booking each feed their own
                   * pipeline, so pointing this page at either would file
                   * an AI Workforce enquiry against a different offer,
                   * in a different pipeline, with a different
                   * confirmation page. A booking that cannot be made is
                   * recoverable. A booking filed against the wrong offer
                   * is not.
                   *
                   * ⚠️ IT IS NOT A BUTTON AND MUST NOT BECOME ONE.
                   */}
                  <div className="rounded-xl border border-dashed border-white/20 bg-white/[0.04] p-7 md:p-10">
                    <p className={`${MICRO} text-brand-200`}>
                      Demo booking opens shortly
                    </p>
                    <p className="mt-4 max-w-[60ch] text-base text-white/75">
                      The AI Workforce demo calendar is being set up. Until it
                      is live, email{" "}
                      <a
                        href="mailto:support@novadatech.com.au?subject=Novada%20AI%20Workforce%20demo%20for%20practices"
                        className="font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
                      >
                        support@novadatech.com.au
                      </a>{" "}
                      and we will arrange a time.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm text-white/55">
                  See how Novada AI employees can support your practice&apos;s
                  existing systems and administrative workflows. No obligation
                  to proceed.
                </p>

                {/* The copy's closing secondary button.
                    ⚠️ min-h-11 is not decoration: without it a
                    bordered-bottom link is 27px tall and fails the 44px
                    tap floor the whole site holds. */}
                <a
                  href="#employees"
                  className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-white/25 pb-1 text-sm font-semibold text-white transition-colors duration-150 hover:border-white"
                >
                  Find the right AI employee for your practice
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DeskFooter />

      {/* ⚠️ CLEARANCE FOR THE STICKY BAR. Without it the bar covers the
          last line of the footer on a phone. */}
      <div aria-hidden className="h-28 sm:h-20" />

      <StickyCta
        label="Book your live AI Workforce demo"
        tagline="See your own workflows, with your systems."
        href="#book"
      />
    </div>
  );
}
