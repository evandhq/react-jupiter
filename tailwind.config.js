/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#132A3E',
        secondary: '#0095DB',
        // You can add more custom colors here
      },
      // You can also extend spacing, fonts, etc.
      // spacing: {
      //   'custom-space': 'your-value',
      // }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}

