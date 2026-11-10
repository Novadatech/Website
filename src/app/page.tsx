import type { Metadata } from "next";
import { Bitter } from "next/font/google";

import HomePage from "./HomePage";

/*
 * ⚠️ THE SERIF DISPLAY FACE, FOR THIS ROUTE ONLY, matching the two
 * offer pages. 🔴 IT IS DECLARED HERE AND NOT IN src/app/layout.tsx:
 * the root layout is inherited by every page on the site, including
 * the confirmation pages, and putting it there downloads a fourth font
 * family everywhere to serve four routes. next/font dedupes the actual
 * file across the routes that declare it.
 */
const bitter = Bitter({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-lp-serif",
});

/*
 * / — the main home page.
 *
 * 🔴 IT IS NO LONGER A ROUTER. It used to send a visitor to /care or
 * /practices, each a hub listing two offers. Both hubs are archived
 * and both pairs of offers retired, so this page names the two
 * surviving offers directly.
 *
 * 🔴 THIS FILE IS A THIN SERVER WRAPPER AND NOTHING ELSE. The page
 * itself is ./HomePage.tsx, a client component, and Next does not allow
 * a `metadata` export from one. Same arrangement as the six pages
 * rebuilt before it.
 *
 * 🔴 DO NOT ADD A layout.tsx BESIDE THIS FILE for the metadata. This is
 * the app root: every page on the site would inherit it, including the
 * five confirmation pages whose own layouts carry the noindex that
 * keeps them out of search.
 *
 * ══════════════════════════════════════════════════════════════════════
 * 🔴 THE TITLE AND DESCRIPTION ARE DELIBERATELY UNCHANGED, even though
 * the page's H1 is now an offer-led headline instead of the position
 * line.
 *
 * "We streamline the work behind the care." lives in five places, and
 * the H1 was one of them. The remaining four are the footer of every
 * page, the sticky bar's default tagline, THIS TITLE, and the share
 * image in opengraph-image.tsx. The last two are HARDCODED in separate
 * files, so changing one without the other is exactly the bug that let
 * a retired line survive three weeks on 21 of 29 pages.
 *
 * The founder's copy keeps the line as the brand sign-off, which is
 * what the footer, this title and the share card now carry. Changing
 * them is a brand decision, not a copy edit, and it is a two-file
 * change when it happens. Flagged to the founder.
 * ══════════════════════════════════════════════════════════════════════
 */
export const metadata: Metadata = {
  title: "Novada | We streamline the work behind the care",
  description:
    "Managed operations for healthcare practices and care providers. Run by our own team, inside the systems you already use, alongside your people and never instead of them. Nothing clinical, ever.",
  openGraph: {
    locale: "en_AU",
    siteName: "Novada",
    title: "We streamline the work behind the care | Novada",
    description:
      "Two services for practices, two for care providers. Alongside your team, never instead of it, and never anything clinical.",
    type: "website",
  },
};

export default function Page() {
  return (
    <div className={bitter.variable}>
      <HomePage />
    </div>
  );
}
