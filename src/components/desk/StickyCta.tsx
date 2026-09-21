"use client";

/*
 * Sticky booking bar. Appears once the visitor is past the hero and hides
 * again when the booking section itself is on screen, so it never competes
 * with the calendar.
 *
 * ⚠️ FRAMER-MOTION REMOVED, 16 September 2026. This was the last thing on
 * the site pulling an animation library into the client bundle, for one
 * bar that slides up 80px. It is a CSS transition now. Nothing else on
 * these pages imports framer-motion.
 *
 * ⚠️ THE BAR IS 1240 WIDE NOW. It was max-w-[1180px] while every other
 * frame on the site was 1240, so the one component that floats over the
 * whole page was the one that did not line up with it.
 *
 * ⚠️ WHEN HIDDEN IT IS `invisible`, NOT JUST TRANSPARENT. An opacity-0
 * bar is still in the tab order, so a keyboard reader at the top of the
 * page would tab into a booking button they cannot see.
 *
 * Scroll work is rAF-guarded: a listener that reads getBoundingClientRect
 * on every scroll event is the classic source of jank on a long page.
 */

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { FRAME, GUTTER } from "./tokens";
import { CTA_LABEL, POSITION } from "@/content/offers";

/**
 * `href` defaults to the in-page calendar. Why Novada has no #book section
 * (its closing band is id="review"), so it must pass "/#book"; without that
 * the sticky button is a dead click on that page.
 *
 * THE DEFAULTS ARE A TRAP, so they are set to the safest thing this site
 * can say. Updated 15 September 2026 with the offer: the anchor is the
 * hire, not the call volume. On the care site this component defaulted to a tagline naming
 * both Partners, and before that to "Every call answered. Every shift
 * covered. Everything measured." — a shift-cover claim the Terms of Service
 * disclaim and the founder struck on 5 September. Any page that did not
 * pass a tagline silently inherited it. Nothing about the default announces
 * itself in the rendered page, so pass an explicit tagline on every page
 * and never let a new page rely on whatever is written here.
 */
export default function StickyCta({
  label = CTA_LABEL,
  tone = "light",
  tagline = POSITION,
  href = "#book",
}: {
  label?: string;
  tone?: "light" | "dark";
  tagline?: string;
  href?: string;
}) {
  const [show, setShow] = useState(false);
  const dark = tone === "dark";

  useEffect(() => {
    const target = document.getElementById("book");
    let frame = 0;

    const measure = () => {
      frame = 0;
      const pastHero = window.scrollY > window.innerHeight * 0.85;
      let bookingVisible = false;
      if (target) {
        const r = target.getBoundingClientRect();
        bookingVisible = r.top < window.innerHeight && r.bottom > 0;
      }
      setShow(pastHero && !bookingVisible);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur-md transition-[transform,opacity,visibility] duration-280 ${
        show
          ? "visible translate-y-0 opacity-100 ease-enter"
          : "invisible translate-y-full opacity-0 ease-exit"
      } ${
        dark
          ? "border-white/10 bg-canvas-deep/95"
          : "border-ink-100 bg-white/95 shadow-[0_-8px_24px_-16px_rgb(11_14_20_/_0.25)]"
      }`}
    >
      <div
        className={`${FRAME} ${GUTTER} flex flex-col gap-2.5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-5`}
      >
        {/* ⚠️ NOT hidden on mobile any more. This carried
            "hidden sm:block", so on a page whose traffic is mostly
            phones the single strongest line on the site never
            rendered at all. */}
        <p
          className={`text-sm font-medium ${
            dark ? "text-white/85" : "text-ink-950"
          }`}
        >
          {tagline}
        </p>
        <a
          href={href}
          tabIndex={show ? undefined : -1}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-brand-500 px-5 text-sm font-semibold text-white shadow-cta transition-colors duration-150 ease-standard hover:bg-brand-600 sm:w-auto"
        >
          {label}
          <ArrowRight aria-hidden className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
