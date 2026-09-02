"use client";

/*
 * /confirmed-call : booking confirmation for the meetings offer. This is
 * where the /meetings-3 calendar sends every person who books.
 *
 * REBUILT 2026-09-02 into the Desk visual system, on founder instruction.
 * It was the last page still on the legacy dark language, which meant the
 * booking journey ran from a white lander to a dark confirmation. Chrome
 * is FunnelHeader/FunnelFooter, matching /meetings-3. The header carries
 * no call to action: the visitor has just booked, and the one thing we
 * must not do here is invite them to book again.
 *
 * ══════════════════════════════════════════════════════════════════════
 * ⚠️ CONVERSION TAG OWNERSHIP. Read this before touching anything below.
 *
 *  · THE URL IS LOAD-BEARING. The Google Ads conversion for a booked call
 *    is fired by GTM (container GTM-5CL2Q8M8) off a trigger scoped to
 *    THIS URL. Renaming or redirecting /confirmed-call silently stops
 *    every booking from being counted. The page still looks fine while it
 *    happens, which is what makes it dangerous.
 *
 *  · DO NOT ADD A gtag CONVERSION SNIPPET HERE. One used to live on this
 *    page and it DOUBLE-FIRED against the GTM-side tag: two en=conversion
 *    hits per page load, confirmed by the Google Ads specialist. It was
 *    removed on 2026-07-27. Exactly one owner: GTM. This is the opposite
 *    of /review-confirmed, which fires its own snippet precisely because
 *    it sits OUTSIDE the GTM trigger's URL scope. Never add that URL to
 *    the trigger, and never add a snippet to this one.
 *
 *  · The live Google Ads conversion action is label o6ELCPGhgYwcEI-A4IM-.
 *    The label named in the previous version of this comment,
 *    YmXMCIr3pYocEI-A4IM-, is DEAD. Neither appears in this file, because
 *    the tag lives in GTM. Noted here only so the stale label does not get
 *    copied back out of version history into a live tag.
 *
 *  · The Meta Schedule Script below is preserved byte-for-byte. It is the
 *    only tag this page owns.
 *
 *  · VERIFY BY GREPPING THE DEPLOYED CHUNK, NEVER BY LOADING THIS PAGE IN
 *    A BROWSER. Loading it fires a real conversion and pollutes the ad
 *    account with a booking that never happened.
 * ══════════════════════════════════════════════════════════════════════
 *
 * Deliberately no new dataLayer push was added during the rebuild. GTM is
 * watching this URL with triggers that cannot be inspected from the repo,
 * so nothing new is emitted into the dataLayer from here.
 */

import Script from "next/script";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Mail, CalendarCheck, ClipboardList, Users } from "lucide-react";
import { FunnelHeader, FunnelFooter } from "@/components/desk/FunnelChrome";
import { MICRO, NUM, PAD, WRAP, DISPLAY } from "@/components/desk/Band";

const BODY = "text-[15px] leading-relaxed text-[#454E5C] md:text-base";

const STEPS = [
  {
    icon: Mail,
    title: "Check your email",
    desc: "You will receive a confirmation email with your call details, including the date, the time and a calendar invite. Check your spam folder if you do not see it within a few minutes.",
  },
  {
    icon: CalendarCheck,
    title: "Add it to your calendar",
    desc: "Accept the calendar invite so the call does not get missed. You will also receive a reminder before the session.",
  },
  {
    icon: ClipboardList,
    title: "Prepare for your call",
    desc: "Think about your current revenue goals, your ideal client profile, and any challenges you are facing with client acquisition. The more context you share, the more value we can deliver on the call.",
  },
  {
    icon: Users,
    title: "We will do the rest",
    desc: "Our team will review your business before the call so we can come prepared with insights and a preliminary growth strategy tailored to you.",
  },
];

export default function ConfirmationPage() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      {/* Meta Pixel: Schedule conversion (booked strategy call).
          Re-runs the pixel bootstrap defensively. The IIFE's `if(f.fbq)return`
          guard makes it a no-op if the base pixel from layout.tsx already
          loaded, and sets up the fbq queue if this runs first. Either way the
          Schedule event is never lost to a script load-order race. Repeated
          fbq('init') on the same pixel ID is safely deduped by Meta.

          The Google Ads conversion is NOT here. GTM owns it. See the
          ownership block at the top of this file. */}
      <Script id="meta-conversion-confirmed" strategy="afterInteractive">
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

      {/* No CTA in the header: they have just booked. */}
      <FunnelHeader />

      <main>
        {/* ── Confirmation ── */}
        <section className="border-t border-[#E3E6EC] bg-white">
          <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-16 md:py-24`}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-[760px]"
            >
              <span className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#003DDB]">
                <Check className="h-6 w-6 text-white" strokeWidth={2.5} />
              </span>

              <p className={`${MICRO} text-[#003DDB]`}>Booking confirmed</p>

              <h1
                className={`${DISPLAY} mt-5 text-[40px] text-[#0A0D14] sm:text-[52px] md:text-[64px]`}
              >
                You are all set. Your strategy call is booked.
              </h1>

              <p className={`${BODY} mt-6 max-w-[640px]`}>
                Thank you for booking a strategy call with Novada Tech. We are
                looking forward to learning about your business and showing you
                how we can help you scale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── What happens next ── */}
        <section className="border-t border-[#E3E6EC] bg-[#F7F8FA]">
          <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-14 md:py-20`}>
            <div className="grid gap-10 lg:grid-cols-[124px_minmax(0,1fr)] lg:gap-12">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <div className="flex items-center gap-3 lg:block">
                  <span className={`${MICRO} ${NUM} text-[#9AA3B1]`}>01</span>
                  <span
                    aria-hidden
                    className="h-px w-6 bg-[#E3E6EC] lg:my-3 lg:h-6 lg:w-px"
                  />
                  <h2 className={`${MICRO} text-[#0B0E14]`}>What happens next</h2>
                </div>
              </div>

              <div className="min-w-0">
                <p
                  className={`${DISPLAY} text-[30px] text-[#0A0D14] sm:text-[38px] md:text-[44px]`}
                >
                  Here is what to expect
                </p>

                <ol className="mt-9 max-w-[760px] divide-y divide-[#E3E6EC] border-y border-[#E3E6EC]">
                  {STEPS.map((s, i) => (
                    <li
                      key={s.title}
                      className="grid gap-4 py-6 sm:grid-cols-[52px_minmax(0,1fr)] sm:gap-6"
                    >
                      <div className="flex items-start gap-3 sm:block">
                        <span className={`${MICRO} ${NUM} text-[#9AA3B1]`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2.5">
                          <s.icon
                            className="h-[18px] w-[18px] flex-shrink-0 text-[#003DDB]"
                            strokeWidth={1.8}
                          />
                          <p className="text-[17px] font-semibold tracking-tight text-[#0B0E14]">
                            {s.title}
                          </p>
                        </div>
                        <p className={`${BODY} mt-2.5 max-w-[600px]`}>{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ── While you wait. A confirmation page should not dead-end. ── */}
        <section className="border-t border-[#E3E6EC] bg-[#0A0D14]">
          <div className={`${WRAP} ${PAD} border-x border-white/10 py-14 md:py-16`}>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className={`${MICRO} text-white/50`}>While you wait</p>
                <p
                  className={`${DISPLAY} mt-4 max-w-[20ch] text-[26px] text-white sm:text-[32px] md:text-[38px]`}
                >
                  See what the engagement looks like from the inside
                </p>
              </div>
              <Link
                href="/case-study"
                className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-[6px] bg-white px-6 py-3.5 text-[14px] font-semibold text-[#0A0D14] transition-colors hover:bg-[#E8ECF5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0D14]"
              >
                Read the case studies
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FunnelFooter note="Qualified meetings, booked for you" />
    </div>
  );
}
