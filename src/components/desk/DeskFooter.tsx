/*
 * Footer for the Desk brand pages, per the Website Rebuild Brief section 3.
 * Columns: the two offer pages, Why Novada, contact, client login, legal.
 * Strapline: "Australian owned and operated."
 *
 * The legacy LinkedIn meetings service gets no navigation presence here
 * (brief section 3). That remains FOUNDER TO CONFIRM; if a single footer
 * link is later approved, it goes under a "Legacy services" heading.
 */

"use client";

import Link from "next/link";
import { CONTAINER, SECTION } from "./tokens";

export default function DeskFooter({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <footer className={dark ? "border-t border-white/10 bg-[#05070C]" : "border-t border-[#E2E7EE] bg-[#F4F6FA]"}>
      <div className={`${CONTAINER} ${SECTION} py-14`}>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/favicon.png" alt="" className="h-7 w-7" />
              <span className={`text-lg font-bold tracking-tight ${dark ? "text-white" : "text-[#0E1116]"}`}>
                Novada <span className="text-[#003DDB]">Tech</span>
              </span>
            </div>
            <p className={`text-sm leading-relaxed max-w-[260px] ${dark ? "text-white/50" : "text-[#5A6676]"}`}>
              We run the desk for Australian healthcare businesses. Alongside
              your team, not instead of them.
            </p>
          </div>

          <div>
            <h3 className={`text-[12px] font-semibold uppercase tracking-[0.14em] mb-4 ${dark ? "text-white/80" : "text-[#0B1E4B]"}`}>
              What we run
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/patient-access-desk" className={`text-sm transition-colors ${dark ? "text-white/60 hover:text-white" : "text-[#39424E] hover:text-[#003DDB]"}`}>
                  The Patient Access Desk
                </Link>
              </li>
              <li>
                <Link href="/workforce-ops-desk" className={`text-sm transition-colors ${dark ? "text-white/60 hover:text-white" : "text-[#39424E] hover:text-[#003DDB]"}`}>
                  The Workforce Ops Desk
                </Link>
              </li>
              <li>
                <Link href="/why-novada" className={`text-sm transition-colors ${dark ? "text-white/60 hover:text-white" : "text-[#39424E] hover:text-[#003DDB]"}`}>
                  Why Novada
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`text-[12px] font-semibold uppercase tracking-[0.14em] mb-4 ${dark ? "text-white/80" : "text-[#0B1E4B]"}`}>
              Contact
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:+61485000813" className={`text-sm transition-colors ${dark ? "text-white/60 hover:text-white" : "text-[#39424E] hover:text-[#003DDB]"}`}>
                  +61 485 000 813
                </a>
              </li>
              <li>
                <a href="mailto:support@novadatech.com.au" className={`text-sm transition-colors ${dark ? "text-white/60 hover:text-white" : "text-[#39424E] hover:text-[#003DDB]"}`}>
                  support@novadatech.com.au
                </a>
              </li>
              <li>
                <a href="/#book" className={`text-sm transition-colors ${dark ? "text-white/60 hover:text-white" : "text-[#39424E] hover:text-[#003DDB]"}`}>
                  Book a review
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`text-[12px] font-semibold uppercase tracking-[0.14em] mb-4 ${dark ? "text-white/80" : "text-[#0B1E4B]"}`}>
              Legal
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/privacy-policy" className={`text-sm transition-colors ${dark ? "text-white/60 hover:text-white" : "text-[#39424E] hover:text-[#003DDB]"}`}>
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className={`text-sm transition-colors ${dark ? "text-white/60 hover:text-white" : "text-[#39424E] hover:text-[#003DDB]"}`}>
                  Terms of service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`mt-12 flex flex-col items-start justify-between gap-3 border-t pt-6 sm:flex-row sm:items-center ${
            dark ? "border-white/10" : "border-[#E2E7EE]"
          }`}
        >
          <p className={`text-sm font-medium ${dark ? "text-white" : "text-[#0B1E4B]"}`}>
            Australian owned and operated.
          </p>
          <p className={dark ? "text-xs text-white/35" : "text-xs text-[#8FA0C4]"}>
            © {new Date().getFullYear()} Novada Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
