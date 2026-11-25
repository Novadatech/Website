/*
 * ══════════════════════════════════════════════════════════════════════
 * WORKFORCE CONTINUITY: THE COPY, AU.
 *
 * Founder instruction, 25 Nov 2026: a new offer with its own pages,
 * built in the current site design, using the copy of the founder's
 * draft site (novada-workforce-continuity-2026 .chatgpt.site) WORD FOR
 * WORD. Nine pages: home, what we do, how it works, who we support, and
 * five industry solutions.
 *
 * 🔴 THIS OFFER IS SEPARATE FROM THE AI WORKFORCE. Its pages link only to
 * each other (and to the legal pages). They never link to /care,
 * /practices or /ai-workforce. "/" is the neutral home that lets a
 * visitor choose between the two.
 *
 * 🔴 THE COPY IS THE FOUNDER'S. Change it only on instruction. The one
 * edit made in porting: headings that the draft split over two lines
 * with no space ("beforethe") are joined with a space.
 *
 * ⚠️ BOOKING: one calendar for AU, still to come from the founder. Until
 * it arrives every "review" CTA opens an email with the page's own
 * subject line, exactly as the draft does. See WC_CALENDAR below.
 * ══════════════════════════════════════════════════════════════════════
 */

export const WC_BASE = "/workforce-continuity";
export const WC_EMAIL = "support@novadatech.com.au";
/** 🔴 Set to the founder's calendar embed URL when it arrives; the
    review card then renders the calendar instead of the email button. */
export const WC_CALENDAR: string | null = null;
/** The industry launching first, and the footer line. Per market. */
export const WC_LIVE = "ndis-aged-care";
export const WC_REVIEW_H3 = "A practical starting point for your casual workforce.";
export const WC_TAGLINE = "Your own casual workforce. Recruited, prepared and coordinated for your business.";

/* ── PROOF, shared with the AI Workforce pages ─────────────────────────
 * 🔴 The same three founder-supplied client quotes the care page runs,
 * VERBATIM. They are about working with Novada Tech, not about this
 * offer, and the strip line says only that these providers work with
 * Novada Tech. Never edit a quote to mention casual pools or cover.
 * ⚠️ EMMANUELLA, TWO LS. */
export const WC_STRIP = "Care providers across Australia already work with Novada Tech";
export const WC_TESTIMONIALS = [
  { org: "Maxicare Plus", name: "Founder, Josh",
    quote: "One thing we value about Novada Tech is that they understand the operational challenges NDIS providers face. Building a care business requires more than finding workers. It requires reliable processes, proper planning and consistent support. Novada brings a practical, proactive approach and genuinely takes the time to understand what our organisation needs." },
  { org: "Morning Star Community Services", name: "Founder, Emmanuella",
    quote: "In the care sector, having reliable people and well-managed processes makes a real difference. What stands out about Novada Tech is their professionalism, attention to detail and focus on making operations more manageable. They understand the importance of accountability, consistency and having the right support behind service delivery." },
  { org: "Support Link", name: "Founder, Peter",
    quote: "Novada Tech takes a structured and professional approach to understanding business needs. They recognise the importance of strong workforce processes, clear communication and dependable administrative support. Their commitment to practical solutions and ongoing improvement is what makes them a valuable partner." },
];
export const WC_PROVIDERS = [
  { name: "Maxicare Plus", file: "maxicare.png", h: "h-9 md:h-10" },
  { name: "Morning Star Community Services", file: "morningstar.png", h: "h-14 md:h-16" },
  { name: "Supportslink", file: "supportslink.png", h: "h-9 md:h-11" },
];

export type Industry = { slug: string; name: string; blurb: string };

export const INDUSTRIES: Industry[] = [
  { slug: "ndis-aged-care", name: "NDIS & Aged Care", blurb: "Including home care. Build your casual care team around the people and services you support." },
  { slug: "hospitality-tourism", name: "Hospitality & Tourism", blurb: "Prepare familiar teams for busy service periods, guest arrivals and events." },
  { slug: "construction", name: "Construction", blurb: "Build a casual crew around the roles, tasks and sites where you need cover." },
  { slug: "manufacturing-transport-logistics", name: "Manufacturing, Transport & Logistics", blurb: "Coordinate casual capacity for production, warehouses, depots and agreed transport roles." },
  { slug: "mining-resources-energy", name: "Mining, Resources & Energy", blurb: "Prepare your pool around agreed duties, site requirements and mobilisation lead times." },
];

export const LAUNCH_BANNER = {
  strong: "Starting with care providers.",
  p: "Our initial launch focuses on NDIS, aged care and home care. We’re preparing the other industry solutions and confirm support for your roles and locations during your review.",
};

/* ── section shapes ─────────────────────────────────────────────────── */

export type Hero = {
  audience: string; h1: string; h1b: string; lead: string; strong?: string;
  reassurance: string; secondary: { label: string; href: string };
  availability?: string; visual: string;
};
export type Flow = {
  kicker: string; h2: string; intro: string;
  steps: { t: string; s: string }[]; outcome: { t: string; p: string }; keypoints: string[];
};
export type Faq = { eyebrow: string; h2: string; sub: string; askSubject: string; items: { q: string; a: string }[] };
export type Closing = { eyebrow: string; h2: string; p: string; li: string[]; boxP: string; subject: string };

export type Block =
  | { kind: "split"; eyebrow: string; h2: string; paras: string[]; link?: { label: string; href: string }; cards: { h: string; p: string }[]; bg?: "deep" | "cream" | "white" }
  | { kind: "industries"; eyebrow: string; h2: string; sub: string; link?: { label: string; href: string } }
  | { kind: "process"; eyebrow: string; h2: string; p: string; link: { label: string; href: string }; boxH: string; steps: { t: string; d: string }[]; visual: string }
  | { kind: "trio"; id?: string; eyebrow: string; h2: string; p?: string; items: { label?: string; h: string; p: string }[]; foot?: { strong: string; p: string }; link?: { label: string; href: string }; visual?: string; bg?: "deep" | "cream" | "white" | "ink"; reassure?: { strong: string; small: string } }
  | { kind: "services"; id?: string; eyebrow: string; h2: string; p: string; rows: { h: string; p: string; li: string[]; note: string; visual?: string }[]; callout?: { strong: string; p: string; link: { label: string; href: string } } }
  | { kind: "table"; eyebrow: string; h2: string; p: string; head: string[]; rows: string[][]; callout: { h: string; p: string } }
  | { kind: "steps"; eyebrow: string; h2: string; p: string; steps: { label: string; h: string; p: string; owner: string }[]; legal: string; visual: string }
  | { kind: "example"; id?: string; eyebrow: string; h2: string; p: string; label?: string; quote: string; quoteNote: string; chips?: string[]; note?: string; link: { label: string; href: string }; a: { tag: string; steps: { h: string; p: string }[] }; b: { tag: string; steps: { h: string; p: string }[] }; rule: { strong: string; p: string }; visual: string }
  | { kind: "status"; eyebrow: string; h2: string; p: string; items: { label: string; h: string; p: string }[]; foot: { strong: string; p: string }; link: { label: string; href: string }; visual: string }
  | { kind: "roles"; eyebrow: string; h2: string; p: string; roles: string[]; note: string; visual: string }
  | { kind: "fit"; eyebrow: string; h2: string; paras: string[]; link: { label: string; href: string }; visual: string }
  | { kind: "sectors"; eyebrow: string; h2: string; p: string; items: { h: string; p: string }[]; fit: { strong: string; p: string } };

export type WcPage = {
  slug: string; title: string; description: string;
  hero: Hero; flow: Flow; blocks: Block[]; faq: Faq; closing: Closing;
};

const KEYPOINTS = ["Your own directly employed casual team", "Readiness and availability in view", "Requested cover coordinated for you"];
const OUTCOME = { t: "Your team. A clear process for cover.", p: "Confirmed cover, or an open gap and next step." };
const BOX_P = "Talk through your staffing gaps and current systems. We’ll confirm service availability, discuss a suitable scope and explain the next steps.";
const CONTROL_INDUSTRY = (p: string): Block => ({
  kind: "trio", eyebrow: "Built around your operation", h2: "Your pool. Your key decisions.",
  p: "Your business interviews, selects and directly employs its casual workers. Novada coordinates the agreed work around recruitment, readiness and requested cover.",
  items: [
    { h: "Keep your existing systems", p: "Your regular roster, timekeeping and payroll remain with your business. Supported connections and handovers are agreed before activation." },
    { h: "Define the role and workplace requirements", p: "Agree what needs to be checked for each assignment. Required competence assessments, supervision and workplace approvals stay with your business." },
    { h: "Stay informed and in control", p: "Authorised people can review the history and take over when needed. Unresolved requests escalate to your nominated contact." },
  ],
  bg: p === "deep" ? "deep" : p === "white" ? "white" : "cream",
});
const RULE = { strong: "Worker acceptance comes before confirmation.", p: "Cover depends on suitability, availability and acceptance. Service hours and escalation deadlines are agreed before activation." };
const SERVICE_CALLOUT = { strong: "One service, with visibility in Novada.", p: "Follow recruitment progress, readiness and cover requests. Your regular roster, timesheets and payroll stay in place.", link: { label: "View the full service", href: `${WC_BASE}/what-we-do` } };

/* ══ 1 · HOME ═════════════════════════════════════════════════════════ */
const home: WcPage = {
  slug: "",
  title: "Casual Workforce Pools & Shift Cover | Novada Tech",
  description: "Build and maintain your own casual workforce with Novada. Recruitment, readiness and requested cover for directly employed workers. Start with a workforce review.",
  hero: {
    audience: "For business owners and workforce leaders",
    h1: "Your own casual workforce.", h1b: "Built and managed for you.",
    lead: "We recruit and prepare casual workers for your business, maintain their readiness and availability, and coordinate cover when you need it.",
    reassurance: "You employ the workers and approve hires. Keep your existing roster.",
    secondary: { label: "Explore the service", href: `${WC_BASE}/what-we-do` },
    visual: "home-hero",
  },
  flow: {
    kicker: "Recruitment & workforce continuity", h2: "A team built for your business.",
    intro: "From the first application to the next cover request.",
    steps: [
      { t: "Recruit your casual team", s: "Sourcing, references and required checks" },
      { t: "Keep the pool ready", s: "Onboarding, induction and availability" },
      { t: "Coordinate requested cover", s: "Matching, outreach and acceptance" },
    ],
    outcome: OUTCOME, keypoints: KEYPOINTS,
  },
  blocks: [
    { kind: "split", eyebrow: "The workforce behind your next shift", h2: "Build capacity before the next gap.",
      paras: ["A casual pool is useful when it reflects the work you need covered—and stays connected to your business between shifts.",
        "Novada brings recruitment, preparation and requested cover into one managed service. Start with suitable existing casuals, recruit into the gaps, or combine both."],
      link: { label: "Explore what we do", href: `${WC_BASE}/what-we-do` },
      cards: [
        { h: "Build the team around your needs", p: "Recruit for your roles, locations and recurring shifts. You interview, select and directly employ your people." },
        { h: "Keep your pool useful", p: "Follow up requirements, refresh availability and maintain engagement so you can see who may be suitable." },
        { h: "Coordinate the cover you request", p: "Send the requirement. We manage worker outreach, capture acceptance and keep the outcome visible." },
      ] },
    { kind: "industries", eyebrow: "Solutions by industry", h2: "Your industry. Your workforce needs.",
      sub: "Explore how the service can be shaped around your roles and the work you do.",
      link: { label: "See who we support", href: `${WC_BASE}/who-we-support` } },
    { kind: "process", eyebrow: "When a gap opens up", h2: "Send the request. Follow the outcome.",
      p: "Tell us the role, location and shift you need covered. We coordinate suitable people from the casual pool your business employs.",
      link: { label: "See how it works", href: `${WC_BASE}/how-it-works` },
      boxH: "A clear path from request to answer.",
      steps: [
        { t: "Check the right requirements", d: "Review role preparation, availability and known commitments." },
        { t: "Contact eligible workers", d: "Coordinate calls and SMS, then obtain acceptance of the specific shift." },
        { t: "Confirm cover or surface the gap", d: "Record accepted assignments. Escalate unresolved requests to your nominated contact." },
      ], visual: "home-process" },
    { kind: "trio", eyebrow: "Fits around your business", h2: "Your people. Your key decisions.",
      p: "You choose who joins the team and keep your regular roster, timesheets and payroll. Novada coordinates the agreed work around your casual pool.",
      items: [
        { h: "Your hiring decisions stay with you", p: "You conduct interviews and approve employment. Required assessments and workplace decisions remain with your business." },
        { h: "One view of the work in progress", p: "Follow recruitment, worker readiness and cover requests in Novada. Supported system connections are confirmed during scoping." },
        { h: "Clear rules and human control", p: "Agree permissions, service hours and escalation contacts. Authorised people can review the history and take over when needed." },
      ], bg: "deep" },
  ],
  faq: {
    eyebrow: "FAQ", h2: "A clear scope. From the start.", sub: "Answers to help you decide whether the service fits your business.",
    askSubject: "Question about Novada",
    items: [
      { q: "What does Novada manage?", a: "Recruitment administration, onboarding coordination, ongoing casual-pool readiness and requested shift cover. We agree the roles, locations and service scope with your business." },
      { q: "Who employs the casual workers?", a: "Your business does. You conduct interviews, approve hires and retain employer responsibilities." },
      { q: "Can we start with our existing casual team?", a: "Yes. We can assess suitable existing casuals, identify readiness or availability gaps, and recruit additional workers within the agreed scope." },
      { q: "Do we need to change our rostering system?", a: "Your regular roster, timesheets and payroll stay in place. We confirm supported connections and the update or handover process before activation." },
      { q: "What happens in the workforce review?", a: "We discuss your recurring gaps, existing casual team, roles and locations. We then explain a suitable starting scope and confirm service availability." },
    ],
  },
  closing: {
    eyebrow: "Start with your workforce needs", h2: "Build the casual workforce your business needs.",
    p: "Discuss your current gaps and the practical steps to build and maintain a useful relief team in a free 30-minute workforce review.",
    li: ["Your recurring staffing gaps and existing casual team", "The roles and locations your pool needs to cover", "A practical starting scope and service availability"],
    boxP: BOX_P, subject: "Free workforce review — Workforce continuity",
  },
};

/* ══ 2 · WHAT WE DO ═══════════════════════════════════════════════════ */
const whatWeDo: WcPage = {
  slug: "what-we-do",
  title: "What We Do | Novada Tech",
  description: "Explore Novada’s recruitment, onboarding, casual-pool readiness and requested-cover services. You employ the workers and keep your existing roster.",
  hero: {
    audience: "Managed casual workforce services",
    h1: "Recruitment, readiness", h1b: "and requested cover.",
    lead: "One managed service for the work that keeps your own casual pool moving—from recruitment and onboarding to ongoing availability and shift coordination.",
    reassurance: "You employ the workers. Your team retains hiring decisions and required professional assessments.",
    secondary: { label: "See how it works", href: `${WC_BASE}/how-it-works` },
    visual: "wwd-hero",
  },
  flow: {
    kicker: "Recruitment & workforce continuity", h2: "The work behind your casual pool.",
    intro: "A connected service from recruitment to requested cover.",
    steps: [
      { t: "Recruit & onboard", s: "Applications, checks and approved preparation" },
      { t: "Maintain readiness", s: "Requirements, engagement and availability" },
      { t: "Coordinate requested cover", s: "Outreach, acceptance and clear updates" },
    ],
    outcome: OUTCOME, keypoints: KEYPOINTS,
  },
  blocks: [
    { kind: "services", eyebrow: "What is included", h2: "The detail that makes your pool useful.",
      p: "Agree the service around your workforce needs, then see the work moving forward.",
      rows: [
        { h: "Recruit for the roles you need", p: "Build the pool around your recurring gaps, locations and shift patterns. Start with existing casuals and recruit additional capacity where it is needed.",
          li: ["Candidate sourcing and applications", "Approved screening and follow-ups", "Interview scheduling", "References and required checks"], note: "Your business conducts interviews and approves hires." },
        { h: "Prepare workers for your business", p: "Coordinate the approved documents and preparation that each person needs for the role and workplace. Keep incomplete steps visible.",
          li: ["Employment document coordination", "Organisation and site induction", "Approved training tasks", "Assessment and approval tracking"], note: "Your team or a qualified assessor completes practical assessments and required approvals.", visual: "wwd-readiness" },
        { h: "Maintain an active casual pool", p: "Keep the pool organised as people’s circumstances and requirements change. Bring readiness, availability and agreed role information into view.",
          li: ["Credential and training follow-ups", "Availability refreshes", "Worker engagement", "Recruitment into agreed pool gaps"], note: "Being ready for a role and accepting a particular shift are separate." },
        { h: "Coordinate the cover you request", p: "Tell us what needs covering. We check the pool, contact eligible workers and follow the request through to a recorded outcome.",
          li: ["Role and assignment matching", "Phone and SMS outreach", "Explicit worker acceptance", "Confirmation or unresolved-gap alerts"], note: "Your team continues to manage the regular roster. Unfilled requests go to your nominated contact." },
      ] },
    { kind: "table", eyebrow: "Shared work. Clear ownership.", h2: "Know who does what.",
      p: "We agree responsibilities before activation, including the approvals, connections and exceptions that matter to your business.",
      head: ["Work area", "Novada coordinates", "Your business retains"],
      rows: [
        ["Recruitment", "Applications, screening administration, references and interview bookings.", "Interviews, hiring decisions and the employment relationship."],
        ["Preparation", "Evidence, onboarding, approved induction and training follow-ups.", "Required assessments, workplace approvals and supervision."],
        ["Requested cover", "Pool matching, outreach, acceptance records and requester updates.", "Regular roster planning, agreed exceptions and operational decisions."],
        ["Ongoing visibility", "Pool records, outstanding requirements and cover-request history.", "Timekeeping, payroll and employer responsibilities."],
      ],
      callout: { h: "Automation with a clear route to human control.", p: "Novada’s AI service coordinates routine administration and communication within approved rules. Authorised people can review the history, pause automation and take over recruitment or cover coordination when needed. We demonstrate the process before the service begins." } },
  ],
  faq: {
    eyebrow: "FAQ", h2: "Understand the service. Agree the scope.", sub: "Answers to help you decide whether the service fits your business.",
    askSubject: "Question about Novada",
    items: [
      { q: "Does recruitment include interviewing candidates?", a: "Novada coordinates interview scheduling and follow-ups. Your business conducts interviews and makes the hiring decision." },
      { q: "What is included in onboarding?", a: "The agreed documents, induction, training tasks and readiness checks for the role and workplace. Your team or a qualified assessor completes practical assessments and approvals where required." },
      { q: "What does ongoing pool management involve?", a: "Readiness follow-ups, availability updates, worker engagement and recruitment within your agreed pool scope. The purpose is to keep the pool useful between assignments." },
      { q: "Does a ready worker automatically become available for every shift?", a: "No. Preparation for a role, current availability and acceptance of a particular assignment are separate. Each cover request needs its own checks and worker acceptance." },
      { q: "How is the service delivered?", a: "Novada’s AI service coordinates routine administration, follow-ups and communication within approved rules. Your business retains hiring decisions, required assessments and control over exceptions." },
    ],
  },
  closing: {
    eyebrow: "Start with your workforce needs", h2: "Decide which workforce tasks you want managed.",
    p: "Walk through your recruitment, readiness and cover process in a free 30-minute workforce review, then agree a practical starting scope.",
    li: ["Recruitment and onboarding tasks to include", "Readiness, availability and ongoing pool support", "Requested cover and the decisions your team retains"],
    boxP: BOX_P, subject: "Free workforce review — What we do",
  },
};

/* ══ 3 · HOW IT WORKS ═════════════════════════════════════════════════ */
const howItWorks: WcPage = {
  slug: "how-it-works",
  title: "How It Works | Novada Tech",
  description: "See how Novada builds and maintains your casual pool, coordinates requested shift cover and keeps outcomes clear. Your business retains key decisions.",
  hero: {
    audience: "From setup to requested cover",
    h1: "From workforce gaps", h1b: "to a coordinated casual team.",
    lead: "We agree the pool your business needs, prepare the people who join it, and establish a clear process for requesting cover and following each outcome.",
    reassurance: "Worker requirements, service hours and escalation contacts are agreed before activation.",
    secondary: { label: "Explore the cover process", href: "#cover-process" },
    visual: "hiw-hero",
  },
  flow: {
    kicker: "Recruitment & workforce continuity", h2: "Agree the scope. Build the pool.",
    intro: "A working process shaped around your business.",
    steps: [
      { t: "Define your workforce needs", s: "Roles, locations and recurring cover gaps" },
      { t: "Recruit & prepare", s: "Your interviews, approvals and induction" },
      { t: "Request cover", s: "An accepted assignment or visible open gap" },
    ],
    outcome: { t: "Every request has a recorded outcome.", p: "Confirmed cover, or an open gap and next step." },
    keypoints: ["A scope agreed before activation", "Your interviews and hiring approvals", "Clear updates and escalation"],
  },
  blocks: [
    { kind: "steps", eyebrow: "Getting started", h2: "Set up the pool. Establish the process.",
      p: "A useful casual workforce begins with a clear view of the roles, people and preparation your business needs.",
      steps: [
        { label: "Define the need", h: "Map your recurring gaps", p: "Review roles, locations, work patterns and your existing casual team. Agree where you need additional capacity and what the pool should support.", owner: "You confirm the pool scope and role requirements." },
        { label: "Agree the process", h: "Set the working rules", p: "Confirm authorised contacts, service hours, communication channels and escalation deadlines. Scope supported system connections or an agreed handover.", owner: "You approve the process before activation." },
        { label: "Build and maintain", h: "Prepare your casual team", p: "Progress recruitment and onboarding, bring suitable existing workers into view, and follow up requirements and availability as the pool develops.", owner: "You interview, approve hires and directly employ workers." },
      ],
      legal: "New workers become available for consideration after the relevant recruitment, employment and readiness steps are complete. The initial pool takes time to build; the activation plan is agreed during setup.",
      visual: "hiw-setup" },
    { kind: "example", id: "cover-process", eyebrow: "Your requested-cover process", h2: "A request becomes a clear next step.",
      p: "Send the requirement through Novada or an agreed supported channel. We check the pool and coordinate the response within your service hours.",
      label: "Illustrative request", quote: "“We need cover for Friday evening at our north location.”", quoteNote: "",
      chips: ["Role & duties", "Location", "Date & hours", "Work requirements"],
      note: "Supported channels and permissions are confirmed before activation, including whether WhatsApp requests or direct system updates are available.",
      link: { label: "Discuss your cover process", href: "#review" },
      a: { tag: "Your casual workforce", steps: [
        { h: "Check the request and pool", p: "Confirm the role, location, hours and requirements. Review suitable workers against current preparation, availability and known commitments." },
        { h: "Contact workers and obtain acceptance", p: "Coordinate phone or SMS outreach. A worker accepts the specific assignment; current requirements are checked again before confirmation." },
        { h: "Record the assignment and notify", p: "Record the accepted cover, update the requester and worker, then complete the agreed external roster update or handover." },
      ] },
      b: { tag: "If the pool cannot cover", steps: [
        { h: "Keep the gap visible", p: "If no eligible pool member accepts, your nominated contact receives the open gap, outreach history and next step before the agreed deadline." },
      ] },
      rule: RULE, visual: "hiw-sms" },
    { kind: "status", eyebrow: "Clear status at every step", h2: "Preparation, availability and acceptance each tell you something different.",
      p: "A pool member is considered for the actual assignment, using the agreed role and workplace requirements.",
      items: [
        { label: "Preparation", h: "Ready for the relevant work", p: "Required evidence, onboarding, induction and approvals are checked against the role and site." },
        { label: "Availability", h: "Potentially able to take the shift", p: "Reported availability and known commitments help determine who should be contacted." },
        { label: "Acceptance", h: "Confirmed for this assignment", p: "The worker accepts the specific shift and an assignment is recorded. External updates or handovers are tracked separately." },
      ],
      foot: { strong: "If a confirmed worker cancels:", p: "the affected slot reopens, your team receives an update and the agreed replacement process begins. The history stays visible." },
      link: { label: "Discuss your cover process", href: "#review" }, visual: "hiw-status" },
  ],
  faq: {
    eyebrow: "FAQ", h2: "From setup to shift requests.", sub: "Answers to help you decide whether the service fits your business.",
    askSubject: "Question about Novada",
    items: [
      { q: "What information do you need before starting?", a: "Your roles, locations, recurring shift needs, existing casual team and approved employment and preparation requirements. We also agree service hours and escalation contacts." },
      { q: "Can we request cover in advance or at short notice?", a: "The agreed process can support planned and urgent requests. Coverage depends on suitable workers being available and accepting the assignment within the available time." },
      { q: "How do you decide which workers to contact?", a: "We use the role and site requirements, current evidence, preparation, availability and known commitments. A worker must still accept the specific shift." },
      { q: "How do we know whether a shift is covered?", a: "The request shows its current status. Confirmation follows worker acceptance and a recorded assignment; an external roster update or handover is tracked separately where applicable." },
      { q: "What happens if a confirmed worker cancels?", a: "The affected slot reopens and follows the agreed replacement process. Your team receives an update, and the cancellation and subsequent actions remain visible." },
    ],
  },
  closing: {
    eyebrow: "Start with your workforce needs", h2: "See how this would work in your business.",
    p: "Bring a typical staffing gap to your free 30-minute workforce review. We’ll explain the process, your team’s involvement and the information needed to get started.",
    li: ["A typical cover request from your business", "Required worker preparation and system handovers", "Service hours, contacts and unresolved-gap escalation"],
    boxP: BOX_P, subject: "Free workforce review — How it works",
  },
};

/* ══ 4 · WHO WE SUPPORT ═══════════════════════════════════════════════ */
const whoWeSupport: WcPage = {
  slug: "who-we-support",
  title: "Who We Support | Novada Tech",
  description: "Explore Novada workforce solutions by industry. Initial focus on NDIS, aged care and home care, with other industry availability confirmed in a review.",
  hero: {
    audience: "Workforce support by industry",
    h1: "A stronger casual workforce.", h1b: "For your business.",
    lead: "For organisations with recurring staffing gaps, directly employed casual workers and a need for more consistent recruitment, readiness and cover coordination.",
    reassurance: "Start with suitable casual workers you already employ, recruit additional people, or combine both.",
    secondary: { label: "Choose your industry", href: "#industries" },
    availability: "Our initial launch focuses on NDIS, aged care and home care. Other industry solutions are being prepared; support for your roles and locations is confirmed during your review.",
    visual: "wws-hero",
  },
  flow: {
    kicker: "Find the right starting scope", h2: "A pool built around real demand.",
    intro: "The review starts with the work your business needs covered.",
    steps: [
      { t: "Recurring staffing gaps", s: "Roles, locations and shift patterns" },
      { t: "Your own casual workers", s: "Existing team members and new recruits" },
      { t: "A workable pool plan", s: "Preparation, engagement and requested cover" },
    ],
    outcome: OUTCOME,
    keypoints: ["For employers building casual capacity", "Start with existing workers or recruit", "Scope agreed for your roles and locations"],
  },
  blocks: [
    { kind: "industries", eyebrow: "Choose your industry", h2: "Built around the work you do.",
      sub: "Explore the roles, preparation and cover needs that shape your sector’s solution." },
    { kind: "fit", eyebrow: "Where the service fits", h2: "A stronger pool starts with recurring demand.",
      paras: ["Novada is designed for businesses that need ongoing casual capacity and have enough suitable work to keep their pool engaged.",
        "Pool size is only part of the picture. We look at the roles you use, where workers are needed, preparation requirements and how often cover requests arise."],
      link: { label: "Check the fit for your business", href: "#review" }, visual: "wws-fit" },
    { kind: "trio", eyebrow: "Start from where you are", h2: "Build on your current team.",
      p: "Your workforce review identifies a useful starting scope, whether you already have casual workers or need to recruit.",
      items: [
        { h: "Bring existing casuals into view", p: "Review who belongs in the managed pool, what is current and where readiness or availability information needs attention." },
        { h: "Recruit into the right gaps", p: "Add people around the roles, locations and shift patterns where more capacity would be useful." },
        { h: "Agree the cover process", p: "Set contacts, service hours, requirements and an escalation route for requests that remain unresolved." },
      ],
      foot: { strong: "Supporting more than one site?", p: "Define the role and preparation requirements for each agreed location. A worker’s readiness for one assignment does not automatically establish readiness for another." },
      link: { label: "Explore the service scope", href: `${WC_BASE}/what-we-do` }, visual: "wws-team", bg: "deep" },
  ],
  faq: {
    eyebrow: "FAQ", h2: "Find your fit. Confirm availability.", sub: "Answers to help you decide whether the service fits your business.",
    askSubject: "Question about Novada",
    items: [
      { q: "Which industries are represented?", a: "NDIS and aged care, including home care; hospitality and tourism; construction; manufacturing, transport and logistics; and mining, resources and energy." },
      { q: "Are all industry services available now?", a: "Care providers are the initial launch focus. We are preparing other industry solutions and confirm availability for your sector, roles and locations during the review." },
      { q: "What makes a business a good fit?", a: "Recurring cover needs, a clear employment and preparation process, and enough suitable work to sustain an engaged casual pool." },
      { q: "Do we need a large workforce?", a: "Fit depends on your staffing patterns, required roles and how the pool will be used. We assess those factors during the review." },
      { q: "Can you support different sites and roles?", a: "We define the preparation and eligibility requirements for each agreed role and site. Support depends on the scope and availability confirmed for your business." },
    ],
  },
  closing: {
    eyebrow: "Start with your workforce needs", h2: "Let’s check the fit for your workforce.",
    p: "Tell us your industry, locations and recurring gaps in a free 30-minute workforce review. We’ll confirm whether the service fits and what a suitable starting scope would involve.",
    li: ["Your industry, workforce roles and service locations", "Recurring demand and suitable existing casual workers", "Service availability and a scope suited to your business"],
    boxP: BOX_P, subject: "Free workforce review — Who we support",
  },
};

/* ══ 5 · NDIS & AGED CARE ═════════════════════════════════════════════ */
const ndis: WcPage = {
  slug: "ndis-aged-care",
  title: "Casual Workforce Pools & Shift Cover for Care Providers | Novada Tech",
  description: "Build and maintain your own casual care workforce with Novada. Recruitment, onboarding, readiness and requested shift cover for NDIS, aged care and home care providers.",
  hero: {
    audience: "For NDIS, aged care & home care providers",
    h1: "Your own casual care team.", h1b: "Built and managed for you.",
    lead: "We recruit and prepare your casual workforce, maintain readiness and coordinate the shift cover you request.",
    strong: "Keep your existing rostering system.",
    reassurance: "You interview, approve hires and employ your pool.",
    secondary: { label: "Explore the service", href: "#what-we-do" },
    visual: "ndis-hero",
  },
  flow: {
    kicker: "Recruitment & workforce continuity", h2: "A team prepared for your service.",
    intro: "Built around your roles, locations and hardest-to-cover shifts.",
    steps: [
      { t: "Recruit your casual team", s: "Sourcing, references & required checks" },
      { t: "Keep the pool ready", s: "Onboarding, induction & ongoing readiness" },
      { t: "Coordinate requested cover", s: "Matching, outreach & worker acceptance" },
    ],
    outcome: { t: "A clear outcome for every request.", p: "Confirmed cover, or an open gap and next step." },
    keypoints: ["A casual pool built for your organisation", "Readiness and availability kept in view", "Cover coordinated when you request it"],
  },
  blocks: [
    { kind: "services", id: "what-we-do", eyebrow: "What we do", h2: "Build the team. Keep it ready. Put it to work.",
      p: "When a shift opens up, you need people who fit the work and can accept it. Novada builds and maintains your casual pool, then manages the calls, messages and follow-ups to arrange cover.",
      rows: [
        { h: "Build your casual team", p: "Recruit around the roles, locations and shift patterns where you need more capacity.",
          li: ["Candidate sourcing, applications and interview bookings", "Reference checks and required clearance verification", "Onboarding, induction and training coordination"], note: "You interview, approve hires and employ your workers." },
        { h: "Keep the pool active", p: "Maintain the readiness and relationships that make your casual team useful between shifts.",
          li: ["Credential and training follow-ups", "Availability updates and worker engagement", "Recruitment to replenish your agreed pool"], note: "Include suitable casual workers you already employ." },
        { h: "Coordinate your cover", p: "Send us the shift you need covered. We coordinate suitable casual workers your organisation employs, and keep you informed.",
          li: ["Worker matching, calls and SMS outreach", "Acceptance and agreed roster updates", "Clear confirmation or an unresolved-gap alert"], note: "Your team continues to manage the regular roster." },
      ],
      callout: { strong: "One managed service, with visibility in the Novada platform.", p: "See recruitment progress, pool readiness and the status of your cover requests.", link: { label: "Discuss your casual pool", href: "#review" } } },
    { kind: "example", id: "how-it-works", eyebrow: "When you need cover", h2: "Request cover. We coordinate your casual pool.",
      p: "Your regular team cannot cover a shift. Send the request to Novada and we coordinate the next steps within your agreed service hours.",
      quote: "“We need cover for Friday evening.”",
      quoteNote: "Share the role, location, hours and relevant care requirements. We check your approved pool and contact suitable workers.",
      note: "Requests can come through Novada or a supported connection to your existing system. We agree the process before activation.",
      label: "Illustrative cover process",
      link: { label: "See how this could work for your team", href: "#review" },
      a: { tag: "Your casual workforce", steps: [
        { h: "Check suitability and availability", p: "Match the shift to workers with the relevant capabilities, current requirements and provider-specific preparation." },
        { h: "Contact workers and confirm acceptance", p: "Coordinate calls and messages, confirm who accepts the specific shift, and check that the assignment remains suitable." },
        { h: "Record the assignment and keep you informed", p: "Record confirmed cover, notify you and the worker, and complete the agreed roster update or handover. Any further replacement need follows the agreed process." },
      ] },
      b: { tag: "If your pool cannot cover", steps: [
        { h: "Alert your nominated contact", p: "If no eligible pool member accepts, we alert your nominated contact before the agreed deadline, with the open gap, outreach history and next step." },
      ] },
      rule: { strong: "Cover depends on suitability, availability and acceptance.", p: "A shift is confirmed only when a suitable worker accepts and the assignment is recorded. Open gaps stay visible." },
      visual: "ndis-escalation" },
    { kind: "trio", eyebrow: "Fits around your operation", h2: "Keep your roster. Build your relief workforce.",
      p: "Your regular scheduling, timesheets and payroll stay in place. Novada manages your casual pool and the cover requests you assign to the service.",
      reassure: { strong: "Your team keeps the tools it knows.", small: "We confirm supported connections, permissions and the update process for your systems before activation." },
      items: [
        { label: "Recruitment & onboarding", h: "See your team taking shape", p: "Track candidates, interviews and onboarding in Novada, or connect an existing recruitment system where supported." },
        { label: "Pool readiness", h: "Know who can be considered", p: "See capabilities, required evidence, induction status and recently updated availability. Eligibility and shift acceptance remain separate." },
        { label: "Requested cover", h: "Follow each request to an outcome", p: "See outreach, confirmed assignments and open gaps. Authorised changes are made through a supported connection or an agreed handover." },
      ], visual: "ndis-training", bg: "white" },
    { kind: "sectors", eyebrow: "Who we support", h2: "For care providers building a stronger casual workforce.",
      p: "For owners, operations leaders and workforce managers who need ongoing relief capacity and less time spent chasing workers.",
      items: [
        { h: "NDIS providers", p: "Casual support teams prepared around your service locations, participant requirements and recurring staffing gaps." },
        { h: "Aged care providers", p: "Relief capacity for residential and community services, with role-specific preparation and readiness kept in view." },
        { h: "Home care providers", p: "Casual workers matched to the locations, travel needs and shift patterns of care delivered at home." },
      ],
      fit: { strong: "Best fit:", p: "providers with recurring cover needs and enough suitable work to keep a casual pool engaged. Start with existing casuals, recruit additional workers, or combine both." } },
    { kind: "trio", eyebrow: "Managed work. Clear responsibility.", h2: "We coordinate the work. You keep the key decisions.",
      p: "Routine recruitment administration, readiness follow-ups and requested-cover coordination run through Novada’s AI service, within your approved rules. We show you how the service works before it begins.",
      items: [
        { h: "You choose who joins your team", p: "Your organisation conducts interviews, approves employment and completes the assessments and care decisions that require your judgment." },
        { h: "Routine cover follows agreed rules", p: "Set eligibility requirements, service hours and escalation contacts. Defined exceptions go to your nominated people." },
        { h: "Your team can take control", p: "Authorised people can review the history, pause automation and take over recruitment or cover coordination when needed." },
      ], visual: "ndis-decision", bg: "deep" },
  ],
  faq: {
    eyebrow: "FAQ", h2: "A clear scope. From the start.", sub: "Understand your casual pool, requested cover and how the service works.",
    askSubject: "Question about the Novada casual workforce service",
    items: [
      { q: "Who employs the workers in our casual pool?", a: "Your organisation does. You interview, select and employ your casual workers, and pay their wages and employment costs. Novada manages the agreed recruitment administration, onboarding coordination, pool maintenance and requested cover." },
      { q: "Can we include casual workers we already employ?", a: "Yes. We can start with suitable existing casuals and recruit into the gaps. Together we agree which workers belong in the managed pool and what evidence, induction and availability information needs to be current." },
      { q: "How do references, checks, induction and training work?", a: "We coordinate references and required verification, follow up documents, assign approved induction and training, and track completion and ongoing requirements. Your team or a qualified assessor completes practical assessments and approvals where needed. Your employer and care-provider responsibilities remain with you." },
      { q: "What happens if our pool cannot cover a shift?", a: "Cover is coordinated from the casual workers your organisation employs. If no eligible worker in your pool accepts, we alert your nominated contact before the agreed deadline. The request remains open with the gap, outreach history and next step clearly recorded." },
      { q: "Do you guarantee that every shift will be filled?", a: "No. Cover depends on an eligible worker being available and accepting the shift. We build and maintain your options, coordinate the request and make unresolved gaps clear. Joining the service does not provide an instantly available workforce; the initial pool and readiness work are agreed during setup." },
      { q: "Will you take over our regular roster or after-hours calls?", a: "Your team continues to plan and manage its regular roster. Novada handles the cover requests assigned to the service. After-hours cover coordination can form part of the agreed service hours; it does not include general operational or clinical on-call duties." },
      { q: "Can you work with ShiftCare, Brevity or AlayaCare?", a: "We assess your system, permissions and required actions before confirming the connection. You keep your existing roster, timesheets and payroll. Direct updates depend on supported access; otherwise, we agree a clear handover process. Specific integration capabilities are confirmed during scoping." },
      { q: "How do we get started?", a: "Start with a free 30-minute workforce review. We discuss your existing casuals and recurring gaps, then agree the pool target, roles, locations, service hours, setup and activation plan. Recruitment and readiness work take place before new workers can be considered for cover." },
    ],
  },
  closing: {
    eyebrow: "Build capacity before the next gap", h2: "What would a stronger casual team change for you?",
    p: "Let’s map the pool you need and how cover requests could work for your organisation.",
    li: ["The roles, locations and shifts hardest to cover", "Where your existing casual team needs support", "Your workforce priorities, service scope and activation plan"],
    boxP: "Talk through your staffing gaps and current systems. We’ll identify a suitable starting scope and explain the next steps.",
    subject: "Free workforce review — NDIS, aged care & home care",
  },
};

/* ══ 6-9 · THE FOUR INDUSTRIES IN PREPARATION ═════════════════════════ */
type IndustryCopy = {
  slug: string; title: string; description: string; audience: string; h1: string; h1b: string; lead: string; availability: string;
  flow: { h2: string; intro: string; steps: { t: string; s: string }[] };
  pain: { eyebrow: string; h2: string; items: { h: string; p: string }[] };
  service: { h2: string; rows: { h: string; p: string; li: string[]; note: string }[] };
  example: { h2: string; p: string; quote: string; steps: { h: string; p: string }[]; gap: string };
  roles: { h2: string; p: string; roles: string[] };
  faqSub: string; faq: { q: string; a: string }[];
  closing: { h2: string; p: string; li: string[]; subject: string };
  visuals: { hero: string; example: string; roles: string };
};

function industry(c: IndustryCopy): WcPage {
  return {
    slug: c.slug, title: c.title, description: c.description,
    hero: { audience: c.audience, h1: c.h1, h1b: c.h1b, lead: c.lead,
      reassurance: "Your business employs the workers and approves hires. Keep your existing roster.",
      secondary: { label: "Explore the service", href: "#service" }, availability: c.availability, visual: c.visuals.hero },
    flow: { kicker: "Recruitment & workforce continuity", h2: c.flow.h2, intro: c.flow.intro, steps: c.flow.steps, outcome: OUTCOME, keypoints: KEYPOINTS },
    blocks: [
      { kind: "trio", eyebrow: c.pain.eyebrow, h2: c.pain.h2, items: c.pain.items, bg: "cream" },
      { kind: "services", id: "service", eyebrow: "Your own workforce. Coordinated for you.", h2: c.service.h2,
        p: "Build the pool, maintain readiness and coordinate the cover you request. Agree the scope around your operation.",
        rows: c.service.rows, callout: SERVICE_CALLOUT },
      { kind: "example", eyebrow: "Illustrative cover process", h2: c.example.h2, p: c.example.p, quote: c.example.quote,
        quoteNote: "A request from your business, coordinated through your own casual pool.",
        link: { label: "Explore how it works", href: `${WC_BASE}/how-it-works` },
        a: { tag: "Your casual workforce", steps: c.example.steps },
        b: { tag: "If the pool cannot cover", steps: [{ h: "Keep the gap visible", p: c.example.gap }] },
        rule: RULE, visual: c.visuals.example },
      { kind: "roles", eyebrow: "Roles to discuss", h2: c.roles.h2, p: c.roles.p, roles: c.roles.roles,
        note: "Role coverage, preparation requirements and service availability are confirmed for your business during the review.", visual: c.visuals.roles },
      CONTROL_INDUSTRY("deep"),
    ],
    faq: { eyebrow: "FAQ", h2: "Your industry. Your questions.", sub: c.faqSub, askSubject: "Question about Novada", items: c.faq },
    closing: { eyebrow: "Start with your workforce needs", h2: c.closing.h2, p: c.closing.p, li: c.closing.li, boxP: BOX_P, subject: c.closing.subject },
  };
}

const hospitality = industry({
  slug: "hospitality-tourism",
  title: "Casual Workforce for Hospitality & Tourism | Novada Tech",
  description: "Plan a directly employed casual pool for your venue. Explore recruitment, worker readiness and requested shift cover with Novada.",
  audience: "For hospitality and tourism businesses", h1: "Build a casual team", h1b: "that knows your venue.",
  lead: "Recruit, onboard and keep your own casual team connected to your business. When a busy period or cancellation creates a gap, Novada coordinates requested cover from eligible members of your directly employed pool.",
  availability: "We're preparing our hospitality and tourism service. Discuss your roles, locations and service availability during your review.",
  flow: { h2: "A familiar team for busy shifts", intro: "A managed process around the people your business hires and employs.", steps: [
    { t: "Build your team", s: "Recruit around your venues, roles and busy periods." },
    { t: "Keep workers ready", s: "Coordinate venue induction and keep availability current." },
    { t: "Coordinate requested cover", s: "Contact eligible pool members and confirm accepted shifts." }] },
  pain: { eyebrow: "When the venue gets busy", h2: "Staffing gaps take attention away from service.", items: [
    { h: "Busy periods arrive before hiring catches up", p: "A full weekend, a large function or a seasonal uplift can leave you recruiting while the team is already stretched." },
    { h: "A contact list does not tell you who is ready", p: "Availability changes. Inductions go unfinished. Knowing who can step into a particular role takes more than having their number." },
    { h: "Managers get pulled into the calling loop", p: "Chasing replies and confirming cover takes attention away from guests, service standards and the team already on shift." }] },
  service: { h2: "Build your team. Keep it ready. Coordinate the cover.", rows: [
    { h: "Build a team around your operation", p: "Start with your existing casuals and recruit for agreed gaps. Novada coordinates the administration from candidate applications through onboarding, around the roles and people your business needs.",
      li: ["Applications, screening and references", "Interview scheduling and candidate follow-ups", "Approved employment documents and onboarding"], note: "You interview, choose and directly employ the people who fit your business." },
    { h: "Keep venue preparation and availability current", p: "Coordinate your approved induction, role requirements and training tasks. Keep outstanding preparation and availability visible across housekeeping, food service, guest reception and other agreed roles.",
      li: ["Venue and role preparation", "Evidence and training follow-ups", "Availability updates and pool engagement"], note: "Readiness is assessed against the agreed role and location requirements." },
    { h: "Coordinate cover when you request it", p: "Tell us the role, venue and shift you need covered. Novada contacts eligible members of your directly employed pool, secures acceptance and records the assignment.",
      li: ["Requests through agreed channels", "Eligible-worker SMS and phone outreach", "Confirmed assignments and clear gap updates"], note: "Cover coordination operates within agreed service hours. Unresolved gaps go to your nominated contact." }] },
  example: { h2: "A larger function creates two extra shifts.",
    p: "Illustrative workflow: a venue manager needs extra support for an upcoming function. The request is coordinated using the business's own directly employed casual pool.",
    quote: "“Please arrange two food and beverage attendants from our casual pool for Saturday, 5 pm to 11 pm, at the function venue.”",
    steps: [
      { h: "Confirm the shift details", p: "Capture the venue, duties, hours, number of workers and relevant preparation requirements." },
      { h: "Contact eligible casuals", p: "Check readiness and availability, then contact suitable pool members by SMS or phone." },
      { h: "Record accepted cover", p: "Record each accepted assignment and notify the manager, with a clear outcome for every requested position." }],
    gap: "If only one worker accepts, the request shows one of two positions confirmed. The remaining gap stays visible and goes to the nominated contact with the outreach history before the agreed deadline. Coverage depends on eligible workers accepting." },
  roles: { h2: "The roles your operation needs", p: "Examples to discuss during your review. We agree the roles, locations and preparation requirements before confirming the service scope.",
    roles: ["Food and beverage attendants", "Bar staff", "Kitchen hands", "Housekeeping and room attendants", "Guest services and reception staff", "Event staff and visitor attraction hosts"] },
  faqSub: "Understand how a managed casual pool could fit your business.",
  faq: [
    { q: "Who employs the workers?", a: "Your business does. You conduct interviews, make hiring decisions and directly employ your casual team. Novada coordinates the agreed recruitment, preparation and cover administration." },
    { q: "Can we start with the casuals we already have?", a: "Yes. We can assess how your existing directly employed casuals fit the agreed pool, reconcile their information and identify recruitment or preparation gaps." },
    { q: "How do you handle venue induction and role requirements?", a: "We agree the requirements for each role and location, coordinate the necessary evidence and your approved induction, and track outstanding tasks. Your business retains workplace supervision and required competence assessments." },
    { q: "Do we need to change our rostering or payroll system?", a: "Your regular roster, timekeeping and payroll stay with your business. We confirm any supported connections and handover arrangements during scoping." },
    { q: "Is the service available now, and is cover guaranteed?", a: "We're preparing this industry service, so roles, locations and availability are confirmed during your review. Cover depends on eligible pool members accepting. If a request remains unfilled, your nominated contact receives the gap, outreach history and next step." }],
  closing: { h2: "Prepare your casual team for the busy periods ahead.", p: "Use a free 30-minute workforce review to discuss your venues, recurring staffing gaps and the casual pool your business needs.",
    li: ["Your busiest periods and recurring shift gaps", "Existing casuals and the roles you need to recruit", "Venue preparation, service hours and launch availability"], subject: "Free workforce review — Hospitality & Tourism" },
  visuals: { hero: "hosp-hero", example: "hosp-function", roles: "hosp-roles" },
});

const construction = industry({
  slug: "construction",
  title: "Casual Workforce for Construction | Novada Tech",
  description: "Plan a casual workforce around your construction tasks and sites. Explore recruitment, worker readiness and cover from your own employed pool.",
  audience: "For builders and construction businesses", h1: "Your casual crew.", h1b: "Prepared for the job and site.",
  lead: "Build and maintain a directly employed casual pool around your tasks, sites and project needs. Novada coordinates recruitment and readiness administration, then manages requested cover from eligible members of your own pool.",
  availability: "We're preparing our construction service. Discuss your roles, locations and service availability during your review.",
  flow: { h2: "A casual crew around your work", intro: "A managed process for the people your business employs, with readiness assessed for the relevant job and site.", steps: [
    { t: "Build your team", s: "Recruit for agreed roles, locations and project needs." },
    { t: "Keep workers ready", s: "Coordinate task requirements, site induction and availability." },
    { t: "Coordinate requested cover", s: "Contact eligible pool members when a crew gap arises." }] },
  pain: { eyebrow: "When the programme changes", h2: "The work needs a crew. Your supervisors need their time.", items: [
    { h: "Project changes bring another round of recruiting", p: "A new job, a change in programme or an absence can send you back to advertising, screening and chasing paperwork." },
    { h: "Availability does not establish suitability for the task", p: "The work, site preparation and role requirements matter. Someone being free tomorrow does not mean they are ready for tomorrow's job." },
    { h: "Supervisors spend time chasing replacements", p: "Calls and messages can take over the start of the day while the crew needs direction and the work needs coordinating." }] },
  service: { h2: "Build your pool around the jobs and sites you run.", rows: [
    { h: "Recruit around the work you actually do", p: "Define the roles, locations and likely demand for your casual crew. Novada coordinates recruitment administration and onboarding around that agreed scope.",
      li: ["Candidate sourcing and screening", "References and interview coordination", "Approved documents and onboarding tasks"], note: "Your business interviews, selects and directly employs its workers." },
    { h: "Maintain readiness by role and site", p: "Coordinate agreed checks, qualification evidence, site induction and training or assessment tasks. Keep missing requirements and availability visible for the relevant work.",
      li: ["Task and site requirement profiles", "Evidence and induction follow-ups", "Availability and readiness updates"], note: "Your business retains site supervision and required competence decisions." },
    { h: "Handle requested cover from your pool", p: "Submit the task, site, hours and preparation requirements. Novada contacts eligible members of your directly employed pool, confirms acceptance and records the assignment.",
      li: ["Requests with clear duties and site details", "Eligible-worker SMS and phone outreach", "Accepted assignments and unresolved-gap updates"], note: "Coordination operates within agreed service hours. Unfilled requests escalate to your nominated contact." }] },
  example: { h2: "A worker withdraws before a Monday start.",
    p: "Illustrative workflow: an existing assignment needs a replacement. The cover request stays tied to the job, site and business's own directly employed casual pool.",
    quote: "“Our casual labourer cannot attend on Monday. Please coordinate cover from our pool for the 7 am start at the Riverside site, using the agreed duties and site requirements.”",
    steps: [
      { h: "Confirm the work and site", p: "Review the duties, start time, location, preparation requirements and escalation deadline." },
      { h: "Check and contact eligible workers", p: "Assess relevant pool members against the assignment and contact those who may be available." },
      { h: "Confirm the accepted assignment", p: "Recheck the required details, record the worker's acceptance and notify the nominated site contact." }],
    gap: "If no eligible pool member accepts, the slot stays open. The nominated site contact receives the search history, deadline and next action. An available person is not automatically eligible for every task or site." },
  roles: { h2: "Start with the roles your projects need", p: "Examples to discuss during your review. The service scope depends on the work, location, verification requirements and planned availability.",
    roles: ["General construction labourers", "Trade assistants", "Qualified tradespeople", "Site clean-up workers", "Plant or equipment operators, subject to agreed task requirements"] },
  faqSub: "Understand how a managed casual pool could fit your projects.",
  faq: [
    { q: "Is this our own workforce?", a: "Yes. Your business interviews, chooses, directly employs and pays its casual workers. Novada coordinates the agreed recruitment, readiness and requested-cover processes around that workforce." },
    { q: "Can readiness differ between sites and tasks?", a: "Yes. We agree the relevant role, task, location and site requirements during scoping. A worker's readiness for one assignment does not automatically establish readiness for another. Your business retains site supervision and required competence decisions." },
    { q: "Can we include existing casual workers?", a: "Yes. Existing directly employed casuals can be included after their information, availability and relevant preparation have been reviewed against the agreed requirements." },
    { q: "Does Novada take over the project roster or payroll?", a: "Your regular crew planning, timekeeping and payroll remain with your business. Novada coordinates the cover requests submitted within scope. Any system connection or handover is confirmed before activation." },
    { q: "When can we start, and what happens if nobody accepts?", a: "We're preparing our construction service. The review establishes whether your roles and locations fit the planned scope and confirms availability. If no eligible pool member accepts a request, the slot remains unresolved and your nominated contact receives the history, deadline and next action." }],
  closing: { h2: "Build your casual crew around the work coming up.", p: "Bring your recurring gaps, upcoming jobs and site requirements to a free 30-minute workforce review.",
    li: ["Upcoming jobs and recurring crew gaps", "Roles, tasks and site preparation requirements", "Your existing casual pool and planned service availability"], subject: "Free workforce review — Construction" },
  visuals: { hero: "con-hero", example: "con-replace", roles: "con-roles" },
});

const manufacturing = industry({
  slug: "manufacturing-transport-logistics",
  title: "Casual Workforce for Manufacturing, Transport & Logistics | Novada Tech",
  description: "Explore a managed casual workforce for manufacturing, transport and logistics. Recruit your own pool, maintain readiness and coordinate requested shift cover.",
  audience: "For manufacturing, transport & logistics businesses", h1: "A casual workforce.", h1b: "Built around your operation.",
  lead: "We recruit and prepare your own casual workers, maintain their readiness and availability records, and coordinate the cover you request across production, warehouse, depot and transport roles.",
  availability: "We’re preparing this industry service. We confirm support for your roles and locations during the review.",
  flow: { h2: "A pool built for your operation", intro: "Your business employs the workers. Your regular roster and payroll stay in place.", steps: [
    { t: "Build your team", s: "Recruit around agreed roles, locations and shift patterns." },
    { t: "Keep workers ready", s: "Track availability, required credentials and site induction." },
    { t: "Coordinate requested cover", s: "Contact suitable workers and report accepted assignments." }] },
  pain: { eyebrow: "When the operation needs cover", h2: "A shift gap should not mean starting the search again.", items: [
    { h: "Demand changes", p: "A production run expands, orders build up or a depot needs extra hands. Your pool should reflect the work you actually do." },
    { h: "Worker information gets scattered", p: "Availability, training records and site induction status can sit across messages and spreadsheets, making suitability harder to assess." },
    { h: "Supervisors become the calling list", p: "Finding someone, checking requirements and waiting for a reply takes attention away from the operation." }] },
  service: { h2: "Build the pool. Maintain readiness. Coordinate cover.", rows: [
    { h: "Recruit around recurring cover needs", p: "Build your own casual pool around the roles, locations and shift patterns you agree with us.",
      li: ["Recruitment and reference coordination", "Required checks and onboarding", "Preparation for agreed duties and locations"], note: "Your business conducts interviews, approves hires and employs the workers." },
    { h: "Keep role and site readiness visible", p: "Bring availability, required credentials, induction and training status together for the production areas, warehouses or depots you need to cover.",
      li: ["Availability and role suitability records", "Induction and training follow-ups", "Outstanding or expiring requirements flagged"], note: "The requirements are agreed for each role and location." },
    { h: "Coordinate cover from your pool", p: "Tell us the role, location, shift and requirements. We contact suitable workers, obtain their acceptance and update the requester.",
      li: ["Worker contact by phone or SMS", "Accepted assignments recorded", "Unfilled requests escalated by the agreed deadline"], note: "Your regular roster, timesheets and payroll remain with your business." }] },
  example: { h2: "From a warehouse gap to a clear answer.",
    p: "Illustrative workflow: a supervisor requests cover from the business’s own casual pool.",
    quote: "“We need two warehouse assistants at our north depot tomorrow, 6 am–2 pm.”",
    steps: [
      { h: "Capture and check", p: "Confirm the depot, duties, shift and induction requirements. Review suitable workers against those requirements and their current availability." },
      { h: "Contact and confirm", p: "Contact eligible workers by phone or SMS and obtain explicit acceptance of the assignment." },
      { h: "Record and update", p: "Record accepted assignments and notify the requester. A worker is only shown as confirmed after accepting." }],
    gap: "Any remaining gap stays visible and is escalated to your nominated contact by the agreed deadline. No request is marked as filled without worker acceptance." },
  roles: { h2: "Build the pool around the roles you use.", p: "Roles to explore during your review include the examples below. We agree role coverage, required checks and operating requirements before recruitment or cover coordination begins.",
    roles: ["Production and packing workers", "Warehouse assistants and pick packers", "Dispatch and loading staff", "Forklift operators", "Drivers for agreed vehicle classes", "Depot and operations support"] },
  faqSub: "Understand how a managed casual pool could fit your business.",
  faq: [
    { q: "Can one pool cover our factory, warehouse and depot?", a: "The pool can be organised by location, role and approved duties. Workers are considered for assignments that match their agreed capabilities and site requirements. We confirm the supported scope during your review." },
    { q: "Can we bring our existing casual workers into the pool?", a: "Yes. We can review their records, identify missing onboarding or readiness information and include suitable workers in your managed pool. Recruitment can then focus on the gaps you need to strengthen." },
    { q: "Can the pool include drivers or equipment operators?", a: "We assess those roles during the review. The scope must identify the relevant licence or equipment requirements, training and assignment checks. For driving roles, work and rest information and fitness to drive also need to be considered; an available status alone is insufficient." },
    { q: "Will you replace our workforce management or payroll system?", a: "Your regular roster, timesheets and payroll remain with your business. Novada manages the casual pool and requested cover within the agreed service. We confirm any supported connections and permissions during setup." },
    { q: "What happens if nobody suitable accepts the shift?", a: "The request remains unfilled and visible. We notify your nominated contact by the agreed escalation deadline so your team can decide its next operational step. We do not mark a shift as filled without worker acceptance." }],
  closing: { h2: "Build your pool around the gaps you need to close.", p: "Tell us which roles are hardest to cover, where they are needed and how often the gaps arise. In a free 30-minute workforce review, we’ll discuss the pool and coordination service that could fit your operation.",
    li: ["Your recurring roles, locations and shift gaps", "Your existing casual team and readiness requirements", "Service availability and a practical starting scope"], subject: "Free workforce review — Manufacturing, Transport & Logistics" },
  visuals: { hero: "mfg-hero", example: "mfg-depot", roles: "mfg-roles" },
});

const mining = industry({
  slug: "mining-resources-energy",
  title: "Casual Workforce for Mining, Resources & Energy | Novada Tech",
  description: "Explore a managed casual workforce for mining, resources and energy. Build your own pool around role and site requirements and coordinate requested cover.",
  audience: "For mining, resources & energy businesses", h1: "Build your casual workforce.", h1b: "Before the next crew gap.",
  lead: "We recruit and prepare your own casual pool around agreed roles and site requirements, maintain readiness records and coordinate the cover you request.",
  availability: "We’re preparing this industry service. We confirm support for your roles and locations during the review.",
  flow: { h2: "Readiness before assignment", intro: "Your business employs the workers and approves hires and site assignments. We help keep the pool organised and the next steps clear.", steps: [
    { t: "Build your team", s: "Recruit around agreed duties, locations and site requirements." },
    { t: "Keep workers ready", s: "Track credentials, induction, training and outstanding items." },
    { t: "Coordinate requested cover", s: "Check suitability, obtain acceptance and report the outcome." }] },
  pain: { eyebrow: "When a crew gap appears", h2: "Being available is only the starting point.", items: [
    { h: "Site preparation takes coordination", p: "Recruitment, required checks, induction and training need to be coordinated before someone can be considered for an assignment." },
    { h: "Readiness can change", p: "Expiring credentials, changed site requirements and incomplete records can turn a familiar name into an unsuitable match." },
    { h: "A gap creates several next steps", p: "Your team needs to know who can accept, whether requirements are met and what remains unresolved before the shift begins." }] },
  service: { h2: "A casual pool organised around your roles and sites.", rows: [
    { h: "Build around the role and the site", p: "Start with agreed duties, locations and site requirements. Novada coordinates recruitment and the required preparation for your own casual pool.",
      li: ["Recruitment and reference coordination", "Required checks and onboarding", "Induction and training coordination"], note: "Your business conducts interviews, approves hires and retains the relevant competency and access approvals." },
    { h: "Maintain a clear readiness picture", p: "Track agreed credentials, induction and training status alongside worker availability. Keep outstanding items and role or site restrictions visible.",
      li: ["Role and site requirements recorded", "Outstanding or expiring items followed up", "Availability and readiness status visible"], note: "Readiness for one location does not automatically establish readiness for another." },
    { h: "Coordinate cover with clear acceptance", p: "Request the role, site, timing and requirements. We contact suitable workers from your pool, confirm acceptance and report the outcome.",
      li: ["Worker contact by phone or SMS", "Accepted assignments recorded", "Readiness gaps and unfilled requests escalated"], note: "Mobilisation lead times and responsibilities are agreed before the service begins." }] },
  example: { h2: "A clear process for a site cover request.",
    p: "Illustrative workflow: the assignment requirements are checked before a worker is confirmed.",
    quote: "“We need a stores worker for the next day shift at Site A.”",
    steps: [
      { h: "Confirm the assignment", p: "Capture the duties, hours, site requirements and reporting instructions. Review the pool against the agreed role, site readiness and availability requirements." },
      { h: "Check and obtain acceptance", p: "Contact suitable workers and establish whether the assignment and any agreed mobilisation requirements can be met. Obtain explicit acceptance." },
      { h: "Record and report", p: "Record the accepted assignment and notify the requester. Keep confirmation and any outstanding requirements clear." }],
    gap: "Missing prerequisites or an unfilled request are escalated to your nominated contact before the agreed deadline. The service does not guarantee that every request will be filled." },
  roles: { h2: "Start with the roles that suit your operation.", p: "We can explore recurring cover needs in the areas below. Role suitability, location coverage and service availability are confirmed during the review, with requirements scoped to the actual operation and site.",
    roles: ["Stores and warehousing", "Trade assistance", "Maintenance support", "Site administration", "Site and camp services", "Licensed trades or operator roles, where agreed and supported"] },
  faqSub: "Understand how a managed casual pool could fit your business.",
  faq: [
    { q: "Can you prepare workers for our specific site requirements?", a: "We coordinate the agreed onboarding, induction and training steps and track their completion. Your business and site representatives retain the relevant hiring, competency and access approvals." },
    { q: "Does joining the pool make a worker eligible for every site?", a: "No. Eligibility depends on the role and site requirements for the assignment. We keep those requirements and any outstanding items visible before cover is confirmed." },
    { q: "Can this support planned leave or maintenance periods as well as unexpected absences?", a: "We can discuss both planned and short-notice cover. For work requiring site preparation or mobilisation, lead time is part of the service scope. Worker availability and completion of assignment requirements determine whether cover can be confirmed." },
    { q: "Will Novada arrange travel, accommodation or site access?", a: "Responsibilities are agreed during scoping. The service can track relevant prerequisites and coordinate the information needed for a request, but travel booking, accommodation and site access are not assumed to be included." },
    { q: "What happens if a suitable worker cannot be confirmed?", a: "We keep the request open and notify your nominated contact by the agreed deadline. Your team receives a clear status and any outstanding issues so it can decide the next step. The service does not guarantee that every request will be filled." }],
  closing: { h2: "Prepare the pool before you need the next person.", p: "Walk us through your recurring workforce gaps, site requirements and lead times. In a free 30-minute workforce review, we’ll assess which roles and locations could suit a managed casual pool.",
    li: ["The roles and sites you need to strengthen", "Required checks, approvals and mobilisation lead times", "Service availability and an agreed starting scope"], subject: "Free workforce review — Mining, Resources & Energy" },
  visuals: { hero: "min-hero", example: "min-mobilise", roles: "min-matrix" },
});

export const WC_PAGES: Record<string, WcPage> = {
  home, "what-we-do": whatWeDo, "how-it-works": howItWorks, "who-we-support": whoWeSupport,
  "ndis-aged-care": ndis, "hospitality-tourism": hospitality, construction,
  "manufacturing-transport-logistics": manufacturing, "mining-resources-energy": mining,
};
