import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get an Expert Sales Closer in 7 Days — Don't Close, Don't Pay | Novada Tech",
  description:
    "We place a vetted expert closer into your business within 7 days. If they don't close, you don't pay. 350+ businesses scaled. Written performance guarantee.",
  openGraph: {
    title: "Get an Expert Sales Closer in 7 Days — Don't Close, Don't Pay | Novada Tech",
    description:
      "We place a vetted expert closer into your business within 7 days. If they don't close, you don't pay. 350+ businesses scaled. Written performance guarantee.",
    type: "website",
    locale: "en_AU",
  },
};

export default function SalesCloserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
