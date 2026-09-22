import type { MetadataRoute } from "next";

/*
 * Both robots.txt and sitemap.xml returned 404 until 16 September 2026.
 *
 * Generated rather than static so the host is declared once, here, and the
 * sitemap cannot drift from the routes that actually exist.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/review-confirmed", "/care/confirmed"] }],
    sitemap: "https://novadatech.com.au/sitemap.xml",
  };
}
