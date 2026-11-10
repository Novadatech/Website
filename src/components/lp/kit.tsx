"use client";

import { ArrowRight, Check, Star } from "lucide-react";

import { FRAME, GUTTER, MICRO_TIGHT } from "@/components/desk/tokens";

/*
 * ══════════════════════════════════════════════════════════════════════
 * THE LANDING-PAGE KIT. One file. The four pages that survive the
 * 10 November 2026 reduction all import from here:
 *
 *     /                        the home page
 *     /care/ai-workforce       the care offer
 *     /practices/ai-workforce  the practices offer
 *     /why-novada              the company page
 *
 * Created when the second of those four was built, before a third and
 * fourth copy of the same primitives could exist. tokens.ts was
 * rebuilt in September for exactly this reason and its header says the
 * thing worth repeating: A TOKEN THAT IS COPY-PASTED IS NOT A TOKEN.
 * If a button's height or a heading's measure needs changing, it has to
 * be changeable in one place or it will end up different on four pages.
 *
 * ⚠️ THIS IS NOT THE DESK SYSTEM. tokens.ts still governs the rest of
 * the estate: uppercase condensed display type, ink surfaces, the
 * numbered band rail. These four pages run a different surface (cream,
 * a serif display face, no rail) on the founder's instruction. Both
 * systems are legitimate and they do not mix. Do not import desk
 * components into these pages expecting them to look right.
 *
 * ⚠️ THE SERIF COMES FROM THE ROUTE, NOT FROM HERE. Each page's server
 * wrapper declares the face with next/font and exposes it as
 * --font-lp-serif. Declaring it in the root layout would download it
 * on every page of the site; declaring it here would not work at all,
 * because next/font cannot be called from a client component.
 * ══════════════════════════════════════════════════════════════════════
 */

/** The ground, measured off the page these were modelled on. Written as
    constants because Tailwind only sees complete class strings, so they
    go into `style`, never into a class name. */
export const CREAM = "#FFFBF4";
export const CREAM_DEEP = "#FFF0DA";
export const DEEP = "#002687";

/** The display face. Applied through `style`, for the reason above. */
export const SERIF = { fontFamily: "var(--font-lp-serif), Georgia, serif" };

/* ── ACTIONS ──────────────────────────────────────────────────────── */

export function Cta({
  children,
  href = "#book",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      /* ⚠️ sm:whitespace-nowrap, NOT whitespace-nowrap. Below sm a grid
         item's auto min-width lets an unwrappable label set the width
         floor for the whole column, which pushed the hero headline past
         the right gutter at 390px. Above sm there is room, and the long
         label otherwise wraps to three lines in a narrow column. */
      className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xs bg-brand-500 px-6 text-[13px] font-bold uppercase tracking-caps text-white shadow-cta transition-[background-color,box-shadow] duration-150 ease-standard hover:bg-brand-600 hover:shadow-lift sm:whitespace-nowrap"
    >
      {children}
      <ArrowRight
        aria-hidden
        className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
      />
    </a>
  );
}

/** The quiet second action: same height, no fill competition. */
export function CtaSoft({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xs bg-brand-100 px-6 text-[13px] font-bold uppercase tracking-caps text-brand-700 transition-colors duration-150 ease-standard hover:bg-brand-200 sm:whitespace-nowrap"
    >
      {children}
    </a>
  );
}

/** The in-block text link. ⚠️ min-h-11 is not decoration: a bordered
    link is only as tall as its own line box, which is about 17px, and
    the site holds a 44px tap floor. */
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group inline-flex min-h-11 items-center gap-2 self-start border-b-2 border-brand-500 pb-0.5 text-sm font-bold text-brand-500 transition-colors duration-150 hover:border-brand-700 hover:text-brand-700"
    >
      {children}
      <ArrowRight
        aria-hidden
        className="h-4 w-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5"
      />
    </a>
  );
}

/* ── STRUCTURE ────────────────────────────────────────────────────── */

export function Section({
  id,
  bg = CREAM,
  children,
}: {
  id?: string;
  bg?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} style={{ backgroundColor: bg }}>
      <div className={`${FRAME} ${GUTTER} py-16 md:py-24`}>{children}</div>
    </section>
  );
}

/**
 * The section heading: serif, sentence case, centred, with the sub
 * directly beneath on a narrow measure. No numbered rail: that rail is
 * exactly the "looks like a blog" complaint the founder made about the
 * desk pages.
 */
export function SectionHead({
  children,
  sub,
  dark = false,
  wide = false,
}: {
  children: React.ReactNode;
  sub?: string;
  dark?: boolean;
  /**
   * The wide measure, for the longest headings, so they land in two big
   * lines instead of four cramped ones.
   *
   * 🔴 IT IS IN PIXELS, NOT `ch`, AND THAT MATTERS. `ch` resolves
   * against the WRAPPER's font, which is the body sans, not the serif
   * the heading is actually set in. `max-w-[64ch]` measured 646px and
   * the heading still broke over four lines.
   */
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto text-center ${
        wide ? "max-w-[34ch] sm:max-w-[620px] lg:max-w-[1000px]" : "max-w-[46ch]"
      }`}
    >
      <h2
        style={SERIF}
        className={`text-balance font-bold leading-[1.15] tracking-[-0.015em] ${
          wide
            ? "text-[clamp(1.55rem,1.1rem+1.7vw,2.25rem)]"
            : "text-[clamp(1.75rem,1.15rem+2.3vw,2.75rem)]"
        } ${dark ? "text-white" : "text-ink-950"}`}
      >
        {children}
      </h2>
      {sub ? (
        <p
          className={`mx-auto mt-5 max-w-[52ch] text-base leading-relaxed ${
            dark ? "text-white/70" : "text-ink-600"
          }`}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}

/* The three places the header goes. 🔴 THIS IS THE WHOLE SITE now,
   besides the two legal pages in the footer. "About" is /why-novada:
   the founder asked for that word in the nav, and renaming the route
   would break every inbound link to it. */
const NAV = [
  { href: "/care/ai-workforce", label: "Care AI Workforce" },
  { href: "/practices/ai-workforce", label: "Practice AI Workforce" },
  { href: "/why-novada", label: "About" },
];

/**
 * The landing-page header.
 *
 * ⚠️ TWO ROWS BELOW lg, ONE FROM lg UP. Three nav labels, a wordmark
 * and a button do not fit across 375px, and the alternative is a
 * hamburger that hides the only three destinations the site has. The
 * second row costs 44px of the first screen, which is why the hero's
 * top padding drops on mobile to pay for it: measured without that,
 * the first CTA landed at 666px against a 667px fold.
 *
 * 🔴 THE BREAKPOINT IS lg, NOT md, AND THAT IS NOT A STYLE CHOICE. At
 * md the inline row is logo + three labels + the button, which
 * measures about 800px and does not fit a 768px tablet: every one of
 * the four rebuilt pages scrolled sideways at exactly that width.
 * Moving it down to md again reintroduces that.
 *
 * ⚠️ min-h-11 ON EVERY NAV LINK. A bare inline link is about 20px tall
 * and the site holds a 44px tap floor.
 */
export function LpHeader({ cta = "Book a discovery call" }: { cta?: string }) {
  return (
    <header
      className="sticky top-0 z-40 border-b border-ink-100/70 backdrop-blur"
      style={{ backgroundColor: "rgba(255,251,244,0.92)" }}
    >
      <div className={`${FRAME} ${GUTTER} flex min-h-16 items-center justify-between gap-4`}>
        {/* ⚠️ THE HOUSE LOCKUP IS THE MARK PLUS A TEXT WORDMARK. It is
            NOT public/Novada Logo.png: that file is a 1024x1024 square
            with the mark floating in the middle, so at nav height it
            renders as a 20px smudge. */}
        <a
          href="/"
          aria-label="Novada Tech, home"
          className="-mx-1.5 flex flex-shrink-0 items-center gap-2.5 rounded-xs px-1.5 py-2"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/favicon.png" alt="" width={32} height={32} className="h-7 w-7" />
          <span className="text-lg font-bold leading-none tracking-tight text-ink-950">
            Novada <span className="text-brand-500">Tech</span>
          </span>
        </a>
        {/* The nav, inline from md up. */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7 lg:gap-9">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="inline-flex min-h-11 items-center whitespace-nowrap text-sm font-semibold text-ink-700 transition-colors duration-150 hover:text-brand-500"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ⚠️ TWO LABELS, ONE BUTTON. The long one wraps to three lines
            in a phone's 186px header slot, which makes the sticky
            header 65px tall and pushes the hero down the screen. */}
        <Cta href="#book">
          <span className="sm:hidden">Book a call</span>
          <span className="hidden sm:inline">{cta}</span>
        </Cta>
      </div>

      {/* The nav's own row, below md. ⚠️ overflow-x-auto is the
          safety net, not the design: at 320px the three labels are
          wider than the screen and without it they would widen the
          whole document. */}
      <nav
        aria-label="Primary"
        className="border-t border-ink-100/70 lg:hidden"
      >
        <ul
          className={`${FRAME} ${GUTTER} flex items-center gap-6 overflow-x-auto`}
        >
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="inline-flex min-h-11 items-center whitespace-nowrap text-[13px] font-semibold text-ink-700 transition-colors duration-150 hover:text-brand-500"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

/* ── MARKS ────────────────────────────────────────────────────────── */

/* 🔴 BLUE, NOT GREEN, founder instruction 29 October 2026: a five-star
   row in the review platform's own green invites the brand complaint we
   have already had two notices about, whatever the exact hex. The
   rating is unbranded everywhere it appears: no platform name, no
   wordmark, and it is never a link. */
export function Stars({ className = "h-4 w-4 fill-brand-500 text-brand-500" }) {
  return (
    <span aria-hidden className="flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={className} strokeWidth={0} />
      ))}
    </span>
  );
}

export function Rating() {
  return (
    <div className="flex items-center gap-2.5">
      <Stars />
      <span className="text-sm font-bold text-ink-950">5.0</span>
      <span className="text-sm text-ink-500">from 77 provider reviews</span>
    </div>
  );
}

export function Tick({ dark = false }: { dark?: boolean }) {
  return (
    <Check
      aria-hidden
      strokeWidth={2.5}
      className={`mt-1 h-3.5 w-3.5 flex-shrink-0 ${dark ? "text-brand-200" : "text-brand-500"}`}
    />
  );
}

/**
 * The organic shapes the product cards float over.
 *
 * ⚠️ ALWAYS INSIDE A CLIPPING ANCESTOR. These carry negative offsets,
 * and without `overflow-hidden` on the section they extend the document
 * past the viewport and the whole page scrolls sideways at 390px.
 *
 * 🔴 z-0 AND NOT -z-10. The bands paint their own background, so a
 * negatively stacked child renders BEHIND that background and the
 * shapes vanish completely while the markup looks perfect. Shapes sit
 * at z-0 and whatever covers them takes z-10.
 */
export function Blobs({ flip = false }: { flip?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      <svg
        viewBox="0 0 400 400"
        className={`absolute h-[150%] w-[150%] ${flip ? "-right-24 -top-20" : "-left-24 -top-20"}`}
        fill="none"
      >
        <path
          d="M118 36c44-18 92 2 112 42 19 39 6 86-26 112-33 26-83 29-113 4C60 168 50 118 63 82c9-24 20-35 55-46Z"
          fill="#DCE6FF"
          opacity="0.85"
        />
        <path
          d="M262 214c34-10 72 10 84 44 12 33-4 71-36 86-33 15-74 5-91-26-17-30-8-70 24-89 8-5 12-10 19-15Z"
          fill={CREAM_DEEP}
        />
        <path
          d="M300 70c22-14 54-6 66 17 11 22 2 50-20 61-23 11-51 3-61-19-10-21-4-46 15-59Z"
          fill="#A6BEFF"
          opacity="0.75"
        />
      </svg>
    </div>
  );
}

/* ── PRODUCT MOCK CHROME ──────────────────────────────────────────────
 *
 * ⚠️ WHITE CARDS, NOT THE INK PANELS THE REST OF THE ESTATE USES. On a
 * cream ground a dark panel reads as a hole.
 *
 * ⚠️ EVERY MOCK CARRIES AN "Example" CHIP, and that is a rule rather
 * than a decoration. A figure describing the state of one fictional
 * RECORD is ordinary dashboard content; a figure describing what Novada
 * ACHIEVES is never allowed inside a mock, and the chip is what stops a
 * reader confusing the two.
 * ──────────────────────────────────────────────────────────────────── */

export function ExampleChip() {
  return (
    <span className="flex-shrink-0 rounded-xs bg-ink-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-caps text-ink-500">
      Example
    </span>
  );
}

export function Dots() {
  return (
    <span aria-hidden className="flex flex-shrink-0 gap-1.5">
      <span className="h-2 w-2 rounded-full bg-ink-200" />
      <span className="h-2 w-2 rounded-full bg-ink-200" />
      <span className="h-2 w-2 rounded-full bg-ink-200" />
    </span>
  );
}

export function Card({
  title,
  children,
  chrome = true,
}: {
  title?: string;
  children: React.ReactNode;
  chrome?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-ink-100 bg-white shadow-float">
      {chrome ? (
        <div className="flex items-center justify-between gap-3 border-b border-ink-100 px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <Dots />
            {title ? <p className={`${MICRO_TIGHT} truncate text-ink-500`}>{title}</p> : null}
          </div>
          <ExampleChip />
        </div>
      ) : null}
      {children}
    </div>
  );
}

export function Bar({ pct, tone = "brand" }: { pct: number; tone?: "brand" | "warm" }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
      <div
        className={`h-full rounded-full ${tone === "warm" ? "bg-signal-600" : "bg-brand-500"}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

/** Initials avatar. ⚠️ NEVER a real client's face: the only
    photographs on these pages are ones Novada owns. */
export function Avatar({ i }: { i: string }) {
  return (
    <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-white bg-brand-100 text-[12px] font-bold text-brand-700">
      {i}
    </span>
  );
}
