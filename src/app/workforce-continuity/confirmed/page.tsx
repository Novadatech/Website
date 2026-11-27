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
 * 🔴 HIDDEN FROM SEARCH, founder 27 Nov 2026 ("I hope the confirmed pages
 * don't show up in search"). Never index it or add it to sitemap.ts.
 * noindex, and NOT listed in robots.ts on purpose: allow the crawl,
 * refuse the index (see the note in care/ai-workforce/confirmed).
 * A static folder beside [slug] wins over the dynamic route.
 */
export const metadata: Metadata = {
  title: "Booking confirmed | Novada Tech",
  description: "Your free Workforce Continuity review is booked.",
  robots: { index: false, follow: false },
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
