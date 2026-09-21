import type { MetadataRoute } from "next";
import { AUDIENCES, OFFERS } from "@/content/offers";

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

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...AUDIENCES.map((a) => ({
      url: `${base}${a.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...OFFERS.map((o) => ({
      url: `${base}${o.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/why-novada`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
