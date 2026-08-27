import type { Metadata } from "next";

// Design exploration route, live only so the founder can compare
// directions side by side. noindex: never competes with the real home
// page. Delete this route once a direction is chosen.
export const metadata: Metadata = {
  title: "Home design exploration | Novada Tech",
  description: "Internal design comparison.",
  robots: { index: false, follow: false },
};

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
