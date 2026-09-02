"use client";

import { usePathname } from "next/navigation";
import { FunnelHeader, FunnelFooter } from "./desk/FunnelChrome";

/*
 * Chooses the site chrome for a route.
 *
 * As of 2026-09-02 every page in the site carries its own header and
 * footer inside the page component, so this is now almost a pass-through.
 * Two families exist and both are self-chromed:
 *
 *  1. The Desk offer pages (home, the two desks, Why Novada, the legal
 *     pages, /review-confirmed) carry DeskNav + DeskFooter.
 *  2. The meetings offer pages (/meetings-3, /guarantee-terms,
 *     /case-study, /confirmed-call) and /assessment-calculator carry
 *     FunnelHeader + FunnelFooter, which is the same visual system with
 *     lander-appropriate navigation. See desk/FunnelChrome.tsx.
 *
 * ⚠️ THE LEGACY Navbar, Footer AND LandingFooter NOW HAVE NO CONSUMERS.
 * They are still in the repo but are not rendered anywhere and are not
 * imported here any more. All three contain links to pages deleted on
 * 2 September 2026. Do not wire them back up without fixing those links
 * first.
 *
 * The fall-through below used to render the legacy Navbar and Footer,
 * which meant /_not-found, and any page added in future, quietly shipped
 * a nav advertising retired offers and linking to deleted URLs. It now
 * renders the neutral funnel chrome instead, so an unlisted route still
 * gets a working header and footer.
 */

const SELF_CHROMED_ROUTES = [
  // Desk offer
  "/",
  "/patient-access-desk",
  "/workforce-ops-desk",
  "/why-novada",
  "/review-confirmed",
  // Legal. These MUST be listed: without it they render DeskNav/DeskFooter
  // *and* a second nav, which drags "15+ qualified sales meetings every
  // month, guaranteed" onto a page whose whole point is that we guarantee
  // no outcomes. Both legal drafters caught this independently.
  "/privacy-policy",
  "/terms-of-service",
  // Meetings offer
  "/meetings-3",
  "/guarantee-terms",
  "/confirmed-call",
  // After-hours tool
  "/assessment-calculator",
];

// Prefix-matched, for nested dynamic pages.
// /case-study is the grid; /case-study/[slug] is each individual case.
const SELF_CHROMED_PREFIXES = ["/case-study"];

export default function ConditionalNav({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const selfChromed =
    SELF_CHROMED_ROUTES.includes(pathname) ||
    SELF_CHROMED_PREFIXES.some(
      (p) => pathname === p || pathname.startsWith(p + "/"),
    );

  if (selfChromed) {
    return <>{children}</>;
  }

  return (
    <>
      <FunnelHeader />
      <main>{children}</main>
      <FunnelFooter showGuarantee={false} />
    </>
  );
}
