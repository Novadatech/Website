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
  "/get-meetings",
  "/sales-closer",
  "/sales-closer2",
  "/growth-infrastructure",
  "/linkedin-growth",
  "/book-call",
  "/confirmed-call",
];

export default function ConditionalNav({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_ROUTES.includes(pathname);

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
