"use client";

/*
 * /practices/confirmed — AUSTRALIAN PRACTICE BOOKINGS.
 *
 * ⚠️ ONE OFFER, ONE MARKET. With four calendars this page receives only
 * Australian practice bookers, so it uses Australian English and names
 * AHPRA registration where relevant. The market-neutral rule these pages
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
      offer="practices"
      eventName="Practice Desk review"
      backHref="/practices"
      backLabel="Back to the practice desks"
      contactEmail="support@novadatech.com.au"
      numbersFor={(source) =>
        source?.includes("workforce")
          ? "Roughly how many people you hire in a year, how long a hire currently takes, and where your registration and credential records live today. Estimates are fine."
          : source?.includes("patient-access")
            ? "Roughly how many calls and new patient enquiries come in each week, who handles them today, and how much of your recall list actually gets worked. Estimates are fine."
            : "Roughly how many calls and enquiries come in each week, who handles them today, and how hiring works at the moment. Estimates are fine."
      }
    />
  );
}
