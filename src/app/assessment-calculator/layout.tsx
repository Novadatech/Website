import type { Metadata } from "next";

// Standalone shift cover leakage calculator. A sales-call tool rather
// than a marketing page: noindex so it never competes in organic with
// /operations-partner, which argues cost replacement while this models
// revenue recovery. The two arguments should not be mixed in search.
//
// Title updated 2026-09-02: "Novada Workforce" was the retired brand and
// the note here pointed at /workforce, which was deleted on the same day.
export const metadata: Metadata = {
  title: "Shift Cover Assessment Calculator | Novada Tech",
  description:
    "Model what unfilled shifts and unrecovered cancellations cost your care operation per month.",
  robots: { index: false, follow: false },
};

export default function AssessmentCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
