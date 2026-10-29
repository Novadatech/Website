import type { Metadata } from "next";

/*
 * Metadata for /care/rostering2.
 *
 * ⚠️ IN A LAYOUT because the page itself is a client component: it
 * mounts the calculator and the booking widget, and Next does not allow
 * a `metadata` export from a client component.
 *
 * 🔴 noindex WHILE THIS IS A REVIEW PAGE. It carries placeholder
 * testimonial cards and duplicates /care/rostering, so it must not be
 * indexed or compete with the live page in search. Remove the robots
 * block only when the real client quotes are in and the founder has
 * decided this replaces the live page.
 */
export const metadata: Metadata = {
  title: "Rostering Audit & Efficiency for NDIS and aged care | Novada Tech",
  description:
    "Avoidable overtime and agency cover raise the cost of delivering care. Unbilled services and rejected claims leave legitimate revenue uncollected. We examine both sides, using your own records.",
  robots: { index: false, follow: false },
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "Rostering Audit & Efficiency for NDIS and aged care | Novada Tech",
    description:
      "One provider. Two ways to lose money. We examine both, on your own records.",
    type: "website",
  },
};

export default function Rostering2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
