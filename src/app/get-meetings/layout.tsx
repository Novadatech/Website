import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get 30–60 Guaranteed Sales Meetings Monthly — Or You Don't Pay | Novada Tech",
  description:
    "Performance-guaranteed meetings. 30–60 qualified sales meetings on your calendar every month — or you don't pay a cent. Written into your agreement.",
  openGraph: {
    title: "Get 30–60 Guaranteed Sales Meetings Monthly — Or You Don't Pay | Novada Tech",
    description:
      "Performance-guaranteed meetings. 30–60 qualified sales meetings on your calendar every month — or you don't pay a cent. Written into your agreement.",
    type: "website",
    locale: "en_AU",
  },
};

export default function GetMeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
