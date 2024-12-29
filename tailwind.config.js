/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {

      colors: {
        primercolor: "#C25107",
        secondrycolor: "#8F2502",
        terhrycolor: "#FFFFFF",
        lightgray: "#C1C0C0",
        bgblack: "#0B192C",
        lightred: "#FFC0CB",
        gradiantfirst: "#141e30",
        darkgreen: "#023020",
        greenish:"#640D5F",
      },
    },
    screens: {
      'sm': '320px',
      'ml': '420px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  backgroundImage: {
    'bg-pattern': "url('./src/assets/img/background.webp')",
  },
  plugins: [
  ],
}