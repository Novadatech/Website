import type { Metadata } from "next";

// The Patient Access Desk offer page (clinics). Australian English.
// No pricing in metadata (binding copy rule 2), and deliberately not
// targeting "virtual receptionist" or "answering service" (brief s.10).
export const metadata: Metadata = {
  title:
    "The Patient Access Desk | Phone and Schedule Support for Australian Clinics | Novada",
  description:
    "Real people, onshore in Australia, running the phone-and-schedule workload for dental, physio, OT, psychology, podiatry, speech and veterinary practices. Calls answered, bookings made in your own practice software, recalls run, cancellations recovered, everything measured monthly.",
  keywords: [
    "patient access",
    "practice front desk support",
    "clinic phone and schedule support",
    "recall and reactivation",
    "cancellation recovery",
    "dental physiotherapy psychology podiatry veterinary practice support",
  ],
  openGraph: {
    title: "Add patient capacity. Not another front-desk salary. | Novada",
    description:
      "The Patient Access Desk: calls, bookings, recalls and cancellation recovery run inside your own practice software, alongside your front desk, not instead of it.",
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
