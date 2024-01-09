/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "White": "hsl(0, 0%, 100%)",
        "Grey": "hsl(0, 0%, 50%)",
        "Black": "hsl(0, 0%, 7%)",
        "yellow":"hsl(47, 88%, 63%)"
      }
    },
  },
  plugins: [],
}

