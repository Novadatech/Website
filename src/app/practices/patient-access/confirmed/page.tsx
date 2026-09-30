"use client";

/*
 * /practices/patient-access/confirmed - THE PATIENT ACCESS DESK.
 *
 * ⚠️ ONE DESK, BOTH MARKETS. This page is the redirect target of a single
 * calendar, and that calendar is embedded on BOTH domains, so American
 * and Australian bookers land here together. THE COPY IS MARKET-NEUTRAL:
 * say "calls" and "new patients", never "enquiries" or "inquiries".
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
      eventName="Patient Access Desk review"
      backHref="/practices/patient-access"
      backLabel="Back to The Patient Access Desk"
      contactEmail="support@novadatech.com.au"
      numbers={{
        neutral:
          "Roughly how many calls come in each week, how many of those are new patients, who handles them today, and how much of your recall list actually gets worked. Estimates are fine.",
        us: "Roughly how many calls come in each week, how many of those are new patients, who handles them today, and how much of your recall list actually gets worked. Estimates are fine.",
        au: "Roughly how many calls and new patient enquiries come in each week, who handles them today, and how much of your recall list actually gets worked. Estimates are fine.",
      }}
    />
  );
}
