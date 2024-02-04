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
        'illia-plakhuta' : "url('/img/illia-plakhuta-n8St7X9HgLA-unsplashs2.jpg')",
      }
    },
  },
  plugins: [require('tailwindcss-animated')],
}

