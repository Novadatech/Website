import type { Metadata } from "next";

// Ember-skinned A/B variant of /meetings (Meta split test). Identical
// content and metadata; noindex like the primary lander.
export const metadata: Metadata = {
  title:
    "15+ Qualified Sales Meetings A Month, Guaranteed — $0 Upfront | Novada Tech",
  description:
    "We book 15+ qualified sales meetings a month straight onto your calendar — guaranteed in writing. $0 upfront. Pay only per booked meeting. You never pay for a meeting that doesn't happen.",
  robots: { index: false, follow: false },
};

export default function MeetingsBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
