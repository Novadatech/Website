"use client";

/*
 * Proof stack, restored on founder instruction 2026-08-27 ("bring the
 * proof stack back now: rating, 350+ businesses, stats, case studies,
 * tailored to healthcare"). This overrides brief section 8, which had
 * banned proof pending legal review.
 *
 * ⚠️ EVERY CLAIM HERE IS TRUE AND ALREADY IN USE ELSEWHERE ON THE SITE.
 * Nothing is invented, and nothing is restated to imply healthcare
 * specificity it does not have:
 *  - 4.9/5 from 77+ reviews, 350+ businesses, 30+ industries are
 *    whole-of-business figures, worded so they cannot be read as "350+
 *    healthcare desks".
 *  - The genuinely healthcare-specific proof is the operating desk that
 *    already answers overnight for Australian care providers. That is the
 *    lead item, because it is the only claim that is both true and
 *    on-offer.
 *
 * ⚠️ TRUSTPILOT COMPLIANCE (standing rule): the rating is UNBRANDED. Never
 * name Trustpilot, never use their logo, brand green or tile stars, and
 * never link to trustpilot.com. The rating is NOT a link at all:
 * founder removed it 2026-08-27 because /case-study holds the legacy
 * service's case studies, which are not this offer and not these clients.
 *
 * ⛔ NEVER add here: "15+ qualified meetings monthly, guaranteed" (wrong
 * offer, and the brief bans guarantees) or revenue-generated figures
 * (performance claim, Australian Consumer Law risk).
 */

import { motion } from "framer-motion";
import { Star } from "lucide-react";

type Tone = "light" | "dark";

/* Industries are the real served list from the previous site, reordered
   so the healthcare verticals lead. Reordering is honest; adding
   verticals we have not served would not be. */
const INDUSTRIES = [
  "Healthcare & Allied Health",
  "Accounting & Tax",
  "Architecture & Design",
  "B2B Consulting",
  "Executive Coaching",
  "Legal Services",
  "Financial Advisory",
  "Insurance Broking",
  "Real Estate",
  "Recruitment",
  "SaaS & Tech",
  "E-commerce",
];

const STATS = [
  { num: "365", label: "nights a year our desk answers" },
  { num: "350+", label: "Australian businesses supported" },
  { num: "30+", label: "industries, healthcare and allied health included" },
  { num: "4.9", label: "average from 77+ independent client reviews" },
];

export function TrustLine({
  tone = "light",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const dim = tone === "dark" ? "text-white/55" : "text-[#5A6676]";
  const strong = tone === "dark" ? "text-white" : "text-[#0E1116]";

  return (
    <div className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${className}`}>
      <span className="flex items-center gap-2">
        <span className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-3.5 w-3.5 fill-[#003DDB] text-[#003DDB]"
              strokeWidth={0}
            />
          ))}
        </span>
        <span className={`text-sm ${dim}`}>
          <span className={`font-semibold ${strong}`}>4.9/5</span> from 77+
          independent client reviews
        </span>
      </span>
      <span className={`text-sm ${dim}`}>
        <span className={`font-semibold ${strong}`}>350+</span> Australian
        businesses supported
      </span>
    </div>
  );
}

export function IndustryMarquee({ tone = "light" }: { tone?: Tone }) {
  const isDark = tone === "dark";
  return (
    <section
      className={
        isDark
          ? "overflow-hidden border-y border-white/10 bg-[#080B12] py-10"
          : "overflow-hidden border-y border-[#E2E7EE] bg-white py-10"
      }
    >
      <p
        className={`mb-7 px-5 text-center text-[11px] font-semibold uppercase tracking-[0.18em] ${
          isDark ? "text-white/40" : "text-[#8FA0C4]"
        }`}
      >
        350+ Australian businesses across 30+ industries
      </p>
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 items-center gap-14"
        >
          {[...INDUSTRIES, ...INDUSTRIES].map((industry, i) => (
            <span
              key={i}
              className={`flex-shrink-0 whitespace-nowrap text-lg md:text-xl ${
                industry.startsWith("Healthcare")
                  ? "font-semibold text-[#003DDB]"
                  : isDark
                    ? "font-light text-white/35"
                    : "font-light text-[#8FA0C4]"
              }`}
            >
              {industry}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function StatsMarquee({ tone = "light" }: { tone?: Tone }) {
  const isDark = tone === "dark";
  return (
    <section
      className={
        isDark ? "overflow-hidden bg-[#0B1E4B] py-16 md:py-20" : "overflow-hidden bg-[#0B1E4B] py-16 md:py-20"
      }
    >
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {[...STATS, ...STATS].map((s, i) => (
            <div
              key={i}
              className="w-[280px] flex-shrink-0 px-8 text-center md:w-[340px]"
            >
              <p className="font-condensed text-[46px] font-bold leading-none text-white md:text-[58px]">
                {s.num}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#9FB3E8] md:text-base">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
      <p className="mt-10 px-5 text-center text-[11px] uppercase tracking-[0.14em] text-[#9FB3E8]/60">
        Figures cover Novada Tech across all services. Desk performance is
        measured and reported per client, monthly.
      </p>
    </section>
  );
}
