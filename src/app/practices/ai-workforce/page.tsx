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
 * 🔴 THE `robots` BLOCK IS TEMPORARY AND DELIBERATE, and the opposite
 * of its care twin, which is indexed. The founder is supplying this
 * offer's demo calendar separately, so #book carries a placeholder. A
 * page whose only action cannot be taken should not collect search
 * traffic.
 *
 * WHEN THE CALENDAR ARRIVES, four steps, all or none:
 *   1. add a `practices-ai-workforce` key to Desk and CALENDARS in
 *      src/components/desk/BookingEmbed.tsx with the supplied id
 *   2. swap the placeholder in #book for <BookingEmbed
 *      desk="practices-ai-workforce" source="practices-ai-workforce"
 *      tone="dark" />
 *   3. delete the `robots` block below
 *   4. set `indexed: true` on AI_WORKFORCE_PRACTICES in offers.ts
 *
 * ⚠️ STEPS 3 AND 4 TRAVEL TOGETHER. One without the other produces a
 * page that is in the sitemap and refuses to be indexed, which Search
 * Console reports against the whole property.
 *
 * ⚠️ AND IT MUST BE AN AUSTRALIAN CALENDAR. novadatech.com has its own
 * US practices page and its own calendars; pointing this domain at one
 * of those puts an Australian booker into a US pipeline at a US time.
 * ══════════════════════════════════════════════════════════════════════
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
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
