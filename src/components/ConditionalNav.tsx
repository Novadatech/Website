"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LandingFooter from "./LandingFooter";

// Routes that drop the main Navbar + full Footer and render with the compact
// LandingFooter only. Each of these pages provides its own minimal fixed
// header (logo + page-specific CTA) inside the page component.
const STANDALONE_ROUTES = [
  // Serves the /meetings-3 lander, so it shares its chrome. Moved here
  // 2026-09-02: it was the last page falling through to the legacy
  // Navbar/Footer, which linked to pages that are now deleted.
  "/guarantee-terms",
  "/meetings-3",
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
// NOTE (2026-09-02): the legacy Navbar and Footer now have NO consumers.
// Every surviving route is either a Desk page (below), a lander using
// LandingFooter, or /case-study. Both components are kept in the repo but
// are no longer rendered anywhere. Do not wire them back up without first
// checking their links: they point at pages that were deleted.
const BARE_ROUTES = [
  // Desk brand
  "/",
  "/patient-access-desk",
  "/workforce-ops-desk",
  "/why-novada",
  "/review-confirmed",
  // Legal pages, rebuilt 2026-08-27 in the Desk system. They MUST be here:
  // without it they render DeskNav/DeskFooter *and* the legacy Navbar/Footer,
  // which drags "15+ qualified sales meetings every month, guaranteed" onto a
  // page whose whole point is that we guarantee no outcomes. Both legal
  // drafters caught this independently.
  "/privacy-policy",
  "/terms-of-service",
  // Novada Workforce
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
