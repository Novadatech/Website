import { Bitter } from "next/font/google";

import WhyNovadaPage from "./WhyNovadaPage";

/*
 * /why-novada — THE COMPANY PAGE.
 *
 * 🔴 THIN SERVER WRAPPER. The page is ./WhyNovadaPage.tsx, a client
 * component. The metadata lives in ./layout.tsx, which was already
 * there and which this file deliberately does not duplicate: two
 * metadata exports in the same subtree is how a page ends up with the
 * wrong title.
 *
 * ⚠️ THE SERIF DISPLAY FACE, FOR THIS ROUTE ONLY, matching the home
 * page and the two offer pages. 🔴 Declared here and NOT in
 * src/app/layout.tsx: the root layout is inherited by every page on
 * the site, so putting it there downloads a fourth font family
 * everywhere to serve four routes. next/font dedupes the file across
 * the routes that declare it.
 */
const bitter = Bitter({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-lp-serif",
});

export default function Page() {
  return (
    <div className={bitter.variable}>
      <WhyNovadaPage />
    </div>
  );
}
