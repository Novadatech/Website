"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LandingFooter from "./LandingFooter";

// Routes that drop the main Navbar + full Footer and render with the compact
// LandingFooter only. Each of these pages provides its own minimal fixed
// header inside the page component.
//
// NOTE (2026-09-02): down to a single route. /meetings-3, /guarantee-terms
// and /case-study were rebuilt in the Desk system and now carry their own
// FunnelHeader/FunnelFooter, so they moved to BARE_ROUTES. /confirmed-call
// is the last page on the legacy dark chrome. It is also the page
// /meetings-3 sends every converter to, so the booking journey currently
// ends on a page that does not match the lander it started on.
const STANDALONE_ROUTES = ["/confirmed-call"];

// Routes that render NO site chrome at all. These pages carry their own
// nav and footer inside the page component.
//
// Two families live here:
//  1. The Desk brand pages (rebuilt 2026-08-26): the home page, the two
//     offer pages, Why Novada and the legal pages, all carrying DeskNav
//     and DeskFooter.
//  2. The meetings-offer pages (rebuilt 2026-09-02): the lander, its
//     guarantee terms, the case studies and the calculator. Same visual
//     system, but FunnelHeader/FunnelFooter instead of DeskNav, because a
//     cold paid lander must not carry five exits into a different offer.
//     See src/components/desk/FunnelChrome.tsx.
//
// ⚠️ The legacy Navbar and Footer now have NO consumers at all. Every
// surviving route is either listed here or is /confirmed-call. Both
// components are kept in the repo but are no longer rendered anywhere. Do
// not wire them back up without first checking their links: they point at
// pages that were deleted on 2 September 2026.
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
  // Meetings offer, rebuilt 2026-09-02
  "/meetings-3",
  "/guarantee-terms",
  "/assessment-calculator",
];

// Prefix-matched bare routes, for nested dynamic pages.
// /case-study is the grid; /case-study/[slug] is each individual case.
const BARE_ROUTE_PREFIXES = ["/case-study"];

export default function ConditionalNav({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isBare =
    BARE_ROUTES.includes(pathname) ||
    BARE_ROUTE_PREFIXES.some(
      (p) => pathname === p || pathname.startsWith(p + "/"),
    );

  if (isBare) {
    return <>{children}</>;
  }

  if (STANDALONE_ROUTES.includes(pathname)) {
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
