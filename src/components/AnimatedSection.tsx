/*
 * The scroll reveal, rebuilt 16 September 2026.
 *
 * ══════════════════════════════════════════════════════════════════════
 * ⚠️ THIS COMPONENT USED TO SHIP THE PAGE INVISIBLE.
 *
 * It was a framer-motion client component with initial={{opacity:0, y:40}}
 * and animate driven by useInView. useInView is false during server
 * rendering, so every instance on the page server-rendered with
 * `opacity:0` inline. On the homepage that was around sixty nodes. Until
 * hydration finished, the page was a nav and a hero on an empty white
 * screen, which is exactly what a phone on a weak connection inside an
 * in-app browser sees.
 *
 * It is now a SERVER component that renders nothing but a class. The
 * markup ships visible. It is hidden only if a pre-paint inline script in
 * the document head has already confirmed that JavaScript is running and
 * that the reader has not asked for reduced motion, by putting `.anim` on
 * <html>. With JavaScript off, reduced motion on, or hydration slow, the
 * content is simply there.
 *
 * Mechanics live in globals.css (.reveal / .anim .reveal.in) and in
 * components/RevealRoot.tsx (the observer). Nothing here runs on the
 * client, and framer-motion is no longer on this path at all.
 *
 * MOTION RULES, from the brief:
 *   · 12px of travel, 300ms, decelerating. Never a 40px slide.
 *   · Reveals once. Never again on scroll back up.
 *   · Staggers cap at 400ms total, because the fifth sibling arriving
 *     after the reader has already looked at it is worse than no motion.
 *   · NEVER wrap anything above the fold in this.
 * ══════════════════════════════════════════════════════════════════════
 */

import type { CSSProperties } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger, in seconds, to match the call sites this replaced. Clamped
   *  to 400ms: five siblings at 80ms is the whole permitted budget. */
  delay?: number;
  /** Accepted so existing call sites keep compiling. Travel is always
   *  vertical and always 12px now: a horizontal slide moves text against
   *  the reading direction, which is the loudest template tell there is. */
  direction?: "up" | "left" | "right" | "none";
  /** Escape hatch for a wrapper that must not introduce a block box. */
  as?: "div" | "section" | "li";
}

const MAX_DELAY_MS = 400;

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: AnimatedSectionProps) {
  const ms = Math.min(Math.round((delay || 0) * 1000), MAX_DELAY_MS);
  const style = ms > 0 ? ({ "--reveal-delay": `${ms}ms` } as CSSProperties) : undefined;

  return (
    <Tag className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
