import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        myellow: {
          100: '#FCFFC7',
          300: '#E9FF48',
          500: '#BCDD05',
          600: '#93B100',
          700: '#6E8605',
          900: '#48590E',
          950: '#263201',
        },
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)'],
        button: ['var(--aw-font-button, ui-sans-serif)'],
        fira: ['Fira Mono', 'monospace'],
        outfit: ['Outfit', 'ui-sans-serif'],
      },
    },
  },
  plugins: [typographyPlugin],
  darkMode: 'class',
};
