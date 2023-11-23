import { nextui } from "@nextui-org/theme";
import { withTV } from "tailwind-variants/transformer";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = withTV({
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },
    fontFamily: {
      sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      mono: ["var(--font-geist-mono)"],
      inter: ["var(--font-inter)"],
      poppins: ["var(--font-poppins)"],
      overpass: ["var(--font-overpass)"],
      incognito: ["var(--font-incognito)"],
    },
    animation: {
      spinLinear: "spin calc(var(--speed) * 2) infinite linear",
      slide: "slide var(--speed) ease-in-out infinite alternate",
      marquee: "marquee var(--duration) linear infinite",
    },
    keyframes: {
      spin: {
        "0%": {
          rotate: "0deg",
        },
        "15%, 35%": {
          rotate: "90deg",
        },
        "65%, 85%": {
          rotate: "270deg",
        },
        "100%": {
          rotate: "360deg",
        },
      },

      marquee: {
        from: {
          transform: "translateX(0)",
        },
        to: {
          transform: "translateX(calc(-50% - var(--gap)/2))",
        },
      },

      slide: {
        to: {
          transform: "translate(calc(100cqw - 100%), 0)",
        },
      },

      meteor: {
        "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
        "70%": { opacity: "1" },
        "100%": {
          transform: "rotate(215deg) translateX(-500px)",
          opacity: "0",
        },
      },
    },
  },
  plugins: [nextui()],
}) satisfies Config;

export default config;
