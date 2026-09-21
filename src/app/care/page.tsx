import type { Metadata } from "next";
import HubPage from "@/components/desk/HubPage";
import { CARE } from "@/content/offers";

/*
 * /care — the care provider audience hub.
 *
 * ⚠️ THIS IS A PAID LANDING PAGE. Care ad sets point here, or at one of
 * the two desks beneath it. Never at the router homepage.
 *
 * ⚠️ MARKET-NEUTRAL, and this page is the one most at risk of losing
 * that. The Australian version of this argument runs on penalty rates,
 * scheme-specific worker screening and a named regulator, and none of it
 * transfers to the other market. What is universal is the mechanics of a
 * call-off at four in the morning, which is what this page argues.
 *
 * ⚠️ NO INDUCEMENT LANGUAGE. No referral arrangements, incentives, gifts
 * or growth promises anywhere on the care side, in either market.
 */

export const metadata: Metadata = {
  title: "For care providers | Novada",
  description:
    "Two desks for disability, home care and aged care providers. The Operations Desk answers the after-hours line, arranges cover and writes the record. The Workforce Desk hires, clears and pays the people who do the work.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "For care providers | Novada",
    description:
      "Your overnight covered, your records audit-ready, your people paid. Back office only, nothing clinical.",
    type: "website",
  },
};

export default function Page() {
  return (
    <HubPage
      audience={CARE}
      device="overnight"
      mechanism={{
        heading: "The night has no roster.",
        body: [
          "The day is organised. There are coordinators, there is a roster, and there is somebody whose actual job is to answer the phone. None of that is true at four in the morning, and the work does not stop arriving because the office is shut.",
          "So the on-call phone becomes a second job, handed to somebody who already has a first one. They answer it from bed, they find coverage from memory, and they write it up later if the day allows. Nobody is doing anything wrong. The arrangement simply has no capacity in it.",
          "The same thing happens to the workforce queues. Screening, induction records and payroll are continuous work that is almost never anybody's actual role, so an expiry is discovered on the day it removes somebody from a shift.",
          "Turnover is what turns all of this from an irritation into a constraint. Every departure restarts recruitment, screening and induction, and while those queues are full the work you are offered is work you cannot roster.",
        ],
      }}
      /* ⚠️ NO `figures` ON THIS DOMAIN YET. The .com care hub prints two
         sourced American turnover benchmarks. They describe the American
         market and may not be re-pointed at this one. Source Australian
         figures, add them to EVIDENCE in offers.ts, and pass them here. */
      /* The care side is the half of this business that actually operates
         today, so it can say so plainly and in the present tense. */
      proof="This is the desk Novada already runs. Calls answered overnight, every night of the year, inside providers' own systems and to their own escalation protocols, with the night's events waiting in the morning handover."
    />
  );
}
