import type { Metadata } from "next";

import PillarPage from "@/components/offer/PillarPage";
import { ROSTERING_CALC } from "@/content/calculators";
import { CONTINUITY, ROSTERING } from "@/content/offers";

/*
 * /care/rostering — pillar one of the care offer.
 *
 * Replaces /care/operations, which sold the retired Operations Desk and
 * now 308s here. ⚠️ This is NOT that page in new words. The Operations
 * Desk was a managed around-the-clock desk answering a live phone. This
 * is a one-off piece of analytical work on the provider's own numbers.
 * Nothing on this page answers a call, which is why no emergency
 * protocol appears on it.
 *
 * ⚠️ ONE-OFF, NOT MONTHLY. The two care pillars are bought differently
 * and this is the one that is not a subscription. Never let "month to
 * month" drift onto this page from its sibling.
 *
 * ⚠️ THE WORD "AUDIT" STAYS, and it is a founder decision taken twice
 * against my recommendation: providers in this market are said to
 * already read it as distinct from a Practice Standards audit. The
 * consequence was applied with it, so the hero does NOT pre-empt a
 * compliance misreading. Only the FAQ answers it, where it is read by
 * somebody who actually wondered. Do not reinstate a de-fusing line in
 * the fold without reopening that decision.
 *
 * 🔴 EVERY EFFICIENCY CLAIM IS ABOUT WASTE, NEVER ABOUT LESS CARE. That
 * is a safety line, not positioning. Nothing here may imply thinner
 * cover, stretched ratios, or staffing below a mandated level.
 *
 * 🔴 TWO COMPONENTS SINCE 19 OCTOBER 2026, WEIGHTED EQUALLY. What the
 * roster costs to run, and what was delivered and never properly
 * claimed or collected. The founder's brief forbids the audit reading
 * as a scheduling review, so both render through `what.groups`.
 *
 * 🔴 THE BRIEF'S OWN HEADLINE SAYS "IDENTIFY BILLING GAPS" AND THAT
 * PHRASE CANNOT SHIP HERE. The gap is the out-of-pocket a client pays
 * after a subsidy or rebate, and this page now discusses participant
 * contributions and resident fees, which is precisely where it would be
 * misread. Exception, discrepancy, or revenue never claimed.
 *
 * 🔴 THE BILLING HALF DOES NOT SOFTEN THE SAFETY LINE, IT ADDS ONE.
 * We never recommend reducing staffing, and we never treat a rostered
 * hour as automatically billable: a claim needs actual delivery or
 * another permitted circumstance. Both are boundaries on the page.
 *
 * ⚠️ WE DO NOT DECIDE ELIGIBILITY OR CLASSIFICATION. Not NDIS support
 * eligibility, not AN-ACC classification, not funding entitlement.
 * Those go to the provider's own qualified people, every time.
 *
 * ⚠️ THREE FUNDING ARRANGEMENTS, NOT ONE. NDIS, Support at Home and
 * residential aged care are shown separately under component two,
 * because the brief forbids presenting them as the same thing.
 */

export const metadata: Metadata = {
  title: "Rostering, overtime and revenue assurance | Novada",
  description:
    "Money leaves in two directions. We look at your overtime, agency shifts, travel and worker availability, and at what you delivered and never properly claimed or collected. One piece of work, findings inside two weeks.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "Rostering, overtime and revenue assurance | Novada",
    description:
      "What the roster costs you, and what you delivered and never claimed. For Australian NDIS, Support at Home and residential aged care providers.",
    type: "website",
  },
};

export default function Page() {
  return (
    <PillarPage
      offer={ROSTERING}
      sibling={CONTINUITY}
      desk="care-rostering"
      audienceLine="For NDIS, home care and aged care providers"
      source="care-rostering"
      headline="You can lose money delivering the care, and lose it again claiming for it."
      standfirst="One half is what the roster costs: overtime, agency shifts, travel and workers who were available and never asked. The other is what you delivered and never properly claimed or collected. We read both, from your own records. One piece of work, with findings inside two weeks of getting access."
      moment={{
        label: "The overtime you only notice at month end",
        body: "A worker goes off sick. Somebody already on shift stays on, at overtime. Each one was the right call on the day, so nobody logs it, and it turns up in the payroll report at month end as the cost of running the place. In the same week, a support that was delivered never made it onto a claim. That one does not turn up anywhere.",
      }}
      why={{
        heading: "Nobody is doing anything wrong",
        paras: [
          "A roster is built in pieces, by people under time pressure, with partial visibility. The coordinator filling Saturday can see who is on and who answers the phone. They cannot see who, across the whole workforce, is cleared, nearby, available and wanting hours.",
          "So the nearest yes wins, and the nearest yes is often the most expensive one. Repeat that for a year and your roster carries a cost nobody chose.",
          "The claiming side fails the same way. A support delivered at the end of a long shift, a travel component nobody recorded, a claim that bounced and sat there. Each one is small, none of them is anybody\'s mistake, and nothing in the system raises its hand.",
        ],
        quote:
          "Money leaves in two directions, and only one of them shows up in the payroll report.",
      }}
      what={{
        label: "What we look at",
        heading: "The workers you already have: what we look for",
        /* "What we look for", never "what we found". Implying an audit has
           already happened is forbidden, and so is promising a finding. */
        intro:
          "Twelve weeks of your own records, agreed before we start. Two halves, and we weight them the same, because a provider can have every shift covered and still be paid for less than it delivered.",
        groups: [
          {
            eyebrow: "Component one",
            heading: "What the roster costs to run",
            intro:
              "Is the workforce costing more to manage than it should? We read your rosters, payroll, overtime, agency bookings, travel and cancellations. We read payroll data here. Running payroll is the other half of the offer, not part of this.",
            cards: [
          {
            h: "Overtime that was not needed",
            b: "Hours added to workers already on shift, while other cleared workers have hours they want. We look at utilisation across the whole workforce, and for the pattern: which house, which week, which worker.",
          },
          {
            h: "Agency shifts you could have covered",
            b: "Agency cover bought for leave, sick days and recurring shortfalls that were visible in advance. We look at which an available internal worker could have taken.",
          },
          {
            h: "Travel and allocation",
            b: "A worker driving past a colleague who lives nearer the participant. We look at how shifts are allocated against location, availability, qualifications, contracted hours and existing participant relationships.",
          },
          {
            h: "Where the roster, the timesheet and the pay run disagree",
            b: "Shifts rostered and not worked, worked and not recorded, recorded and paid at a different rate. We reconcile the three and list the exceptions rather than assuming they match.",
          },
          {
            h: "Patterns that carry a compliance risk",
            b: "Repeated last-minute changes, short breaks between shifts, consecutive long shifts, and allocation to workers whose clearances or qualifications are near expiry. We flag the pattern. Your qualified people decide what it means.",
          },
            ],
          },
          {
            eyebrow: "Component two",
            heading: "What you delivered and never claimed",
            intro:
              "Are you accurately claiming and collecting what the provider is entitled to? We read service delivery records, invoices, claims, remittances and payment reconciliation for the same period, against the funding arrangement you actually operate under.",
            cards: [
              {
                h: "Supports delivered and never claimed",
                b: "Work that happened, was recorded somewhere, and never reached an invoice or a claim. We match delivery evidence to what was submitted and list what is missing.",
              },
              {
                h: "Where the roster, the record and the claim disagree",
                b: "Hours or quantities recorded differently in three places. Travel, cancellations and non-face-to-face components recorded in one system and not the next.",
              },
              {
                h: "Claims rejected, delayed or never resolved",
                b: "What bounced, what was never resubmitted, and what has been sitting unresolved long enough to be at risk. A rejection nobody worked looks, in most reports, exactly like a payment.",
              },
              {
                h: "Items, rates and pricing conditions applied wrongly",
                b: "Under and over, both. The wrong item or service type, a rate that never moved when the price guide did, and weekday, weekend or public holiday conditions applied inconsistently.",
              },
              {
                h: "Contributions and invoices nobody chased",
                b: "Participant contributions, resident fees and plan manager invoices outstanding, how long they have been outstanding, and whether anything routine exists to follow them up.",
              },
              {
                h: "Payments nobody reconciled",
                b: "What was claimed against what was actually received, including adjustments and amendments. Unreconciled funding is the single most common place we expect to find an exception.",
              },
              {
                h: "Whether a claiming error would be caught at all",
                b: "Most leakage is a process with no check in it. We look at whether an error would surface on its own, who would see it, and how long that would take.",
              },
            ],
            splits: [
              {
                lead: "Three funding arrangements, and they are not the same",
                label: "NDIS",
                body: "Support items and the pricing conditions attached to them, delivered supports against claims, travel and cancellation claiming, plan-managed, agency-managed and self-managed invoicing, and payment reconciliation against your service agreements.",
              },
              {
                lead: "",
                label: "Support at Home",
                body: "Service types, units and agreed prices against what was actually delivered, participant contribution invoicing and what is outstanding, funding source allocation, monthly statements, and reconciliation of government payments.",
              },
              {
                lead: "",
                label: "Residential aged care",
                body: "Monthly subsidy claims and their reconciliation, AN-ACC classification and funding records, supplements that should be reflected and are not, admission, departure and leave movements, and resident fees and contributions.",
              },
            ],
          },
        ],
        /* ⚠️ The only invented content on the care pages. Safe because the
           scenario is the READER'S OWN service, so there is no third
           party for a fabricated client to be, and because the note
           denies all three readings separately. Do not turn this into a
           case study, and do not drop the note. It sits after both
           components, as an illustration of the shape of a finding. */
        example: {
          label: "A hypothetical example",
          body: "Suppose the Thursday night shift in one of your houses went to an agency nine times in twelve weeks. On six of those nights, a cleared worker twenty minutes away had hours available. That is a pattern, not an incident.",
          note: "Invented to show the shape of a finding. Not a client, not a result, and not a number we have observed.",
        },
      }}
      how={{
        heading: "Four steps, and you can stop after the second",
        steps: [
          {
            h: "Look",
            b: "We take read-only access, or the exports you already produce, and go through the last twelve weeks on both sides: rostering and payroll, and service delivery, claims and payments.",
          },
          {
            h: "Find",
            b: "We name where avoidable cost, unclaimed revenue and operational risk are sitting, with the examples attached, so you can check each one. A rostered hour is not treated as billable: a claim needs actual delivery or another permitted circumstance, and we say which.",
          },
          {
            h: "Put a number on it",
            b: "Where your information supports an estimate, we make one. Where it does not, we say so rather than estimate anyway. Confirmed discrepancies, potential recoverable revenue needing verification, estimated avoidable future cost and compliance exceptions are listed separately and never added into one headline number.",
          },
          {
            h: "Change it",
            b: "Recommendations you can action, and, where you engage us, the work of putting the new practices in place.",
          },
        ],
        closing:
          "Ongoing monitoring afterwards is optional, quoted separately, and not part of this.",
      }}
      calculator={ROSTERING_CALC}
      calcIntro="We will not invent a figure for you. Here is the sum."
      calcNotes={[
        "Both figures ask for the premium, not the whole cost. The shift still has to be covered and the worker still paid. The only avoidable part is the extra you pay to cover it the expensive way.",
        "This sum covers the first half of the audit only. What was delivered and never claimed is counted from your own service and claim records during the review. We will not put a slider on it, because there is no honest figure to seed one with and because no claim is valid without delivery behind it.",
      ]}
      boundaries={[
        {
          h: "We never recommend less care.",
          b: "Every change has to respect participant and resident needs, worker qualifications, entitlements and any mandated staffing level. If the only saving means less support, we say so and leave it.",
        },
        {
          h: "We do not promise savings, or recovered revenue.",
          b: "What we look for is on this page. What we find comes out of your own records. A potential opportunity is not confirmed recoverable revenue, we do not guarantee either, and we do not claim an audit will find every error.",
        },
        {
          h: "A rostered hour is not a billable hour.",
          b: "We never treat scheduled time as automatically claimable. A claim needs actual delivery, or another circumstance the applicable rules expressly permit, with evidence behind it. We never recommend claiming for a support that was not delivered.",
        },
        {
          h: "We look for overbilling as well.",
          b: "Revenue assurance is accuracy, not maximising claims. Duplicate claims, unsupported claims and potential overbilling go in the report with the same weight as anything you are owed, because the exposure from one is larger than the gain from the other.",
        },
        {
          h: "Your systems, not ours.",
          b: "Read-only access to the rostering and payroll systems you already run. Nothing is changed in a live system, nothing migrates, and there is no platform to buy.",
        },
        {
          h: "We identify, your qualified people decide.",
          b: "We do not determine NDIS support eligibility, we do not change an AN-ACC classification or a funding entitlement, and we do not interpret a claiming rule for you. Award, enterprise agreement, payroll and regulatory questions go to the people qualified to resolve them, every correction and resubmission is yours to verify and authorise, and nothing we do is clinical.",
        },
      ]}
      other={{
        heading: "When the answer is that there was nobody to ring",
        body: "Better use of the roster runs out when there is nobody to put in it. If you have gone down the list and found nobody available, that is the other half of this.",
      }}
      faq={[
        {
          q: "Is this the same as a Practice Standards audit?",
          a: "No, and it is not a statutory or financial audit either. Nothing goes to the NDIS Commission or the Aged Care Quality and Safety Commission, nothing touches your registration, there is no assessor, and we issue no certification. It is a look at your own numbers to find money you do not have to spend, and money you have not been paid.",
        },
        {
          q: "Does the audit review billing and claims as well as rostering?",
          a: "Yes. That is half of it. We look at what the roster costs to run, and at what you delivered and never properly claimed or collected, and the two are weighted the same.",
        },
        {
          q: "Does it cover NDIS, Support at Home and residential aged care?",
          a: "Yes, but not identically, because the funding arrangements are not the same. NDIS work looks at support items, pricing conditions, travel and cancellation claiming and plan manager invoicing. Support at Home looks at service types, agreed prices, participant contributions and government payment reconciliation. Residential looks at subsidy claims, AN-ACC classification and funding records, supplements, resident movements and resident fees. We scope to whichever you actually operate.",
        },
        {
          q: "Can you find supports we delivered and never claimed?",
          a: "That is one of the things we look for. We match delivery evidence to what was submitted and list what is missing. A rostered hour is not automatically billable, so anything we identify has to have delivery or another permitted circumstance behind it before it goes anywhere.",
        },
        {
          q: "Do you look for overbilling too?",
          a: "Yes, with the same attention. Duplicate claims, unsupported claims and potential overbilling go in the report alongside anything you are owed. Revenue assurance is accuracy, not maximising claims, and the exposure from an unsupported claim is larger than the gain from a missed one.",
        },
        {
          q: "Do we have to buy new rostering software?",
          a: "No. We work inside the rostering and payroll systems you already run, and we go deep on a small number rather than claiming all of them. Tell us what you use on the call.",
        },
        {
          q: "How does this connect to Workforce Continuity?",
          a: "The audit finds it. Workforce Continuity is the ongoing service that builds and keeps the workforce, including recruitment, screening, induction, training records, compliance tracking and payroll. Ongoing claims administration is not part of it as standard: if you want us running the billing afterwards, that is scoped and quoted separately.",
        },
        {
          q: "Do you take over our rostering?",
          a: "Not as standard. Your coordinators keep doing the rostering. We examine and improve how it is designed, managed and monitored. Ongoing rostering administration is a separate arrangement.",
        },
        {
          q: "Are we locked in?",
          a: "No, there is nothing to be locked into. The review is one piece of work, scoped in writing before it starts, with no subscription attached. Commercial terms are set out in the proposal.",
        },
      ]}
      ask={{
        body: "Thirty minutes on how your roster is worked today, and on how what you deliver gets recorded, claimed and reconciled. Find out whether inefficient rosters, avoidable staffing costs, billing errors or unresolved claims are affecting your financial performance. You leave with an honest view of whether this fits, or does not.",
      }}
      commitment="The review is one piece of work, not a subscription, with findings inside two weeks of getting access."
    />
  );
}
