"use client";

/*
 * ══════════════════════════════════════════════════════════════════════
 * THE BOOKING CONFIRMATION. One scaffold, one page per OFFER.
 *
 *   novadatech.com.au/care/ai-workforce/confirmed
 *   novadatech.com.au/practices/ai-workforce/confirmed
 *
 * 🔴 REBUILT IN THE LANDING-PAGE DESIGN ON 10 NOVEMBER 2026. It used to
 * render DeskNav on a white ground with the condensed uppercase display
 * face, which is the design the four surviving pages were rebuilt AWAY
 * from. A booker who clicked a cream, serif page and then landed on a
 * white, condensed one has every reason to think they left the site, at
 * the single moment in the funnel where confidence matters most. The
 * ground, the face, the header and the footer now match the page the
 * booking came from.
 *
 * ⚠️ TWO PAGES NOW, NOT FOUR. The four desk confirmations
 * (care/rostering, care/workforce, practices/revenue-audit,
 * practices/patient-booking) were archived with their offers on
 * 10 November 2026 and their calendars disabled. Their paths 308 here.
 *
 * ⚠️ PER-MARKET WORDING IS ALLOWED AGAIN ON THIS DOMAIN, and that is a
 * reversal worth reading twice. The old rule was market-neutral copy,
 * because one calendar per desk served both countries and so one
 * confirmation page received both. It no longer does: the AI Workforce
 * calendars are split by market (WP6oumjuphxHD9rJBNKX redirects here,
 * 2p2Kf8boNRAn4f9dy28a redirects to the .com copy), so this page
 * receives Australian bookers only and may say roster, support worker
 * and participant. THE RULE FOLLOWS WHETHER ONE PAGE CAN RECEIVE MORE
 * THAN ONE MARKET. It has inverted three times; check the calendar
 * split before trusting either version of it.
 *
 * ⚠️ content_category STAYS THE OFFER ("practices" / "care"), because
 * the Meta custom conversions are defined on it. The DESK goes in
 * content_name. Do not move the offer into content_name or the
 * conversions stop matching.
 *
 * ⚠️ HOW TO VERIFY THE PIXEL FIRES. Not by grepping the HTML, where it
 * does not appear, and not with request interception, which reports a
 * false negative because fbevents.js uses a transport Playwright's
 * page.route cannot see. Block connect.facebook.net so fbq stays a
 * queueing stub, then read window.fbq.queue.
 *
 * ⚠️ THE BASE PIXEL AND PageView COME FROM src/app/layout.tsx. This
 * file adds the Schedule event only. ensureFbq is idempotent and
 * returns the existing fbq, so PageView is never fired twice.
 * ══════════════════════════════════════════════════════════════════════
 */

import { useEffect, useState, type ComponentType } from "react";
import Script from "next/script";
import { Check, Mail, ClipboardList, FileText } from "lucide-react";
import DeskFooter from "@/components/desk/DeskFooter";
import { FRAME, GUTTER, MICRO } from "@/components/desk/tokens";
import { CREAM, CREAM_DEEP, LpHeader, SERIF } from "@/components/lp/kit";

const PIXEL_ID = "3515804598723791";

/*
 * Meta's own bootstrap. Idempotent, and the stub it installs QUEUES
 * calls until fbevents.js loads, so the event survives regardless of
 * script ordering.
 */
type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[][];
  push?: unknown;
  loaded?: boolean;
  version?: string;
};

function ensureFbq(): Fbq | undefined {
  if (typeof window === "undefined") return undefined;
  const w = window as unknown as { fbq?: Fbq; _fbq?: Fbq };
  if (w.fbq) return w.fbq;
  const n = function (...args: unknown[]) {
    n.callMethod ? n.callMethod(...args) : n.queue!.push(args);
  } as Fbq;
  n.queue = [];
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  w.fbq = n;
  if (!w._fbq) w._fbq = n;
  const t = document.createElement("script");
  t.async = true;
  t.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(t);
  return n;
}

function track(event: string) {
  try {
    (
      window as unknown as { dataLayer?: Record<string, unknown>[] }
    ).dataLayer?.push({ event });
  } catch {
    /* analytics must never break the page */
  }
}

/** Neutral copy is required; the market variants are optional polish. */
export type Copy = { neutral: string; us?: string; au?: string };

export type ConfirmedPageProps = {
  /** The offer, for content_category. Fixed by the URL. */
  offer: "practices" | "care";
  /** Meta content_name. Names the booking, e.g. "AI Workforce demo". */
  eventName: string;
  /** The "have your numbers handy" line. `neutral` must stand alone. */
  numbers: Copy;
  /** Where "back" goes, and what it is called. */
  backHref: string;
  backLabel: string;
  /** The contact route shown. */
  contactEmail: string;
  /**
   * Google Ads conversion, where this page owns one.
   *
   * ⚠️ ONLY ONE PAGE SHOULD EVER CARRY A GIVEN LABEL. Putting the care
   * label on a practices page counts practice bookings as care
   * conversions. Loading a page that has one fires a REAL conversion.
   *
   * 🔴 NO PAGE ON THIS SITE PASSES IT TODAY. The label
   * AW-16650862607/o6ELCPGhgYwcEI-A4IM- lived on /care/operations/confirmed
   * and /confirmed-call, both archived on 10 November 2026, so Google Ads
   * currently records NO conversion for any booking. Flagged to the
   * founder; wire it here when a conversion action for this offer exists.
   */
  googleAdsSendTo?: string;
};

export default function ConfirmedPage({
  offer,
  eventName,
  numbers,
  backHref,
  backLabel,
  contactEmail,
  googleAdsSendTo,
}: ConfirmedPageProps) {
  const [market, setMarket] = useState<"us" | "au" | null>(null);

  useEffect(() => {
    track("desk_review_confirmed");

    /* Progressive enhancement only. If the widget forwarded a market
       hint to the redirect we use that market's wording; if it did not,
       and it may well not, the neutral copy already reads correctly. */
    try {
      const q = new URLSearchParams(window.location.search);
      const hint = (q.get("market") || q.get("utm_source") || "").toLowerCase();
      if (hint.includes("com.au") || hint === "au") setMarket("au");
      else if (hint.includes("novadatech.com") || hint === "us") setMarket("us");
    } catch {
      /* neutral copy is the correct fallback */
    }

    try {
      const fbq = ensureFbq();
      fbq?.("init", PIXEL_ID);
      fbq?.(
        "track",
        "Schedule",
        { content_name: eventName, content_category: offer },
        {
          eventID:
            offer +
            "-" +
            Date.now() +
            "-" +
            Math.random().toString(36).slice(2, 10),
        },
      );
    } catch {
      /* the pixel is blocked; the booking still happened */
    }
  }, [offer, eventName]);

  const steps: {
    icon: ComponentType<{ className?: string; strokeWidth?: number }>;
    title: string;
    body: string;
  }[] = [
    {
      icon: Mail,
      title: "Check your email",
      body: "Your confirmation and calendar invite are on the way. Check spam if nothing arrives within a few minutes.",
    },
    {
      icon: ClipboardList,
      title: "Have your numbers handy",
      body: (market && numbers[market]) || numbers.neutral,
    },
    {
      icon: FileText,
      title: "What you'll leave with",
      body: "An honest assessment of whether this fits, including if it does not, and what the AI employees would take over, side by side and in writing.",
    },
  ];

  /*
   * ⚠️ BOTH GROUND ATTRIBUTES BELOW, AND NEITHER IS DECORATION.
   * Without data-theme="desk" the body falls back to the site's legacy
   * dark surface, which flashes near-black in the overscroll gutter and
   * makes inherited body text white on cream. data-lp="cream" is what
   * paints that gutter the same cream as the page rather than white.
   * Both rules live in src/app/globals.css.
   */
  return (
    <div
      data-theme="desk"
      data-lp="cream"
      className="min-h-screen font-sans"
      style={{ backgroundColor: CREAM }}
    >
      {googleAdsSendTo ? (
        <Script id="gtag-conversion-confirmed" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('event','conversion',{'send_to':'${googleAdsSendTo}'});`}
        </Script>
      ) : null}

      {/* ⚠️ THE HEADER CTA POINTS BACK AT THE OFFER, NOT AT #book. This
          page has no booking section, and inviting somebody who has just
          booked to book again is how a calendar fills with duplicates. */}
      <LpHeader cta="See the offer" ctaShort="The offer" ctaHref={backHref} />

      <main>
        {/* ── THE CONFIRMATION ─────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: CREAM }}
        >
          <div className={`${FRAME} ${GUTTER} py-14 md:py-20`}>
            <div className="mx-auto max-w-[760px] text-center">
              <span
                aria-hidden
                className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 shadow-cta"
              >
                <Check
                  aria-hidden
                  className="h-7 w-7 text-white"
                  strokeWidth={2.4}
                />
              </span>
              <p className={`${MICRO} text-brand-500`}>Booking confirmed</p>
              <h1
                style={SERIF}
                className="mt-4 text-balance text-[clamp(1.9rem,1.2rem+2.5vw,3rem)] font-bold leading-[1.1] tracking-[-0.015em] text-ink-950"
              >
                You are booked. Here is what to have ready.
              </h1>
              <p className="mx-auto mt-6 max-w-[58ch] text-lg leading-relaxed text-ink-600">
                Your calendar invite is on its way. It is thirty minutes and
                nothing is signed on the call. The three notes below are worth
                two minutes of preparation, and they are the difference between
                a general conversation and a specific one.
              </p>
            </div>
          </div>
        </section>

        {/* ── BEFORE WE SPEAK ──────────────────────────────────────── */}
        <section style={{ backgroundColor: CREAM_DEEP }}>
          <div className={`${FRAME} ${GUTTER} py-16 md:py-20`}>
            <div className="grid gap-5 md:grid-cols-3">
              {steps.map((s) => (
                <div
                  key={s.title}
                  className="rounded-lg border border-ink-100 bg-white p-7 shadow-float"
                >
                  <span
                    aria-hidden
                    className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-100"
                  >
                    <s.icon
                      aria-hidden
                      className="h-5 w-5 text-brand-600"
                      strokeWidth={1.9}
                    />
                  </span>
                  <h2
                    style={SERIF}
                    className="text-xl font-bold leading-snug text-ink-950"
                  >
                    {s.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE WAY BACK ─────────────────────────────────────────── */}
        <section style={{ backgroundColor: CREAM }}>
          <div className={`${FRAME} ${GUTTER} py-14 md:py-16`}>
            <div className="mx-auto max-w-[760px] text-center">
              <p className="text-base text-ink-600">
                Need to reach us before the call?{" "}
                {/* ⚠️ inline-flex + min-h-11 is not decoration. A bare
                    inline link is only as tall as its own line box,
                    about 20px, and this site holds a 44px tap floor.
                    It was 20px in the design this replaced. */}
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex min-h-11 items-center font-semibold text-brand-500 underline-offset-4 hover:underline"
                >
                  {contactEmail}
                </a>
              </p>
              <a
                href={backHref}
                className={`${MICRO} mt-7 inline-flex min-h-11 items-center text-ink-500 transition-colors duration-150 hover:text-brand-500`}
              >
                {backLabel}
              </a>
            </div>
          </div>
        </section>
      </main>

      <DeskFooter />
    </div>
  );
}
