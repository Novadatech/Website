"use client";

import Link from "next/link";
import { Mail, Phone, Star, ExternalLink } from "lucide-react";
import Logo from "./Logo";

export default function LandingFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-navy-950">
      <div className="max-container section-padding py-10">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <Logo variant="light" className="h-9 w-auto" />

          {/* Trustpilot */}
          <a
            href="https://www.trustpilot.com/review/novadatech.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/60 hover:text-white/80 transition-colors"
          >
            <div className="flex text-gold-400 text-sm">★★★★★</div>
            <span>4.9 on Trustpilot · 77+ Reviews</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          {/* Contact */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
            <a
              href="mailto:support@novadatech.com.au"
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <Mail className="w-4 h-4" />
              support@novadatech.com.au
            </a>
            <a
              href="tel:+61485000813"
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (+61) 485 000 813
            </a>
          </div>

          {/* Privacy Policy + Copyright */}
          <div className="flex items-center gap-4 text-xs text-white/30">
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <span>© {new Date().getFullYear()} Novada Tech. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
