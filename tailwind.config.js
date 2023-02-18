const { fontFamily } = require('tailwindcss/defaultTheme');
const defaultColors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        open: ['var(--font-open-sans)', ...fontFamily.sans],
        product: ['Product Sans', ...fontFamily.sans],
      },
    },
    colors: {
      ...defaultColors,
      ...{
        'blog-primary': '#2E2E2E',
        'blog-secondary': '#B5B5B5',
        'blog-gray-1': '#989898',
        'blog-gray-2': '#7E7E7E',
        'blog-gray-3': '#C3C3C3',
        'blog-red': '#EC4C22',
      },
    },
  },
  plugins: [],
};

