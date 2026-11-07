import type { Metadata } from "next";

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

export default function ConfirmedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
