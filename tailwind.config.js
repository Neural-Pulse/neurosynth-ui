module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'neuralpulse-dark': '#1c2023',
        'neuralpulse-green': '#16a085',
        'neuralpulse-light-green': '#2eb398',
        'neuralpulse-gray': '#d3d7cf',
        'neuralpulse-accent': '#204a87',
      },
      boxShadow: {
        'soft-green-glow': '0 4px 6px -1px rgba(22, 160, 133, 0.1), 0 2px 4px -2px rgba(22, 160, 133, 0.1)',
        'green-glow-md': '0 6px 12px -2px rgba(22, 160, 133, 0.3)',
        'green-glow-lg': '0 8px 16px -4px rgba(22, 160, 133, 0.5)',
        'success-glow': '0 0 15px rgba(22, 160, 133, 0.5), 0 0 25px rgba(22, 160, 133, 0.3)',
        'warning-glow': '0 0 15px rgba(255, 165, 0, 0.5), 0 0 25px rgba(255, 165, 0, 0.3)',
        'error-glow': '0 0 15px rgba(255, 0, 0, 0.5), 0 0 25px rgba(255, 0, 0, 0.3)',
      },
      borderRadius: {
        'none': '0',
        'xs': '0.125rem',
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '1rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial-at-tr': 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        '50': '50%',
        '100': '100%',
        '200': '200%',
      },
    },
  },
  plugins: [],
};
