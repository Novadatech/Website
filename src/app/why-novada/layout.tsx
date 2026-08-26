import type { Metadata } from "next";

// Why Novada: the approach page (alongside-not-instead, onshore,
// measurement-first, and the operating proof).
export const metadata: Metadata = {
  title: "Why Novada | Measured, Onshore, Alongside Your Team",
  description:
    "We measure the desk. Every enquiry, response time, booking outcome and reason lost, reported monthly. Onshore, Australian owned, working inside your own systems, and never clinical.",
  keywords: [
    "measured desk operations",
    "onshore healthcare administration Australia",
    "practice support alongside your team",
  ],
  openGraph: {
    title: "Why Novada | Measured, Onshore, Alongside Your Team",
    description:
      "We won't quote you an industry statistic. We measure your desk and report it monthly.",
    type: "website",
    locale: "en_AU",
  },
};

export default function WhyNovadaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
