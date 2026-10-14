import type { Metadata } from "next";

// Why Novada: the approach page (alongside-not-instead, onshore,
// measurement-first, and the operating proof).
export const metadata: Metadata = {
  title: "Why Novada | Measured, Onshore, Alongside Your Team",
  description:
    "We measure the work, against your own numbers. For Australian healthcare practices and care providers. Onshore, Australian owned, working inside your own systems, and never clinical.",
  keywords: [
    "measured back office operations",
    "onshore practice and care administration Australia",
  ],
  openGraph: {
    title: "Why Novada | Measured, Onshore, Alongside Your Team",
    description:
      "We will not quote you an industry statistic. We measure your own work and report it monthly.",
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
