/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // ← MUSSTE 'class' sein!
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
