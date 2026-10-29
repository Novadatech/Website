import type { Metadata } from "next";

import CarePage from "./CarePage";

/*
 * /care — the care audience hub.
 *
 * 🔴 THIS FILE IS A THIN SERVER WRAPPER AND NOTHING ELSE. The page
 * itself is ./CarePage.tsx, a client component (it mounts the
 * testimonial slider), and Next does not allow a `metadata` export from
 * a client component. Same arrangement as /care/rostering and
 * /care/workforce.
 *
 * ⚠️ DO NOT ADD A layout.tsx TO THIS FOLDER to hold the metadata
 * instead. Everything under /care/* would inherit it, including both
 * pillar pages and both confirmation pages, which declare their own.
 *
 * ⚠️ NO `robots` BLOCK. This URL is indexed and sits in the generated
 * sitemap through AUDIENCES in offers.ts. It is also the destination of
 * the home page's care door. A noindex here would take all of that out
 * of search.
 *
 * The title and description track the page: the previous ones described
 * the build this replaced, whose framing ("make better use of the
 * workforce you have, and build the workforce you need") is no longer
 * the copy on the page.
 */
export const metadata: Metadata = {
  title: "NDIS and aged care operations and workforce | Novada Tech",
  description:
    "Control workforce costs, protect revenue and build a workforce you can rely on. Two services for Australian NDIS and aged care providers: a Rostering Audit & Efficiency review, and ongoing Workforce Continuity support.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "NDIS and aged care operations and workforce | Novada Tech",
    description:
      "One reviews what your operation costs and what it fails to collect. The other builds the workforce behind it. Available independently.",
    type: "website",
  },
};

export default function Page() {
  return <CarePage />;
}
