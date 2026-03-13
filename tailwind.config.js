/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#111827',
        electric: '#0152ff',
        'off-white': '#f6f6f7',
        after5: '#2EFFA1',
      },
      fontFamily: {
        headline: ["'CabinetGrotesk'", "'Inter'", 'sans-serif'],
        mono: ["'JetBrains Mono'", 'monospace'],
      },
    },
  },
  plugins: [],
};
