import type { Metadata } from "next";

// DESIGN TEST — Growth Infrastructure content on the home page's
// Morningside spine. noindex so search engines never see a duplicate
// of /linkedin-growth while the variant is being evaluated.
export const metadata: Metadata = {
  title:
    "Growth Infrastructure™ — 15+ Qualified Meetings Monthly | Novada Tech",
  description:
    "Authority + outreach that books 15+ qualified sales meetings every month. Backed by our 90-Day Money-Back Guarantee.",
  robots: { index: false, follow: false },
};

export default function LinkedinGrowthV2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
