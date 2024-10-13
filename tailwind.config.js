/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          kaushan: ['Kaushan Script', 'cursive'],
          ink: ['Inknut Antiqua', 'serif'],
        },
        colors: {
          'custom-brown': '#5C2626',
          'custom-orange': '#F0E4D1',
          'custom-blue': '#283148' ,
  
        },
        fontSize: {
          '10xl': '10rem',
          '11xl': '12rem',
          '12xl': '14rem',
        },
      },
    },
    plugins: [],
  }