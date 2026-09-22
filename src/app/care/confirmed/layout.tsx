import type { Metadata } from "next";

// noindex: reachable only via the calendar redirect, never from search.
// It is a conversion page, so an indexed copy would both leak the funnel
// and let a search visitor fire a conversion they never earned.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function ConfirmedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
