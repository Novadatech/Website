import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Real Founders. Real Results. | Novada Tech",
  description:
    "Inside the Novada Tech partnership. Real founders, real numbers, real outcomes — from filling pipelines with qualified meetings to automating operations with custom AI.",
  openGraph: {
    title: "Case Studies — Real Founders. Real Results. | Novada Tech",
    description:
      "Inside the Novada Tech partnership. Real founders, real numbers, real outcomes — from filling pipelines with qualified meetings to automating operations with custom AI.",
    type: "website",
    locale: "en_AU",
  },
};

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
