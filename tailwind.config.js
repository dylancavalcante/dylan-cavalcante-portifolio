/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
         bg: "#0D0F0E",
         card: "#111413",
         border: "#1E2421",
         text: "#E2E8E4",
         muted: "#7A9188",
         faint: "#5F6D66",
         green: "#4ADE80",
      },

      fontFamily: {
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "monospace",
        ],

        serif: [
          "Playfair Display",
          "Georgia",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};