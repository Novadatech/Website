"use client";

/*
 * /care/confirmed — AUSTRALIAN CARE BOOKINGS.
 *
 * ⚠️ ONE OFFER, ONE MARKET. With four calendars this page receives only
 * Australian care bookers, so it uses Australian English and names
 * worker screening, rosters and 000. The market-neutral rule these pages
 * lived under when there were two calendars is lifted. See the header of
 * components/desk/ConfirmedPage.tsx before changing that back.
 *
 * Structure, the pixel and the verification note all live in the
 * scaffold. Only the words are here.
 */

import ConfirmedPage from "@/components/desk/ConfirmedPage";

export default function Page() {
  return (
    <ConfirmedPage
      offer="care"
      eventName="Care Desk review"
      backHref="/care"
      backLabel="Back to the care desks"
      contactEmail="support@novadatech.com.au"
      googleAdsSendTo="AW-16650862607/o6ELCPGhgYwcEI-A4IM-"
      numbersFor={(source) =>
        source?.includes("workforce")
          ? "Roughly how many support workers you hire in a year, how long a hire currently takes, and where your worker screening, induction and training records live today. Estimates are fine."
          : source?.includes("operations")
            ? "Roughly how many after-hours calls and call-offs come in each week, who carries the phone today, and where your service records currently live. Estimates are fine."
            : "Roughly how many after-hours calls and call-offs come in each week, how often you are hiring, and where your records currently live. Estimates are fine."
      }
    />
  );
}
