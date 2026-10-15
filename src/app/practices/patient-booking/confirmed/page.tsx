"use client";

/*
 * /practices/patient-booking/confirmed - PATIENT BOOKING & RETENTION
 * CONTINUITY. Renamed from /practices/patient-access/confirmed, which
 * served the retired Patient Access Desk and now 308s here.
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
      eventName="Patient booking review"
      backHref="/practices/patient-booking"
      backLabel="Back to Patient Booking &amp; Retention Continuity"
      contactEmail="support@novadatech.com.au"
      /* \u26a0\ufe0f BILLING JOINED THIS OFFER ON 15 OCTOBER 2026, so the last
         clause asks who raises and chases accounts today. */
      numbers={{
        neutral:
          "Roughly how many patients are overdue on your recall list, how many fall overdue in a typical month, how many of those a person actually rings, and who raises and chases your accounts today. Estimates are fine.",
      }}
    />
  );
}
