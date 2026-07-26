import type { Metadata } from "next";

// Paid-ads lander (Facebook cold traffic). noindex: this page exists for
// ad campaigns, not organic search — keeps it out of SEO/duplicate-content
// consideration while the funnel runs.
export const metadata: Metadata = {
  title:
    "15+ Qualified Sales Meetings A Month, Guaranteed — $0 Upfront | Novada Tech",
  description:
    "We book 15+ qualified sales meetings a month straight onto your calendar — guaranteed in writing. $0 upfront. Pay only per booked meeting. You never pay for a meeting that doesn't happen.",
  robots: { index: false, follow: false },
};

export default function MeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
