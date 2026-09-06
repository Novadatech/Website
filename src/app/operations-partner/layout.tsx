import type { Metadata } from "next";

// The Workforce Ops Desk offer page (NDIS, home care, aged care).
// ⚠️ No referral, incentive or growth-promise language in this metadata
// either: the 2026 NDIS inducement ban applies to marketing copy in all
// forms, including titles, descriptions and structured data.
// THE OPERATIONS PARTNER. No pricing in metadata: the founder's direct
// decision of 6 September 2026 is that the simplified pricing is not
// displayed on the website at all.
// ⚠️ No referral, incentive or growth-promise language here either: the
// 2026 NDIS inducement ban applies to marketing copy in all forms,
// including titles, descriptions and structured data.
// ⚠️ Support24 labels the platform layer only, and never shares a
// sentence with a coverage claim.
export const metadata: Metadata = {
  title:
    "The Operations Partner | Managed Operations for Australian NDIS, Home Care and Aged Care Providers | Novada",
  description:
    "One of Novada Tech's two offers. The Operations Partner runs the operation for Australian care providers: the after-hours line answered by a person, roster and call-off coordination inside your own systems, intake administration, statutory records kept to the seven-year standard, and a structured handover every morning. Support24, our own platform, records it as it happens.",
  keywords: [
    "managed operations for NDIS providers",
    "after-hours coordination for care providers",
    "onshore back office for care providers",
    "roster coordination",
    "call-off coordination",
    "aged care rostering administration",
    "home care coordination desk",
  ],
  openGraph: {
    title: "The Operations Partner | We run your operation, and we answer for it | Novada",
    description:
      "Managed operations for NDIS, home care and aged care providers. Onshore people, our own platform, and a named Australian company accountable for the function.",
    type: "website",
    locale: "en_AU",
  },
};

export default function OperationsPartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
