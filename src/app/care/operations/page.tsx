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
    "The after-hours line answered by a coordinator, coverage arranged from your own approved workers, written into your own roster, and every event logged and waiting in your morning handover. Back office only, nothing clinical.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "The Operations Desk | Novada",
    description:
      "The after-hours line, the cover, the coordination and the records that decide whether tonight becomes tomorrow's problem.",
    type: "website",
  },
};

export default function Page() {
  return (
    <ServicePage
      offer={OPERATIONS}
      calculator={OPERATIONS_CALC}
      sibling={WORKFORCE_CARE}
      device="overnight"
      /* The 3-second test. Three concrete outcomes in the order they
         happen, and every one of them is something an answering service
         does not do.

         ⚠️ An earlier draft ended "and nobody senior woken". It had to
         come out: escalation DOES wake somebody when the matrix says it
         should, so the line read as a promise the service deliberately
         does not make. */
      headline="The overnight call answered, the coverage arranged, the record written."
      standfirst="Our coordinators answer your after-hours line in your name, arrange
        cover from your own approved workers, write it into your own roster and
        log every event. It is waiting in your morning handover."
      moment={{
        label: "Four in the morning",
        body:
          "A worker calls off a 6am shift at four in the morning, and somebody senior is awake finding cover, in a service that is fully staffed, well run and doing nothing wrong.",
      }}
      mechanism={{
        heading: "The night has no roster.",
        body: [
          "The day is organised. There are coordinators, there is a roster, and there is a person whose actual job is to answer the phone. None of that is true at four in the morning, and the work does not stop arriving because the office is shut.",
          "So the on-call phone becomes a second job, handed to somebody who already has a first one. They answer it from bed, they find coverage from memory, and they write it up later if the day allows. Nobody is doing anything wrong. The arrangement simply has no capacity in it.",
          "The cost shows up in three places at once. The person who was woken is worth less the next day. The cover that was arranged was arranged from whoever answered rather than from whoever should have been asked. And the event itself is reconstructed after the fact, if it is recorded at all, which is the version an auditor eventually reads.",
        ],
      }}
      work={[
        {
          k: "The line",
          v: "Answered by a coordinator, in your name, not a voicemail and never an announcement that the caller has reached an outside service. It might be a support worker, one of your clients, a family member or a discharge planner.",
        },
        {
          k: "Identified",
          v: "We establish what it actually is: a shift to cover, a service change, an enquiry, or something that has to go to you. What happens next follows from that, not from who happened to answer.",
        },
        {
          k: "Cover",
          v: "Arranged from your own approved workers, against your own rules, and written straight into your own roster. The people affected are told. The call is finished rather than passed on.",
        },
        {
          k: "Escalation",
          v: "Anything needing authority or clinical judgement goes to your nominated contact under a matrix agreed in writing before we take a single call. Emergencies go to 000 first, every time. We do not triage and we do not assess urgency clinically.",
        },
        {
          k: "The record",
          v: "Every event logged with timestamps as it happens, in a form your own records can use, rather than reconstructed from memory the following afternoon.",
        },
        {
          k: "The handover",
          v: "What happened overnight, what was done about it, and what is still open, waiting for you when your day starts rather than discovered during it.",
        },
      ]}
      measured={[
        "Every after-hours contact received, by type",
        "What was resolved at the desk and what was escalated",
        "Shifts covered, and the ones that could not be",
        "Time from the call to the record being written",
      ]}
      boundaryTags={[
        "We never deliver the care",
        "We do not choose who attends",
        "The relationship stays yours",
        "000 first, then you",
        "Nothing clinical",
        "Alongside, never instead",
      ]}
      siblingWhy="A service that finally has its nights covered has moved the
        constraint somewhere else. The overnight runs, and the question becomes
        whether there are enough cleared, current, available people to cover the
        roster at all. That is the other desk, and the two problems regenerate
        each other."
    />
  );
}
