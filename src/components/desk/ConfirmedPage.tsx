"use client";

/*
 * ══════════════════════════════════════════════════════════════════════
 * THE BOOKING CONFIRMATION. One scaffold, four pages.
 *
 *   novadatech.com/practices/confirmed      US practices
 *   novadatech.com/care/confirmed           US care
 *   novadatech.com.au/practices/confirmed   AU practices
 *   novadatech.com.au/care/confirmed        AU care
 *
 * ⚠️ WITH FOUR CALENDARS, EACH PAGE SERVES EXACTLY ONE OFFER AND ONE
 * MARKET. That is what this scaffold is for, and it is what lifts the
 * market-neutral rule these pages used to live under.
 *
 * The history matters, because reverting to it would be easy and wrong.
 * With two calendars, one calendar redirect served both domains, so the
 * .com page received Australian bookers and the .com.au page received
 * American ones. Neither could use its own market's words, and both had
 * to carry a neutral fallback for bookers whose sessionStorage did not
 * survive the cross-domain hop.
 *
 * That is over. Each page now names its own market's regulators, spells
 * in its own market's English, and can carry its own market's contact
 * details. If anyone ever collapses four calendars back to two, the
 * neutrality rule comes back with it.
 *
 * ⚠️ `nvt_booking_source` STILL ONLY TAILORS THE DESK, never the offer.
 * The offer is fixed by the URL. The source is per-origin and now always
 * survives, because the booker never leaves their own domain, but the
 * page must still read correctly without it.
 *
 * ⚠️ THE CONVERSION FIRES FROM THE EFFECT, and the pixel is bootstrapped
 * there too, immediately before the event. It is NOT in an inline
 * <Script>: the parameters depend on the booking source, which is only
 * readable on the client, and an afterInteractive script has not
 * necessarily run by the time the effect does.
 *
 * ⚠️ HOW TO VERIFY THIS FIRES. Not by grepping the HTML, where it does
 * not appear, and not with request interception, which reports a false
 * negative because fbevents.js uses a transport Playwright's page.route
 * cannot see. Block connect.facebook.net so fbq stays a queueing stub,
 * then read window.fbq.queue.
 * ══════════════════════════════════════════════════════════════════════
 */

import { useEffect, useState, type ComponentType } from "react";
import Script from "next/script";
import { CheckCircle2, Mail, ClipboardList, FileText } from "lucide-react";
import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import { D1, FRAME, GUTTER, MICRO } from "@/components/desk/tokens";

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

export type ConfirmedPageProps = {
  /** Fixed by the URL. Never inferred from the booking source. */
  offer: "practices" | "care";
  /** Meta content_name, e.g. "Practice Desk review". */
  eventName: string;
  /**
   * Desk-level tailoring within the offer. Receives the raw booking
   * source and returns the "have your numbers handy" line. Must return
   * finished copy when the source is null.
   */
  numbersFor: (source: string | null) => string;
  /** Where "back" goes, and what it is called. */
  backHref: string;
  backLabel: string;
  /** The contact route shown. Market-specific now that it can be. */
  contactEmail: string;
  /**
   * Google Ads conversion, where this page owns one.
   *
   * ⚠️ ONLY ONE PAGE SHOULD EVER CARRY A GIVEN LABEL. Putting the care
   * label on a practices page counts practice bookings as care
   * conversions. Loading a page that has one fires a REAL conversion.
   */
  googleAdsSendTo?: string;
};

export default function ConfirmedPage({
  offer,
  eventName,
  numbersFor,
  backHref,
  backLabel,
  contactEmail,
  googleAdsSendTo,
}: ConfirmedPageProps) {
  const [source, setSource] = useState<string | null>(null);

  useEffect(() => {
    track("desk_review_confirmed");
    let s: string | null = null;
    try {
      s = sessionStorage.getItem("nvt_booking_source");
    } catch {
      /* private browsing: the copy reads correctly without it */
    }
    setSource(s);

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
      body: numbersFor(source),
    },
    {
      icon: FileText,
      title: "What you'll leave with",
      body: "An honest assessment of whether this fits, including if it does not, and what we would take over, side by side and in writing.",
    },
  ];

  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      {googleAdsSendTo ? (
        <Script id="gtag-conversion-confirmed" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('event','conversion',{'send_to':'${googleAdsSendTo}'});`}
        </Script>
      ) : null}

      <DeskNav tone="dark" audience={offer} />

      <main>
        <section className="border-t border-ink-100 bg-white">
          <div
            className={`${FRAME} ${GUTTER} border-x border-ink-100 py-16 md:py-24`}
          >
            <div className="max-w-prose">
              <span
                aria-hidden
                className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-500"
              >
                <CheckCircle2
                  aria-hidden
                  className="h-6 w-6 text-white"
                  strokeWidth={1.8}
                />
              </span>
              <p className={`${MICRO} text-brand-500`}>Booking confirmed</p>
              <h1 className={`${D1} mt-4 max-w-headline text-ink-950`}>
                You are booked. Here is what to have ready.
              </h1>
              <p className="mt-6 max-w-measure text-lg text-ink-600">
                Your calendar invite is on its way. It is thirty minutes and
                nothing is signed on the call. The three notes below are worth
                two minutes of preparation, and they are the difference between
                a general conversation and a specific one.
              </p>
            </div>
          </div>
        </section>

        {/* Next steps, on the ink surface: this is a desk moment. */}
        <section className="border-t border-white/10 bg-canvas-ink">
          <div
            className={`${FRAME} ${GUTTER} border-x border-white/10 py-16 md:py-20`}
          >
            <p className={`${MICRO} text-white/60`}>Before we speak</p>
            <div className="mt-8 grid gap-px overflow-hidden rounded-lg bg-white/10 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.title} className="bg-canvas-ink p-7">
                  <s.icon
                    aria-hidden
                    className="mb-4 h-4 w-4 text-brand-400"
                    strokeWidth={1.8}
                  />
                  <h2 className="text-base font-semibold text-white">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm text-white/70">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-ink-100 bg-white">
          <div className={`${FRAME} ${GUTTER} border-x border-ink-100 py-16`}>
            <p className="text-base text-ink-600">
              Need to reach us before the call?{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="font-semibold text-brand-500 underline-offset-4 hover:underline"
              >
                {contactEmail}
              </a>
            </p>
            <a
              href={backHref}
              className={`${MICRO} mt-8 inline-flex min-h-11 items-center text-ink-500 hover:text-brand-500`}
            >
              {backLabel}
            </a>
          </div>
        </section>
      </main>

      <DeskFooter />
    </div>
  );
}
