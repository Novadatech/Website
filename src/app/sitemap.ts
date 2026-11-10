import type { MetadataRoute } from "next";
import { OFFERS } from "@/content/offers";

/*
 * ⚠️ BUILT FROM THE CONTENT MODEL, not a hand-written list. The previous
 * version was hand-written and still named /patient-access-desk and
 * /workforce-desk the day after both moved under /practices, which is
 * exactly the failure a generated sitemap cannot have.
 *
 * /review-confirmed is deliberately absent: it is reached only through
 * the calendar redirect, it is noindex, and it is the conversion page.
 * /book is absent for the same reason, it is a shareable link rather
 * than a page we want indexed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://novadatech.com.au";
  const now = new Date();

  /*
   * 🔴 FOUR PAGES PLUS THE TWO LEGAL ONES, since 10 November 2026.
   *
   * ⚠️ AUDIENCES IS NO LONGER LISTED SEPARATELY. Both audience hrefs
   * now point AT the offer pages, because the hubs they used to point
   * at are archived. Listing both would put each offer URL in the
   * sitemap twice.
   *
   * ⚠️ `indexed === false` IS FILTERED OUT, not listed and ignored.
   * /practices/ai-workforce is noindex until its booking calendar
   * exists. Listing a noindex URL tells Google to index a page that
   * tells Google not to, and Search Console reports the conflict
   * against the whole property.
   */
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...OFFERS.filter((o) => o.indexed !== false).map((o) => ({
      url: `${base}${o.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${base}/why-novada`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
