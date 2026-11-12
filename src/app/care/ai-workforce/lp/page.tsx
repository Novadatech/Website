import type { Metadata } from "next";
import { lpSerif } from "@/lib/fonts";

import AiWorkforcePage from "../AiWorkforcePage";

/*
 * ⚠️ THE SERIF DISPLAY FACE, APPLIED ON THIS ROUTE ONLY. The single
 * declaration lives in src/lib/fonts.ts; applying `lpSerif.variable`
 * here rather than in src/app/layout.tsx is what keeps the family off
 * every route that does not use it.
 *
 * 🔴 DO NOT DECLARE Bitter() HERE AGAIN. Seven separate declarations
 * raced at build time and broke the Vercel build twice. The note in
 * src/lib/fonts.ts has the whole story.
 */

/*
 * ══════════════════════════════════════════════════════════════════════
 * /care/ai-workforce/lp — THE META ADS LANDING PAGE FOR THE CARE AI
 * WORKFORCE OFFER. Built 13 November 2026.
 *
 * 🔴 THE PAGE ITSELF IS ../AiWorkforcePage.tsx, THE SAME FILE THE
 * ORGANIC ROUTE RENDERS. It is not a copy, and it must not become one.
 * The whole difference is variant="ads": no header nav, a logo that
 * does not leave the page, a minimal footer, and its own booking
 * attribution. Copy, claims and layout are shared, so an edit to the
 * offer reaches the paid page automatically.
 *
 * 🔴 noindex, AND THAT IS NOT OPTIONAL. This page is a near-exact
 * duplicate of /care/ai-workforce, which IS indexed and sits in the
 * sitemap. Two near-identical URLs competing for the same query is how
 * a site splits its own ranking signals, and Search Console reports
 * the duplication against the whole property. It is reached from a paid
 * ad, never from search.
 *
 * ⚠️ IT IS ABSENT FROM sitemap.ts FOR FREE, because that file is built
 * from OFFERS in content/offers.ts and this route is not an offer. Do
 * not "fix" that by adding it.
 *
 * ⚠️ DO NOT ADD A layout.tsx HERE. ../confirmed has its own carrying
 * its noindex, and a second layout in the same subtree is how a
 * confirmation page ends up titled like a sales page.
 *
 * ⚠️ THE BOOKING STILL REDIRECTS TO ../confirmed, which is correct and
 * deliberate: the calendar owns that redirect, the confirmation page
 * fires the Meta Schedule event, and a paid visitor who has already
 * converted is allowed to see the full footer.
 * ══════════════════════════════════════════════════════════════════════
 */
export const metadata: Metadata = {
  title: "Novada AI Workforce for NDIS and aged care | Novada Tech",
  description:
    "AI employees for Australian NDIS, aged care and home care providers. They run rostering, compliance, HR and payroll, after-hours calls and claims administration inside the systems you already use, with every action recorded and the decisions still yours.",
  robots: { index: false, follow: false },
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
  return (
    <div className={lpSerif.variable}>
      <AiWorkforcePage variant="ads" />
    </div>
  );
}
