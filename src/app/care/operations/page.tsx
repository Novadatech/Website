import type { Metadata } from "next";
import ServicePage from "@/components/desk/ServicePage";
import { OPERATIONS_CALC } from "@/content/calculators";
import { OPERATIONS, WORKFORCE_CARE } from "@/content/offers";

/*
 * /care/operations
 *
 * A NEW PAGE, 21 September 2026. This is the care offer arriving on this
 * domain for the first time, under the two-door architecture.
 *
 * ⚠️ THE LINE THIS PAGE IS BUILT AROUND:
 *
 *     AN ANSWERING SERVICE TAKES A MESSAGE. THIS FINISHES THE CALL.
 *
 * Everything here should be traceable back to that. The competitor set
 * this reader has already tried is answering services and on-call
 * schedules, and both of them end the same way: somebody senior gets woken
 * up anyway. If a section does not serve that distinction, it probably
 * belongs on the Workforce page instead.
 *
 * ⚠️ AUSTRALIA. The Australian version of this argument runs on
 * penalty rates and a named scheme, and NONE of it transfers: there are
 * no US penalty rates and no federal 24/7 staffing rule. The American
 * case is different and it is written here: turnover, the revenue lost
 * to cases that cannot be staffed, and a visit record that has to exist
 * the same night because EVV and a state survey both eventually ask for
 * it. Support worker, schedule, client, 000. Never NDIS, award or roster.
 *
 * ⚠️ NOTHING CLINICAL, and the inducement rule still binds: no referral
 * arrangements, no incentives, no growth promises. See the header of
 * src/content/offers.ts.
 */

export const metadata: Metadata = {
  title: "The Operations Desk | Novada",
  description:
    "Your operations line answered by a coordinator through the day and through the night, the roster worked as call-offs and changes come in, intake and service changes handled, and every event logged as it happens. Back office only, nothing clinical.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "The Operations Desk | Novada",
    description:
      "The phone, the roster, the intake and the records that keep your operation running, across every hour you operate.",
    type: "website",
  },
};

export default function Page() {
  return (
    <ServicePage
      offer={OPERATIONS}
      calculator={OPERATIONS_CALC}
      sibling={WORKFORCE_CARE}
      device="event"
      /* The 3-second test. Three concrete outcomes in the order they
         happen, and every one of them is something an answering service
         does not do.

         ⚠️ An earlier draft ended "and nobody senior woken". It had to
         come out: escalation DOES wake somebody when the matrix says it
         should, so the line read as a promise the service deliberately
         does not make. */
      headline="Your operation answered, actioned and recorded. Around the clock, not after hours."
      standfirst="Our coordinators answer your operations line in your own name through
        the day and through the night, work your roster as call-offs and changes
        come in, handle intake and service changes inside your own systems, and
        log every event as it happens."
      moment={{
        label: "The hours you actually operate",
        body:
          "The operation does not keep office hours. A call-off at four in the morning and a service change at four in the afternoon both need somebody, and neither of them waits for the person who already has a job.",
      }}
      mechanism={{
        heading: "The operation runs longer than the office does.",
        body: [
          "A roster runs across every hour you deliver support. The office that administers it runs from nine to five, on the days it is fully staffed. The gap between those two is not a night shift, it is most of the week.",
          "So the work that arrives outside the office is handed to whoever is nearest. A coordinator takes the phone home. A manager fields a service change between meetings. Somebody senior is awake at four finding cover. Nobody is doing anything wrong, and the arrangement simply has no capacity in it.",
          "The record is the part that fails quietly. Since 1 July 2026 a registered provider must notify the Commission of certain events and changes by the earlier of becoming aware the change will occur or it occurring, rather than as soon as practicable afterwards. An obligation that attaches to the moment you become aware is not one a phone answered from bed can carry.",
        ],
      }}
      work={[
        {
          k: "The line",
          v: "Answered by a coordinator in your own name, through the day and through the night. Not a message bank, and never an announcement that the caller has reached an outside service. It might be a worker, a participant, a family member or a coordinator from another service.",
        },
        {
          k: "The roster",
          v: "Worked continuously rather than patched at the edges. Call-offs, replacements, shift changes and cover arranged from your own approved workers, against your own rules, and written straight into your own roster.",
        },
        {
          k: "Intake and changes",
          v: "New referrals, service agreements and service-change administration handled inside the systems you already run, so the work moves on the day it arrives rather than the day somebody has time.",
        },
        {
          k: "Escalation",
          v: "Anything needing authority or clinical judgement goes to your nominated contact under a matrix agreed in writing before we take a single call. Emergencies go to 000 first, every time. We do not triage and we do not assess urgency clinically.",
        },
        {
          k: "The record",
          v: "Every event logged with timestamps as it happens, in a form your own records can use. Your obligation to notify stays yours; what we remove is the excuse that nobody wrote it down.",
        },
        {
          k: "The handover",
          v: "What happened, what was done about it, and what is still open. Waiting for you when your day starts rather than discovered during it.",
        },
      ]}
      measured={[
        "Every contact received, by type and by hour of the day",
        "What was resolved at the desk and what was escalated",
        "Shifts covered, and the ones that could not be",
        "Time from the event to the record being written",
      ]}
      boundaryTags={[
        "We never deliver the care",
        "We do not choose who attends",
        "The relationship stays yours",
        "000 first, then you",
        "Nothing clinical",
        "Alongside, never instead",
      ]}
      siblingWhy="A service whose operation finally runs still has to find the
        people to roster. The phone is answered and the changes are actioned, and
        the constraint becomes whether there are enough cleared, current,
        available people to fill the roster at all. That is the other desk, and
        the two problems regenerate each other."
    />
  );
}
