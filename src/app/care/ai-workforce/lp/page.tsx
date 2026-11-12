import type { Metadata } from "next";
import { Bitter } from "next/font/google";

import AiWorkforcePage from "../AiWorkforcePage";

/*
 * ⚠️ THE SERIF FACE IS DECLARED PER ROUTE, AND THIS ROUTE NEEDS ITS OWN
 * COPY. `SERIF` in components/lp/kit.tsx resolves var(--font-lp-serif),
 * which is set by a next/font declaration in each route's own server
 * component, deliberately: the root layout is inherited by every page,
 * so declaring it there downloads a fourth family site-wide.
 *
 * 🔴 A ROUTE THAT FORGETS THIS STILL COMPILES AND STILL RENDERS. Every
 * heading just falls back to Georgia and the page looks nearly right,
 * which on the one page an ad is paying for is the expensive kind of
 * nearly. next/font dedupes the actual download, so the copy is free.
 */
const bitter = Bitter({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-lp-serif",
});

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
    <div className={bitter.variable}>
      <AiWorkforcePage variant="ads" />
    </div>
  );
}
