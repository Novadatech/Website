import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Operations Infrastructure — Custom AI Systems That Cut Costs | Novada Tech",
  description:
    "We design and build custom AI systems that remove operational bottlenecks, cut operating costs, and let your business scale output without scaling headcount.",
  openGraph: {
    title:
      "Operations Infrastructure — Custom AI Systems That Cut Costs | Novada Tech",
    description:
      "We design and build custom AI systems that remove operational bottlenecks, cut operating costs, and let your business scale output without scaling headcount.",
    type: "website",
    locale: "en_AU",
  },
};

export default function OperationsInfrastructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
