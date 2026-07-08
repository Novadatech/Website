"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, TrendingUp, Cog, Compass } from "lucide-react";
import NovadaLogo from "./NovadaLogo";

const SOLUTIONS = [
  {
    href: "/growth-infrastructure",
    label: "Growth Infrastructure",
    desc: "15+ qualified sales meetings every month — guaranteed.",
    icon: TrendingUp,
  },
  {
    href: "/operations-infrastructure",
    label: "Operations Infrastructure",
    desc: "Custom AI systems that remove bottlenecks and cut costs.",
    icon: Cog,
  },
  {
    href: "/ai-consulting",
    label: "AI Consulting",
    desc: "Audit and roadmap: find where AI pays off in your business.",
    icon: Compass,
  },
];

const secondaryLinks = [
  { href: "/case-study", label: "Case Studies" },
  { href: "/about", label: "About" },
];

const BOOKING_URL = "/book-call";

function SolutionsDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white font-medium transition-colors duration-300"
        aria-expanded={open}
        aria-haspopup="true"
      >
        Solutions
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 top-full pt-4"
          >
            <div className="w-[360px] rounded-2xl border border-white/[0.08] bg-surface-950/[0.98] backdrop-blur-xl shadow-2xl p-2">
              {SOLUTIONS.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-white/[0.05] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0CC481]/10 border border-[#0CC481]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0CC481]/15 transition-colors">
                    <s.icon className="w-5 h-5 text-[#0CC481]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white leading-snug">
                      {s.label}
                    </p>
                    <p className="mt-0.5 text-xs text-white/50 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // Morningside design language sitewide: white rectangular uppercase CTA
  // (matches their GET IN TOUCH button).
  const ctaClass =
    "font-supply inline-flex items-center rounded bg-white px-5 py-2.5 text-sm font-medium uppercase tracking-[0.08em] text-black transition-colors hover:bg-white/85";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-surface-950/90 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-container section-padding">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <NovadaLogo
                variant="light"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              <Link
                href="/"
                className="text-sm text-white/70 hover:text-white font-medium transition-colors duration-300 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0CC481] transition-all duration-300 group-hover:w-full" />
              </Link>

              <SolutionsDropdown />

              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white font-medium transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0CC481] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

              <a href={BOOKING_URL} className={ctaClass}>
                See If You Qualify
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-surface-950/98 backdrop-blur-2xl pt-24 px-8 md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 pb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-semibold text-white/80 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </motion.div>

              {/* Solutions group */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[#0CC481]/80 font-semibold mb-4">
                  Solutions
                </p>
                <div className="flex flex-col gap-4 pl-1">
                  {SOLUTIONS.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#0CC481]/10 border border-[#0CC481]/20 flex items-center justify-center flex-shrink-0">
                        <s.icon className="w-4 h-4 text-[#0CC481]" />
                      </div>
                      <span className="text-lg font-semibold text-white/80 group-hover:text-white transition-colors">
                        {s.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {secondaryLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.16 + i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-semibold text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32 }}
                className="pt-4"
              >
                <a
                  href={BOOKING_URL}
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full text-center"
                >
                  See If You Qualify
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
