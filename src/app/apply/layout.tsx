import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get 30–60 Qualified Sales Calls Monthly — Free Strategy Call | Novada Tech",
  description:
    "Book a free 30-minute strategy call. We'll map out the exact system to generate 30–60 qualified sales calls every month for your business. Yours to keep — no obligation.",
  openGraph: {
    title: "Get 30–60 Qualified Sales Calls Monthly — Free Strategy Call | Novada Tech",
    description:
      "Book a free 30-minute strategy call. We'll map out the exact system to generate 30–60 qualified sales calls every month for your business. Yours to keep — no obligation.",
    type: "website",
    locale: "en_AU",
  },
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
