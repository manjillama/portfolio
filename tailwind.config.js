/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif']
      },
      fontWeight: 500,
      fontSize: 14,
      colors: {
        primary: '#0a192f',
        secondary: '#26f5dc'
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0, 0, 0.5, 1)',
        'out-expo': 'cubic-bezier(0, 0, 0.5, 1)'
      },
      scale: {
        101: '1.01'
      }
    }
  },
  plugins: []
};
