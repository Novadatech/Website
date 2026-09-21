import type { Config } from "tailwindcss";

/*
 * ══════════════════════════════════════════════════════════════════════
 * THE DESIGN SYSTEM. One place. Tailwind 3.4, JS config, not CSS-first.
 *
 * Before 16 September 2026 there was no system: every size, colour and
 * radius on the site was an arbitrary value written inline, so the same
 * grey existed at four hex codes, the same heading at three sizes, and
 * nothing could be changed in one place. Everything below replaces those.
 *
 * RULES FOR EDITING THIS FILE
 *  1. No new value unless it is on the scale. If you need something
 *     between two steps, you almost certainly need one of the two steps.
 *  2. Type is FLUID: every size clamps between a 375px phone and a
 *     1440px desktop, so there is one size per role rather than one per
 *     breakpoint. Do not add `md:text-*` to something that already
 *     clamps.
 *  3. 12px (text-xs) is the floor site-wide. Nothing is smaller. The
 *     reader is 40 to 60 and holding a phone.
 *  4. Two type families, never three. Inter for everything that is read,
 *     Barlow Condensed for display headlines. Space Grotesk was removed
 *     on 16 September 2026: it was a third download serving only
 *     micro-caps labels, which Inter sets better at 12px anyway. The
 *     `supply` alias is kept pointing at Inter so an old class cannot
 *     break a page.
 * ══════════════════════════════════════════════════════════════════════
 */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* One extra breakpoint, and it exists for one reason: WCAG 1.4.10
         requires the page to work at 320 CSS px with no sideways scroll,
         and at 320 the header wordmark, the booking button and the menu
         button do not fit on one line. Layout still changes only at md
         and lg. Do not start designing against xs. */
      screens: { xs: "380px" },
      /* ────────────────────────────────────────────────────────────
         TYPE SCALE
         Body side: 1.2 minor third. Display side: a wider editorial
         ratio for the condensed face. Line-height falls as size rises;
         tracking tightens as size rises. Both are baked in here so a
         call site never has to remember them.
         ──────────────────────────────────────────────────────────── */
      fontSize: {
        /* 12 → 13. The floor. Interface labels, micro-caps, captions. */
        xs: ["clamp(0.75rem, 0.73rem + 0.10vw, 0.8125rem)", { lineHeight: "1.45" }],
        /* 14 → 15. Secondary body, nav, footer, buttons. */
        sm: ["clamp(0.875rem, 0.85rem + 0.12vw, 0.9375rem)", { lineHeight: "1.55" }],
        /* 16 → 18. Body. */
        base: ["clamp(1rem, 0.96rem + 0.19vw, 1.125rem)", { lineHeight: "1.62" }],
        /* 18 → 20. Lead paragraphs, standfirsts. */
        lg: ["clamp(1.125rem, 1.07rem + 0.24vw, 1.25rem)", { lineHeight: "1.55" }],
        /* 22 → 26. Sub-headings in sentence case. */
        xl: [
          "clamp(1.375rem, 1.28rem + 0.38vw, 1.625rem)",
          { lineHeight: "1.38", letterSpacing: "-0.01em" },
        ],
        /* 28 → 36. Pull quotes, the ink-surface statements. */
        "2xl": [
          "clamp(1.75rem, 1.58rem + 0.71vw, 2.25rem)",
          { lineHeight: "1.28", letterSpacing: "-0.015em" },
        ],

        /* Display scale, Barlow Condensed bold caps. Uppercase condensed
           carries far more characters per line than Inter, so it runs
           larger than the body scale at the same role. */
        /* 42 → 76. One per page, the H1. */
        d1: [
          "clamp(2.625rem, 1.7rem + 3.9vw, 4.75rem)",
          { lineHeight: "0.9", letterSpacing: "-0.015em" },
        ],
        /* 30 → 52. Band headlines. */
        d2: [
          "clamp(1.875rem, 1.35rem + 2.2vw, 3.25rem)",
          { lineHeight: "0.94", letterSpacing: "-0.012em" },
        ],
        /* 26 → 40. Card titles, the closing statement. */
        d3: [
          "clamp(1.625rem, 1.3rem + 1.4vw, 2.5rem)",
          { lineHeight: "0.96", letterSpacing: "-0.01em" },
        ],
        /* 22 → 30. The quietest display size. */
        d4: [
          "clamp(1.375rem, 1.2rem + 0.75vw, 1.875rem)",
          { lineHeight: "1.02", letterSpacing: "-0.008em" },
        ],
      },

      /* ────────────────────────────────────────────────────────────
         COLOUR
         White canvas, blue-tinted neutrals (never a flat grey), one
         brand blue for the conversion action and state, one scarce
         signal colour for the boundaries that carry weight.

         CONTRAST. Recomputed 16 September 2026 with a real luminance
         calculation. THREE OF THE FIGURES THAT USED TO BE IN THIS
         COMMENT WERE WRONG, which is worse than having no figures,
         because every later decision cited them.

         The second column is the one that was missing, and it is the
         one that mattered: half the bands on this site are the ink-50
         tint, not white, and a ratio measured on white does not hold
         there.

                              on white   on ink-50 tint
           ink-950 #0B0E14      19.32        18.18
           ink-700 #39424E      10.18         9.58
           ink-600 #454E5C       8.41         7.91
           ink-500 #5B6472       5.98         5.63   ← muted body, 12px
           ink-400 #697283       4.84         4.56   ← quietest TEXT
           ink-300 #98A2B3       2.58         2.42   ← NON-TEXT ONLY
           brand-500 #003DDB     7.81         7.35
           signal-600 #B4501A    5.12         4.82

         ⚠️ ink-400 WAS #6E7787, annotated "4.5:1". It measured 4.51 on
         white, so it scraped AA there and was then used freely on the
         tint bands, where it is 4.25 and fails. Every rail number and
         every device caption on a tint band was below AA. It is now
         #697283, which clears 4.5 on BOTH surfaces. The change is about
         two percent of lightness and is invisible beside the old value.

         ⚠️ ink-300 was annotated 3.0:1 and is 2.58:1. It is below the
         3:1 non-text floor as well, so it is for DECORATIVE marks only:
         the aria-hidden separator dots and disclosure chevrons. It must
         never carry a word, and it must never be the only thing
         signalling a control.

         ⚠️ brand-500 was annotated 10.4:1 and is 7.81:1. Still fine for
         text on white. NOT fine on ink: on canvas-ink it is 2.49:1, which
         is why BTN_ON_INK exists. See tokens.ts.

         On canvas-ink #0A0D14: white 19.43, brand-200 10.58.

         Anything below ink-400 must not carry words. Before this system
         existed, 12px labels were running at #7B8492 (3.8:1) and
         #9AA3B1 (3.0:1), both of which failed AA.
         ──────────────────────────────────────────────────────────── */
      colors: {
        ink: {
          950: "#0B0E14",
          900: "#141A24",
          800: "#232B38",
          700: "#39424E",
          600: "#454E5C",
          500: "#5B6472",
          400: "#697283",
          300: "#98A2B3",
          200: "#D3D8E2",
          100: "#E3E6EC",
          50: "#F7F8FA",
        },
        brand: {
          50: "#F2F5FF",
          100: "#DCE6FF",
          200: "#A6BEFF",
          400: "#3A6CFF",
          500: "#003DDB",
          600: "#0030AE",
          700: "#002687",
        },
        signal: {
          50: "#FBF2EC",
          200: "#E0C3AE",
          600: "#B4501A",
        },
        /* The reserved ink surfaces. Used sparingly: the proof band and
           the booking band, and nowhere else. */
        canvas: {
          ink: "#0A0D14",
          raised: "#111621",
          deep: "#05070C",
        },

        /* ── Legacy palettes below. Still referenced by older routes on
           the care site's shared components. Do not use in new work. ── */
        navy: {
          950: "#050d1a",
          900: "#0a1e3f",
          800: "#0f2d5e",
          700: "#163d7a",
          600: "#1e4f9a",
        },
        gold: { 400: "#fbdf00", 500: "#c9a23f", 600: "#b8922e" },
        accent: { blue: "#155eef", cyan: "#06b6d4" },
        ember: {
          400: "#FF7A55",
          500: "#FF5A30",
          600: "#E84620",
          700: "#C73815",
        },
        surface: { 950: "#0A0A0A" },
      },

      /* ────────────────────────────────────────────────────────────
         SPACE
         Tailwind's default scale is already 4pt based, so only the
         steps it lacks are added. Section rhythm is expressed as
         `py-band` so every band on every page is provably identical.
         ──────────────────────────────────────────────────────────── */
      spacing: {
        18: "4.5rem", // 72
        22: "5.5rem", // 88
        26: "6.5rem", // 104
        30: "7.5rem", // 120
        rail: "7.75rem", // 124, the index rail column
      },

      letterSpacing: {
        /* Micro-caps. 12px uppercase needs the air or it sets as a
           smudge; 4 words maximum at this tracking. */
        caps: "0.14em",
        "caps-tight": "0.08em",
      },

      maxWidth: {
        /* The frame. Every band, the nav, the footer and the sticky bar
           share this number, so the 1px hairline runs unbroken from the
           top of the page to the bottom. It was 1180 on the sticky bar
           for a while and the break was visible. */
        frame: "1240px",
        /* Body measure: 50 to 75 characters, target 66. */
        prose: "68ch",
        measure: "62ch",
        /* The statement device on the ink surfaces: short enough that a
           heavy 36px sentence still reads as one thought. */
        statement: "46ch",
        /* Headline measure: 18 to 28 characters. */
        headline: "20ch",
        display: "17ch",
      },

      borderRadius: {
        /* Concentric: an inner radius plus its padding equals the outer
           one. 6 inside 8 padding sits in 14. Do not mix in `rounded-xl`
           from the default scale on the desk pages. */
        xs: "4px",
        sm: "6px",
        DEFAULT: "8px",
        md: "10px",
        lg: "14px",
        xl: "18px",
        "2xl": "22px",
      },

      /* ────────────────────────────────────────────────────────────
         DEPTH
         Borders separate, shadows elevate. Every shadow is layered and
         starts with a hairline ring so an element never floats without
         an edge. Nothing on this site uses a single soft blur.
         ──────────────────────────────────────────────────────────── */
      boxShadow: {
        hair: "0 0 0 1px rgb(11 14 20 / 0.06)",
        raise:
          "0 0 0 1px rgb(11 14 20 / 0.06), 0 1px 2px -1px rgb(11 14 20 / 0.10)",
        lift:
          "0 0 0 1px rgb(11 14 20 / 0.06), 0 2px 4px 0 rgb(11 14 20 / 0.05), 0 8px 16px -6px rgb(11 14 20 / 0.10)",
        float:
          "0 0 0 1px rgb(11 14 20 / 0.06), 0 4px 8px -2px rgb(11 14 20 / 0.06), 0 18px 36px -12px rgb(11 14 20 / 0.16)",
        cta: "0 1px 2px 0 rgb(0 27 96 / 0.24), 0 8px 18px -8px rgb(0 61 219 / 0.45)",
        /* On dark surfaces the hairline flips to white. */
        "ink-lift":
          "0 0 0 1px rgb(255 255 255 / 0.07), 0 24px 60px -30px rgb(0 0 0 / 0.85)",
      },

      /* ────────────────────────────────────────────────────────────
         MOTION
         Entrances decelerate, exits accelerate, state changes use the
         standard curve. Never `linear`, never `ease-in` on an entrance.
         Durations: 150ms interaction, 200-320ms element, nothing longer.
         ──────────────────────────────────────────────────────────── */
      transitionTimingFunction: {
        enter: "cubic-bezier(0.05, 0.7, 0.1, 1)",
        exit: "cubic-bezier(0.3, 0, 0.8, 0.15)",
        standard: "cubic-bezier(0.2, 0, 0, 1)",
      },
      transitionDuration: {
        280: "280ms",
        320: "320ms",
      },

      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        /* ⚠️ AU ONLY. Kept because 40 call sites on this domain still
           use font-poppins and font-supply. Do not remove without
           sweeping for them first. */
        poppins: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
        supply: ["var(--font-space-grotesk)", "Verdana", "sans-serif"],
        /* Bold condensed caps. The Desk brand headline face, taken from
           the ratified banner. */
        condensed: [
          "var(--font-barlow-condensed)",
          "Arial Narrow",
          "system-ui",
          "sans-serif",
        ],
        /* ⚠️ NOT the .com file's retired Inter aliases. On this domain
           font-supply (36 uses) and font-poppins (4) are LIVE faces on
           the sealed Growth Infrastructure pages, and they are declared
           with their real variables higher up this block. Resolving them
           to Inter here would silently restyle those pages. */
      },

      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.28s cubic-bezier(0.05,0.7,0.1,1) forwards",
        "slide-up": "slideUp 0.3s cubic-bezier(0.05,0.7,0.1,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
