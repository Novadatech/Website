import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050d1a",
          900: "#0a1e3f",
          800: "#0f2d5e",
          700: "#163d7a",
          600: "#1e4f9a",
        },
        gold: {
          400: "#fbdf00",
          500: "#c9a23f",
          600: "#b8922e",
        },
        accent: {
          blue: "#155eef",
          cyan: "#06b6d4",
        },
        // Ember palette — warm vermilion red for bold dark-bg landing pages.
        // 500 is the brand anchor used on /linkedin-growth.
        ember: {
          400: "#FF7A55",
          500: "#FF5A30",
          600: "#E84620",
          700: "#C73815",
        },
        // Surface palette — near-black warm background (slightly warmer than #000).
        surface: {
          950: "#0A0A0A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
        // Poppins light — home page Morningside-style design test.
        poppins: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
        // Space Grotesk — PP Supply Sans stand-in (labels/buttons on home).
        supply: ["var(--font-space-grotesk)", "Verdana", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
