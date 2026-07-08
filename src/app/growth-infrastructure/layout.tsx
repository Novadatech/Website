import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Growth Infrastructure™ — Authority + Outreach That Books 15+ Qualified Meetings Monthly | Novada Tech",
  description:
    "We position you as the trusted expert in your niche, then leverage that authority through our proven outbound system to book 15+ qualified sales meetings every month. No paid ads. Backed by our 90-Day Money-Back Guarantee.",
  openGraph: {
    title:
      "Growth Infrastructure™ — Authority + Outreach That Books 15+ Qualified Meetings Monthly | Novada Tech",
    description:
      "We position you as the trusted expert in your niche, then leverage that authority through our proven outbound system to book 15+ qualified sales meetings every month. No paid ads. Backed by our 90-Day Money-Back Guarantee.",
    type: "website",
    locale: "en_AU",
  },
};

export default function GrowthInfrastructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
