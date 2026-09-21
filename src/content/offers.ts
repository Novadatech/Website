/*
 * THE CANONICAL COPY FOR EVERY OFFER ON novadatech.com.
 *
 * ══════════════════════════════════════════════════════════════════════
 * ⚠️ THIS DOMAIN IS AUSTRALIA. Localised 21 September 2026.
 *
 * novadatech.com.au speaks to Australian practices and Australian care
 * providers. novadatech.com carries the United States equivalents and
 * the two must never drift into each other.
 *
 * WHAT THAT MEANS IN PRACTICE:
 *   · Say NDIS, aged care, home care, AHPRA, the Privacy Act, worker
 *     screening. These are the trust signals here.
 *   · ROSTER, not schedule. SUPPORT WORKER, not caregiver. PARTICIPANT,
 *     client or resident, mirroring the provider's own word.
 *     REGISTRATION, not license. 000, not 911. INDUCTION, not
 *     orientation. ENQUIRY, not inquiry. BOOKING, not appointment.
 *   · Australian spelling: organisation, recognise, licence.
 *   · Never HIPAA, BAA, EVV, OIG, Medicaid, state survey. Those belong
 *     to the .com domain.
 *
 * 🔴 THE INDUCEMENT RULE IS CRIMINAL-LAW ABSOLUTE ON THIS DOMAIN. No
 * referral arrangements, no incentives, no gifts, no growth promises
 * anywhere in care-facing copy. This is the hardest rule on the site and
 * it outranks any conversion argument.
 *
 * ⚠️ THE WORKER POOL IS NOT DESCRIBED HERE. It exists on the Australian
 * side of the business, but its legal characterisation is never
 * discussed publicly in either direction, and it is never called labour
 * hire, staffing supply or a promised fill. The Workforce Desk is
 * deliberately the SAME product on both domains: recruit, onboard,
 * induct, keep current, pay. Do not widen it on this domain alone.
 *
 * ⚠️ NO EVIDENCE FIGURES YET ON THIS DOMAIN. The US care argument runs
 * on the Activated Insights turnover benchmark, which is an American
 * dataset and does not describe this market. Australian figures have to
 * be sourced before anything is printed here, so `EVIDENCE` is
 * deliberately empty rather than filled with a borrowed number.
 * ══════════════════════════════════════════════════════════════════════
 *
 * THE SENTENCE THE WHOLE ESTATE IS BUILT AROUND
 *
 *     "We run everything except the care."
 *
 * Every headline and section traces back to it. It is also the boundary
 * both audiences lead with, which is the strongest thing about it: the
 * promise and the limit are the same sentence.
 *
 * ⚠️ TWO AUDIENCES, AND THEIR VOCABULARIES MUST NEVER CROSS.
 *
 * A practice reader must never meet "client", "shift", "support worker" or
 * "visit". A care reader must never meet "patient", "recall",
 * "practitioner" or "the book". Each audience has its own hub and its
 * own pages. Shared components take their words from the audience they
 * render under, never from a default.
 *
 * ⚠️ AUDIT THE RENDERED HTML, NOT THE SOURCE. Three shared components
 * broke this rule invisibly on 21 September 2026: the footer listed all
 * four desks on every page, the footer and the sticky bar both hardcoded
 * a retired position line, and /why-novada mapped over all four offers.
 * None of it was visible in a source diff.
 *
 * ⚠️ RULES THAT DO NOT LIFT, in any market:
 *   · NOTHING CLINICAL. A scope and liability boundary, not a copy
 *     preference. Clinical verbs appear only inside a negation.
 *   · NO INDUCEMENT LANGUAGE on care pages. No referral arrangements,
 *     incentives, gifts or growth promises. In the United States the
 *     governing law is the federal Anti-Kickback Statute and Stark; in
 *     Australia it is the criminal-law inducement rule. The discipline
 *     is identical, only the citation changes.
 *   · The workforce pool is never described as labour supply, staffing
 *     or a promised fill. It is NOT OFFERED on this domain at all,
 *     pending a worker-classification review under IRS and DOL tests.
 *   · A CLAIM MUST BE TRUE, AND A FIGURE MUST CARRY ITS SOURCE. See
 *     EVIDENCE below. The ratings and case studies on the Australian
 *     domain belong to a different Novada business line and may never
 *     be re-pointed at a desk that did not earn them.
 *   · NO PRICING anywhere. Investment is discussed on the review call.
 *
 * Style: no em dashes, no exclamation marks, no rhetorical headings.
 */

/**
 * The action, everywhere, and the only place this string exists.
 * Naming the cost of the call is what lowers the commitment.
 */
export const CTA_LABEL = "Book a 30-minute review";
export const CTA_HREF = "/#book";

export const POSITION = "We run everything except the care.";

/** The sub-line under the position on the router homepage. */
export const POSITION_SUB =
  "Two kinds of business, one problem. The work that keeps the place running is not the work you are registrationd to do, and it never stops arriving. We run it, with our own team, inside the systems you already use.";

/* ══════════════════════════════════════════════════════════════════════
   EVIDENCE
   ⚠️ EVERY FIGURE ON THIS SITE LIVES HERE AND CARRIES ITS SOURCE. If a
   number cannot be attributed to a named, checkable publication, it does
   not ship. These replace the Australian argument, which runs on penalty
   rates and has no American equivalent: there are no US penalty rates
   and no federal 24/7 staffing rule, so the case here is turnover and
   the revenue lost to cases a provider cannot staff.
   ══════════════════════════════════════════════════════════════════════ */

export type Figure = { value: string; label: string; source: string };

export const EVIDENCE: Record<string, Figure> = {
  /* ⚠️ DELIBERATELY EMPTY. See the header. The American figures describe
     the American market and may not be re-pointed at this one. When
     Australian benchmarks are sourced, add them here and pass them to
     the care hub's `figures` prop, never inline on a page. */
};

/* ══════════════════════════════════════════════════════════════════════
   AUDIENCES
   The top level of the site. The homepage routes to one of these two and
   never tries to sell both at once.
   ══════════════════════════════════════════════════════════════════════ */

export type Audience = {
  slug: "practices" | "care";
  name: string;
  href: string;
  who: string;
  moment: string;
  headline: string;
  standfirst: string;
};

export const PRACTICES: Audience = {
  slug: "practices",
  name: "Practices",
  href: "/practices",
  who: "Owner-led medical, dental and allied health practices across Australia.",
  moment:
    "The phone rings out at eleven on a Tuesday, in a practice that is open, fully staffed and running normally.",
  headline: "Your phone answered, your book worked, your people paid.",
  standfirst:
    "Two desks for practices, run by our own team inside your own practice software, during your own operating hours. Your reception keeps the counter. We take the work that never reaches the top of their list, under the Privacy Act and your own access controls.",
};

export const CARE: Audience = {
  slug: "care",
  name: "Care providers",
  href: "/care",
  who: "NDIS, home care and aged care providers running extended or around-the-clock rosters.",
  moment:
    "A support worker calls off a 6am shift at four in the morning, and somebody senior is awake finding cover.",
  headline: "Your overnight covered, your records audit-ready, your people paid.",
  standfirst:
    "Two desks for care providers, run by our own team inside the systems you already use. The call is answered, the coverage is arranged, the visit record is written, and it is waiting in your morning handover. Back office only, nothing clinical.",
};

export const AUDIENCES: Audience[] = [PRACTICES, CARE];

/* ══════════════════════════════════════════════════════════════════════
   OFFERS
   ⚠️ THE WORKFORCE DESK IS ONE PRODUCT WITH TWO PAGES, not two products.
   Recruit, onboard, credential and pay is the same job in a dental
   practice and a home care agency. The two entries differ only in who
   they are written for. This is also the fix for the worst naming
   collision in the estate.
   ══════════════════════════════════════════════════════════════════════ */

export type Offer = {
  name: string;
  slug: string;
  href: string;
  audience: Audience["slug"];
  who: string;
  summary: string;
  scope: string[];
};

export const PATIENT_ACCESS: Offer = {
  name: "The Patient Access Desk",
  slug: "patient-access",
  href: "/practices/patient-access",
  audience: "practices",
  who: "For practices",
  summary:
    "The calls, the bookings and the follow-up that decide how much of your available work actually gets done.",
  scope: [
    "Calls, web enquiries and messages answered in your practice name, on your own number, during your own operating hours.",
    "Bookings, rescheduling and new patient intake handled inside your own practice software, under your own booking rules.",
    "Recall and reactivation worked by phone, to the interval the practitioner set.",
    "Cancellations and failures to attend chased the same day, while rebooking is still likely.",
    "A monthly report covering every enquiry, how fast it was answered, whether it booked, and where it did not, the reason.",
  ],
};

export const OPERATIONS: Offer = {
  name: "The Operations Desk",
  slug: "operations",
  href: "/care/operations",
  audience: "care",
  who: "For care providers",
  summary:
    "The after-hours line, the coverage, the coordination and the visit records that decide whether tonight becomes tomorrow's problem.",
  scope: [
    "The after-hours line answered by a coordinator, not an answering service, in your own name.",
    "Coverage arranged from your own approved workers and entered straight into your own roster.",
    "Intake and service-change administration handled inside the systems you already run.",
    "Anything needing authority or clinical judgement escalated to your nominated contact, under a matrix agreed in writing before we take a single call.",
    "Every event logged with timestamps as it happens, so the visit record is written the same night and waiting in your morning handover.",
  ],
};

/** ⚠️ Same product as WORKFORCE_CARE. Written for a practice reader. */
export const WORKFORCE_PRACTICES: Offer = {
  name: "The Workforce Desk",
  slug: "workforce",
  href: "/practices/workforce",
  audience: "practices",
  who: "For practices",
  summary:
    "The hiring, the onboarding, the credentialing and the payroll that decide whether you have the people to do the work.",
  scope: [
    "Recruiting: role definition, posting, screening and the first contact with applicants.",
    "Onboarding owned end to end, rather than spread across several inboxes.",
    "Induction and training, evidenced with dates and completion records.",
    "Registration and credential currency maintained, with expiries tracked ninety days ahead.",
    "Payroll processed on your own cycle, with your practice remaining the employer throughout.",
  ],
};

/** ⚠️ Same product as WORKFORCE_PRACTICES. Written for a care reader. */
export const WORKFORCE_CARE: Offer = {
  name: "The Workforce Desk",
  slug: "workforce",
  href: "/care/workforce",
  audience: "care",
  who: "For care providers",
  summary:
    "The hiring, the onboarding, the screening and the payroll that decide whether the cases you are offered can actually be staffed.",
  scope: [
    "Recruiting: role definition, posting, screening and the first contact with applicants, at the speed this labour market actually moves.",
    "Onboarding owned end to end, so somebody who accepts on the third is working a shift in days rather than weeks.",
    "Induction, competency and in-service training, evidenced with dates and completion records.",
    "Background checks, registration and worker screening maintained, with expiries tracked ninety days ahead.",
    "Payroll processed on your own cycle, with your agency remaining the employer throughout.",
  ],
};

export const OFFERS: Offer[] = [
  PATIENT_ACCESS,
  WORKFORCE_PRACTICES,
  OPERATIONS,
  WORKFORCE_CARE,
];

/** The offers belonging to one audience, in page order. */
export function offersFor(a: Audience["slug"]): Offer[] {
  return OFFERS.filter((o) => o.audience === a);
}

/* ══════════════════════════════════════════════════════════════════════
   BOUNDARIES
   A CONVERSION ASSET, not fine print. An owner who has been sold to
   before is looking for the catch, and handing it to them unprompted is
   the fastest way to be believed about everything else.

   ⚠️ Do not bury these, do not soften them, and do not move them behind
   a disclosure toggle to save vertical space.
   ══════════════════════════════════════════════════════════════════════ */

export type Boundary = {
  tag: string;
  body: string;
  audience: Audience["slug"] | "both";
};

export const BOUNDARIES: Boundary[] = [
  {
    tag: "Nothing clinical",
    audience: "both",
    body: "No triage, no assessment of urgency, no advice of any kind. Anything clinical stops with us and goes to your team, under a protocol agreed in writing before we take a single call. All clinical and professional judgement stays with your own registrationd people.",
  },
  {
    tag: "Alongside, never instead",
    audience: "both",
    body: "We work alongside your team, not in place of it. What we remove is the second job that was handed to somebody hired for the first one.",
  },
  {
    tag: "You stay the employer",
    audience: "both",
    body: "You employ your own people and choose every hire. We recruit on your behalf, administer the employment lifecycle and process payroll. We are not an employer of record, we do not supply labour, and we never place our own people into your roles.",
  },
  {
    tag: "Not your obligation",
    audience: "both",
    body: "We maintain the records and the calendar. The regulatory obligation stays with you. We make it straightforward to meet, and we do not assume it.",
  },
  {
    tag: "Your privacy obligation",
    audience: "practices",
    body: "We handle your information under the privacy framework that applies to your practice, with access agreed in writing before we are given anything. Access is role-limited, logged, and revoked the day somebody leaves the role. The obligation remains yours; ours is contractual to you.",
  },
  {
    tag: "Nothing at the counter",
    audience: "practices",
    body: "Greeting, payments and the care of the person physically in the room stay with your team permanently. A remote operation cannot do that work and we will not pretend otherwise.",
  },
  {
    tag: "Never the clinical record",
    audience: "practices",
    body: "We work the appointment book, the enquiries and the follow-ups. We do not touch the clinical record.",
  },
  {
    tag: "Not after hours",
    audience: "practices",
    body: "We cover your own operating hours, whatever they are. If you open on a Saturday morning, that is part of your operating hours and it is covered. We do not extend past them, because the expensive problem is the call missed while you are open.",
  },
  {
    tag: "No patient pressure",
    audience: "practices",
    body: "Recall contact follows the interval the practitioner set. We never contact a patient in order to reach a number, and we do not solicit reviews or testimonials.",
  },
  {
    tag: "We never deliver the care",
    audience: "care",
    body: "The desk is back office by design. We do not deliver services, we do not enter a home, and we do not perform any part of the work your support workers perform.",
  },
  {
    tag: "We do not choose who attends",
    audience: "care",
    body: "Coverage is arranged from your own approved workers, against your own rules. We do not decide which support worker suits which client, because that judgement belongs to you.",
  },
  {
    tag: "The relationship stays yours",
    audience: "care",
    body: "We answer in your name and hand back in the morning. We do not hold the relationship with your clients, their families or their case managers.",
  },
  {
    tag: "000 first, then you",
    audience: "care",
    body: "An emergency goes to 000 first, every time. Anything reportable is escalated immediately under the matrix we agree in writing, and the obligation to report it remains yours.",
  },
  ];

/** The boundaries one audience surfaces, in order. */
export function boundariesFor(a: Audience["slug"]): Boundary[] {
  return BOUNDARIES.filter((b) => b.audience === a || b.audience === "both");
}

/* ══════════════════════════════════════════════════════════════════════
   HOW AN ENGAGEMENT BEGINS
   ══════════════════════════════════════════════════════════════════════ */

export const HOW_IT_STARTS: { k: string; v: string }[] = [
  {
    k: "The review",
    v: "A structured conversation about how your operation actually runs. The output is an honest assessment of whether this fits. A meaningful proportion conclude that it does not yet, and we say so.",
  },
  {
    k: "The proposal",
    v: "Scope, the protocols that will govern the work, what is explicitly excluded, and the measurement baseline. In writing, with nothing improvised on the call.",
  },
  {
    k: "The agreement",
    v: "A services agreement signed before anything is accessed, under the privacy framework that applies to your organisation.",
  },
  {
    k: "Live",
    v: "Access provisioning, protocol sign-off, baseline measurement, and your named coordinators introduced to your team. The first month is reviewed in detail with you.",
  },
];

/* ══════════════════════════════════════════════════════════════════════
   THE OPERATING PROOF
   ⚠️ EVIDENCE OF AN OPERATING STANDARD, NOT A CLAIM ABOUT WHAT A
   PRACTICE BUYS. It names the care line on purpose. Do not rewrite it
   into an after-hours promise for practices: the "Not after hours"
   boundary refuses that on the same page.
   ══════════════════════════════════════════════════════════════════════ */
export const OPERATING_PROOF =
  "Novada already runs a managed desk for care providers, answering calls overnight, every night of the year, inside those providers' own systems and to their own escalation protocols.";
