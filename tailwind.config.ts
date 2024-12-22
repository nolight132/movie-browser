import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          gray: {
            50: '#f9f9f9',
            100: '#f2f2f2',
            200: '#e6e6e6',
            300: '#cccccc',
            400: '#b3b3b3',
            500: '#999999',
            600: '#666666',
            700: '#4d4d4d',
            800: '#333333',
            900: '#1a1a1a',
          },
          white: '#ffffff',
          black: '#000000',
        },
      },
      aspectRatio: {
        '3/2': '3 / 2',
      },
    },
  },
  plugins: [],
} satisfies Config;
