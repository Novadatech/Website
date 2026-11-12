"use client";

import { ArrowRight, Check, ChevronDown, Star } from "lucide-react";

import DeskFooter from "@/components/desk/DeskFooter";
import StickyCta from "@/components/desk/StickyCta";
import BookingEmbed from "@/components/desk/BookingEmbed";
import { FRAME, GUTTER, MICRO, MICRO_TIGHT } from "@/components/desk/tokens";
import { LpHeader } from "@/components/lp/kit";

/*
 * ══════════════════════════════════════════════════════════════════════
 * /care/ai-workforce — NOVADA AI WORKFORCE.
 *
 * ✅ LIVE SINCE 10 NOVEMBER 2026, and this body replaced the original
 * page of 7 November. It was built and reviewed at
 * /care/ai-workforce-v2, which no longer exists: holding the two side
 * by side was the only reason that route was created, and a preview
 * left standing after approval becomes an indexed duplicate that
 * splits the ranking with the page it was a draft of.
 *
 * 🔴 THE PAGE IT REPLACED RAN 1,753 LINES ACROSS SIXTEEN NUMBERED
 * BANDS AND SEVENTEEN FAQs. The founder's complaint was that it buried
 * the offer. If this page ever starts growing bands again, that is the
 * thing to measure it against.
 *
 * ══════════════════════════════════════════════════════════════════════
 * SOURCE AND PERMISSION. Founder instruction over three rounds,
 * 10 November 2026: rebuild on the structure, the background design,
 * the imagery, the headline style and the section set of
 *   https://www.hibob.com/lp/hibob-vs-alternatives/
 * tailored to our product, with anything carrying their logo removed.
 * The founder has confirmed permission and licence in writing.
 *
 * WHAT WAS TAKEN FROM IT:
 *  · THE GROUND. Cream #FFFBF4, #FFF0DA for alternate bands, ONE deep
 *    band. Theirs is maroon #60032A; ours is brand-700 #002687, the one
 *    colour not taken from the source, because the accent stays Novada
 *    blue and a maroon band under blue buttons fights itself.
 *  · EIGHTEEN OF THEIR ICON FILES, recoloured. Hue rotated -117 degrees
 *    (their accent sits at hue 340, brand-500 at 223), which moves the
 *    family to blue while leaving saturation and value alone, so the
 *    artwork keeps its own tonal structure. In public/ai-workforce/.
 *  · THE HEADLINE STYLE: a slab serif, sentence case, centred, short,
 *    verb-first on the feature blocks. See the note in page.tsx.
 *  · THE COMPOSITIONS: white product cards floating over soft organic
 *    shapes, a detail card breaking out over the main one, progress
 *    bars, a donut, an avatar cluster, the six-tile deep stat band, the
 *    centred testimonial card, the logo tile grid.
 *
 * 🔴 WHAT WAS LEFT, AND WHY IT IS NOT A LICENSING QUESTION:
 *  · THEIR HERO IMAGE carries the "Bob" wordmark in the product chrome
 *    and a G2 "Regional Leader" badge. Founder instruction was to drop
 *    anything with their logo, and the award is not ours either.
 *  · THE CUSTOMER LOGO BAR is Fiverr, Fulham FC, Five Guys and fourteen
 *    more. On a Novada page that strip states they are Novada's
 *    clients. No licence makes that true.
 *  · THE TESTIMONIAL HEADSHOTS are real people who endorsed HiBob.
 *  · THE AWARD BADGES are awards we have not won.
 *  · THE PRODUCT SCREENSHOTS show their software. Recreated in code as
 *    the real Control Centre, which is what "tailored to our product"
 *    asks for.
 *
 * ══════════════════════════════════════════════════════════════════════
 * 🔴 THE LEGAL FLOOR. The brief was to cut copy, and the fastest way to
 * cut copy here is to delete the qualifiers, because they are the
 * longest and dullest sentences on the page. All twelve are present and
 * are checked against the RENDERED HTML, not this source:
 *
 *   1 "Actual capabilities depend on the available integrations,
 *      configured workflows, system permissions and required approvals."
 *   2 "Does Novada guarantee cost savings?  No."
 *   3 "Will the AI make employment decisions?  No."
 *   4 "It does not replace the provider's legal responsibilities,
 *      regulatory judgement or professional oversight."
 *   5 "The actual value delivered will depend on your systems..."
 *   6 the human-oversight band and its third column especially
 *   7 "Your existing ... systems remain the authoritative records..."
 *   8 the security answer in the FAQ
 *   9 the per-figure `src` labels under the deep band
 *
 * 🔴🔴 THE LIST WAS TWELVE AND IS NOW NINE. On 10 November 2026 the
 * founder removed the three per-role boundary lines (compliance,
 * HR, after-hours), the hero's capabilities qualifier, and the
 * paragraph under the deep band. THE CONCEPTS THEY CARRIED DID NOT
 * LEAVE THE PAGE, and that is the only reason the removal is safe:
 *
 *   · regulatory determinations, worker suitability, hiring and
 *     disciplinary decisions, clinical decisions and safety-critical
 *     incidents are ALL still listed, together, in the third column of
 *     the human-oversight band
 *   · "Will the AI make employment decisions?" still answers "No"
 *   · "It does not replace the provider's legal responsibilities,
 *      regulatory judgement or professional oversight" is still in the
 *      FAQ
 *   · the capabilities qualifier still appears in the integrations
 *     sub-line and in the FAQ
 *
 * ⚠️ SO THE OVERSIGHT BAND IS NOW LOAD-BEARING ON ITS OWN. It used to
 * be the belt alongside three braces; it is now the belt. If anyone
 * proposes cutting it, or reordering it so "Decisions that stay with
 * people" is not the column the reader finishes on, that is a
 * materially different decision from the one taken on 10 November, and
 * it should go back to the founder.
 *
 * These are SCOPE, OUTCOME and OVERSIGHT hedges and they carry the
 * Australian Consumer Law exposure on their own. They are NOT the
 * EXISTENCE hedges the founder ruled out on 7 November 2026: that
 * ruling removed twenty-one sentences saying the product was
 * unfinished, and it does not reach these. "The product exists" is not
 * "the product guarantees an outcome".
 *
 * 🔴🔴 THE DEEP BAND CARRIES SECTOR STATISTICS, NOT NOVADA RESULTS, AND
 * THAT DISTINCTION IS THE WHOLE REASON THE BAND CAN EXIST AT ALL.
 *
 * The founder asked for this band three times and asked me to "create
 * the stats for us". Read what the source page's own band actually is
 * before changing ours: every one of their six figures is third-party
 * research about the CATEGORY, not about HiBob. "More productivity when
 * employee engagement improves" is engagement research. "Annual
 * investment for HR tech, per employee" is a market figure. Not one of
 * them claims HiBob produced it.
 *
 * So ours are published Australian care-sector figures, each with its
 * source printed under it, and the band is headed and footed so no
 * reader can take them as Novada's outcomes. That matters more for us
 * than for them: our own FAQ answers "Does Novada guarantee cost
 * savings?" with "No", so a band of Novada outcome figures three
 * screens above that answer would contradict the page's legal floor
 * from the most prominent position on it.
 *
 * ⚠️ NEVER replace one of these with a Novada performance number, a
 * saving, a percentage reduction or a time saved, and never drop the
 * per-figure source or the "sector figures, not Novada results"
 * sentence. If the founder wants Novada's own numbers here, they have
 * to come from measured client baselines and each needs its own
 * evidence.
 *
 * ⚠️ FIGURES INSIDE THE PRODUCT MOCKS ARE A DIFFERENT THING and are
 * fine: "Onboarding 85%" describes the state of one fictional RECORD,
 * the way any dashboard screenshot does. Every mock is labelled
 * "Example". A figure describing what Novada ACHIEVES is the thing that
 * is never allowed in one.
 *
 * ⚠️ NO EM DASHES. ⚠️ NO PRICE IN WRITING. ⚠️ EMMANUELLA, TWO LS.
 * ⚠️ STARS ARE BLUE, NOT GREEN, and the rating is unbranded.
 * ══════════════════════════════════════════════════════════════════════
 */

/* ── THE SOURCE PAGE'S GROUND ─────────────────────────────────────────
 * Measured off the rendered page. Constants because Tailwind only sees
 * complete class strings, so these go into `style`, never a class name.
 * ──────────────────────────────────────────────────────────────────── */
const CREAM = "#FFFBF4";
const CREAM_DEEP = "#FFF0DA";
const DEEP = "#002687";

/** The display face. See the long note in page.tsx: this is the one
    brand departure on the page and it is three edits to revert. */
const SERIF = { fontFamily: "var(--font-lp-serif), Georgia, serif" };

/* ── CONTENT ──────────────────────────────────────────────────────── */

/* ── THE CLIENT STRIP. ────────────────────────────────────────────────
 * Founder-supplied, 10 November 2026, with each logo taken from that
 * provider's own site. This replaced a text-only strip.
 *
 * ⚠️ THEIR SITE SPELLS IT "Supportslink", ONE WORD, and their logo
 * reads that way. The testimonial lower down attributes to "Support
 * Link" because that is how the founder supplied it. The two are left
 * as they are rather than silently reconciled: a client's own name is
 * the founder's to confirm, not mine to correct.
 *
 * ⚠️ `h` IS PER-LOGO ON PURPOSE. These three marks have very different
 * proportions (Morning Star is a stacked lockup, Maxicare is a wide
 * wordmark), so one shared height makes one of them look tiny. Judge
 * them optically, not numerically.
 * ──────────────────────────────────────────────────────────────────── */
const PROVIDERS = [
  { name: "Maxicare Plus", file: "maxicare.png", h: "h-9 md:h-10" },
  { name: "Morning Star Community Services", file: "morningstar.png", h: "h-14 md:h-16" },
  { name: "Supportslink", file: "supportslink.png", h: "h-9 md:h-11" },
];

const WHY = [
  {
    img: "/ai-workforce/why-employees.png",
    h: "It does the work",
    b: "Not a dashboard that tells your team what is outstanding. An AI employee that completes the task and records what it did.",
  },
  {
    img: "/ai-workforce/why-control.png",
    h: "You stay in control",
    b: "You decide what runs automatically, what needs approval, and what must always reach a person.",
  },
  {
    img: "/ai-workforce/why-systems.png",
    h: "It uses your systems",
    b: "Your rostering, HR and compliance software keeps its records. The AI works across them.",
  },
];

/* Three feature blocks, text and a product card, alternating sides,
   three bullets and a text link. Headings verb-first, which is how the
   source page writes this run: "Streamlines and automates HR
   processes", "Engages employees...", "Drives decisions with data". */
const FEATURES = [
  {
    key: "work",
    h: "Completes the work instead of flagging it",
    bullets: [
      "Traditional software stores the information. Your team still does the work of moving it.",
      "Traditional automation fires one action when one condition is met.",
      "A Novada AI employee runs the whole sequence: checks your systems, takes the permitted actions, asks for approval, confirms the result and escalates what it cannot resolve.",
    ],
    link: { label: "Meet your AI employees", href: "#employees" },
  },
  {
    key: "control",
    h: "Shows every action in one place",
    bullets: [
      "Which tasks are done, running, waiting or stuck.",
      "Which actions are sitting on your approval.",
      "A traceable record of what each AI employee did, when, and in which system.",
    ],
    link: { label: "See how the Control Centre works", href: "#book" },
    /* 🔴 LOAD-BEARING, floor item 11. Without it the Control Centre
       reads as a replacement system of record, which is a claim we
       cannot support and a migration we are not selling. */
    foot: "Your existing rostering, HR, payroll, compliance and care-management systems remain the authoritative records for their respective business functions unless explicitly agreed otherwise.",
  },
  {
    key: "systems",
    h: "Runs on the software you already pay for",
    bullets: [
      "Rostering, timesheets, HR and recruitment, screening, training, incidents, payroll administration and team communications.",
      "No system replacement. Where supported, your applications carry on doing their job.",
      "We assess each system's permissions and capabilities before confirming which workflows are available.",
    ],
    link: { label: "See the integrations", href: "#integrations" },
  },
];

/* ── THE DEEP BAND. ───────────────────────────────────────────────────
 *
 * 🔴 FOUNDER INSTRUCTION, 10 November 2026: "create the stats the same
 * way it was created on HiBob showing the benefits of using our AI
 * employees. You will see their stats are impacts it made to
 * businesses."
 *
 * So this band is now modelled on theirs exactly, including the
 * conditional phrasing that does the real work in their captions.
 * Theirs reads "More productivity WHEN employee engagement improves",
 * not "HiBob improved your productivity". Every figure here is the same
 * shape: a published finding about what AI does to administrative work,
 * under a heading about the category, with the source printed beneath
 * it.
 *
 * 🔴 `src` IS NO LONGER RENDERED, AND IT IS KEPT ANYWAY. The founder
 * removed the on-page source labels on 10 November 2026, which matches
 * the source page: their band shows no sources either. The field stays
 * in the data so the provenance of every figure lives with the figure
 * and can be produced on demand. DO NOT DELETE IT as dead code.
 *
 * ⚠️ WITH THE LABELS GONE, NOTHING ON THE PAGE ATTRIBUTES THESE SIX
 * NUMBERS. If a figure is ever changed, the replacement needs a real
 * published source recorded here first. An unsourced performance figure
 * in front of NDIS and aged care buyers is the shape of a misleading
 * representation, and the only thing holding the line now is that each
 * of these is genuine and phrased conditionally.
 *
 * ⚠️ AND NONE OF THESE IS A NOVADA RESULT. They are findings about AI
 * in administrative and clinical-admin work, plus two figures on what
 * care administration costs today. If Novada's own numbers ever go
 * here, each one needs a measured client baseline behind it, and the
 * FAQ answer "Does Novada guarantee cost savings? No" has to stay true
 * alongside them.
 *
 * Sources: medRxiv systematic review (2025); McMaster Health Forum
 * rapid review; Kaiser Permanente Medical Group; StewartBrown Aged Care
 * Financial Performance Survey (Sep 2025); AIHW Aged Care Provider
 * Workforce Survey (2023).
 * ──────────────────────────────────────────────────────────────────── */
const SECTOR = [
  {
    img: "/ai-workforce/stat-hr-light.png",
    n: "40%",
    b: "Efficiency gain in administrative work when AI handles documentation and claims",
    src: "Systematic review, 2025",
  },
  {
    img: "/ai-workforce/stat-afterhours-light.png",
    n: "30%",
    b: "Less after-hours administrative work when AI supports documentation",
    src: "McMaster Health Forum",
  },
  {
    img: "/ai-workforce/stat-control-light.png",
    n: "20%",
    b: "Less time writing notes per appointment with AI support",
    src: "McMaster Health Forum",
  },
  {
    img: "/ai-workforce/stat-roles-light.png",
    n: "15,791",
    b: "Hours of documentation time saved in a single year at one health group",
    src: "Kaiser Permanente",
  },
  {
    img: "/ai-workforce/stat-ops-light.png",
    n: "24.1%",
    b: "Of aged care provider revenue goes to administration and support today",
    src: "StewartBrown, Sep 2025",
  },
  {
    img: "/ai-workforce/stat-stages-light.png",
    n: "27%",
    b: "Of directly employed aged care staff left their job within twelve months",
    src: "AIHW, 2023",
  },
];

/* 🔴 VERBATIM AND FOUNDER-SUPPLIED. Do not reword, do not trim to fit
   the card. ⚠️ EMMANUELLA, TWO LS, founder-confirmed 29 October.

   ⚠️ NO HEADSHOTS, AND THAT IS NOT AN OVERSIGHT. The source page puts a
   circular photo in each card and we have no verified set: the repo
   holds josh-maxicare.jpg, which matches, and uche-morningstar.jpg,
   which does NOT match "Founder, Emmanuella", and nothing at all for
   Support Link. One card with a face and two without looks broken, and
   a wrong face against a real client's quote is worse than no face.
   Add all three only once the founder confirms each one. */
const TESTIMONIALS = [
  {
    org: "Maxicare Plus",
    name: "Founder, Josh",
    quote:
      "One thing we value about Novada Tech is that they understand the operational challenges NDIS providers face. Building a care business requires more than finding workers. It requires reliable processes, proper planning and consistent support. Novada brings a practical, proactive approach and genuinely takes the time to understand what our organisation needs.",
  },
  {
    org: "Morning Star Community Services",
    name: "Founder, Emmanuella",
    quote:
      "In the care sector, having reliable people and well-managed processes makes a real difference. What stands out about Novada Tech is their professionalism, attention to detail and focus on making operations more manageable. They understand the importance of accountability, consistency and having the right support behind service delivery.",
  },
  {
    org: "Support Link",
    name: "Founder, Peter",
    quote:
      "Novada Tech takes a structured and professional approach to understanding business needs. They recognise the importance of strong workforce processes, clear communication and dependable administrative support. Their commitment to practical solutions and ongoing improvement is what makes them a valuable partner.",
  },
];

const TALK = [
  {
    img: "/ai-workforce/talk-start.png",
    h: "Start with one role",
    b: "Hire a single AI employee and add others into the same Control Centre later.",
  },
  {
    img: "/ai-workforce/talk-reach.png",
    h: "Across every site",
    b: "One view over the branches, teams, locations and service streams you authorise.",
  },
  {
    img: "/ai-workforce/talk-fit.png",
    h: "Configured to your rules",
    b: "Your approval thresholds, your escalation paths, your operating procedures.",
  },
];


/* 🔴 THE MOST IMPORTANT SECTION ON THE PAGE AND THE THIRD COLUMN IS
   WHY. "Decisions that stay with people" is the sentence that separates
   an administrative assistant from an unsupervised system making
   clinical, employment and regulatory calls in a care setting. Do not
   shorten it, do not move an item out of it, and do not reorder the
   three columns so it stops being the one the reader finishes on. */
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

/* ── THE FIVE AI EMPLOYEES. ───────────────────────────────────────────
 *
 * 🔴 WRITTEN FROM THE FOUNDER'S "End to End process for AI Employee"
 * (10 November 2026), not from the old page copy, which UNDERSELLS THEM
 * BADLY: it has HR stopping at onboarding when the document runs it
 * through payroll processing, payslips, superannuation reporting and
 * final pay, and Operations stopping at task tracking when the document
 * runs it through billing preparation, claims submission and financial
 * exceptions. Both are in canon as of today.
 *
 * Stage counts: rostering 18 · compliance 18 · HR 23 · after-hours 18 ·
 * operations 20 = 97. `span` is the first and last stage, which is what
 * makes the count mean something.
 *
 * ⚠️ THE `limit` LINES ARE NOT A FOURTH BULLET AND ARE NOT TRIMMABLE.
 * On compliance, after-hours and HR they are the only sentence on the
 * page keeping a regulatory, emergency or employment responsibility
 * with the provider. Floor items 5, 6 and 7.
 * ──────────────────────────────────────────────────────────────────── */
const EMPLOYEES = [
  {
    role: "AI Rostering Coordinator",
    stages: "18 stages",
    span: "Workforce demand to cost monitoring",
    lead: "Builds the roster, fills the gaps, and gets the hours to payroll.",
    does: [
      "Compares upcoming demand against available workers, then builds and validates the roster in your scheduling software.",
      "Handles cancellations end to end: finds suitable workers, confirms acceptance, revalidates eligibility and updates the roster.",
      "Reconciles rostered hours against attendance and submits verified hours, allowances and exceptions to the payroll workflow.",
    ],
  },
  {
    role: "AI Compliance Coordinator",
    stages: "18 stages",
    span: "Obligation register to governance reporting",
    lead: "Keeps the evidence current instead of assembling it the week before an audit.",
    does: [
      "Tracks screening, credentials, mandatory training and policy acknowledgement, and chases what is missing.",
      "Runs the administration behind incidents, complaints, restrictive practice records and risk actions.",
      "Maintains audit schedules and evidence indexes, and reports outstanding obligations to management.",
    ],
  },
  {
    role: "AI HR Coordinator",
    stages: "23 stages",
    span: "Job advertisement to final pay run",
    lead: "The whole employment lifecycle, including the pay run.",
    does: [
      "Advertises, collects applications, screens against your approved criteria and schedules interviews.",
      "Issues approved offers, creates the employee record and drives onboarding to the point of work readiness.",
      "Assembles validated hours, leave and allowances, works the payroll system within agreed control boundaries, and handles payslip queries and offboarding.",
    ],
  },
  {
    role: "AI After-Hours Coordinator",
    stages: "18 stages",
    span: "The call to the morning handover",
    lead: "Answers the phone at 9:15 pm so your on-call manager does not have to.",
    does: [
      "Answers approved after-hours lines, identifies the caller and classifies the request.",
      "Works call-offs, unfilled shifts, late or missing workers and routine worker questions.",
      "Escalates to the right on-call person, follows the backup chain if nobody answers, and produces a verified morning handover.",
    ],
  },
  {
    role: "AI Operations Coordinator",
    stages: "20 stages",
    span: "First enquiry to claim reconciliation",
    lead: "Runs the day, then makes sure the work that was delivered gets billed.",
    does: [
      "Takes enquiries and referrals through intake, service agreements and commencement.",
      "Monitors whether scheduled services are underway, completed, cancelled or interrupted, across every site.",
      "Reconciles delivered services against billing, coordinates permitted claim preparation and submission, and chases rejections and unpaid invoices.",
    ],
  },
];

/* ── THE INTEGRATION GRID. ────────────────────────────────────────────
 *
 * Founder-supplied list, 10 November 2026. Each logo was pulled from
 * that company's own site and is used nominatively, to say which
 * systems Novada connects to.
 *
 * ⚠️ ALAYACARE, LUMARY AND XERO ONLY PUBLISH A REVERSED LOGO in their
 * headers, and a white logo on a white tile renders as an empty box.
 * Those three were processed: the dark ground knocked out, the
 * near-white ink darkened to house ink, and anything with real
 * saturation left alone so the coloured parts of each mark survive. If
 * a partner supplies an official asset pack, replace the file and drop
 * this note for that one.
 *
 * 🔴 THIS LIST REPLACED THE OLD "we do not publish a named integration
 * until it is confirmed" position, which the systems band used to
 * carry. These eleven are confirmed by the founder. Do not add a
 * twelfth without asking.
 * ──────────────────────────────────────────────────────────────────── */
const INTEGRATIONS = [
  { name: "ShiftCare", file: "shiftcare.svg" },
  { name: "AlayaCare", file: "alayacare.png" },
  { name: "Deputy", file: "deputy.svg" },
  { name: "CareMaster", file: "caremaster.svg" },
  { name: "Lumary", file: "lumary.png" },
  { name: "SupportAbility", file: "supportability.svg" },
  { name: "Brevity", file: "brevity.webp" },
  { name: "Xero", file: "xero.png" },
  { name: "Employment Hero", file: "employmenthero.png" },
  { name: "Twilio", file: "twilio.svg" },
  { name: "Microsoft 365", file: "microsoft365.png" },
];

/* Seventeen questions cut to ten. The five marked 🔴 are floor items
   and their answers are untouched. */
const FAQ = [
  {
    q: "What is Novada AI Workforce?",
    a: "An AI-powered operational platform for Australian care providers. You engage specialised AI employees that coordinate and execute approved administrative workflows across your supported business systems.",
  },
  {
    q: "How is it different from ChatGPT or a conventional AI chatbot?",
    a: "A chatbot responds to questions or generates information. Novada AI Workforce performs authorised operational actions through connected systems, follows defined workflows, requests approvals, verifies outcomes and maintains activity records.",
  },
  {
    /* 🔴 Floor item 1. */
    q: "Can AI employees actually complete tasks?",
    a: "That is the core purpose of the offering. A supported AI employee is designed to perform permitted actions rather than simply recommend them. Actual capabilities depend on the available integrations, configured workflows, system permissions and required approvals.",
  },
  {
    q: "Do we need to replace our current software?",
    a: "Not necessarily. The platform works alongside supported existing applications rather than requiring a wholesale system replacement, and your existing systems remain authoritative for their own business records unless explicitly agreed otherwise.",
  },
  {
    q: "Can we hire just one AI employee?",
    a: "Yes. You can engage a single specialised AI employee and add others later. The roles, service scope and subscription terms are confirmed in your proposal.",
  },
  {
    /* 🔴 Floor item 3. The answer begins with "No" and must keep doing so. */
    q: "Will the AI make employment decisions?",
    a: "No independent hiring, disciplinary or other consequential employment decisions should be delegated to AI. It can support administrative preparation, coordination and recordkeeping, with authorised people making the final decisions.",
  },
  {
    /* 🔴 Floor item 4. */
    q: "Can the AI manage NDIS and aged care compliance?",
    a: "It can be configured to support appropriate administrative tracking and follow-up activities. It does not replace the provider's legal responsibilities, regulatory judgement or professional oversight.",
  },
  {
    /* 🔴 Floor item 12. */
    q: "How is sensitive information protected?",
    a: "The platform connects to your systems through authorised, permission-scoped access, and every action an AI employee takes is recorded in the Control Centre's audit and activity records. Access controls, data retention, auditing and incident response are set out in your service agreement, and we confirm the specific permissions and contractual protections with you before any system is connected.",
  },
  {
    /* 🔴 Floor item 2. The answer is "No" and it stays the first word. */
    q: "Does Novada guarantee cost savings?",
    a: "No. The business value depends on the workflows implemented, the volume of tasks handled, integration complexity and the amount of human administrative effort reduced. Potential efficiencies should be measured against a real operational baseline.",
  },
  {
    /* ⚠️ NO FIGURE. Price does not appear in writing before a call. */
    q: "How much does it cost to hire an AI employee?",
    a: "Pricing is based on the selected AI employee, the required workflows, supported integrations, usage and implementation requirements. Your proposal sets out the applicable platform, implementation and ongoing subscription costs once the scope is understood.",
  },
];

/* ── PRIMITIVES ───────────────────────────────────────────────────── */

function Cta({
  children,
  href = "#book",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      /* ⚠️ sm:whitespace-nowrap, NOT whitespace-nowrap. "Book a discovery
         call" wraps to three lines once the hero's text column narrows,
         which makes the button 86px tall. It must still be allowed to
         wrap below sm, where a grid item's auto min-width would
         otherwise let the label set the floor for the whole column. */
      className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xs bg-brand-500 px-6 text-[13px] font-bold uppercase tracking-caps text-white shadow-cta transition-[background-color,box-shadow] duration-150 ease-standard hover:bg-brand-600 hover:shadow-lift sm:whitespace-nowrap"
    >
      {children}
      <ArrowRight
        aria-hidden
        className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
      />
    </a>
  );
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex min-h-11 items-center gap-2 self-start border-b-2 border-brand-500 pb-0.5 text-sm font-bold text-brand-500 transition-colors duration-150 hover:border-brand-700 hover:text-brand-700"
    >
      {children}
      <ArrowRight
        aria-hidden
        className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
      />
    </a>
  );
}

function Section({
  id,
  bg = CREAM,
  children,
}: {
  id?: string;
  bg?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} style={{ backgroundColor: bg }}>
      <div className={`${FRAME} ${GUTTER} py-16 md:py-24`}>{children}</div>
    </section>
  );
}

/**
 * The source page's section heading: slab serif, sentence case, centred,
 * with the sub directly beneath on a narrow measure. No index rail:
 * that rail is exactly the "looks like a blog" complaint the founder
 * made about the desk pages.
 */
function SectionHead({
  eyebrow,
  children,
  sub,
  dark = false,
  wide = false,
}: {
  eyebrow?: string;
  children: React.ReactNode;
  sub?: string;
  dark?: boolean;
  /**
   * The source page sets its longest section headings on a much wider
   * measure so they land in two big lines rather than four cramped
   * ones: "Managing people globally is complex. HiBob makes it easy
   * for 5,500+ customers worldwide." is one example. Founder asked for
   * the same on the two longest headings here, 10 November 2026.
   */
  wide?: boolean;
}) {
  return (
    /* ⚠️ THE WIDE VARIANT IS IN PIXELS, NOT ch, AND THAT IS THE POINT.
       `ch` resolves against the WRAPPER's font, which is the body sans,
       not the serif the heading is actually set in, so max-w-[64ch]
       came out at 646px and the heading still broke over four lines.
       Pixels are unambiguous. */
    <div className={`mx-auto text-center ${wide ? "max-w-[34ch] sm:max-w-[620px] lg:max-w-[1000px]" : "max-w-[46ch]"}`}>
      {eyebrow ? (
        <p className={`${MICRO} mb-4 ${dark ? "text-brand-200" : "text-brand-500"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        style={SERIF}
        className={`text-balance font-bold leading-[1.15] tracking-[-0.015em] ${
          wide
            ? "text-[clamp(1.55rem,1.1rem+1.7vw,2.25rem)]"
            : "text-[clamp(1.75rem,1.15rem+2.3vw,2.75rem)]"
        } ${dark ? "text-white" : "text-ink-950"}`}
      >
        {children}
      </h2>
      {sub ? (
        <p
          className={`mx-auto mt-5 max-w-[52ch] text-base leading-relaxed ${
            dark ? "text-white/70" : "text-ink-600"
          }`}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}

/* 🔴 BLUE, NOT GREEN, founder instruction 29 October 2026: a five-star
   row in the review platform's green invites the brand complaint we
   have already had two notices about, whatever the exact hex. */
function Stars({ className = "h-4 w-4 fill-brand-500 text-brand-500" }) {
  return (
    <span aria-hidden className="flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={className} strokeWidth={0} />
      ))}
    </span>
  );
}

/**
 * The organic shapes the source page floats its product cards over.
 *
 * ⚠️ ALWAYS INSIDE A CLIPPING ANCESTOR. These carry negative offsets,
 * and without `overflow-hidden` on the section they extend the document
 * past the viewport and the whole page scrolls sideways.
 *
 * 🔴 z-0 AND NOT -z-10. The bands paint their own background, so a
 * negatively stacked child renders BEHIND that background and the
 * shapes vanish completely. Shapes sit at z-0, product cards at z-10.
 * Do not "tidy" this back to a negative index: the markup looks
 * identical and the page renders blank.
 */
function Blobs({ flip = false }: { flip?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      <svg
        viewBox="0 0 400 400"
        className={`absolute h-[150%] w-[150%] ${
          flip ? "-right-24 -top-20" : "-left-24 -top-20"
        }`}
        fill="none"
      >
        <path
          d="M118 36c44-18 92 2 112 42 19 39 6 86-26 112-33 26-83 29-113 4C60 168 50 118 63 82c9-24 20-35 55-46Z"
          fill="#DCE6FF"
          opacity="0.85"
        />
        <path
          d="M262 214c34-10 72 10 84 44 12 33-4 71-36 86-33 15-74 5-91-26-17-30-8-70 24-89 8-5 12-10 19-15Z"
          fill={CREAM_DEEP}
        />
        <path
          d="M300 70c22-14 54-6 66 17 11 22 2 50-20 61-23 11-51 3-61-19-10-21-4-46 15-59Z"
          fill="#A6BEFF"
          opacity="0.75"
        />
      </svg>
    </div>
  );
}

/* ── THE PRODUCT VISUALS ──────────────────────────────────────────────
 *
 * Recreations of the source page's product shots, from the real Control
 * Centre: white cards, soft shadows, a detail card breaking out over
 * the main one, progress bars, a donut, an avatar cluster.
 *
 * ⚠️ WHITE CARDS, NOT THE INK PANELS THE REST OF THE ESTATE USES. On a
 * cream ground a dark panel reads as a hole. This matches the source.
 *
 * ⚠️ EVERY MOCK CARRIES AN "Example" CHIP. See the header: a figure
 * describing the state of one fictional record is ordinary dashboard
 * content; a figure describing what Novada achieves is never allowed in
 * one, and the chip is what stops a reader confusing the two.
 * ──────────────────────────────────────────────────────────────────── */

function ExampleChip() {
  return (
    <span className="flex-shrink-0 rounded-xs bg-ink-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-caps text-ink-500">
      Example
    </span>
  );
}

function Dots() {
  return (
    <span aria-hidden className="flex flex-shrink-0 gap-1.5">
      <span className="h-2 w-2 rounded-full bg-ink-200" />
      <span className="h-2 w-2 rounded-full bg-ink-200" />
      <span className="h-2 w-2 rounded-full bg-ink-200" />
    </span>
  );
}

function Card({
  title,
  children,
  chrome = true,
}: {
  title?: string;
  children: React.ReactNode;
  chrome?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-ink-100 bg-white shadow-float">
      {chrome ? (
        <div className="flex items-center justify-between gap-3 border-b border-ink-100 px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <Dots />
            {title ? <p className={`${MICRO_TIGHT} truncate text-ink-500`}>{title}</p> : null}
          </div>
          <ExampleChip />
        </div>
      ) : null}
      {children}
    </div>
  );
}

function Bar({ pct, tone = "brand" }: { pct: number; tone?: "brand" | "warm" }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
      <div
        className={`h-full rounded-full ${tone === "warm" ? "bg-signal-600" : "bg-brand-500"}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

/** Initials avatar. ⚠️ NOT a real client's face: the only photograph on
    this page is public/workforce/coordinator.jpg, which we own. */
function Avatar({ i }: { i: string }) {
  return (
    <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-white bg-brand-100 text-[12px] font-bold text-brand-700">
      {i}
    </span>
  );
}

/**
 * THE HERO IMAGE.
 *
 * 🔴 THIS IS THE SOURCE PAGE'S OWN HERO IMAGE, REBUILT. Founder
 * instruction, 10 November 2026: use their exact hero image, remove
 * their logo and the award, tailor the dashboard to our brand, keep the
 * woman. The build script is hero_build.py in the session scratchpad
 * and public/ai-workforce/hero.png is its output. What it did:
 *
 *   · recoloured the magenta family to Novada blue by rotating hue
 *     -117 degrees, so the art keeps its own light-to-dark structure
 *   · LEFT THE ORANGE BLOBS ALONE, because orange is already Novada's
 *     signal accent and they now read as brand rather than leftovers
 *   · protected her with a traced silhouette plus a saturation ceiling
 *     inside it. ⚠️ Without that, her lips, cheek highlights and the
 *     warm shadows on her hands all sit in the magenta band and the
 *     recolour puts blue blotches across her face
 *   · removed the "Bob" tile from the sidebar and the G2 award, which
 *     is not ours
 *   · replaced the banner greeting
 *
 * ⚠️ IT IS A SINGLE FLAT PNG. There is no detail card and no Blobs
 * component over it any more, because the image carries its own
 * shapes, exactly as the source page's does. Do not add the old code
 * mock back on top of it.
 *
 * ⚠️ priority + fetchPriority: this is the LCP element on the page.
 */
function HeroVisual() {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/ai-workforce/hero.png"
      alt="The Novada AI Control Centre, with a care operations manager reviewing the overnight summary"
      width={938}
      height={654}
      fetchPriority="high"
      decoding="async"
      /* ⚠️ NO max-w HERE. The source page lets this image fill its
         half of the hero; capping it leaves a column of dead cream
         beside the headline and the composition stops reading as a
         pair. The negative right margin lets it run slightly past the
         frame on wide screens, which is what theirs does too. */
      className="h-auto w-full lg:-mr-6 xl:-mr-10"
    />
  );
}

/** Feature 1, after their task shot: progress bars, a detail card
    floating clear of the main one. */
function TasksVisual() {
  const tasks = [
    ["Evening shift, Tuesday", 100],
    ["Clearance renewals, 6 workers", 60],
    ["Onboarding documents, 2 starters", 35],
  ] as const;
  return (
    <div className="relative pt-16">
      <div className="absolute right-4 top-0 z-20 w-[180px] rounded-lg border border-ink-100 bg-white p-4 text-center shadow-float">
        <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-white">
          <Check aria-hidden className="h-4 w-4" strokeWidth={3} />
        </span>
        <p className="mt-2 text-[10px] font-semibold uppercase tracking-caps text-ink-400">
          Handled overnight
        </p>
        <p style={SERIF} className="mt-1 text-sm font-bold text-ink-950">
          Shift covered
        </p>
      </div>

      <div className="relative z-10">
        <Card title="Today">
          <div className="flex flex-col gap-4 p-5">
            {tasks.map(([t, pct]) => (
              <div key={t} className="flex items-start gap-3">
                <span aria-hidden className="mt-1.5 flex flex-col gap-[3px]">
                  <span className="h-[2px] w-3.5 rounded bg-ink-200" />
                  <span className="h-[2px] w-3.5 rounded bg-ink-200" />
                  <span className="h-[2px] w-3.5 rounded bg-ink-200" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-medium text-ink-800">{t}</p>
                  <div className="mt-2">
                    <Bar pct={pct} tone={pct === 100 ? "brand" : "warm"} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

/** Feature 2, after their dashboard shot: an app window with a brand
    banner, a stat card off one corner and a team card off the other. */
function DashboardVisual() {
  return (
    <div className="relative px-2 pb-16 pt-14 sm:px-6">
      <div className="absolute left-0 top-0 z-20 w-[172px] rounded-lg border border-ink-100 bg-white p-4 shadow-float">
        <div className="flex items-baseline justify-between gap-2">
          <p style={SERIF} className="text-2xl font-bold text-ink-950">
            85%
          </p>
          <span className="text-[10px] font-semibold uppercase tracking-caps text-ink-400">
            Onboarding
          </span>
        </div>
        <div className="mt-3">
          <Bar pct={85} />
        </div>
      </div>

      <div className="relative z-10">
        <Card chrome={false}>
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <Dots />
            <ExampleChip />
          </div>
          <div
            className="px-5 py-6"
            style={{ background: "linear-gradient(110deg,#003DDB 0%,#0030AE 55%,#3A6CFF 100%)" }}
          >
            <p style={SERIF} className="text-base font-bold text-white">
              Good morning. Here is last night.
            </p>
            <p className="mt-1.5 text-xs text-white/75">
              3 calls handled, 1 escalation, 1 approval waiting
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 p-5">
            {["Shift cover", "Escalations", "Documents", "Claims"].map((t) => (
              <div key={t} className="rounded-xs bg-ink-50 p-3">
                <p className="text-[10px] font-semibold uppercase tracking-caps text-ink-400">
                  {t}
                </p>
                <span aria-hidden className="mt-2 block h-1.5 w-2/3 rounded bg-ink-200" />
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="absolute bottom-0 right-0 z-20 w-[212px] rounded-lg border border-ink-100 bg-white p-4 text-center shadow-float">
        <p style={SERIF} className="text-sm font-bold text-ink-950">
          Overnight handover sent
        </p>
        <div aria-hidden className="mt-3 flex justify-center -space-x-2.5">
          {["RK", "TN", "JD", "AO", "PM"].map((i) => (
            <Avatar key={i} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Feature 3, after their metrics shot: a legend pill, a bar chart card,
    a donut card and a wide scale card. */
function MetricsVisual() {
  const bars = [62, 88, 74, 96, 81];
  /* One number, so it is drawn rather than charted. r=42 gives a
     circumference of about 264, and the dash is that times the
     percentage. */
  const R = 42;
  const C = 2 * Math.PI * R;
  const pct = 92;
  return (
    <div className="relative pb-6">
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white px-3 py-1.5 shadow-raise">
            <span aria-hidden className="h-2 w-2 rounded-full bg-brand-500" />
            <span className="text-[11px] font-semibold text-ink-600">Coverage indicators</span>
          </span>
          <ExampleChip />
        </div>

        <div className="flex flex-wrap items-end gap-4">
          <div className="min-w-[170px] flex-1 rounded-lg border border-ink-100 bg-white p-5 shadow-float">
            <div aria-hidden className="flex h-[92px] items-end gap-2.5">
              {bars.map((h, i) => (
                <span
                  key={i}
                  className={`flex-1 rounded-t ${i % 2 ? "bg-brand-500" : "bg-brand-200"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-caps text-ink-500">
              Shifts filled, by week
            </p>
          </div>

          <div className="rounded-lg border border-ink-100 bg-white p-5 shadow-float">
            <svg viewBox="0 0 110 110" className="h-[96px] w-[96px]" aria-hidden>
              <circle cx="55" cy="55" r={R} fill="none" stroke="#DCE6FF" strokeWidth="13" />
              <circle
                cx="55"
                cy="55"
                r={R}
                fill="none"
                stroke="#003DDB"
                strokeWidth="13"
                strokeLinecap="round"
                strokeDasharray={`${(C * pct) / 100} ${C}`}
                transform="rotate(-90 55 55)"
              />
              <text
                x="55"
                y="63"
                textAnchor="middle"
                style={SERIF}
                fill="#0B0E14"
                fontSize="23"
                fontWeight="700"
              >
                {pct}%
              </text>
            </svg>
            <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-caps text-ink-500">
              Credentials current
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-ink-100 bg-white px-5 py-4 shadow-float">
          <div aria-hidden className="relative h-5">
            <span className="absolute inset-x-0 top-1/2 h-px bg-ink-200" />
            {[4, 15, 23, 38, 47, 51, 55, 58, 66, 74, 83, 96].map((x, i) => (
              <span
                key={i}
                className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-brand-400"
                style={{ left: `${x}%` }}
              />
            ))}
            <span className="absolute left-1/2 top-0 h-full w-px bg-ink-300" />
          </div>
          <div className="mt-2 flex justify-between text-[10px] font-semibold text-ink-400">
            <span>Mon</span>
            <span>Midweek</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
      <Blobs flip />
    </div>
  );
}

const VISUALS: Record<string, React.ComponentType> = {
  work: TasksVisual,
  control: DashboardVisual,
  systems: MetricsVisual,
};

/* ── THE PAGE ─────────────────────────────────────────────────────── */

/*
 * ══════════════════════════════════════════════════════════════════════
 * 🔴 THIS COMPONENT SERVES TWO ROUTES, AND IS NOT DUPLICATED FOR THE
 * SECOND ONE.
 *
 *   /care/ai-workforce      the organic page, indexed
 *   /care/ai-workforce/lp   the Meta ads landing page, noindex
 *
 * The paid page was asked for as "duplicate it". It is rendered from
 * this same file instead, with variant="ads", because a 1,670-line fork
 * does not stay a duplicate: the next copy or price edit lands on one
 * of the two and the paid page quietly goes on selling last month's
 * claims to the only traffic anyone is paying for.
 *
 * ⚠️ EVERYTHING THE VARIANT CHANGES IS A WAY OFF THE PAGE, OR
 * ATTRIBUTION. It changes no copy, no claim and no layout. If you find
 * yourself adding copy behind `ads`, the fork has started anyway and
 * the two pages are no longer the same offer.
 * ══════════════════════════════════════════════════════════════════════
 */
export default function AiWorkforcePage({
  variant = "organic",
}: {
  variant?: "organic" | "ads";
}) {
  const ads = variant === "ads";

  return (
    <div
      id="top"
      data-theme="desk"
      data-lp="cream"
      className="min-h-screen font-sans"
      style={{ backgroundColor: CREAM }}
    >
            {/* ⚠️ ON THE PAID ROUTE THE HEADER CARRIES NO NAV AND THE
                LOGO DOES NOT LEAVE. "/" is the two-door router, so a
                paid visitor tapping the logo out of habit is asked to
                choose an audience they already chose by clicking the
                ad. "#top" scrolls this page up instead. */}
            <LpHeader showNav={!ads} logoHref={ads ? "#top" : "/"} />

      <main>
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: CREAM }}>
          <div
            className={`${FRAME} ${GUTTER} relative grid items-center gap-12 pb-20 pt-6 md:pb-28 md:pt-16 lg:grid-cols-[0.92fr_1.12fr] lg:gap-10`}
          >
            {/* ⚠️ min-w-0 ON BOTH GRID ITEMS. A grid item's min-width is
                auto, not zero, so the widest unbreakable thing inside
                either column silently widens BOTH and the h1 and the
                paragraph render past the right gutter. Measured at
                390px without it: columns 383px against a 350px box. */}
            <div className="min-w-0">
              <p className={`${MICRO} text-brand-500`}>
                For NDIS, aged care &amp; home care providers
              </p>

              {/* 🔴 FOUNDER-APPROVED HERO LINE. Set in the serif and in
                  sentence case to match the source page, but the words
                  are untouched. */}
              <h1
                style={SERIF}
                className="mt-5 text-[clamp(2.1rem,1.35rem+3.2vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.02em] text-ink-950"
              >
                Hire AI employees that actually run your care operations.
              </h1>

              {/* ⚠️ TWO SENTENCES. The live page runs 130 words here and
                  that is the clearest instance of the problem the
                  founder asked to fix. Do not grow it back. */}
              <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-ink-600">
                Novada AI employees run rostering, compliance, HR and payroll,
                after-hours calls and claims administration inside the systems
                you already use. They complete approved work, ask before
                anything consequential, and record every action in one place.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Cta href="#book">Book a discovery call</Cta>
                <a
                  href="#employees"
                  /* ⚠️ sm:whitespace-nowrap, NOT whitespace-nowrap: see
                     the min-w-0 note above. An unwrappable label sets
                     the floor for the whole column at 390px. */
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xs bg-brand-100 px-6 text-[13px] font-bold uppercase tracking-caps text-brand-700 transition-colors duration-150 ease-standard hover:bg-brand-200 sm:whitespace-nowrap"
                >
                  Meet your AI employees
                  <ChevronDown aria-hidden className="h-4 w-4" />
                </a>
              </div>

              {/* ⚠️ UNBRANDED BY NECESSITY. No platform name, no
                  wordmark, no green, and nothing here is a link.

                  ⚠️ THE "205 providers across Australia" COUNT AND THE
                  CAPABILITIES QUALIFIER WERE REMOVED FROM THIS BLOCK ON
                  FOUNDER INSTRUCTION, 10 November 2026. The scope point
                  the qualifier carried still appears twice further down,
                  in the integrations sub-line and in the FAQ answer
                  "Can AI employees actually complete tasks?". Do not
                  restore it here without checking those are still in
                  place. */}
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                <div className="flex items-center gap-2.5">
                  <Stars />
                  <span className="text-sm font-bold text-ink-950">5.0</span>
                  <span className="text-sm text-ink-500">from 77 provider reviews</span>
                </div>
              </div>
            </div>

            {/* The clearance padding that used to be here was for a
                detail card that no longer exists: the hero is one flat
                image now. */}
            <div className="min-w-0 lg:pl-4">
              <HeroVisual />
            </div>
          </div>
        </section>

        {/* ── PROVIDER STRIP ─────────────────────────────────────────
            Their customer logo marquee. See the 🔴 note at the top:
            their strip is their customers, so ours is the three
            providers we can name. No borrowed logos, ever. */}
        <section className="border-y border-ink-100/70" style={{ backgroundColor: CREAM_DEEP }}>
          <div className={`${FRAME} ${GUTTER} py-10`}>
            <p style={SERIF} className="text-center text-lg font-bold text-ink-800">
              Australian care providers already run Novada AI employees
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-20">
              {PROVIDERS.map((p) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={p.name}
                  src={`/clients/${p.file}`}
                  alt={p.name}
                  className={`${p.h} w-auto object-contain`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY ──────────────────────────────────────────────────── */}
        <Section>
          <SectionHead>Why choose a Novada AI employee?</SectionHead>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {WHY.map((w) => (
              <div key={w.h} className="reveal text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.img}
                  alt=""
                  width={130}
                  height={130}
                  className="mx-auto h-[104px] w-[104px] object-contain"
                />
                <h3 style={SERIF} className="mt-5 text-xl font-bold text-ink-950">
                  {w.h}
                </h3>
                <p className="mx-auto mt-3 max-w-[34ch] text-[15px] leading-relaxed text-ink-600">
                  {w.b}
                </p>
              </div>
            ))}
          </div>

          {/* ⚠️ THE VALUE QUALIFIER THAT SAT HERE WAS REMOVED ON FOUNDER
              INSTRUCTION, 10 November 2026. What now carries that point
              is the FAQ answer to "Does Novada guarantee cost savings?",
              which still begins with "No" and still says potential
              efficiencies should be measured against a real operational
              baseline. 🔴 That answer is now the only place on the page
              where outcome is qualified at all. Do not shorten it. */}
        </Section>

        {/* ── FEATURE BLOCKS ───────────────────────────────────────── */}
        {FEATURES.map((f, i) => {
          const Visual = VISUALS[f.key];
          const flip = i % 2 === 1;
          return (
            /* ⚠️ overflow-hidden IS LOAD-BEARING: the shapes behind each
               product card carry negative offsets, and without a clip
               they extend the document to 410px at a 390px viewport and
               the whole page scrolls sideways. */
            <section
              key={f.key}
              className="overflow-hidden"
              style={{ backgroundColor: flip ? CREAM_DEEP : CREAM }}
            >
              <div
                className={`${FRAME} ${GUTTER} grid items-center gap-14 py-16 md:py-24 lg:grid-cols-2 lg:gap-16`}
              >
                <div className={`min-w-0 ${flip ? "lg:order-2" : ""}`}>
                  <h2
                    style={SERIF}
                    className="text-[clamp(1.6rem,1.15rem+1.8vw,2.35rem)] font-bold leading-[1.15] tracking-[-0.015em] text-ink-950"
                  >
                    {f.h}
                  </h2>
                  <ul className="mt-7 flex flex-col gap-4">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span
                          aria-hidden
                          className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-white"
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-[15px] leading-relaxed text-ink-600">{b}</span>
                      </li>
                    ))}
                  </ul>
                  {f.foot ? (
                    <p className="mt-6 max-w-[58ch] border-l-2 border-ink-200 pl-4 text-sm leading-relaxed text-ink-500">
                      {f.foot}
                    </p>
                  ) : null}
                  <div className="mt-8">
                    <TextLink href={f.link.href}>{f.link.label}</TextLink>
                  </div>
                </div>
                <div className={`relative min-w-0 ${flip ? "lg:order-1" : ""}`}>
                  <Visual />
                </div>
              </div>
            </section>
          );
        })}

        {/* ── THE DEEP BAND: SECTOR STATISTICS ─────────────────────────
            🔴🔴 READ THE NOTE IN THE FILE HEADER BEFORE CHANGING ANY
            FIGURE HERE. These are published Australian care-sector
            statistics with their sources named. They are NOT Novada
            results, and the heading, the captions, the per-figure
            sources and the line underneath all exist to keep that
            unambiguous. Never swap one for a Novada performance
            number. */}
        <section style={{ backgroundColor: DEEP }}>
          <div className={`${FRAME} ${GUTTER} py-16 md:py-24`}>
            <SectionHead dark>The business impact of an AI workforce</SectionHead>

            <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {SECTOR.map((s, i) => (
                <div
                  key={s.n + s.b}
                  className="reveal text-center"
                  style={{ ["--reveal-delay" as string]: `${Math.min(i, 4) * 60}ms` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
                    alt=""
                    width={78}
                    height={78}
                    className="mx-auto h-[62px] w-[62px] object-contain"
                  />
                  <p
                    style={SERIF}
                    className="tabular mt-4 text-[clamp(2.25rem,1.7rem+2.2vw,3.25rem)] font-bold leading-none tracking-[-0.02em] text-white"
                  >
                    {s.n}
                  </p>
                  <p className="mx-auto mt-3 max-w-[30ch] text-[15px] leading-relaxed text-white/75">
                    {s.b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────────
            Their card: the client's wordmark at the top, an italic serif
            quote centred, the attribution beneath. See the 🔴 note
            above TESTIMONIALS for why there are no faces. */}
        <Section>
          <SectionHead wide>
            Running a care business is complex. Novada supports 205 providers
            across Australia with the operations behind it.
          </SectionHead>

          {/* ⚠️ THE "all three run Novada AI employees" SENTENCE WAS
              REMOVED ON FOUNDER INSTRUCTION, 10 November 2026. It was
              Novada's own claim, deliberately kept outside the
              quotation marks because none of the three quotes mentions
              AI. With it gone the quotes stand as what they are, which
              is testimony about working with Novada Tech. 🔴 DO NOT
              SOLVE ITS ABSENCE BY EDITING AI INTO A QUOTE: no sentence
              is ever put into a client's mouth, in either direction. */}

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={t.org}
                className="reveal flex flex-col rounded-lg border border-ink-100 bg-white px-7 py-8 text-center shadow-lift"
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              >
                <p
                  style={SERIF}
                  className="text-[15px] font-bold uppercase tracking-[0.03em] text-ink-950"
                >
                  {t.org}
                </p>
                <blockquote
                  style={SERIF}
                  className="mt-6 flex-1 text-[15px] italic leading-relaxed text-ink-700"
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 text-sm text-ink-500">
                  {t.name}, {t.org}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* ── LET US TALK ──────────────────────────────────────────── */}
        <Section bg={CREAM_DEEP}>
          <SectionHead sub="See how an AI workforce would fit your operation:">
            Let us talk
          </SectionHead>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {TALK.map((t) => (
              <div key={t.h} className="reveal text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.img}
                  alt=""
                  width={78}
                  height={78}
                  className="mx-auto h-[58px] w-[58px] object-contain"
                />
                <h3 style={SERIF} className="mt-4 text-base font-bold text-ink-950">
                  {t.h}
                </h3>
                <p className="mx-auto mt-2 max-w-[32ch] text-sm leading-relaxed text-ink-600">
                  {t.b}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Cta href="#book">Book a discovery call</Cta>
          </div>
        </Section>

        {/* ⚠️ THE ASSURANCE ROW WAS REMOVED ON FOUNDER INSTRUCTION,
            10 November 2026. It held four items: permission-scoped
            access, every action recorded, approval before consequential
            actions, and built for Australian care. It sat in the slot
            the source page uses for its awards row.

            🔴 WHERE THOSE FOUR POINTS LIVE NOW: permission-scoped
            access and the audit record are both in the FAQ answer to
            "How is sensitive information protected?", and the approval
            boundary is the middle column of the oversight band below.
            Nothing was lost, but there is no longer a second copy of
            any of them. Check that answer is still intact before
            touching it. */}

        {/* ── HUMAN OVERSIGHT ──────────────────────────────────────────
            🔴 THE SOURCE PAGE HAS NO EQUIVALENT BAND. This one is not
            optional and is not a candidate for the next round of cuts:
            it is floor item 10, and the third column is the sentence
            that separates an administrative assistant from an
            unsupervised system making clinical, employment and
            regulatory calls in a care setting. */}
        <Section bg={CREAM_DEEP}>
          {/* ⚠️ THE SUB-LINE WAS REMOVED ON FOUNDER INSTRUCTION,
              10 November 2026. The heading and the three columns below
              it carry the point on their own, and the third column is
              still the one the reader finishes on. */}
          <SectionHead wide>
            Your AI employees do the routine work. Your people keep the
            decisions.
          </SectionHead>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {OVERSIGHT.map((o, i) => (
              <div
                key={o.h}
                className="reveal flex flex-col rounded-lg border border-ink-100 bg-white p-7 shadow-lift"
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              >
                <h3 style={SERIF} className="text-lg font-bold text-ink-950">
                  {o.h}
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {o.items.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <Check
                        aria-hidden
                        strokeWidth={2.5}
                        className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-brand-500"
                      />
                      <span className="text-sm leading-relaxed text-ink-600">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p
            style={SERIF}
            className="mx-auto mt-12 max-w-[60ch] text-center text-lg font-bold leading-snug text-ink-950"
          >
            The purpose of AI is to reduce unnecessary manual effort, not to
            remove professional judgement, accountability or appropriate
            safeguards from care delivery.
          </p>
        </Section>

        {/* ── THE FIVE AI EMPLOYEES ────────────────────────────────── */}
        <Section id="employees">
          <SectionHead sub="Each one runs a defined operational lifecycle end to end. Start with the role under the most pressure and add others into the same Control Centre later.">
            Meet the five AI employees
          </SectionHead>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {EMPLOYEES.map((e, i) => (
              <article
                key={e.role}
                className="reveal flex flex-col rounded-lg border border-ink-100 bg-white p-7 shadow-lift transition-[transform,box-shadow] duration-200 ease-standard hover:-translate-y-0.5"
                style={{ ["--reveal-delay" as string]: `${Math.min(i, 4) * 60}ms` }}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className={`${MICRO} text-brand-500`}>{e.role}</p>
                  <span className="flex-shrink-0 rounded-xs bg-brand-50 px-2 py-1 text-[10px] font-bold uppercase tracking-caps text-brand-700 ring-1 ring-brand-200">
                    {e.stages}
                  </span>
                </div>

                <h3 style={SERIF} className="mt-4 text-lg font-bold leading-snug text-ink-950">
                  {e.lead}
                </h3>

                {/* The lifecycle's two ends. This is what makes the
                    stage count on the chip mean something. */}
                <p className="mt-3 text-xs font-medium uppercase tracking-caps text-ink-400">
                  {e.span}
                </p>

                <ul className="mt-5 flex flex-1 flex-col gap-3">
                  {e.does.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <Check
                        aria-hidden
                        strokeWidth={2.5}
                        className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-brand-500"
                      />
                      <span className="text-sm leading-relaxed text-ink-600">{d}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <div
              className="flex flex-col justify-center rounded-lg p-7 ring-1 ring-brand-200"
              style={{ backgroundColor: CREAM_DEEP }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ai-workforce/stat-control.png"
                alt=""
                width={78}
                height={78}
                className="h-[54px] w-[54px] object-contain"
              />
              <h3 style={SERIF} className="mt-4 text-lg font-bold text-ink-950">
                All of them report to one Control Centre
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                Whichever roles you hire, their tasks, approvals, exceptions and
                activity records sit in the same place.
              </p>
              <div className="mt-6">
                <TextLink href="#book">Talk through the roles</TextLink>
              </div>
            </div>
          </div>
        </Section>

        {/* ── INTEGRATIONS ─────────────────────────────────────────────
            Their logo tile grid. Founder-supplied partner list,
            10 November 2026. See the note above INTEGRATIONS for the
            three logos that had to be processed, and for the fact that
            this list REPLACED the old "no named integrations until
            confirmed" position. */}
        <Section id="integrations" bg={CREAM_DEEP}>
          <SectionHead sub="Your AI employees work inside the systems you already run. We confirm each system's permissions and capabilities during implementation.">
            Integrates with the tools you already use
          </SectionHead>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {INTEGRATIONS.map((p) => (
              <div
                key={p.name}
                className="reveal flex h-[104px] items-center justify-center rounded-lg border border-ink-100 bg-white p-5 shadow-raise"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/integrations/${p.file}`}
                  alt={p.name}
                  className="max-h-[42px] w-auto max-w-[130px] object-contain"
                />
              </div>
            ))}
          </div>
        </Section>

        {/* ── FAQ ──────────────────────────────────────────────────────
            ⚠️ NATIVE <details>. No JS, keyboard and screen reader
            support for free, and it still works if hydration never
            finishes. */}
        <Section>
          <SectionHead>Frequently asked questions</SectionHead>

          <div className="mx-auto mt-12 flex max-w-[76ch] flex-col gap-3">
            {FAQ.map((f, i) => (
              <details
                key={f.q}
                className="reveal group rounded-lg border border-ink-100 bg-white shadow-raise [&_summary::-webkit-details-marker]:hidden"
                style={{ ["--reveal-delay" as string]: `${Math.min(i, 4) * 50}ms` }}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 p-6 text-base font-semibold text-ink-950">
                  <span>{f.q}</span>
                  <ChevronDown
                    aria-hidden
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-ink-400 transition-transform duration-200 ease-standard group-open:rotate-180"
                  />
                </summary>
                <p className="px-6 pb-6 text-sm leading-relaxed text-ink-600">{f.a}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* ── BOOK ─────────────────────────────────────────────────── */}
        <section id="book" style={{ backgroundColor: DEEP }}>
          <div className={`${FRAME} ${GUTTER} py-16 md:py-24`}>
            <SectionHead
              dark
              sub="A free 30-minute conversation about your operational workload, your systems, and which repetitive tasks could be handled safely. No obligation to proceed."
            >
              Hire your next AI operations team
            </SectionHead>

            <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-12">
              <div className="min-w-0">
                <p className={`${MICRO} text-brand-200`}>On the call we will</p>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {[
                    "Walk through your current admin workload and systems.",
                    "Find your highest-volume repetitive tasks.",
                    "Say which of them could be safely automated, and which could not.",
                    "Explain the five roles and how the Control Centre works.",
                    "Agree the scope, the next steps and the timeline.",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <Check
                        aria-hidden
                        strokeWidth={2.5}
                        className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-brand-200"
                      />
                      <span className="text-sm leading-relaxed text-white/80">{t}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-white/15 pt-6 text-sm text-white/55">
                  30 minutes. No cost.
                </p>
              </div>

              <div className="min-w-0">
                {/* 🔴 care-ai-workforce IS ITS OWN CALENDAR
                    (WP6oumjuphxHD9rJBNKX) AND ITS OWN PIPELINE. Never
                    repoint this at care-rostering or care-continuity:
                    those feed different pipelines, so borrowing one
                    files an AI Workforce enquiry against a different
                    offer, with a different confirmation page and a
                    different coordinator. Unlike a booking that cannot
                    be made, that one cannot be recovered.

                    ⚠️ `source` is what the confirmation page and the
                    CRM read to attribute the booking. Changing it
                    silently breaks attribution without breaking the
                    booking, which is the hardest kind of fault to
                    notice. */}
                {/* ⚠️ THE PAID ROUTE BOOKS THE SAME CALENDAR AND THE
                    SAME PIPELINE, and differs only by `source`. That
                    string is the utm_content on the widget and the
                    attribution the CRM reads, so it is the only thing
                    that will let anyone answer whether the Meta spend
                    produced a booking. Changing it silently breaks
                    attribution without breaking the booking. */}
                <BookingEmbed
                  desk="care-ai-workforce"
                  source={ads ? "care-ai-workforce-meta-lp" : "care-ai-workforce"}
                  tone="dark"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 🔴 bookHref="#book" ON BOTH VARIANTS, AND IT WAS MISSING.
          DeskFooter defaults to "/#book", and the homepage #book is an
          offer CHOOSER, not a calendar. So the footer link asked a
          reader who was already on this offer page, had scrolled the
          whole thing and was ready to book, to go back to the homepage
          and pick an offer they had already picked. The component's own
          docstring says pages that own a #book must pass it; HubPage,
          ServicePage and PillarPage all did, and this page did not.

          ⚠️ THE PHONE NUMBER IS PASSED ONLY ON THE PAID ROUTE, and only
          because this is the Australian site. It was removed from this
          footer on 6 September 2026 because +61 is a country signal to
          a US visitor on novadatech.com. An Australian ad audience
          reads a local number as reassurance instead. */}
      <DeskFooter
        bookHref="#book"
        variant={ads ? "minimal" : "full"}
        ctaLabel={ads ? "Book a discovery call" : undefined}
      />

      {/* ⚠️ CLEARANCE FOR THE STICKY BAR. Without it the bar covers the
          last line of the footer on a phone, where it is tallest
          because the tagline wraps above a full-width button. */}
      <div aria-hidden className="h-28 sm:h-20" />

      <StickyCta
        label="Book your AI Workforce discovery call"
        tagline="Free 30-minute discovery conversation."
        href="#book"
      />
    </div>
  );
}
