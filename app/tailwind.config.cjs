/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const theme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  daisyui: {
    darkTheme: 'coffee',
    themes: ['garden', 'coffee'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...(theme.fontFamily.sans ?? [])],
      },
    },
  },
};
