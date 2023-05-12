/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'cod-gray': {
          '50': '#f7f7f7',
          '100': '#e3e3e3',
          '200': '#c8c8c8',
          '300': '#a4a4a4',
          '400': '#818181',
          '500': '#666666',
          '600': '#515151',
          '700': '#434343',
          '800': '#383838',
          '900': '#313131',
          '950': '#1e1e1e',
        },
        'mirage': {
          '50': '#f5f8f8',
          '100': '#dde8ea',
          '200': '#bad0d5',
          '300': '#90afb8',
          '400': '#698c98',
          '500': '#4f717d',
          '600': '#3d5964',
          '700': '#344851',
          '800': '#2d3b42',
          '900': '#283439',
          '950': '#1b262c',
        },
      },
    },
  },
  plugins: [],
}
