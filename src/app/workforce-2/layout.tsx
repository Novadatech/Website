import type { Metadata } from "next";

// Novada Workforce: Outsourced After-Hours Coordination (single-page B2B
// lander, US market). Rebuilt 2026-08-23 to the After-Hours Coordination
// Offer Blueprint with US-specific economics. Chrome-free route:
// ConditionalNav renders no site Navbar/Footer here because Novada
// Workforce is presented as its own brand.
export const metadata: Metadata = {
  title:
    "Outsourced After-Hours Coordination for U.S. Home Care Agencies | Novada Workforce",
  description:
    "Trained coordinators run your after-hours desk: caregiver call-offs, shift coverage, schedule updates, client and family calls, incident escalation and a written handoff every morning. For home care, home health, senior care and staffing agencies.",
  // Overrides the root layout's keywords (which carry AU geo signals).
  // "after hours on call" is the buyer's own search phrase; the category
  // name itself has no organic volume yet and must be taught.
  keywords: [
    "outsourced after-hours coordination",
    "after hours on call service home care agency",
    "home care after hours answering",
    "caregiver call-off coverage",
    "after hours scheduling coordinator outsourcing",
    "home health after hours support",
    "on call staffing coordinator service",
  ],
  openGraph: {
    title:
      "Outsourced After-Hours Coordination for U.S. Home Care Agencies | Novada Workforce",
    description:
      "The after-hours coordination team you don't have to employ. Call-offs answered, coverage arranged from your approved caregivers, schedules updated, escalation under your rules, and a written handoff every morning.",
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
