import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        mist: '#eff7f1',
        sage: '#b9d8c2',
        stone: '#d8d2c8',
        cloud: '#e5e7eb',
        skysoft: '#c8dff2',
        ink: '#1f2937'
      },
      boxShadow: {
        card: '0 8px 24px rgba(31, 41, 55, 0.08)'
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.2, 0.8, 0.2, 1)'
      }
    }
  },
  plugins: []
};

export default config;
