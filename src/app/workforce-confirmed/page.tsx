"use client";

/*
 * /workforce-confirmed — booking confirmation for the Novada Workforce
 * After-Hours Cost Review calendar (InaO8Qj92uCQ8BglSMhW
 * redirects here on booking). Same brand chrome and parent-site design
 * system as /workforce; registered in BARE_ROUTES. Fires a
 * workforce_booking_confirmed dataLayer event for GTM.
 */

import { useEffect, useState } from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import { CheckCircle, Mail, ClipboardList, FileText, Phone } from "lucide-react";

const ACCENT = "#0CC481";
const GRAD_TEXT =
  "bg-gradient-to-r from-white to-[#0CC481] bg-clip-text text-transparent";
const CARD =
  "rounded-xl border border-[#EDECE4]/[0.08] bg-gradient-to-br from-[#111413] to-[#050808]";

function track(event: string) {
  try {
    (window as unknown as { dataLayer?: Record<string, unknown>[] }).dataLayer?.push({ event });
  } catch {
    /* analytics must never break the page */
  }
}

export default function WorkforceConfirmedPage() {
  // Which lander sent this booker (au = /workforce, us = /workforce-2).
  // Set via sessionStorage by the landers; null means unknown, so render
  // the market-neutral fallback.
  const [market, setMarket] = useState<"au" | "us" | null>(null);

  useEffect(() => {
    track("workforce_booking_confirmed");
    try {
      const m = sessionStorage.getItem("nvt_wf_market");
      if (m === "au" || m === "us") setMarket(m);
    } catch {}
  }, []);

  const landerHref = market === "us" ? "/workforce-2" : "/workforce";

  return (
    <div className="bg-[#080808] font-poppins overflow-x-clip min-h-screen flex flex-col">
      {/* Google Ads: workforce assessment booking conversion.
          OWNERSHIP NOTE (per the 2026-08 double-fire fix): on /confirmed-call
          the conversion is fired by GTM, whose trigger is scoped to that URL
          only — so THIS page must fire its own snippet, and this URL must
          NEVER be added to the GTM conversion trigger, or it will double-fire.
          Label o6ELCPGhgYwcEI-A4IM- is the live conversion action GTM fires
          (the old YmXMCIr3pYocEI-A4IM- label is inactive). Re-declares the
          dataLayer/gtag stub so the event survives script load-order races. */}
      <Script id="gtag-conversion-workforce" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('event', 'conversion', {'send_to': 'AW-16650862607/o6ELCPGhgYwcEI-A4IM-'});`}
      </Script>

      {/* Meta Pixel: Schedule conversion (booked assessment). Defensive
          bootstrap — no-op if the base pixel from layout.tsx already
          loaded; repeated fbq('init') on the same ID is deduped by Meta. */}
      <Script id="meta-conversion-workforce" strategy="afterInteractive">
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

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-xl border-b border-[#EDECE4]/10">
        <div className="max-container section-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href={landerHref} className="flex items-baseline gap-1.5">
              <span className="text-white font-bold text-lg md:text-xl tracking-tight">Novada</span>
              <span className="font-semibold text-lg md:text-xl tracking-tight" style={{ color: ACCENT }}>Workforce</span>
            </a>
            <a
              href={landerHref}
              className="text-sm text-[#EDECE4]/70 hover:text-white transition-colors"
            >
              Back to overview
            </a>
          </div>
        </div>
      </header>
      <div className="h-16 md:h-20" />

      {/* Confirmation hero */}
      <section className="relative flex-1 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[60vh] bg-[linear-gradient(180deg,#0F1C1C_0%,rgba(8,8,8,0)_100%)] pointer-events-none" />
        <div className="relative max-container section-padding py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="mx-auto mb-8"
          >
            <div className="w-24 h-24 rounded-full border border-[#0CC481]/30 flex items-center justify-center mx-auto">
              <CheckCircle className="w-12 h-12 text-[#0CC481]" strokeWidth={1.2} />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance max-w-3xl mx-auto text-white"
          >
            You&apos;re booked.{" "}
            <span className={GRAD_TEXT}>Your After-Hours Cost Review is confirmed.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-5 text-base md:text-lg text-[#EDECE4]/85 max-w-2xl mx-auto leading-relaxed"
          >
            We&apos;re looking forward to walking through your after-hours
            operation with you. A calendar invite is on its way to your inbox.
          </motion.p>

          {/* Next steps */}
          <div className="mt-12 grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto text-left">
            {[
              {
                icon: Mail,
                title: "Check your email",
                desc: "Your confirmation and calendar invite are on the way. Check spam if nothing arrives within a few minutes.",
              },
              {
                icon: ClipboardList,
                title: "Have your numbers handy",
                desc: "Who holds the after-hours phone today, what you pay in allowances or overtime, and roughly how many after-hours calls come in each week. Estimates are fine; the session is built to sharpen them.",
              },
              {
                icon: FileText,
                title: "What you'll leave with",
                desc: "A side-by-side of what your current after-hours arrangement costs against a flat monthly coordination desk, in writing, whether or not you go ahead.",
              },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className={`${CARD} p-6`}
              >
                <s.icon className="w-6 h-6 mb-3" style={{ color: ACCENT }} strokeWidth={1.5} />
                <h3 className="text-base font-semibold text-white mb-1.5">{s.title}</h3>
                <p className="text-sm text-[#EDECE4]/70 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 text-sm text-[#EDECE4]/60"
          >
            Need to reach us before the call?{" "}
            {market !== "au" && (
              <>
                <a href="tel:+18333853923" className="text-[#0CC481] underline underline-offset-2 inline-flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" /> +1 833-385-3923
                </a>
                {market === null && <> {" "}·{" "} </>}
              </>
            )}
            {market !== "us" && (
              <a href="tel:+61485000813" className="text-[#0CC481] underline underline-offset-2 inline-flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" /> +61 485 000 813
              </a>
            )}{" "}
            ·{" "}
            <a href="mailto:support@novadatech.com.au" className="text-[#0CC481] underline underline-offset-2">
              support@novadatech.com.au
            </a>
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#EDECE4]/[0.07] bg-[#080808]">
        <div className="max-container section-padding py-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-white font-bold text-base tracking-tight">
              Novada <span style={{ color: ACCENT }}>Workforce</span>
            </p>
            <p className="font-supply text-[10px] uppercase tracking-[0.15em] text-[#EDECE4]/40">
              More shifts recovered. Fewer managers on-call.
            </p>
            <p className="text-xs text-[#EDECE4]/35">
              A <span className="text-[#EDECE4]/55">Novada Tech</span> service · ©{" "}
              {new Date().getFullYear()} Novada Tech. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
