/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        grey: {
          100: "#ffffff1a", // rgb(255, 255, 255, 0.1)
          300: "#eff1f6bf", // rbg(239, 241, 246, 0.16)
          700: "#2d2d2d", // rgb(40, 40, 40)
          800: "#1a1a1a", // rgb(26, 26, 26)
          base: "#2d2d2d",
        },
      },
    },
  },
};
