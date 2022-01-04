module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Opensans: ["Open Sans", "cursive"],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'leaf': {
          DEFAULT: '#D8EBDF',
          '50': '#FFFFFF',
          '100': '#e7fdef',
          '200': '#b8e1c8',
          '300': '#b8e1c8',
          '400': '#b8e1c8',
          '500': '#b8e1c8',
          '600': '#b8e1c8',
          '700': '#5c8e7f',
          '800': '#294147',
          '900': '#1d2e31'
        },
      },
    },
  },
  plugins: [],
}