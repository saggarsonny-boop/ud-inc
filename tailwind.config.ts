import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      colors: {
        navy: '#1e2d3d',
        gold: '#c8960a',
        cream: '#fafaf8',
        smoke: '#f2f1ee',
      },
    },
  },
  plugins: [],
}

export default config
