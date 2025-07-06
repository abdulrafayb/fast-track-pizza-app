/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // mono: "Roboto Mono, monospace",
      sans: "Roboto Mono, monospace",
    },
    extend: {},
  },
  plugins: [],
};

/* if we want to use the above font everywhere and not at specified places like giving class name of font-mono we just put it in sans to override the sans font that tailwind automatically injects into our HTML */
