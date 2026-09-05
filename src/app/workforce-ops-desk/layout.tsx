import type { Metadata } from "next";

// The Workforce Ops Desk offer page (NDIS, home care, aged care).
// ⚠️ No referral, incentive or growth-promise language in this metadata
// either: the 2026 NDIS inducement ban applies to marketing copy in all
// forms, including titles, descriptions and structured data.
export const metadata: Metadata = {
  title:
    "The Workforce Ops Desk | Rostering and After-Hours Coordination for Australian Care Providers | Novada",
  description:
    "Real people, onshore in Australia, running the coordination desk for NDIS, home care and aged care providers: rostering administration, after-hours call handling and call-off coordination, intake and onboarding admin, and compliance records kept to the 7-year statutory standard.",
  keywords: [
    "after-hours coordination for care providers",
    "NDIS workforce operations",
    "roster coordination",
    "call-off coordination",
    "aged care rostering administration",
    "home care coordination desk",
  ],
  openGraph: {
    title:
      "Add operations capacity. Not another coordinator's salary. | Novada",
    description:
      "The Workforce Ops Desk: rostering administration, after-hours cover, intake and the records, inside your existing systems, measured and reported monthly.",
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
