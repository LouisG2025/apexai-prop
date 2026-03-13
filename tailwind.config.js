/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0a0f1e',
        'card-dark': '#111827',
        electric: '#0152ff',
        after5: '#2EFFA1',
      },
      fontFamily: {
        headline: ["'Cabinet Grotesk'", 'sans-serif'],
        body: ["'DM Sans'", 'sans-serif'],
        mono: ["'JetBrains Mono'", 'monospace'],
      },
    },
  },
  plugins: [],
};
