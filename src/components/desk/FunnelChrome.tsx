/*
 * Chrome for the pages that belong to the meetings offer rather than to
 * the Desk offer: /meetings-3, /guarantee-terms, /case-study and
 * /assessment-calculator.
 *
 * ── WHY THESE PAGES DO NOT GET DeskNav ───────────────────────────────
 * They wear the Desk VISUAL system, because that is the current house
 * style and the founder asked for it. They deliberately do not wear
 * DeskNav or DeskFooter, and the distinction is not cosmetic:
 *
 *  1. DeskNav links to Patient Access Desk, Workforce Ops Desk and Why
 *     Novada. /meetings-3 is a cold paid lander. Putting five exits into
 *     the header of a paid lander, all of them to a different offer for
 *     a different industry, is the single most reliable way to lower its
 *     conversion rate. A lander gets one action.
 *  2. Those Desk pages state that we guarantee no outcomes. This offer
 *     guarantees fifteen qualified meetings a month in writing. Both are
 *     true of their own service, but a shared nav bar invites a reader
 *     to hold one page's promise against the other's disclaimer.
 *
 * So: same typography, same hairline frame, same blue, same 12px floor.
 * Different information architecture. If these two offers are ever
 * merged under one brand story, revisit this file first.
 */

import Link from "next/link";
import { MICRO, MICRO_SM, NUM, PAD, WRAP } from "./Band";

/**
 * Minimal fixed header: identity on the left, one action on the right.
 * `backHref` replaces the action with a return link, for the pages that
 * support a lander rather than sell on their own (terms, calculator).
 */
export function FunnelHeader({
  ctaLabel,
  ctaHref,
  ctaLabelShort,
  backLabel,
  backHref,
}: {
  ctaLabel?: string;
  ctaHref?: string;
  ctaLabelShort?: string;
  backLabel?: string;
  backHref?: string;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E3E6EC] bg-white/95 backdrop-blur-md">
      <div className={`${WRAP} ${PAD}`}>
        <div className="flex h-16 items-center justify-between gap-4 md:h-[72px]">
          <Link href="/" className="flex flex-shrink-0 items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/favicon.png" alt="" className="h-7 w-7 md:h-8 md:w-8" />
            <span className="text-lg font-bold leading-none tracking-tight text-[#0E1116] md:text-xl">
              Novada <span className="text-[#003DDB]">Tech</span>
            </span>
          </Link>

          {ctaHref ? (
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[6px] bg-[#003DDB] px-4 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#0030AE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003DDB] focus-visible:ring-offset-2"
            >
              {ctaLabelShort ? (
                <>
                  <span className="sm:hidden">{ctaLabelShort}</span>
                  <span className="hidden sm:inline">{ctaLabel}</span>
                </>
              ) : (
                ctaLabel
              )}
            </a>
          ) : backHref ? (
            <Link
              href={backHref}
              className={`${MICRO_SM} text-[#5B6472] transition-colors hover:text-[#003DDB]`}
            >
              {backLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
}

/**
 * Quiet closing footer. Carries identity, the legal links and the
 * company line. No offer navigation, for the reasons in the file header.
 */
export function FunnelFooter({ note }: { note?: string }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#E3E6EC] bg-[#F7F8FA]">
      <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-10 md:py-12`}>
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/favicon.png" alt="" className="h-6 w-6" />
              <span className="text-base font-bold leading-none tracking-tight text-[#0E1116]">
                Novada <span className="text-[#003DDB]">Tech</span>
              </span>
            </div>
            {note ? (
              <p className={`${MICRO_SM} mt-3 text-[#9AA3B1]`}>{note}</p>
            ) : null}
          </div>

          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/guarantee-terms"
              className={`${MICRO_SM} text-[#5B6472] transition-colors hover:text-[#003DDB]`}
            >
              Guarantee and Terms
            </Link>
            <Link
              href="/privacy-policy"
              className={`${MICRO_SM} text-[#5B6472] transition-colors hover:text-[#003DDB]`}
            >
              Privacy
            </Link>
            <Link
              href="/terms-of-service"
              className={`${MICRO_SM} text-[#5B6472] transition-colors hover:text-[#003DDB]`}
            >
              Website Terms
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-[#E3E6EC] pt-6">
          <p className={`${MICRO} text-[#9AA3B1]`}>
            Novada Tech Pty Ltd <span className="text-[#C3CAD5]">·</span> ABN{" "}
            <span className={NUM}>90 665 134 921</span>{" "}
            <span className="text-[#C3CAD5]">·</span> ©{" "}
            <span className={NUM}>{year}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
