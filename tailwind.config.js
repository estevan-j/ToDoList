/** @type {import('tailwindcss').Config} */
export default {
  content: [// Tipos de archivos a aplicar Tailwind CSS.
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink01: '#F0DBFA',
        pink02: '#F8F2FE',
        gray01: '#271834',
        black01: '#2B2731',
        green01: '#80C288',
        green02: '#E5FDE5',
        violet01: '#9D88F9',
        blue01: '#637AFE',
        yellow01: '#F3C458',
        white01: '#FFFFFF',
      }
    },
  },
  plugins: [],
}

