/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#B19777',
        secondary: '#151515',
        'secondary-light': '#181818',
        text: '#888888',
        accent: '#FFFFFF',
        'accent-green': '#BED86C',
        'dark-border': '#393939',
        'dropdown-bg': '#323246',
        'dropdown-border': '#3E352C',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Arial', 'sans-serif'],
      },
      letterSpacing: {
        'heading': '12px',
        'accent': '10px',
        'nav': '1.2px',
      },
    },
  },
  plugins: [],
};
