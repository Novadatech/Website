"use client";

/*
 * /review-confirmed — booking confirmation for the Desk review calendar.
 * Created 2026-08-27, replacing /workforce-confirmed as the redirect target
 * now that the home page and both offer pages all book through the same
 * calendar.
 *
 * ⚠️ CONVERSION TAG OWNERSHIP. Read before touching the Scripts below.
 *   This page fires its OWN Google Ads conversion and Meta Schedule event,
 *   exactly as /workforce-confirmed does. That is deliberate: GTM's
 *   conversion trigger is URL-scoped to /confirmed-call only, so a page
 *   outside that scope must fire its own or the booking goes uncounted.
 *   NEVER add this URL to the GTM conversion trigger, or every booking
 *   double-counts. Label o6ELCPGhgYwcEI-A4IM- is the live conversion
 *   action; the old YmXMCIr3pYocEI-A4IM- label is dead.
 *   Verify presence by grepping the deployed JS chunk, never by loading
 *   this page in a browser: loading it fires a real conversion.
 *
 * ⚠️ /workforce-confirmed is intentionally left in place. It still serves
 *   /workforce and /workforce-2, which the founder will either repoint or
 *   retire later. Do not delete it without checking those two pages.
 *
 * Serves any booker: the Desk pages set nvt_booking_source, so the next
 * steps adapt. Unknown source falls back to neutral wording.
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

export default function ReviewConfirmedPage() {
  const [source, setSource] = useState<string | null>(null);

  useEffect(() => {
    track("desk_review_confirmed");
    try {
      const s = sessionStorage.getItem("nvt_booking_source");
      if (s) setSource(s);
    } catch {
      /* private browsing: neutral fallback is correct */
    }
  }, []);

  const isClinic = source === "patient-access-desk";
  const isCare = source === "workforce-ops-desk";

  const backHref = isClinic
    ? "/patient-access-desk"
    : isCare
      ? "/workforce-ops-desk"
      : "/";

  const numbersLine = isClinic
    ? "Roughly how many calls and new patient enquiries come in each week, who handles them today, and what happens to the ones that arrive after you close. Estimates are fine."
    : isCare
      ? "Roughly how many after-hours calls and call-offs come in each week, who carries the phone today, and where your worker and service records currently live. Estimates are fine."
      : "Roughly how many calls and enquiries come in each week, who handles them today, and what happens to the ones that arrive after you close. Estimates are fine.";

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
      <Script id="meta-conversion-review" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '3515804598723791');
fbq('track', 'Schedule');`}
      </Script>

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
              Need to reach us before the call?{" "}
              <a
                href="tel:+61485000813"
                className="font-semibold text-[#003DDB] underline-offset-4 hover:underline"
              >
                +61 485 000 813
              </a>{" "}
              or{" "}
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
