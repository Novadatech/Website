import type { Metadata } from "next";

// Standalone after-hours leakage calculator. A sales-call tool rather
// than a marketing page: noindex so it never competes in organic with
// /workforce-ops-desk, which argues cost replacement while this models
// revenue recovery. The two arguments should not be mixed in search.
//
// Title updated 2026-09-02: "Novada Workforce" was the retired brand and
// the note here pointed at /workforce, which was deleted on the same day.
export const metadata: Metadata = {
  title: "After-Hours Assessment Calculator | Novada Tech",
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
