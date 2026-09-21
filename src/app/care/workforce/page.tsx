import type { Metadata } from "next";
import ServicePage from "@/components/desk/ServicePage";
import { WORKFORCE_CARE_CALC } from "@/content/calculators";
import { WORKFORCE_CARE, OPERATIONS } from "@/content/offers";

/*
 * /care/workforce
 *
 * ⚠️ THIS IS THE SAME PRODUCT AS /practices/workforce, written for a
 * different reader. It is not a second product and it must never
 * acquire scope the practice page does not have, or lose scope the
 * practice page keeps. If the offer changes, both pages change.
 *
 * That is the whole reason the Workforce Desk sits under both doors:
 * recruit, onboard, induct, keep current and pay is the same job in a
 * dental practice and a home care provider. The site said so from the
 * start, in the line "for healthcare now, other industries later".
 *
 * ⚠️ THE LINE THIS PAGE IS BUILT AROUND, same as its sibling:
 *
 *     WORKER COMPLIANCE IS A CALENDAR, NOT A FILING CABINET.
 *
 * In a care setting it bites harder than in a practice, because an
 * expired clearance does not just create a paperwork problem, it removes
 * a person from the schedule on the day you needed them.
 *
 * ⚠️ THE EMPLOYMENT BOUNDARY IS LOAD-BEARING. The provider employs its
 * own people and chooses every hire. We are not an employer of record,
 * we do not supply labour, and we never place our own people into a
 * provider's roles. Do not paraphrase that into something friendlier,
 * and do not describe any part of it as a staffing agency or a promised fill.
 *
 * ⚠️ AUSTRALIA. Background checks, state registration currency and OIG
 * exclusion screening by name. Support worker, never "support worker".
 * Schedule, never "roster". No NDIS, no award, no ABN: those belong to
 * the Australian domain and must never appear here.
 */

export const metadata: Metadata = {
  title: "The Workforce Desk | Novada",
  description:
    "Recruitment, onboarding, induction, background check and registration currency and payroll for care providers, run by our team on your own cycle. Expiries tracked ninety days ahead, and you stay the employer throughout.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "The Workforce Desk | Novada",
    description:
      "The hiring, the induction, the records and the payroll that decide whether tonight's roster can actually be filled.",
    type: "website",
  },
};

export default function Page() {
  return (
    <ServicePage
      offer={WORKFORCE_CARE}
      calculator={WORKFORCE_CARE_CALC}
      sibling={OPERATIONS}
      device="compliance"
      /* Same construction as the practice page's headline: give the
         participles a subject, and put the largest objection, which is
         whether this is a staffing agency, into the headline where it belongs. */
      headline="Your people hired, cleared and paid. You stay the employer."
      standfirst="Recruitment, onboarding, induction records, background check and registration
        expiries and payroll, run by our team on your own cycle. You choose every
        hire. We own the queues in between, which is where the weeks go."
      moment={{
        label: "The calendar nobody watches",
        body:
          "Worker compliance is a calendar, not a filing cabinet. Something expires on a date nobody is watching, and you find out at the moment you needed that person on a shift.",
      }}
      mechanism={{
        heading: "It is a second job, given to somebody who already has one.",
        body: [
          "Recruitment, onboarding, induction, training records, background check currency and payroll are not occasional tasks. In a service with any turnover at all they are continuous. They are almost never anybody's actual role.",
          "So they are distributed. A manager signs off the hire and then chases the paperwork between rosters. Somebody screens applicants on a Thursday, if Thursday is quiet. A bookkeeper runs payroll from an arrangement only they fully understand. Nobody watches the expiry dates, because watching them is not on anybody's list.",
          "The consequences are predictable, and in a rostered service they are immediate. Good applicants accept the offer from whoever replied first. New support workers take weeks longer than necessary to become available, because each step of their induction sits in a different queue. And an expiry is discovered on the day it removes somebody from a shift, rather than ninety days ahead when it was still only admin.",
        ],
      }}
      work={[
        {
          k: "Recruitment",
          v: "Role definition, advertising, screening and the first contact with applicants. Speed is the whole game here: an applicant has usually approached several employers in the same week, and whoever speaks to them first usually wins.",
        },
        {
          k: "Onboarding",
          v: "Owned end to end rather than spread across several inboxes, so somebody who accepts on the third is available to be rostered in days rather than weeks.",
        },
        {
          k: "Induction",
          v: "Role induction, system access, policy acknowledgements and role-specific training, evidenced with dates and completion records as they happen.",
        },
        {
          k: "Screening",
          v: "Background check, registration and exclusion screening currency maintained as events occur rather than assembled under pressure, with expiries tracked ninety days ahead so a renewal is actioned while it is still only admin.",
        },
        {
          k: "Payroll",
          v: "Processed on your own cycle, against the hours and entitlements that apply to your people, with your organisation remaining the employer throughout.",
        },
        {
          k: "The boundary",
          v: "We process payroll, we do not advise on it. Tax treatment, worker classification, employment disputes and regulatory interpretation go to your accountant or lawyer, and we say so rather than be drawn.",
        },
      ]}
      measured={[
        "Time from offer accepted to available for roster",
        "Background check and registration currency across your workforce, with what falls due next",
        "Induction and training completions, with dates",
        "Payroll accuracy, and anything that had to be corrected",
      ]}
      boundaryTags={[
        "You stay the employer",
        "Alongside, never instead",
        "Not your obligation",
        "We never deliver the care",
        "Nothing clinical",
      ]}
      siblingWhy="A service that hires and clears people efficiently still has a
        phone that rings at four in the morning. The roster is full and the call
        still has to be answered, actioned and recorded by somebody. That is the
        other desk, and the two problems regenerate each other."
    />
  );
}
