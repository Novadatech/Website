import type { Metadata } from "next";
import { lpSerif } from "@/lib/fonts";

import AiWorkforcePage from "./AiWorkforcePage";

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
    <div className={lpSerif.variable}>
      <AiWorkforcePage />
    </div>
  );
}
