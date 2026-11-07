import type { Metadata } from "next";

import AiWorkforcePage from "./AiWorkforcePage";

/*
 * /practices/ai-workforce — NOVADA AI WORKFORCE, AUSTRALIAN PRACTICES.
 *
 * 🔴 THIN SERVER WRAPPER AND NOTHING ELSE. The page is
 * ./AiWorkforcePage.tsx, a client component, and Next does not allow a
 * `metadata` export from one. Same arrangement as both practices twins.
 *
 * ⚠️ DO NOT ADD A layout.tsx HERE. ./confirmed has its own layout
 * carrying the noindex, and a second layout in the same subtree is how a
 * confirmation page ends up titled like a sales page.
 *
 * 🔴 THIS IS THE PRACTICES PAGE. /care/ai-workforce is a DIFFERENT page
 * for a different audience: five AI employees for NDIS and aged care,
 * against six for healthcare practices. They share a product name and
 * nothing else. Never sync their metadata.
 *
 * ══════════════════════════════════════════════════════════════════════
 * 🔴 THE `robots` BLOCK IS TEMPORARY AND DELIBERATE, and the opposite of
 * both twins, which are indexed. The founder is supplying this offer's
 * demo calendar separately, so #book carries a placeholder. A page whose
 * only action cannot be taken should not collect search traffic.
 *
 * FIVE STEPS WHEN THE CALENDAR ARRIVES. All or none:
 *   1. add a `practices-ai-workforce` key to Desk and CALENDARS in
 *      src/components/desk/BookingEmbed.tsx with the supplied id
 *   2. swap the placeholder in #book for <BookingEmbed
 *      desk="practices-ai-workforce" source="practices-ai-workforce"
 *      tone="dark" />
 *   3. delete the `robots` block below
 *   4. set `indexed` back to true on AI_WORKFORCE_PRACTICES in offers.ts
 *   5. point the calendar's redirect at /practices/ai-workforce/confirmed
 * ══════════════════════════════════════════════════════════════════════
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Novada AI Workforce for healthcare practices | Novada Tech",
  description:
    "Six specialised AI employees for Australian GP, specialist and allied health practices. Patient enquiries, appointment and cancellation recovery, referral intake, clinician-approved recalls and billing administration, inside your existing systems. Clinical decisions stay with your clinicians.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "Novada AI Workforce for healthcare practices | Novada Tech",
    description:
      "AI employees that run practice administration across your existing systems. One Control Centre, and every clinical and billing decision stays with an authorised professional.",
    type: "website",
  },
};

export default function Page() {
  return <AiWorkforcePage />;
}
