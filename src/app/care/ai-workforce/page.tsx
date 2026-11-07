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
 * 🔴 THE `robots` BLOCK BELOW IS TEMPORARY AND DELIBERATE, and it is
 * the OPPOSITE of both twins, which are indexed.
 *
 * The founder is supplying this offer's booking calendar separately, so
 * #book currently carries a placeholder rather than an embed. A page
 * whose only action cannot be taken should not be collecting search
 * traffic, so it is noindex and it is absent from sitemap.ts.
 *
 * CLEARING IT IS NOT A SEPARATE DECISION. It is step two of the handover
 * written at the top of AiWorkforcePage.tsx:
 *   1. add a `care-ai-workforce` key to Desk and CALENDARS in
 *      src/components/desk/BookingEmbed.tsx with the supplied id
 *   2. swap the placeholder in #book for <BookingEmbed
 *      desk="care-ai-workforce" source="care-ai-workforce" tone="dark" />
 *   3. delete the `robots` block below
 *   4. add the route to src/app/sitemap.ts
 *   5. point the calendar's redirect at /care/ai-workforce/confirmed,
 *      which is already built and already noindex
 * All five, or none. A half-done handover is a live page that either
 * cannot be booked or cannot be found.
 * ══════════════════════════════════════════════════════════════════════
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
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
