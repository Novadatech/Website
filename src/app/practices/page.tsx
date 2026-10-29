import type { Metadata } from "next";

import PracticesPage from "./PracticesPage";

/*
 * /practices — the practices audience hub.
 *
 * 🔴 THIS FILE IS A THIN SERVER WRAPPER AND NOTHING ELSE. The page
 * itself is ./PracticesPage.tsx, a client component (it mounts the FAQ
 * and the door cards), and Next does not allow a `metadata` export from
 * a client component. Same arrangement as /care and the four offer
 * pages.
 *
 * 🔴 DO NOT ADD A layout.tsx TO THIS FOLDER. Everything under
 * /practices/* would inherit it, including both pillar pages and, worse,
 * both confirmation pages, whose own layouts carry the noindex that
 * keeps them out of search.
 *
 * ⚠️ NO `robots` BLOCK HERE. This URL is indexed and sits in the
 * generated sitemap through AUDIENCES in offers.ts. It is also the
 * destination of the home page's practices door.
 *
 * 🔴 NO "GAP" IN THIS METADATA. In Australian healthcare the gap is the
 * patient's out-of-pocket after the rebate, so a search result
 * promising to find "billing gaps" reads to a practice principal as the
 * opposite of what we sell. Full reasoning at the top of
 * PracticesPage.tsx.
 */
export const metadata: Metadata = {
  title: "Practice operations and revenue assurance | Novada Tech",
  description:
    "Better patient access, stronger revenue assurance and less front-desk pressure. Two services for Australian GP, specialist and allied health practices: a one-off Patient Revenue Leakage Audit, and ongoing Patient Booking & Retention Continuity.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "Practice operations and revenue assurance | Novada Tech",
    description:
      "One finds where revenue is leaking between the enquiry and the payment. The other runs the administration behind it. Available independently.",
    type: "website",
  },
};

export default function Page() {
  return <PracticesPage />;
}
