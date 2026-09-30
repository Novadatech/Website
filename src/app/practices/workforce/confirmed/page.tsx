"use client";

/*
 * /practices/workforce/confirmed - THE WORKFORCE DESK, PRACTICES.
 *
 * ⚠️ ONE DESK, BOTH MARKETS. This page is the redirect target of a single
 * calendar, and that calendar is embedded on BOTH domains, so American
 * and Australian bookers land here together. THE COPY IS MARKET-NEUTRAL:
 * say "credentials", never "licence" or "license" or "registration".
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
      offer="practices"
      eventName="Practice Workforce Desk review"
      backHref="/practices/workforce"
      backLabel="Back to The Workforce Desk"
      contactEmail="support@novadatech.com.au"
      numbers={{
        neutral:
          "Roughly how many people you hire in a year, how long a hire currently takes, and where your credential and training records live today. Estimates are fine.",
        us: "Roughly how many people you hire in a year, how long a hire currently takes, and where your license and credential records live today. Estimates are fine.",
        au: "Roughly how many people you hire in a year, how long a hire currently takes, and where your registration and credential records live today. Estimates are fine.",
      }}
    />
  );
}
