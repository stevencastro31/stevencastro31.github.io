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
        'illia-plakhuta' : "url('/img/illia-plakhuta-lead-background.jpg')",
      },
      colors: {
        'bunker': {
          '50': '#f7f7f8',
          '100': '#efeef0',
          '200': '#dad8df',
          '300': '#b8b7c2',
          '400': '#928fa1',
          '500': '#757186',
          '600': '#5f5b6e',
          '700': '#4e4b59',
          '800': '#42404c',
          '900': '#3b3842',
          '950': '#1a191d',
        },
        'matisse': {
          '50': '#f0f8ff',
          '100': '#e0f0fe',
          '200': '#bae2fd',
          '300': '#7ecbfb',
          '400': '#39b1f7',
          '500': '#0f96e8',
          '600': '#036eb7',
          '700': '#045fa0',
          '800': '#085184',
          '900': '#0d446d',
          '950': '#082b49',
       },      
      }
    },
  },
  plugins: [require('tailwindcss-animated')],
}

