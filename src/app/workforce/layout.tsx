import type { Metadata } from "next";

// Novada Workforce: Outsourced After-Hours Coordination (single-page B2B
// lander, AU market). Rebuilt 2026-08-23 to the After-Hours Coordination
// Offer Blueprint. Indexable: this page doubles as the organic home for
// the offer. Chrome-free route: ConditionalNav renders no site
// Navbar/Footer here because Novada Workforce is presented as its own
// brand.
export const metadata: Metadata = {
  title:
    "Outsourced After-Hours Coordination for Australian Care Providers | Novada Workforce",
  description:
    "Trained Australian-based coordinators run your after-hours desk: sick calls, shift cover, roster updates, family and facility communication, incident escalation and a written handover by 8am. For NDIS, home care, aged care and staffing agencies.",
  // Overrides the root layout's keywords. Deliberately AUSTRALIAN-focused;
  // "after hours on call" is the buyer's own search phrase (2026-08 research).
  keywords: [
    "outsourced after-hours coordination",
    "after hours on call service NDIS",
    "after hours coordinator disability provider",
    "after hours rostering service",
    "home care after hours phone service",
    "after hours allocations nursing agency",
    "on call coordination aged care",
  ],
  openGraph: {
    title:
      "Outsourced After-Hours Coordination for Australian Care Providers | Novada Workforce",
    description:
      "The after-hours coordination team you don't have to employ. Sick calls answered, cover arranged from your approved workforce, rosters updated, incidents escalated under your rules, and a written handover by 8am.",
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
