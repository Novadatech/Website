import type { Metadata } from "next";

// The Patient Access Desk offer page (clinics). Australian English.
// No pricing in metadata (binding copy rule 2), and deliberately not
// targeting "virtual receptionist" or "answering service" (brief s.10).
// Rebuilt 2026-09-05 around the ratified category noun. The title and
// description used to sell the answering service, which is the half of
// this offer that AI receptionists are commoditising. "Managed
// operations" is a pricing decision: it decides whether a searcher
// compares us to cheap hours, cheap software, or the hire they were about
// to make. Still no pricing, still no "virtual receptionist" or
// "answering service" targeting.
export const metadata: Metadata = {
  title:
    "The Patient Access Desk | Managed Patient Access Operations for Australian Practices | Novada",
  description:
    "Managed patient access operations for Australian dental, physiotherapy, occupational therapy, psychology, podiatry, speech pathology and veterinary practices. Onshore people, our own platform, bookings made inside the software you already run, the recall list worked by phone, and one report a month measured against a baseline. Where a practice runs an AI receptionist we configure and supervise it. Alongside your front desk, never instead of it.",
  keywords: [
    "managed patient access operations",
    "patient access",
    "practice front desk support",
    "AI receptionist supervision",
    "multi-site dental practice administration",
    "recall and reactivation",
    "cancellation recovery",
    "dental physiotherapy psychology podiatry veterinary practice support",
  ],
  openGraph: {
    title: "Add patient capacity. Not another front-desk salary. | Novada",
    description:
      "The Patient Access Desk: managed patient access operations inside your own practice software. Onshore people, our own platform, the recall list worked by phone, one report a month against a baseline. Alongside your front desk, never instead of it.",
    type: "website",
    locale: "en_AU",
  },
};

export default function PatientAccessDeskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
