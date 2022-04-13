module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Opensans: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        'inner-lg': 'inset 0 3px 6px -0.1px rgb(0 0 0 / 58%)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'leaf': {
          DEFAULT: '#D8EBDF',
          '50': '#FFFFFF',
          '100': '#ddfdee',
          '200': '#b8e1c8',
          '300': '#b8e1c8',
          '400': '#b8e1c8',
          '500': '#b8e1c8',
          '600': '#b8e1c8',
          '700': '#5c8e7f',
          '800': '#294147',
          '900': '#1d2e31'
        },
        'yellow-custom': {
          DEFAULT: '#D8EBDF',
          '400': '#eecb68',
        },
      },
    },
  },
  plugins: [],
}