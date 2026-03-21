/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#0B1220", // Deep Navy
          light: "#F8FAFC",
        },
        primary: {
          DEFAULT: "#14B8A6", // Teal
          light: "#2DD4BF",
          dark: "#0F766E",
        },
        secondary: {
          DEFAULT: "#3B82F6", // Blue
          light: "#60A5FA",
          dark: "#1D4ED8",
        },
        slate: {
          900: "#0F172A",
          800: "#1E293B",
          400: "#94A3B8",
          500: "#64748B",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'blob': 'blob 20s ease-in-out infinite',
        'blob-delay': 'blob 25s ease-in-out 5s infinite',
        'blob-slow': 'blob 30s ease-in-out 10s infinite',
        'gradient-shift': 'gradientShift 15s ease infinite',
        'particle': 'particleFloat 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(30px, -50px) scale(1.05)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.95)' },
          '75%': { transform: 'translate(20px, 40px) scale(1.02)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        particleFloat: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '50%': { transform: 'translateY(-120px) translateX(20px)' },
        },
      },
      backgroundSize: {
        '300': '300% 300%',
      },
    },
  },
  plugins: [],
}
