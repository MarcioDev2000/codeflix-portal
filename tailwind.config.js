/** @type {import('tailwindcss').Config} */
import tailwindScrollbarHide from 'tailwind-scrollbar-hide';
import vidstackReactTailwind from '@vidstack/react/tailwind.cjs';

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  plugins: [
    tailwindScrollbarHide,
    vidstackReactTailwind,
  ],
};

export default config;
