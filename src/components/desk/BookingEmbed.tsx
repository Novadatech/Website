"use client";

/*
 * The single booking calendar, embedded on the home page and on both
 * offer pages. One conversion event for the whole site.
 *
 * ⚠️ THE WIDGET'S OWN TITLE AND DESCRIPTION LIVE IN THE BOOKING PLATFORM,
 * NOT HERE, and as of 6 September 2026 they still read "Book An
 * Operations Desk Review" with an operations-only description. That means
 * a Workforce Partner visitor presses "Book a Workforce Review" and is
 * shown the other offer at the moment of commitment. Renaming it is a
 * founder task in the platform; flagged, not fixable from this file.
 *
 * ⚠️ Snapshot the calendar before any edit there: a partial save silently
 * reverts the duration and the redirect target.
 *
 * `source` is written to sessionStorage as nvt_booking_source and read by
 * /review-confirmed to tailor its next steps, so it must name the page.
 * The iframe is lazy loaded: it is roughly 760px tall and sits ten
 * thousand pixels down, so eager loading competed with the hero for
 * bandwidth on a phone.
 */

import { useEffect } from "react";
import { CARD } from "./tokens";

const DESK_CALENDAR_ID = "InaO8Qj92uCQ8BglSMhW";

export default function BookingEmbed({
  source,
  title = "Book a review",
  tone = "light",
}: {
  /** CRM attribution: which page produced the booking (brief section 6). */
  source: string;
  title?: string;
  /** The calendar iframe is always white, so on dark pages we frame it in
      a dark surface instead of a light card, which stops it reading as a
      pasted-in slab. */
  tone?: "light" | "dark";
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

  const frame =
    tone === "dark"
      ? "rounded-xl border border-white/12 bg-white/[0.04] p-2 md:p-3 overflow-hidden"
      : `${CARD} p-2 md:p-3 overflow-hidden`;

  return (
    <div className={frame}>
      <iframe

        loading="lazy"        src={src}
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
