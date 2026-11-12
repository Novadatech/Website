/*
 * Footer for the Desk brand pages, per the Website Rebuild Brief section 3.
 * Four columns: the brand and its strapline, what we run, contact, legal.
 *
 * ✅ THE PHONE NUMBER IS BACK, 13 November 2026, on the founder's
 * instruction, and the reason it left no longer exists. It was removed
 * on 6 September 2026 because the site was dual-market and a +61 number
 * is a country signal to a US visitor. The two sites were split by
 * market on 10 November 2026, so each one now carries ITS OWN
 * country's number and signals the right thing. That also ends the
 * oddity the old note recorded here: a business selling phone
 * answering that offered no phone number.
 *
 * 🔴 THE NUMBER IS PER SITE AND THIS IS THE AUSTRALIAN FOOTER: +61 485 000 813.
 * Do not copy a number between the two repos. The support ADDRESS is
 * still shared on purpose; the number is not.
 *
 * Tailored 6 September 2026 for novadatech.com. Same structure the care
 * site carries, pointed at this site's two pages. The phone number and
 * support address are shared with the care business on purpose: it is one
 * company behind two offers, and the founder confirmed the contact
 * details do not change, aside from the phone number noted above.
 *
 * The legacy LinkedIn meetings service gets no navigation presence here
 * (brief section 3), and nothing here links to novadatech.com.au.
 *
 * ⚠️ SERVER COMPONENT SINCE 16 SEPTEMBER 2026. It carried "use client"
 * and used no state, no effects and no event handlers, so every page
 * shipped the entire footer to the browser twice for nothing.
 *
 * Every link here is at least 44px tall. A footer link that is 20px tall
 * is a link a reader taps three times.
 */

import Link from "next/link";
import { FRAME, GUTTER, MICRO } from "./tokens";
import { AUDIENCES, CTA_LABEL, POSITION } from "@/content/offers";

/**
 * `bookHref`: pages that own a #book calendar pass "#book" so a visitor books
 * on the page they are already on. Sending a paid visitor from an offer page
 * to the home calendar loses the single-offer context and misattributes the
 * booking. Every other route keeps the cross-page default. Added 2026-09-06.
 */
/*
 * The footer phone number. ⚠️ A CONSTANT, NOT A PROP: every page shows
 * it, so a prop would only be a knob somebody can forget to pass. It
 * was briefly a prop, for the ads landing page footer, before the
 * founder asked for it site-wide on 13 November 2026.
 *
 * 🔴 AUSTRALIAN NUMBER. The other repo has its own; see the note above.
 */
const PHONE = "+61 485 000 813";

/*
 * ⚠️ tel: TAKES DIGITS, THE LABEL KEEPS ITS FORMATTING. Strip every
 * non-digit except the leading +, not just spaces: the US number is
 * written with dashes, and "tel:+1833-385-3923" is handled
 * inconsistently by desktop dialers.
 */
const TEL = `tel:${PHONE.replace(/[^\d+]/g, "")}`;

export default function DeskFooter({
  tone = "light",
  bookHref = "/#book",
  /**
   * "minimal" is the paid-landing-page footer: the brand block in its
   * usual place, contact, one booking action, the copyright and a
   * single privacy link. The two navigation columns are gone, because
   * every link in them is a way off a page an ad was paid for.
   */
  variant = "full",
  /** The footer's booking action. Paid pages word it as the ad does. */
  ctaLabel = CTA_LABEL,
}: {
  tone?: "light" | "dark";
  bookHref?: string;
  variant?: "full" | "minimal";
  ctaLabel?: string;
}) {
  const dark = tone === "dark";
  const minimal = variant === "minimal";
  const link = `inline-flex min-h-11 items-center text-sm transition-colors duration-150 ease-standard ${
    dark ? "text-white/70 hover:text-white" : "text-ink-700 hover:text-brand-500"
  }`;
  const heading = `${MICRO} mb-2 ${dark ? "text-white/70" : "text-ink-500"}`;

  return (
    <footer
      className={
        dark
          ? "border-t border-white/10 bg-canvas-deep"
          : "border-t border-ink-100 bg-ink-50"
      }
    >
      <div className={`${FRAME} ${GUTTER} border-x ${dark ? "border-white/10" : "border-ink-100"} py-16`}>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/favicon.png"
                alt=""
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span
                className={`text-lg font-bold tracking-tight ${
                  dark ? "text-white" : "text-ink-950"
                }`}
              >
                Novada <span className="text-brand-500">Tech</span>
              </span>
            </div>
            <p
              className={`max-w-[34ch] text-sm ${
                dark ? "text-white/60" : "text-ink-500"
              }`}
            >
              {POSITION} Alongside your team, never instead of them.
            </p>
          </div>

          {minimal ? null : (
            <div>
              <h2 className={heading}>Who we run it for</h2>
              <ul>
                {AUDIENCES.map((a) => (
                  <li key={a.href}>
                    <Link href={a.href} className={link}>
                      {a.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/why-novada" className={link}>
                    Why Novada
                  </Link>
                </li>
              </ul>
            </div>
          )}

          <div>
            <h2 className={heading}>Contact</h2>
            <ul>
              <li>
                <a href="mailto:support@novadatech.com.au" className={link}>
                  support@novadatech.com.au
                </a>
              </li>
              <li>
                <a href={TEL} className={link}>
                  {PHONE}
                </a>
              </li>
              {minimal ? null : (
                <li>
                  <a href={bookHref} className={link}>
                    {CTA_LABEL}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {minimal ? (
            /* The single action. On a paid page the footer is the last
               thing a reader who scrolled the whole offer sees, so it
               ends with the same ask the ad made, not a link list. */
            <div className="sm:col-span-2 lg:col-span-2 lg:flex lg:justify-end">
              <a
                href={bookHref}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xs bg-brand-500 px-6 text-[13px] font-bold uppercase tracking-caps text-white shadow-cta transition-[background-color,box-shadow] duration-150 ease-standard hover:bg-brand-600 hover:shadow-lift sm:whitespace-nowrap"
              >
                {ctaLabel}
              </a>
            </div>
          ) : (
            <div>
              <h2 className={heading}>Legal</h2>
              <ul>
                <li>
                  <Link href="/privacy-policy" className={link}>
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className={link}>
                    Terms of service
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div
          className={`mt-12 flex flex-col items-start justify-between gap-3 border-t pt-8 sm:flex-row sm:items-center ${
            dark ? "border-white/10" : "border-ink-200"
          }`}
        >
          {minimal ? (
            /* ⚠️ NEW TAB, DELIBERATELY. This is the only link off a
               paid landing page, and it exists because the booking
               widget collects personal information and Meta reviews
               the page. Opening it in place would abandon the visit
               to read a legal document. */
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs ${
                dark ? "text-white/60 hover:text-white" : "text-ink-500 hover:text-brand-500"
              }`}
            >
              Privacy policy
            </a>
          ) : (
            <p
              className={`text-sm font-semibold ${
                dark ? "text-white" : "text-ink-950"
              }`}
            >
              Our own team. Never a call centre.
            </p>
          )}
          <p className={`text-xs ${dark ? "text-white/60" : "text-ink-500"}`}>
            © {new Date().getFullYear()} Novada Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
