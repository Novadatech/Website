import type { Metadata } from "next";

// Novada Workforce — After-Hours Workforce Operations (single-page B2B
// lander, US market — duplicate of /workforce). Indexable: this page doubles as the organic home
// for the offer (brief §36). Chrome-free route: ConditionalNav renders
// no site Navbar/Footer here — the page carries its own nav + footer
// because Novada Workforce is presented as its own brand.
export const metadata: Metadata = {
  title:
    "After-Hours Workforce Operations for U.S. Healthcare, Home Care & Senior Care Providers | Novada Workforce",
  description:
    "Novada Workforce runs the after-hours staffing desk for U.S. healthcare, home care and senior care providers: caregiver call-offs, urgent shift requests, replacement coordination and client communication, handled inside your existing scheduling systems.",
  // Overrides the root layout's keywords. NOTE: the page is deliberately
  // AUSTRALIAN-focused (user directive 2026-08-18, reversing the earlier
  // geo-free rule) — the audience is AU healthcare/aged care/NDIS.
  keywords: [
    "after-hours workforce operations",
    "home care after-hours support",
    "caregiver call-off coverage",
    "home health scheduling support",
    "after-hours on-call coordination",
    "PRN shift replacement",
    "healthcare staffing after-hours support",
  ],
  openGraph: {
    title:
      "After-Hours Workforce Operations for U.S. Healthcare, Home Care & Senior Care Providers | Novada Workforce",
    description:
      "More after-hours shifts filled. Fewer managers on-call. Novada Workforce runs the after-hours staffing desk for U.S. healthcare, home care and senior care providers, inside your existing systems and approved procedures.",
    type: "website",
    locale: "en_US",
  },
};

export default function Workforce2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
