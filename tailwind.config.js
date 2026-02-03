/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f3ff',
        'neon-purple': '#b967ff',
        'cosmic-dark': '#0a0a1a',
        'cosmic-darker': '#050510',
        'cosmic-light': '#1a1a2e',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'typewriter': 'typewriter 4s steps(40) 1s 1 normal both',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
      },
      backgroundImage: {
        'cosmic-gradient': 'radial-gradient(circle at 50% 50%, rgba(11, 10, 26, 0.8) 0%, rgba(5, 5, 16, 0.9) 100%)',
        'nebula': 'radial-gradient(circle at 20% 30%, rgba(185, 103, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0, 243, 255, 0.1) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
}          to: { width: '100%' },
        },
      },
      backgroundImage: {
        'cosmic-gradient': 'radial-gradient(circle at 50% 50%, rgba(11, 10, 26, 0.8) 0%, rgba(5, 5, 16, 0.9) 100%)',
        'nebula': 'radial-gradient(circle at 20% 30%, rgba(185, 103, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0, 243, 255, 0.1) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
}
