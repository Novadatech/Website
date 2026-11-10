import type { Metadata } from "next";
import { Bitter } from "next/font/google";

// noindex: reachable only via the calendar redirect, never from search.
// It is a conversion page, so an indexed copy would leak the funnel and
// let a search visitor fire a conversion they never earned.
//
// ⚠️ AND IT IS NOT LISTED IN robots.ts, on purpose. Read the note there
// before adding it: a Disallow on top of this noindex is an own goal,
// because the crawler obeys the Disallow, never fetches the page, never
// reads this tag, and the URL can still be indexed from an external
// link. Allow the crawl, refuse the index.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

/*
 * ⚠️ THE SERIF DISPLAY FACE, FOR THIS ROUTE ONLY, matching the offer
 * page the booking came from. 🔴 It has to be declared HERE, in the
 * layout, because this route has no server page wrapper: the page
 * itself is a client component. Without it `var(--font-lp-serif)`
 * resolves to nothing and every heading silently falls back to
 * Georgia.
 *
 * 🔴 And NOT in src/app/layout.tsx: the root layout is inherited by
 * every page on the site, so putting it there downloads a fourth font
 * family everywhere to serve a handful of routes. next/font dedupes
 * the file across the routes that declare it.
 */
const bitter = Bitter({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-lp-serif",
});

export default function ConfirmedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={bitter.variable}>{children}</div>;
}
