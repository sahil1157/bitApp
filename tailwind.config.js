/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {
    },
  },
  // variants: {
  //   extend: {
  //     display: ['group-focus']
  
  //     },
  //   },
  
  plugins: [require('@shrutibalasa/tailwind-grid-auto-fit')],
}



