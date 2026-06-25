/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
      },
      colors: {
        background: 'oklch(0.06 0 0)',
        foreground: 'oklch(0.82 0.18 142)',
        terminal: {
          bg: 'oklch(0.04 0 0)',
          green: 'oklch(0.82 0.22 142)',
          'green-dim': 'oklch(0.55 0.14 142)',
          amber: 'oklch(0.78 0.19 85)',
          border: 'oklch(0.25 0.08 142)',
        },
      },
    },
  },
  plugins: [],
}
