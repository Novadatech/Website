"use client";

/*
 * ══════════════════════════════════════════════════════════════════════
 * WORKFORCE CONTINUITY BOOKING CONFIRMATION. Byte-identical in both
 * repos; the per-market words come in as props from each site's route,
 * src/app/workforce-continuity/confirmed/page.tsx.
 *
 * 🔴 ONE PAGE PER MARKET, EVERY INDUSTRY. Founder, 27 Nov 2026: the
 * offer has ONE calendar for Australia and ONE for the United States,
 * and every booking from that market redirects here whichever industry
 * page it came from. So nothing on this page may name an industry, a
 * role type or a page the booker came from. Keep it general.
 *
 * ⚠️ WC CHROME ONLY. Workforce Continuity never links to the AI
 * Workforce pages (founder rule), which is why this does not reuse
 * components/desk/ConfirmedPage: that one carries the AI header and
 * footer. The pixel logic below is the same as there.
 *
 * ⚠️ content_category IS "workforce-continuity", a NEW category, so WC
 * bookings never inflate the care or practices conversions. A Meta
 * custom conversion for it does not exist yet.
 *
 * ⚠️ THE BASE PIXEL AND PageView COME FROM src/app/layout.tsx. This adds
 * the Schedule event only; ensureFbq returns the existing fbq.
 * ══════════════════════════════════════════════════════════════════════
 */

import { useEffect, type ComponentType } from "react";
import { Check, ClipboardList, FileText, Mail } from "lucide-react";
import { FRAME, GUTTER, MICRO } from "@/components/desk/tokens";
import { CREAM, CREAM_DEEP, SERIF } from "@/components/lp/kit";
import { WcFooter, WcHeader } from "@/components/wc/WcChrome";
import { WC_BASE, WC_EMAIL } from "@/content/wc";

const PIXEL_ID = "3515804598723791";
const CATEGORY = "workforce-continuity";
const EVENT_NAME = "Workforce Continuity review";

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

export type WcConfirmedCopy = {
  /** "You're booked" lead paragraph. */
  lead: string;
  /** The "have your workforce picture handy" card. */
  prepare: string;
  /** The "what you'll leave with" card. */
  leaveWith: string;
};

export default function WcConfirmed({ copy }: { copy: WcConfirmedCopy }) {
  useEffect(() => {
    try {
      (window as unknown as { dataLayer?: Record<string, unknown>[] }).dataLayer?.push({ event: "wc_review_confirmed" });
    } catch {
      /* analytics must never break the page */
    }
    try {
      const fbq = ensureFbq();
      fbq?.("init", PIXEL_ID);
      fbq?.(
        "track",
        "Schedule",
        { content_name: EVENT_NAME, content_category: CATEGORY },
        { eventID: CATEGORY + "-" + Date.now() + "-" + Math.random().toString(36).slice(2, 10) },
      );
    } catch {
      /* the pixel is blocked; the booking still happened */
    }
  }, []);

  const steps: { icon: ComponentType<{ className?: string; strokeWidth?: number }>; title: string; body: string }[] = [
    {
      icon: Mail,
      title: "Check your email",
      body: "Your confirmation and calendar invite are on the way. Check your spam folder if nothing arrives within a few minutes.",
    },
    { icon: ClipboardList, title: "Have your workforce picture handy", body: copy.prepare },
    { icon: FileText, title: "What you’ll leave with", body: copy.leaveWith },
  ];

  return (
    <div data-theme="desk" data-lp="cream" className="min-h-screen font-sans" style={{ backgroundColor: CREAM }}>
      <WcHeader cta={{ href: WC_BASE, label: "See the service", short: "The service" }} anchorBase={WC_BASE} />

      <main>
        <section className="relative overflow-hidden" style={{ backgroundColor: CREAM }}>
          <div className={`${FRAME} ${GUTTER} py-14 md:py-20`}>
            <div className="mx-auto max-w-[760px] text-center">
              <span aria-hidden className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 shadow-cta">
                <Check aria-hidden className="h-7 w-7 text-white" strokeWidth={2.4} />
              </span>
              <p className={`${MICRO} text-brand-500`}>Booking confirmed</p>
              <h1
                style={SERIF}
                className="mt-4 text-balance text-[clamp(1.9rem,1.2rem+2.5vw,3rem)] font-bold leading-[1.1] tracking-[-0.015em] text-ink-950"
              >
                Your workforce review is booked.
              </h1>
              <p className="mx-auto mt-6 max-w-[58ch] text-lg leading-relaxed text-ink-600">{copy.lead}</p>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: CREAM_DEEP }}>
          <div className={`${FRAME} ${GUTTER} py-16 md:py-20`}>
            <div className="grid gap-5 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.title} className="rounded-lg border border-ink-100 bg-white p-7 shadow-float">
                  <span aria-hidden className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-100">
                    <s.icon aria-hidden className="h-5 w-5 text-brand-600" strokeWidth={1.9} />
                  </span>
                  <h2 style={SERIF} className="text-xl font-bold leading-snug text-ink-950">{s.title}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: CREAM }}>
          <div className={`${FRAME} ${GUTTER} py-14 md:py-16`}>
            <div className="mx-auto max-w-[760px] text-center">
              <p className="text-base text-ink-600">
                Need to reach us before the call?{" "}
                <a
                  href={`mailto:${WC_EMAIL}`}
                  className="inline-flex min-h-11 items-center font-semibold text-brand-500 underline-offset-4 hover:underline"
                >
                  {WC_EMAIL}
                </a>
              </p>
              <a
                href={WC_BASE}
                className={`${MICRO} mt-7 inline-flex min-h-11 items-center text-ink-500 transition-colors duration-150 hover:text-brand-500`}
              >
                Back to Workforce Continuity
              </a>
            </div>
          </div>
        </section>
      </main>

      <WcFooter anchorBase={WC_BASE} />
    </div>
  );
}
