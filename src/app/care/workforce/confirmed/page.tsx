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
      /* ⚠️ NOT CURRENTLY REACHED. The care side runs one calendar and
         it redirects to /care/operations/confirmed. This is kept, and
         kept accurate, so that splitting the calendars again later does
         not resurrect a page naming a retired Desk. */
      eventName="care review"
      backHref="/care/workforce"
      backLabel="Back to Workforce Continuity"
      contactEmail="support@novadatech.com.au"
      numbers={{
        neutral:
          "Roughly how many people you hire in a year, how long a hire currently takes, and where your screening, onboarding and training records live today. Estimates are fine.",
        us: "Roughly how many caregivers you hire in a year, how long a hire currently takes, and where your background check and exclusion screening records live today. Estimates are fine.",
        au: "Roughly how many support workers you hire in a year, how long a hire currently takes, and where your worker screening, induction and training records live today. Estimates are fine.",
      }}
    />
  );
}
