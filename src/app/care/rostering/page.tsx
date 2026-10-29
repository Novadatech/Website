import type { Metadata } from "next";

import RosteringPage from "./RosteringPage";

/*
 * /care/rostering — pillar one of the care offer.
 *
 * 🔴 THIS FILE IS A THIN SERVER WRAPPER AND NOTHING ELSE. The page
 * itself is ./RosteringPage.tsx, a client component (it mounts the
 * calculator, the testimonial slider and the booking widget), and Next
 * does not allow a `metadata` export from a client component. So the
 * metadata lives here and the UI lives there.
 *
 * ⚠️ DO NOT ADD A layout.tsx TO THIS FOLDER to hold the metadata
 * instead. /care/rostering/confirmed exports no metadata of its own, so
 * it would silently inherit this title and description.
 *
 * ⚠️ NO `robots` BLOCK. The page this replaced was built at
 * /care/rostering2 under `robots: { index: false }` because it was a
 * review page. This URL is indexed, is in the generated sitemap through
 * OFFERS in offers.ts, and is the destination of fifteen redirects and
 * the live Meta campaign. A noindex here would take all of that out of
 * search.
 *
 * The description tracks the page: the previous one described the
 * PillarPage build ("money leaves in two directions", "findings inside
 * two weeks"), and none of that copy is on the page any more.
 */
export const metadata: Metadata = {
  title: "Rostering Audit & Efficiency for NDIS and aged care | Novada Tech",
  description:
    "Avoidable overtime and agency cover raise the cost of delivering care. Unbilled services and rejected claims leave legitimate revenue uncollected. We examine both sides, using your own records.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "Rostering Audit & Efficiency for NDIS and aged care | Novada Tech",
    description:
      "One provider. Two ways to lose money. We examine both, on your own records.",
    type: "website",
  },
};

export default function Page() {
  return <RosteringPage />;
}
