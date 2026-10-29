import type { Metadata } from "next";

import RevenueAuditPage from "./RevenueAuditPage";

/*
 * /practices/revenue-audit — pillar one of the practices offer.
 *
 * 🔴 THIS FILE IS A THIN SERVER WRAPPER AND NOTHING ELSE. The page
 * itself is ./RevenueAuditPage.tsx, a client component (it mounts the
 * calculator and the booking widget), and Next does not allow a
 * `metadata` export from a client component. Same arrangement as all
 * three care pages.
 *
 * ⚠️ DO NOT ADD A layout.tsx TO THIS FOLDER to hold the metadata
 * instead. ./confirmed exports no metadata of its own, so it would
 * silently inherit this title and description.
 *
 * ⚠️ NO `robots` BLOCK. This URL is indexed, sits in the generated
 * sitemap through OFFERS in offers.ts, and is the destination of the
 * /practices/workforce and /patient-access-desk redirects.
 *
 * 🔴 THE WORD "GAP" IS BANNED IN THIS METADATA TOO. In Australian
 * healthcare the gap is the patient's out-of-pocket after the rebate,
 * and a search result promising to find "billing gaps" would be read
 * by a practice principal as the opposite of what this page sells. The
 * reasoning is written out in full at the top of RevenueAuditPage.tsx.
 */
export const metadata: Metadata = {
  title: "Patient Revenue Leakage Audit for practices | Novada Tech",
  description:
    "Missed enquiries and unfilled appointments on one side. Unbilled services, rejected claims and unreconciled payments on the other. We examine both, on your practice's own records, and show you what the evidence supports.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "Patient Revenue Leakage Audit for practices | Novada Tech",
    description:
      "From the first patient enquiry through to the final payment. For Australian GP, specialist and allied health practices.",
    type: "website",
  },
};

export default function Page() {
  return <RevenueAuditPage />;
}
