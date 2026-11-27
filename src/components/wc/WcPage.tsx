"use client";

import { ArrowRight, Check, ChevronDown, Factory, HardHat, HeartHandshake, Mail, Mountain, UtensilsCrossed } from "lucide-react";

import StickyCta from "@/components/desk/StickyCta";
import { FRAME, GUTTER, MICRO } from "@/components/desk/tokens";
import { Blobs, CREAM, CREAM_DEEP, Cta, DEEP, SERIF, Stars, TextLink } from "@/components/lp/kit";
import { WcFooter, WcHeader } from "@/components/wc/WcChrome";
import { WC_VISUALS } from "@/components/wc/WcVisuals";
import {
  INDUSTRIES, LAUNCH_BANNER, WC_BASE, WC_EMAIL, WC_PROVIDERS, WC_REVIEW_H3,
  WC_STRIP, WC_TESTIMONIALS, wcCalendarSrc,
  type Block, type WcPage,
} from "@/content/wc";

/*
 * ══════════════════════════════════════════════════════════════════════
 * WORKFORCE CONTINUITY: THE PAGE, ON THE CARE PAGE'S STRUCTURE.
 *
 * Founder instruction, 25 Nov 2026: "build the new workforce continuity
 * page the same way you built the care offer page ... follow exactly the
 * same structure and style ... be creative with the mockups or screens
 * so the pages look unique".
 *
 * So every WC page runs the bands of src/app/care/ai-workforce/
 * AiWorkforcePage.tsx, in its order and with its components:
 *
 *   hero (HiBob-frame image: a WC dashboard + a figure, unique per page)
 *   client strip · "why" icon trio · alternating feature blocks with a
 *   product visual each · the one DEEP band · testimonials · let us talk
 *   · a white three-card band · the card grid · FAQ · book · sticky bar
 *
 * The COPY is still the founder's draft, word for word, from
 * src/content/wc.ts. Each content block is mapped into the care band it
 * fits; nothing is dropped and nothing is invented beyond band labels.
 *
 * 🔴 EVERY PAGE'S VISUALS ARE ITS OWN. Hero images are built by
 * tools/hero-build (variants wc-*, figure per page, never reused);
 * feature visuals come from WcVisuals.tsx, keyed per page, plus the
 * page's own checklist cards drawn from its own bullet copy.
 *
 * 🔴 NO LINKS TO THE AI WORKFORCE PAGES. WcHeader / WcFooter only.
 * 🔴 THE ROOT NEEDS BOTH data-theme="desk" AND data-lp="cream".
 * ══════════════════════════════════════════════════════════════════════
 */

/* ── which hero image each page gets ─────────────────────────────────── */
const HERO_KEY: Record<string, string> = {
  "": "home", "what-we-do": "wwd", "how-it-works": "hiw", "who-we-support": "wws",
  "ndis-aged-care": "ndis", "home-care-senior-living": "ndis",
  "hospitality-tourism": "hosp", "hospitality-events": "hosp",
  construction: "con",
  "manufacturing-transport-logistics": "mfg", "manufacturing-warehousing-logistics": "mfg",
  "mining-resources-energy": "min", "energy-mining-resources": "min",
};

/* icon art: the care page's recoloured icon family */
const WHY_ICONS = ["/ai-workforce/why-employees.png", "/ai-workforce/why-control.png", "/ai-workforce/why-systems.png"];
const TALK_ICONS = ["/ai-workforce/talk-start.png", "/ai-workforce/talk-reach.png", "/ai-workforce/talk-fit.png"];
const DEEP_ICONS = ["/ai-workforce/stat-roles-light.png", "/ai-workforce/stat-control-light.png", "/ai-workforce/stat-stages-light.png",
  "/ai-workforce/stat-hr-light.png", "/ai-workforce/stat-ops-light.png", "/ai-workforce/stat-afterhours-light.png"];

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "ndis-aged-care": HeartHandshake, "hospitality-tourism": UtensilsCrossed, construction: HardHat,
  "manufacturing-transport-logistics": Factory, "mining-resources-energy": Mountain,
  "home-care-senior-living": HeartHandshake, "hospitality-events": UtensilsCrossed,
  "manufacturing-warehousing-logistics": Factory, "energy-mining-resources": Mountain,
};

function mailto(subject: string) {
  return `mailto:${WC_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

/* ── PRIMITIVES (the care page's, verbatim in style) ─────────────────── */

function Band({ id, bg = CREAM, clip = false, children }: { id?: string; bg?: string; clip?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={clip ? "overflow-hidden" : undefined} style={{ backgroundColor: bg }}>
      <div className={`${FRAME} ${GUTTER} py-16 md:py-24`}>{children}</div>
    </section>
  );
}

function Head({ eyebrow, children, sub, dark = false, wide = false }: {
  eyebrow?: string; children: React.ReactNode; sub?: string; dark?: boolean; wide?: boolean;
}) {
  return (
    <div className={`mx-auto text-center ${wide ? "max-w-[34ch] sm:max-w-[620px] lg:max-w-[1000px]" : "max-w-[46ch]"}`}>
      {eyebrow ? <p className={`${MICRO} mb-4 ${dark ? "text-brand-200" : "text-brand-500"}`}>{eyebrow}</p> : null}
      <h2 style={SERIF} className={`text-balance font-bold leading-[1.15] tracking-[-0.015em] ${
        wide ? "text-[clamp(1.55rem,1.1rem+1.7vw,2.25rem)]" : "text-[clamp(1.75rem,1.15rem+2.3vw,2.75rem)]"
      } ${dark ? "text-white" : "text-ink-950"}`}>{children}</h2>
      {sub ? <p className={`mx-auto mt-5 max-w-[56ch] text-base leading-relaxed ${dark ? "text-white/70" : "text-ink-600"}`}>{sub}</p> : null}
    </div>
  );
}

function CheckItem({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <span aria-hidden className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${dark ? "bg-white text-brand-700" : "bg-brand-500 text-white"}`}>
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
      <span className={`text-[15px] leading-relaxed ${dark ? "text-white/80" : "text-ink-600"}`}>{children}</span>
    </li>
  );
}

function SoftButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xs bg-brand-100 px-6 text-[13px] font-bold uppercase tracking-caps text-brand-700 transition-colors duration-150 ease-standard hover:bg-brand-200 sm:whitespace-nowrap">
      {children}
    </a>
  );
}

/* ── VISUALS ─────────────────────────────────────────────────────────── */

function Visual({ k }: { k: string }) {
  const V = WC_VISUALS[k];
  return V ? <V /> : null;
}

/**
 * A feature block's visual when the founder's copy has no screen for it:
 * a product card drawn from THAT block's own bullets, so it is unique to
 * the page by construction. Floats over the care page's shapes with a
 * detail chip breaking out, as the care visuals do.
 */
function ChecklistCard({ title, items, note, tag }: { title: string; items: string[]; note?: string; tag: string }) {
  return (
    <div className="relative pb-10 pt-10 sm:px-6">
      <div className="relative z-10 rounded-lg border border-ink-100 bg-white p-6 shadow-float md:p-7">
        <div className="flex items-center justify-between gap-3 border-b border-ink-100 pb-4">
          <p style={SERIF} className="text-base font-bold text-ink-950">{title}</p>
          <span className="flex-shrink-0 rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-caps text-brand-600">{tag}</span>
        </div>
        <ul className="mt-4 flex flex-col gap-2.5">
          {items.map((t, i) => (
            <li key={t} className="flex items-center gap-3 rounded-xs bg-ink-50/70 px-3.5 py-3">
              <span aria-hidden className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${i === items.length - 1 ? "bg-signal-50 text-signal-700 ring-1 ring-signal-200" : "bg-brand-500 text-white"}`}>
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="text-[14px] font-medium text-ink-800">{t}</span>
            </li>
          ))}
        </ul>
      </div>
      {note ? (
        <div className="absolute -bottom-1 right-0 z-20 hidden max-w-[260px] rounded-lg border border-ink-100 bg-white px-4 py-3 shadow-float sm:block">
          <p className="text-[10px] font-semibold uppercase tracking-caps text-brand-500">Your business</p>
          <p className="mt-1 text-[13px] font-semibold leading-snug text-ink-900">{note}</p>
        </div>
      ) : null}
      <Blobs />
    </div>
  );
}

/* ── FEATURE BLOCK (the care page's alternating band) ────────────────── */

type Feature = {
  id?: string; eyebrow?: string; h: string; paras?: string[];
  bullets?: React.ReactNode[]; foot?: React.ReactNode; link?: { label: string; href: string };
  extra?: React.ReactNode; visual: React.ReactNode;
};

function FeatureBand({ f, flip }: { f: Feature; flip: boolean }) {
  return (
    <section id={f.id} className="overflow-hidden" style={{ backgroundColor: flip ? CREAM_DEEP : CREAM }}>
      <div className={`${FRAME} ${GUTTER} grid items-center gap-14 py-16 md:py-24 lg:grid-cols-2 lg:gap-16`}>
        <div className={`min-w-0 ${flip ? "lg:order-2" : ""}`}>
          {f.eyebrow ? <p className={`${MICRO} mb-4 text-brand-500`}>{f.eyebrow}</p> : null}
          <h2 style={SERIF} className="text-balance text-[clamp(1.6rem,1.15rem+1.8vw,2.35rem)] font-bold leading-[1.15] tracking-[-0.015em] text-ink-950">{f.h}</h2>
          {f.paras?.map((p) => <p key={p} className="mt-5 max-w-[56ch] text-base leading-relaxed text-ink-600">{p}</p>)}
          {f.bullets?.length ? <ul className="mt-7 flex flex-col gap-4">{f.bullets.map((b, i) => <CheckItem key={i}>{b}</CheckItem>)}</ul> : null}
          {f.extra}
          {f.foot ? <p className="mt-6 max-w-[58ch] border-l-2 border-ink-200 pl-4 text-sm leading-relaxed text-ink-500">{f.foot}</p> : null}
          {f.link ? <div className="mt-8"><TextLink href={f.link.href}>{f.link.label}</TextLink></div> : null}
        </div>
        <div className={`relative min-w-0 ${flip ? "lg:order-1" : ""}`}>{f.visual}</div>
      </div>
    </section>
  );
}

const B = ({ h, p }: { h: string; p: string }) => (<><b className="font-semibold text-ink-950">{h}.</b> {p}</>);

/* ── THE OTHER CARE BANDS ────────────────────────────────────────────── */

/** The care page's single DEEP band: icon, serif heading, line, in white. */
function DeepBand({ eyebrow, h2, sub, items, foot, link }: {
  eyebrow?: string; h2: string; sub?: string; items: { h: string; p?: string; label?: string }[];
  foot?: { strong: string; p: string }; link?: { label: string; href: string };
}) {
  return (
    <section style={{ backgroundColor: DEEP }}>
      <div className={`${FRAME} ${GUTTER} py-16 md:py-24`}>
        <Head dark eyebrow={eyebrow} sub={sub} wide>{h2}</Head>
        <div className={`mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 ${items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-3"}`}>
          {items.map((it, i) => (
            <div key={it.h} className="reveal text-center" style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={DEEP_ICONS[i % DEEP_ICONS.length]} alt="" width={78} height={78} className="mx-auto h-[62px] w-[62px] object-contain" />
              {it.label ? <p className={`${MICRO} mt-4 text-brand-200`}>{it.label}</p> : null}
              <p style={SERIF} className="mx-auto mt-4 max-w-[22ch] text-[clamp(1.2rem,1rem+0.8vw,1.5rem)] font-bold leading-snug text-white">{it.h}</p>
              {it.p ? <p className="mx-auto mt-3 max-w-[34ch] text-[15px] leading-relaxed text-white/75">{it.p}</p> : null}
            </div>
          ))}
        </div>
        {foot ? (
          <p className="mx-auto mt-12 max-w-[68ch] text-center text-[15px] leading-relaxed text-white/80">
            <b className="font-semibold text-white">{foot.strong}</b> {foot.p}
          </p>
        ) : null}
        {link ? (
          <div className="mt-8 flex justify-center">
            <a href={link.href} className="inline-flex min-h-11 items-center gap-2 border-b-2 border-white pb-0.5 text-sm font-bold text-white">
              {link.label}<ArrowRight aria-hidden className="h-4 w-4" />
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}

/** The care page's OVERSIGHT band: three white cards on the deep cream. */
function CardBand({ id, eyebrow, h2, sub, items, foot, link, bg = CREAM_DEEP, reassure }: {
  id?: string; eyebrow?: string; h2: string; sub?: string; items: { h: string; p: string; label?: string }[];
  foot?: { strong: string; p: string }; link?: { label: string; href: string }; bg?: string;
  reassure?: { strong: string; small: string };
}) {
  return (
    <Band id={id} bg={bg}>
      <Head eyebrow={eyebrow} sub={sub} wide>{h2}</Head>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((o, i) => (
          <div key={o.h} className="reveal flex flex-col rounded-lg border border-ink-100 bg-white p-7 shadow-lift" style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}>
            {o.label ? <p className={`${MICRO} mb-3 text-brand-500`}>{o.label}</p> : null}
            <h3 style={SERIF} className="text-lg font-bold text-ink-950">{o.h}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">{o.p}</p>
          </div>
        ))}
      </div>
      {reassure ? (
        <p style={SERIF} className="mx-auto mt-12 max-w-[60ch] text-center text-lg font-bold leading-snug text-ink-950">
          {reassure.strong} <span className="block pt-2 font-sans text-[15px] font-normal text-ink-600">{reassure.small}</span>
        </p>
      ) : null}
      {foot ? (
        <p className="mx-auto mt-12 max-w-[68ch] text-center text-[15px] leading-relaxed text-ink-700">
          <b className="font-semibold text-ink-950">{foot.strong}</b> {foot.p}
        </p>
      ) : null}
      {link ? <div className="mt-8 flex justify-center"><TextLink href={link.href}>{link.label}</TextLink></div> : null}
    </Band>
  );
}

/** The care page's EMPLOYEES grid: five industries, all live, and a closing card. */
function IndustryGrid({ b }: { b: Extract<Block, { kind: "industries" }> }) {
  return (
    <Band id="industries">
      <Head eyebrow={b.eyebrow} sub={b.sub}>{b.h2}</Head>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((i, n) => {
          const Icon = ICONS[i.slug] ?? HeartHandshake;
          return (
            <a key={i.slug} href={`${WC_BASE}/${i.slug}`}
              className="reveal group flex flex-col rounded-lg border border-ink-100 bg-white p-7 shadow-lift transition-[transform,box-shadow] duration-200 ease-standard hover:-translate-y-0.5"
              style={{ ["--reveal-delay" as string]: `${Math.min(n, 4) * 60}ms` }}>
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600"><Icon className="h-5 w-5" /></span>
                <span className={`flex-shrink-0 rounded-xs px-2 py-1 text-[10px] font-bold uppercase tracking-caps ring-1 bg-brand-50 text-brand-700 ring-brand-200`}>
                  Available now
                </span>
              </div>
              <h3 style={SERIF} className="mt-5 text-lg font-bold leading-snug text-ink-950">{i.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{i.blurb}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-500">
                Explore the solution<ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          );
        })}
        <div className="flex flex-col justify-center rounded-lg p-7 ring-1 ring-brand-200" style={{ backgroundColor: CREAM_DEEP }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ai-workforce/stat-control.png" alt="" width={78} height={78} className="h-[54px] w-[54px] object-contain" />
          <h3 style={SERIF} className="mt-4 text-lg font-bold text-ink-950">{LAUNCH_BANNER.strong}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">{LAUNCH_BANNER.p}</p>
          {b.link ? <div className="mt-6"><TextLink href={b.link.href}>{b.link.label}</TextLink></div> : null}
        </div>
      </div>
    </Band>
  );
}

function OwnershipTable({ b }: { b: Extract<Block, { kind: "table" }> }) {
  return (
    <Band bg={CREAM_DEEP}>
      <Head eyebrow={b.eyebrow} sub={b.p}>{b.h2}</Head>
      <div className="mt-12 overflow-x-auto rounded-lg border border-ink-100 bg-white shadow-lift">
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
      <p style={SERIF} className="mx-auto mt-12 max-w-[60ch] text-center text-lg font-bold leading-snug text-ink-950">{b.callout.h}</p>
      <p className="mx-auto mt-3 max-w-[64ch] text-center text-[15px] leading-relaxed text-ink-600">{b.callout.p}</p>
    </Band>
  );
}

function FlowCol({ tag, steps, alt = false }: { tag: string; steps: { h: string; p: string }[]; alt?: boolean }) {
  return (
    <div className={`rounded-lg border p-6 shadow-raise ${alt ? "border-signal-200 bg-white" : "border-ink-100 bg-white"}`}>
      <p className={`${MICRO} ${alt ? "text-signal-700" : "text-brand-500"}`}>{tag}</p>
      <ol className="mt-4 flex flex-col gap-5">
        {steps.map((s, i) => (
          <li key={s.h} className="flex gap-3">
            <span className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${alt ? "bg-signal-50 text-signal-700" : "bg-brand-500 text-white"}`}>{alt ? "!" : i + 1}</span>
            <span><span className="block text-[15px] font-semibold text-ink-950">{s.h}</span><span className="mt-1 block text-[14px] leading-relaxed text-ink-600">{s.p}</span></span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ── MAP THE FOUNDER'S BLOCKS ONTO THE CARE BANDS ────────────────────── */

type Rendered = { node: React.ReactNode; feature: boolean };

function renderBlocks(page: WcPage): Rendered[] {
  const out: Rendered[] = [];
  /* the page's own spare screen: its old hero mock, now free */
  let spare: string | null = page.hero.visual && WC_VISUALS[page.hero.visual] ? page.hero.visual : null;
  const take = (k?: string) => {
    if (k && WC_VISUALS[k]) return k;
    if (spare) { const s = spare; spare = null; return s; }
    return null;
  };
  let fi = 0; // feature index, for the alternation
  const feature = (f: Feature) => { out.push({ node: <FeatureBand key={`f${fi}`} f={f} flip={fi % 2 === 1} />, feature: true }); fi += 1; };
  const vis = (k: string | null, fallback: React.ReactNode) => (k ? <Visual k={k} /> : fallback);

  page.blocks.forEach((b, bi) => {
    switch (b.kind) {
      case "split": {
        const k = take();
        feature({ eyebrow: b.eyebrow, h: b.h2, paras: b.paras, link: b.link,
          bullets: b.cards.map((c) => <B key={c.h} h={c.h} p={c.p} />),
          visual: vis(k, <ChecklistCard title={b.h2} items={b.cards.map((c) => c.h)} tag="Managed service" />) });
        break;
      }
      case "process": {
        const k = take(b.visual);
        feature({ eyebrow: b.eyebrow, h: b.h2, paras: [b.p], link: b.link,
          extra: (
            <>
              <h3 style={SERIF} className="mt-8 text-lg font-bold text-ink-950">{b.boxH}</h3>
              <ol className="mt-4 flex flex-col gap-4">
                {b.steps.map((s, i) => (
                  <li key={s.t} className="flex gap-4">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">{i + 1}</span>
                    <span className="text-[15px] leading-relaxed text-ink-600"><b className="font-semibold text-ink-950">{s.t}.</b> {s.d}</span>
                  </li>
                ))}
              </ol>
            </>
          ),
          visual: vis(k, <ChecklistCard title={b.boxH} items={b.steps.map((s) => s.t)} tag="Cover request" />) });
        break;
      }
      case "services": {
        /* intro band, then one feature block per service row */
        out.push({ feature: false, node: (
          <Band key={`s${bi}`} id={b.id}>
            <Head eyebrow={b.eyebrow} sub={b.p}>{b.h2}</Head>
          </Band>
        ) });
        b.rows.forEach((r, ri) => {
          const k = take(r.visual);
          feature({ h: r.h, paras: [r.p], bullets: r.li, foot: r.note,
            visual: vis(k, <ChecklistCard title={r.h} items={r.li} note={r.note} tag={`Part ${ri + 1} of ${b.rows.length}`} />) });
        });
        if (b.callout) {
          out.push({ feature: false, node: (
            <section key={`c${bi}`} style={{ backgroundColor: CREAM }}>
              <div className={`${FRAME} ${GUTTER} pb-16 md:pb-20`}>
                <div className="flex flex-col gap-4 rounded-lg border border-ink-100 bg-white px-7 py-6 shadow-lift md:flex-row md:items-center md:justify-between">
                  <div>
                    <p style={SERIF} className="text-lg font-bold text-ink-950">{b.callout.strong}</p>
                    <p className="mt-1 text-[15px] text-ink-600">{b.callout.p}</p>
                  </div>
                  <div className="flex-shrink-0"><TextLink href={b.callout.link.href}>{b.callout.link.label}</TextLink></div>
                </div>
              </div>
            </section>
          ) });
        }
        break;
      }
      case "trio": {
        if (b.visual) {
          const k = take(b.visual);
          feature({ id: b.id, eyebrow: b.eyebrow, h: b.h2, paras: b.p ? [b.p] : undefined, link: b.link,
            bullets: b.items.map((it) => <B key={it.h} h={it.h} p={it.p} />),
            foot: b.foot ? <><b className="font-semibold text-ink-700">{b.foot.strong}</b> {b.foot.p}</> : b.reassure ? <><b className="font-semibold text-ink-700">{b.reassure.strong}</b> {b.reassure.small}</> : undefined,
            visual: vis(k, <ChecklistCard title={b.h2} items={b.items.map((i) => i.h)} tag="Your decisions" />) });
        } else if (b.bg === "deep") {
          out.push({ feature: false, node: <DeepBand key={`d${bi}`} eyebrow={b.eyebrow} h2={b.h2} sub={b.p} items={b.items} foot={b.foot} link={b.link} /> });
        } else {
          out.push({ feature: false, node: <CardBand key={`t${bi}`} id={b.id} eyebrow={b.eyebrow} h2={b.h2} sub={b.p} items={b.items} foot={b.foot} link={b.link} reassure={b.reassure} /> });
        }
        break;
      }
      case "table": out.push({ feature: false, node: <OwnershipTable key={`tb${bi}`} b={b} /> }); break;
      case "industries": out.push({ feature: false, node: <IndustryGrid key={`i${bi}`} b={b} /> }); break;
      case "steps": {
        const k = take(b.visual);
        feature({ eyebrow: b.eyebrow, h: b.h2, paras: [b.p], foot: b.legal,
          extra: (
            <ol className="mt-8 flex flex-col">
              {b.steps.map((s, i) => (
                <li key={s.h} className="relative flex gap-5 pb-8 last:pb-0">
                  {i < b.steps.length - 1 ? <span aria-hidden className="absolute left-[17px] top-10 h-[calc(100%-2.75rem)] w-px bg-brand-200" /> : null}
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">{i + 1}</span>
                  <div>
                    <p className={`${MICRO} text-brand-500`}>{s.label}</p>
                    <h3 style={SERIF} className="mt-1.5 text-lg font-bold text-ink-950">{s.h}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{s.p}</p>
                    <p className="mt-3 inline-flex rounded-xs bg-white px-3 py-1.5 text-[13px] font-semibold text-ink-700 ring-1 ring-ink-100">{s.owner}</p>
                  </div>
                </li>
              ))}
            </ol>
          ),
          visual: vis(k, <ChecklistCard title={b.h2} items={b.steps.map((s) => s.h)} tag="Setup" />) });
        break;
      }
      case "example": {
        const k = take(b.visual);
        feature({ id: b.id, eyebrow: b.eyebrow, h: b.h2, paras: [b.p], link: b.link,
          extra: (
            <>
              <figure className="mt-8 rounded-lg border-l-4 border-brand-500 bg-white px-6 py-5 shadow-raise">
                {b.label ? <p className={`${MICRO} text-ink-400`}>{b.label}</p> : null}
                <blockquote style={SERIF} className="mt-2 text-lg font-bold leading-snug text-ink-950">{b.quote}</blockquote>
                {b.quoteNote ? <figcaption className="mt-2 text-[14px] text-ink-600">{b.quoteNote}</figcaption> : null}
                {b.chips ? <div className="mt-4 flex flex-wrap gap-2">{b.chips.map((c) => <span key={c} className="rounded-xs bg-ink-50 px-2.5 py-1 text-xs font-semibold text-ink-600">{c}</span>)}</div> : null}
              </figure>
              {b.note ? <p className="mt-4 text-[13px] leading-relaxed text-ink-500">{b.note}</p> : null}
            </>
          ),
          visual: vis(k, <ChecklistCard title={b.a.tag} items={b.a.steps.map((s) => s.h)} tag="Illustrative" />) });
        /* the two paths and the rule, as the band right under it */
        const flip = (fi - 1) % 2 === 1;
        out.push({ feature: false, node: (
          <section key={`x${bi}`} style={{ backgroundColor: flip ? CREAM_DEEP : CREAM }}>
            <div className={`${FRAME} ${GUTTER} pb-16 md:pb-24`}>
              <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
                <FlowCol tag={b.a.tag} steps={b.a.steps} />
                <FlowCol tag={b.b.tag} steps={b.b.steps} alt />
              </div>
              <div className="mt-4 rounded-lg px-6 py-4 text-[15px] leading-relaxed text-white" style={{ backgroundColor: DEEP }}>
                <b className="font-semibold">{b.rule.strong}</b> <span className="text-white/75">{b.rule.p}</span>
              </div>
            </div>
          </section>
        ) });
        break;
      }
      case "status": {
        const k = take(b.visual);
        feature({ eyebrow: b.eyebrow, h: b.h2, paras: [b.p], link: b.link,
          bullets: b.items.map((it) => <><b className="font-semibold text-ink-950">{it.label}: {it.h}.</b> {it.p}</>),
          foot: <><b className="font-semibold text-ink-700">{b.foot.strong}</b> {b.foot.p}</>,
          visual: vis(k, <ChecklistCard title={b.h2} items={b.items.map((i) => i.label)} tag="Status" />) });
        break;
      }
      case "roles": {
        const k = take(b.visual);
        feature({ eyebrow: b.eyebrow, h: b.h2, paras: [b.p], foot: b.note,
          extra: (
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {b.roles.map((r) => (
                <li key={r} className="flex items-start gap-2.5 rounded-xs bg-white px-4 py-3 text-[14px] font-semibold text-ink-800 shadow-raise ring-1 ring-ink-100">
                  <Check aria-hidden strokeWidth={2.5} className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />{r}
                </li>
              ))}
            </ul>
          ),
          visual: vis(k, <ChecklistCard title={b.h2} items={b.roles.slice(0, 5)} tag="Roles" />) });
        break;
      }
      case "fit": {
        const k = take(b.visual);
        feature({ eyebrow: b.eyebrow, h: b.h2, paras: b.paras, link: b.link,
          visual: vis(k, <ChecklistCard title={b.h2} items={b.paras} tag="Fit" />) });
        break;
      }
      case "sectors": {
        out.push({ feature: false, node: (
          <CardBand key={`sc${bi}`} id="who-we-support" eyebrow={b.eyebrow} h2={b.h2} sub={b.p} items={b.items} foot={b.fit} bg={CREAM} />
        ) });
        break;
      }
    }
  });
  return out;
}

/* ── THE PAGE ───────────────────────────────────────────────────────── */

export default function WcPageView({ page }: { page: WcPage }) {
  const h = page.hero;
  const f = page.flow;
  const c = page.closing;
  const heroKey = HERO_KEY[page.slug] ?? "home";
  const bookingSrc = wcCalendarSrc(page.slug);
  const blocks = renderBlocks(page);
  const hasDeep = page.blocks.some((b) => b.kind === "trio" && b.bg === "deep" && !b.visual);

  return (
    <div id="top" data-theme="desk" data-lp="cream" className="min-h-screen font-sans" style={{ backgroundColor: CREAM }}>
      <WcHeader current={page.slug} />

      <main>
        {/* ── HERO: the care page's grid, with this page's own image ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: CREAM }}>
          <div className={`${FRAME} ${GUTTER} relative grid items-center gap-12 pb-20 pt-6 md:pb-28 md:pt-16 lg:grid-cols-[0.92fr_1.12fr] lg:gap-10`}>
            <div className="min-w-0">
              <p className={`${MICRO} text-brand-500`}>{h.audience}</p>
              <h1 style={SERIF} className="mt-5 text-[clamp(2.1rem,1.35rem+3.2vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.02em] text-ink-950">
                {h.h1} {h.h1b}
              </h1>
              <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-ink-600">
                {h.lead}{h.strong ? <> <b className="font-semibold text-ink-900">{h.strong}</b></> : null}
              </p>
              <p className="mt-4 flex max-w-[54ch] items-start gap-2.5 text-[15px] leading-relaxed text-ink-700">
                <Check aria-hidden strokeWidth={3} className="mt-1 h-4 w-4 flex-shrink-0 text-brand-500" />
                <span>{h.reassurance}</span>
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Cta href="#review">Get a free workforce review</Cta>
                <SoftButton href={h.secondary.href}>
                  {h.secondary.label}
                  <ChevronDown aria-hidden className="h-4 w-4" />
                </SoftButton>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                <div className="flex items-center gap-2.5">
                  <Stars />
                  <span className="text-sm font-bold text-ink-950">5.0</span>
                  <span className="text-sm text-ink-500">from 77 client reviews</span>
                </div>
                <span className="text-sm font-semibold text-ink-500">Free 30-minute review · No obligation</span>
              </div>
              {h.availability ? (
                <p className="mt-6 max-w-[54ch] rounded-lg border border-brand-200 bg-white px-4 py-3 text-[13px] leading-relaxed text-ink-700">
                  {h.availability}
                </p>
              ) : null}
            </div>
            <div className="min-w-0 lg:pl-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${WC_BASE}/hero-${heroKey}.webp`}
                alt={`The Novada workforce continuity dashboard: ${f.h2.replace(/\.$/, "")}, beside a ${heroKey === "ndis" ? "care" : "workforce"} manager`}
                width={938} height={654} fetchPriority="high" decoding="async"
                className="h-auto w-full lg:-mr-6 xl:-mr-10"
              />
            </div>
          </div>
        </section>

        {/* ── CLIENT STRIP ─────────────────────────────────────────── */}
        <section className="border-y border-ink-100/70" style={{ backgroundColor: CREAM_DEEP }}>
          <div className={`${FRAME} ${GUTTER} py-10`}>
            <p style={SERIF} className="text-center text-lg font-bold text-ink-800">{WC_STRIP}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-20">
              {WC_PROVIDERS.map((p) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img key={p.name} src={`/clients/${p.file}`} alt={p.name} className={`${p.h} w-auto object-contain`} />
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY: the founder's three-step flow, as the icon trio ──── */}
        <Band>
          <Head eyebrow={f.kicker} sub={f.intro}>{f.h2}</Head>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {f.steps.map((s, i) => (
              <div key={s.t} className="reveal text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={WHY_ICONS[i % 3]} alt="" width={130} height={130} className="mx-auto h-[104px] w-[104px] object-contain" />
                <h3 style={SERIF} className="mt-5 text-xl font-bold text-ink-950">{s.t}</h3>
                <p className="mx-auto mt-3 max-w-[34ch] text-[15px] leading-relaxed text-ink-600">{s.s}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-14 max-w-4xl rounded-lg border border-ink-100 bg-white px-6 py-5 shadow-raise">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <p style={SERIF} className="text-[17px] font-bold text-ink-950">{f.outcome.t}</p>
              <p className="text-sm text-ink-600">{f.outcome.p}</p>
            </div>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink-100 pt-4">
              {f.keypoints.map((k) => (
                <li key={k} className="flex items-center gap-2 text-[13px] font-semibold text-ink-700">
                  <Check aria-hidden className="h-4 w-4 text-brand-500" strokeWidth={3} />{k}
                </li>
              ))}
            </ul>
          </div>
        </Band>

        {/* ── THE FOUNDER'S BLOCKS, on the care bands ───────────────── */}
        {blocks.map((r) => r.node)}

        {/* ── THE DEEP BAND, where the page has no deep block of its own:
            the founder's own outcome line and key points. ───────────── */}
        {hasDeep ? null : (
          <DeepBand
            eyebrow={f.kicker}
            h2={f.outcome.t}
            sub={f.outcome.p}
            items={f.keypoints.map((k) => ({ h: k }))}
          />
        )}

        {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
        <Band>
          <Head wide>What our clients say about working with Novada Tech</Head>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {WC_TESTIMONIALS.map((t, i) => (
              <figure key={t.org} className="reveal flex flex-col rounded-lg border border-ink-100 bg-white px-7 py-8 text-center shadow-lift" style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}>
                <p style={SERIF} className="text-[15px] font-bold uppercase tracking-[0.03em] text-ink-950">{t.org}</p>
                <blockquote style={SERIF} className="mt-6 flex-1 text-[15px] italic leading-relaxed text-ink-700">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-7 text-sm text-ink-500">{t.name}, {t.org}</figcaption>
              </figure>
            ))}
          </div>
        </Band>

        {/* ── LET US TALK ──────────────────────────────────────────── */}
        <Band bg={CREAM_DEEP}>
          <Head sub={c.p}>Let us talk</Head>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {c.li.map((t, i) => (
              <div key={t} className="reveal text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={TALK_ICONS[i % 3]} alt="" width={78} height={78} className="mx-auto h-[58px] w-[58px] object-contain" />
                <h3 style={SERIF} className="mx-auto mt-4 max-w-[28ch] text-base font-bold text-ink-950">{t}</h3>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center"><Cta href="#review">Get a free workforce review</Cta></div>
        </Band>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <Band id="faq">
          <Head eyebrow={page.faq.eyebrow} sub={page.faq.sub}>{page.faq.h2}</Head>
          <div className="mx-auto mt-12 flex max-w-[76ch] flex-col gap-3">
            {page.faq.items.map((it, i) => (
              <details key={it.q} className="reveal group rounded-lg border border-ink-100 bg-white shadow-raise [&_summary::-webkit-details-marker]:hidden" style={{ ["--reveal-delay" as string]: `${Math.min(i, 4) * 50}ms` }}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 p-6 text-base font-semibold text-ink-950">
                  <span>{it.q}</span>
                  <ChevronDown aria-hidden className="mt-0.5 h-5 w-5 flex-shrink-0 text-ink-400 transition-transform duration-200 ease-standard group-open:rotate-180" />
                </summary>
                <p className="px-6 pb-6 text-sm leading-relaxed text-ink-600">{it.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 flex justify-center"><TextLink href={mailto(page.faq.askSubject)}>Ask us a question</TextLink></div>
        </Band>

        {/* ── BOOK ─────────────────────────────────────────────────── */}
        <section id="review" style={{ backgroundColor: DEEP }}>
          <div className={`${FRAME} ${GUTTER} py-16 md:py-24`}>
            <Head dark eyebrow={c.eyebrow} sub={c.p}>{c.h2}</Head>
            <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-12">
              <div className="min-w-0">
                <p className={`${MICRO} text-brand-200`}>In the review we will cover</p>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {c.li.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <Check aria-hidden strokeWidth={2.5} className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-brand-200" />
                      <span className="text-sm leading-relaxed text-white/80">{t}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-white/15 pt-6 text-sm text-white/55">30 minutes. No cost. No obligation.</p>
              </div>
              <div className="min-w-0 rounded-lg bg-white p-8 shadow-float md:p-10">
                <p className={`${MICRO} text-brand-500`}>Free 30-minute workforce review</p>
                <h3 style={SERIF} className="mt-3 text-2xl font-bold leading-snug text-ink-950">{WC_REVIEW_H3}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{c.boxP}</p>
                {bookingSrc ? (
                  <iframe
                    src={bookingSrc}
                    id={`wc-booking-${page.slug || "home"}`}
                    title="Book a free workforce review"
                    className="mt-6 h-[780px] w-full rounded-lg border-0"
                    scrolling="auto"
                    loading="lazy"
                  />
                ) : (
                  <>
                    <div className="mt-7"><Cta href={mailto(c.subject)}>Request your review</Cta></div>
                    <p className="mt-3 text-[13px] text-ink-500">Opens your email app so we can arrange a time.</p>
                    <a href={`mailto:${WC_EMAIL}`} className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink-800 hover:text-brand-500">
                      <Mail aria-hidden className="h-4 w-4" />{WC_EMAIL}
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <WcFooter />
      <div aria-hidden className="h-28 sm:h-20" />
      <StickyCta label="Get a free workforce review" tagline="Free 30-minute workforce review." href="#review" />
    </div>
  );
}
