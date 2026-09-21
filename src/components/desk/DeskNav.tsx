"use client";

/*
 * Primary navigation. Per the Website Rebuild Brief section 3: nav items
 * plus the booking button, nothing else. No pricing page, no testimonials
 * page, no blog, no industries mega-menu.
 *
 * This site has two pages and the offer is the root, so the nav carries a
 * single item and the ask. Every target is a real page: no dead links.
 *
 * Client only for the mobile disclosure and the active route. It is the
 * leaf, not the page: the pages that render it are server components.
 *
 * ⚠️ THE ACTIVE ITEM IS NOT MARKED BY COLOUR ALONE. It carries a rule
 * under it and aria-current. Roughly one man in twelve cannot rely on the
 * colour, and this audience is 40 to 60.
 */

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BTN_ON_INK_SM, BTN_PRIMARY_SM, FRAME, GUTTER } from "./tokens";

/*
 * ⚠️ THE NAVIGATION IS AUDIENCE-AWARE SINCE 21 SEPTEMBER 2026, and it
 * has to be. This site now serves two audiences whose vocabularies must
 * never cross, and a nav listing all four desks at once would put "The
 * Operations Desk" in front of a dentist and "The Patient Access Desk"
 * in front of a care provider on every page of the site.
 *
 * So: inside an audience, the nav lists THAT audience's two desks. On
 * the router homepage and on shared pages it lists the two doors
 * instead. Either way the visitor sees exactly two things without
 * clicking, which is what the brief asked for in the first place.
 *
 * A visitor who came through the wrong door is not trapped: the
 * switcher at the end of the list crosses to the other audience.
 */
import { AUDIENCES, CTA_LABEL, offersFor, type Audience } from "@/content/offers";

function navItems(audience?: Audience["slug"]) {
  const items = audience
    ? offersFor(audience).map((o) => ({ href: o.href, label: o.name }))
    : AUDIENCES.map((a) => ({ href: a.href, label: a.name }));
  return [...items, { href: "/why-novada", label: "Why Novada" }];
}

export default function DeskNav({
  tone = "light",
  audience,
}: {
  tone?: "light" | "dark";
  /** When set, the nav lists this audience's desks instead of the doors. */
  audience?: Audience["slug"];
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const NAV_ITEMS = navItems(audience);
  const other = AUDIENCES.find((a) => a.slug !== audience);
  // Book on the page the visitor is already on when it owns a calendar.
  // Sending a paid visitor from an offer page to the home calendar loses the
  // single-offer context and attributes the booking to the home page.
  const bookHref = pathname === "/" ? "#book" : "/#book";
  const dark = tone === "dark";

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md ${
        dark ? "border-white/10 bg-canvas-deep/95" : "border-ink-100 bg-white/90"
      }`}
    >
      <div className={`${FRAME} ${GUTTER}`}>
        <div className="flex h-16 items-center justify-between gap-4 md:h-20">
          {/* aria-label rather than the wordmark, because the wordmark
              is display:none under 380px and a display:none element is
              not in the accessibility tree. The link needs a name at
              every width. */}
          <Link
            href="/"
            aria-label="Novada Tech, home"
            className="flex flex-shrink-0 items-center gap-2.5 rounded-xs py-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/favicon.png"
              alt=""
              width={32}
              height={32}
              className="h-7 w-7 md:h-8 md:w-8"
            />
            <span
              className={`hidden text-lg font-bold leading-none tracking-tight sm:inline ${
                dark ? "text-white" : "text-ink-950"
              }`}
            >
              Novada{" "}
              <span className={dark ? "text-brand-200" : "text-brand-500"}>
                Tech
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`inline-flex min-h-11 items-center border-b-2 pt-0.5 text-sm font-medium transition-colors duration-150 ease-standard ${
                        active
                          ? dark
                            ? "border-brand-200 text-white"
                            : "border-brand-500 text-brand-500"
                          : dark
                            ? "border-transparent text-white/70 hover:text-white"
                            : "border-transparent text-ink-700 hover:border-ink-200 hover:text-brand-500"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {/* The way out for somebody who came through the wrong door.
                Quiet on purpose: it is an escape hatch, not a second CTA. */}
            {audience && other ? (
              <Link
                href={other.href}
                className={`hidden text-sm font-medium transition-colors duration-150 ease-standard lg:inline ${
                  dark
                    ? "text-white/55 hover:text-white"
                    : "text-ink-500 hover:text-brand-500"
                }`}
              >
                {other.name}
              </Link>
            ) : null}
            {/* ⚠️ NOT hidden on mobile any more. This was
                "hidden sm:inline-flex", which left a paid mobile lander
                with no call to action anywhere on the first screen. */}
            <a
              href={bookHref}
              className={`${dark ? BTN_ON_INK_SM : BTN_PRIMARY_SM} px-3 sm:px-4`}
            >
              {/* One label, everywhere. The mobile variant used to read
                  "Book a review" while the hero read something else, an inch
                  apart. See the note on CTA_LABEL in src/content/offers.ts. */}
              {CTA_LABEL}
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="desk-nav-mobile"
              onClick={() => setOpen((v) => !v)}
              className={`-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-sm lg:hidden ${
                dark ? "text-white" : "text-ink-950"
              }`}
            >
              {open ? (
                <X aria-hidden className="h-5 w-5" />
              ) : (
                <Menu aria-hidden className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav
          id="desk-nav-mobile"
          /* Distinct from the desktop nav's label: two landmarks with
             the same accessible name is an ambiguity for a screen
             reader navigating by landmark. */
          aria-label="Primary mobile"
          className={`border-t lg:hidden ${
            dark ? "border-white/10 bg-canvas-deep" : "border-ink-100 bg-white"
          }`}
        >
          <ul className={`${FRAME} ${GUTTER} flex flex-col py-2`}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`flex min-h-14 items-center border-b text-base font-medium ${
                    dark
                      ? "border-white/10 text-white"
                      : "border-ink-100 text-ink-950"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {audience && other ? (
              <li>
                <Link
                  href={other.href}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-14 items-center border-b text-base font-medium ${
                    dark
                      ? "border-white/10 text-white/60"
                      : "border-ink-100 text-ink-500"
                  }`}
                >
                  {other.name}
                </Link>
              </li>
            ) : null}
            <li className="pb-4 pt-5">
              <a
                href={bookHref}
                onClick={() => setOpen(false)}
                className={`${dark ? BTN_ON_INK_SM : BTN_PRIMARY_SM} min-h-12 w-full`}
              >
                {CTA_LABEL}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
