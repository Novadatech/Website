import type { Metadata } from "next";
import { lpSerif } from "@/lib/fonts";

// noindex: reachable only via the calendar redirect, never from search.
// It is a conversion page, so an indexed copy would leak the funnel and
// let a search visitor fire a conversion they never earned.
//
// ⚠️ AND IT IS NOT LISTED IN robots.ts, on purpose. A Disallow on top of
// this noindex is an own goal: the crawler obeys the Disallow, never
// fetches the page, never reads this tag, and the URL can still be
// indexed from an external link. Allow the crawl, refuse the index.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

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

export default function ConfirmedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={lpSerif.variable}>{children}</div>;
}
