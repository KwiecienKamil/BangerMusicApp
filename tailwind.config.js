/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#E2B100",
        bgGradient1: "#39ff14",
        bgGradient2: "#0D8617",
        player: "#2272FF",
        navbar: "#1A1A1A",
        onyx: "#454545",
        silver: "#AEB1AE"
      },
      animation: {
        slideup: 'slideup 1s ease-in-out',
      },
      fontFamily: {
        poppins: 'Poppins',
        danc: 'Dancing Script'
      },
      keyframes: {
        slideup: {
          from: { opacity: 0, transform: 'translateY(25%)' },
          to: { opacity: 1, transform: 'none' },
        },
      }
    },
  },
  plugins: [],
}

