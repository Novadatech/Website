import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Consulting — Know Where AI Pays Off First | Novada Tech",
  description:
    "The AI Opportunity Audit: a structured deep-dive into your operations that delivers a prioritised, ROI-ranked roadmap of exactly where AI pays for itself in your business — before you spend a dollar building.",
  openGraph: {
    title: "AI Consulting — Know Where AI Pays Off First | Novada Tech",
    description:
      "The AI Opportunity Audit: a structured deep-dive into your operations that delivers a prioritised, ROI-ranked roadmap of exactly where AI pays for itself in your business — before you spend a dollar building.",
    type: "website",
    locale: "en_AU",
  },
};

export default function AiConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
