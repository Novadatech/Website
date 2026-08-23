import type { Metadata } from "next";

// Standalone after-hours leakage calculator. Sales-call tool rather than
// a marketing page: noindex so it never competes with /workforce in
// search (that page argues cost replacement; this one models revenue
// recovery, and the two arguments should not be mixed in organic).
export const metadata: Metadata = {
  title: "After-Hours Assessment Calculator | Novada Workforce",
  description:
    "Model what unfilled after-hours bookings and unrecovered cancellations cost per month.",
  robots: { index: false, follow: false },
};

export default function AssessmentCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
