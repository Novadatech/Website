"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LandingFooter from "./LandingFooter";

const STANDALONE_ROUTES = ["/apply", "/get-meetings", "/sales-closer", "/sales-closer2", "/growth-infrastructure", "/linkedin-growth"];

// Routes that keep the main Navbar but swap the full Footer for the compact
// LandingFooter (logo + Trustpilot + contact + Privacy Policy). Useful for
// booking + post-booking pages where the multi-column footer is more
// distraction than navigation aid.
const LANDING_FOOTER_ROUTES = ["/book-call", "/confirmed-call"];

export default function ConditionalNav({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_ROUTES.includes(pathname);
  const useLandingFooter = LANDING_FOOTER_ROUTES.includes(pathname);

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
      {useLandingFooter ? <LandingFooter /> : <Footer />}
    </>
  );
}
