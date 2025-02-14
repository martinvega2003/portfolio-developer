/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        secondary: "#374151",
        accent: "#0066b2",
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
