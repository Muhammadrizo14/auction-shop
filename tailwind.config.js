/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: [
        '"OpenSans var", sans-serif',
      ],
    },
    extend: {
      container: {
        center: true,
        padding: '1rem'
      },
      colors: {
        'brand-lightgrey': '#F2F2F2',
        'brand-grey': '#C5BDBD',
        'brand-black': '#1F1F1F',
        'brand-orange': '#EB7D26',
        'brand-blue': '#017CC4',
        'brand-green': '#519339',
        'brand-lightgreen': '#01C495',
        'brand-pink': '#01C495',
        'brand-violet': '#5701C4',
      }
    },
  },
  plugins: [],
}

