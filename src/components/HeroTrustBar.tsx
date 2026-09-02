"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

interface HeroTrustBarProps {
  /** Animation delay so it staggers correctly within the hero. Default 0.35s. */
  delay?: number;
  /** Override the businesses-scaled count if needed. Defaults to 350+. */
  businessesCount?: string;
  /** Override the rating shown. Defaults to "4.9" (verified). */
  rating?: string;
  /** Override the review count shown. Defaults to "77+". */
  reviewCount?: string;
  /** Extra Tailwind classes (e.g. spacing override). */
  className?: string;
  /** Surface it sits on. "light" is the Desk white canvas. */
  tone?: "light" | "dark";
  /** Left-align instead of centring. Used by the Desk lander hero. */
  align?: "center" | "start";
}

/**
 * Above-the-fold social proof: an unbranded rating lockup and a
 * businesses-scaled badge.
 *
 * BRAND COMPLIANCE (Trustpilot notice, 2026-07): this must stay
 * UNBRANDED. Do not add the Trustpilot wordmark, logo, their green
 * (#00B67A), their tile-star graphics, "TrustScore", or any
 * Trustpilot-branded rating/count lockup. Recreating their widget
 * requires a paid plan and they actively monitor for it. Our own factual
 * rating claim in our own styling is fine. Keep the two decoupled.
 *
 * 2026-09-02: gained a light tone for the Desk rebuild of /meetings-3,
 * its only consumer. Two other changes made at the same time:
 *  · The rating lockup no longer links to /case-study. The founder asked
 *    for that link to come off the rating on 27 August, and on a cold
 *    paid lander it was a target="_blank" exit sitting above the fold.
 *    The lander carries its own case-study section further down.
 *  · The stars render in the brand blue on light, not the old green.
 */
export default function HeroTrustBar({
  delay = 0.35,
  businessesCount = "350+",
  rating = "4.9",
  reviewCount = "77+",
  className = "",
  tone = "dark",
  align = "center",
}: HeroTrustBarProps) {
  const dark = tone === "dark";

  const pill = dark
    ? "bg-white/[0.04] border-white/[0.10]"
    : "bg-white border-[#E3E6EC]";
  const strong = dark ? "text-white" : "text-[#0B0E14]";
  const soft = dark ? "text-white/70" : "text-[#5B6472]";
  const star = dark ? "#0CC481" : "#003DDB";
  const divider = dark ? "bg-white/15" : "bg-[#E3E6EC]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 ${
        align === "start" ? "sm:justify-start" : "justify-center"
      } ${className}`}
    >
      {/* Unbranded rating lockup. Deliberately not a link: see file header. */}
      <div
        className={`flex items-center gap-2.5 rounded-full border px-4 py-2 ${pill}`}
        aria-label={`Rated ${rating} out of 5 from ${reviewCount} client reviews`}
      >
        <span className="flex items-center gap-0.5" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg
              key={i}
              className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
              viewBox="0 0 24 24"
              fill={star}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2l2.92 6.43L22 9.27l-5.27 4.94 1.42 7.39L12 18.18l-6.15 3.42L7.27 14.21 2 9.27l7.08-.84L12 2z" />
            </svg>
          ))}
        </span>

        <span className={`font-supply text-sm font-bold tabular-nums ${strong}`}>
          {rating}/5
        </span>
        <span className={`text-sm ${soft}`}>
          <span className="font-supply tabular-nums">{reviewCount}</span> client
          reviews
        </span>
      </div>

      <div className={`hidden h-6 w-px sm:block ${divider}`} />

      <div className={`flex items-center gap-3 rounded-full border px-4 py-2.5 ${pill}`}>
        <Users className={`h-5 w-5 ${dark ? "text-ember-500" : "text-[#003DDB]"}`} />
        <span className={`text-sm font-semibold sm:text-base ${strong}`}>
          <span className="font-supply tabular-nums">{businessesCount}</span>{" "}
          businesses scaled
        </span>
      </div>
    </motion.div>
  );
}
