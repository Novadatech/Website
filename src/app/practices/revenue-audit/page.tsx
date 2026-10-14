import type { Metadata } from "next";

import PillarPage from "@/components/offer/PillarPage";
import { LEAKAGE_CALC } from "@/content/calculators";
import { BOOKING, LEAKAGE } from "@/content/offers";

/*
 * /practices/revenue-audit — pillar one of the practices offer.
 *
 * Replaces /practices/workforce, which sold the retired Workforce Desk
 * and now 308s here. ⚠️ That redirect is the founder's own mapping and it
 * is semantically odd: somebody searching for help with practice hiring
 * lands on a page about patient bookings. It is deliberate, because the
 * old page is retired either way, and recruitment and payroll for
 * practices are absent from the new brief entirely.
 *
 * ⚠️ ONE-OFF, NOT MONTHLY. Never let "month to month" drift here from its
 * sibling.
 *
 * 🔴 THE WORD "GAP" IS BANNED AS A SCHEDULING WORD on this domain. In
 * Australian healthcare the gap is the patient's out-of-pocket after the
 * rebate. Say empty slots, unfilled appointments, short-notice
 * cancellations, unused appointment time.
 *
 * 🔴 NO MISSED-CALL STATISTIC, EVER. No honest Australian one exists and
 * every figure in circulation is invented. The page says so, which is a
 * claim no dishonest competitor can copy.
 *
 * 🔴 THE OBJECTIVE IS NOT TO MAXIMISE APPOINTMENTS. That is a patient
 * safety line, not positioning. Nothing here may read as more treatment.
 */

export const metadata: Metadata = {
  title: "Find the bookings your practice is losing | Novada",
  description:
    "We read eight to twelve weeks of your own enquiry, booking, cancellation and recall records, and show you where bookings are going missing. One piece of work, with the opportunities in priority order.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "Find the bookings your practice is losing | Novada",
    description:
      "A written report with the opportunities in priority order. For Australian dental, allied health and medical practices.",
    type: "website",
  },
};

export default function Page() {
  return (
    <PillarPage
      offer={LEAKAGE}
      sibling={BOOKING}
      audienceLine="For dental, allied health and medical practices in Australia"
      desk="practices-revenue-audit"
      source="practices-revenue-audit"
      headline="Find out how many bookings your practice is losing, and what they were worth."
      standfirst="We read eight to twelve weeks of your own enquiry, booking, cancellation and recall records. You get a written report with the opportunities in priority order. One piece of work."
      moment={{
        label: "The number nobody at the practice can tell you",
        body: "Ask how many people made a booking enquiry last month, and how many ended up with an appointment. Almost no practice can answer. The book records what was booked. Nothing records what was asked for and did not happen.",
      }}
      why={{
        heading: "Nothing is recorded as lost",
        paras: [
          "A call that rings out leaves no trace. A booking request answered two days late looks no different from one answered in ten minutes. A patient never offered a suitable time does not appear anywhere.",
          "Nothing went wrong, nobody made a mistake, and no number moved. Over a year it adds up to work that was available and never got done.",
        ],
        quote:
          "Your practice may already be receiving the patient demand it needs. The question is how much of it turns into an appointment.",
      }}
      what={{
        label: "What we look at",
        /* Half the fixed spine pair, verbatim. The other half is the
           heading of the same section on the booking page. */
        heading: "Find out what you are losing: what we look at",
        intro:
          "Eight to twelve weeks of your own records, agreed before we start: call reports, enquiries, the appointment book, cancellations, waiting lists and your recall workflow.",
        cards: [
          {
            h: "Enquiries nobody got back to",
            b: "Calls missed while reception was occupied, voicemails, and online requests never completed. We count them, and how many were genuine booking enquiries.",
          },
          {
            h: "Enquiries that never became appointments",
            b: "Somebody contacted you and did not book. No suitable time, an unclear answer, a slow reply, a follow-up that stopped. We record the reason each one stalled.",
          },
          {
            /* FTA is the dominant Australian term and the highest-signal
               word available. Dental says FTA, medical says DNA, allied
               health says neither, so the safe cross-vertical pairing is
               "FTAs and no-shows". */
            h: "Appointment time that went unused",
            b: "Bookable hours nobody took, cancellations nobody refilled, and how long each stayed empty. Whether there was a waiting list to ring, and whether FTAs and no-shows were followed up.",
          },
          {
            h: "Recalls your practitioners set and nobody completed",
            b: "How many patients are overdue against intervals your own practitioners chose, how many were contacted, and how many of those ended in an appointment.",
          },
          {
            h: "What the front desk is actually doing all day",
            b: "Where the hours go: the phone, the counter, scheduling, messages, rebooking. Which of it is repetitive, and which does not have to be done at the counter.",
          },
        ],
      }}
      how={{
        heading: "Five steps, and the fifth is optional",
        steps: [
          {
            h: "Assess",
            b: "We agree the period, usually eight to twelve weeks, and which records we need. Read-only where your systems allow it.",
          },
          {
            h: "Identify",
            b: "We separate what is measured from what is assumed. A high missed-call rate is a signal, not a finding, until we know those calls were booking enquiries.",
          },
          {
            h: "Put a number on it",
            b: "Where your records support an estimate we make one. We show the gross appointment value separately from what is left after the cost of delivering it.",
          },
          {
            h: "Recommend",
            b: "A written report: where bookings are being lost, the opportunities in priority order with their assumptions, and a 30, 60 and 90 day plan.",
          },
          {
            h: "Put it in place",
            b: "Optional, quoted separately, and the subject of the other page. Plenty of practices take the report and run it themselves.",
          },
        ],
        closing:
          "Some of this cannot be measured from your records. Where it cannot, we say so.",
      }}
      calculator={LEAKAGE_CALC}
      calcIntro="We will not invent a figure for you. Here is the sum, built on hours your own book can count."
      calcNotes={[
        "Two figures, on purpose. The first is what those hours would bill. The second is what is left after everyone is paid. Only the second one is money. Anybody showing you a single number is showing you the first and calling it the second.",
        "There is no missed-call figure in this sum. No honest Australian one exists, and every cost-per-missed-call number you have been shown was invented.",
      ]}
      boundaries={[
        {
          h: "We never work to a booking target.",
          b: "The objective is not to maximise appointments regardless of need. Where the only way to improve a number would be more treatment, we say so and stop.",
        },
        {
          h: "We do not promise a revenue figure.",
          b: "What we look for is on this page. What we find comes out of your own records, with the assumptions beside it.",
        },
        {
          h: "Your systems, your records.",
          b: "We work from the records your own practice software already produces. Read-only access where possible, agreed in writing. Nothing identifiable leaves your systems, and there is no platform to buy.",
        },
        {
          h: "We identify, your qualified people decide.",
          b: "Clinical, privacy, employment and regulatory questions go to the people qualified to resolve them. Nothing we do is clinical.",
        },
      ]}
      other={{
        heading: "Finding out what you are losing does not stop you losing it",
        body: "The audit ends with a report and a plan. If nothing changes at the front desk, the same week repeats. That is the second step.",
      }}
      faq={[
        {
          q: "Do you need access to patient records?",
          a: "No. We need enquiry, booking, cancellation and recall records, and the appointment book.",
        },
        {
          q: "Will you tell us to see more patients?",
          a: "No. The objective is not to maximise appointments regardless of need. Recalls stay at the interval your own practitioners set. If the only way to improve a number would be more treatment, we say so.",
        },
        {
          q: "What if there is nothing there to find?",
          a: "Then the report says so. A practice already converting most of its enquiries and filling most of its book does not need the second step. We would rather write that down than sell twelve months.",
        },
        {
          q: "Are we locked in?",
          a: "No, there is nothing to be locked into. One piece of work, scoped in writing before it starts, with no subscription attached.",
        },
      ]}
      ask={{
        body: "Thirty minutes on how booking enquiries reach your practice and what happens to them. You leave with an honest view of whether an audit would find anything, or would not.",
      }}
      commitment="The audit is one piece of work, scoped in writing, not a subscription."
    />
  );
}
