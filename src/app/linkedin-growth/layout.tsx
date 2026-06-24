import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "LinkedIn Growth System™ — Authority + Outreach That Books 15+ Qualified Meetings Monthly | Novada Tech",
  description:
    "Become the obvious choice in your industry — and wake up to qualified meetings already booked on your calendar. Authority video content + LinkedIn outreach + done-for-you appointment setting. 15+ qualified meetings per month, guaranteed or you don't pay.",
  openGraph: {
    title:
      "LinkedIn Growth System™ — Authority + Outreach That Books 15+ Qualified Meetings Monthly | Novada Tech",
    description:
      "Become the obvious choice in your industry — and wake up to qualified meetings already booked on your calendar. Authority video content + LinkedIn outreach + done-for-you appointment setting. 15+ qualified meetings per month, guaranteed or you don't pay.",
    type: "website",
    locale: "en_AU",
  },
};

export default function LinkedinGrowthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
