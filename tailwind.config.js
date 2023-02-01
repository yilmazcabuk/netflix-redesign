/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      textShadow: {
        md: '2px 2px 4px rgb(0 0 0 / 45%);',
      },
      backgroundImage: {
        'gradient-to-b':
          'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
};
