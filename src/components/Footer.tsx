"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Logo from "./Logo";

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const BOOKING_URL = "/book-call";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-navy-950">
      <div className="max-container section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center">
              <Logo
                variant="light"
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-white/50 text-sm max-w-md leading-relaxed">
              We build complete client acquisition systems for businesses ready to scale.
              You only pay when we deliver results. No retainers. No guesswork.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex text-gold-400 text-sm">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <span className="text-white/40 text-sm">
                4.9 on Trustpilot · 77+ Reviews
              </span>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.12] transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-white/40 hover:text-white/80 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white/40 hover:text-white/80 transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <a href="/book-call" className="text-sm text-white/40 hover:text-white/80 transition-colors duration-300">
                  Book a Call
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:support@novadatech.com.au"
                  className="flex items-center gap-3 text-sm text-white/40 hover:text-white/80 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  support@novadatech.com.au
                </a>
              </li>
              <li>
                <a
                  href="tel:+61485000813"
                  className="flex items-center gap-3 text-sm text-white/40 hover:text-white/80 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  (+61) 485 000 813
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/40">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Suite 23/220 Collins Street, Melbourne VIC 3000
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Novada Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <span className="text-white/10">|</span>
            <Link
              href="/terms-of-service"
              className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <span className="text-white/10">|</span>
            <Link
              href="/security"
              className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              Security
            </Link>
            <span className="text-white/10">|</span>
            <p className="text-xs text-white/20">
              Results. Growth. Partnership.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
