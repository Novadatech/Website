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
      /* ⚠️ THE CARE SIDE HAS ONE REVIEW AND ONE CONFIRMATION PAGE.
         This route survives because `InaO8Qj92uCQ8BglSMhW` still
         redirects here, not because /care/operations still exists: that
         page is retired and 308s to /care/rostering. The wording is
         deliberately neutral between the two pillars, because the
         booker has not chosen one and is not expected to. */
      eventName="care review"
      backHref="/care"
      backLabel="Back to Novada for care providers"
      contactEmail="support@novadatech.com.au"
      googleAdsSendTo="AW-16650862607/o6ELCPGhgYwcEI-A4IM-"
      numbers={{
        neutral:
          "Roughly what you pay in overtime and agency cover in a typical month, how many people you bring on in a year, and how long it takes one of them to go from accepting to taking a shift. Estimates are fine.",
        us: "Roughly what you pay in overtime and agency cover in a typical month, how many people you bring on in a year, and how long it takes one of them to go from accepting to working. Estimates are fine.",
        au: "Roughly what you pay in overtime and agency cover in a typical month, how many support workers you bring on in a year, and how long it takes one of them to go from accepting to taking a shift. Estimates are fine.",
      }}
    />
  );
}
