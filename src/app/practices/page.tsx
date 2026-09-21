import type { Metadata } from "next";
import HubPage from "@/components/desk/HubPage";
import { PRACTICES, OPERATING_PROOF } from "@/content/offers";

/*
 * /practices — the practice audience hub.
 *
 * ⚠️ THIS IS A PAID LANDING PAGE. Practice ad sets point here, or at one
 * of the two desks beneath it. Never at the router homepage.
 *
 * Its sibling is /care. Both render through HubPage so neither can
 * quietly acquire more argument than the other.
 */

export const metadata: Metadata = {
  title: "For practices | Novada",
  description:
    "Two desks for owner-led medical, dental and allied health practices. The Patient Access Desk answers the calls and works the book. The Workforce Desk hires, inducts and pays the people who do the work.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "For practices | Novada",
    description:
      "Your phone answered, your book worked, your people paid. Run by our own team, inside your own practice software.",
    type: "website",
  },
};

export default function Page() {
  return (
    <HubPage
      audience={PRACTICES}
      device="single-threaded"
      mechanism={{
        heading: "Nobody is doing anything wrong.",
        body: [
          "A front desk is single-threaded. One person, one thing at a time. The patient standing in front of them always wins, and that is the correct decision, made correctly, every time.",
          "So the phone rings out while the practice is open. The recall list never gets run, because it is the only job at the desk with nobody standing in front of it. And hiring, inducting and paying people becomes a second job handed to somebody who already has one.",
          "Both problems are structural. Neither is a staffing failure, and neither gets solved by asking the same people to try harder.",
        ],
      }}
      /* ⚠️ The practice side has no practice clients yet, so this is the
         only evidence it can honestly offer. It names the care line on
         purpose: it is proof of an operating standard, not a claim about
         what a practice buys. Do not turn it into an after-hours promise,
         which the "Not after hours" boundary refuses two bands earlier. */
      proof={OPERATING_PROOF}
    />
  );
}
