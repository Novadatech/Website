import type { Metadata } from "next";
import { lpSerif } from "@/lib/fonts";

import HomeChooser from "./HomeChooser";

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
 * / — THE NEUTRAL HOME FOR BOTH OFFERS (founder instruction 25 Nov 2026).
 *
 * The AI Workforce home that lived here moved, unchanged, to
 * /ai-workforce (app/ai-workforce/page.tsx). This page lets a visitor
 * choose between the AI Workforce and Workforce Continuity.
 *
 * 🔴 DO NOT ADD A layout.tsx BESIDE THIS FILE for the metadata: this is
 * the app root and every page would inherit it, including the
 * confirmation pages whose own layouts carry noindex.
 *
 * ⚠️ The share image (opengraph-image.tsx) still carries the care-only
 * position line. Flagged to the founder: a brand decision.
 */
export const metadata: Metadata = {
  title: "Novada Tech | AI Workforce and Workforce Continuity",
  description:
    "Two services from Novada Tech. The AI Workforce completes the administration behind Australian care providers and medical practices. Workforce Continuity builds, prepares and coordinates your own casual workforce.",
  alternates: { canonical: "/" },
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "Novada Tech | AI Workforce and Workforce Continuity",
    description:
      "AI that does the work, and a casual workforce ready for the shift. Choose the service you need.",
    type: "website",
  },
};

export default function Page() {
  return (
    <div className={lpSerif.variable}>
      <HomeChooser />
    </div>
  );
}
