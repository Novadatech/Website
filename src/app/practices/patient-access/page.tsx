import type { Metadata } from "next";
import ServicePage from "@/components/desk/ServicePage";
import { PATIENT_ACCESS_CALC } from "@/content/calculators";
import { PATIENT_ACCESS, WORKFORCE_PRACTICES } from "@/content/offers";

/*
 * /patient-access-desk
 *
 * This page has to answer "what exactly would you do" completely enough
 * that the review call is about fit rather than explanation.
 *
 * It shares a scaffold with /workforce-desk on purpose: the brief requires
 * the two offers to read as siblings, and two hand-built pages drift apart
 * the first time somebody edits one. Structure lives in
 * components/desk/ServicePage.tsx, content lives here.
 *
 * Every copy rule for this site is in the header of src/content/offers.ts.
 * The ones most easily broken on THIS page: no named practice management
 * product, no regulator, nothing clinical outside a negation, and never a
 * whole-role replacement claim.
 */

export const metadata: Metadata = {
  title: "The Patient Access Desk | Novada",
  description:
    "Calls, enquiries and appointments answered in your practice name, inside your own software, during your operating hours. Recall worked, cancellations chased, every enquiry measured and reported monthly.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "The Patient Access Desk | Novada",
    description:
      "The calls, the appointments and the follow-up that decide how much of your available work actually gets done.",
    type: "website",
  },
};

export default function Page() {
  return (
    <ServicePage
      offer={PATIENT_ACCESS}
      calculator={PATIENT_ACCESS_CALC}
      sibling={WORKFORCE_PRACTICES}
      /* The 3-second test. States the offer plainly, in the reader's own
         vocabulary, with no cleverness to decode. */
      /* ⚠️ DO NOT RESTORE "Every call answered. Every booking made." It
         shipped as this page's H1 and had to come out. It is a response
         time commitment and a conversion implication, and offers.ts bans
         both in writing. It also survives the name-swap test untouched,
         which is to say it is the single most common sentence in the
         outsourced-reception category the reader has already filtered out
         ten times this year. This headline carries the differentiator a
         competitor cannot copy instead: inside your own software. */
      headline="Your phone answered and your book worked, inside your own software."
      standfirst="Our team answers in your practice name during your operating
        hours, books directly in your system, works recall and chases
        cancellations the same day. Your front desk keeps the counter."
      moment={{
        label: "Eleven on a Tuesday",
        body:
          "The phone rings out at eleven on a Tuesday, in a practice that is open, fully staffed and running normally, because whoever is at the desk is mid-checkout with a patient standing in front of them.",
      }}
      mechanism={{
        heading: "A front desk is one person doing one thing at a time.",
        body: [
          "That is not a criticism, it is a description. When the person at the desk is taking a payment, booking the patient in front of them or answering a question from a practitioner, they are not answering the phone. Nobody is doing anything wrong.",
          "The same constraint governs everything that is important but not urgent. The recall list, the reactivation list, the follow-up on the person who did not attend, the call to fill this afternoon's cancellation. None of them will ever be more urgent than the patient at the counter, so they are deferred every day, by a competent person making the correct decision each time.",
          "Over a year that is a substantial amount of work that was available and never got done. It is invisible, because nothing was done wrong and nothing was recorded as lost.",
        ],
      }}
      work={[
        {
          k: "The phone",
          v: "Calls, web enquiries and messages answered in your practice name, on your own number, during your operating hours. Not a voicemail, not a queue, and never an announcement that the caller has reached an outside service.",
        },
        {
          k: "The book",
          v: "Appointments, rescheduling and new patient intake made directly inside your own practice software, in the right practitioner's column, under your own booking rules.",
        },
        {
          k: "Recall",
          v: "Recall and reactivation worked by phone, to the interval the practitioner set. Patients past their date, and the ones who lapsed months ago and have not been contacted since.",
        },
        {
          k: "Cancellations",
          v: "Short-notice cancellations chased while the appointment still has value, and same-day follow-up on failures to attend while rebooking is still likely.",
        },
        {
          k: "Escalation",
          v: "Anything clinical stops with us and goes to your team, under a protocol agreed in writing before we take a single call. We do not triage, we do not assess urgency and we do not give advice.",
        },
        {
          k: "The record",
          v: "Every enquiry logged as it happens: what it was, how fast it was answered, whether it booked, and where it did not, the reason why.",
        },
      ]}
      measured={[
        "Every enquiry received, by channel, with nothing reconstructed afterwards.",
        "How quickly each one was answered.",
        "Whether it converted to a booking.",
        "Where it did not convert, the recorded reason.",
      ]}
      boundaryTags={[
        "Nothing clinical",
        "Nothing at the counter",
        "Alongside, never instead",
        "Never the clinical record",
        "Not after hours",
        "No patient pressure",
      ]}
      siblingWhy="A practice that finally staffs its desk properly has moved the
        bottleneck somewhere else. The desk now runs, and the constraint becomes
        how quickly you can hire, induct and keep the people who do the work.
        That is the other desk, and the two problems regenerate each other."
    />
  );
}
