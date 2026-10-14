import type { Metadata } from "next";

import PillarPage from "@/components/offer/PillarPage";
import { RECALL_CALC } from "@/content/calculators";
import { BOOKING, LEAKAGE } from "@/content/offers";

/*
 * /practices/patient-booking — pillar two of the practices offer.
 *
 * Replaces /practices/patient-access, which sold the retired Patient
 * Access Desk and now 308s here.
 *
 * ⚠️ MONTH TO MONTH, where the audit is a one-off.
 *
 * 🔴 "RETENTION" IS DEFINED ON THE PAGE, EARLY AND IN ONE SENTENCE. The
 * word is in the service name four lines above it, and on its own it can
 * be read as persuading patients into treatment, which is the line this
 * offer must never cross. If the name is ever shortened in a deck or an
 * ad, that definition travels with it.
 *
 * 🔴 RECALLS ARE ADMINISTERED, NEVER ORIGINATED. They are the practice's
 * own list, set by its practitioners at clinically chosen intervals. We
 * add nobody. No offer or incentive ever goes into a recall message, and
 * we never ask a patient for a review. Those three are one promise and
 * they sit in one boundary card.
 *
 * 🔴 THE WORD "GAP" IS BANNED AS A SCHEDULING WORD. See the sibling page.
 */

export const metadata: Metadata = {
  title: "Patient booking and recall continuity | Novada",
  description:
    "Your phone answered, your book worked, your recalls run. Booking enquiries, short-notice cancellations and clinically set recalls, worked by phone inside your own practice software. Month to month.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "Patient booking and recall continuity | Novada",
    description:
      "Software makes the list. We work it. For Australian dental, allied health and medical practices.",
    type: "website",
  },
};

export default function Page() {
  return (
    <PillarPage
      offer={BOOKING}
      sibling={LEAKAGE}
      audienceLine="For dental, allied health and medical practices in Australia"
      desk="practices-patient-booking"
      source="practices-patient-booking"
      /* The old practices H1 construction, carried over, with its third
         clause replaced. "Your people paid" described recruitment and
         payroll, which are absent from the new brief. "Recall" is the
         correct Australian word and getting it right in the H1 is the
         cheapest signal that this was written by somebody who has been
         in a practice. */
      headline="Your phone answered, your book worked, your recalls run."
      standfirst="Our own team answers your booking enquiries, follows up the ones that did not book, and offers short-notice cancellations to patients waiting. We work the recall list your practitioners set, inside your practice software, during your own opening hours."
      moment={{
        label: "The list that never gets worked",
        body: "Somewhere in your software is a list of patients your practitioners said should come back. Texts went out. Some of them booked. The rest are still on the list, and ringing them is nobody's job this week, or next week either.",
      }}
      why={{
        heading: "Software makes the list. We work it.",
        paras: [
          "Every booking and recall product in this market can build a list and send an SMS. None of them rings the patient who ignored three texts. That call is where the rest of the appointments are, and it needs a person.",
          "It is also the first thing dropped every day. It is the only job at the front desk with nobody standing in front of it. Nobody is doing anything wrong. The patient at the counter wins, correctly, every time.",
        ],
        /* Not optional, and placed before the reader has had time to form
           the suspicion. "Retention" is in the eyebrow four lines up. */
        quote:
          "Retention here means a patient who is due for a review actually hears from you. It does not mean persuading anybody into treatment.",
      }}
      what={{
        label: "What we run",
        heading: "Stop losing it every week: what we run",
        intro:
          "Inside your own practice software, under your own booking rules, by named people on your account rather than a call centre.",
        cards: [
          {
            h: "Booking enquiries answered",
            b: "Calls, online requests and messages handled in your practice name, through the channels you approve. Callbacks coordinated. Every outcome written down.",
          },
          {
            h: "Bookings completed",
            b: "The options explained, a time found, details confirmed, so an enquiry does not stall on administration. We make no clinical suitability decisions and we never push.",
          },
          {
            h: "Enquiries that did not book, followed up",
            b: "A second attempt, then a third, on a schedule you approve, until there is an answer either way.",
          },
          {
            h: "Short-notice cancellations offered on",
            b: "When somebody cancels, the time is offered to patients on your own waiting list who asked for something earlier. Your system updated, the patient told.",
          },
          {
            /* The whole compliance position in four words, in the heading
               rather than the body, so a reader who scans headings only
               still receives it. */
            h: "Recalls administered, never originated",
            b: "We work the recall list your practitioners set, at the interval they chose, and record the result. We add nobody to the list.",
          },
          {
            h: "A monthly report on what happened",
            b: "Enquiries received, how fast they were answered, how many booked, cancellations recovered, recalls completed, and where it did not work.",
          },
        ],
      }}
      how={{
        heading: "Four steps, and the first two are yours",
        steps: [
          {
            h: "The protocols",
            b: "We write down with you what we may say, what we may book, and what stops with us and goes to your team. Nothing is improvised on a call.",
          },
          {
            h: "The access",
            b: "Named logins under your own access control, limited to the booking work, agreed in writing before anything is opened.",
          },
          {
            h: "Live",
            b: "A baseline is taken before anything changes, so every figure afterwards is measured against where you were.",
          },
          {
            h: "The monthly report",
            b: "What came in, what booked, what did not and why. Including the parts that did not work.",
          },
        ],
        closing: "Month to month, with no commitment past the current month.",
      }}
      calculator={RECALL_CALC}
      calcIntro="We will not invent a figure for you. Here is the sum, on the one number your software can give you in a minute."
      calcNotes={[
        "That is the backlog, once. What you pay monthly for is that the list stops building back up.",
        "These are your recalls, set by your practitioners at the interval they chose. We add nobody to this list.",
      ]}
      boundaries={[
        {
          h: "We never work to a booking target.",
          b: "Recall contact follows the interval your practitioners set. No patient is contacted to reach a number. No offer or incentive goes into a recall message, and we never ask a patient for a review.",
        },
        {
          h: "Nothing clinical.",
          b: "No triage, no judgement of urgency, no advice of any kind. Anything that could be urgent goes straight to your own registered people, under a protocol agreed in writing.",
        },
        {
          h: "Your systems, your records.",
          b: "Named logins under your own access control, limited to the booking work and revoked the day somebody leaves the role. Never a shared account. We do not touch the clinical record.",
        },
        {
          h: "Nothing at the counter.",
          b: "The greeting, the payments and the care of the person in the room stay with your team permanently. A remote team cannot do that work and we will not pretend otherwise.",
        },
      ]}
      other={{
        heading: "Stopping it does not tell you what you were losing",
        body: "You can start here, and some practices should. What it does not give you is the size of the problem. The audit does that once, which is why most practices do it first.",
      }}
      faq={[
        {
          q: "Is this an answering service?",
          a: "No. An answering service takes a message. We book inside your own practice software, follow up enquiries that did not book, and work your recall list by phone.",
        },
        {
          q: "Do you triage?",
          a: "Never. We do not triage, judge urgency or give advice of any kind. Anything clinical stops with us and goes to your team under an agreed protocol. Competitors claim triage. We do not.",
        },
        {
          q: "Do you replace our front desk?",
          a: "No, and we will not describe it that way. Your team keeps the counter, the greeting, the payments and the person in the room. What we take is the work that never reaches the top of their list.",
        },
        {
          q: "Whose name do patients hear?",
          a: "Yours. Your practice name, through the channels you approve, with nothing said that is not in the protocols you signed off.",
        },
        {
          q: "Are we locked in?",
          a: "No. Month to month, with no commitment past the current month. Commercial terms are set out in the proposal.",
        },
      ]}
      ask={{
        body: "Thirty minutes on how booking enquiries reach your practice and what happens to them. You leave with an honest view of whether this fits, or does not.",
      }}
      commitment="Month to month, with no commitment past the current month."
    />
  );
}
