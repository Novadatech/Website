import type { Metadata } from "next";

// Novada Workforce — After-Hours Workforce Operations (single-page B2B
// lander, AU market). Indexable: this page doubles as the organic home
// for the offer (brief §36). Chrome-free route: ConditionalNav renders
// no site Navbar/Footer here — the page carries its own nav + footer
// because Novada Workforce is presented as its own brand.
export const metadata: Metadata = {
  title:
    "After-Hours Workforce Operations for Australian Healthcare, Aged Care & NDIS Providers | Novada Workforce",
  description:
    "Novada Workforce operates after-hours staffing workflows for Australian healthcare, aged care and NDIS/disability providers, including cancellations, urgent bookings, worker replacement and workforce coordination.",
  // Overrides the root layout's keywords. NOTE: the page is deliberately
  // AUSTRALIAN-focused (user directive 2026-08-18, reversing the earlier
  // geo-free rule) — the audience is AU healthcare/aged care/NDIS.
  keywords: [
    "after-hours workforce operations",
    "healthcare staffing after-hours support Australia",
    "aged care staffing operations",
    "NDIS workforce coordination",
    "disability staffing after-hours support",
    "after-hours rostering",
    "after-hours shift replacement",
  ],
  openGraph: {
    title:
      "After-Hours Workforce Operations for Australian Healthcare, Aged Care & NDIS Providers | Novada Workforce",
    description:
      "More after-hours shifts filled. Fewer managers on-call. Novada Workforce operates the after-hours staffing desk for Australian healthcare, aged care and NDIS/disability providers, within your existing systems and approved procedures.",
    type: "website",
    locale: "en_AU",
  },
};

export default function WorkforceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
