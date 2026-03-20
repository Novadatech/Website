"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const STANDALONE_ROUTES = ["/apply"];

export default function ConditionalNav({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_ROUTES.includes(pathname);

  if (isStandalone) {
    return (
      <>
        {children}
        <Footer />
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
