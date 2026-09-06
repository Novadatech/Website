"use client";

/*
 * Sticky booking bar, matching the conversion craft of the previous home
 * page. Appears once the visitor is past the hero and hides again when
 * the booking section itself is on screen, so it never competes with the
 * calendar.
 */

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * `href` defaults to the in-page calendar. Why Novada has no #book section
 * (its closing band is id="review"), so it passes "/#book"; without that the
 * sticky button was a dead click on that page. Added 2026-09-06.
 *
 * The default `tagline` names both offers, which is right on the home page
 * (organic traffic, both offers shown) and wrong on a single-audience ad
 * lander, so each offer page passes its own. It previously read "Every call
 * answered. Every shift covered. Everything measured.", a shift-cover claim
 * our Terms of Service disclaim and the founder struck on 5 September; any
 * page that did not pass a tagline silently inherited it.
 */
export default function StickyCta({
  label = "Book a Desk Review",
  tone = "light",
  tagline = "One partner runs your operation. The other builds and backs your workforce.",
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

    const onScroll = () => {
      const pastHero = window.scrollY > 700;
      let bookingVisible = false;
      if (target) {
        const r = target.getBoundingClientRect();
        bookingVisible = r.top < window.innerHeight && r.bottom > 0;
      }
      setShow(pastHero && !bookingVisible);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.25, 0.4, 0.25, 1] }}
          className={`fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur-md ${
            dark
              ? "border-white/10 bg-[#080808]/92"
              : "border-[#E2E7EE] bg-white/95"
          }`}
        >
          <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-12">
            <p className={`hidden sm:block text-sm font-medium ${dark ? "text-white/85" : "text-[#0B1E4B]"}`}>
              {tagline}
            </p>
            <a
              href={href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#003DDB] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0031ae] sm:w-auto"
            >
              {label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
