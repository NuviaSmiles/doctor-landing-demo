import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00346D',
          light: '#004a8f',
          dark: '#002347',
        },
        secondary: {
          DEFAULT: '#0177FF',
          light: '#3399ff',
          dark: '#0055cc',
        },
        tertiary: {
          DEFAULT: '#00A2FF',
          light: '#33b3ff',
          dark: '#007acc',
        },
        white: '#FFFFFF',
        text: {
          DEFAULT: '#071941',
          light: '#1a2b5c',
          dark: '#040d2a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
