"use client";

/*
 * /care/rostering/confirmed — ROSTERING AUDIT & EFFICIENCY.
 *
 * The redirect target of the GHL calendar still named "Operations Desk
 * Review" (`InaO8Qj92uCQ8BglSMhW`). ⚠️ That name is stale and the mapping
 * is therefore not guessable: it is the ROSTERING calendar.
 *
 * Replaces /care/operations/confirmed, which now 308s here so the
 * existing calendar redirect keeps working until it is repointed in the
 * CRM.
 *
 * ⚠️ MARKET-NEUTRAL FOR NOW. This calendar is also embedded on the US
 * domain, so American and Australian bookers can land here together.
 * Say "cover" and "your records", never 000 or 911. The us/au variants
 * are progressive enhancement and only appear if the widget forwards a
 * market hint, so `neutral` has to be the finished sentence. When the US
 * site gets its own care pages and its own calendars, this can narrow.
 *
 * Structure, the Meta pixel and the verification note live in the
 * scaffold.
 */

import ConfirmedPage from "@/components/desk/ConfirmedPage";

export default function Page() {
  return (
    <ConfirmedPage
      offer="care"
      eventName="Rostering review"
      backHref="/care/rostering"
      backLabel="Back to Rostering Audit & Efficiency"
      contactEmail="support@novadatech.com.au"
      googleAdsSendTo="AW-16650862607/o6ELCPGhgYwcEI-A4IM-"
      numbers={{
        /* What to bring is the calculator's own inputs, so a booker who
           used it arrives with the answers already in hand. */
        neutral:
          "Roughly what you pay in overtime in a typical week, how many agency shifts you book in a month, and what each costs you above running it yourself. Estimates are fine.",
        us: "Roughly what you pay in overtime in a typical week, how many agency shifts you book in a month, and what each costs you above running it with your own staff. Estimates are fine.",
        au: "Roughly what you pay in overtime in a typical week, how many agency shifts you book in a month, and what each costs you above running it with your own workers. Estimates are fine.",
      }}
    />
  );
}
