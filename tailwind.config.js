/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {fontFamily: {
        redhat: 'Red Hat Display, sans-serif',
      },
    },
    colors: {
      'hush-blue': {
        100: '#69bce5',
        200: '#53b2e1',
        300: '#3ea9de',
        400: '#289fda',
        500: '#289fda',
        600: '#248fc4',
        700: '#207fae',
        800: '#1c6f99',
        900: '#185f83',
      },
      'hush-grey': {
        500: '#292929',
        600: '#222222',
        700: '#1B1B1B',
        800: '#151515',
        900: '#0E0E0E',
      },
      'hush-white': '#f8f8f8',
      'black': '#000000',
    },
  },
  plugins: [],
}
