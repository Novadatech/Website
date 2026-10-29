import type { Metadata } from "next";

import WorkforcePage from "./WorkforcePage";

/*
 * /care/workforce — pillar two of the care offer.
 *
 * 🔴 THIS FILE IS A THIN SERVER WRAPPER AND NOTHING ELSE. The page
 * itself is ./WorkforcePage.tsx, a client component (it mounts the
 * testimonial slider and the booking widget), and Next does not allow a
 * `metadata` export from a client component. So the metadata lives here
 * and the UI lives there. Same arrangement as /care/rostering.
 *
 * ⚠️ DO NOT ADD A layout.tsx TO THIS FOLDER to hold the metadata
 * instead. /care/workforce/confirmed already has its own layout with
 * its own metadata, and a second one in the same subtree is how a
 * confirmation page ends up titled like a sales page.
 *
 * ⚠️ NO `robots` BLOCK. This URL is indexed, sits in the generated
 * sitemap through OFFERS in offers.ts, and is the destination of the
 * /workforce-partner redirect. A noindex here would take all of that
 * out of search.
 *
 * The title and description track the page: the previous ones described
 * the PillarPage build ("your own relief pool", "payroll on your own
 * cycle"), and that copy is no longer on the page.
 */
export const metadata: Metadata = {
  title: "Workforce Continuity for NDIS and aged care | Novada Tech",
  description:
    "Stop chasing workers and filling last-minute vacancies. Proactive recruitment, screening, onboarding, induction, training administration and ongoing compliance monitoring, so your workforce is ready before the roster needs it.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "Workforce Continuity for NDIS and aged care | Novada Tech",
    description:
      "Build a workforce you can rely on. You stay the employer and choose every hire.",
    type: "website",
  },
};

export default function Page() {
  return <WorkforcePage />;
}
