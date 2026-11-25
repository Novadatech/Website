"use client";

/*
 * /care/ai-workforce/confirmed — NOVADA AI WORKFORCE.
 *
 * 🔴 BUILT AHEAD OF ITS CALENDAR. The AI Workforce calendar does not
 * exist yet, so nothing redirects here today. It is built now so that
 * the moment the founder supplies the id there is a target to point the
 * redirect at: the alternative is a calendar whose redirect falls back
 * to another offer's confirmation page, which is how a booker is
 * thanked for the wrong thing and the wrong conversion fires.
 *
 * ⚠️ AUSTRALIAN ONLY, unlike /care/workforce/confirmed. That page is
 * the redirect target of a calendar embedded on BOTH domains, so its
 * copy is market-neutral. This offer exists on novadatech.com.au alone,
 * so it may say roster, support worker and participant. If the offer is
 * ever ported to .com, this is one of the files that has to split.
 *
 * ⚠️ `offer="care"` IS THE CONVERSION CATEGORY, not the page name. It
 * is what the pixel reports, and it has to stay "care" so this booking
 * aggregates with the other two care offers rather than inventing a
 * third category nothing else reports.
 *
 * Structure, the pixel and the verification note live in the scaffold.
 */

import ConfirmedPage from "@/components/desk/ConfirmedPage";

export default function Page() {
  return (
    <ConfirmedPage
      offer="care"
      eventName="AI Workforce discovery call"
      backHref="/care/ai-workforce"
      backLabel="Back to Novada AI Workforce"
      contactEmail="support@novadatech.com.au"
      numbers={{
        neutral:
          "Roughly how many hours a week your team spends on roster changes, onboarding follow-ups and credential chasing, which systems that work happens in, and which of those tasks you would want a person to approve before anything is sent. Estimates are fine.",
        au: "Roughly how many hours a week your team spends on roster changes, onboarding follow-ups and credential chasing, which systems that work happens in, and which of those tasks you would want a person to approve before anything is sent. Estimates are fine.",
      }}
    />
  );
}
