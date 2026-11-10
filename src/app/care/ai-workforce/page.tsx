import type { Metadata } from "next";
import { Bitter } from "next/font/google";

import AiWorkforcePage from "./AiWorkforcePage";

/*
 * ⚠️ A SERIF DISPLAY FACE, FOR THIS ROUTE ONLY, AND IT IS A BRAND
 * DEPARTURE THE FOUNDER ACCEPTED ON 10 NOVEMBER 2026.
 *
 * The rest of this estate sets display type in Barlow Condensed,
 * uppercase. This page sets its headings in a slab serif, sentence
 * case, centred, because the founder asked for the headline treatment
 * of the page this one was modelled on. Bitter is the closest free
 * match to that page's Sentinel.
 *
 * 🔴 IT IS DECLARED HERE, IN THE SERVER WRAPPER, AND NOT IN
 * src/app/layout.tsx. Adding it to the root layout downloads a fourth
 * font family on every page of the site to serve one route. The
 * variable is attached to the wrapper below, so it exists only inside
 * this page's subtree.
 *
 * TO REVERT TO THE HOUSE FACE: delete this import, the `bitter` const
 * and the wrapper div, then swap the SERIF constant in
 * ./AiWorkforcePage.tsx for `font-condensed uppercase`.
 */
const bitter = Bitter({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-lp-serif",
});

/*
 * /care/ai-workforce — NOVADA AI WORKFORCE.
 *
 * 🔴 THIN SERVER WRAPPER. The page is ./AiWorkforcePage.tsx, a client
 * component, and Next does not allow a `metadata` export from one.
 *
 * ⚠️ DO NOT ADD A layout.tsx TO THIS FOLDER. ./confirmed has its own
 * carrying the noindex that keeps the conversion page out of search,
 * and a second layout in the same subtree is how a confirmation page
 * ends up titled like a sales page.
 *
 * ✅ INDEXED. There is no `robots` block here and there should not be
 * one. ⚠️ If a future offer page ever needs noindex, remember that
 * noindex and `indexed: false` in offers.ts travel together: setting
 * one without the other produces a page that is in the sitemap and
 * refuses to be indexed, which Search Console reports against the
 * whole property.
 */
export const metadata: Metadata = {
  title: "Novada AI Workforce for NDIS and aged care | Novada Tech",
  description:
    "AI employees for Australian NDIS, aged care and home care providers. They run rostering, compliance, HR and payroll, after-hours calls and claims administration inside the systems you already use, with every action recorded and the decisions still yours.",
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
      <AiWorkforcePage />
    </div>
  );
}
