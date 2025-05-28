/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        secondary: '#FF7043', 
        accent: '#E91E63',
      },
    },
  },
  plugins: [],
}