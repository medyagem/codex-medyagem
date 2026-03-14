import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        night: '#0A0A0F'
      }
    }
  },
  plugins: []
};

export default config;
