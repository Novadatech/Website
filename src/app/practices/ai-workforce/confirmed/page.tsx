"use client";

/*
 * /practices/ai-workforce/confirmed — NOVADA AI WORKFORCE, PRACTICES.
 *
 * 🔴 BUILT AHEAD OF ITS CALENDAR. The practices AI Workforce demo
 * calendar does not exist yet, so nothing redirects here today. It is
 * built now so that the moment the founder supplies the id there is a
 * target to point the redirect at: the alternative is a calendar whose
 * redirect falls back to another offer's confirmation page, which is how
 * a booker is thanked for the wrong thing and the wrong conversion
 * fires. The URL is the contract:
 *
 *     https://novadatech.com.au/practices/ai-workforce/confirmed
 *
 * ⚠️ AUSTRALIAN PRACTICES ONLY. Say enquiry, appointment, Medicare,
 * clinician and practice manager. This offer has no US equivalent yet;
 * if one is built, this is a file that has to split rather than be
 * shared.
 *
 * ⚠️ `offer="practices"` IS THE CONVERSION CATEGORY, not the page name.
 * It is what the pixel reports, and it stays "practices" so this booking
 * aggregates with the other two practices offers rather than inventing a
 * third category nothing else reports.
 *
 * ⚠️ THE ASK IS THE DEMO'S OWN PREPARATION, not an audit's numbers. This
 * offer is demonstrated against the practice's real workflows, so what
 * is useful beforehand is which systems they run and which tasks eat the
 * week, not a dollar figure.
 */

import ConfirmedPage from "@/components/desk/ConfirmedPage";

export default function Page() {
  return (
    <ConfirmedPage
      offer="practices"
      eventName="AI Workforce demo"
      backHref="/practices/ai-workforce"
      backLabel="Back to Novada AI Workforce"
      contactEmail="support@novadatech.com.au"
      numbers={{
        neutral:
          "Which practice-management, appointment, telephony and billing systems you run, roughly how many calls reception misses in a typical week, how many cancellations go unfilled, and which of those tasks you would want a person to approve before anything reaches a patient. Estimates are fine.",
      }}
    />
  );
}
