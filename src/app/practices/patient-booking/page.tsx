import type { Metadata } from "next";

import BookingPage from "./BookingPage";

/*
 * /practices/patient-booking — pillar two of the practices offer.
 *
 * 🔴 THIS FILE IS A THIN SERVER WRAPPER AND NOTHING ELSE. The page
 * itself is ./BookingPage.tsx, a client component (it mounts the
 * booking widget), and Next does not allow a `metadata` export from a
 * client component. Same arrangement as the other four rebuilt pages.
 *
 * ⚠️ DO NOT ADD A layout.tsx TO THIS FOLDER to hold the metadata
 * instead. ./confirmed exports no metadata of its own, so it would
 * silently inherit this title and description.
 *
 * ⚠️ NO `robots` BLOCK. This URL is indexed, sits in the generated
 * sitemap through OFFERS in offers.ts, and is the destination of the
 * /patient-access-desk and /practices/patient-access redirects.
 *
 * 🔴 "RETENTION" IS NOT LEFT BARE IN THE TITLE. On its own the word
 * reads as persuading patients into treatment, which is the one line
 * this offer must never cross, so the description says what the service
 * actually does. The page itself defines the word in its first screen.
 *
 * 🔴 NO PRICE AND NO "GAP" HERE EITHER. In Australian healthcare the
 * gap is the patient's out-of-pocket after the rebate. The full
 * reasoning is at the top of BookingPage.tsx.
 */
export const metadata: Metadata = {
  title: "Patient Booking & Retention Continuity for practices | Novada Tech",
  description:
    "Ongoing administrative support for a busy front desk: patient calls answered, appointments booked and rescheduled, cancellations offered to suitable patients, clinician-approved recalls administered and billing exceptions followed up. Month to month.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "Patient Booking & Retention Continuity for practices | Novada Tech",
    description:
      "Your practice keeps every clinical decision. We manage the agreed administrative workload around it. For Australian GP, specialist and allied health practices.",
    type: "website",
  },
};

export default function Page() {
  return <BookingPage />;
}
