/*
 * ══════════════════════════════════════════════════════════════════════
 * THE PILLAR PAGE. One scaffold, four pages: both care pillars and
 * both practices pillars.
 *
 * Each audience has two pillars that are halves of one offer, and the
 * two halves must stay structurally identical so a reader moving
 * between them never re-learns the furniture. Same nine sections, same
 * order, same CTA, same boundary shape, same calculator shape.
 *
 * ⚠️ The two audiences differ in one way that matters: the CARE
 * pillars are parallel (two different problems, you might need one),
 * the PRACTICES pillars are sequential (find it, then stop it). The
 * spine phrases carry that difference; the furniture does not.
 *
 * ⚠️ THIS IS A SHARED SCAFFOLD ON PURPOSE, and the purpose is not reuse.
 * The retired Workforce Desk ran as two near-identical pages maintained
 * by hand, and they drifted: one ended up with the word "onboarding"
 * twice in a single list and two consecutive cards under the same
 * heading, while its twin was correct. A whole diagram about "the
 * practice" was being served to care providers from a shared component
 * nobody diffed. Structure that cannot drift is the fix.
 *
 * So: anything the two pages share lives HERE, as markup. Anything they
 * differ on arrives as a prop. If you find yourself adding a prop that
 * only one page passes, ask whether the two pages are still one product.
 *
 * ⚠️ THE TWO PILLARS ARE BOUGHT DIFFERENTLY. Rostering is a one-off
 * engagement; Workforce Continuity is month to month. `commitment` is
 * the only commercial string on the page and it is required, so neither
 * page can silently inherit the other's terms.
 * ══════════════════════════════════════════════════════════════════════
 */

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Band, BandHeading } from "@/components/desk/Band";
import BookingEmbed from "@/components/desk/BookingEmbed";
import type { Desk } from "@/components/desk/BookingEmbed";
import Calculator, { type CalcConfig } from "@/components/desk/Calculator";
import DeskFooter from "@/components/desk/DeskFooter";
import DeskNav from "@/components/desk/DeskNav";
import Pathway from "@/components/offer/Pathway";
import StickyCta from "@/components/desk/StickyCta";
import {
  BODY,
  BTN_ON_INK,
  BTN_PRIMARY,
  CARD,
  D1,
  D4,
  FRAME,
  GUTTER,
  HERO_Y,
  MICRO,
  MICRO_TIGHT,
  RAIL_GRID,
  SMALL,
} from "@/components/desk/tokens";
import { CTA_LABEL, type Offer } from "@/content/offers";
import type { Figure } from "@/content/offers";

export type Pair = { h: string; b: string };

export type PillarProps = {
  offer: Offer;
  /** The other half. Section 07 links to it. */
  sibling: Offer;
  /** Who the page is for, in the eyebrow. Differs by audience. */
  audienceLine: string;
  /**
   * This pillar's own calendar. Each half has one, and each feeds its own
   * pipeline, so this is required rather than defaulted: a wrong default
   * files a booking against the other half's offer.
   */
  desk: Desk;
  /** Page-level attribution, into utm_content. */
  source: string;

  headline: string;
  standfirst: string;

  moment: { label: string; body: string };
  why: { heading: string; paras: string[]; quote: string };
  /** Optional, and only the workforce page carries it. */
  stats?: { figures: Figure[]; caption: string };

  what: {
    label: string;
    heading: string;
    intro: string;
    /** Used when the section is one list. Care pages all use this. */
    cards?: Pair[];
    /**
     * Two or more equally weighted blocks instead of one list.
     *
     * ⚠️ ADDED 19 OCTOBER 2026 for the revenue audit, which became two
     * components: what is lost BEFORE the appointment and what is lost
     * AFTER it. The founder's brief is explicit that neither may read as
     * an add-on to the other, so these render identically: same eyebrow
     * treatment, same heading size, same card grid. Do not give one a
     * tint, a border or a larger heading to "lead" with it.
     */
    groups?: {
      eyebrow: string;
      heading: string;
      intro: string;
      cards: Pair[];
    }[];
    /**
     * ⚠️ THE ONLY INVENTED CONTENT ON EITHER PAGE. Its safety rests on
     * the scenario belonging to THE READER ("one of your houses"), so
     * there is no third party for a fabricated client to be, and on the
     * note denying all three readings separately. If this is ever
     * edited, that property must survive.
     */
    example?: { label: string; body: string; note: string };
  };

  how: { heading: string; steps: Pair[]; closing: string };

  calculator: CalcConfig;
  calcIntro: string;
  /**
   * The lines that stop the arithmetic being misread. At least one, and
   * they sit under the calculator where the reader is still looking at
   * the number rather than in a footnote nobody reaches.
   */
  calcNotes: string[];

  boundaries: Pair[];
  other: { heading: string; body: string };
  faq: { q: string; a: string }[];

  ask: { body: string };
  /** The commercial shape. One-off, or month to month. Required. */
  commitment: string;
};

function Cards({ items, cols = 2 }: { items: Pair[]; cols?: 2 | 3 }) {
  return (
    <div
      className={`mt-10 grid gap-px overflow-hidden rounded-lg bg-ink-100 ${
        cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
      }`}
    >
      {items.map((c) => (
        <div key={c.h} className="bg-white p-6 md:p-7">
          <h4 className="text-base font-semibold text-ink-950">{c.h}</h4>
          <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{c.b}</p>
        </div>
      ))}
    </div>
  );
}

export default function PillarPage(p: PillarProps) {
  return (
    <div data-theme="desk" className="min-h-screen bg-white font-sans">
      <DeskNav tone="dark" audience={p.offer.audience} bookHref="#book" />

      <main>
        {/* ── HERO ───────────────────────────────────────────────── */}
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
                <p className={`${MICRO} text-brand-200`}>{p.audienceLine}</p>
                <p className={`${MICRO_TIGHT} mt-2 text-white/55`}>
                  {p.offer.name}
                </p>
                <h1 className={`${D1} mt-6 max-w-headline text-white`}>
                  {p.headline}
                </h1>
                <p className="mt-7 max-w-prose text-base text-white/70">
                  {p.standfirst}
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <a href="#book" className={BTN_ON_INK}>
                    {CTA_LABEL}
                    <ArrowRight
                      aria-hidden
                      className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
                    />
                  </a>
                  <a
                    href="#calculator"
                    className="group inline-flex items-center gap-2 self-start border-b border-white/25 pb-0.5 text-sm font-semibold text-white transition-colors duration-150 ease-standard hover:border-brand-200 hover:text-brand-200"
                  >
                    Work out your own number first
                    <ArrowRight
                      aria-hidden
                      className="h-3.5 w-3.5 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
                <p className="mt-5 text-sm text-white/55">
                  30 minutes. Nothing is signed on the call.
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* ── 01 THE MOMENT ──────────────────────────────────────── */}
        <Band index="01" label="The moment" tone="tint" tight>
          <p className={`${MICRO} text-brand-500`}>{p.moment.label}</p>
          <p className="mt-6 max-w-statement border-l-2 border-brand-500 pl-6 text-xl font-medium text-ink-950 md:text-2xl">
            {p.moment.body}
          </p>
        </Band>

        {/* ── 02 WHY IT HAPPENS ──────────────────────────────────── */}
        <Band index="02" label="Why it happens">
          <BandHeading>{p.why.heading}</BandHeading>
          <div className="mt-7 flex flex-col gap-5">
            {p.why.paras.map((t) => (
              <p key={t.slice(0, 40)} className={BODY}>
                {t}
              </p>
            ))}
          </div>
          <p className="mt-9 max-w-statement border-l-2 border-brand-400 pl-6 text-lg font-medium text-ink-950">
            {p.why.quote}
          </p>

          {p.stats ? (
            <>
              <div className="mt-11 grid gap-px overflow-hidden rounded-lg bg-ink-100 md:grid-cols-2">
                {p.stats.figures.map((f) => (
                  <div key={f.value} className="bg-white p-6 md:p-7">
                    <p className={`${D1} text-brand-500`}>{f.value}</p>
                    <p className="mt-3 text-sm font-medium text-ink-950">
                      {f.label}
                    </p>
                    <p className={`${MICRO_TIGHT} mt-3 text-ink-400`}>
                      {f.source}
                    </p>
                  </div>
                ))}
              </div>
              <p className={`${SMALL} mt-5 max-w-prose`}>{p.stats.caption}</p>
            </>
          ) : null}
        </Band>

        {/* ── 03 WHAT WE LOOK AT / WHAT WE RUN ───────────────────── */}
        <Band index="03" label={p.what.label}>
          <BandHeading>{p.what.heading}</BandHeading>
          <p className={`${BODY} mt-6`}>{p.what.intro}</p>

          {p.what.cards ? <Cards items={p.what.cards} /> : null}

          {/* \u26a0\ufe0f EQUAL WEIGHT, DELIBERATELY. Same eyebrow, same heading
              size, same grid, separated only by a hairline. The brief
              forbids billing and claims reading as a minor add-on to the
              booking half, and visual hierarchy is how that would happen
              without a word of copy changing. */}
          {p.what.groups
            ? p.what.groups.map((g, i) => (
                <div
                  key={g.heading}
                  className={
                    i === 0
                      ? "mt-12"
                      : "mt-12 border-t border-ink-100 pt-12"
                  }
                >
                  <p className={`${MICRO} text-brand-500`}>{g.eyebrow}</p>
                  <h3 className={`${D4} mt-4 max-w-headline text-ink-950`}>
                    {g.heading}
                  </h3>
                  <p className={`${BODY} mt-5`}>{g.intro}</p>
                  <Cards items={g.cards} />
                </div>
              ))
            : null}

          {p.what.example ? (
            /* ⚠️ The one invented block on either page. Labelled before
               the reader reaches a number, counterfactual from the first
               word, set in the reader's own service, and denied three
               ways in the note. Do not reword it into a case study. */
            <figure className="mt-10 rounded-lg border border-signal-200 bg-signal-50 p-6 md:p-7">
              <figcaption className={`${MICRO} text-signal-600`}>
                {p.what.example.label}
              </figcaption>
              <p className="mt-4 max-w-prose text-base text-ink-950">
                {p.what.example.body}
              </p>
              <p className={`${SMALL} mt-4 max-w-prose italic`}>
                {p.what.example.note}
              </p>
            </figure>
          ) : null}
        </Band>

        {/* ── 04 HOW IT WORKS ────────────────────────────────────── */}
        <Band index="04" label="How it works" tone="tint">
          <BandHeading>{p.how.heading}</BandHeading>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-lg bg-ink-100 md:grid-cols-2">
            {p.how.steps.map((s, i) => (
              <li key={s.h} className="bg-white p-6 md:p-7">
                <p className={`${MICRO} tabular text-ink-400`}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h4 className="mt-3 text-base font-semibold text-ink-950">
                  {s.h}
                </h4>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                  {s.b}
                </p>
              </li>
            ))}
          </ol>
          <p className={`${SMALL} mt-6 max-w-prose`}>{p.how.closing}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="#book" className={BTN_PRIMARY}>
              {CTA_LABEL}
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
              />
            </a>
            <span className={SMALL}>
              30 minutes. Nothing is signed on the call.
            </span>
          </div>
        </Band>

        {/* ── 05 YOUR OWN NUMBERS ────────────────────────────────── */}
        <Band id="calculator" index="05" label="Your own numbers">
          <BandHeading>Do the arithmetic before you talk to us</BandHeading>
          <p className={`${BODY} mt-6`}>{p.calcIntro}</p>
          <div className="mt-10">
            <Calculator
              config={p.calculator}
              locale="en-AU"
              currency="AUD"
              bookHref="#book"
            />
          </div>
          {/* The correctives sit next to where the concern is felt, not
              in a footnote block at the bottom of the page. */}
          <div className="mt-6 flex flex-col gap-3">
            {p.calcNotes.map((n) => (
              <p key={n.slice(0, 32)} className={`${SMALL} max-w-prose`}>
                {n}
              </p>
            ))}
          </div>
        </Band>

        {/* ── 06 THE BOUNDARIES ──────────────────────────────────── */}
        <Band index="06" label="The boundaries" tone="tint">
          <BandHeading>What we will never do</BandHeading>
          <p className={`${BODY} mt-6`}>These are contractual, not cultural.</p>
          <Cards items={p.boundaries} />
        </Band>

        {/* ── 07 THE OTHER HALF ──────────────────────────────────── */}
        {/* ⚠️ RETITLED from "The other half" on 16 October 2026,
            because it now carries the whole pathway and not only the
            sibling offer. The pathway marks THIS page with "You are
            here", which is the one thing the homepage version cannot
            do and the reason it is worth repeating on a pillar. */}
        <Band index="07" label="Where this fits">
          <Pathway
            audience={p.offer.audience}
            currentHref={p.offer.href}
            showHeading={false}
            note={
              p.offer.audience === "practices"
                ? "They run in that order, because you cannot fix what nobody has counted. The audit can also be the whole engagement: if it finds little worth recovering, the report says so."
                : "The two halves are bought separately. Most providers need both, but the audit is not a gate you have to pass through: if you already know you are short of workers, start there."
            }
          />
          <div className="mt-14 border-t border-ink-100 pt-12">
          <BandHeading>{p.other.heading}</BandHeading>
          <p className={`${BODY} mt-6`}>{p.other.body}</p>

          <Link
            href={p.sibling.href}
            className={`${CARD} group mt-9 block p-6 transition-colors duration-150 ease-standard hover:border-brand-500 md:p-7`}
          >
            <p className={`${MICRO} text-brand-500`}>
              {p.sibling.spine ?? p.sibling.who}
            </p>
            <p className="mt-3 text-lg font-semibold text-ink-950">
              {p.sibling.name}
            </p>
            <p className="mt-2.5 max-w-prose text-sm leading-relaxed text-ink-600">
              {p.sibling.summary}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-500">
              {p.sibling.navLabel ?? p.sibling.name}
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
              />
            </span>
          </Link>
          </div>
        </Band>

        {/* ── 08 QUESTIONS ───────────────────────────────────────── */}
        <Band index="08" label="Questions" tone="tint">
          <BandHeading>Before you ask us on the call</BandHeading>
          <dl className="mt-10 flex flex-col gap-px overflow-hidden rounded-lg bg-ink-100">
            {p.faq.map((f) => (
              <div key={f.q} className="bg-white p-6 md:p-7">
                <dt className="text-base font-semibold text-ink-950">{f.q}</dt>
                <dd className="mt-2.5 max-w-prose text-sm leading-relaxed text-ink-600">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </Band>

        {/* ── 09 THE ASK ─────────────────────────────────────────── */}
        <section id="book" className="border-t border-white/10 bg-canvas-ink">
          <div
            className={`${FRAME} ${GUTTER} border-x border-white/10 py-16 md:py-24 lg:py-32`}
          >
            <div className={RAIL_GRID}>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-center gap-3 lg:block">
                  <span className={`${MICRO} tabular text-white/55`}>09</span>
                  <span
                    aria-hidden
                    className="h-px w-6 bg-white/20 lg:my-3 lg:h-6 lg:w-px"
                  />
                  <h2 className={`${MICRO} text-white/85`}>Book</h2>
                </div>
              </div>

              <div className="min-w-0">
                <BandHeading dark>{CTA_LABEL}</BandHeading>
                <p className="mt-6 max-w-prose text-base text-white/70">
                  {p.ask.body}
                </p>
                <ul className="mt-7 flex flex-col gap-2 text-base text-white">
                  <li>Nothing is signed on the call.</li>
                  <li>{p.commitment}</li>
                </ul>

                <div className="mt-10">
                  <BookingEmbed
                    desk={p.desk}
                    source={p.source}
                    tone="dark"
                    title={`${CTA_LABEL} with Novada`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DeskFooter bookHref="#book" />
      {/* ⚠️ THE NAME, NOT THE SUMMARY. A summary is a paragraph
          written for a card: passing it here put three lines of body
          copy in a one-line bar and squeezed the button to four lines
          the moment the revenue audit summary grew to cover its second
          component. The hubs already pass a short explicit string. */}
      <StickyCta label={CTA_LABEL} tagline={p.offer.name} />
    </div>
  );
}
