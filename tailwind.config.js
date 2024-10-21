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
        fontFamily: {
          'jersey': ['"Jersey 15 Charted"', 'sans-serif'],
        },
        keyframes: {
          'border-gradient': {
            '0%, 100%': { borderColor: 'transparent', background: 'linear-gradient(90deg, #d97706, #b45309, #92400e)' },
            '50%': { borderColor: 'transparent', background: 'linear-gradient(270deg, #92400e, #b45309, #d97706)' },
          },
        },
        animation: {
          'border-gradient': 'border-gradient 5s ease infinite',
        },
        fontSize: {
            'mdl': '1.35rem', 
          },
      },
    },
    plugins: [],
  }