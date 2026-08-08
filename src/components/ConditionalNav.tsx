"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LandingFooter from "./LandingFooter";

// Routes that drop the main Navbar + full Footer and render with the compact
// LandingFooter only. Each of these pages provides its own minimal fixed
// header (logo + page-specific CTA) inside the page component.
const STANDALONE_ROUTES = [
  "/apply",
  "/meetings",
  "/meetings-2",
  "/meetings-b",
  "/get-meetings",
  "/sales-closer",
  "/sales-closer2",
  "/growth-infrastructure",
  "/book-call",
  "/confirmed-call",
];

// Prefix-matched standalone routes — covers nested dynamic pages.
// /case-study is the grid; /case-study/[slug] is each individual case.
const STANDALONE_ROUTE_PREFIXES = ["/case-study"];

// Routes that render NO site chrome at all — not even LandingFooter.
// These pages carry their own brand (nav + footer inside the page).
// /workforce = Novada Workforce, presented as its own brand.
const BARE_ROUTES = ["/workforce"];

export default function ConditionalNav({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (BARE_ROUTES.includes(pathname)) {
    return <>{children}</>;
  }

  const isStandalone =
    STANDALONE_ROUTES.includes(pathname) ||
    STANDALONE_ROUTE_PREFIXES.some(
      (p) => pathname === p || pathname.startsWith(p + "/"),
    );

  if (isStandalone) {
    return (
      <>
        {children}
        <LandingFooter />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
