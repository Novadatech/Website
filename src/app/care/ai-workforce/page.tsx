import type { Metadata } from "next";

import AiWorkforcePage from "./AiWorkforcePage";

/*
 * /care/ai-workforce — NOVADA AI WORKFORCE, the third care landing page.
 *
 * 🔴 THIS FILE IS A THIN SERVER WRAPPER AND NOTHING ELSE. The page
 * itself is ./AiWorkforcePage.tsx, a client component (it mounts the
 * testimonial slider), and Next does not allow a `metadata` export from
 * a client component. Same arrangement as /care/rostering and
 * /care/workforce.
 *
 * ⚠️ DO NOT ADD A layout.tsx TO THIS FOLDER to hold the metadata
 * instead. ./confirmed has its own layout carrying the noindex that
 * keeps the conversion page out of search, and a second layout in the
 * same subtree is how a confirmation page ends up titled like a sales
 * page.
 *
 * ══════════════════════════════════════════════════════════════════════
 * ✅ INDEXED, like both twins, since 8 November 2026. There is NO
 * `robots` block here any more and there should not be one.
 *
 * This page shipped noindex because its calendar did not exist yet and a
 * page whose only action cannot be taken should not collect search
 * traffic. The calendar arrived, #book carries a real embed, and
 * `indexed: true` in offers.ts returns the route to the sitemap.
 *
 * ⚠️ IF A FUTURE OFFER PAGE NEEDS THE SAME TREATMENT, noindex and
 * `indexed: false` travel together. Setting one without the other
 * produces a page that is in the sitemap and refuses to be indexed,
 * which Search Console reports against the whole property.
 * ══════════════════════════════════════════════════════════════════════
 */
export const metadata: Metadata = {
  title: "Novada AI Workforce for NDIS and aged care | Novada Tech",
  description:
    "AI employees for Australian NDIS, aged care and home care providers. Coordinate routine tasks, follow up outstanding actions and execute approved workflows across your existing systems, with human oversight and one Control Centre.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "Novada AI Workforce for NDIS and aged care | Novada Tech",
    description:
      "Five specialised AI employees for rostering, compliance, HR, after-hours and operations. You keep every important decision.",
    type: "website",
  },
};

export default function Page() {
  return <AiWorkforcePage />;
}
