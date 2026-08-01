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
  /** Accent colour for the businesses-scaled badge icon. Default "ember" (site-wide brand). */
  accent?: "ember";
}

/**
 * Reusable above-the-fold social-proof trust bar.
 * Two pill-style badges sitting side-by-side on desktop, stacked on mobile:
 *   1. Unbranded rating lockup (our stars + "4.9/5 · 77+ client reviews"),
 *      linking out to the independent review profile
 *   2. "350+ businesses scaled" badge
 *
 * BRAND COMPLIANCE (Trustpilot notice, 2026-07): this must stay UNBRANDED.
 * Do not add the Trustpilot wordmark, logo, their green (#00B67A), their
 * tile-star graphics, "TrustScore", or any Trustpilot-branded rating/count
 * lockup — recreating their widget requires a paid plan and they actively
 * monitor. A plain hyperlink to the profile is fine; our own factual rating
 * claim in our own styling is fine. Keep the two decoupled from their brand.
 */
export default function HeroTrustBar({
  delay = 0.35,
  businessesCount = "350+",
  rating = "4.9",
  reviewCount = "77+",
  className = "",
}: HeroTrustBarProps) {
  // Single brand accent — ember (preserved for revertability if we test
  // a variant again later).
  const iconColorClass = "text-ember-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 ${className}`}
    >
      {/* Unbranded rating lockup — links to the independent review profile */}
      <a
        href="https://www.trustpilot.com/review/novadatech.com.au"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.10] hover:bg-white/[0.07] hover:border-white/[0.20] transition-all"
        aria-label={`Rated ${rating} out of 5 from ${reviewCount} client reviews — read them all`}
      >
        {/* 5 stars in our own brand colour */}
        <span className="flex items-center gap-0.5" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg
              key={i}
              className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
              viewBox="0 0 24 24"
              fill="#0CC481"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2l2.92 6.43L22 9.27l-5.27 4.94 1.42 7.39L12 18.18l-6.15 3.42L7.27 14.21 2 9.27l7.08-.84L12 2z" />
            </svg>
          ))}
        </span>

        <span className="text-sm font-bold text-white">{rating}/5</span>
        <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
          {reviewCount} client reviews
        </span>
      </a>

      {/* Vertical divider — desktop only */}
      <div className="hidden sm:block w-px h-6 bg-white/15" />

      {/* Businesses scaled badge */}
      <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.10]">
        <Users className={`w-5 h-5 ${iconColorClass}`} />
        <span className="text-sm sm:text-base text-white font-semibold">
          {businessesCount} businesses scaled
        </span>
      </div>
    </motion.div>
  );
}
