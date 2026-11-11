"use client";

import { ArrowRight, Check, ChevronDown, Star } from "lucide-react";

import BookingEmbed from "@/components/desk/BookingEmbed";
import DeskFooter from "@/components/desk/DeskFooter";
import StickyCta from "@/components/desk/StickyCta";
import { FRAME, GUTTER, MICRO, MICRO_TIGHT } from "@/components/desk/tokens";
import { LpHeader } from "@/components/lp/kit";

/*
 * ══════════════════════════════════════════════════════════════════════
 * /practices/ai-workforce — NOVADA AI WORKFORCE, AUSTRALIAN PRACTICES.
 *
 * Rebuilt 10 November 2026 on the same shape as /care/ai-workforce, on
 * the founder's instruction: "build it exactly the same way you built
 * the Care AI Workforce page." Same shell, same primitives, same band
 * order, same serif headings. If you change the shape of one, look at
 * the other.
 *
 * ══════════════════════════════════════════════════════════════════════
 * 🔴 FOUR THINGS ARE DELIBERATELY NOT THE SAME AS THE CARE PAGE. Each
 * one is a fact about this audience, not an oversight.
 *
 * 1. 🔴 THE ROLE CARDS KEEP THEIR BOUNDARY LINES. The founder removed
 *    the equivalent lines from the care page on 10 November, and that
 *    was safe there because the care page's oversight band repeats
 *    every one of those concepts in its third column.
 *
 *    THAT REASONING DOES NOT TRANSFER. The old practices page had NO
 *    oversight band at all, so its five boundary lines were the only
 *    place any of this was said. And they are not the same KIND of
 *    sentence as the care ones:
 *
 *      · "The AI identifies itself as an AI assistant on every patient
 *         call" is close to a legal requirement. An AI that lets a
 *         patient believe they are speaking to a person is misleading
 *         conduct, and this one answers the phone.
 *      · "does not independently assess clinical urgency" is patient
 *         safety. This AI takes calls from sick people.
 *      · "does not determine Medicare eligibility, select clinical
 *         billing codes independently" is Medicare compliance. Getting
 *         that wrong is not a marketing problem.
 *
 *    An oversight band HAS been added below, so the concepts now
 *    appear twice as they do on care. ⚠️ That is not a licence to
 *    delete the role-card lines: the three above are specific in a way
 *    a three-column summary cannot be.
 *
 * 2. ✅ THE CALENDAR IS WIRED AND THE PAGE IS PUBLIC, since
 *    11 November 2026. #book carries a real BookingEmbed and the
 *    route is indexed and in the sitemap, so the page can now take
 *    the action it asks for. This note used to say the opposite,
 *    including after the page was already public.
 *
 *    ⚠️ THE CALENDAR ID IS NOT INTERCHANGEABLE WITH THE OTHER
 *    DOMAIN'S. The two practices calendars differ by a "(US)" suffix
 *    in the name alone, so they are the easiest pair on this estate
 *    to swap by accident, and a swap is invisible until a booker
 *    lands on the wrong country's confirmation page at the wrong
 *    country's times. The ids, and the reason each belongs to its own
 *    domain, are in src/components/desk/BookingEmbed.tsx. Verify
 *    against the API by id, never by name.
 *
 * 3. ⚠️ THE CLIENT LOGOS AND THE QUOTES ARE CARE PROVIDERS, NOT
 *    PRACTICES, and the copy around them says so. Founder instruction,
 *    10 November 2026, was to use them here. They are real Novada
 *    clients, so the strip and the quote band are true as written:
 *    "Australian healthcare providers already run Novada AI employees"
 *    and "Care and disability providers already trust Novada with the
 *    operations behind their service."
 *    🔴 DO NOT reword either to imply these are medical practices. The
 *    first quote names NDIS out loud, which is exactly why the framing
 *    has to stay general.
 *
 * 4. ⚠️ ONLY FOUR INTEGRATION TILES. The eleven-partner list the
 *    founder supplied is a CARE list: ShiftCare, AlayaCare, Lumary,
 *    SupportAbility, Brevity and CareMaster are NDIS and aged care
 *    systems and do not belong on a page for GP, specialist and allied
 *    health practices. Only the four that are genuinely cross-sector
 *    carry over. 🔴 THE PRACTICE MANAGEMENT SYSTEMS ARE MISSING AND
 *    HAVE BEEN ASKED FOR. Do not fill the gap by guessing at names.
 *
 * ══════════════════════════════════════════════════════════════════════
 * ⚠️ NO EM DASHES. ⚠️ NO PRICE IN WRITING. ⚠️ STARS ARE BLUE, NOT
 * GREEN, and the rating is unbranded: no platform name, no wordmark.
 * ⚠️ AUSTRALIAN VOCABULARY. Medicare rebate, health fund, item
 * numbers, enquiries. EHR, clearinghouse, payer, prior authorization
 * and inquiries are the US page's words and belong on novadatech.com.
 * ══════════════════════════════════════════════════════════════════════
 */

const CREAM = "#FFFBF4";
const CREAM_DEEP = "#FFF0DA";
const DEEP = "#002687";

/** The display face. Declared in ./page.tsx, for this route only. */
const SERIF = { fontFamily: "var(--font-lp-serif), Georgia, serif" };

/* ── CONTENT ──────────────────────────────────────────────────────── */

const PROVIDERS = [
  { name: "Maxicare Plus", file: "maxicare.png", h: "h-9 md:h-10" },
  { name: "Morning Star Community Services", file: "morningstar.png", h: "h-14 md:h-16" },
  { name: "Supportslink", file: "supportslink.png", h: "h-9 md:h-11" },
];

const WHY = [
  {
    img: "/ai-workforce/why-employees.png",
    h: "It does the work",
    b: "Not a reminder list for your practice manager. An AI employee that answers the call, sends the offer and records what it did.",
  },
  {
    img: "/ai-workforce/why-control.png",
    h: "Clinicians keep the clinical calls",
    b: "Urgency, test results, referrals and billing codes stay with your people. The AI does the administration around them.",
  },
  {
    img: "/ai-workforce/why-systems.png",
    h: "It uses your systems",
    b: "Your practice management, billing and telephony software keeps its records. The AI works across them.",
  },
];

const FEATURES = [
  {
    key: "work",
    h: "Answers the phone instead of logging that it rang",
    bullets: [
      "A missed call is a missed patient. Reception can only hold so many conversations at once, and the rest go to voicemail or to nobody.",
      "The AI answers through your supported telephony, identifies itself as an AI assistant, and handles the routine enquiry end to end.",
      "Anything urgent or clinical goes to a person through your own escalation procedure, and a patient can always ask for one.",
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
    /* 🔴 LOAD-BEARING. Without it the Control Centre reads as a
       replacement system of record, which is a claim we cannot support
       and a migration we are not selling. */
    foot: "Your existing practice management, clinical, billing and communication systems remain the authoritative records for their respective functions unless explicitly agreed otherwise.",
  },
  {
    key: "systems",
    h: "Runs on the software you already pay for",
    bullets: [
      "Practice management and appointments, clinical records, billing and claims, telephony, and the tools your front desk already uses.",
      "No system replacement. Where supported, your applications carry on doing their job.",
      "We assess each system's permissions and capabilities before confirming which workflows are available.",
    ],
    link: { label: "See the integrations", href: "#integrations" },
  },
];

/* ── THE DEEP BAND. ───────────────────────────────────────────────────
 *
 * Built the same way as the care page's, and read that file's note
 * before changing anything here. These are published findings about
 * what AI does to clinical administration, plus two on how much
 * appointment time practices lose. Phrased conditionally, the way the
 * reference page phrases its own ("More productivity WHEN engagement
 * improves"), because none of them is a Novada result.
 *
 * 🔴 THE CARE PAGE'S LAST TWO FIGURES DO NOT BELONG HERE. 24.1% of
 * aged care revenue going to administration and 27% aged care turnover
 * are aged care numbers. A GP practice is not an aged care provider
 * and the sector figures are not interchangeable.
 *
 * ⚠️ `src` IS NOT RENDERED, exactly as on care, and is kept so the
 * provenance of every figure lives with the figure. DO NOT delete it
 * as dead code. If a figure changes, the replacement needs a real
 * published source recorded here first.
 *
 * Sources: medRxiv systematic review (2025); McMaster Health Forum
 * rapid review; Kaiser Permanente Medical Group; JAMA (AI scribe
 * study); British Journal of General Practice systematic review of
 * missed appointments.
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
    n: "15.2%",
    b: "Of general practice appointments are missed, on average",
    src: "BJGP systematic review",
  },
  {
    img: "/ai-workforce/stat-stages-light.png",
    n: "13.2%",
    b: "Average no-show rate across Australian and New Zealand practices",
    src: "Systematic review, regional average",
  },
];

/* 🔴 VERBATIM, FOUNDER-SUPPLIED, AND THESE ARE CARE PROVIDERS. See note
   3 in the header: the band's heading says so, and must keep saying so.
   ⚠️ EMMANUELLA, TWO LS, founder-confirmed 29 October. */
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
    h: "Across every location",
    b: "One view over the sites, clinicians and service streams you authorise.",
  },
  {
    img: "/ai-workforce/talk-fit.png",
    h: "Configured to your rules",
    b: "Your approval thresholds, your escalation paths, your practice procedures.",
  },
];

/* ── THE CONTROL BOUNDARY. ────────────────────────────────────────────
 *
 * 🔴 NEW ON THIS PAGE, 10 November 2026, and the third column is why it
 * was added. The old practices page had no band like this: its only
 * boundary statements were the five lines on the role cards. On a page
 * whose AI answers calls from patients and touches Medicare billing,
 * that is one place too few.
 *
 * Every item below is drawn straight out of those five lines. Do not
 * shorten the third column, do not move an item out of it, and do not
 * reorder the three so it stops being the one the reader finishes on.
 * ──────────────────────────────────────────────────────────────────── */
const OVERSIGHT = [
  {
    h: "Actions that may be automated",
    items: [
      "Answering routine patient enquiries, as an identified AI assistant.",
      "Offering available appointment times under your configured rules.",
      "Sending clinician-authorised reminders and recall communications.",
      "Chasing missing referral and billing documentation.",
      "Tracking tasks, exceptions and outstanding administrative work.",
    ],
  },
  {
    h: "Actions that may require approval",
    items: [
      "Certain external communications to patients and referrers.",
      "Appointment changes outside your standard scheduling rules.",
      "Claim corrections and resubmissions.",
      "Changes to recall and reminder worklists.",
      "Other actions your practice identifies as requiring authorisation.",
    ],
  },
  {
    h: "Decisions that stay with people",
    items: [
      "Clinical urgency, triage and who needs to be seen.",
      "Interpretation of test results and clinically significant findings.",
      "Accepting or declining a referral on clinical grounds.",
      "Medicare eligibility and the selection of clinical billing codes.",
      "Closing a safety-critical recall.",
    ],
  },
];

/* ── THE SIX AI EMPLOYEES. ────────────────────────────────────────────
 *
 * 🔴 EVERY `limit` LINE HERE STAYS. Read note 1 in the file header
 * before touching one. Three of them are legal, clinical-safety or
 * Medicare-compliance statements, not marketing hedges, and the
 * oversight band above summarises them rather than replacing them.
 * ──────────────────────────────────────────────────────────────────── */
const EMPLOYEES = [
  {
    role: "AI Reception & Patient Access",
    span: "The call to the booked appointment",
    lead: "Answers the calls your front desk cannot get to.",
    does: [
      "Answers incoming patient calls through supported telephony and responds to routine questions using approved practice information.",
      "Explains hours, locations and published policies, checks permitted availability and books, moves or cancels within your rules.",
      "Takes messages, records the enquiry and routes anything it cannot handle to the right person.",
    ],
  },
  {
    role: "AI Appointment & Cancellation Recovery",
    span: "The cancellation to the filled slot",
    lead: "Does not let valuable appointment time go unused.",
    does: [
      "Monitors cancellations and newly available times against your approved waitlist.",
      "Identifies eligible patients under your configured rules and sends authorised offers.",
      "Tracks responses, confirms acceptances and updates the appointment book.",
    ],
  },
  {
    role: "AI Referrals & Intake",
    span: "The referral arriving to the file being complete",
    lead: "Stops referrals sitting in an administrative queue.",
    does: [
      "Registers incoming referrals through supported channels and checks the documents for required administrative fields.",
      "Requests missing information through approved channels and tracks incomplete files.",
      "Keeps referrers and patients updated on administrative progress.",
    ],
  },
  {
    role: "AI Recalls & Follow-Up",
    span: "The approved worklist to the booked follow-up",
    lead: "Keeps clinician-approved follow-ups moving without endless chasing.",
    does: [
      "Monitors approved recall and reminder worklists and identifies outstanding contact tasks.",
      "Sends clinician-authorised communications through permitted channels and records responses.",
      "Offers eligible follow-up appointments and reports what is still outstanding.",
    ],
  },
  {
    role: "AI Billing & Claims",
    span: "The completed service to the reconciled claim",
    lead: "Stops the hours spent chasing billing exceptions.",
    does: [
      "Monitors billing and claims worklists and identifies completed services awaiting administration.",
      "Checks permitted administrative fields and flags what is missing or inconsistent.",
      "Tracks claim statuses, identifies rejections and coordinates permitted follow-up.",
    ],
  },
  {
    role: "AI Practice Operations",
    span: "The whole day, from one place",
    lead: "Keeps practice administration moving from one central place.",
    does: [
      "Monitors administrative tasks across supported systems and identifies overdue or incomplete workflows.",
      "Coordinates follow-ups between the other AI employees and your team.",
      "Prepares the daily summary and escalates what needs a management decision.",
    ],
  },
];

/* ── THE INTEGRATION GRID. ────────────────────────────────────────────
 *
 * 🔴 THE PRACTICE MANAGEMENT SYSTEMS ARE RESEARCHED, NOT CONFIRMED.
 * Founder instruction, 10 November 2026, was to research the systems
 * Australian practices actually use and add them. These seven are the
 * ones the market consistently names: Best Practice and MedicalDirector
 * in general practice, Genie in specialist practice, Cliniko, Halaxy
 * and Nookal in allied health, Zedmed across both.
 *
 * ⚠️ THAT IS A STATEMENT ABOUT THE MARKET, NOT ABOUT OUR INTEGRATIONS.
 * The care page's eleven partners were supplied by the founder and are
 * confirmed. These seven were chosen by research, and a logo on this
 * grid reads to a practice manager as "Novada connects to my system".
 * 🔴 THE FOUNDER MUST CONFIRM WHICH ARE REAL BEFORE THIS PAGE COMES
 * OUT OF noindex. Nothing is public while it is noindex, which is the
 * only reason this can sit here now.
 *
 * ⚠️ BEST PRACTICE, NOOKAL AND CLINIKO ONLY PUBLISH A REVERSED LOGO in
 * their headers, and a white logo on a white tile renders as an empty
 * box. Those three were processed: dark ground knocked out, near-white
 * ink darkened, saturated parts of each mark left alone.
 *
 * The last four are cross-sector and carry over from the care page.
 * ──────────────────────────────────────────────────────────────────── */
const INTEGRATIONS = [
  { name: "Best Practice", file: "bestpractice.png" },
  { name: "MedicalDirector", file: "medicaldirector.svg" },
  { name: "Genie", file: "genie.svg" },
  { name: "Zedmed", file: "zedmed.png" },
  { name: "Cliniko", file: "cliniko.png" },
  { name: "Halaxy", file: "halaxy.svg" },
  { name: "Nookal", file: "nookal.png" },
  { name: "Xero", file: "xero.png" },
  { name: "Employment Hero", file: "employmenthero.png" },
  { name: "Twilio", file: "twilio.svg" },
  { name: "Microsoft 365", file: "microsoft365.png" },
];

const FAQ = [
  {
    q: "What is Novada AI Workforce?",
    a: "An AI-powered operational platform for Australian practices. You engage specialised AI employees that coordinate and execute approved administrative workflows across your supported practice systems.",
  },
  {
    q: "Will patients know they are speaking to an AI?",
    a: "Yes. The AI identifies itself as an AI assistant on every call, and a patient can ask to be put through to a person at any point. Urgent or potentially clinical matters are escalated through your approved procedures rather than handled by the AI.",
  },
  {
    q: "Can AI employees actually complete tasks?",
    a: "That is the core purpose of the offering. A supported AI employee is designed to perform permitted actions rather than simply recommend them. Actual capabilities depend on the available integrations, configured workflows, system permissions and required approvals.",
  },
  {
    q: "Do we need to replace our practice management software?",
    a: "Not necessarily. The platform works alongside supported existing applications rather than requiring a wholesale system replacement, and your existing systems remain authoritative for their own records unless explicitly agreed otherwise.",
  },
  {
    q: "Does the AI make clinical decisions?",
    a: "No. Clinical urgency and triage, interpretation of results, accepting or declining referrals on clinical grounds, and deciding who needs clinical review all remain with your clinicians. The AI handles the administration around those decisions.",
  },
  {
    q: "Can the AI handle our billing and Medicare claims?",
    a: "It can support the administration: identifying completed services awaiting billing, checking permitted administrative fields, flagging inconsistencies, tracking claim statuses and coordinating follow-up on rejections. It does not invent billable services, determine Medicare eligibility, select clinical billing codes independently or guarantee claim approval or revenue recovery.",
  },
  {
    q: "Can we hire just one AI employee?",
    a: "Yes. You can engage a single specialised AI employee and add others later. The roles, service scope and subscription terms are confirmed in your proposal.",
  },
  {
    q: "How is patient information protected?",
    a: "The platform connects to your systems through authorised, permission-scoped access, and every action an AI employee takes is recorded in the Control Centre's audit and activity records. Access controls, data retention, auditing and incident response are set out in your service agreement, and we confirm the specific permissions and contractual protections with you before any system is connected.",
  },
  {
    q: "Does Novada guarantee more revenue or fewer no-shows?",
    a: "No. The business value depends on the workflows implemented, the volume of tasks handled, integration complexity and the amount of human administrative effort reduced. Potential improvements should be measured against a real operational baseline.",
  },
  {
    /* ⚠️ NO FIGURE. Price does not appear in writing before a call. */
    q: "How much does it cost to hire an AI employee?",
    a: "Pricing is based on the selected AI employee, the required workflows, supported integrations, usage and implementation requirements. Your proposal sets out the applicable platform, implementation and ongoing subscription costs once the scope is understood.",
  },
];

/* ── PRIMITIVES. Identical to /care/ai-workforce. Fix one, fix both. ── */

function Cta({ children, href = "#book" }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      /* ⚠️ sm:whitespace-nowrap, NOT whitespace-nowrap: below sm a grid
         item's auto min-width lets an unwrappable label set the floor
         for the whole column and push the hero past the gutter. */
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

function SectionHead({
  children,
  sub,
  dark = false,
  wide = false,
}: {
  children: React.ReactNode;
  sub?: string;
  dark?: boolean;
  /** The wide measure, for the two longest headings. ⚠️ It is in
      PIXELS, not `ch`: `ch` resolves against the wrapper's font, which
      is the body sans and not the serif the heading is set in. */
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto text-center ${
        wide ? "max-w-[34ch] sm:max-w-[620px] lg:max-w-[1000px]" : "max-w-[46ch]"
      }`}
    >
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

/* 🔴 BLUE, NOT GREEN, founder instruction 29 October 2026. */
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
 * ⚠️ ALWAYS INSIDE A CLIPPING ANCESTOR, and z-0 NOT -z-10. The bands
 * paint their own background, so a negatively stacked child renders
 * behind it and the shapes vanish while the markup looks perfect.
 */
function Blobs({ flip = false }: { flip?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      <svg
        viewBox="0 0 400 400"
        className={`absolute h-[150%] w-[150%] ${flip ? "-right-24 -top-20" : "-left-24 -top-20"}`}
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

/* ── PRODUCT VISUALS. ─────────────────────────────────────────────────
 * ⚠️ WHITE CARDS, NOT INK PANELS. On a cream ground a dark panel reads
 * as a hole.
 * ⚠️ EVERY MOCK CARRIES AN "Example" CHIP. A figure describing the
 * state of one fictional record is ordinary dashboard content; a figure
 * describing what Novada achieves is never allowed in one.
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

function Avatar({ i }: { i: string }) {
  return (
    <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-white bg-brand-100 text-[12px] font-bold text-brand-700">
      {i}
    </span>
  );
}

function CallsVisual() {
  const tasks = [
    ["Rebooked, Tuesday 9:40am", 100],
    ["Referral documents requested", 60],
    ["Recall list, 14 patients", 35],
  ] as const;
  return (
    <div className="relative pt-16">
      <div className="absolute right-4 top-0 z-20 w-[180px] rounded-lg border border-ink-100 bg-white p-4 text-center shadow-float">
        <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-white">
          <Check aria-hidden className="h-4 w-4" strokeWidth={3} />
        </span>
        <p className="mt-2 text-[10px] font-semibold uppercase tracking-caps text-ink-400">
          Handled on the call
        </p>
        <p style={SERIF} className="mt-1 text-sm font-bold text-ink-950">
          Appointment booked
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

function DashboardVisual() {
  return (
    <div className="relative px-2 pb-16 pt-14 sm:px-6">
      <div className="absolute left-0 top-0 z-20 w-[172px] rounded-lg border border-ink-100 bg-white p-4 shadow-float">
        <div className="flex items-baseline justify-between gap-2">
          <p style={SERIF} className="text-2xl font-bold text-ink-950">
            85%
          </p>
          <span className="text-[10px] font-semibold uppercase tracking-caps text-ink-400">
            Referral file
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
              Good morning. Here is your front desk.
            </p>
            <p className="mt-1.5 text-xs text-white/75">
              11 calls handled, 2 escalations, 1 approval waiting
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 p-5">
            {["Calls", "Cancellations", "Referrals", "Claims"].map((t) => (
              <div key={t} className="rounded-xs bg-ink-50 p-3">
                <p className="text-[10px] font-semibold uppercase tracking-caps text-ink-400">{t}</p>
                <span aria-hidden className="mt-2 block h-1.5 w-2/3 rounded bg-ink-200" />
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="absolute bottom-0 right-0 z-20 w-[212px] rounded-lg border border-ink-100 bg-white p-4 text-center shadow-float">
        <p style={SERIF} className="text-sm font-bold text-ink-950">
          Escalated to the practice manager
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

function MetricsVisual() {
  const bars = [62, 88, 74, 96, 81];
  const R = 42;
  const C = 2 * Math.PI * R;
  const pct = 92;
  return (
    <div className="relative pb-6">
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white px-3 py-1.5 shadow-raise">
            <span aria-hidden className="h-2 w-2 rounded-full bg-brand-500" />
            <span className="text-[11px] font-semibold text-ink-600">Front desk indicators</span>
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
              Calls answered, by week
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
              Slots refilled
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
            <span>Sat</span>
          </div>
        </div>
      </div>
      <Blobs flip />
    </div>
  );
}

const VISUALS: Record<string, React.ComponentType> = {
  work: CallsVisual,
  control: DashboardVisual,
  systems: MetricsVisual,
};

/* ── THE PAGE ─────────────────────────────────────────────────────── */

export default function AiWorkforcePage() {
  return (
    <div
      data-theme="desk"
      data-lp="cream"
      className="min-h-screen font-sans"
      style={{ backgroundColor: CREAM }}
    >
            <LpHeader />

      <main>
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: CREAM }}>
          <div
            className={`${FRAME} ${GUTTER} relative grid items-center gap-12 pb-20 pt-6 md:pb-28 md:pt-16 lg:grid-cols-[0.92fr_1.12fr] lg:gap-10`}
          >
            {/* ⚠️ min-w-0 ON BOTH GRID ITEMS. A grid item's min-width is
                auto, so the widest unbreakable thing inside either
                column silently widens BOTH and the h1 renders past the
                right gutter. */}
            <div className="min-w-0">
              <p className={`${MICRO} text-brand-500`}>
                For Australian GP, specialist &amp; allied health practices
              </p>

              <h1
                style={SERIF}
                className="mt-5 text-[clamp(2.1rem,1.35rem+3.2vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.02em] text-ink-950"
              >
                Hire AI employees that actually run your practice
                administration.
              </h1>

              {/* ⚠️ TWO SENTENCES. The page this replaced opened with a
                  paragraph four times this long. Do not grow it back. */}
              <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-ink-600">
                Novada AI employees answer patient calls, refill cancelled
                appointments, chase referral documents, run recalls and work
                your billing exceptions, inside the systems you already use.
                Your clinicians keep every clinical and billing decision.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Cta href="#book">Book a discovery call</Cta>
                <a
                  href="#employees"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xs bg-brand-100 px-6 text-[13px] font-bold uppercase tracking-caps text-brand-700 transition-colors duration-150 ease-standard hover:bg-brand-200 sm:whitespace-nowrap"
                >
                  Meet your AI employees
                  <ChevronDown aria-hidden className="h-4 w-4" />
                </a>
              </div>

              {/* ⚠️ UNBRANDED BY NECESSITY. No platform name, no
                  wordmark, no green, and nothing here is a link. */}
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                <div className="flex items-center gap-2.5">
                  <Stars />
                  <span className="text-sm font-bold text-ink-950">5.0</span>
                  <span className="text-sm text-ink-500">from 77 provider reviews</span>
                </div>
              </div>
            </div>

            <div className="min-w-0 lg:pl-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ai-workforce/hero-practices.png"
                alt="The Novada AI Control Centre, with a practice manager reviewing the morning's front desk summary"
                width={938}
                height={654}
                fetchPriority="high"
                decoding="async"
                /* ⚠️ NO max-w. Capping it leaves a column of dead cream
                   beside the headline and the pair stops reading as a
                   composition. */
                className="h-auto w-full lg:-mr-6 xl:-mr-10"
              />
            </div>
          </div>
        </section>

        {/* ── CLIENT STRIP ───────────────────────────────────────────
            🔴 THESE ARE CARE PROVIDERS. See note 3 in the file header.
            The line below says "healthcare providers", not "practices",
            and it must keep saying something true. */}
        <section className="border-y border-ink-100/70" style={{ backgroundColor: CREAM_DEEP }}>
          <div className={`${FRAME} ${GUTTER} py-10`}>
            <p style={SERIF} className="text-center text-lg font-bold text-ink-800">
              Australian healthcare providers already run Novada AI employees
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
        </Section>

        {/* ── FEATURE BLOCKS ───────────────────────────────────────── */}
        {FEATURES.map((f, i) => {
          const Visual = VISUALS[f.key];
          const flip = i % 2 === 1;
          return (
            /* ⚠️ overflow-hidden IS LOAD-BEARING: the shapes behind each
               card carry negative offsets and without a clip they
               extend the document past the viewport at 390px. */
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

        {/* ── THE DEEP BAND ────────────────────────────────────────── */}
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
            🔴 CARE PROVIDERS, AND THE HEADING SAYS SO. See note 3. */}
        <Section>
          <SectionHead wide>
            Care and disability providers already trust Novada with the
            operations behind their service.
          </SectionHead>

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
          <SectionHead sub="See how an AI workforce would fit your practice:">
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

        {/* ── HUMAN OVERSIGHT ──────────────────────────────────────────
            🔴 NEW ON THIS PAGE. See the note above OVERSIGHT: this AI
            answers calls from patients and touches Medicare billing,
            and until today the only boundary statements on the page
            were the five lines on the role cards. */}
        <Section bg={CREAM}>
          <SectionHead wide>
            Your AI employees do the administration. Your clinicians keep the
            clinical calls.
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
            The purpose of AI here is to reduce unnecessary manual effort, not
            to move clinical judgement, accountability or patient safety away
            from the people responsible for them.
          </p>
        </Section>

        {/* ── THE SIX AI EMPLOYEES ─────────────────────────────────── */}
        <Section id="employees" bg={CREAM_DEEP}>
          <SectionHead sub="Each one runs a defined administrative process end to end. Start with the one under the most pressure and add others into the same Control Centre later.">
            Meet the six AI employees
          </SectionHead>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {EMPLOYEES.map((e, i) => (
              <article
                key={e.role}
                className="reveal flex flex-col rounded-lg border border-ink-100 bg-white p-7 shadow-lift transition-[transform,box-shadow] duration-200 ease-standard hover:-translate-y-0.5"
                style={{ ["--reveal-delay" as string]: `${Math.min(i, 4) * 60}ms` }}
              >
                <p className={`${MICRO} text-brand-500`}>{e.role}</p>

                <h3 style={SERIF} className="mt-4 text-lg font-bold leading-snug text-ink-950">
                  {e.lead}
                </h3>

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

                {/* ⚠️ THE PER-ROLE BOUNDARY LINES WERE REMOVED ON
                    FOUNDER INSTRUCTION, 10 November 2026, after the
                    oversight band below was added.

                    🔴 EVERY ONE OF THE FIVE CONCEPTS THEY CARRIED IS
                    STILL ON THIS PAGE, TWICE, and that is the only
                    reason the removal is safe:

                      AI identification on calls  -> the oversight
                        band's first column, and the FAQ answer "Will
                        patients know they are speaking to an AI?"
                      clinical urgency and triage -> third column, and
                        the FAQ answer "Does the AI make clinical
                        decisions?"
                      referral acceptance         -> third column, same
                        FAQ answer
                      test results and recalls    -> third column, same
                        FAQ answer
                      Medicare codes and claims   -> third column, and
                        the FAQ answer "Can the AI handle our billing
                        and Medicare claims?"

                    ⚠️ SO THOSE TWO BANDS ARE NOW LOAD-BEARING. Check
                    both before shortening either. */}
              </article>
            ))}
          </div>
        </Section>

        {/* ── INTEGRATIONS ─────────────────────────────────────────────
            🔴 FOUR TILES. See note 4: the rest of the supplied list is
            NDIS and aged care software and does not belong here. The
            practice management systems have been asked for. */}
        <Section id="integrations">
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
        <Section bg={CREAM_DEEP}>
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
              sub="A free 30-minute conversation about your front desk, your systems, and which administrative work could be handled safely. No obligation to proceed."
            >
              Hire your next AI practice team
            </SectionHead>

            <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-12">
              <div className="min-w-0">
                <p className={`${MICRO} text-brand-200`}>On the call we will</p>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {[
                    "Walk through your current front desk workload and systems.",
                    "Find your highest-volume repetitive administrative tasks.",
                    "Say which of them could be safely automated, and which could not.",
                    "Explain the six roles and how the Control Centre works.",
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
                {/* ✅ practices-ai-workforce IS ITS OWN CALENDAR AND
                    ITS OWN PIPELINE, wired 11 November 2026 after
                    verifying the id against the API by name and by
                    redirect. Never repoint this at another desk: each
                    calendar feeds a different pipeline and a different
                    confirmation page, so borrowing one files a
                    practices enquiry against a different offer and
                    sends the booker a confirmation for something they
                    did not ask for. Unlike a booking that cannot be
                    made, that one cannot be recovered.

                    ⚠️ `source` is what the confirmation page and
                    the CRM read to attribute the booking. Changing it
                    silently breaks attribution without breaking the
                    booking, which is the hardest kind of fault to
                    notice. */}
                <BookingEmbed
                  desk="practices-ai-workforce"
                  source="practices-ai-workforce"
                  tone="dark"
                />
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
        label="Book your AI Workforce discovery call"
        tagline="Free 30-minute discovery conversation."
        href="#book"
      />
    </div>
  );
}
