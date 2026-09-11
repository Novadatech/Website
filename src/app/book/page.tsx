/*
 * /book : the shareable booking link.
 *
 * Built 11 September 2026 at the founder's request, so a lead can be sent
 * one short URL and book without being routed through a lander first.
 * "novadatech.com.au/book" is the whole point of the route name: it has to
 * survive being read aloud on a call and typed from memory.
 *
 * ── WHAT THIS PAGE IS FOR, WHICH DRIVES EVERY DECISION BELOW ──────────
 * The visitor already knows who we are. Somebody sent them this link, in
 * an email or a message or on a call. They are not being persuaded here,
 * they are being got out of the way of the calendar. So:
 *
 *  1. THE CALENDAR IS HIGH. The hero is two short lines and then the
 *     booking frame. Do not grow the hero. Every band added above the
 *     calendar is a band a warm lead has to scroll past.
 *  2. NO SELL. No statistics, no proof stack, no testimonials, no sticky
 *     bar. The reassurance that IS here sits BELOW the calendar, for the
 *     reader who hesitates, not above it for the reader who did not.
 *  3. FunnelHeader, not DeskNav. DeskNav offers three exits to a person
 *     whose only job on this page is to pick a time. The logo DOES link
 *     home, which is the difference between this page and the meetings
 *     funnel: this is the main brand site, and a lead sanity-checking us
 *     should be able to get there.
 *  4. showGuarantee={false} on the footer. That link goes to the meetings
 *     offer's fifteen-meetings-a-month guarantee, and this page books a
 *     Desk review, which guarantees no outcomes. Putting both in one
 *     footer invites a reader to hold one against the other. The same
 *     reasoning is written out at the top of FunnelChrome.tsx.
 *  5. noindex. It is a link we hand out, it is thin, and its calendar is
 *     the same one already embedded at /#book. Indexing it would only
 *     split signal between two near-identical pages.
 *
 * ── ATTRIBUTION ──────────────────────────────────────────────────────
 * source="book-link" is the only way to tell a booking made from a shared
 * link apart from one made on the website. It rides along as utm_content
 * and is written to sessionStorage for /review-confirmed. That page
 * branches on "operations-partner" and "workforce-partner" and falls
 * through to neutral wording for anything else, which is correct here:
 * this page serves leads for both offers, so it must not assume one.
 *
 * ⚠️ THE CALENDAR IS NAMED FOR ONE OFFER. As at 11 September 2026 the
 * widget's own title in the booking platform reads "Book An Operations
 * Review". A Workforce Partner lead sent this link is therefore shown the
 * other offer's name at the moment they commit. One calendar serves both
 * offers, so this cannot be fixed from this file: it is a rename in the
 * platform, or a second calendar. Flagged, not fixable here.
 *
 * COPY: every sentence is lifted from copy already live. The two body
 * paragraphs are the booking calendar's own description text, and the
 * numbers prompt is the one /review-confirmed already sends people. No
 * new claim is made on this page.
 */

import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import BookingEmbed from "@/components/desk/BookingEmbed";
import { FunnelHeader, FunnelFooter } from "@/components/desk/FunnelChrome";
import { BAND_Y, DISPLAY, MICRO, NUM, PAD, WRAP } from "@/components/desk/Band";

export const metadata: Metadata = {
  title: "Book a review | Novada Tech",
  description:
    "Book a 30 minute review. We map what your desk handles today and what that workload costs you to cover now. You leave with your own numbers, whether or not you go ahead.",
  // Handed out as a link, never found in search. See note 5 above.
  robots: { index: false, follow: false },
};

/* The three answers a hesitant reader wants, in the order they ask them.
   Below the calendar on purpose. */
const REASSURANCE = [
  {
    k: "How long",
    v: "Thirty minutes, once. There is no sequence of calls after it and nobody will chase you.",
  },
  {
    k: "What to bring",
    v: "Roughly how many after-hours calls and call-offs come in each week, who carries the phone today, and where your worker and service records currently live. Estimates are fine.",
  },
  {
    k: "What you leave with",
    v: "Your current arrangement and what a desk would take over, side by side and in writing, whether or not you go ahead.",
  },
];

export default function BookPage() {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      {/* The logo links home here, unlike the meetings funnel. See note 3. */}
      <FunnelHeader logoHref="/" />

      <main>
        {/* Hero. Deliberately short: two lines and then the calendar. */}
        <section className="border-t border-[#E3E6EC] bg-white">
          <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] py-12 md:py-16`}>
            <AnimatedSection>
              <p className={`${MICRO} text-[#003DDB]`}>
                Book a review <span className="text-[#C3CAD5]">·</span>{" "}
                <span className={NUM}>30</span> minutes
              </p>
              <h1
                className={`${DISPLAY} mt-4 text-[38px] text-[#0B0E14] sm:text-[48px] md:text-[58px]`}
              >
                Pick a time that suits you.
              </h1>
              <p className="mt-5 max-w-[680px] text-[16px] leading-[1.62] text-[#454E5C] md:text-[17px]">
                We map what your desk handles today: the calls, the call-offs,
                the coordination, and what that workload costs you to cover
                now.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* The calendar, on the reserved ink surface. Booking is the desk
            moment on every other page in this system, and it is the only
            thing on this one. */}
        <section className="border-t border-white/10 bg-[#0A0D14]">
          <div className={`${WRAP} ${PAD} border-x border-white/10 py-12 md:py-16`}>
            <AnimatedSection>
              <div className="mx-auto max-w-[940px]">
                <BookingEmbed
                  source="book-link"
                  title="Book a review with Novada"
                  tone="dark"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Reassurance, below the calendar, for the reader who hesitated. */}
        <section className="border-t border-[#E3E6EC] bg-[#F7F8FA]">
          <div className={`${WRAP} ${PAD} border-x border-[#E3E6EC] ${BAND_Y}`}>
            <div className="border-t border-[#D3D8E2]">
              {REASSURANCE.map((r, i) => (
                <AnimatedSection key={r.k} delay={i * 0.05}>
                  <div className="grid grid-cols-1 items-start gap-x-6 gap-y-2 border-b border-[#E3E6EC] py-5 sm:grid-cols-[168px_minmax(0,1fr)] sm:px-3">
                    <span className={`${MICRO} pt-[3px] text-[#003DDB]`}>
                      {r.k}
                    </span>
                    <p className="text-[15px] leading-[1.62] text-[#0B0E14] md:text-[16px]">
                      {r.v}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.16}>
              <p className="mt-8 max-w-[760px] border-l-2 border-[#003DDB] pl-5 text-[17px] font-medium leading-[1.5] text-[#0B0E14] md:text-[20px]">
                You leave with your own numbers, side by side and in writing,
                whether or not you go ahead.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.22}>
              <p className="mt-8 text-[15px] text-[#4A5361]">
                Can&apos;t find a time that works?{" "}
                <a
                  href="mailto:support@novadatech.com.au"
                  className="font-semibold text-[#003DDB] underline-offset-4 hover:underline"
                >
                  support@novadatech.com.au
                </a>
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* showGuarantee={false}: that link belongs to the other offer. Note 4. */}
      <FunnelFooter showGuarantee={false} />
    </div>
  );
}
