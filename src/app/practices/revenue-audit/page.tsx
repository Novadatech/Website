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
 *
 * 🔴 TWO COMPONENTS SINCE 19 OCTOBER 2026, WEIGHTED EQUALLY.
 * Before the appointment: enquiries, bookings, cancellations, recalls.
 * After it: billing, claims and revenue assurance. The founder's brief
 * is explicit that billing must never read as an administrative add-on,
 * so both render through `what.groups` with identical treatment.
 *
 * 🔴 AND THE SECOND COMPONENT IS WHERE "GAP" WOULD HAVE BITTEN. On a
 * page discussing Medicare and health fund claims, "reconciliation gap"
 * reads as the patient's out-of-pocket. The brief uses that word; this
 * page says exception, discrepancy or unreconciled payment instead.
 *
 * 🔴 WE LOOK FOR OVERBILLING TOO, and say so in a boundary and an
 * FAQ. Revenue assurance is accuracy, not maximising claims. Nothing
 * here may suggest we decide item numbers or claim eligibility: those
 * go back to the practice's own qualified people, every time.
 */

export const metadata: Metadata = {
  title: "Find the revenue your practice is losing | Novada",
  description:
    "Revenue leaks before the appointment and after it. We read your own enquiry, booking, cancellation and recall records, and your billing, claims and payment records, and show you where it is going. One piece of work, findings inside two weeks.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "Find the revenue your practice is losing | Novada",
    description:
      "Missed bookings are half of it. The rest is work you did and were never paid for. For Australian dental, allied health and medical practices.",
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
      headline="Your practice can lose revenue before the appointment, and after it."
      standfirst="Missed enquiries and unfilled appointments are half of it. The rest goes after the care is delivered: work never invoiced, fees applied wrongly, claims rejected and never resent, invoices nobody chased. We read both, from your own records, and write down what we find. One piece of work, inside two weeks."
      moment={{
        label: "The number nobody at the practice can tell you",
        body: "Ask how many people enquired last month and how many ended up with an appointment. Almost no practice can answer. Then ask how much of last quarter\'s completed work was invoiced, claimed and actually paid, to the dollar. Almost none can answer that either.",
      }}
      why={{
        heading: "Nothing is recorded as lost",
        paras: [
          "A call that rings out leaves no trace. A booking request answered two days late looks no different from one answered in ten minutes. A patient never offered a suitable time does not appear anywhere.",
          "The same is true on the other side of the appointment. A service that was delivered and never invoiced looks exactly like one that was never delivered. A claim that was rejected and never resent looks, in most reports, exactly like one that was paid.",
          "Nothing went wrong, nobody made a mistake, and no number moved. Over a year it adds up to work that was available and never got done, and work that was done and never paid for.",
        ],
        quote:
          "A fully booked week is not the same as a paid one.",
      }}
      what={{
        label: "What we look at",
        /* Half the fixed spine pair, verbatim. The other half is the
           heading of the same section on the booking page. */
        heading: "Find out what you are losing: what we look at",
        intro:
          "Eight to twelve weeks of your own records, agreed before we start. Two halves, and we weight them the same, because a practice can be fully booked and still not be paid for all of it.",
        groups: [
          {
            eyebrow: "Component one",
            heading: "Before the appointment",
            intro:
              "Are you capturing the booking opportunities the practice already receives? We read call reports, enquiries, the appointment book, cancellations, waiting lists and your recall workflow.",
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
          },
          {
            eyebrow: "Component two",
            heading: "After the appointment",
            intro:
              "Are you billing accurately, and collecting what the practice is entitled to for work already done? We read your billing, claims, payment and reconciliation records for the same period.",
            cards: [
              {
                h: "Work that was never invoiced",
                b: "Completed services with no charge raised against them. We match what the record says was delivered to what the billing says was charged, and list what does not line up.",
              },
              {
                h: "Fees applied incorrectly",
                b: "Under and over, both. Item numbers applied inconsistently between practitioners, fees that never moved when your schedule did, and services recorded under the wrong code.",
              },
              {
                h: "Claims rejected and never resent",
                b: "Medicare, DVA and health fund claims that bounced, and what happened next. In most reports a rejection nobody worked looks identical to one that was paid.",
              },
              {
                h: "Invoices nobody chased",
                b: "What is outstanding, how long it has been outstanding, and whether anything routine exists to follow it up or whether it depends on somebody remembering.",
              },
              {
                h: "Where the three records disagree",
                b: "What was delivered, what was invoiced, and what was actually banked. We reconcile the three and list every exception, rather than assuming the software already did.",
              },
              {
                h: "Whether a mistake would be caught at all",
                b: "Most leakage is a process with no check in it. We look at whether an error would surface on its own, who would see it, and how long that would take.",
              },
            ],
          },
        ],
      }}
      how={{
        heading: "Five steps, and the fifth is optional",
        steps: [
          {
            h: "Assess",
            b: "We agree the period, usually eight to twelve weeks, and which records we need on both sides: enquiry and appointment data, and billing, claims and payment data. Read-only where your systems allow it. From the day that access works, the report is with you inside two weeks.",
          },
          {
            h: "Identify",
            b: "We separate what is measured from what is assumed. A high missed-call rate is a signal, not a finding, until we know those calls were booking enquiries. An unpaid invoice is a signal, not a finding, until we know it was owed.",
          },
          {
            h: "Put a number on it",
            b: "Where your records support an estimate we make one, with its assumptions written beside it. Appointment value is shown gross and then net of the cost of delivering it. Billing exceptions are listed as identified amounts, never as money you are going to get back.",
          },
          {
            h: "Recommend",
            b: "A written report: where revenue is being lost on both sides, the opportunities in priority order with their assumptions, the billing exceptions and risk observations, and a 30, 60 and 90 day plan.",
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
        "This sum covers the first half of the audit only. What is lost after the appointment, through work never invoiced or claims never resent, is counted from your own billing records during the audit. We will not put a slider on it, because there is no honest industry figure to seed one with.",
      ]}
      boundaries={[
        {
          h: "We never work to a booking target.",
          b: "The objective is not to maximise appointments regardless of need. Where the only way to improve a number would be more treatment, we say so and stop.",
        },
        {
          h: "We do not promise a revenue figure.",
          b: "What we look for is on this page. What we find comes out of your own records, with the assumptions beside it. An identified opportunity is not a recovered amount, and nothing on either side is guaranteed.",
        },
        {
          h: "We look for overbilling as well.",
          b: "Revenue assurance is accuracy, not maximising claims. If the records show something was billed that should not have been, that goes in the report with everything else. We never recommend billing for work that was not delivered.",
        },
        {
          h: "Your systems, your records.",
          b: "We work from the records your own practice software already produces. Read-only access where possible, agreed in writing. Nothing identifiable leaves your systems, and there is no platform to buy.",
        },
        {
          h: "We identify, your qualified people decide.",
          b: "We do not make item number, coding or claim eligibility decisions. Anything turning on clinical judgement goes to your practitioners or your billing adviser to confirm before it is acted on, and any correction is yours to authorise. Clinical, privacy, employment and regulatory questions go to the people qualified to resolve them.",
        },
      ]}
      other={{
        heading: "Finding out what you are losing does not stop you losing it",
        body: "The audit ends with a report and a plan. If nothing changes at the front desk, or in how the billing gets worked, the same week repeats. That is the second step.",
      }}
      faq={[
        {
          q: "What do you actually need access to?",
          a: "Enquiry, booking, cancellation and recall records, the appointment book, and your billing, claims and payment records. Where we reconcile the three, we need to confirm that a service was delivered, not to read or interpret the clinical note. Read-only wherever your systems allow it, agreed in writing first.",
        },
        {
          q: "Will you tell us to see more patients?",
          a: "No. The objective is not to maximise appointments regardless of need. Recalls stay at the interval your own practitioners set. If the only way to improve a number would be more treatment, we say so.",
        },
        {
          q: "Will you tell us to bill more?",
          a: "Only where your own records show work was delivered and not charged for. We look for overbilling with the same attention, because revenue assurance is accuracy, not maximising claims, and we never recommend billing for anything that was not delivered. We do not decide item numbers or whether a claim is eligible. Your qualified people confirm anything that turns on judgement, and you authorise every correction.",
        },
        {
          q: "Do you fix the billing during the audit?",
          a: "No. The audit looks, counts and reports. Running the billing afterwards is the other page, and it is quoted separately.",
        },
        {
          q: "What if there is nothing there to find?",
          a: "Then the report says so. A practice already converting most of its enquiries, filling most of its book and collecting what it bills does not need the second step. We would rather write that down than sell twelve months.",
        },
        {
          q: "Are we locked in?",
          a: "No, there is nothing to be locked into. One piece of work, scoped in writing before it starts, with no subscription attached.",
        },
      ]}
      ask={{
        body: "Thirty minutes on how enquiries reach your practice and what happens to them, and on how the work you deliver gets billed, claimed and collected. Find out whether missed bookings, billing errors or unresolved claims are affecting your revenue. You leave with an honest view of whether an audit would find anything, or would not.",
      }}
      commitment="One piece of work, scoped in writing, not a subscription. Findings inside two weeks."
    />
  );
}
