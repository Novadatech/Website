import type { Metadata } from "next";

/*
 * 🔴 noindex. THE MOST EXPOSED OF THE FOUR, because this one
 * SPENDS MONEY. The Google Ads conversion for a booked call fires from
 * GTM off a trigger scoped to this URL, so every uninvited arrival
 * reports a booking that never happened, and Smart Bidding optimises
 * towards whatever brought them. It was both crawlable AND indexable,
 * and was not even in the disallow list.
 *
 * ⚠️ IT HAS TO BE A LAYOUT. The page itself is a client component,
 * and Next does not allow a `metadata` export from one. Three of these
 * confirmation pages shipped with no layout at all and were therefore
 * INDEXABLE until 29 October 2026.
 *
 * 🔴 AND THE PATH MUST NOT GO BACK INTO robots.txt. A Disallow and a
 * noindex together are the classic own goal: the crawler obeys the
 * Disallow, never fetches the page, and so never reads the noindex, and
 * the URL can still be indexed from any external link pointing at it.
 * Google's own guidance is explicit that for a noindex to work the page
 * must NOT be blocked in robots.txt. So these paths were removed from
 * the disallow list in the same change. Allow the crawl, refuse the
 * index.
 */
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
