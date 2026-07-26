import type { Metadata } from "next";

// Guarantee & Terms — the accessible guarantee/refund policy page required
// by Google Ads' Unreliable Claims policy (developer brief Task 5.2b).
// Linked from the /meetings-2 guarantee claims and the lander footer.
// Deliberately indexable: Google's ad review must be able to reach it.
export const metadata: Metadata = {
  title: "Guarantee & Terms | Novada Tech",
  description:
    "Exactly what the Novada Tech 15+ qualified meetings a month guarantee covers, how a qualified meeting is defined, what you pay and when, and what happens if a meeting cancels.",
};

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-normal text-[#EDECE4] mb-4">
        {number}. {title}
      </h2>
      {children}
    </div>
  );
}

const P = "font-light text-[#EDECE4]/75 leading-relaxed";

export default function GuaranteeTermsPage() {
  return (
    <div className="bg-[#080808] font-poppins">
      {/* Hero */}
      <section className="relative pt-32 pb-10 md:pt-40 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0F1C1C_0%,rgba(8,8,8,0)_100%)]" />
        <div className="relative max-container section-padding text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight pb-1 bg-gradient-to-r from-white to-[#0CC481] bg-clip-text text-transparent">
            Guarantee &amp; Terms
          </h1>
          <p className="font-supply mt-4 text-xs uppercase tracking-[0.2em] text-[#EDECE4]/40">
            Last Updated: July 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding pb-20">
        <div className="max-container max-w-3xl">
          <div className="space-y-10">
            <p className={P}>
              This page sets out, in plain language, exactly what the Novada
              Tech meeting guarantee covers, how a qualified meeting is
              defined, what you pay and when, and what happens when a meeting
              cancels. The service agreement you sign before we start contains
              these same commitments in full contractual form — nothing on
              this page is a marketing line that disappears in the contract.
            </p>

            <Section number="1" title="The Guarantee">
              <p className={P}>
                Once your campaign is live, we guarantee a minimum of{" "}
                <span className="text-white font-normal">
                  15 qualified meetings per calendar month
                </span>
                , as defined in Section 2. This guarantee is written into your
                service agreement — it is a contractual commitment, not an
                aspiration. It applies from your first full calendar month
                after launch (the build and launch period is typically your
                first two weeks).
              </p>
            </Section>

            <Section number="2" title="What Counts As A Qualified Meeting">
              <p className={P}>
                Before anything launches, we agree the definition of a
                qualified meeting with you in writing at onboarding: industry,
                decision-maker seniority, company size, geography, and your
                own disqualifiers. A qualified meeting is a booked appointment
                with a prospect who matches that agreed profile. The
                definition is fixed before launch — it is never invented or
                reinterpreted after the fact, and only meetings matching it
                are ever billable.
              </p>
            </Section>

            <Section number="3" title="What You Pay, And When">
              <div className="space-y-4">
                <p className={P}>
                  There is no retainer, no monthly service fee, no setup fee
                  and no onboarding fee. You pay one per-meeting fee, agreed
                  with you in writing before we start, and it is only charged
                  when a qualified meeting is actually booked into your
                  calendar. No meeting booked means no charge.
                </p>
                <p className={P}>
                  A one-time commitment deposit (US$200–US$250 depending on
                  the plan agreed on your call) is payable at campaign
                  activation. It is{" "}
                  <span className="text-white font-normal">
                    credited in full against your first booked meeting
                  </span>{" "}
                  — it is not an additional fee, and it is the only payment
                  that occurs before a meeting exists. US clients are billed
                  in US dollars.
                </p>
              </div>
            </Section>

            <Section number="4" title="Cancellations, Reschedules And No-Shows">
              <p className={P}>
                If a booked meeting is cancelled or doesn&apos;t hold, you are
                not charged for it — and if the fee for that meeting has
                already been invoiced, it is removed or credited in full. A
                rescheduled meeting remains the same single meeting and is
                never charged twice. You only ever pay for meetings that hold.
              </p>
            </Section>

            <Section number="5" title="If We Fall Short Of The Guarantee">
              <p className={P}>
                Because billing is pay-per-meeting, a shortfall never costs
                you money: you are only ever charged for the qualified
                meetings actually booked, so there is no retainer or monthly
                fee to lose. If we deliver fewer than 15 qualified meetings in
                a calendar month, we continue working to close the gap at no
                additional cost to you — and you remain free to end the
                engagement at any time under Section 6.
              </p>
            </Section>

            <Section number="6" title="No Lock-In">
              <p className={P}>
                The engagement is month to month. There is no minimum term, no
                lock-in contract and no exit fee. You can pause or end the
                engagement at any time, and you will only ever be billed for
                qualified meetings booked up to that point.
              </p>
            </Section>

            <Section number="7" title="Results Disclaimer">
              <p className={P}>
                Case studies and testimonials on our website are individual
                client outcomes and are not typical. Revenue figures relate to
                those specific businesses at specific times. Your results will
                vary and — outside the specific meeting-volume guarantee
                described in Sections 1 and 5 — are not guaranteed. Booked
                meetings are an input to your sales process; revenue outcomes
                depend on your offer, pricing and sales execution.
              </p>
            </Section>

            <Section number="8" title="Questions">
              <p className={P}>
                If anything here is unclear, ask us before you commit — on
                your strategy call, by email at{" "}
                <a
                  href="mailto:support@novadatech.com.au"
                  className="text-[#0CC481] underline underline-offset-2"
                >
                  support@novadatech.com.au
                </a>
                , or by phone on{" "}
                <a
                  href="tel:+18333853923"
                  className="text-[#0CC481] underline underline-offset-2"
                >
                  +1 833-385-3923
                </a>{" "}
                (US) or{" "}
                <a
                  href="tel:+61485000813"
                  className="text-[#0CC481] underline underline-offset-2"
                >
                  (+61) 485 000 813
                </a>{" "}
                (AU).
              </p>
            </Section>
          </div>
        </div>
      </section>
    </div>
  );
}
