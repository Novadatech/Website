import type { Metadata } from "next";

import PillarPage from "@/components/care/PillarPage";
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
 */

export const metadata: Metadata = {
  title: "Rostering, overtime and agency spend | Novada",
  description:
    "Find out where your roster is costing you more than it has to. We look at your overtime, agency shifts, travel and worker availability across the last twelve weeks, and show you where avoidable cost is sitting.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "Rostering, overtime and agency spend | Novada",
    description:
      "One piece of work, with findings inside two weeks of getting access. For Australian NDIS, home care and aged care providers.",
    type: "website",
  },
};

export default function Page() {
  return (
    <PillarPage
      offer={ROSTERING}
      sibling={CONTINUITY}
      desk="care-rostering"
      source="care-rostering"
      headline="Find out where your roster is costing you more than it has to."
      standfirst="We look at your rosters, overtime, agency shifts, travel and worker availability, and show you where avoidable cost is sitting. One piece of work, with findings inside two weeks of getting access."
      moment={{
        label: "The overtime you only notice at month end",
        body: "A worker goes off sick. Somebody already on shift stays on, at overtime. Next week, a different house, the same answer. Each one was the right call on the day, so nobody logs it. It shows up in the payroll report at month end, as the cost of running the place.",
      }}
      why={{
        heading: "Nobody is doing anything wrong",
        paras: [
          "A roster is built in pieces, by people under time pressure, with partial visibility. The coordinator filling Saturday can see who is on and who answers the phone. They cannot see who, across the whole workforce, is cleared, nearby, available and wanting hours.",
          "So the nearest yes wins, and the nearest yes is often the most expensive one. Repeat that for a year and your roster carries a cost nobody chose.",
        ],
        quote:
          "Your roster should support efficient care delivery, not quietly increase the cost of providing it.",
      }}
      what={{
        label: "What we look at",
        heading: "The workers you already have: what we look for",
        /* "What we look for", never "what we found". Implying an audit has
           already happened is forbidden, and so is promising a finding. */
        intro:
          "Your rosters, payroll, overtime, agency bookings, travel and cancellations, for the last twelve weeks. We read payroll data here. Running payroll is the other half.",
        cards: [
          {
            h: "Overtime that was not needed",
            b: "Hours added to workers already on shift, while other cleared workers have hours they want. We look at utilisation across the whole workforce, and for the pattern: which house, which week, which worker.",
          },
          {
            h: "Agency shifts you could have covered",
            b: "Agency cover bought for leave, sick days and recurring gaps that were visible in advance. We look at which an available internal worker could have taken.",
          },
          {
            h: "Travel and allocation",
            b: "A worker driving past a colleague who lives nearer the participant. We look at how shifts are allocated against location, availability, qualifications, contracted hours and existing participant relationships.",
          },
        ],
        /* ⚠️ The only invented content on the care pages. Safe because the
           scenario is the READER'S OWN service, so there is no third
           party for a fabricated client to be, and because the note
           denies all three readings separately. Do not turn this into a
           case study, and do not drop the note. */
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
            b: "We take read-only access, or the exports you already produce, and go through the last twelve weeks.",
          },
          {
            h: "Find",
            b: "We name where avoidable cost and operational risk are sitting, with the examples attached, so you can check each one.",
          },
          {
            h: "Put a number on it",
            b: "Where your information supports an estimate, we make one. Where it does not, we say so rather than estimate anyway.",
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
      calcNote="Both figures ask for the premium, not the whole cost. The shift still has to be covered and the worker still paid. The only avoidable part is the extra you pay to cover it the expensive way."
      boundaries={[
        {
          h: "We never recommend less care.",
          b: "Every change has to respect participant and resident needs, worker qualifications, entitlements and any mandated staffing level. If the only saving means less support, we say so and leave it.",
        },
        {
          h: "We do not promise savings.",
          b: "What we look for is on this page. What we find comes out of your own rosters and payroll. The sum above lets you put a number on it yourself.",
        },
        {
          h: "Your systems, not ours.",
          b: "Read-only access to the rostering and payroll systems you already run. Nothing is changed in a live system, nothing migrates, and there is no platform to buy.",
        },
        {
          h: "We identify, your qualified people decide.",
          b: "Award, enterprise agreement, payroll and regulatory questions go to the people qualified to resolve them. Nothing we do is clinical.",
        },
      ]}
      other={{
        heading: "When the answer is that there was nobody to ring",
        body: "Better use of the roster runs out when there is nobody to put in it. If you have gone down the list and found nobody available, that is the other half of this.",
      }}
      faq={[
        {
          q: "Is this the same as a Practice Standards audit?",
          a: "No. Nothing goes to the NDIS Commission, nothing touches your registration, and there is no assessor. It is a look at your own numbers to find money you do not have to spend.",
        },
        {
          q: "Do we have to buy new rostering software?",
          a: "No. We work inside the rostering and payroll systems you already run, and we go deep on a small number rather than claiming all of them. Tell us what you use on the call.",
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
        body: "Thirty minutes on how your roster is worked today. You leave with an honest view of whether this fits, or does not.",
      }}
      commitment="The review is one piece of work, not a subscription, with findings inside two weeks of getting access."
    />
  );
}
