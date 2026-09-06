"use client";

/*
 * The single booking calendar, embedded on the home page and on both
 * offer pages. One conversion event for the whole site.
 *
 * ══════════════════════════════════════════════════════════════════════
 * ⚠️ THIS COMPONENT HAS BROKEN BEFORE. Read this before changing it.
 *
 * Reported 2026-09-06: the calendar sometimes did not load, and sometimes
 * took a long time. Three separate causes, all fixed here.
 *
 *  1. LAZY LOADING. loading="lazy" was added earlier the same day as a
 *     performance change and was a mistake. The frame sits roughly ten
 *     thousand pixels down, so lazy meant the fetch did not even START
 *     until the visitor scrolled to it, and the provider's widget takes
 *     between 0.6 and 2.1 seconds to respond (measured). Worse, the
 *     resizer script scans for frames when IT loads: with a lazy frame
 *     that has not fetched, the child never completes its handshake, so
 *     the height negotiation can fail outright. The calendar is the
 *     conversion event for the entire site. It loads eagerly. Do not
 *     reintroduce lazy loading here.
 *
 *  2. THE RESIZER SCRIPT WAS ADDED AND REMOVED PER MOUNT. Every instance
 *     appended https://link.novadatech.com/js/form_embed.js on mount and
 *     removed the tag on unmount. Removing a script tag does not undo its
 *     side effects, so on a client-side navigation between two pages that
 *     both embed the calendar, the script was executed twice. Scripts
 *     like this typically guard against double initialisation, which
 *     means the SECOND page's iframe may never be registered and never
 *     resizes. It is now loaded once per document, idempotently, and
 *     never removed.
 *
 *  3. NO FALLBACK IF THE HANDSHAKE NEVER HAPPENS. The frame was
 *     scrolling="no" with overflow hidden and a fixed minimum height, so
 *     if the resizer failed the calendar was silently clipped and the
 *     visitor could not reach the button. It now allows its own scrolling,
 *     so a failed handshake degrades to a scrollable calendar rather than
 *     an unusable one.
 *
 *     The 760px floor is deliberate and was re-checked on 2026-09-06. A
 *     capture appeared to show the widget clipped mid-way through the time
 *     slots, which looks like a height bug; it is not. The slot column is
 *     the widget's OWN internal scroll area and renders that way at any
 *     frame height. Raising the floor does not reveal more slots, it just
 *     risks white space under the widget once the resizer reports a
 *     shorter height. Leave it at 760 and let the resizer do its job.
 *
 * A placeholder sits behind the frame and is covered when the widget
 * paints. That is not decoration: the provider's widget is regularly over
 * a second, and a blank bordered box reads as broken.
 * ══════════════════════════════════════════════════════════════════════
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
 */

import { useEffect, useState } from "react";
import { CARD } from "./tokens";

const DESK_CALENDAR_ID = "InaO8Qj92uCQ8BglSMhW";
const RESIZER_SRC = "https://link.novadatech.com/js/form_embed.js";

/**
 * Load the provider's iframe resizer once per document. Idempotent by
 * design: several pages embed the calendar, and a client-side navigation
 * between two of them must not execute the script a second time. Never
 * removed, because removing the tag would not undo the listeners it
 * registers and re-adding it is exactly what broke the handshake.
 */
function ensureResizer() {
  if (typeof document === "undefined") return;
  if (document.querySelector(`script[src="${RESIZER_SRC}"]`)) return;
  const script = document.createElement("script");
  script.src = RESIZER_SRC;
  script.async = true;
  document.body.appendChild(script);
}

export default function BookingEmbed({
  source,
  title = "Book a review",
  tone = "light",
}: {
  /** CRM attribution: which page produced the booking. */
  source: string;
  title?: string;
  /** The calendar iframe is always white, so on dark pages we frame it in
      a dark surface instead of a light card, which stops it reading as a
      pasted-in slab. */
  tone?: "light" | "dark";
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Tell the confirmation page which page produced the booking so it can
    // tailor its next steps. Same-tab only, which is how the redirect flows.
    try {
      sessionStorage.setItem("nvt_booking_source", source);
    } catch {
      /* private browsing; the confirmation page falls back to neutral */
    }
    ensureResizer();
  }, [source]);

  const src =
    `https://link.novadatech.com/widget/booking/${DESK_CALENDAR_ID}` +
    `?utm_source=novadatech.com.au&utm_medium=website&utm_campaign=desk` +
    `&utm_content=${encodeURIComponent(source)}`;

  const dark = tone === "dark";
  const frame = dark
    ? "rounded-xl border border-white/12 bg-white/[0.04] p-2 md:p-3 overflow-hidden"
    : `${CARD} p-2 md:p-3 overflow-hidden`;

  return (
    <div className={frame}>
      <div className="relative min-h-[760px]">
        {/* Placeholder. Covered the moment the widget paints. */}
        {!loaded ? (
          <div
            aria-hidden
            className={`absolute inset-0 flex items-center justify-center rounded-lg ${
              dark ? "bg-white/[0.03]" : "bg-[#F7F8FA]"
            }`}
          >
            <span
              className={`font-supply text-[12px] font-medium uppercase tracking-[0.14em] ${
                dark ? "text-white/40" : "text-[#9AA3B1]"
              }`}
            >
              Loading the calendar
            </span>
          </div>
        ) : null}

        <iframe
          src={src}
          onLoad={() => setLoaded(true)}
          style={{
            position: "relative",
            width: "100%",
            minHeight: "760px",
            border: "none",
            display: "block",
          }}
          /* Allows its own scrolling on purpose: if the resizer handshake
             never completes, a scrollable calendar is usable and a clipped
             one is not. */
          scrolling="auto"
          id={`${DESK_CALENDAR_ID}_${source}`}
          title={title}
        />
      </div>
    </div>
  );
}
