import type { Metadata } from "next";

// THE WORKFORCE PARTNER. No pricing in metadata: the founder's direct
// decision of 6 September 2026 is that the simplified pricing is not
// displayed on the website at all.
//
// ⚠️ CATEGORY RAILS, and this page is the one that can breach them by
// accident. Recruitment is a FUNCTION this offer performs, never a
// category it belongs to. Never "recruitment agency", "labour hire",
// "staffing agency", "staff supply" or any hourly figure, in the title,
// the description, the keywords or the structured data. Those nouns drag
// the offer toward staffing margins and a category it deliberately and
// legally is not.
//
// ⚠️ Recruitilon labels the platform layer only, and never sits in a
// sentence claiming we employ, supply or place workers.
//
// ⚠️ No referral, incentive or growth-promise language: the 2026 NDIS
// inducement ban applies to marketing copy in all forms.
export const metadata: Metadata = {
  title:
    "The Workforce Partner | Managed Workforce Operations for Australian NDIS, Home Care and Aged Care Providers | Novada",
  description:
    "One of Novada Tech's two offers. The Workforce Partner builds and backs your workforce: recruitment run as a continuous function for your own team, onboarding administration, induction and training records kept current, and a pool of pre-screened independent workers you engage directly when a shift cannot be filled from your own people. Recruitilon, our own platform, holds the evidence.",
  keywords: [
    "managed workforce operations for NDIS providers",
    "care worker onboarding administration",
    "induction and training records for care providers",
    "worker screening records",
    "onshore back office for care providers",
    "aged care workforce administration",
    "home care workforce administration",
  ],
  openGraph: {
    title:
      "The Workforce Partner | We build and back your workforce, and we answer for the file | Novada",
    description:
      "Managed workforce operations for NDIS, home care and aged care providers. Onshore people, our own platform, and a named Australian company accountable for the worker file.",
    type: "website",
    locale: "en_AU",
  },
};

export default function WorkforcePartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
