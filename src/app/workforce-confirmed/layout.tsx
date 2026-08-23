import type { Metadata } from "next";

// Booking confirmation for the Novada Workforce Cost Review calendar.
// noindex: leads only ever arrive here via the calendar redirect.
export const metadata: Metadata = {
  title: "Cost Review Booked | Novada Workforce",
  description:
    "Your After-Hours Cost Review is booked. Here's what happens next.",
  robots: { index: false, follow: false },
};

export default function WorkforceConfirmedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
