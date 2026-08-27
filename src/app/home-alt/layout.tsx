import type { Metadata } from "next";

// Alternative home page design, live only so the founder can compare it
// against "/" side by side. noindex so it never competes with the real
// home page in search. Delete this route once a direction is chosen.
export const metadata: Metadata = {
  title: "Home (alternative design) | Novada Tech",
  description:
    "Alternative design of the Novada home page, for internal comparison.",
  robots: { index: false, follow: false },
};

export default function HomeAltLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
