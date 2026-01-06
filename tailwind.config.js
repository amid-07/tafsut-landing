/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate-bg': '#2F3A4A',     // Fond
        'slate-surface': '#59647A', // Cartes
        'brand-primary': '#EAE6DA', // Texte et Boutons
      },
    },
  },
  plugins: [],
}