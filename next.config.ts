import type { NextConfig } from "next";

/**
 * Redirects for pages retired on 2 September 2026.
 *
 * These are permanent (308) rather than temporary, because the pages are
 * gone from the codebase, not paused. Permanent tells search engines to
 * transfer the URL and stop crawling the old path. If any of these ever
 * needs reversing, note that browsers cache permanent redirects hard, so
 * plan on the old URL being unusable for a while.
 *
 * Destinations are chosen so the visitor lands somewhere that answers the
 * question they arrived with, rather than dumping everything on the home
 * page:
 *   the two Workforce landers  -> the care offer that replaced them
 *   the Workforce confirmation -> the current booking confirmation
 *   About                      -> Why Novada, which is the company page now
 *   Security                   -> the privacy policy, its nearest equivalent
 *   everything else            -> home
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      /* ── Novada Workforce, superseded by the Desk positioning ── */
      { source: "/workforce", destination: "/workforce-ops-desk", permanent: true },
      { source: "/workforce-2", destination: "/workforce-ops-desk", permanent: true },
      { source: "/workforce-confirmed", destination: "/review-confirmed", permanent: true },

      /* ── Legacy meetings service funnel ── */
      { source: "/meetings", destination: "/", permanent: true },
      { source: "/meetings-b", destination: "/", permanent: true },
      { source: "/get-meetings", destination: "/", permanent: true },
      { source: "/apply", destination: "/", permanent: true },
      { source: "/book-call", destination: "/", permanent: true },
      { source: "/sales-closer", destination: "/", permanent: true },
      { source: "/sales-closer2", destination: "/", permanent: true },

      /* ── Retired service pages ── */
      { source: "/growth-infrastructure", destination: "/", permanent: true },
      { source: "/operations-infrastructure", destination: "/", permanent: true },
      { source: "/ai-consulting", destination: "/", permanent: true },

      /* ── Retired company pages ── */
      { source: "/about", destination: "/why-novada", permanent: true },
      { source: "/security", destination: "/privacy-policy", permanent: true },
      { source: "/onboarding-booked", destination: "/", permanent: true },
      { source: "/onboarding-support", destination: "/", permanent: true },

      /* ── Older URLs that pointed at pages now retired ── */
      { source: "/linkedin-growth", destination: "/", permanent: true },
      { source: "/linkedin-growth-v2", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
