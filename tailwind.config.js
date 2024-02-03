const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      prompt: ['"Prompt"', ...defaultTheme.fontFamily.sans],
      lato: ['"Lato"', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      backgroundImage: {
        'annie-spratt' : "url('/img/annie-spratt-6a3nqQ1YwBw-unsplash.jpg')",
        'illia-plakhuta' : "url('/img/illia-plakhuta-n8St7X9HgLA-unsplash.jpg')",
        'roman-skrypnyk' : "url('/img/roman-skrypnyk-9dWT86h8dgo-unsplash.jpg')",
      }
    },
  },
  plugins: [],
}

