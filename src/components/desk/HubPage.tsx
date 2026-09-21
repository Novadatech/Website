/*
 * THE AUDIENCE HUB. One scaffold, two pages: /practices and /care.
 *
 * ══════════════════════════════════════════════════════════════════════
 * ⚠️ THIS, NOT THE HOMEPAGE, IS THE PAID LANDING PAGE.
 *
 * The two-door homepage exists to route brand and organic traffic. Meta
 * and Google ads point at THIS page or at an offer page beneath it,
 * never at the router, because a paid visitor who has already been
 * qualified by the ad should not be asked to qualify themselves again.
 * That is the whole reason audience-first architecture is safe here.
 * ══════════════════════════════════════════════════════════════════════
 *
 * It is a sibling of ServicePage by construction, for the same reason
 * ServicePage exists: two hand-built hubs drift apart the first time
 * somebody edits one, and these two must stay equals. Structure lives
 * here, content lives in the two page files and in src/content/offers.ts.
 *
 * ⚠️ NO FAQ BAND HERE, deliberately. The questions live on the offer
 * pages, where the reader is close enough to the detail to be asking
 * them. A hub that answers objections before it has made a claim reads
 * as defensive.
 *
 * ⚠️ VOCABULARY. Every string on this page comes from the audience or
 * from props. Nothing here may say "patient", "recall", "roster" or
 * "call-off" in its own voice, because it renders for both worlds.
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import DeskNav from "@/components/desk/DeskNav";
import DeskFooter from "@/components/desk/DeskFooter";
import BookingEmbed from "@/components/desk/BookingEmbed";
import StickyCta from "@/components/desk/StickyCta";
import { Band, BandHeading, Rail, Statement } from "@/components/desk/Band";
import {
  SingleThreadedDesk,
  OvernightEvent,
} from "@/components/desk/viz";
import {
  BAND_Y,
  BTN_ON_INK,
  BTN_PRIMARY,
  D1,
  D2,
  FRAME,
  GUTTER,
  HERO_Y,
  MICRO,
  NUM,
  RAIL_GRID,
} from "@/components/desk/tokens";
import {
  CTA_LABEL,
  HOW_IT_STARTS,
  boundariesFor,
  offersFor,
  type Audience,
  type Figure,
} from "@/content/offers";

function Dot() {
  return (
    <span aria-hidden className="text-ink-300">
      ·
    </span>
  );
}

export type HubPageProps = {
  audience: Audience;
  /** Why the problem exists, and why nobody is at fault. */
  mechanism: { heading: string; body: string[] };
  /** Which device carries the mechanism for this audience. */
  device: "single-threaded" | "overnight";
  /** The audience's own proof sentence. */
  proof: string;
  /**
   * Optional published figures for the mechanism band.
   *
   * ⚠️ EVERY FIGURE CARRIES ITS SOURCE, printed in the same block as the
   * number, and the type makes that unskippable. The practice side
   * passes NOTHING, because there is no verified practice figure to
   * print and an unsourced one would undo the site's own position.
   */
  figures?: Figure[];
};

export default function HubPage({
  audience,
  mechanism,
  device,
  proof,
  figures,
}: HubPageProps) {
  const offers = offersFor(audience.slug);
  const bounds = boundariesFor(audience.slug);

  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <DeskNav tone="dark" audience={audience.slug} />

      <main>
        {/* ── THE FOLD. Graphite, same as every other entry point on the
            site. The two offers sit IN it, because a visitor who arrived
            from an ad about one of them should see it named without
            scrolling. ── */}
        <section className="relative overflow-hidden border-b border-white/10 bg-canvas-ink">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -left-40 -top-56 h-[620px] w-[620px] rounded-full bg-brand-500/20 blur-[130px]" />
            <div className="absolute -bottom-72 -right-40 h-[560px] w-[560px] rounded-full bg-signal-600/10 blur-[140px]" />
          </div>

          <div
            className={`${FRAME} ${GUTTER} ${HERO_Y} relative border-x border-white/10`}
          >
            <div className={RAIL_GRID}>
              <div aria-hidden className="lg:sticky lg:top-28 lg:self-start">
                <span className="block h-px w-10 bg-brand-200 lg:mt-3 lg:h-10 lg:w-0.5" />
              </div>

              <div className="min-w-0">
                <div className="grid gap-x-14 gap-y-12 xl:grid-cols-[minmax(0,1fr)_308px]">
                  <div className="min-w-0">
                    <p className={`${MICRO} text-brand-200`}>{audience.name}</p>
                    <h1 className={`${D1} mt-6 max-w-display text-white`}>
                      {audience.headline}
                    </h1>
                    <p className="mt-7 max-w-prose text-base text-white/70">
                      {audience.standfirst}
                    </p>
                    <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                      <a href="#book" className={BTN_ON_INK}>
                        {CTA_LABEL}
                        <ArrowRight
                          aria-hidden
                          className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
                        />
                      </a>
                      <span className="text-sm text-white/60">
                        <span className={NUM}>30</span> minutes <Dot /> Nothing
                        signed on the call
                      </span>
                    </div>
                  </div>

                  {/* The two desks, in the fold. */}
                  <div className="xl:pt-1">
                    <p className={`${MICRO} text-white/50`}>Two desks</p>
                    <div className="mt-5 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
                      {offers.map((o, i) => (
                        <Link
                          key={o.href}
                          href={o.href}
                          className={`group block p-5 transition-colors duration-150 ease-standard hover:bg-white/[0.07] ${
                            i > 0 ? "border-t border-white/10" : ""
                          }`}
                        >
                          <span className="flex items-start justify-between gap-3">
                            <span className="text-base font-semibold text-white">
                              {o.name}
                            </span>
                            <ArrowRight
                              aria-hidden
                              className="mt-0.5 h-4 w-4 shrink-0 text-white/40 transition-[transform,color] duration-150 ease-standard group-hover:translate-x-0.5 group-hover:text-brand-200"
                            />
                          </span>
                          <span className="mt-2 block text-sm leading-[1.55] text-white/60">
                            {o.summary}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-12 max-w-prose border-t border-white/10 pt-6 text-sm text-white/60">
                  {audience.who}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE MOMENT. Specific beats impressive. ── */}
        <Band index="01" label="The moment" tone="dark">
          <AnimatedSection>
            <Statement>{audience.moment}</Statement>
          </AnimatedSection>
        </Band>

        {/* ── THE MECHANISM, and the device that carries it. ── */}
        <Band index="02" label="Why it happens" tone="tint">
          <AnimatedSection>
            <BandHeading>{mechanism.heading}</BandHeading>
            {mechanism.body.map((para, i) => (
              <p
                key={i}
                className={`${i === 0 ? "mt-8" : "mt-5"} max-w-prose text-base text-ink-600`}
              >
                {para}
              </p>
            ))}
          </AnimatedSection>
          {figures?.length ? (
            <AnimatedSection delay={0.08}>
              <dl className="mt-12 grid gap-px overflow-hidden rounded-lg bg-ink-200 sm:grid-cols-2">
                {figures.map((f) => (
                  <div key={f.label} className="bg-white p-6 md:p-7">
                    <dt className="sr-only">{f.label}</dt>
                    <dd>
                      <span className={`${D1} block text-brand-500`}>
                        {f.value}
                      </span>
                      <span className="mt-3 block max-w-[34ch] text-base text-ink-950">
                        {f.label}
                      </span>
                      <span className="mt-3 block text-xs text-ink-500">
                        {f.source}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </AnimatedSection>
          ) : null}

          <AnimatedSection delay={0.12}>
            <div className="mt-14">
              {device === "single-threaded" ? (
                <SingleThreadedDesk reveal={false} />
              ) : (
                <OvernightEvent reveal={false} />
              )}
            </div>
          </AnimatedSection>
        </Band>

        {/* ── THE TWO DESKS, at full width. ── */}
        <Band index="03" label="The two desks">
          <AnimatedSection>
            <BandHeading>Two desks. Take one, or take both.</BandHeading>
            <p className="mt-8 max-w-prose text-base text-ink-600">
              They are sold separately and you are welcome to start with one.
              Solving either problem tends to move the constraint onto the
              other, which is why the two rarely stay separate for long.
            </p>
          </AnimatedSection>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-ink-200 shadow-raise md:grid-cols-2">
            {offers.map((o) => (
              <Link
                key={o.href}
                href={o.href}
                className="group flex h-full flex-col bg-white p-7 transition-colors duration-150 ease-standard hover:bg-brand-50 md:p-9"
              >
                <span className={`${MICRO} text-brand-500`}>{o.who}</span>
                <span className={`${D2} mt-4 text-ink-950`}>{o.name}</span>
                <span className="mt-4 max-w-prose text-base text-ink-600">
                  {o.summary}
                </span>
                <ul className="mt-7 flex flex-col gap-2.5 border-t border-ink-100 pt-6">
                  {o.scope.map((line) => (
                    <li
                      key={line}
                      className="flex gap-3 text-sm text-ink-600"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500"
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-500">
                  {o.name}
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Band>

        {/* ── BOUNDARIES. A conversion asset, not fine print. ── */}
        <Band index="04" label="What we do not do" tone="tint">
          <AnimatedSection>
            <BandHeading>The boundaries are the product.</BandHeading>
            <p className="mt-8 max-w-prose text-base text-ink-600">
              Not the fine print. These are contractual rather than cultural,
              and they do not move.
            </p>
          </AnimatedSection>
          <div className="mt-12 border-t border-ink-200">
            {bounds.map((b, i) => (
              <AnimatedSection key={b.tag} delay={i * 0.03}>
                <div className="grid grid-cols-1 items-start gap-x-8 gap-y-3 border-b border-ink-100 py-6 sm:grid-cols-[200px_minmax(0,1fr)]">
                  <span className={`${MICRO} pt-1 text-signal-600`}>
                    {b.tag}
                  </span>
                  <p className="max-w-prose text-base text-ink-950">{b.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Band>

        {/* ── PROOF. Audience-specific, because the two sides of this
            business have very different amounts of it. ── */}
        <Band index="05" label="Proof of operations" tone="dark">
          <AnimatedSection>
            <Statement>{proof}</Statement>
          </AnimatedSection>
        </Band>

        {/* ── HOW IT STARTS ── */}
        <Band index="06" label="How it starts">
          <AnimatedSection>
            <BandHeading>Inquiring gets you a conversation.</BandHeading>
          </AnimatedSection>
          <ol className="mt-12 border-t border-ink-200">
            {HOW_IT_STARTS.map((s, i) => (
              <AnimatedSection as="li" key={s.k} delay={i * 0.04}>
                <div className="grid grid-cols-[44px_minmax(0,1fr)] items-start gap-x-4 border-b border-ink-100 py-6 sm:grid-cols-[44px_180px_minmax(0,1fr)] sm:gap-x-8">
                  <span className={`${MICRO} ${NUM} pt-1 text-ink-400`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-semibold text-ink-950">
                    {s.k}
                  </span>
                  <p className="col-span-2 mt-2 max-w-prose text-base text-ink-600 sm:col-span-1 sm:mt-0">
                    {s.v}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </ol>
          <AnimatedSection delay={0.16}>
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-ink-200 pt-8">
              <a href="#book" className={BTN_PRIMARY}>
                {CTA_LABEL}
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
                />
              </a>
              <span className="text-sm text-ink-500">
                Thirty minutes on how your operation runs today.
              </span>
            </div>
          </AnimatedSection>
        </Band>

        {/* ── BOOK ── */}
        <section id="book" className="border-t border-white/10 bg-canvas-ink">
          <div className={`${FRAME} ${GUTTER} ${BAND_Y} border-x border-white/10`}>
            <div className={RAIL_GRID}>
              <Rail index="07" label="Book" tone="dark" />
              <div className="min-w-0">
                <AnimatedSection>
                  <h3 className={`${D2} max-w-headline text-white`}>
                    {CTA_LABEL}.
                  </h3>
                  <p className="mt-6 max-w-prose text-base text-white/70">
                    Thirty minutes on how your operation actually runs. You
                    leave with a written assessment of whether this fits,
                    including if it does not, and a picture of your own numbers
                    before anything changes.
                  </p>
                  <p className="mt-4 max-w-prose text-sm text-white/60">
                    Nothing is signed on the call.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.08}>
                  <div className="mt-12 max-w-[940px]">
                    <BookingEmbed
                      source={`${audience.slug}-hub`}
                      title={`${CTA_LABEL} with Novada`}
                      tone="dark"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DeskFooter />
      <StickyCta label={CTA_LABEL} tagline={audience.who} />
    </div>
  );
}
