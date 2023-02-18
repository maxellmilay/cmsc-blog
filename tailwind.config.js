const { fontFamily } = require('tailwindcss/defaultTheme');
const defaultColors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)', ...fontFamily.sans],
        product: ['Product Sans', ...fontFamily.sans],
      },
    },
    colors: {
      ...defaultColors,
      ...{
        'blog-primary': '#2E2E2E',
        'blog-secondary': '#B5B5B5',
        'blog-gray-1': '#989898',
      },
    },
  },
  plugins: [],
};

