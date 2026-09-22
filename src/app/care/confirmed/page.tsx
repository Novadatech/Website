"use client";

/*
 * ══════════════════════════════════════════════════════════════════════
 * /care/confirmed — THE CARE BOOKING CONFIRMATION.
 *
 * Reached only by the care calendar's redirect (InaO8Qj92uCQ8BglSMhW).
 * It replaced the shared /review-confirmed, which had to hedge because
 * it served both offers at once.
 *
 * ⚠️ THE OFFER IS FIXED BY THE URL. Every visitor here booked a care
 * review, so this page never guesses the audience.
 *
 * ⚠️ BUT IT IS STILL MARKET-NEUTRAL, which is a different rule. A
 * calendar has ONE redirect and the care calendar is embedded on BOTH
 * domains, so American care bookers land here too. No market spelling,
 * no roster / schedule, no 000 / 911, and NO PHONE NUMBER: a +61 number
 * is the strongest "foreign company" signal a US booker can meet. Only
 * four calendars would lift this.
 *
 * ⚠️ THE GOOGLE ADS CONVERSION LIVES HERE, and only here. Label
 * o6ELCPGhgYwcEI-A4IM-. Loading this page in a browser fires a REAL
 * conversion. Never add this URL to the GTM conversion trigger, which is
 * scoped to /confirmed-call, or every booking double-counts.
 *
 * ⚠️ It therefore also fires for American care bookers, because they
 * land here too. That is a known consequence of two calendars, not a
 * bug to patch on this page.
 *
 * `nvt_booking_source` still tailors the DESK within the offer
 * (operations vs workforce). It is per-origin, so a cross-market booker
 * arrives without it and gets the offer-level copy.
 * ══════════════════════════════════════════════════════════════════════
 */

import { useEffect, useState } from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, ClipboardList, FileText } from "lucide-react";
import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";

const WRAP = "mx-auto w-full max-w-[1240px]";
const PAD = "px-5 sm:px-8 lg:px-12";
const MICRO =
  "font-supply text-[12px] font-medium uppercase tracking-[0.14em]";
const DISPLAY =
  "font-condensed font-bold uppercase leading-[0.92] tracking-[-0.012em]";

function track(event: string) {
  try {
    (window as unknown as { dataLayer?: Record<string, unknown>[] }).dataLayer?.push({ event });
  } catch {
    /* analytics must never break the page */
  }
}

/*
 * ⚠️ THE BOOTSTRAP RUNS HERE, IMMEDIATELY BEFORE THE EVENT, and that is
 * the whole point of this function.
 *
 * The conversion used to live in an inline <Script strategy="afterInteractive">.
 * When the event gained parameters that depend on the booking source, it
 * moved into the effect, because the source is only readable from
 * sessionStorage on the client. That introduced a race nobody could see:
 * the effect runs BEFORE an afterInteractive script has executed, so
 * `window.fbq` was still undefined, the optional call no-opped, and NO
 * BEACON WAS SENT AT ALL. Checking `typeof fbq` a second later showed a
 * function and made it look fine.
 *
 * This is Meta's own snippet. It is idempotent (returns early if fbq
 * exists) and the stub it installs QUEUES calls until fbevents.js loads,
 * so the event survives regardless of script ordering.
 *
 * ⚠️ Verify this with a network assertion, never by reading the code. The
 * only proof is a request to facebook.com/tr carrying ev=Schedule.
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

export default function ReviewConfirmedPage() {
  const [source, setSource] = useState<string | null>(null);

  useEffect(() => {
    track("desk_review_confirmed");
    try {
      const s = sessionStorage.getItem("nvt_booking_source");
      if (s) setSource(s);

      /* ⚠️ THE META EVENT FIRES FROM HERE, not the inline script. It used
         to be a bare fbq('track','Schedule') with no parameters, so an
         Australian booking could not be told apart from any other, and
         once this domain gained a practices door it could not be told
         apart by offer either. The URL separates the markets and
         content_category separates the offers. */
      const fbq = ensureFbq();
      fbq?.("init", "3515804598723791");
      fbq?.(
        "track",
        "Schedule",
        {
          content_name: "Care Desk review",
          content_category: "care",
        },
        {
          eventID:
            "care-" + Date.now() + "-" + Math.random().toString(36).slice(2, 10),
        },
      );
    } catch {
      /* private browsing or a blocked pixel: the booking still happened */
    }
  }, []);

  /*
   * ⚠️ THIS PAGE MUST BE MARKET-NEUTRAL, and that is not the same rule as
   * the rest of the site.
 *
   * Every page on this domain is written for one market. This one cannot
   * be, because a calendar has exactly ONE redirect and each calendar is
   * embedded on BOTH domains. So this page receives bookers from the other
   * market as well as its own, and it has no way to tell which is which:
   * `nvt_booking_source` lives in sessionStorage, which is per-origin, so a
   * cross-domain arrival brings nothing with it and lands on the neutral
   * fallback by definition.
 *
   * Therefore: no market spelling (inquiry / enquiry), no market-specific
   * nouns (roster / schedule, licence / license, caregiver / support
   * worker, 911 / 000). Say the thing both markets say.
 *
   * ⚠️ THE NEUTRAL FALLBACK IS NOT AN EDGE CASE HERE. It is what every
   * cross-market booker sees, so it has to read as finished copy rather
   * than a degraded default.
 *
   * The real fix is one calendar per offer PER MARKET, four in total, at
   * which point each page receives only its own market and this rule can
   * relax. Until then, neutral.
 */

  /*
   * ⚠️ REWIRED 21 SEPTEMBER 2026 FOR THE TWO DOORS, and it had to be:
   * this branched on source === "operations-partner" / "workforce-partner",
   * and BookingEmbed has not written either of those since the restructure.
   * Every booking was silently falling through to the neutral fallback and
   * the back link was pointing at the home page.
   *
   * `nvt_booking_source` now looks like "care-operations",
   * "practices-patient-access", "care-hub" or "book-link". The audience is
   * the part before the first hyphen; "book-link" is the shareable care
   * link, so it counts as care.
   */

  const desk = source?.includes("workforce")
    ? "workforce"
    : source?.includes("operations") || source === "book-link"
      ? "operations"
      : null;
  const backHref = desk ? `/care/${desk}` : "/care";

  const numbersLine =
    desk === "workforce"
      ? "Roughly how many people you hire in a year, how long a hire currently takes, and where your screening, onboarding and training records live today. Estimates are fine."
      : desk === "operations"
        ? "Roughly how many after-hours calls and call-offs come in each week, who carries the phone today, and where your service records currently live. Estimates are fine."
        : "Roughly how many after-hours calls and call-offs come in each week, how often you are hiring, and where your records currently live. Estimates are fine.";

  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      {/* Google Ads: Desk review booking conversion. See the ownership note
          at the top of this file before changing anything here. */}
      <Script id="gtag-conversion-review" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('event', 'conversion', {'send_to': 'AW-16650862607/o6ELCPGhgYwcEI-A4IM-'});`}
      </Script>

      {/* Meta Pixel: Schedule. Defensive bootstrap, a no-op if the base pixel
          from layout.tsx already loaded. Repeated init on one ID is deduped. */}

      <DeskNav />

      <main>
        <section className="border-t border-[#E3E6EC] bg-white">
          <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-16 md:py-24`}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-[760px]"
            >
              <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#003DDB]">
                <CheckCircle2 className="h-6 w-6 text-white" strokeWidth={1.8} />
              </span>
              <p className={`${MICRO} text-[#003DDB]`}>Booking confirmed</p>
              <h1 className={`${DISPLAY} mt-4 text-[38px] text-[#0B0E14] sm:text-[48px] md:text-[60px]`}>
                You&apos;re booked. Your desk review is confirmed.
              </h1>
              <p className="mt-6 max-w-[620px] text-[16px] leading-relaxed text-[#4A5361] md:text-[17px]">
                A calendar invite is on its way to your inbox. We&apos;re
                looking forward to walking through your desk with you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Next steps, on the ink surface: this is a desk moment. */}
        <section className="border-t border-white/10 bg-[#0A0D14]">
          <div className={`${WRAP} ${PAD} border-x border-white/10 py-16 md:py-20`}>
            <p className={`${MICRO} text-white/45`}>Before we speak</p>
            <div className="mt-8 grid gap-px overflow-hidden rounded-[6px] bg-white/10 md:grid-cols-3">
              {[
                {
                  icon: Mail,
                  title: "Check your email",
                  body: "Your confirmation and calendar invite are on the way. Check spam if nothing arrives within a few minutes.",
                },
                {
                  icon: ClipboardList,
                  title: "Have your numbers handy",
                  body: numbersLine,
                },
                {
                  icon: FileText,
                  title: "What you'll leave with",
                  body: "Your current arrangement and what a desk would take over, side by side and in writing, whether or not you go ahead.",
                },
              ].map((s) => (
                <div key={s.title} className="bg-[#0A0D14] p-7">
                  <s.icon className="mb-4 h-4 w-4 text-[#3A6CFF]" strokeWidth={1.8} />
                  <h2 className="text-[15px] font-semibold text-white">{s.title}</h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/60">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#E3E6EC] bg-white">
          <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-14`}>
            <p className="text-[15px] text-[#4A5361]">
              {/* ⚠️ THE PHONE NUMBER CAME OFF ON 21 SEPTEMBER 2026, and it
                  is the market-neutral rule at the top of this file doing
                  the work. A +61 number is the single strongest "this is a
                  foreign company" signal a reader can meet, and since each
                  calendar redirects to one domain regardless of where the
                  booking was made, American care bookers land on this page.
                  Email is the one contact route that reads correctly in
                  both markets, and it is already the only one on .com.

                  Put a number back only when there are four calendars and
                  this page receives its own market again, and then put the
                  RIGHT country's number on each domain. */}
              Need to reach us before the call?{" "}
              <a
                href="mailto:support@novadatech.com.au"
                className="font-semibold text-[#003DDB] underline-offset-4 hover:underline"
              >
                support@novadatech.com.au
              </a>
            </p>
            <a
              href={backHref}
              className={`${MICRO} mt-6 inline-block text-[#7B8492] hover:text-[#003DDB]`}
            >
              Back to the site
            </a>
          </div>
        </section>
      </main>

      <DeskFooter />
    </div>
  );
}
