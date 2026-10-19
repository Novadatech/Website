import type { Metadata } from "next";

import PillarPage from "@/components/offer/PillarPage";
import { CONTINUITY_CALC } from "@/content/calculators";
import { CONTINUITY, ROSTERING } from "@/content/offers";
import { EVIDENCE } from "@/content/offers";

/*
 * /care/workforce — pillar two of the care offer.
 *
 * Same URL as the retired Workforce Desk, entirely new content. The
 * ninety-day expiry calendar, the filing-cabinet diagram and the
 * "working a shift in days rather than weeks" timeframe are all gone,
 * because none of them is in the new offer brief.
 *
 * ⚠️ THIS IS NO LONGER THE TWIN OF /practices/workforce. The two ran as
 * one product in two vocabularies and were kept in lockstep by hand,
 * which is how one of them ended up with a duplicated heading and a
 * diagram written about the wrong audience. Only the practices page is
 * still a Desk. Do not sync them again.
 *
 * ⚠️ THE POOL IS THEIRS. The brief describes helping the provider build
 * their own relief pool, so that is what this page says: their workers,
 * their access control, their hires. Novada's own worker pool is not
 * mentioned, and is not denied either. Do not add "we do not supply
 * labour" or any other legal characterisation of the arrangement, in
 * either direction.
 *
 * ⚠️ NEVER PROMISE A FILL. We sell the sequence that runs when a shift
 * goes vacant, never the outcome. Boundary card 2 states it outright.
 */

export const metadata: Metadata = {
  title: "Recruiting, screening, induction and payroll | Novada",
  description:
    "Build your workforce before you need it, not after the shift is already vacant. Recruiting, screening and induction run ahead of demand, your own relief pool, and payroll on your own cycle.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "Recruiting, screening, induction and payroll | Novada",
    description:
      "You stay the employer. You choose every hire. For Australian NDIS, home care and aged care providers.",
    type: "website",
  },
};

export default function Page() {
  return (
    <PillarPage
      offer={CONTINUITY}
      sibling={ROSTERING}
      desk="care-continuity"
      audienceLine="For NDIS, home care and aged care providers"
      source="care-workforce"
      headline="Build your workforce before you need it, not after the shift is already vacant."
      standfirst="We help you recruit, screen and induct the support workers you are short of, and build your own relief pool. Then an absence does not automatically become an agency booking. We process the payroll on your own cycle. You stay the employer. You choose every hire."
      moment={{
        label: "The call you make when there is nobody to ring",
        body: "Six on a Saturday, a support worker calls in sick, and the coordinator goes down the list. The first three are already on. The next two are not cleared for that house. So the agency gets the call, at agency rates, for a shift somebody always had to cover. Recruiting starts on Monday.",
      }}
      why={{
        heading: "Recruiting starts when it is already too late",
        paras: [
          "Most providers recruit when they have a shortage. By the time advertising, screening, checks and induction are finished, the shifts have already been covered with overtime and agency hours. That money is already spent.",
          "The shortage was not a surprise. Leave, sick days and turnover are all predictable in aggregate. What is missing is a pipeline that keeps running when nothing is wrong.",
        ],
        quote:
          "Stop treating every staffing shortage as a new emergency. Build workforce capacity before you need it.",
      }}
      /* ⚠️ AUSTRALIAN, AND DISABILITY-SPECIFIC. Both figures come from one
         report, read out of the primary PDF. The labels say "disability
         support" and must not be widened, because this audience also
         includes home care and aged care. */
      stats={{
        figures: [EVIDENCE.turnover, EVIDENCE.fullTime],
        caption:
          "At that rate, recruiting is not a project. It runs all the time.",
      }}
      what={{
        label: "What we run",
        heading: "The workers you do not have yet: what we run",
        intro:
          "Against the gaps your own numbers show, not whichever shift fell over last week.",
        cards: [
          {
            h: "Recruiting ahead of demand",
            b: "Role definition, advertising, screening and first contact with applicants, run against the gaps rather than the emergency. Applicants usually approach several employers in the same week, and whoever replies first wins.",
          },
          {
            /* ⚠️ Names what is actually in force in each sector today and
               asserts nothing about any new regime. Aged care currently
               runs on a police certificate or an NDIS check; a dedicated
               aged care screening check is legislated but its start was
               not confirmable. Never name it either way. */
            h: "Screening and readiness",
            b: "NDIS Worker Screening clearance, police certificates and the other checks your sector requires, plus credential verification, induction, role-specific training and system access. All in one place, to shorten the wait between accepting and taking a shift.",
          },
          {
            h: "Your own relief pool",
            b: "A group of your own cleared, available workers who can take extra cover. With a process for keeping them current, and for who gets called first.",
          },
          {
            h: "Visibility, ahead of the roster",
            b: "Who is available, what they are cleared for, where they are, what hours they want. And what is coming up short, so you can act before it reaches a participant.",
          },
          {
            h: "Compliance tracking and workforce readiness",
            b: "Clearances, checks, qualifications and training records tracked against expiry, with notice before something lapses rather than after. Capacity reported against the cover you actually need.",
          },
          {
            h: "Payroll",
            b: "Processed on your own cycle, against the hours and entitlements that apply to your people. We process payroll. We do not advise on it.",
          },
          {
            /* 🔴 THE CARE BRIEF DIFFERS FROM THE PRACTICES ONE HERE.
               Billing and claims administration IS part of the ongoing
               practices service. For care it is NOT included unless the
               managed-service agreement expressly says so. A reader
               arriving from an audit page that just spent half its
               length on claims will otherwise assume we run them
               afterwards. */
            h: "Claims administration is not part of this",
            b: "The audit looks at your claiming. Running it afterwards is not included here as standard. Where you want us doing it, it is scoped, agreed and quoted separately.",
          },
        ],
      }}
      how={{
        heading: "Four steps, and you can stop after the second",
        steps: [
          {
            h: "Look",
            b: "We go through your workforce numbers, available hours, recurring vacancies, absence patterns and planned growth.",
          },
          {
            h: "Find",
            b: "We name where you are short: how many, which qualifications, which locations, which hours.",
          },
          {
            h: "Build it",
            b: "Recruiting, screening, induction and relief pool development against that list, running continuously rather than when a shift falls over.",
          },
          {
            h: "Stay ahead of it",
            b: "Upcoming shortages, worker availability and agency reliance tracked, so you can act before a gap reaches the roster.",
          },
        ],
        closing:
          "You decide every hire at every step. We do the work in between.",
      }}
      calculator={CONTINUITY_CALC}
      calcIntro="We will not invent a figure for you. Here is the sum."
      /* A reader who has used both calculators and suspects double
         counting discounts both numbers. Say it before they wonder. */
      calcNotes={[
        "This is the cover you buy while a role is open. The rostering page costs the cover you buy for an absence. Different weeks, do not add them.",
      ]}
      boundaries={[
        {
          h: "You stay the employer.",
          b: "You employ your own people and choose every hire. We run the work in between: the advertising, the screening, the records, the induction. Final suitability, safeguarding and employment decisions are yours.",
        },
        {
          h: "We do not promise a fill.",
          b: "We build the pipeline and the pool so there are more cleared, available people to call. We never promise a particular shift will be covered, and nobody honest would.",
        },
        {
          h: "We will not end your agency use.",
          b: "Agencies stay necessary for emergencies, specialist needs and genuine shortfalls. What we work on is the avoidable use: the leave, the sick days and the gaps you can see coming.",
        },
        {
          h: "Retention is not ours to promise.",
          b: "We can improve recruiting, induction and capacity planning. Whether your people stay also depends on your management and employment practices, which is outside what we run.",
        },
      ]}
      other={{
        heading: "When you have the people and still pay too much for them",
        body: "A bigger pool does not fix a roster that was never going to use it well. If you pay overtime while workers who want hours are not getting them, that is the other half of this.",
      }}
      faq={[
        {
          q: "Do you give payroll, employment or tax advice?",
          a: "No. We process payroll and coordinate the recruiting, the records, the checks and the induction. Tax treatment, worker classification, employment disputes and regulatory interpretation go to your accountant or lawyer.",
        },
        {
          q: "What systems do you work in?",
          a: "Yours. We work inside the systems you already run, and we go deep on a small number rather than claiming all. Tell us what you use on the call.",
        },
        {
          q: "Who sees our worker information?",
          a: "Named people, each with their own login under your own access control. Permissions are limited to the work, and revoked the day somebody leaves. Never a shared account.",
        },
        {
          q: "Are we locked in?",
          a: "Month to month, with no commitment beyond the current month. Commercial terms are covered on the call and set out in the proposal.",
        },
      ]}
      ask={{
        body: "Thirty minutes on where your workforce is short today. You leave with an honest view of whether this fits, or does not.",
      }}
      commitment="Month to month after that, with no commitment beyond the current month."
    />
  );
}
