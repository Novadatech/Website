"use client";

/*
 * Booking embed for the Desk pages.
 *
 * Brief section 6: one conversion action sitewide, built as a
 * button-plus-embed-slot so the calendar can be swapped without a
 * rebuild. That is why the calendar id lives in a single constant here
 * rather than being pasted into each page.
 *
 * ⚠️ CALENDAR MISMATCH, FLAGGED TO THE FOUNDER 2026-08-26:
 * DESK_CALENDAR_ID currently points at the existing Workforce calendar
 * (founder-directed). Inside the widget that calendar still presents as
 * "After-Hours Cost Review", 45 minutes, with an after-hours-specific
 * description. That reads correctly for care providers and incorrectly
 * for a dental or physio clinic booking from the home page.
 *
 * Because of that, no page copy states a call duration: the widget is the
 * single source of truth for what the visitor is booking, and copy that
 * said "20 minutes" would contradict what they can see. When a neutral
 * review calendar exists, swap the id below and the duration wording can
 * be reinstated from the brief.
 *
 * The calendar already redirects to /workforce-confirmed on booking.
 */

import { useEffect } from "react";
import { CARD } from "./tokens";

const DESK_CALENDAR_ID = "InaO8Qj92uCQ8BglSMhW";

export default function BookingEmbed({
  source,
  title = "Book a review",
}: {
  /** CRM attribution: which page produced the booking (brief section 6). */
  source: string;
  title?: string;
}) {
  useEffect(() => {
    // Tell /workforce-confirmed which page produced the booking, so it can
    // greet a clinic owner as Novada Tech rather than Novada Workforce.
    // Same-tab only, which is exactly how the calendar redirect flows.
    try {
      sessionStorage.setItem("nvt_booking_source", source);
    } catch {
      /* private browsing; the confirmation page falls back to neutral */
    }

    const script = document.createElement("script");
    script.src = "https://link.novadatech.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [source]);

  const src =
    `https://link.novadatech.com/widget/booking/${DESK_CALENDAR_ID}` +
    `?utm_source=novadatech.com.au&utm_medium=website&utm_campaign=desk` +
    `&utm_content=${encodeURIComponent(source)}`;

  return (
    <div className={`${CARD} p-2 md:p-3 overflow-hidden`}>
      <iframe
        src={src}
        style={{
          width: "100%",
          minHeight: "760px",
          border: "none",
          overflow: "hidden",
          display: "block",
        }}
        scrolling="no"
        id={`${DESK_CALENDAR_ID}_${source}`}
        title={title}
      />
    </div>
  );
}
