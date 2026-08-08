import type { Metadata } from "next";

// Novada Workforce — After-Hours Workforce Operations (single-page B2B
// lander, AU market). Indexable: this page doubles as the organic home
// for the offer (brief §36). Chrome-free route: ConditionalNav renders
// no site Navbar/Footer here — the page carries its own nav + footer
// because Novada Workforce is presented as its own brand.
export const metadata: Metadata = {
  title:
    "After-Hours Workforce Operations for Healthcare Staffing Agencies | Novada Workforce",
  description:
    "Novada Workforce operates after-hours staffing workflows for healthcare, home care and disability staffing agencies, including cancellations, urgent bookings, worker replacement and workforce coordination.",
  // Overrides the root layout's keywords (which include "Melbourne,
  // Australia") — this page must carry no geographic signals.
  keywords: [
    "after-hours workforce operations",
    "healthcare staffing after-hours support",
    "after-hours rostering",
    "healthcare workforce coordination",
    "home care staffing operations",
    "disability staffing operations",
    "after-hours shift replacement",
  ],
  openGraph: {
    title:
      "After-Hours Workforce Operations for Healthcare Staffing Agencies | Novada Workforce",
    description:
      "More after-hours shifts filled. Fewer managers on-call. Novada Workforce operates your after-hours staffing desk within your existing systems and approved procedures.",
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
