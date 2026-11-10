import type { Metadata } from "next";
import { Bitter } from "next/font/google";

import AiWorkforcePage from "./AiWorkforcePage";

/*
 * ⚠️ A SERIF DISPLAY FACE, FOR THIS ROUTE ONLY, matching
 * /care/ai-workforce. The rest of this estate sets display type in
 * Barlow Condensed, uppercase; these two offer pages set theirs in a
 * slab serif, sentence case, centred.
 *
 * 🔴 DECLARED HERE, NOT IN src/app/layout.tsx. Adding it to the root
 * layout downloads a fourth font family on every page of the site. The
 * variable is attached to the wrapper below, so it exists only inside
 * this page's subtree. /care/ai-workforce declares its own copy for
 * the same reason; next/font dedupes the actual download.
 */
const bitter = Bitter({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-lp-serif",
});

/*
 * /practices/ai-workforce — NOVADA AI WORKFORCE, AUSTRALIAN PRACTICES.
 *
 * 🔴 THIN SERVER WRAPPER. The page is ./AiWorkforcePage.tsx, a client
 * component, and Next does not allow a `metadata` export from one.
 *
 * ⚠️ DO NOT ADD A layout.tsx HERE. ./confirmed has its own carrying
 * the noindex, and a second layout in the same subtree is how a
 * confirmation page ends up titled like a sales page.
 *
 * ══════════════════════════════════════════════════════════════════════
 * ✅ PUBLIC SINCE 10 NOVEMBER 2026. The `robots` block is gone and
 * `indexed: true` in offers.ts puts the route in the sitemap. The
 * founder made the call to publish ahead of the calendar.
 *
 * 🔴 SO THE PAGE IS IN SEARCH AND CANNOT TAKE A BOOKING. #book carries
 * a placeholder and an email address. TWO STEPS REMAIN, both or
 * neither:
 *   1. add a `practices-ai-workforce` key to Desk and CALENDARS in
 *      src/components/desk/BookingEmbed.tsx with the supplied id
 *   2. swap the placeholder in #book for <BookingEmbed
 *      desk="practices-ai-workforce" source="practices-ai-workforce"
 *      tone="dark" />
 *
 * ⚠️ AND IT MUST BE AN AUSTRALIAN CALENDAR. novadatech.com has its own
 * US practices page and its own calendars; pointing this domain at one
 * of those puts an Australian booker into a US pipeline at a US time.
 * ══════════════════════════════════════════════════════════════════════
 */
export const metadata: Metadata = {
  title: "Novada AI Workforce for Australian practices | Novada Tech",
  description:
    "AI employees for Australian GP, specialist and allied health practices. They answer patient calls, refill cancelled appointments, chase referral documents, run recalls and work billing exceptions inside your existing systems. Clinical and billing decisions stay with your clinicians.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "Novada AI Workforce for Australian practices | Novada Tech",
    description:
      "Six specialised AI employees for reception, cancellations, referrals, recalls, billing and practice operations. Your clinicians keep every clinical call.",
    type: "website",
  },
};

export default function Page() {
  return (
    <div className={bitter.variable}>
      <AiWorkforcePage />
    </div>
  );
}
