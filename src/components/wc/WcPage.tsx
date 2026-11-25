"use client";

import { ArrowRight, Check, ChevronDown, Factory, HardHat, HeartHandshake, Mail, Mountain, UtensilsCrossed } from "lucide-react";

import { FRAME, GUTTER, MICRO } from "@/components/desk/tokens";
import { CREAM, CREAM_DEEP, Cta, CtaSoft, DEEP, SERIF, Section, SectionHead, TextLink, Tick } from "@/components/lp/kit";
import { WcFooter, WcHeader } from "@/components/wc/WcChrome";
import { WC_VISUALS } from "@/components/wc/WcVisuals";
import {
  INDUSTRIES, LAUNCH_BANNER, WC_BASE, WC_CALENDAR, WC_EMAIL,
  type Block, type Closing, type Faq, type Flow, type Hero, type WcPage,
} from "@/content/wc";

/*
 * ══════════════════════════════════════════════════════════════════════
 * WORKFORCE CONTINUITY: THE PAGE RENDERER.
 *
 * Every page is data (src/content/wc.ts) rendered by the sections below,
 * in the cream landing-page design the AI Workforce pages use: the same
 * kit, the same serif, the same buttons. Each page brings its own
 * visuals (WcVisuals.tsx); no visual is shared between pages.
 *
 * 🔴 THE ROOT NEEDS BOTH data-theme="desk" AND data-lp="cream", or the
 * body ground goes near-black / white. See memory note
 * reference_lp_route_font_and_body_ground. The serif comes from each
 * route's server wrapper (lpSerif.variable).
 * ══════════════════════════════════════════════════════════════════════
 */

const WHITE = "#FFFFFF";
const bgOf = (b?: string) => (b === "deep" ? CREAM_DEEP : b === "white" ? WHITE : CREAM);

function Visual({ k }: { k?: string }) {
  if (!k) return null;
  const V = WC_VISUALS[k];
  return V ? <V /> : null;
}
function mailto(subject: string) {
  return `mailto:${WC_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`${MICRO} ${dark ? "text-brand-200" : "text-brand-500"}`}>{children}</p>;
}
function H2({ children, dark = false, center = false }: { children: React.ReactNode; dark?: boolean; center?: boolean }) {
  return (
    <h2 style={SERIF} className={`mt-4 text-balance text-[clamp(1.75rem,1.15rem+2.3vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.015em] ${dark ? "text-white" : "text-ink-950"} ${center ? "text-center" : ""}`}>
      {children}
    </h2>
  );
}

/* ── HERO ───────────────────────────────────────────────────────────── */

function WcHero({ h }: { h: Hero }) {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: CREAM }}>
      <div className={`${FRAME} ${GUTTER} grid items-center gap-12 pb-20 pt-8 md:pb-24 md:pt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-14`}>
        <div className="min-w-0">
          <Eyebrow>{h.audience}</Eyebrow>
          <h1 style={SERIF} className="mt-5 text-[clamp(2.1rem,1.35rem+3.2vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.02em] text-ink-950">
            {h.h1} <span className="text-brand-500">{h.h1b}</span>
          </h1>
          <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-ink-600">{h.lead}</p>
          <p className="mt-4 flex max-w-[54ch] items-start gap-2.5 text-[15px] leading-relaxed text-ink-700">
            <Tick />
            <span>{h.strong ? <b className="font-semibold text-ink-950">{h.strong} </b> : null}{h.reassurance}</span>
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Cta href="#review">Get a free workforce review</Cta>
            <CtaSoft href={h.secondary.href}>
              {h.secondary.label}
              {h.secondary.href.startsWith("#") ? <ChevronDown aria-hidden className="h-4 w-4" /> : null}
            </CtaSoft>
          </div>
          <p className="mt-4 text-[13px] font-semibold text-ink-500">Free 30-minute review · No obligation</p>
          {h.availability ? (
            <p className="mt-6 max-w-[54ch] rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-[13px] leading-relaxed text-amber-900">
              {h.availability}
            </p>
          ) : null}
        </div>
        <div className="min-w-0">
          <Visual k={h.visual} />
        </div>
      </div>
    </section>
  );
}

/* ── THE FLOW BAND: the draft's "preview" card, as its own band ──────── */

function WcFlow({ f }: { f: Flow }) {
  return (
    <section style={{ backgroundColor: DEEP }}>
      <div className={`${FRAME} ${GUTTER} py-14 md:py-16`}>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.6fr] lg:items-center">
          <div>
            <Eyebrow dark>{f.kicker}</Eyebrow>
            <h2 style={SERIF} className="mt-3 text-[clamp(1.5rem,1.1rem+1.6vw,2.1rem)] font-bold leading-tight text-white">{f.h2}</h2>
            <p className="mt-3 text-[15px] text-white/70">{f.intro}</p>
          </div>
          <div>
            <ol className="grid gap-3 sm:grid-cols-3">
              {f.steps.map((s, i) => (
                <li key={s.t} className="relative rounded-lg bg-white/[0.07] p-5 ring-1 ring-white/10">
                  <span className="text-xs font-bold tabular text-brand-200">0{i + 1}</span>
                  <p className="mt-2 text-[15px] font-bold text-white">{s.t}</p>
                  <p className="mt-1 text-[13px] leading-snug text-white/65">{s.s}</p>
                  {i < 2 ? <ArrowRight aria-hidden className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-white p-1 text-brand-600 sm:block" /> : null}
                </li>
              ))}
            </ol>
            <div className="mt-3 flex flex-col gap-1 rounded-lg bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <p className="text-[15px] font-bold text-ink-950">{f.outcome.t}</p>
              <p className="text-[13px] text-ink-600">{f.outcome.p}</p>
            </div>
          </div>
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6">
          {f.keypoints.map((k) => (
            <li key={k} className="flex items-center gap-2 text-[13px] font-semibold text-white/85">
              <Check aria-hidden className="h-4 w-4 text-brand-200" strokeWidth={3} />{k}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── BLOCKS ─────────────────────────────────────────────────────────── */

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "ndis-aged-care": HeartHandshake, "hospitality-tourism": UtensilsCrossed, construction: HardHat,
  "manufacturing-transport-logistics": Factory, "mining-resources-energy": Mountain,
};

function Industries({ b }: { b: Extract<Block, { kind: "industries" }> }) {
  return (
    <Section id="industries" bg={CREAM_DEEP}>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-[46ch]">
          <Eyebrow>{b.eyebrow}</Eyebrow>
          <H2>{b.h2}</H2>
          <p className="mt-4 text-base leading-relaxed text-ink-600">{b.sub}</p>
        </div>
        {b.link ? <TextLink href={b.link.href}>{b.link.label}</TextLink> : null}
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {INDUSTRIES.map((i) => {
          const Icon = ICONS[i.slug];
          const live = i.slug === "ndis-aged-care";
          return (
            <a key={i.slug} href={`${WC_BASE}/${i.slug}`}
              className={`reveal group flex flex-col rounded-lg border p-6 transition-[transform,box-shadow] duration-200 ease-standard hover:-translate-y-0.5 hover:shadow-lift ${live ? "border-brand-200 bg-white shadow-raise" : "border-ink-100 bg-white/70"}`}>
              <span className="flex items-center justify-between">
                <span className={`flex h-11 w-11 items-center justify-center rounded-lg ${live ? "bg-brand-500 text-white" : "bg-brand-50 text-brand-600"}`}><Icon className="h-5 w-5" /></span>
                {live ? <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-caps text-brand-600">Launching</span> : null}
              </span>
              <h3 style={SERIF} className="mt-5 text-lg font-bold leading-snug text-ink-950">{i.name}</h3>
              <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-600">{i.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-500">
                Explore the solution<ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          );
        })}
      </div>
      <div className="mt-8 rounded-lg border border-brand-200 bg-white px-6 py-5 text-[15px] leading-relaxed text-ink-700">
        <b className="font-semibold text-ink-950">{LAUNCH_BANNER.strong}</b> {LAUNCH_BANNER.p}
      </div>
    </Section>
  );
}

function Split({ b }: { b: Extract<Block, { kind: "split" }> }) {
  return (
    <Section bg={bgOf(b.bg)}>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Eyebrow>{b.eyebrow}</Eyebrow>
          <H2>{b.h2}</H2>
          {b.paras.map((p) => <p key={p} className="mt-5 max-w-[52ch] text-base leading-relaxed text-ink-600">{p}</p>)}
          {b.link ? <div className="mt-8"><TextLink href={b.link.href}>{b.link.label}</TextLink></div> : null}
        </div>
        <div className="grid gap-4">
          {b.cards.map((c, i) => (
            <div key={c.h} className="reveal flex gap-5 rounded-lg border border-ink-100 bg-white p-6 shadow-raise">
              <span style={SERIF} className="text-3xl font-bold leading-none text-brand-200">{i + 1}</span>
              <div>
                <h3 style={SERIF} className="text-lg font-bold text-ink-950">{c.h}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{c.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Process({ b }: { b: Extract<Block, { kind: "process" }> }) {
  return (
    <Section bg={CREAM}>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <Eyebrow>{b.eyebrow}</Eyebrow>
          <H2>{b.h2}</H2>
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-ink-600">{b.p}</p>
          <h3 style={SERIF} className="mt-8 text-lg font-bold text-ink-950">{b.boxH}</h3>
          <ol className="mt-4 flex flex-col gap-4">
            {b.steps.map((s, i) => (
              <li key={s.t} className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">{i + 1}</span>
                <span><span className="block text-[15px] font-semibold text-ink-950">{s.t}</span><span className="mt-1 block text-[15px] leading-relaxed text-ink-600">{s.d}</span></span>
              </li>
            ))}
          </ol>
          <div className="mt-8"><TextLink href={b.link.href}>{b.link.label}</TextLink></div>
        </div>
        <div className="min-w-0"><Visual k={b.visual} /></div>
      </div>
    </Section>
  );
}

function Trio({ b }: { b: Extract<Block, { kind: "trio" }> }) {
  const withVisual = Boolean(b.visual);
  return (
    <Section id={b.id} bg={bgOf(b.bg)}>
      <div className={withVisual ? "grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16" : ""}>
        <div className="min-w-0">
          {withVisual ? (
            <>
              <Eyebrow>{b.eyebrow}</Eyebrow>
              <H2>{b.h2}</H2>
              {b.p ? <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-ink-600">{b.p}</p> : null}
            </>
          ) : (
            <div className="mx-auto max-w-[46ch] text-center">
              <Eyebrow>{b.eyebrow}</Eyebrow>
              <H2 center>{b.h2}</H2>
              {b.p ? <p className="mx-auto mt-5 max-w-[56ch] text-base leading-relaxed text-ink-600">{b.p}</p> : null}
            </div>
          )}
          {b.reassure ? (
            <div className="mt-6 rounded-lg border border-brand-200 bg-brand-50/60 px-5 py-4">
              <p className="text-[15px] font-semibold text-ink-950">{b.reassure.strong}</p>
              <p className="mt-1 text-[13px] text-ink-600">{b.reassure.small}</p>
            </div>
          ) : null}
          <div className={`mt-10 grid gap-4 ${withVisual ? "" : "md:grid-cols-3"}`}>
            {b.items.map((it) => (
              <div key={it.h} className={`reveal rounded-lg border border-ink-100 bg-white p-6 ${withVisual ? "" : "shadow-raise"}`}>
                {it.label ? <p className={`${MICRO} text-brand-500`}>{it.label}</p> : null}
                <h3 style={SERIF} className={`${it.label ? "mt-2" : ""} text-lg font-bold text-ink-950`}>{it.h}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{it.p}</p>
              </div>
            ))}
          </div>
          {b.foot ? (
            <p className="mt-6 border-l-2 border-brand-500 pl-4 text-[15px] leading-relaxed text-ink-700">
              <b className="font-semibold text-ink-950">{b.foot.strong}</b> {b.foot.p}
            </p>
          ) : null}
          {b.link ? <div className="mt-8"><TextLink href={b.link.href}>{b.link.label}</TextLink></div> : null}
        </div>
        {withVisual ? <div className="min-w-0 lg:sticky lg:top-28"><Visual k={b.visual} /></div> : null}
      </div>
    </Section>
  );
}

function Services({ b }: { b: Extract<Block, { kind: "services" }> }) {
  return (
    <Section id={b.id} bg={WHITE}>
      <p className={`${MICRO} text-center text-brand-500`}>{b.eyebrow}</p>
      <div className="mt-4"><SectionHead sub={b.p}>{b.h2}</SectionHead></div>
      <div className="mt-14 flex flex-col gap-6">
        {b.rows.map((r, i) => (
          <div key={r.h} className={`reveal grid gap-8 rounded-lg border border-ink-100 p-7 md:p-9 ${r.visual ? "lg:grid-cols-[1fr_1fr] lg:items-center" : "md:grid-cols-[1.1fr_1fr]"}`} style={{ backgroundColor: i % 2 ? CREAM : WHITE }}>
            <div className="min-w-0">
              <span className="text-xs font-bold tabular text-brand-500">0{i + 1}</span>
              <h3 style={SERIF} className="mt-2 text-xl font-bold text-ink-950">{r.h}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{r.p}</p>
              {r.visual ? (
                <ul className="mt-5 flex flex-col gap-2.5">{r.li.map((l) => <li key={l} className="flex items-start gap-3 text-[15px] text-ink-700"><Tick />{l}</li>)}</ul>
              ) : null}
              <p className="mt-5 text-[13px] font-semibold text-ink-500">{r.note}</p>
            </div>
            {r.visual ? (
              <div className="min-w-0"><Visual k={r.visual} /></div>
            ) : (
              <ul className="flex flex-col gap-3 self-center">
                {r.li.map((l) => <li key={l} className="flex items-start gap-3 rounded-xs bg-ink-50 px-4 py-3 text-[15px] text-ink-800"><Tick />{l}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
      {b.callout ? (
        <div className="mt-6 flex flex-col gap-4 rounded-lg px-7 py-6 md:flex-row md:items-center md:justify-between" style={{ backgroundColor: DEEP }}>
          <div>
            <p className="text-lg font-bold text-white">{b.callout.strong}</p>
            <p className="mt-1 text-[15px] text-white/70">{b.callout.p}</p>
          </div>
          <a href={b.callout.link.href} className="inline-flex min-h-11 flex-shrink-0 items-center gap-2 text-sm font-bold text-white underline-offset-4 hover:underline">
            {b.callout.link.label}<ArrowRight aria-hidden className="h-4 w-4" />
          </a>
        </div>
      ) : null}
    </Section>
  );
}

function Table({ b }: { b: Extract<Block, { kind: "table" }> }) {
  return (
    <Section bg={CREAM_DEEP}>
      <p className={`${MICRO} text-center text-brand-500`}>{b.eyebrow}</p>
      <div className="mt-4"><SectionHead sub={b.p}>{b.h2}</SectionHead></div>
      <div className="mt-12 overflow-x-auto rounded-lg border border-ink-100 bg-white shadow-raise">
        <table className="w-full min-w-[640px] text-left text-[15px]">
          <thead>
            <tr className="border-b border-ink-100">
              {b.head.map((h, i) => <th key={h} className={`px-6 py-4 text-xs font-semibold uppercase tracking-caps ${i === 1 ? "text-brand-600" : "text-ink-500"}`}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {b.rows.map((r) => (
              <tr key={r[0]} className="border-b border-ink-100 last:border-0">
                <th scope="row" style={SERIF} className="px-6 py-5 align-top text-base font-bold text-ink-950">{r[0]}</th>
                <td className="bg-brand-50/40 px-6 py-5 align-top leading-relaxed text-ink-700">{r[1]}</td>
                <td className="px-6 py-5 align-top leading-relaxed text-ink-700">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-auto mt-10 max-w-[760px] text-center">
        <h3 style={SERIF} className="text-xl font-bold text-ink-950">{b.callout.h}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{b.callout.p}</p>
      </div>
    </Section>
  );
}

function Steps({ b }: { b: Extract<Block, { kind: "steps" }> }) {
  return (
    <Section bg={CREAM_DEEP}>
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
        <div className="min-w-0">
          <Eyebrow>{b.eyebrow}</Eyebrow>
          <H2>{b.h2}</H2>
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-ink-600">{b.p}</p>
          <ol className="mt-10 flex flex-col">
            {b.steps.map((s, i) => (
              <li key={s.h} className="reveal relative flex gap-5 pb-10 last:pb-0">
                {i < b.steps.length - 1 ? <span aria-hidden className="absolute left-5 top-12 h-[calc(100%-3rem)] w-px bg-brand-200" /> : null}
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">{i + 1}</span>
                <div>
                  <p className={`${MICRO} text-brand-500`}>{s.label}</p>
                  <h3 style={SERIF} className="mt-1.5 text-xl font-bold text-ink-950">{s.h}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{s.p}</p>
                  <p className="mt-3 inline-flex rounded-xs bg-white px-3 py-1.5 text-[13px] font-semibold text-ink-700 ring-1 ring-ink-100">{s.owner}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-[60ch] text-[13px] leading-relaxed text-ink-500">{b.legal}</p>
        </div>
        <div className="min-w-0 lg:sticky lg:top-28"><Visual k={b.visual} /></div>
      </div>
    </Section>
  );
}

function FlowCol({ tag, steps, alt = false }: { tag: string; steps: { h: string; p: string }[]; alt?: boolean }) {
  return (
    <div className={`rounded-lg border p-6 ${alt ? "border-amber-200 bg-amber-50/60" : "border-ink-100 bg-white"}`}>
      <p className={`${MICRO} ${alt ? "text-amber-800" : "text-brand-500"}`}>{tag}</p>
      <ol className="mt-4 flex flex-col gap-5">
        {steps.map((s, i) => (
          <li key={s.h} className="flex gap-3">
            <span className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${alt ? "bg-amber-200 text-amber-900" : "bg-brand-50 text-brand-700"}`}>{alt ? "!" : i + 1}</span>
            <span><span className="block text-[15px] font-semibold text-ink-950">{s.h}</span><span className="mt-1 block text-[14px] leading-relaxed text-ink-600">{s.p}</span></span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Example({ b }: { b: Extract<Block, { kind: "example" }> }) {
  return (
    <Section id={b.id} bg={CREAM}>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="min-w-0">
          <Eyebrow>{b.eyebrow}</Eyebrow>
          <H2>{b.h2}</H2>
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-ink-600">{b.p}</p>
          <figure className="mt-8 rounded-lg border-l-4 border-brand-500 bg-white px-6 py-5 shadow-raise">
            {b.label ? <p className={`${MICRO} text-ink-400`}>{b.label}</p> : null}
            <blockquote style={SERIF} className="mt-2 text-lg font-bold leading-snug text-ink-950">{b.quote}</blockquote>
            {b.quoteNote ? <figcaption className="mt-2 text-[14px] text-ink-600">{b.quoteNote}</figcaption> : null}
            {b.chips ? <div className="mt-4 flex flex-wrap gap-2">{b.chips.map((c) => <span key={c} className="rounded-xs bg-ink-50 px-2.5 py-1 text-xs font-semibold text-ink-600">{c}</span>)}</div> : null}
          </figure>
          {b.note ? <p className="mt-4 text-[13px] leading-relaxed text-ink-500">{b.note}</p> : null}
          <div className="mt-6"><TextLink href={b.link.href}>{b.link.label}</TextLink></div>
        </div>
        <div className="min-w-0"><Visual k={b.visual} /></div>
      </div>
      <div className="mt-12 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <FlowCol tag={b.a.tag} steps={b.a.steps} />
        <FlowCol tag={b.b.tag} steps={b.b.steps} alt />
      </div>
      <div className="mt-4 rounded-lg px-6 py-4 text-[15px] leading-relaxed text-white" style={{ backgroundColor: DEEP }}>
        <b className="font-semibold">{b.rule.strong}</b> <span className="text-white/75">{b.rule.p}</span>
      </div>
    </Section>
  );
}

function Status({ b }: { b: Extract<Block, { kind: "status" }> }) {
  return (
    <Section bg={WHITE}>
      <p className={`${MICRO} text-center text-brand-500`}>{b.eyebrow}</p>
      <div className="mt-4"><SectionHead wide sub={b.p}>{b.h2}</SectionHead></div>
      <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <ol className="flex flex-col gap-4">
          {b.items.map((it, i) => (
            <li key={it.label} className="reveal flex gap-5 rounded-lg border border-ink-100 p-6">
              <span style={SERIF} className="text-3xl font-bold text-brand-200">{i + 1}</span>
              <div>
                <p className={`${MICRO} text-brand-500`}>{it.label}</p>
                <h3 style={SERIF} className="mt-1.5 text-lg font-bold text-ink-950">{it.h}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{it.p}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="min-w-0">
          <Visual k={b.visual} />
          <p className="mx-auto mt-8 max-w-[440px] border-l-2 border-amber-400 pl-4 text-[15px] leading-relaxed text-ink-700">
            <b className="font-semibold text-ink-950">{b.foot.strong}</b> {b.foot.p}
          </p>
          <div className="mx-auto mt-6 max-w-[440px]"><TextLink href={b.link.href}>{b.link.label}</TextLink></div>
        </div>
      </div>
    </Section>
  );
}

function Roles({ b }: { b: Extract<Block, { kind: "roles" }> }) {
  return (
    <Section bg={CREAM_DEEP}>
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
        <div className="min-w-0">
          <Eyebrow>{b.eyebrow}</Eyebrow>
          <H2>{b.h2}</H2>
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-ink-600">{b.p}</p>
          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
            {b.roles.map((r) => <li key={r} className="flex items-start gap-2.5 rounded-xs bg-white px-4 py-3 text-[14px] font-semibold text-ink-800 ring-1 ring-ink-100"><Tick />{r}</li>)}
          </ul>
          <p className="mt-6 text-[13px] text-ink-500">{b.note}</p>
        </div>
        <div className="min-w-0"><Visual k={b.visual} /></div>
      </div>
    </Section>
  );
}

function Fit({ b }: { b: Extract<Block, { kind: "fit" }> }) {
  return (
    <Section bg={WHITE}>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="min-w-0 lg:order-2">
          <Eyebrow>{b.eyebrow}</Eyebrow>
          <H2>{b.h2}</H2>
          {b.paras.map((p) => <p key={p} className="mt-5 max-w-[52ch] text-base leading-relaxed text-ink-600">{p}</p>)}
          <div className="mt-8"><Cta href={b.link.href}>{b.link.label}</Cta></div>
        </div>
        <div className="min-w-0 lg:order-1"><Visual k={b.visual} /></div>
      </div>
    </Section>
  );
}

function Sectors({ b }: { b: Extract<Block, { kind: "sectors" }> }) {
  return (
    <Section id="who-we-support" bg={CREAM}>
      <p className={`${MICRO} text-center text-brand-500`}>{b.eyebrow}</p>
      <div className="mt-4"><SectionHead sub={b.p}>{b.h2}</SectionHead></div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {b.items.map((it) => (
          <div key={it.h} className="reveal rounded-lg border-t-4 border-brand-500 bg-white p-7 shadow-raise">
            <h3 style={SERIF} className="text-xl font-bold text-ink-950">{it.h}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{it.p}</p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-[70ch] text-center text-[15px] leading-relaxed text-ink-700">
        <b className="font-semibold text-ink-950">{b.fit.strong}</b> {b.fit.p}
      </p>
    </Section>
  );
}

function BlockView({ b }: { b: Block }) {
  switch (b.kind) {
    case "split": return <Split b={b} />;
    case "industries": return <Industries b={b} />;
    case "process": return <Process b={b} />;
    case "trio": return <Trio b={b} />;
    case "services": return <Services b={b} />;
    case "table": return <Table b={b} />;
    case "steps": return <Steps b={b} />;
    case "example": return <Example b={b} />;
    case "status": return <Status b={b} />;
    case "roles": return <Roles b={b} />;
    case "fit": return <Fit b={b} />;
    case "sectors": return <Sectors b={b} />;
  }
}

/* ── FAQ ────────────────────────────────────────────────────────────── */

function WcFaq({ f }: { f: Faq }) {
  return (
    <Section id="faq" bg={CREAM}>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <Eyebrow>{f.eyebrow}</Eyebrow>
          <H2>{f.h2}</H2>
          <p className="mt-5 text-base leading-relaxed text-ink-600">{f.sub}</p>
          <div className="mt-8"><CtaSoft href={mailto(f.askSubject)}>Ask us a question</CtaSoft></div>
        </div>
        <div className="flex flex-col gap-3">
          {f.items.map((it) => (
            <details key={it.q} className="group rounded-lg border border-ink-100 bg-white px-6 py-1 shadow-raise">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-[16px] font-semibold text-ink-950 [&::-webkit-details-marker]:hidden">
                {it.q}
                <ChevronDown aria-hidden className="h-5 w-5 flex-shrink-0 text-brand-500 transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-5 text-[15px] leading-relaxed text-ink-600">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ── THE REVIEW (booking) ───────────────────────────────────────────── */

function WcClosing({ c }: { c: Closing }) {
  return (
    <section id="review" style={{ backgroundColor: DEEP }}>
      <div className={`${FRAME} ${GUTTER} grid gap-12 py-20 md:py-24 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16`}>
        <div>
          <Eyebrow dark>{c.eyebrow}</Eyebrow>
          <H2 dark>{c.h2}</H2>
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-white/75">{c.p}</p>
          <ul className="mt-8 flex flex-col gap-3">
            {c.li.map((l) => <li key={l} className="flex items-start gap-3 text-[15px] text-white/90"><Tick dark />{l}</li>)}
          </ul>
        </div>
        <div className="rounded-lg bg-white p-8 shadow-float md:p-10">
          <p className={`${MICRO} text-brand-500`}>Free 30-minute workforce review</p>
          <h3 style={SERIF} className="mt-3 text-2xl font-bold leading-snug text-ink-950">A practical starting point for your casual workforce.</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{c.boxP}</p>
          {WC_CALENDAR ? (
            /* 🔴 the founder's AU calendar, once provided */
            <iframe src={WC_CALENDAR} title="Book a free workforce review" className="mt-6 h-[640px] w-full rounded-lg border-0" loading="lazy" />
          ) : (
            <>
              <div className="mt-7"><Cta href={mailto(c.subject)}>Request a review by email</Cta></div>
              <p className="mt-3 text-[13px] text-ink-500">Opens your email app so we can arrange a time.</p>
              <a href={`mailto:${WC_EMAIL}`} className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink-800 hover:text-brand-500">
                <Mail aria-hidden className="h-4 w-4" />{WC_EMAIL}
              </a>
            </>
          )}
          <p className="mt-4 border-t border-ink-100 pt-4 text-[13px] text-ink-500">No obligation. A clear scope and practical next steps.</p>
        </div>
      </div>
    </section>
  );
}

/* ── THE PAGE ───────────────────────────────────────────────────────── */

export default function WcPageView({ page }: { page: WcPage }) {
  return (
    <div data-theme="desk" data-lp="cream" className="min-h-screen font-sans" style={{ backgroundColor: CREAM }}>
      <WcHeader current={page.slug} />
      <main>
        <WcHero h={page.hero} />
        <WcFlow f={page.flow} />
        {page.blocks.map((b, i) => <BlockView key={i} b={b} />)}
        <WcFaq f={page.faq} />
        <WcClosing c={page.closing} />
      </main>
      <WcFooter />
    </div>
  );
}
