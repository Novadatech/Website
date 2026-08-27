"use client";

/*
 * Primary navigation for the Desk brand pages, per the Website Rebuild
 * Brief section 3: four items plus the booking button, nothing else. No
 * pricing page, no testimonials page, no blog, no industries mega-menu.
 *
 * Every target is a real page, so no dead links ship.
 */

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BTN_PRIMARY_SM, CONTAINER, SECTION } from "./tokens";

const NAV_ITEMS = [
  { href: "/patient-access-desk", label: "For Clinics" },
  { href: "/workforce-ops-desk", label: "For Care Providers" },
  { href: "/why-novada", label: "Why Novada" },
];

export default function DeskNav({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const dark = tone === "dark";

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md ${
        dark ? "border-white/10 bg-[#080808]/95" : "border-[#E2E7EE] bg-white/95"
      }`}
    >
      <div className={`${CONTAINER} ${SECTION}`}>
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/favicon.png" alt="" className="h-7 w-7 md:h-8 md:w-8" />
            <span className={`text-lg md:text-xl font-bold tracking-tight leading-none ${dark ? "text-white" : "text-[#0E1116]"}`}>
              Novada <span className="text-[#003DDB]">Tech</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? dark
                        ? "text-[#7AA2FF]"
                        : "text-[#003DDB]"
                      : dark
                        ? "text-white/70 hover:text-white"
                        : "text-[#39424E] hover:text-[#003DDB]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a href="/#book" className={`${BTN_PRIMARY_SM} hidden sm:inline-flex`}>
              Book a Desk Review
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={`lg:hidden p-2 -mr-2 ${dark ? "text-white" : "text-[#0E1116]"}`}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className={`lg:hidden border-t ${dark ? "border-white/10 bg-[#080808]" : "border-[#E2E7EE] bg-white"}`}>
          <div className={`${CONTAINER} ${SECTION} py-4 flex flex-col gap-1`}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-base font-medium border-b ${dark ? "text-white border-white/10" : "text-[#0E1116] border-[#F4F6FA]"}`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/#book"
              onClick={() => setOpen(false)}
              className={`${BTN_PRIMARY_SM} mt-4 w-full`}
            >
              Book a Desk Review
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
