import type { Metadata } from "next";
import { lpSerif } from "@/lib/fonts";

import AiWorkforcePage from "./AiWorkforcePage";

/*
 * ⚠️ THE SERIF DISPLAY FACE, APPLIED ON THIS ROUTE ONLY. The single
 * declaration lives in src/lib/fonts.ts; applying `lpSerif.variable`
 * here rather than in src/app/layout.tsx is what keeps the family off
 * every route that does not use it.
 *
 * 🔴 DO NOT DECLARE Bitter() HERE AGAIN. Seven separate declarations
 * raced at build time and broke the Vercel build twice. The note in
 * src/lib/fonts.ts has the whole story.
 */

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
 * ✅ PUBLIC SINCE 10 NOVEMBER 2026, AND BOOKABLE SINCE 11 NOVEMBER.
 * The `robots` block is gone and `indexed: true` in offers.ts puts the
 * route in the sitemap. The founder published ahead of the calendar,
 * so for one day this page was in search and could not take a booking;
 * that gap is closed.
 *
 * ✅ THE CALENDAR IS THE AUSTRALIAN ONE, iQpl893fxMU0WVY5VGXr,
 * "Book an AI Practice Workforce Review", confirmed against the API by
 * name and by redirect before it was wired. It redirects to
 * /practices/ai-workforce/confirmed on THIS domain.
 *
 * ⚠️ IT MUST STAY AN AUSTRALIAN CALENDAR. novadatech.com has its own
 * US practices page and its own calendar, 5HSmC49oSRPz4uo5sbnW, whose
 * name differs only by a "(US)" suffix; pointing this domain at it puts
 * an Australian booker into a US pipeline at a US time.
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
    <div className={lpSerif.variable}>
      <AiWorkforcePage />
    </div>
  );
}
