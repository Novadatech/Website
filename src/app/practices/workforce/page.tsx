import type { Metadata } from "next";
import ServicePage from "@/components/desk/ServicePage";
import { WORKFORCE_PRACTICES_CALC } from "@/content/calculators";
import { WORKFORCE_PRACTICES, PATIENT_ACCESS } from "@/content/offers";

/*
 * /workforce-desk
 *
 * A NEW PAGE. Until 16 September 2026 this half of the product had no
 * presence on the site at all: zero mentions of recruitment, onboarding,
 * compliance or payroll anywhere in the build.
 *
 * ⚠️ THE LINE THIS PAGE IS BUILT AROUND, and the brief names it as the
 * strongest single line available here:
 *
 *     WORKER COMPLIANCE IS A CALENDAR, NOT A FILING CABINET.
 *
 * Something expires on a date nobody is watching, and the practice finds
 * out at the moment they need that person to work. Everything on this page
 * should be traceable back to that idea. If a section does not serve it,
 * it probably belongs on the other page.
 *
 * ⚠️ THE EMPLOYMENT BOUNDARY IS LOAD-BEARING. The practice employs its own
 * people and chooses every hire. We are not an employer of record, we do
 * not supply labour, and we never place our own people into a practice's
 * roles. Do not paraphrase that into something friendlier.
 *
 * Note the audience line: this service is sold to healthcare now and to
 * other industries later, because the workforce lifecycle is not
 * sector-specific. Nothing on this page should make it sound like a
 * healthcare-only product, but nothing should promise the other industries
 * either, because they are not being sold to yet.
 */

export const metadata: Metadata = {
  title: "The Workforce Desk | Novada",
  description:
    "Recruitment, onboarding, onboarding and training, worker compliance and payroll, run by our team on your own cycle. Expiries tracked ninety days ahead, and your practice stays the employer throughout.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "The Workforce Desk | Novada",
    description:
      "The hiring, the onboarding, the records and the payroll that decide whether you have the people to do the work.",
    type: "website",
  },
};

export default function Page() {
  return (
    <ServicePage
      offer={WORKFORCE_PRACTICES}
      calculator={WORKFORCE_PRACTICES_CALC}
      sibling={PATIENT_ACCESS}
      device="compliance"
      /* ⚠️ The previous headline, "Hired, onboarded, compliant and paid.",
         was four past participles with no subject, so the reader's first
         parse was "hired by whom". Worse, "compliant" has no referent on a
         site that may not name a regulator, so the word was doing nothing.
         This one gives the participles a subject and puts the largest
         objection, which is whether this is a staffing agency, into the headline
         where it belongs. */
      headline="Your people hired, onboarded and paid. You stay the employer."
      standfirst="Recruitment, onboarding, onboarding records, credential
        expiries and payroll, run by our team on your own cycle. You choose
        every hire. We own the queues in between, which is where the weeks go."
      moment={{
        label: "The calendar nobody watches",
        body:
          "Worker compliance is a calendar, not a filing cabinet. Something expires on a date nobody is watching, and the practice finds out at the moment they need that person to work.",
      }}
      mechanism={{
        heading: "It is a second job, given to somebody who already has one.",
        body: [
          "Recruitment, onboarding, onboarding, training records, credential currency and payroll are not occasional tasks. In a practice with any turnover at all they are continuous. They are almost never anybody's actual role.",
          "So they are distributed. The owner signs off the hire and then chases the paperwork between patients. The senior front desk staffer screens applicants on a Thursday, if Thursday is quiet. A bookkeeper runs payroll from an arrangement only they fully understand. Nobody watches the expiry dates, because watching them is not on anybody's list.",
          "The consequences are predictable. Good applicants usually accept the offer from whoever replied first. New staff take weeks longer than necessary to become useful, because each step of their onboarding sits in a different queue. And an expiry is discovered at the point it matters rather than ninety days ahead.",
        ],
      }}
      work={[
        {
          k: "Recruitment",
          v: "Role definition, advertising, screening and the first contact with applicants. Speed is the whole game here: an applicant has usually approached several employers in the same week, and whoever speaks to them first usually wins.",
        },
        {
          k: "Onboarding",
          v: "Owned end to end rather than spread across several inboxes, so somebody who accepts on the third is working productively in days rather than weeks.",
        },
        {
          k: "Onboarding",
          v: "Site and role onboarding, software access, policy acknowledgements and role-specific training, evidenced with dates and completion records as they happen.",
        },
        {
          k: "Compliance",
          v: "Registration, credential and training currency maintained as events occur rather than assembled under pressure, with expiries tracked ninety days ahead so a renewal is actioned before it becomes a scheduling problem.",
        },
        {
          k: "Payroll",
          v: "Processed on your own cycle, against the hours and entitlements that apply to your staff, with your practice remaining the employer throughout.",
        },
        {
          k: "The boundary",
          v: "We process payroll, we do not advise on it. Tax treatment, contractor classification, employment disputes and regulatory interpretation go to your accountant or lawyer, and we say so rather than be drawn.",
        },
      ]}
      measured={[
        "Time from offer accepted to productive start.",
        "Registration and credential currency across your team, with what falls due next.",
        "Onboarding and training completions, with dates.",
        "Payroll accuracy, and anything that had to be corrected.",
      ]}
      boundaryTags={[
        "You stay the employer",
        "Alongside, never instead",
        "Not your obligation",
        "Nothing clinical",
      ]}
      siblingWhy="A practice that hires efficiently still has a desk where one
        person does one thing at a time. The people are in place and the phone
        is still ringing out at eleven on a Tuesday. That is the other desk, and
        the two problems regenerate each other."
    />
  );
}
