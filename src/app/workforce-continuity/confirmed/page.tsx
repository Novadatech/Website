import type { Metadata } from "next";
import { lpSerif } from "@/lib/fonts";

import WcConfirmed from "@/components/wc/WcConfirmed";

/*
 * /workforce-continuity/confirmed : the Australian Workforce Continuity
 * booking confirmation. Founder, 27 Nov 2026: ONE calendar per market,
 * so EVERY Australian booking lands here whichever industry page it was
 * made from. Keep the copy general: no industry, no role type.
 * 🔴 Point the Australian WC calendar's redirect at
 *    https://novadatech.com.au/workforce-continuity/confirmed
 *
 * 🔴 INDEXED, founder instruction 27 Nov 2026 ("make it live"), unlike
 * the AI Workforce confirmations, and listed in sitemap.ts. Trade-off
 * the founder accepted: a search visitor who lands here fires the Meta
 * Schedule event without having booked.
 * A static folder beside [slug] wins over the dynamic route.
 */
export const metadata: Metadata = {
  title: "Booking confirmed | Novada Tech",
  description: "Your free Workforce Continuity review is booked.",
  alternates: { canonical: "/workforce-continuity/confirmed" },
  openGraph: { locale: "en_AU", siteName: "Novada", title: "Booking confirmed | Novada Tech", description: "Your free Workforce Continuity review is booked.", type: "website" },
};

export default function Page() {
  return (
    <div className={lpSerif.variable}>
      <WcConfirmed
        copy={{
          lead: "Your calendar invite is on its way. It’s a free 30-minute call with no obligation, and nothing is signed on it. Two minutes with the notes below will keep the conversation on your own roles, locations and staffing gaps.",
          prepare: "The roles and locations where shifts most often go uncovered, roughly how many cover requests you have in a typical week, and how many casual workers you already employ. Estimates are fine.",
          leaveWith: "A clear view of whether Workforce Continuity fits your business, a suggested starting scope for your roles and locations, and what happens next. If it isn’t a fit, we’ll tell you.",
        }}
      />
    </div>
  );
}
