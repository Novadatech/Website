"use client";

/*
 * The observer behind the reveal system. Renders nothing, mounted once in
 * the root layout.
 *
 * It only ever REMOVES the hidden state. The hidden state itself is
 * applied by CSS, and only when <html> already carries `.anim`, which the
 * inline script in the layout head sets before first paint. So the worst
 * case if this file never executes is a page with no animation, never a
 * page with no content.
 *
 *   · Reveals each element once, then stops watching it. Nothing
 *     re-animates on scroll back up.
 *   · Staggers siblings that arrive in the same observer callback, 80ms
 *     apart, capped at five (400ms). The cap matters: past that the last
 *     item arrives after the reader has already read it.
 *   · Watches for elements added later (client-side navigation, an
 *     accordion opening) with a MutationObserver, so a reveal on a route
 *     the visitor navigated to still fires.
 *   · No IntersectionObserver support, or an element already past the
 *     viewport on load, means show it immediately.
 */

import { useEffect } from "react";

const STAGGER_MS = 80;
const MAX_STAGGER_STEPS = 5;

export default function RevealRoot() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("anim")) return;

    const show = (el: HTMLElement, step = 0) => {
      if (step > 0) {
        el.style.setProperty(
          "--reveal-delay",
          `${Math.min(step, MAX_STAGGER_STEPS - 1) * STAGGER_MS}ms`,
        );
      }
      el.classList.add("in");
    };

    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.in)")
        .forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        let step = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          // Respect an author-set stagger; otherwise stagger the group
          // that came into view together.
          if (!el.style.getPropertyValue("--reveal-delay")) {
            show(el, step);
          } else {
            show(el);
          }
          step += 1;
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    const observe = (scope: ParentNode) => {
      scope
        .querySelectorAll<HTMLElement>(".reveal:not(.in)")
        .forEach((el) => io.observe(el));
    };

    observe(document);

    // Elements that appear after first paint still get revealed.
    const mo = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.classList.contains("reveal") && !node.classList.contains("in")) {
            io.observe(node);
          }
          observe(node);
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
