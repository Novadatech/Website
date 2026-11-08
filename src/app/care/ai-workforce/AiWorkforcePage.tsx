"use client";

import { useState } from "react";
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
import BookingEmbed from "@/components/desk/BookingEmbed";
import { Band, BandHeading } from "@/components/desk/Band";
import {
  BODY,
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
 * /care/ai-workforce — NOVADA AI WORKFORCE.
 *
 * Built 7 November 2026 from founder-supplied copy, as the THIRD care
 * landing page, on the founder's instruction that it be "similar to the
 * way we have the Rostering Audit page and Workforce page". So: same
 * components, same section rhythm, same hero clamp, same proof strip,
 * same rail numbering, same sticky bar. If you change the shape of one
 * of the three, look at the other two.
 *
 * ⚠️ IT IS A CLIENT COMPONENT, so its metadata CANNOT live in this
 * file. It is exported from page.tsx, which wraps this. Do not add a
 * layout.tsx to this folder: ./confirmed has one of its own carrying
 * the noindex, and two layouts declaring metadata in the same subtree
 * is how a confirmation page ends up titled like a sales page.
 *
 * ══════════════════════════════════════════════════════════════════════
 * 🔴 TWO THINGS ON THIS PAGE ARE NOT LIKE THE OTHER TWO CARE PAGES.
 * Read both before editing anything.
 *
 * 1. ✅ THE CALENDAR IS LIVE AND THE PAGE IS INDEXED, both since
 *    8 November 2026. #book carries a real BookingEmbed on
 *    `care-ai-workforce` (WP6oumjuphxHD9rJBNKX, "Book an AI Workforce
 *    Review"), the temporary noindex is gone from page.tsx and
 *    `indexed: true` in offers.ts puts the route back in the sitemap.
 *    This note used to describe a five-step handover; it is done, and
 *    the steps were removed so nobody performs them twice.
 *
 *    🔴 WHAT SURVIVES THE HANDOVER: this offer has its OWN calendar
 *    and its OWN pipeline. Never repoint #book at care-rostering or
 *    care-continuity. A booking filed against the wrong offer reaches
 *    the wrong coordinator through the wrong confirmation page, and
 *    unlike a booking that cannot be made, it cannot be recovered.
 *
 * 3. IT IS NOT IN THE NAV OR ON THE /care HUB. Both are generated from
 *    offersFor("care") in src/content/offers.ts, which returns the two
 *    pillars. Adding this offer there would put a third item in the nav
 *    on every care page, a third door on the hub, and a third step in
 *    the Pathway diagram's fourteen placements, which is a positioning
 *    change from CARE = TWO PILLARS to three. That is the founder's
 *    call and it has been put to them. Until they answer, this page is
 *    a standalone landing page reached by its URL, which is what a page
 *    for ads and outbound is anyway.
 *
 * 4. 🔴 THE PRODUCT EXISTS AND THE PAGE SAYS SO IN THE PRESENT TENSE.
 *    FOUNDER RULING, 7 NOVEMBER 2026, IN THOSE WORDS: "The product
 *    already exists. The hero is correct."
 *
 *    The copy as supplied contradicted itself. The hero sold a platform
 *    in the present tense while the FAQ called it "a PROPOSED
 *    AI-powered operational platform", deferred role availability to
 *    "when the relevant capabilities are offered", and said the
 *    security architecture "must be verified before production use". I
 *    flagged the gap and recommended the hero be softened. The founder
 *    ruled the other way, so the twenty-one sentences saying the
 *    product was unfinished were removed instead and the page now
 *    speaks with one voice. DO NOT REINTRODUCE THEM.
 * ══════════════════════════════════════════════════════════════════════
 *
 * 🔴 THE HEDGES THAT REMAIN ARE A DIFFERENT KIND AND THEY ARE THE
 * PAGE'S LEGAL FLOOR. The ruling above removed EXISTENCE hedges, which
 * said the product was not finished. It did NOT touch the SCOPE,
 * OUTCOME and OVERSIGHT hedges, which are true whatever the product's
 * maturity and which carry the Australian Consumer Law exposure on
 * their own:
 *
 *   · "Actual capabilities depend on the available integrations,
 *      configured workflows, system permissions and required approvals."
 *   · "Does Novada guarantee cost savings?  No."
 *   · "Will the AI make employment decisions?  No."
 *   · "It does not replace the provider's legal responsibilities,
 *      regulatory judgement or professional oversight."
 *   · "not a substitute for a staffed emergency response function,
 *      clinical triage or human decision-making..."
 *   · "Final hiring, employment, worker suitability, competency and
 *      disciplinary decisions remain with authorised humans."
 *   · "Regulatory determinations, worker suitability approvals and
 *      statutory responsibilities remain with authorised personnel."
 *   · "Actual execution depends on supported integrations, configured
 *      rules, worker availability and authorisations."
 *   · "The actual value delivered will depend on your systems,
 *      workflows, task volumes..."
 *   · the whole human-oversight band, and its third column especially
 *
 * ⚠️ A FUTURE EDITOR WILL READ THE RULING ABOVE AND REACH FOR THESE
 * NEXT. They are not the same thing. "The product exists" does not mean
 * "the product guarantees an outcome", and every sentence in that list
 * is about outcome, scope or who stays accountable. Removing one is a
 * misreading of the ruling, not an extension of it.
 *
 * ⚠️ "Designed to" SURVIVES WHERE IT DESCRIBES PURPOSE rather than
 * readiness, for example "What it is designed to do" above each role's
 * capability list. That is ordinary product language and the founder
 * wrote it. It is not an existence hedge.
 *
 * 🔴 THE INDUCEMENT WALL IS CRIMINAL-LAW BACKED (2026 NDIS changes).
 * No referral arrangements, incentives, gifts or growth promises in any
 * care-facing text, ever. "As your care organisation grows" on this
 * page is about the PROVIDER opening services, which is operational
 * planning and not an inducement. Keep it that way.
 *
 * ⚠️ "AI AFTER-HOURS COORDINATOR" SITS AGAINST THE 24/7 CANON. The
 * house position on care operations is that coverage is 24/7 and
 * contracts define a Coverage Window, specifically so nothing is sold
 * as "after hours". The founder's copy for this page names the role
 * "AI After-Hours Coordinator" and describes it as an after-hours desk.
 * Shipped as written, their copy and their call, and flagged. If the
 * canon wins later, the rename touches this page, the role card in
 * section 12 and the closing paragraph in #book.
 *
 * ⚠️ MEASURE IS DELIBERATELY WIDE, as on both twins: roughly 90ch
 * rather than the 68ch the rest of the estate uses, because the founder
 * asked for the right-hand space filled on these pages. Do not
 * propagate it to the pages built for reading.
 *
 * ⚠️ NO EM DASHES IN RENDERED PROSE. The supplied copy carried eight.
 * Each became a full stop or a colon and no words were changed. House
 * rule, and it applies to founder copy too.
 *
 * ⚠️ NO PRICE. The FAQ answers the cost question the way the rest of
 * the estate does, because price does not appear in writing before a
 * call. The supplied copy already avoided a figure here. Keep it.
 * ══════════════════════════════════════════════════════════════════════
 */

/* 🔴 VERBATIM, FOUNDER-SUPPLIED, AND THE SAME THREE QUOTES AS
   /care/rostering AND /care/workforce. Do not reword.

   🔴 ALL THREE ARE AI EMPLOYEE CUSTOMERS. FOUNDER, 7 NOVEMBER 2026:
   "They currently use the AI employee", then "yes the providers run AI
   Employees". The page now says so, in a line above the slider.

   ⚠️ THAT LINE IS OUTSIDE THE QUOTATION MARKS AND IT STAYS THERE. The
   three quotations are about working with Novada Tech and none of them
   mentions AI. No sentence is ever put into a client's mouth in either
   direction: not a hedge that shrinks what they said, and not a product
   claim they did not make. Novada asserts the usage in Novada's own
   voice; the providers say what they said. Both are true, and they are
   true separately. Do not merge them.

   ⚠️ THE NAME IS EMMANUELLA, two Ls. Founder-confirmed 29 October. All
   care pages agree. Do not "correct" it back. */
const TESTIMONIALS = [
  {
    org: "Maxicare Plus",
    quote:
      "One thing we value about Novada Tech is that they understand the operational challenges NDIS providers face. Building a care business requires more than finding workers. It requires reliable processes, proper planning and consistent support. Novada brings a practical, proactive approach and genuinely takes the time to understand what our organisation needs.",
    name: "Founder, Josh",
  },
  {
    org: "Morning Star Community Services",
    quote:
      "In the care sector, having reliable people and well-managed processes makes a real difference. What stands out about Novada Tech is their professionalism, attention to detail and focus on making operations more manageable. They understand the importance of accountability, consistency and having the right support behind service delivery.",
    name: "Founder, Emmanuella",
  },
  {
    org: "Support Link",
    quote:
      "Novada Tech takes a structured and professional approach to understanding business needs. They recognise the importance of strong workforce processes, clear communication and dependable administrative support. Their commitment to practical solutions and ongoing improvement is what makes them a valuable partner.",
    name: "Founder, Peter",
  },
];

/* Section 2. The five people in the organisation who are currently
   doing the coordination by hand. Deliberately bare: each one is a
   working day a provider recognises. */
const WHO_IS_DOING_IT = [
  "Your rostering coordinator moves between worker availability records, shift schedules and messages to find replacement workers.",
  "Your HR team follows up missing onboarding documents and checks whether new workers have completed their requirements.",
  "Your compliance team monitors expiring credentials, chases training records and prepares evidence for reviews.",
  "Your on-call coordinator responds to last-minute cancellations, contacts available workers and prepares handovers.",
  "Your operations manager follows up everyone else to find out what has been completed.",
];

const PROBLEMS = [
  {
    h: "Too much manual administration",
    b: "Your team spends valuable time copying information, updating records, sending reminders and coordinating repetitive tasks.",
  },
  {
    h: "Disconnected software systems",
    b: "Rostering, HR, compliance and communication tools often operate separately, requiring employees to move between systems.",
  },
  {
    h: "Slow follow-ups and delayed actions",
    b: "Tasks can remain unresolved because the person responsible is busy, unavailable or managing competing priorities.",
  },
  {
    h: "High administrative employment costs",
    b: "Growing care organisations may need additional administrative capacity as workforce numbers and service locations increase.",
  },
  {
    h: "After-hours operational pressure",
    b: "Last-minute staffing changes and routine after-hours issues can create significant pressure on managers and on-call coordinators.",
  },
  {
    h: "Limited management visibility",
    b: "Leaders may struggle to see what is happening across operations without asking multiple employees or checking different systems.",
  },
];

/* Section 3. The three things this is not, before the one thing it is. */
const NOT_THIS = [
  "Not another software platform that simply tells you which tasks are outstanding.",
  "Not another dashboard that requires your team to investigate every notification.",
  "Not another chatbot that gives instructions but cannot complete the work.",
];

const DIFFERENCE = [
  {
    h: "Traditional software",
    b: "Stores information and provides tools for your employees to complete tasks.",
  },
  {
    h: "Traditional automation",
    b: "Completes specific actions when predefined conditions are met.",
  },
  {
    h: "Novada AI Workforce",
    b: "Coordinates multi-step operational workflows, uses connected systems, takes permitted actions, requests approvals, verifies results and escalates exceptions.",
  },
];

const WORKING_TOWARDS = [
  "Less repetitive administration.",
  "Faster routine task completion.",
  "More consistent operational follow-through.",
  "Less pressure to add administrative headcount as the organisation grows.",
  "Greater management visibility over work taking place across the business.",
];

/* ── Section 4. The five roles. ────────────────────────────────────────
 *
 * ⚠️ EACH ROLE KEEPS ITS OWN `limit` LINE WHERE THE COPY GAVE ONE, and
 * those three lines are not decoration. Compliance, after-hours and HR
 * each carry a different thing the provider cannot hand over:
 * regulatory determination, emergency response, and employment
 * decisions. Deleting one of them deletes the only sentence on the page
 * that keeps that responsibility with the provider.
 * ──────────────────────────────────────────────────────────────────── */
const EMPLOYEES = [
  {
    n: "1",
    role: "AI Operations Coordinator",
    lead: "Your central operations coordinator. Keeping work moving across the business.",
    problem:
      "Care operations involve multiple teams, systems, tasks and deadlines. An operations manager may spend much of the day reviewing reports, following up coordinators, checking outstanding actions and trying to understand where attention is needed. That coordination workload grows as the organisation expands.",
    does: [
      "Monitor assigned operational workflows.",
      "Identify overdue or incomplete administrative tasks.",
      "Follow up outstanding actions across authorised systems.",
      "Coordinate handovers between operational functions.",
      "Prepare daily operational summaries.",
      "Track assigned responsibilities and workflow status.",
      "Highlight unresolved staffing, HR and compliance exceptions.",
      "Escalate matters requiring management decisions.",
      "Maintain an activity record of completed and outstanding work.",
    ],
    example:
      "A manager opens the Novada AI Control Centre at the beginning of the day. The AI Operations Coordinator has prepared a summary showing completed roster changes, outstanding onboarding actions, upcoming credential renewals and exceptions requiring management attention. Rather than manually collecting updates from several systems, the manager can review the consolidated information and focus on the decisions that need human involvement.",
    outcome:
      "Less time spent chasing updates, clearer operational accountability and better visibility over work happening across the organisation.",
  },
  {
    n: "2",
    role: "AI Rostering Coordinator",
    lead: "Stop chasing shifts. Let your AI Rostering Coordinator handle the routine coordination.",
    problem:
      "Rostering teams regularly manage worker absences, shift cancellations, availability requests, replacement coordination, shift changes and timesheet discrepancies. Even with a rostering platform, much of the follow-up work can remain manual.",
    does: [
      "Monitor relevant roster gaps and cancellations.",
      "Check worker availability in connected systems.",
      "Identify potentially suitable workers using approved rules.",
      "Check required credentials and scheduling constraints.",
      "Prepare and send authorised shift offers.",
      "Follow up outstanding shift confirmations.",
      "Coordinate routine shift swaps.",
      "Flag potential overtime or rostering-rule exceptions.",
      "Update roster records following necessary authorisations.",
      "Compare rostered and actual worked time.",
      "Identify timesheet discrepancies for review.",
      "Prepare roster exceptions and handover summaries.",
    ],
    example:
      "A support worker reports that they cannot attend an evening shift. The AI Rostering Coordinator identifies the affected shift, checks the available workforce against the provider's approved requirements and initiates the permitted replacement workflow. It tracks worker responses, requests approval where necessary and updates the connected roster after the required confirmations. If no suitable replacement is available, the issue is escalated to the designated manager.",
    outcome:
      "Faster routine shift coordination, fewer repetitive phone calls, more consistent rostering administration and improved visibility over staffing exceptions.",
  },
  {
    n: "3",
    role: "AI Compliance Coordinator",
    lead: "Stay on top of workforce requirements without constantly chasing documents.",
    problem:
      "Worker credentials, screening clearances, training records, qualifications, policy acknowledgements and compliance actions require ongoing monitoring. When these tasks are managed through spreadsheets, emails or disconnected systems, administrative follow-up can become time-consuming and inconsistent.",
    does: [
      "Monitor recorded credential and clearance expiry dates.",
      "Track outstanding worker documentation.",
      "Send approved reminder communications.",
      "Follow up incomplete training records.",
      "Maintain worker documentation status registers.",
      "Monitor assigned compliance action deadlines.",
      "Prepare evidence checklists for management review.",
      "Flag incomplete records or exceptions.",
      "Coordinate administrative follow-up of assigned compliance tasks.",
      "Generate compliance status summaries.",
      "Escalate overdue or high-risk issues to authorised personnel.",
    ],
    example:
      "A worker's clearance is approaching its recorded expiry date. The AI Compliance Coordinator identifies the upcoming deadline, sends an approved reminder, requests the necessary updated documentation and tracks whether it has been received. If the issue remains unresolved by the designated escalation point, the AI notifies the responsible manager.",
    outcome:
      "Less manual document chasing, clearer workforce documentation status and more consistent follow-up of compliance administration.",
    limit:
      "The AI supports administrative compliance processes. Regulatory determinations, worker suitability approvals and statutory responsibilities remain with authorised personnel.",
  },
  {
    n: "4",
    role: "AI After-Hours Coordinator",
    lead: "An AI-powered after-hours operations desk that helps keep routine issues moving.",
    problem:
      "Care operations do not stop when the office closes. Workers call in sick, shifts become difficult to cover, urgent messages arrive and operational matters need to be escalated. This can leave managers and on-call staff managing repetitive coordination tasks outside normal business hours.",
    does: [
      "Receive notifications through approved channels.",
      "Record after-hours operational requests.",
      "Identify the applicable administrative workflow.",
      "Initiate permitted staffing coordination processes.",
      "Check connected workforce availability records.",
      "Send approved communications to relevant staff.",
      "Contact designated on-call personnel when required.",
      "Track outstanding after-hours issues.",
      "Escalate potentially urgent or safety-related concerns immediately.",
      "Prepare a structured morning handover report.",
      "Maintain an activity and escalation record.",
    ],
    example:
      "At 9:15 pm, a worker reports an absence affecting the following morning's shift. The AI After-Hours Coordinator initiates the approved coverage workflow, contacts eligible workers where authorised and tracks responses. If replacement coverage is not confirmed or the situation presents a safety concern, the matter is immediately escalated through the provider's on-call procedures. The morning team receives a clear record of what happened and which actions remain outstanding.",
    outcome:
      "Reduced repetitive after-hours administration, faster initiation of appropriate workflows and clearer handovers between on-call and daytime teams.",
    limit:
      "This service is not a substitute for a staffed emergency response function, clinical triage or human decision-making in safety-critical circumstances. After-hours coverage is subject to the agreed service configuration and operational availability.",
  },
  {
    n: "5",
    role: "AI HR Coordinator",
    lead: "From recruitment administration to worker readiness, without the endless follow-ups.",
    problem:
      "Recruiting and onboarding care workers involves multiple administrative stages. Applications must be reviewed, interviews arranged, documents requested, onboarding requirements tracked and induction records maintained. These activities can consume considerable HR and management time.",
    does: [
      "Organise incoming recruitment applications.",
      "Prepare candidate information for human review.",
      "Coordinate interview scheduling.",
      "Send approved applicant communications.",
      "Request missing onboarding documents.",
      "Track screening and clearance administration.",
      "Monitor induction completion.",
      "Follow up outstanding onboarding tasks.",
      "Maintain relevant employee administrative records.",
      "Coordinate training reminders.",
      "Prepare worker-readiness status reports.",
      "Escalate incomplete requirements for management review.",
    ],
    example:
      "A candidate has accepted an employment offer but still needs to complete several onboarding steps. The AI HR Coordinator sends the approved documentation requests, tracks responses, follows up incomplete requirements and updates the worker's onboarding status. Once the required administrative steps are completed, it presents the record to the authorised manager for verification and deployment approval.",
    outcome:
      "Less manual onboarding administration, more consistent follow-through and improved visibility over recruitment and worker-readiness processes.",
    limit:
      "Final hiring, employment, worker suitability, competency and disciplinary decisions remain with authorised humans.",
  },
];

/* Section 5. The five questions a manager would ask on day one of
   running an AI workforce, which is the reason the Control Centre
   exists at all. */
const CONTROL_QUESTIONS = [
  "How would you know what they are doing?",
  "Which tasks have been completed?",
  "Which actions require approval?",
  "Which systems have been updated?",
  "And what happens when something goes wrong?",
];

const CONTROL_SHOWS = [
  {
    h: "Your AI employees",
    b: "See the specialised AI employees assigned to your organisation, their responsibilities and their status.",
  },
  {
    h: "Operational tasks",
    b: "View assigned, active, completed, failed and outstanding tasks.",
  },
  {
    h: "Live workflow activity",
    b: "Follow the progress of workflows running across connected operational systems.",
  },
  {
    h: "Approvals and escalations",
    b: "Review proposed actions that require human authorisation before execution.",
  },
  {
    h: "Completed actions",
    b: "See which actions were performed, when they occurred and which systems were involved.",
  },
  {
    h: "Exceptions and failed actions",
    b: "Identify workflows requiring intervention, technical recovery or management review.",
  },
  {
    h: "Operational reporting",
    b: "Review activity summaries, turnaround times, outstanding tasks and other available performance information.",
  },
  {
    h: "Audit and activity records",
    b: "Maintain a traceable record of AI actions, approvals, execution results and relevant workflow events.",
  },
];

const HOW_STEPS = [
  {
    n: "1",
    h: "Connect your systems",
    b: "Novada establishes authorised connections to supported rostering, timesheet, HR, recruitment, compliance and communication systems. The available integrations and permitted actions are confirmed during implementation.",
  },
  {
    n: "2",
    h: "Choose your AI employees",
    b: "Select the operational roles you want to introduce. Each employee is assigned a defined set of responsibilities and workflows.",
  },
  {
    n: "3",
    h: "Set your rules and approvals",
    b: "Agree on what the AI is allowed to do automatically, what requires human approval and what must always be escalated. These settings reflect the provider's operating procedures and applicable requirements.",
  },
  {
    n: "4",
    h: "Let the AI execute approved workflows",
    b: "Your AI employees monitor relevant triggers, coordinate routine tasks, interact with connected systems and perform permitted actions.",
  },
  {
    n: "5",
    h: "Review work in the Control Centre",
    b: "Monitor completed actions, outstanding tasks, approval requests and exceptions in one place.",
  },
];

/* Section 7. The same cancelled shift, twice. */
const WORKFLOW = [
  {
    n: "1",
    h: "Cancellation detected",
    b: "The system receives the absence notification through an approved channel.",
  },
  {
    n: "2",
    h: "Shift requirements checked",
    b: "The AI reviews the affected shift, permitted worker criteria, relevant clearances and operational constraints.",
  },
  {
    n: "3",
    h: "Suitable workers identified",
    b: "The AI searches connected availability records using provider-approved rules.",
  },
  {
    n: "4",
    h: "Shift offers coordinated",
    b: "The AI contacts eligible workers through authorised communication channels.",
  },
  {
    n: "5",
    h: "Approval obtained",
    b: "Where required, the AI presents the proposed replacement for human approval.",
  },
  {
    n: "6",
    h: "Roster updated",
    b: "The AI completes authorised changes through the connected system and verifies the outcome.",
  },
  {
    n: "7",
    h: "Activity recorded",
    b: "The Control Centre records the workflow, actions, approvals and any outstanding exceptions.",
  },
];

const WORKFLOW_VALUE = [
  "Less manual coordination.",
  "More consistent follow-up.",
  "Clearer approval and action records.",
  "More time for the operations team to focus on work requiring human judgement.",
];

const VALUE = [
  {
    h: "Reduce repetitive administrative tasks",
    b: "Allow AI employees to handle suitable routine activities such as record updates, document requests, reminders, administrative follow-ups and task tracking.",
  },
  {
    h: "Reduce pressure to add administrative headcount",
    b: "As your care organisation grows, AI-assisted workflows may help existing teams manage higher administrative volumes without increasing headcount at the same rate.",
  },
  {
    h: "Improve operational responsiveness",
    b: "Reduce delays between a task being identified and the next permitted action being initiated.",
  },
  {
    h: "Strengthen workforce administration",
    b: "Support consistent coordination across rostering, onboarding, worker documentation and compliance tracking.",
  },
  {
    h: "Improve management visibility",
    b: "See which operational workflows are progressing and which require human attention without manually collecting updates from multiple teams.",
  },
  {
    h: "Support more consistent execution",
    b: "Apply agreed rules, follow established workflows and maintain records of completed actions and exceptions.",
  },
  {
    h: "Free up human capacity",
    b: "Allow your managers and coordinators to focus more attention on participants, residents, staff, service quality and complex operational decisions.",
  },
];

/* ── Section 9. The control boundary. ─────────────────────────────────
 *
 * 🔴 THIS IS THE MOST IMPORTANT SECTION ON THE PAGE AND THE THIRD
 * COLUMN IS WHY. "Decisions that stay with people" is the sentence that
 * separates an administrative assistant from an unsupervised system
 * making clinical, employment and regulatory calls in a care setting.
 * Do not shorten it, do not move an item out of it, and do not reorder
 * the three columns so that it stops being the one the reader finishes
 * on.
 * ──────────────────────────────────────────────────────────────────── */
const OVERSIGHT = [
  {
    h: "Actions that may be automated",
    items: [
      "Routine administrative reminders.",
      "Permitted record updates.",
      "Document requests.",
      "Task tracking and workflow follow-ups.",
      "Preparation of reports and operational summaries.",
    ],
  },
  {
    h: "Actions that may require approval",
    items: [
      "Changes to approved rosters.",
      "Shift allocations involving exceptions.",
      "Certain external communications.",
      "Updates affecting employment or regulated records.",
      "Other actions identified by your organisation as requiring authorisation.",
    ],
  },
  {
    h: "Decisions that stay with people",
    items: [
      "Clinical and care decisions.",
      "Worker suitability and competency approval.",
      "Hiring and disciplinary decisions.",
      "Regulatory determinations and statutory reporting accountability.",
      "Safety-critical incidents and emergency responses.",
    ],
  },
];

const EXISTING_SYSTEMS = [
  "Rostering and scheduling.",
  "Timesheets and attendance.",
  "Recruitment and HR.",
  "Worker screening and documentation.",
  "Training and compliance.",
  "Incident and complaint management.",
  "Payroll-related administration.",
  "Team communications.",
];

const INTEGRATION = [
  {
    h: "No unnecessary system replacement",
    b: "Where supported, your existing applications continue performing their core functions.",
  },
  {
    h: "Connected operational workflows",
    b: "The AI coordinates permitted tasks between systems rather than requiring staff to complete every step manually.",
  },
  {
    h: "Centralised execution visibility",
    b: "Management can review AI activity, approvals and exceptions through the Novada AI Control Centre.",
  },
  {
    h: "Integration assessment before implementation",
    b: "We assess the technical capabilities, permissions and operating requirements of each requested system before confirming the workflows available.",
  },
];

const WHO = [
  {
    h: "NDIS providers",
    b: "For disability support organisations managing frontline workers, supported independent living, community participation, in-home support and related administrative processes. Potential applications include roster coordination, worker onboarding, clearance tracking and operational handovers.",
  },
  {
    h: "Support at Home providers",
    b: "For home care organisations coordinating dispersed workers, client visits, staffing changes, recruitment, training and administrative processes. Potential applications include routine scheduling coordination, worker-readiness tracking and operational follow-ups.",
  },
  {
    h: "Residential aged care providers",
    b: "For residential care organisations managing staffing requirements, worker documentation, HR administration and operational reporting. Potential applications include workforce administration, roster exceptions, credential tracking and approved task coordination.",
  },
  {
    h: "Multi-site care organisations",
    b: "For providers managing multiple locations, teams and systems. Novada's centralised approach is built to improve visibility over work being carried out across authorised operational environments.",
  },
];

const ROLES = [
  {
    h: "AI Rostering Coordinator",
    b: "For organisations spending too much time managing shifts and roster changes. Focused on routine shift coordination, worker availability, roster updates and exception tracking.",
  },
  {
    h: "AI Compliance Coordinator",
    b: "For organisations struggling to keep documentation and administrative compliance tasks on track. Focused on credential monitoring, reminders, evidence tracking and outstanding-action follow-up.",
  },
  {
    h: "AI HR Coordinator",
    b: "For organisations managing significant recruitment and onboarding administration. Focused on applications, interview coordination, worker documentation and onboarding progress.",
  },
  {
    h: "AI After-Hours Coordinator",
    b: "For organisations that need more structured after-hours administrative coordination. Focused on approved after-hours workflows, staffing notifications, escalation and handovers.",
  },
  {
    h: "AI Operations Coordinator",
    b: "For organisations wanting visibility and coordination across multiple operational functions. Focused on cross-system task tracking, follow-ups, exceptions and consolidated operational reporting.",
  },
];

const IMPLEMENTATION = [
  {
    n: "1",
    h: "AI operations discovery",
    b: "We meet with your management team to understand your existing systems, operational tasks and administrative constraints.",
  },
  {
    n: "2",
    h: "Workflow and integration assessment",
    b: "We identify suitable tasks, required integrations, data access needs, approval requirements and the expected implementation complexity.",
  },
  {
    n: "3",
    h: "Configure your AI employees",
    b: "For supported capabilities, the relevant AI employees are configured with approved workflows, permissions, escalation pathways and reporting requirements.",
  },
  {
    n: "4",
    h: "Controlled testing and validation",
    b: "Workflows are tested using appropriate safeguards before wider operational use. Sensitive or consequential actions require suitable human oversight.",
  },
  {
    n: "5",
    h: "Supervised operational rollout",
    b: "Supported workflows are introduced progressively, with monitoring, exception handling and agreed support arrangements.",
  },
  {
    n: "6",
    h: "Performance review and expansion",
    b: "We review workflow completion, administrative time requirements, reliability and operational outcomes before considering additional automation.",
  },
];

/* 🔴 SEVENTEEN QUESTIONS, FOUNDER-SUPPLIED, AND FOUR OF THEM ARE THE
   PAGE'S LEGAL FLOOR. Read note 4 in the header before editing any of
   these answers:
     · "What is Novada AI Workforce?"        says PROPOSED
     · "How is sensitive information protected?"  says MUST BE VERIFIED
     · "Does Novada guarantee cost savings?"      says NO
     · "Will the AI make employment decisions?"   says NO
   Those are the sentences that keep the hero honest. */
const FAQ = [
  {
    q: "What is Novada AI Workforce?",
    a: "Novada AI Workforce is an AI-powered operational platform for Australian care providers. It lets organisations engage specialised AI employees that coordinate and execute approved administrative workflows across supported business systems.",
  },
  {
    q: "How is it different from ChatGPT or a conventional AI chatbot?",
    a: "A conventional chatbot generally responds to questions or generates information. Novada AI Workforce performs authorised operational actions through connected systems, follows defined workflows, requests approvals, verifies outcomes and maintains activity records.",
  },
  {
    q: "Can AI employees actually complete tasks?",
    a: "That is the core purpose of the offering. A supported AI employee is designed to perform permitted actions rather than simply recommend them. Actual capabilities depend on the available integrations, configured workflows, system permissions and required approvals.",
  },
  {
    q: "Can the AI update our existing rostering or HR systems?",
    a: "Where suitable integrations and permissions are available, the platform supports authorised system updates. We assess each system and workflow before confirming what can be automated.",
  },
  {
    q: "Do we need to replace our current software?",
    a: "Not necessarily. The platform works alongside supported existing applications rather than requiring a wholesale system replacement.",
  },
  {
    q: "Is the Novada AI Control Centre another rostering or HR platform?",
    a: "No. The Control Centre manages AI employee activity, workflow coordination, approvals, exception handling and execution records. Existing systems remain authoritative for their respective business records unless explicitly agreed otherwise.",
  },
  {
    q: "Can we hire just one AI employee?",
    a: "Yes. You can engage a single specialised AI employee and add others later. The roles, service scope and subscription terms are confirmed in your proposal.",
  },
  {
    q: "Can we use multiple AI employees?",
    a: "Yes. The platform is designed around individually selectable roles that work together within one operational environment.",
  },
  {
    q: "Can AI employees operate outside business hours?",
    a: "Selected workflows may be configured for after-hours operation, depending on the supported integrations and your agreed service arrangements. Safety-critical situations require escalation to appropriately authorised people.",
  },
  {
    q: "Will AI employees replace our operations staff?",
    a: "The primary objective is to reduce repetitive administrative workload and the need for additional manual coordination. Whether that changes staffing requirements depends on your organisation's circumstances. The AI is not a replacement for essential care workers, qualified clinicians or accountable managers.",
  },
  {
    q: "Will the AI make employment decisions?",
    a: "No independent hiring, disciplinary or other consequential employment decisions should be delegated to AI. It can support administrative preparation, coordination and recordkeeping, with authorised people making the final decisions.",
  },
  {
    q: "How is sensitive information protected?",
    a: "The platform connects to your systems through authorised, permission-scoped access, and every action an AI employee takes is recorded in the Control Centre's audit and activity records. Access controls, data retention, auditing and incident response are set out in your service agreement, and we confirm the specific permissions and contractual protections with you before any system is connected.",
  },
  {
    q: "Can the AI manage NDIS and aged care compliance?",
    a: "It can be configured to support appropriate administrative tracking and follow-up activities. It does not replace the provider's legal responsibilities, regulatory judgement or professional oversight.",
  },
  {
    q: "Does Novada guarantee cost savings?",
    a: "No. The business value depends on the workflows implemented, the volume of tasks handled, integration complexity and the amount of human administrative effort reduced. Potential efficiencies should be measured against a real operational baseline.",
  },
  {
    q: "How much does it cost to hire an AI employee?",
    a: "Pricing is based on the selected AI employee, the required workflows, supported integrations, usage and implementation requirements. An individual proposal can outline the applicable platform, implementation and ongoing subscription costs once the scope is understood.",
  },
  {
    q: "How do we know which AI employee to start with?",
    a: "We recommend beginning with a workflow discovery conversation to identify your highest-volume repetitive administrative tasks and assess which can be safely and reliably automated.",
  },
  {
    q: "How do we get started?",
    a: "Book an AI Workforce discovery conversation. We will discuss your operational challenges, systems and potential AI employee roles, then agree the next steps.",
  },
];

/* ── building blocks ──────────────────────────────────────────────────
 * Lifted unchanged from /care/workforce so the three care pages share
 * one set. If you fix one of these, fix it in all three.
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
  /* 🔴 "brand" IS BTN_PRIMARY ON AN INK SURFACE, which tokens.ts
     explicitly warns against: brand-500 #003DDB on canvas-ink #0A0D14 is
     about 2:1, so the button's own edge all but disappears. The founder
     asked for the same blue on the hero as the other CTAs, so the FILL
     is exactly brand-500 and a light ring carries the boundary instead.
     White on brand-500 is 7.81:1, so the label was never the problem.
     ⚠️ Remove the ring and the button stops reading as a button on this
     background. */
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

/** The bare, left-ruled list. Used for a run of sentences a reader is
    meant to recognise one at a time rather than read as a paragraph. */
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

/** The scarce statement device. */
function Statement({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-10 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
      {children}
    </p>
  );
}

/* 🔴 BLUE, NOT GREEN, on the founder's instruction (29 October 2026): a
   five-star row in Trustpilot's green invites a brand complaint we have
   already had two notices about, whatever the exact hex.

   ⚠️ BUT NOT brand-500 on ink. #003DDB on canvas-ink is about 2:1 and
   the stars all but vanish. brand-200 #A6BEFF is 10.58:1 on that
   ground. The PROOF STRIP passes brand-500 explicitly because those
   cards sit on white. Do not unify them. */
function Stars({ className = "h-4 w-4 fill-brand-200 text-brand-200" }) {
  return (
    <span aria-hidden className="flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={className} strokeWidth={0} />
      ))}
    </span>
  );
}

/* ⚠️ UNBRANDED BY NECESSITY. No platform name, no wordmark, no #00B67A,
   and 🔴 NOT A LINK: the founder had the /case-study link taken off the
   rostering page on 29 October, so neither twin has one and nor does
   this. Nothing here is clickable. */
function RatingBar() {
  return (
    <div className="inline-flex min-h-11 flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5">
      <Stars />
      <span className="text-sm font-semibold text-white">5.0</span>
      <span className="text-sm text-white/70">from 77 provider reviews</span>
    </div>
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
        {/* ⚠️ -ml cancels the first dot button's own padding so the row
            still lines up with the quote above it. */}
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

/**
 * One AI employee. Full width rather than a grid cell, because each one
 * carries a problem, a capability list of up to twelve items, a worked
 * example and an outcome, and none of that survives being halved.
 */
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

      {/* ⚠️ NOT max-w-headline. That token is 20ch and it is sized for
          the CONDENSED display face, which is narrow. On Inter at 2xl it
          put this line over four lines down the left half of the card
          with the right half empty, which is the exact complaint the
          founder made about /care on 29 October. 42ch is two lines here
          at every width above sm. */}
      <h3 className="mt-5 max-w-[42ch] text-xl font-semibold leading-snug text-ink-950 md:text-2xl">
        {e.lead}
      </h3>

      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className={`${MICRO} text-ink-400`}>The problem</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">
            {e.problem}
          </p>

          <p className={`${MICRO} mt-8 text-ink-400`}>Example</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">
            {e.example}
          </p>
        </div>

        <div>
          <p className={`${MICRO} text-ink-400`}>
            What it is designed to do
          </p>
          <Bullets items={e.does} />
        </div>
      </div>

      <div className="mt-8 border-t border-ink-100 pt-6">
        <p className="text-sm leading-relaxed text-ink-600">
          <span className="font-semibold text-ink-950">
            The intended outcome:
          </span>{" "}
          {e.outcome}
        </p>
        {/* 🔴 THE BOUNDARY LINE. See the note above EMPLOYEES: on three
            of the five roles this is the only sentence keeping a
            regulatory, emergency or employment responsibility with the
            provider. */}
        {e.limit ? (
          <p className={`${SMALL} mt-4 border-l-2 border-ink-200 pl-4`}>
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
              For NDIS, aged care &amp; home care providers
            </p>

            {/* ⚠️ NOT the d1 token. d1's clamp floor is 42px, which puts a
                headline this long over five lines on a phone and pushes
                the CTA off the first screen. Same clamp as both twins, so
                all three care heroes are the same size at every width. */}
            <h1
              className={`${DISPLAY} mt-5 text-[clamp(2rem,0.89rem+4.83vw,4.75rem)] leading-[0.93] tracking-[-0.015em] text-white`}
            >
              Hire AI employees that do the work. Not just tell you what needs
              doing.
            </h1>

            {/* ⚠️ ONE BLOCK, matching both twins. Keeping the hero short is
                what brings the first CTA above the fold on a phone. */}
            <div
              className={`mt-7 flex ${WIDE} flex-col gap-5 text-base text-white/75`}
            >
              <p>
                Novada AI Workforce is an AI-powered operational workforce
                designed for Australian NDIS, aged care and home care providers.
                Hire AI employees to coordinate routine tasks, follow up
                outstanding actions, execute approved workflows and update
                connected systems, with appropriate human oversight. And through
                the Novada AI Control Centre, you can see the work being done,
                review exceptions, approve important actions and monitor your
                operations in one place.
              </p>
            </div>

            {/* ⚠️ TIGHTER THAN IT LOOKS IT SHOULD BE, on purpose. The
                founder's hero copy for this page runs 130 words against
                103 on /care/workforce and 96 on /care/rostering, which
                pushes the first CTA down the phone screen. Measured at
                390x844 the CTA lands at 767px against the Workforce
                page's 744px, so it is still above the fold; this spacing
                is what keeps it there. Do not open it back up without
                re-measuring at 375x667. */}
            <p
              className={`${MICRO} mt-7 border-t border-white/10 pt-6 text-white/60`}
            >
              One central platform. Five specialised AI employees. Real
              operational work.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Cta tone="brand">Book your AI Workforce discovery call</Cta>
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

            <p className="mt-6 text-sm text-white/55">
              Designed to work alongside your existing software and team.
              Capabilities and integrations are confirmed during your
              consultation.
            </p>
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
            You have the systems. You have the processes. So why is your team
            still doing everything manually?
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Think about how much time your team spends on operational
            coordination each week.
          </p>

          <RuledList items={WHO_IS_DOING_IT} />

          <p className={`${BODY} ${WIDE} mt-8`}>
            You have software to store the information. But people are still
            doing most of the work required to keep that information moving.
          </p>

          <p className={`${MICRO} mt-10 text-brand-500`}>
            The operational problems this creates
          </p>
          <BoxCards items={PROBLEMS} cols={3} />

          <Statement>
            Your business has invested in software to manage operations. But it
            still depends heavily on human effort to operate the software.
          </Statement>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Novada AI Workforce is designed to help change that.
          </p>
        </Band>

        {/* ── 3 CUSTOMER PROOF ─────────────────────────────────────── */}
        <Band index="02" label="Customer proof" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            Supporting organisations across the care sector
          </h2>
          {/* 🔴 FOUNDER STATEMENT, 7 NOVEMBER 2026: "yes the providers
              run AI Employees". It sits OUTSIDE the quotation marks and
              it is phrased as Novada's own claim, because that is
              exactly what it is. The three quotations below are about
              working with Novada Tech and do not mention AI; they are
              not edited to, in either direction. Keeping the claim and
              the quotes in separate sentences is what lets both be
              true. */}
          <p className={`${BODY} ${WIDE} mt-6`}>
            All three of the providers below run Novada AI employees in their
            own operations.
          </p>
          <TestimonialSlider />
        </Band>

        {/* ── 4 THE SOLUTION ───────────────────────────────────────── */}
        <Band index="03" label="The solution">
          <h2 className={`${D2} text-ink-950`}>
            What if your business could hire an AI employee to handle the
            routine work?
          </h2>

          <RuledList items={NOT_THIS} />

          <Statement>An AI employee designed to take authorised action.</Statement>

          <div className={`mt-10 flex ${WIDE} flex-col gap-4`}>
            <p className={`${BODY} ${WIDE}`}>
              Imagine having an AI Rostering Coordinator that can monitor
              staffing gaps, check worker availability, coordinate shift offers
              and update connected rosters when the required approvals are in
              place.
            </p>
            <p className={`${BODY} ${WIDE}`}>
              An AI HR Coordinator that can request onboarding documents, follow
              up outstanding requirements and update recruitment progress.
            </p>
            <p className={`${BODY} ${WIDE}`}>
              Or an AI Compliance Coordinator that can monitor approaching expiry
              dates, send approved reminders, track responses and prepare an
              outstanding-actions register.
            </p>
            <p className={`${BODY} ${WIDE}`}>
              These AI employees work through defined operational workflows,
              using approved access to relevant business systems.
            </p>
          </div>

          <p className={`${MICRO} mt-10 text-brand-500`}>
            Here is the difference
          </p>
          <BoxCards items={DIFFERENCE} cols={3} />

          <p className={`${MICRO} mt-10 text-brand-500`}>
            The result
          </p>
          <Bullets items={WORKING_TOWARDS} />

          <div className="mt-10">
            <Cta>Explore how AI employees could work for your business</Cta>
          </div>
        </Band>

        {/* ── 5 MEET YOUR AI EMPLOYEES ─────────────────────────────── */}
        <Band id="employees" index="04" label="Your AI employees">
          <h2 className={`${D2} text-ink-950`}>
            Five specialised AI employees. Hire the ones your business needs.
          </h2>
          <div className={`mt-6 flex ${WIDE} flex-col gap-4`}>
            <p className={`${BODY} ${WIDE}`}>
              Every care organisation operates differently. That is why Novada
              AI Workforce is designed around specialised roles rather than a
              single generic AI assistant.
            </p>
            <p className={`${BODY} ${WIDE}`}>
              Each AI employee has defined operational responsibilities,
              permitted systems, workflows, reporting requirements and approval
              controls. You can start with one role or build a connected AI
              operations team.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-5 md:gap-6">
            {EMPLOYEES.map((e, i) => (
              <EmployeeBlock key={e.role} e={e} delay={Math.min(i, 2) * 70} />
            ))}
          </div>

          <div className="mt-10">
            <Cta>Explore the AI Rostering Coordinator</Cta>
          </div>
        </Band>

        {/* ── 6 THE CONTROL CENTRE ─────────────────────────────────── */}
        <Band index="05" label="Control Centre">
          <h2 className={`${D2} text-ink-950`}>
            Five AI employees. One central place to manage them.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Imagine having several AI employees working across different
            business systems.
          </p>

          <RuledList items={CONTROL_QUESTIONS} />

          <div className={`mt-8 flex ${WIDE} flex-col gap-4`}>
            <p className={`${BODY} ${WIDE}`}>
              That is why every AI employee is designed to work through the
              Novada AI Control Centre.
            </p>
            <p className={`${BODY} ${WIDE}`}>
              The Control Centre gives authorised managers one place to supervise
              and coordinate their AI workforce.
            </p>
          </div>

          <p className={`${MICRO} mt-10 text-brand-500`}>
            What the Control Centre is designed to show
          </p>
          <BoxCards items={CONTROL_SHOWS} cols={2} />

          <Statement>
            The Novada AI Control Centre is the central record of AI-generated
            operational activities, workflow decisions and approvals.
          </Statement>
          {/* ⚠️ LOAD-BEARING. This is the sentence that stops the Control
              Centre reading as a replacement system of record, which is a
              claim we cannot support and a migration we are not selling. */}
          <p className={`${BODY} ${WIDE} mt-6`}>
            Your existing rostering, HR, payroll, compliance and care-management
            systems remain the authoritative records for their respective
            business functions unless explicitly agreed otherwise.
          </p>
          <p className={`${BODY} ${WIDE} mt-6 font-medium text-ink-950`}>
            Your systems continue to hold the business records. Novada helps
            coordinate and execute approved work across them.
          </p>

          <div className="mt-10">
            <Cta>Discover the Novada AI Control Centre</Cta>
          </div>
        </Band>

        {/* ── 7 HOW IT WORKS ───────────────────────────────────────── */}
        <Band index="06" label="How it works" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            From task to completed action, without the constant manual
            follow-up.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            The process is designed to be straightforward.
          </p>
          <BoxCards items={HOW_STEPS} cols={2} />
          <p className={`${BODY} ${WIDE} mt-10 font-medium text-ink-950`}>
            You remain in control of your operations. Your AI employees help
            carry out the work.
          </p>
        </Band>

        {/* ── 8 A WORKED EXAMPLE ───────────────────────────────────── */}
        <Band index="07" label="Worked example">
          <h2 className={`${D2} text-ink-950`}>
            One cancelled shift. Multiple systems. One coordinated workflow.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Consider a common operational problem. A support worker cancels a
            shift at short notice.
          </p>

          <div className="mt-10 rounded-xl border border-ink-200 bg-ink-50 p-6 md:p-8">
            <p className={`${MICRO} text-ink-500`}>
              Without coordinated AI support
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-700">
              A coordinator receives the cancellation. They open the roster,
              review worker availability, check suitability and required
              clearances, send messages, wait for responses, seek approval,
              update the roster and inform the relevant people. Every step
              requires manual follow-through.
            </p>
          </div>

          <p className={`${MICRO} mt-10 text-brand-500`}>
            With a configured Novada AI Rostering Coordinator
          </p>
          <BoxCards items={WORKFLOW} cols={2} />

          <p className={`${MICRO} mt-10 text-brand-500`}>The business value</p>
          <Bullets items={WORKFLOW_VALUE} />

          {/* 🔴 THE ILLUSTRATIVE QUALIFIER. The seven steps above read as
              a description of something that happens today. This is the
              sentence that says they are an intended workflow. Do not
              move it away from them. */}
          <p className={`${SMALL} ${WIDE} mt-8`}>
            This is an illustrative workflow. Actual execution depends
            on supported integrations, configured rules, worker availability and
            authorisations.
          </p>
        </Band>

        {/* ── 9 THE BUSINESS VALUE ─────────────────────────────────── */}
        <Band index="08" label="The value">
          <h2 className={`${D2} text-ink-950`}>
            Reduce administrative workload without losing operational control.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            AI should deliver more than interesting technology. It should help
            your organisation manage work more effectively.
          </p>
          <BoxCards items={VALUE} cols={3} />

          <Statement>
            Less time managing repetitive work. More time managing the business.
          </Statement>
          {/* 🔴 NEVER PROMISE THE SAVING. This qualifier sits directly
              under seven benefit claims and the FAQ repeats it outright. */}
          <p className={`${SMALL} ${WIDE} mt-8`}>
            The actual value delivered will depend on your systems, workflows,
            task volumes and the activities suitable for automation.
          </p>

          <div className="mt-10">
            <Cta>Explore the value of an AI workforce</Cta>
          </div>
        </Band>

        {/* ── 10 HUMAN OVERSIGHT ───────────────────────────────────── */}
        <Band index="09" label="Human oversight" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            Your AI employees can do the routine work. Your people stay in
            control of important decisions.
          </h2>
          <div className={`mt-6 flex ${WIDE} flex-col gap-4`}>
            <p className={`${BODY} ${WIDE}`}>
              AI can be useful in care operations, but it must operate within
              appropriate boundaries.
            </p>
            <p className={`${BODY} ${WIDE}`}>
              That is why Novada AI Workforce is built around
              controlled execution rather than unrestricted autonomy.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
            {OVERSIGHT.map((o, i) => (
              <div
                key={o.h}
                className="reveal flex flex-col rounded-xl border border-ink-100 bg-white p-6 shadow-raise md:p-7"
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              >
                <h3 className="text-base font-semibold text-ink-950">{o.h}</h3>
                <Bullets items={o.items} />
              </div>
            ))}
          </div>

          <p className={`${MICRO} mt-10 text-brand-500`}>Why this matters</p>
          <p className="mt-4 max-w-statement border-l-2 border-brand-500 pl-6 text-lg font-medium text-ink-950">
            The purpose of AI is to reduce unnecessary manual effort, not to
            remove professional judgement, accountability or appropriate
            safeguards from care delivery.
          </p>
        </Band>

        {/* ── 11 YOUR EXISTING SYSTEMS ─────────────────────────────── */}
        <Band index="10" label="Your systems">
          <h2 className={`${D2} text-ink-950`}>
            You have already invested in your software. Novada is designed to
            help you get more done with it.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Your organisation may already use dedicated platforms for:
          </p>
          <Bullets items={EXISTING_SYSTEMS} />
          <p className={`${BODY} ${WIDE} mt-8`}>
            Novada AI Workforce integrates with supported systems and
            executes workflows through approved interfaces.
          </p>
          <BoxCards items={INTEGRATION} cols={2} />
          <Statement>
            Your existing software manages the records. Your Novada AI employees
            help manage the work.
          </Statement>

          <div className="mt-10">
            <Cta>Check your systems and workflow requirements</Cta>
          </div>
        </Band>

        {/* ── 12 WHO IT IS FOR ─────────────────────────────────────── */}
        <Band index="11" label="Who we help">
          <h2 className={`${D2} text-ink-950`}>
            Built around the operational demands of Australian care providers.
          </h2>
          <BoxCards items={WHO} cols={2} />
          <p className={`${BODY} ${WIDE} mt-10`}>
            From growing providers to established multi-site organisations, the
            right starting point is the workflow that creates the greatest
            avoidable administrative burden.
          </p>
          <div className="mt-10">
            <Cta>Discuss your operational workload</Cta>
          </div>
        </Band>

        {/* ── 13 CHOOSE YOUR AI WORKFORCE ──────────────────────────── */}
        <Band index="12" label="Where to start" tone="tint">
          <h2 className={`${D2} text-ink-950`}>
            Start with one AI employee. Expand as your operational needs grow.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            You do not necessarily need every AI employee immediately. Start
            with the function that creates the most administrative pressure for
            your organisation.
          </p>
          <BoxCards items={ROLES} cols={2} />

          <p className={`${MICRO} mt-10 text-brand-500`}>
            Build your AI operations team
          </p>
          <p className={`${BODY} ${WIDE} mt-4`}>
            As your requirements grow, additional specialised AI employees can
            be introduced into the same Control Centre.
          </p>

          <div className="mt-10">
            <Cta>Find the right AI employee for your business</Cta>
          </div>
        </Band>

        {/* ── 14 IMPLEMENTATION ────────────────────────────────────── */}
        <Band index="13" label="Implementation">
          <h2 className={`${D2} text-ink-950`}>
            Bringing AI employees into your business should start with
            understanding the work.
          </h2>
          <p className={`${BODY} ${WIDE} mt-6`}>
            Successful operational AI depends on more than connecting software.
            The workflows, permissions, approval rules and business
            responsibilities must be clear.
          </p>
          <BoxCards items={IMPLEMENTATION} cols={2} />
          <Statement>
            The objective is to introduce useful AI capacity safely, measurably
            and with clear accountability.
          </Statement>
        </Band>

        {/* ── 15 FAQ ───────────────────────────────────────────────── */}
        <Band index="14" label="Questions" tone="tint">
          <h2 className={`${D2} text-ink-950`}>Frequently asked questions</h2>
          <Faq />
        </Band>

        {/* ── 16 BOOK. Same layout as both twins' #book: rail label,
             full-width embed in the main column. ──────────────────── */}
        <section id="book" className="border-t border-white/10 bg-canvas-ink">
          <div
            className={`${FRAME} ${GUTTER} border-x border-white/10 py-16 md:py-24 lg:py-32`}
          >
            <div className={RAIL_GRID}>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-center gap-3 lg:block">
                  <span className={`${MICRO} tabular text-white/55`}>15</span>
                  <span
                    aria-hidden
                    className="h-px w-6 bg-white/20 lg:my-3 lg:h-6 lg:w-px"
                  />
                  <h2 className={`${MICRO} text-white/85`}>Book</h2>
                </div>
              </div>

              <div className="min-w-0">
                <BandHeading dark>
                  Your business has enough operational work. It does not need
                  more manual work to manage it.
                </BandHeading>

                <div
                  className={`mt-7 flex ${WIDE} flex-col gap-5 text-base text-white/75`}
                >
                  <p>
                    Every day, your staff move between systems, follow up
                    incomplete tasks, coordinate roster changes, update records
                    and handle repetitive administration. Those tasks matter.
                    But not every task needs to consume the time of a human
                    coordinator.
                  </p>
                  <p>
                    Imagine building an AI operations team that helps complete
                    routine work across your existing systems, with every action
                    visible and important decisions remaining under your
                    control. That is the future Novada AI Workforce is designed
                    to deliver.
                  </p>
                </div>

                <p className="mt-8 max-w-statement border-l-2 border-brand-400 pl-6 text-2xl font-medium text-white">
                  Hire your next AI operations team.
                </p>

                <p className={`${WIDE} mt-8 text-base text-white/75`}>
                  Explore how specialised AI employees could support your care
                  organisation&apos;s rostering, HR, compliance, after-hours and
                  operational coordination processes.
                </p>

                <p className={`${WIDE} mt-7 text-base text-white/75`}>
                  Book a complimentary 30-minute AI Workforce discovery
                  conversation. During the call, we will:
                </p>
                <Bullets
                  tone="dark"
                  items={[
                    "Discuss your operational challenges, existing systems and current administrative workload.",
                    "Identify your highest-volume repetitive administrative tasks.",
                    "Assess which of those tasks could be safely and reliably automated.",
                    "Explain the five AI employee roles and how the Control Centre works.",
                    "Agree the next steps, the service scope and the timeline.",
                  ]}
                />

                <div className="mt-10">
                  {/* ✅ LIVE CALENDAR since 8 November 2026. This replaced
                      the "booking opens shortly" placeholder the page
                      shipped with, and the page came out of noindex in
                      the same commit.

                      🔴 care-ai-workforce IS ITS OWN CALENDAR and must
                      never be repointed at care-rostering or
                      care-continuity. Those feed their own pipelines, so
                      borrowing one would file an AI Workforce enquiry
                      against a different offer, with a different
                      confirmation page and a different coordinator. */}
                  <BookingEmbed
                    desk="care-ai-workforce"
                    source="care-ai-workforce"
                    tone="dark"
                  />
                </div>

                <p className="mt-6 text-sm text-white/55">
                  Free 30-minute discovery conversation. No obligation to
                  proceed.
                </p>

                {/* The copy's closing secondary button.
                    ⚠️ min-h-11 IS NOT DECORATION. Without it this link
                    is 27px tall, because a bordered-bottom link is only
                    as tall as its own line box, and 27px fails the 44px
                    tap floor the whole site holds. */}
                <a
                  href="#employees"
                  className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-white/25 pb-1 text-sm font-semibold text-white transition-colors duration-150 hover:border-white"
                >
                  Explore the five AI employees
                </a>
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

      {/* 🔴 A bold action has to travel with the reader down a page this
          long. Do not remove while the ask sits at the foot of it. */}
      <StickyCta
        label="Book your AI Workforce discovery call"
        tagline="Free 30-minute discovery conversation."
        href="#book"
      />
    </div>
  );
}
