"use client";

/*
 * /practices/revenue-audit/confirmed - PATIENT REVENUE LEAKAGE AUDIT.
 *
 * 🔴 THE COPY HERE WAS STILL THE RETIRED WORKFORCE DESK\'S until
 * 16 October 2026. It told somebody who had just booked an appointment
 * audit to bring "how many people you hire in a year, how long a hire
 * currently takes, and where your credential and training records live
 * today". The route was renamed from /practices/workforce/confirmed
 * when the offer was replaced on 14 October and the redirect was added,
 * but nobody rewrote the page body.
 *
 * It survived every sweep because none of it names a retired SERVICE:
 * "hire", "credential" and "training records" are ordinary words. Only
 * reading the page against the offer it now serves catches it.
 *
 * ⚠️ ONE CALENDAR, BOTH MARKETS, STILL. This page is the redirect
 * target of a single calendar embedded on BOTH domains, so American and
 * Australian bookers land here together and THE COPY IS MARKET-NEUTRAL:
 * no inquiry/enquiry, no booking/scheduling. The .com practices
 * calendars are being split off, and when they are this can narrow.
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
      eventName="Revenue audit review"
      backHref="/practices/revenue-audit"
      backLabel="Back to the Patient Revenue Leakage Audit"
      contactEmail="support@novadatech.com.au"
      /* The leakage calculator's own inputs, in its order, so a booker
         who used it on the way in arrives with the answers in hand. */
      numbers={{
        neutral:
          "Roughly how many bookable hours go unused in a typical week, your average fee for an hour of appointment time, and how many weeks a year you are open. For the billing half: who raises your invoices and chases unpaid accounts today, and whether anybody works rejected claims. Estimates are fine.",
      }}
    />
  );
}
