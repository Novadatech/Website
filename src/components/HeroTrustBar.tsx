"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

interface HeroTrustBarProps {
  /** Animation delay so it staggers correctly within the hero. Default 0.35s. */
  delay?: number;
  /** Override the businesses-scaled count if needed. Defaults to 350+. */
  businessesCount?: string;
  /** Override the Trustpilot rating shown. Defaults to "5.0". */
  rating?: string;
  /** Extra Tailwind classes (e.g. spacing override). */
  className?: string;
  /** Accent colour for the businesses-scaled badge icon. Default "gold". */
  accent?: "gold" | "red" | "dark-red";
}

/**
 * Reusable above-the-fold social-proof trust bar.
 * Two pill-style badges sitting side-by-side on desktop, stacked on mobile:
 *   1. Trustpilot brand lockup (wordmark + green tile-stars + rating)
 *   2. "350+ businesses scaled" badge
 * Designed to sit between a hero sub-headline and CTA — primes the click
 * within the 3-second cold-traffic window.
 */
export default function HeroTrustBar({
  delay = 0.35,
  businessesCount = "350+",
  rating = "5.0",
  className = "",
  accent = "gold",
}: HeroTrustBarProps) {
  // Static class strings so Tailwind JIT picks them up
  const iconColorClass =
    accent === "dark-red"
      ? "text-ember-500"
      : accent === "red"
        ? "text-red-400"
        : "text-gold-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 ${className}`}
    >
      {/* Trustpilot lockup */}
      <a
        href="https://www.trustpilot.com/review/novadatech.com.au"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.10] hover:bg-white/[0.07] hover:border-[#00B67A]/40 transition-all"
        aria-label={`${rating} on Trustpilot`}
      >
        {/* Trustpilot wordmark with brand star */}
        <span className="flex items-center gap-1">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="#00B67A"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M12 2l2.92 6.43L22 9.27l-5.27 4.94 1.42 7.39L12 18.18l-6.15 3.42L7.27 14.21 2 9.27l7.08-.84L12 2z" />
          </svg>
          <span className="text-sm font-bold text-white tracking-tight">Trustpilot</span>
        </span>

        {/* 5 Trustpilot brand tile-stars */}
        <span className="flex items-center gap-0.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg
              key={i}
              className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect width="24" height="24" rx="2" fill="#00B67A" />
              <path
                d="M12 5l1.6 4.83L18.5 10l-3.9 2.95L16 18l-4-2.97L8 18l1.4-5.05L5.5 10l4.9-.17L12 5z"
                fill="#FFFFFF"
              />
            </svg>
          ))}
        </span>

        <span className="text-sm font-bold text-white">{rating}</span>
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
