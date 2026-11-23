/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        anatomy: {
          bg: '#0b0f19',
          panel: '#111827',
          border: '#1f2937',
          tissue: '#f472b6',
          tongue: '#fb7185',
          palate: '#fda4af',
          lips: '#e11d48',
          airflow: '#38bdf8',
          voiced: '#34d399',
          compare: '#fbbf24'
        }
      },
      animation: {
        'pulse-fast': 'pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
