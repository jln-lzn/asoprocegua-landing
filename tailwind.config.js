/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-archivo)'],
      },
      colors: {
        'light-bg': '#ffffff',
        'light-bg-2': '#f2f2f2',
        'light-bg-3': 'f8f8f8',
        'disabled-text': '#525252',
        'green-text': '#146841',
        'green-text-2': '#c1ed7a',
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(360px, 1fr))',
        card: 'repeat(auto-fit, minmax(560px, 1fr))',
      },
      screens: {
        sf: '550px',
      },
    },
  },
  plugins: [],
}
