import type { Metadata } from "next";

// Booking confirmation for the Novada Workforce assessment calendar.
// noindex: leads only ever arrive here via the calendar redirect.
export const metadata: Metadata = {
  title: "Assessment Booked | Novada Workforce",
  description:
    "Your After-Hours Operations Assessment is booked. Here's what happens next.",
  robots: { index: false, follow: false },
};

export default function WorkforceConfirmedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
