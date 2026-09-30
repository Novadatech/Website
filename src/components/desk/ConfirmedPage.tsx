"use client";

/*
 * ══════════════════════════════════════════════════════════════════════
 * THE BOOKING CONFIRMATION. One scaffold, one page per DESK.
 *
 *   novadatech.com.au/practices/patient-access/confirmed
 *   novadatech.com.au/practices/workforce/confirmed
 *   novadatech.com.au/care/operations/confirmed
 *   novadatech.com.au/care/workforce/confirmed
 *
 * ⚠️ THE CALENDARS ARE SPLIT BY DESK, NOT BY MARKET, and all four pages
 * live on the Australian domain. Read that sentence twice before editing
 * any copy here, because it is the opposite of what the previous version
 * of this file assumed.
 *
 * The consequence: every page serves BOTH markets. An American booker
 * lands here too, and sessionStorage is per-origin so a .com booker
 * arrives carrying nothing. THE COPY IS THEREFORE MARKET-NEUTRAL AGAIN.
 * No market spelling (inquiry / enquiry), no market-specific nouns
 * (roster / schedule, licence / license, caregiver / support worker),
 * no 911 / 000, and no phone number. Say the thing both markets say.
 *
 * ⚠️ THE DESK IS FIXED BY THE URL. Each page serves exactly one desk, so
 * nothing here guesses it from the booking source and there is no
 * fallback copy to get wrong. That is the whole gain of splitting by
 * desk rather than by offer.
 *
 * ⚠️ `market` IS PROGRESSIVE ENHANCEMENT AND MAY NEVER ARRIVE. If the
 * booking widget happens to forward utm_source to the redirect, the page
 * can quietly use that market's wording. It is UNVERIFIED whether the
 * provider does forward it, so every page must read correctly on the
 * neutral copy alone, and the neutral copy is what ships. Never make a
 * market variant carry information the neutral one lacks.
 *
 * ⚠️ content_category STAYS THE OFFER ("practices" / "care"), because the
 * Meta custom conversions are defined on it. The DESK goes in
 * content_name. Do not move the desk into content_category or the
 * conversions stop matching.
 *
 * ⚠️ HOW TO VERIFY THE PIXEL FIRES. Not by grepping the HTML, where it
 * does not appear, and not with request interception, which reports a
 * false negative because fbevents.js uses a transport Playwright's
 * page.route cannot see. Block connect.facebook.net so fbq stays a
 * queueing stub, then read window.fbq.queue.
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

/** Neutral copy is required; the market variants are optional polish. */
export type Copy = { neutral: string; us?: string; au?: string };

export type ConfirmedPageProps = {
  /** The offer, for content_category. Fixed by the URL. */
  offer: "practices" | "care";
  /** Meta content_name. Names the DESK, e.g. "Operations Desk review". */
  eventName: string;
  /** The "have your numbers handy" line. `neutral` must stand alone. */
  numbers: Copy;
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
