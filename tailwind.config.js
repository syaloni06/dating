/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode with class strategy
  content: [
    './index.html','./index.js', // Adjust this to your file structure
    './*.html', // Ensure it scans your HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

