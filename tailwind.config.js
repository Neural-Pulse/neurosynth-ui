/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#003366',
        'dark-gray': '#4A4A4A',
        'cyan-blue': '#00BCD4',
        'neon-green': '#39FF14',
        'light-gray': '#E0E0E0',
      },
      boxShadow: {
        'neon': '0 4px 6px -1px rgba(57, 255, 20, 0.1), 0 2px 4px -2px rgba(57, 255, 20, 0.1)',
        'neon-md': '0 6px 12px -2px rgba(57, 255, 20, 0.3)',
        'neon-lg': '0 8px 16px -4px rgba(57, 255, 20, 0.5)',
      },
      borderRadius: {
        'xl': '1rem', // ou qualquer outro valor personalizado
      },
    },
    plugins: [],
  }
}
