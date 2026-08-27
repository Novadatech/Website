import type { Metadata } from "next";

// Booking confirmation for the Desk review calendar.
// noindex: reachable only via the calendar redirect, never from search.
export const metadata: Metadata = {
  title: "Desk Review Booked | Novada Tech",
  description: "Your desk review is confirmed. Here's what happens next.",
  robots: { index: false, follow: false },
};

export default function ReviewConfirmedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
