import type { Metadata } from "next";

// The Workforce Ops Desk offer page (NDIS, home care, aged care).
// ⚠️ No referral, incentive or growth-promise language in this metadata
// either: the 2026 NDIS inducement ban applies to marketing copy in all
// forms, including titles, descriptions and structured data.
// Updated 2026-09-05 to carry the ratified category noun. "Managed
// operations" is a pricing decision as much as a description: the noun a
// visitor absorbs decides what they compare us to, and only this one
// invites the comparison we win, which is the next hire. It has to
// survive the search result, which is the only part of this page most
// people ever read.
// ⚠️ COMPARISON COPY, created 2026-09-05 at the founder's request so the
// repositioned care page can be compared side by side with the restored
// original at /workforce-ops-desk. This route is noindex, is linked from
// nowhere, and is not an offer page. Delete it once the comparison is done.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title:
    "[Comparison copy] The Workforce Ops Desk | Managed Operations for Australian NDIS, Home Care and Aged Care Providers | Novada",
  description:
    "Managed operations for Australian NDIS, home care and aged care providers. Our own platform captures and logs every event, our onshore people handle what needs a decision, and one named Australian company is accountable for the function: the after-hours line, rostering administration, intake and onboarding, and records kept to the 7-year statutory standard.",
  keywords: [
    "managed operations for NDIS providers",
    "after-hours coordination for care providers",
    "onshore back office for care providers",
    "NDIS workforce operations",
    "roster coordination",
    "call-off coordination",
    "aged care rostering administration",
    "home care coordination desk",
  ],
  openGraph: {
    title: "We run your back office. And we answer for it. | Novada",
    description:
      "The Workforce Ops Desk: managed operations for NDIS, home care and aged care providers. Onshore people, our own platform, and a named Australian company accountable for the function.",
    type: "website",
    locale: "en_AU",
  },
};

export default function WorkforceOpsDeskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
