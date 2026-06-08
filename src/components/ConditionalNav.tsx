"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LandingFooter from "./LandingFooter";

const STANDALONE_ROUTES = ["/apply", "/get-meetings", "/sales-closer", "/sales-closer2", "/growth-infrastructure", "/linkedin-growth"];
const EMBER_FOOTER_ROUTES = ["/linkedin-growth"];

export default function ConditionalNav({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_ROUTES.includes(pathname);

  if (isStandalone) {
    const footerVariant = EMBER_FOOTER_ROUTES.includes(pathname) ? "ember" : "default";
    return (
      <>
        {children}
        <LandingFooter variant={footerVariant} />
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
