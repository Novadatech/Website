"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import { FRAME, GUTTER, MICRO } from "@/components/desk/tokens";
import { Cta } from "@/components/lp/kit";
import { INDUSTRIES, WC_BASE, WC_EMAIL, WC_TAGLINE } from "@/content/wc";

/*
 * ══════════════════════════════════════════════════════════════════════
 * WORKFORCE CONTINUITY: HEADER AND FOOTER.
 *
 * Same cream surface, wordmark and button as LpHeader, so the offer
 * reads as Novada; a different nav, because it is a different offer.
 * The draft site's nav, verbatim: a "Solution" dropdown captioned
 * "Choose your industry", What we do, How it works, Who we support,
 * FAQ, and the "Free workforce review" button.
 *
 * 🔴 NO LINKS TO THE AI WORKFORCE PAGES (founder: "not linked to the
 * current AI Employee pages"). The logo goes to this offer's own home.
 *
 * ⚠️ TWO ROWS BELOW lg, like LpHeader, for the same reason: five items
 * and a button do not fit across 390px, and a hamburger would hide the
 * Solution menu that is the point of the nav. On phones the Solution
 * entry opens a full-width panel under the row.
 * ══════════════════════════════════════════════════════════════════════
 */

const LINKS = [
  { href: `${WC_BASE}/what-we-do`, label: "What we do" },
  { href: `${WC_BASE}/how-it-works`, label: "How it works" },
  { href: `${WC_BASE}/who-we-support`, label: "Who we support" },
  { href: "#faq", label: "FAQ" },
];

function useOutside(open: boolean, close: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);
  return ref;
}

function SolutionMenu({ current }: { current?: string }) {
  return (
    <div className="w-[320px] rounded-lg border border-ink-100 bg-white p-3 shadow-float">
      <p className={`${MICRO} px-3 pb-2 pt-1 text-ink-400`}>Choose your industry</p>
      <ul>
        {INDUSTRIES.map((i) => (
          <li key={i.slug}>
            <a
              href={`${WC_BASE}/${i.slug}`}
              aria-current={current === i.slug ? "page" : undefined}
              className={`flex min-h-11 items-center justify-between gap-3 rounded-xs px-3 text-sm font-semibold transition-colors duration-150 hover:bg-brand-50 hover:text-brand-600 ${
                current === i.slug ? "text-brand-600" : "text-ink-800"
              }`}
            >
              {i.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WcHeader({ current }: { current?: string }) {
  const [open, setOpen] = useState(false);
  const [mOpen, setMOpen] = useState(false);
  const ref = useOutside(open, () => setOpen(false));
  const mRef = useOutside(mOpen, () => setMOpen(false));
  const link =
    "inline-flex min-h-11 items-center whitespace-nowrap text-sm font-semibold text-ink-700 transition-colors duration-150 hover:text-brand-500";

  return (
    <header
      className="sticky top-0 z-40 border-b border-ink-100/70 backdrop-blur"
      style={{ backgroundColor: "rgba(255,251,244,0.92)" }}
    >
      <div className={`${FRAME} ${GUTTER} flex min-h-16 items-center justify-between gap-4`}>
        <a
          href={WC_BASE}
          aria-label="Novada Tech Workforce Continuity, home"
          className="-mx-1.5 flex flex-shrink-0 items-center gap-2.5 rounded-xs px-1.5 py-2"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/favicon.png" alt="" width={32} height={32} className="h-7 w-7" />
          <span className="flex flex-col">
            <span className="text-lg font-bold leading-none tracking-tight text-ink-950">
              Novada <span className="text-brand-500">Tech</span>
            </span>
            {/* hidden on phones: wider than the wordmark, it squeezed the
                button label onto two lines at 390px */}
            <span className="mt-1 hidden text-[10px] font-semibold uppercase leading-none tracking-caps text-ink-500 sm:block">
              Workforce continuity
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            <li>
              <div ref={ref} className="relative">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-haspopup="true"
                  onClick={() => setOpen((v) => !v)}
                  className={`${link} gap-1.5`}
                >
                  Solution
                  <ChevronDown aria-hidden className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
                </button>
                {open ? (
                  <div className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2">
                    <SolutionMenu current={current} />
                  </div>
                ) : null}
              </div>
            </li>
            {LINKS.map((n) => (
              <li key={n.href}>
                <a href={n.href} className={link}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Cta href="#review">
          <span className="sm:hidden">Free review</span>
          <span className="hidden sm:inline">Free workforce review</span>
        </Cta>
      </div>

      {/* phones and tablets: the nav's own row */}
      <div ref={mRef} className="relative border-t border-ink-100/70 lg:hidden">
        <nav aria-label="Primary">
          <ul className={`${FRAME} ${GUTTER} flex items-center gap-6 overflow-x-auto`}>
            <li>
              <button
                type="button"
                aria-expanded={mOpen}
                onClick={() => setMOpen((v) => !v)}
                className="inline-flex min-h-11 items-center gap-1 whitespace-nowrap text-[13px] font-semibold text-ink-700"
              >
                Solution
                <ChevronDown aria-hidden className={`h-3.5 w-3.5 transition-transform ${mOpen ? "rotate-180" : ""}`} />
              </button>
            </li>
            {LINKS.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="inline-flex min-h-11 items-center whitespace-nowrap text-[13px] font-semibold text-ink-700"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {mOpen ? (
          <div className={`${GUTTER} absolute inset-x-0 top-full z-50 pb-3 pt-2`}>
            <div className="[&>div]:w-full">
              <SolutionMenu current={current} />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export function WcFooter() {
  const link = "inline-flex min-h-11 items-center text-sm text-ink-700 transition-colors duration-150 hover:text-brand-500";
  const heading = `${MICRO} mb-2 text-ink-500`;
  return (
    <footer className="border-t border-ink-100 bg-ink-50">
      <div className={`${FRAME} ${GUTTER} py-16`}>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/favicon.png" alt="" width={28} height={28} className="h-7 w-7" />
              <span className="text-lg font-bold tracking-tight text-ink-950">
                Novada <span className="text-brand-500">Tech</span>
              </span>
            </div>
            <p className="max-w-[34ch] text-sm text-ink-500">
              {WC_TAGLINE}
            </p>
          </div>
          <div>
            <h2 className={heading}>Explore Novada</h2>
            <ul>
              <li><a href={WC_BASE} className={link}>Home</a></li>
              {LINKS.slice(0, 3).map((n) => (
                <li key={n.href}><a href={n.href} className={link}>{n.label}</a></li>
              ))}
              <li><a href="#faq" className={link}>FAQ on this page</a></li>
            </ul>
          </div>
          <div>
            <h2 className={heading}>Solution</h2>
            <ul>
              {INDUSTRIES.map((i) => (
                <li key={i.slug}><a href={`${WC_BASE}/${i.slug}`} className={link}>{i.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={heading}>Contact</h2>
            <ul>
              <li><a href={`mailto:${WC_EMAIL}`} className={link}>{WC_EMAIL}</a></li>
              <li><a href="#review" className={link}>Get a free workforce review</a></li>
              <li><a href="/privacy-policy" className={link}>Privacy policy</a></li>
              <li><a href="/terms-of-service" className={link}>Terms of use</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-ink-100 pt-6 text-xs text-ink-500 sm:flex-row sm:justify-between">
          <span>© 2026 Novada Tech</span>
          <span>Recruitment. Readiness. Requested cover.</span>
        </div>
      </div>
    </footer>
  );
}
