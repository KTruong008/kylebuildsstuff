const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        18: '4.5rem',
        112: '28rem',
        120: '30rem'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
