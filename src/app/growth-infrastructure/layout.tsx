import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth Infrastructure™ — Get 20 Qualified Appointments Every Month, Guaranteed Or You Don't Pay | Novada Tech",
  description:
    "Stop running campaigns. Install Growth Infrastructure™ — a done-for-you client acquisition system, live in 14 days, that books 20 qualified appointments every month. If we don't hit the number, you don't pay.",
  openGraph: {
    title: "Growth Infrastructure™ — Get 20 Qualified Appointments Every Month, Guaranteed Or You Don't Pay | Novada Tech",
    description:
      "Stop running campaigns. Install Growth Infrastructure™ — a done-for-you client acquisition system, live in 14 days, that books 20 qualified appointments every month. If we don't hit the number, you don't pay.",
    type: "website",
    locale: "en_AU",
  },
};

export default function GrowthInfrastructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
