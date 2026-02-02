
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'raiden-blue': '#00A3FF',
        'cta-orange': '#FF3C00',
      },
    },
  },
  plugins: [],
}
