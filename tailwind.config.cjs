import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';
import debugScreen from 'tailwindcss-debug-screens';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'gradient-br': 'gradient-br 12s ease infinite',
      },
      keyframes: {
        'gradient-br': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'top left',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'bottom right',
          },
        },
      },
      backgroundImage: (_) => ({
        'gradient-to-hero': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      }),
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
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.125rem' }],
        sm: ['0.875rem', { lineHeight: '1.3125rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.6875rem' }],
        xl: ['1.25rem', { lineHeight: '1.875rem' }],
        '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.8125rem' }],
        '4xl': ['2.25rem', { lineHeight: '3.375rem' }],
        '5xl': ['3rem', { lineHeight: '4.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '5.625rem' }],
        '7xl': ['4.5rem', { lineHeight: '6.75rem' }],
        '8xl': ['6rem', { lineHeight: '9rem' }],
        '9xl': ['8rem', { lineHeight: '12rem' }],
      },
    },
  },
  plugins: [typographyPlugin, debugScreen],
  darkMode: 'class',
};
