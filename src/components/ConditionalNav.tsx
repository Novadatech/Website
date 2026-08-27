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
  "/meetings-3",
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
//
// Two families live here:
//  1. The Desk brand pages (rebuilt 2026-08-26): the home page and its
//     offer pages carry DeskNav + DeskFooter, the light white/blue
//     system from the Website Rebuild Brief.
//  2. The Novada Workforce pages, which carry their own dark chrome.
//
// The legacy Navbar/Footer are deliberately left in place for the older
// dark pages (/about, /case-study, /growth-infrastructure and similar)
// so this rebuild does not restyle pages that are out of its scope.
const BARE_ROUTES = [
  // Desk brand
  "/",
  "/patient-access-desk",
  "/workforce-ops-desk",
  "/why-novada",
  "/review-confirmed",
  // Novada Workforce
  "/workforce",
  "/workforce-2",
  "/workforce-confirmed",
  "/assessment-calculator",
];

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
