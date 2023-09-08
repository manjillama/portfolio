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
        primary: {
          regular: '#007aff',
          dark: '#0348ad'
        },
        secondary: {
          regular: '#0ccccc',
          dark: '#149f9f'
        }
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0, 0, 0.5, 1)',
        'out-expo': 'cubic-bezier(0, 0, 0.5, 1)'
      },
      scale: {
        101: '1.01'
      },
      boxShadow: {
        custom: '0px 0px 8px 1px rgba(0,0,0,0.1)'
      }
    }
  },
  plugins: []
};
