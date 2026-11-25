import type { Metadata } from "next";
import { lpSerif } from "@/lib/fonts";

import WcPageView from "@/components/wc/WcPage";
import { WC_PAGES } from "@/content/wc";

/*
 * /workforce-continuity — the Workforce Continuity offer's own home.
 * Founder instruction 25 Nov 2026. Copy: src/content/wc.ts. Its pages
 * link only to each other: never to the AI Workforce pages.
 * The serif is declared HERE, per route (see src/lib/fonts.ts).
 */
const page = WC_PAGES.home;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/workforce-continuity" },
  openGraph: { locale: "en_AU", siteName: "Novada", title: page.title, description: page.description, type: "website" },
};

export default function Page() {
  return (
    <div className={lpSerif.variable}>
      <WcPageView page={page} />
    </div>
  );
}
