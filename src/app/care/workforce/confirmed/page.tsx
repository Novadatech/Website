"use client";

/*
 * /care/workforce/confirmed - THE WORKFORCE DESK, CARE.
 *
 * ⚠️ ONE DESK, BOTH MARKETS. This page is the redirect target of a single
 * calendar, and that calendar is embedded on BOTH domains, so American
 * and Australian bookers land here together. THE COPY IS MARKET-NEUTRAL:
 * say "the people you hire" and "screening", never "support worker" or "caregiver".
 *
 * The optional us/au variants below are progressive enhancement and only
 * appear if the widget forwards a market hint. `neutral` is what most
 * bookers will read, so it has to be the finished sentence.
 *
 * Structure, the pixel and the verification note live in the scaffold.
 */

import ConfirmedPage from "@/components/desk/ConfirmedPage";

export default function Page() {
  return (
    <ConfirmedPage
      offer="care"
      /* The redirect target of the GHL calendar still named "Workforce
         Care Desk Review" (`8J16HJQJHvwiqzmxaEEm`). ⚠️ That name is
         stale: it is the WORKFORCE CONTINUITY calendar. */
      eventName="Workforce Continuity review"
      backHref="/care/workforce"
      backLabel="Back to Workforce Continuity"
      contactEmail="support@novadatech.com.au"
      numbers={{
        neutral:
          "Roughly how many people you need to bring on in a year, how many weeks it takes one of them to go from accepting to taking a shift, and what covers those shifts in the meantime. Estimates are fine.",
        us: "Roughly how many people you need to bring on in a year, how many weeks it takes one of them to go from accepting to working, and what covers those shifts in the meantime. Estimates are fine.",
        au: "Roughly how many support workers you need to bring on in a year, how many weeks it takes one of them to go from accepting to taking a shift, and what covers those shifts in the meantime. Estimates are fine.",
      }}
    />
  );
}
