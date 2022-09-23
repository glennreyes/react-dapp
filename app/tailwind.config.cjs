/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const theme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...(theme.fontFamily.sans ?? [])],
      },
    },
  },
};
