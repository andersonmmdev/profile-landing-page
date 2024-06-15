/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      lora: ['Lora', 'Montserrat', 'serif'],
    },
    extend: {
      keyframes: {
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'move-y': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-2px)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'flip-y': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        appear: 'appear 2s ease-in-out',
        'move-y': 'move-y 0.1s ease-in-out forwards',
        'slide-down': 'slide-down 0.8s ease-out forwards',
        'slide-in-left': 'slide-in-left 1s ease-out forwards',
        'flip-y': 'flip-y 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
