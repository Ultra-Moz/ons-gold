/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'ProtoMono': ['ProtoMono-Regular', 'sans-serif'],
      'DMSans' : ['DM Sans', 'sans-serif'],
      'Syne' : ['Syne', 'sans-serif']
    },
    extend: {
      colors: {
        orange : 'rgb(255, 81, 1)',
      }
    },
  },
  plugins: [],
}