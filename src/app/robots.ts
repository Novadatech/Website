import type { MetadataRoute } from "next";

/*
 * Both robots.txt and sitemap.xml returned 404 until 16 September 2026.
 *
 * Generated rather than static so the host is declared once, here, and the
 * sitemap cannot drift from the routes that actually exist.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    /*
     * 🔴 THE FOUR REAL CONFIRMATION PAGES ARE DELIBERATELY NOT LISTED
     * HERE, and must not be re-added:
     *     /care/rostering/confirmed
     *     /care/workforce/confirmed
     *     /practices/revenue-audit/confirmed
     *     /practices/patient-booking/confirmed
     *     /confirmed-call
     * Each one now carries `robots: { index: false, follow: false }` in
     * its own layout.tsx. A Disallow on top of that is an own goal: the
     * crawler obeys the Disallow, never fetches the page, never reads
     * the noindex, and the URL can still be indexed from any external
     * link. Google's guidance is explicit that a noindex only works on a
     * page that is NOT blocked here. Allow the crawl, refuse the index.
     *
     * ⚠️ What remains below is the three REDIRECT-ONLY aliases.
     * They have no page of their own to carry a noindex, so blocking
     * them here is the only lever there is.
     */
    rules: [{ userAgent: "*", allow: "/", disallow: [
        "/review-confirmed",
        "/practices/confirmed",
        "/care/confirmed",
      ] }],
    sitemap: "https://novadatech.com.au/sitemap.xml",
  };
}
