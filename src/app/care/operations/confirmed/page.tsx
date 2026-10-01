"use client";

/*
 * /care/operations/confirmed - THE OPERATIONS DESK.
 *
 * ⚠️ ONE DESK, BOTH MARKETS. This page is the redirect target of a single
 * calendar, and that calendar is embedded on BOTH domains, so American
 * and Australian bookers land here together. THE COPY IS MARKET-NEUTRAL:
 * say "cover" and "your records", never "roster" or "schedule", and never 000 or 911.
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
      eventName="Operations Desk review"
      backHref="/care/operations"
      backLabel="Back to The Operations Desk"
      contactEmail="support@novadatech.com.au"
      googleAdsSendTo="AW-16650862607/o6ELCPGhgYwcEI-A4IM-"
      numbers={{
        neutral:
          "Roughly how much comes into your operations line in a typical week and when, who handles it today, and where your records currently live. Estimates are fine.",
        us: "Roughly how much comes into your operations line in a typical week and when, who handles it today, and where your visit records live. Estimates are fine.",
        au: "Roughly how much comes into your operations line in a typical week and when, who handles it today, and where your records currently live. Estimates are fine.",
      }}
    />
  );
}
