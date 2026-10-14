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
 * ⚠️ THE EVIDENCE FIGURES HERE ARE AUSTRALIAN AND STAY AUSTRALIAN. The
 * .com file carries American benchmarks from a different dataset.
 * Neither set may ever be re-pointed at the other market, however
 * convenient the number looks.
 * ══════════════════════════════════════════════════════════════════════
 *
 * THE SENTENCE THE WHOLE ESTATE IS BUILT AROUND
 *
 *     "We streamline the work behind the care."
 *
 * This is the brand promise both offer briefs state, and it replaced
 * "We run everything except the care." on 15 October 2026.
 *
 * ⚠️ WHY THE OLD LINE WENT. Three reasons, in order of weight. It
 * defined the business by subtraction, so a reader five seconds in knew
 * only what we do not do. It promised "everything", which stopped being
 * true the moment recruitment, induction, registration and practice
 * payroll were withdrawn: the estate now sells two audits and two
 * continuity services, not everything. And "run" is the wrong verb for
 * an audit, which recommends rather than operates.
 *
 * The boundary the old line carried has not been dropped. It is carried
 * by the sentence that follows POSITION in the footer, "Alongside your
 * team, never instead of them", and by the explicit boundary sections on
 * every page. Keeping the limit and the promise in one sentence was the
 * best thing about the old line, and splitting them is the cost of this
 * change. It is worth paying, because a promise that is not true costs
 * more.
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

/*
 * The brand promise, which is what both offer briefs state.
 *
 * Replaced "We run everything except the care." on 15 October 2026. That
 * line was written for the retired Desks, it defined the business by
 * subtraction, and it was still rendering in the footer of every page on
 * both domains, in the metadata titles and on the share image,
 * underneath four offers it no longer described.
 */
export const POSITION = "We streamline the work behind the care.";

/** The sub-line under the position on the router homepage. */
export const POSITION_SUB =
  "Two kinds of business, one problem. The work that keeps the place running is not the work you are registered to do, and it never stops arriving. We run it, with our own team, inside the systems you already use.";

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
  /*
   * PRACTICES. Both figures are about AVAILABILITY and explicitly exclude
   * cost, which is the one thing this offer does not touch, and that is
   * exactly why they are the right two.
   *
   * ⚠️ These are the ONLY statistics permitted on the practices pages.
   * There is NO credible Australian missed-call statistic in existence:
   * every "$X per missed call", "80% will not leave a voicemail" and
   * "35% of dental calls go to voicemail" in circulation is invented.
   * Saying so on the page is a claim no dishonest competitor can copy.
   */
  gpAccess: {
    value: "20.2%",
    label:
      "of people delayed seeing or did not see a GP in 2024-25 for reasons other than cost, up from 17.4%",
    source: "ABS, Patient Experiences in Australia, 2024-25",
  },
  gpWait: {
    value: "26%",
    label: "waited longer than they felt was acceptable for a GP appointment",
    source: "ABS, Patient Experiences in Australia, 2024-25",
  },

  /*
   * ⚠️ BOTH FIGURES COME FROM ONE REPORT AND WERE READ OUT OF THE PDF,
   * not from a search result or a software vendor's blog. If either is
   * ever updated, update both and move the year in the source string.
   *
   * ⚠️ THEY DESCRIBE THE DISABILITY WORKFORCE SPECIFICALLY. The care
   * audience here also includes home care and aged care, so the labels
   * say "disability support" and must not be widened to imply the
   * figures cover the whole audience.
   *
   * ⚠️ DO NOT RE-POINT THE AMERICAN FIGURES AT THIS MARKET, or these at
   * that one. The .com file carries its own, from a different dataset.
   */
  turnover: {
    value: "26%",
    label: "Turnover among casual disability support staff",
    source: "NDS Workforce Census Report 2025, reporting 2024 data",
  },
  fullTime: {
    value: "11%",
    label: "Disability support workers in permanent full-time roles",
    source: "NDS Workforce Census Report 2025, reporting 2024 data",
  },
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
  /* ⚠️ "your people paid" WAS THE THIRD CLAUSE HERE until 15 October
     2026. Practice recruitment, induction, registration currency and
     payroll are withdrawn service lines, so the clause advertised
     something that cannot be bought. */
  headline: "Your phone answered, your book worked, your recalls run.",
  standfirst:
    "An audit that finds the bookings you are losing, and the ongoing work that stops you losing them. Run by our own team inside your own practice software, during your own operating hours. Your reception keeps the counter. We take the work that never reaches the top of their list, under the Privacy Act and your own access controls.",
};

export const CARE: Audience = {
  slug: "care",
  name: "Care providers",
  href: "/care",
  who: "NDIS, home care and aged care providers running extended or around-the-clock rosters.",
  /* ⚠️ ALL THREE OF THESE DESCRIBED THE RETIRED OPERATIONS DESK, a
     24/7 phone and roster service, until 15 October 2026. The moment
     now echoes the one on the /care hub, because the homepage card and
     the hub a reader lands on should not describe two different
     businesses. */
  moment:
    "A support worker calls in sick at six on a Saturday evening, in a roster that was signed off and fully covered on Friday. You extend the worker already on shift at overtime, or you ring an agency.",
  headline: "The workers you already have, and the ones you do not have yet.",
  standfirst:
    "A one-off audit of how your rosters allocate the workforce you already pay for, and an ongoing service that builds the workforce you do not have yet. Run by our own team inside the systems you already use. Back office only, nothing clinical.",
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
  /**
   * The nav slot's label, when the service name is too long for it.
   * The care pillars carry full service names ("Rostering Audit &
   * Efficiency"), which a nav cannot hold, so they set this to the one
   * word a provider already uses for the problem. Falls back to `name`.
   */
  navLabel?: string;
  /**
   * The care pillars' comprehension spine: "the workers you already
   * have" against "the workers you do not have yet".
   *
   * ⚠️ ONE DEFINITION, because this pair is the only thing holding the
   * two halves apart in a reader's head, and it appears in five places
   * across three pages. A synonym in any one of them breaks it. Not set
   * for the practices desks, which are genuinely separate products.
   */
  spine?: string;
  slug: string;
  href: string;
  audience: Audience["slug"];
  who: string;
  summary: string;
  scope: string[];
};

/*
 * 🔴 THE TWO PILLARS ARE SEQUENTIAL, NOT PARALLEL, and this is the
 * difference from the care offer. There the two halves solve different
 * problems and a buyer might need only one. Here the audit finds what is
 * being lost and the continuity service stops it being lost, in that
 * order. The spine phrases encode it: "it" in the second has no referent
 * except the first, so the pair cannot be read out of order.
 */
export const LEAKAGE: Offer = {
  name: "Patient Revenue Leakage Audit",
  navLabel: "Revenue audit",
  spine: "Find out what you are losing",
  slug: "revenue-audit",
  href: "/practices/revenue-audit",
  audience: "practices",
  who: "For practices",
  summary:
    "Your booking enquiries, how many became appointments, your unused appointment time, your short-notice cancellations and your overdue recalls, read against your own records. You get a written report, a number with its assumptions shown, and a plan in priority order.",
  scope: [
    "Enquiries nobody got back to: calls missed while reception was occupied, voicemails, and online requests never completed.",
    "Enquiries that never became appointments, and the reason each one stalled.",
    "Appointment time that went unused, and whether FTAs and no-shows were followed up.",
    "Recalls your practitioners set and nobody completed.",
    "Where the hours at the front desk actually go.",
  ],
};

/*
 * ⚠️ THE OPERATIONS DESK IS A 24/7 OPERATIONS PARTNER, NOT AN
 * AFTER-HOURS SERVICE. Corrected 1 October 2026.
 *
 * The canon has always had TWO modules: After-Hours Continuity and
 * Managed Workforce Operations, the daytime back office. The site built
 * only the first and then let it name the whole offer. After hours is
 * ONE SHIFT of the operation, not the offer.
 *
 * WHY IT MATTERS COMMERCIALLY: an after-hours service is bought as
 * insurance and priced like a phone line. An operations partner is
 * bought as capacity and judged on whether the operation runs. The
 * second is the business; the first is a feature of it.
 *
 * WHY IT MATTERS NOW: from 1 July 2026 a registered provider must notify
 * the Commission of certain events and changes by the EARLIER of
 * becoming aware the change will occur, or it occurring. It used to be
 * "as soon as practicable" afterwards. An obligation that attaches to
 * the moment you become aware cannot be served by a desk that is only
 * awake after five. Source: NDIS (Provider Registration and Practice
 * Standards) Amendment (Mandatory Registration and Other Matters) Rules
 * 2026, via ndiscommission.gov.au.
 *
 * ⚠️ WE MAINTAIN THE RECORD, WE DO NOT NOTIFY OR REPORT. The obligation
 * stays with the provider; see the "Not your obligation" boundary. Never
 * write a line that could be read as us discharging a regulatory duty.
 */
export const ROSTERING: Offer = {
  name: "Rostering Audit & Efficiency",
  navLabel: "Rostering",
  spine: "The workers you already have",
  slug: "rostering",
  href: "/care/rostering",
  audience: "care",
  who: "For care providers",
  summary:
    "Your overtime, your agency shifts, your travel and your worker availability, read against your own rosters and payroll. We show you where you are paying more than you need to for cover you are already getting.",
  scope: [
    "Overtime added to workers already on shift, while other cleared workers have hours they want and are not getting.",
    "Agency cover bought for leave, sick days and recurring gaps that were visible in advance.",
    "How shifts are allocated against location, availability, qualifications, contracted hours and the relationships participants already have.",
    "Where your rostering process is creating avoidable administrative work for coordinators.",
    "Potential award and enterprise agreement exceptions, identified for your qualified people to resolve.",
  ],
};

/** ⚠️ Same product as WORKFORCE_CARE. Written for a practice reader. */
/*
 * 🔴 MONTH TO MONTH, where the audit is a one-off. The two pillars are
 * bought differently and the pages say so.
 *
 * ⚠️ "Retention" is defined on the page in one sentence, deliberately
 * early. On its own the word can be read as persuading patients into
 * treatment, which is the line this offer must never cross.
 */
export const BOOKING: Offer = {
  name: "Patient Booking & Retention Continuity",
  navLabel: "Patient booking",
  spine: "Stop losing it every week",
  slug: "patient-booking",
  href: "/practices/patient-booking",
  audience: "practices",
  who: "For practices",
  summary:
    "Booking enquiries answered and followed up, and bookings completed. Short-notice cancellations offered to patients waiting for an earlier time. The recall list your practitioners set, worked by phone, and the billing behind it administered, inside your own practice software.",
  scope: [
    "Booking enquiries answered in your practice name, through the channels you approve.",
    "Bookings completed, with no clinical suitability decisions and no pressure.",
    "Enquiries that did not book, followed up until there is an answer either way.",
    "Short-notice cancellations offered to patients on your own waiting list.",
    "Recalls administered at the interval your practitioners set, never originated.",
    "Billing administered against what your practitioners determined, never determined by us.",
    "A monthly report on what came in, what booked, and what did not.",
  ],
};

/*
 * ⚠️ NO LONGER THE TWIN OF WORKFORCE_PRACTICES. Until 14 October 2026
 * the care side ran the same Workforce Desk as the practices side, in a
 * different vocabulary, and the two pages were kept in lockstep. That is
 * over: this is a different product with a different commercial shape,
 * and only the practices page is still a Desk.
 *
 * 🔴 MONTH TO MONTH. Rostering is a ONE-OFF engagement; this one is
 * monthly. The two pillars are bought differently and the pages say so.
 */
export const CONTINUITY: Offer = {
  name: "Workforce Continuity",
  navLabel: "Workforce",
  spine: "The workers you do not have yet",
  slug: "workforce",
  href: "/care/workforce",
  audience: "care",
  who: "For care providers",
  summary:
    "Recruiting, screening and induction run ahead of demand rather than after a shift goes vacant, plus payroll on your own cycle. So you have enough cleared and available people to cover leave, absences and new participants.",
  scope: [
    "Recruiting: role definition, advertising, screening and first contact with applicants, run against the gaps rather than the emergency.",
    "NDIS Worker Screening clearance, police certificates and the other checks your sector requires, plus credential verification, induction and system access.",
    "Your own relief pool of cleared, available workers, with a clear process for keeping them current.",
    "Payroll processed on your own cycle, with your organisation remaining the employer throughout.",
    "Visibility over who is available, what they are cleared for, and what is coming up short.",
  ],
};

export const OFFERS: Offer[] = [
  LEAKAGE,
  BOOKING,
  ROSTERING,
  CONTINUITY,
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
    body: "No triage, no assessment of urgency, no advice of any kind. Anything clinical stops with us and goes to your team, under a protocol agreed in writing before we take a single call. All clinical and professional judgement stays with your own registered people.",
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
/*
 * 🔴 REWRITTEN 15 October 2026, and the founder should check it.
 *
 * This read "Novada already runs a managed desk for care providers: the
 * phone answered, the roster worked and the record written, through the
 * day and through the night". That is the retired Operations Desk, and
 * it renders on the homepage and on /why-novada, so a claim about a
 * 24/7 phone service was the credibility base for two offers that do
 * not include one.
 *
 * What is here now claims only what Rostering Audit & Efficiency and
 * Workforce Continuity support. If the nightly operation genuinely
 * still runs for existing clients, the old sentence is the stronger
 * claim and should come back.
 */
export const OPERATING_PROOF =
  "Novada already runs back office functions for Australian care providers: rosters read, workers recruited and screened, records kept current and payroll run, inside those providers own systems and to their own protocols.";
