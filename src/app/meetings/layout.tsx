import type { Metadata } from "next";

// Paid-ads lander (Facebook cold traffic). noindex: this page exists for
// ad campaigns, not organic search — keeps it out of SEO/duplicate-content
// consideration while the funnel runs.
export const metadata: Metadata = {
  title:
    "Qualified Sales Meetings, Booked For You — $0 Upfront | Novada Tech",
  description:
    "We book qualified sales meetings straight onto your calendar — and you only pay when we do. $0 upfront. No retainers. No lock-in. Cancelled meetings automatically refunded.",
  robots: { index: false, follow: false },
};

export default function MeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
