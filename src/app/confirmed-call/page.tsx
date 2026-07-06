"use client";

/* Booking confirmation — Morningside design language. Conversion tracking
 * scripts preserved byte-for-byte; visual system swapped. */

import { motion } from "framer-motion";
import { CheckCircle, Mail, Calendar, Clock, MessageSquare } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import Script from "next/script";
import NovadaLogo from "@/components/NovadaLogo";
import { GRAD_TEXT, MS_CARD, HERO_WASH } from "@/components/ms";

export default function ConfirmationPage() {
  return (
    <div className="bg-[#080808] font-poppins">
      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-xl border-b border-[#EDECE4]/10">
        <div className="max-container section-padding">
          <div className="flex items-center h-20">
            <Link href="/" className="flex items-center"><NovadaLogo variant="light" className="h-12 w-auto" /></Link>
          </div>
        </div>
      </header>
      <div className="h-20" />
      {/* Google Ads: Booked Call conversion.
          Re-declares the dataLayer/gtag stub so the event is always queued —
          even if this runs before the base gtag tag in layout.tsx. gtag.js
          drains the dataLayer queue once it loads, so the conversion is
          never lost to a script load-order race. */}
      <Script id="gtag-conversion-confirmed" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('event', 'conversion', {'send_to': 'AW-16650862607/YmXMCIr3pYocEI-A4IM-'});`}
      </Script>

      {/* Meta Pixel: Schedule conversion (booked strategy call).
          Re-runs the pixel bootstrap defensively — the IIFE's \`if(f.fbq)return\`
          guard makes it a no-op if the base pixel from layout.tsx already
          loaded, and sets up the fbq queue if this runs first. Either way the
          Schedule event is never lost to a script load-order race. Repeated
          fbq('init') on the same pixel ID is safely deduped by Meta. */}
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

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className={HERO_WASH} />

        <div className="relative max-container section-padding text-center py-32">
          {/* Success icon */}
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
            className={`text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.12] text-balance max-w-3xl mx-auto pb-1 ${GRAD_TEXT}`}
          >
            You&apos;re all set. Your strategy call is booked.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-base md:text-lg font-light text-[#EDECE4]/80 max-w-2xl mx-auto leading-relaxed"
          >
            Thank you for booking a Strategy Call with Novada Tech.
            We&apos;re looking forward to learning about your business and showing
            you how we can help you scale.
          </motion.p>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section-padding pb-24">
        <div className="max-container max-w-3xl">
          <AnimatedSection className="text-center mb-12">
            <p className="font-supply text-xs uppercase tracking-[0.2em] text-[#0CC481] mb-4">
              What Happens Next
            </p>
            <h2 className={`inline-block text-2xl md:text-4xl font-light tracking-tight pb-1 ${GRAD_TEXT}`}>
              Here&apos;s What to Expect
            </h2>
          </AnimatedSection>

          <div className="space-y-5">
            {[
              {
                icon: Mail,
                title: "Check Your Email",
                desc: "You'll receive a confirmation email with your call details, including the date, time, and a calendar invite. Check your spam folder if you don't see it within a few minutes.",
              },
              {
                icon: Calendar,
                title: "Add It to Your Calendar",
                desc: "Accept the calendar invite to make sure you don't miss the call. You'll also receive a reminder before the session.",
              },
              {
                icon: Clock,
                title: "Prepare for Your Call",
                desc: "Think about your current revenue goals, your ideal client profile, and any challenges you're facing with client acquisition. The more context you share, the more value we can deliver on the call.",
              },
              {
                icon: MessageSquare,
                title: "We'll Do the Rest",
                desc: "Our team will review your business before the call so we can come prepared with insights and a preliminary growth strategy tailored to you.",
              },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`${MS_CARD} p-7 flex gap-5 items-start hover:border-[#EDECE4]/[0.14] transition-colors`}>
                  <step.icon className="w-6 h-6 text-[#0CC481] flex-shrink-0 mt-1" strokeWidth={1.4} />
                  <div>
                    <h3 className="text-lg font-normal text-[#EDECE4]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base font-light text-[#EDECE4]/65 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
