import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: '#e7f0ff',
      100: '#c9dcff',
      200: '#a7c6ff',
      300: '#7fa8ff',
      400: '#5687ff',
      500: '#3182f6',
      600: '#2566d0',
      700: '#1e4fa6',
      800: '#163a7b',
      900: '#0f2752',
    },
    ink: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5f5',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
  },
  fonts: {
    heading: `Inter, ${base.fonts.heading}`,
    body: `Inter, ${base.fonts.body}`,
  },
  styles: {
    global: {
      'html, body': {
        background: '#f2f4f6',
        color: '#0f172a',
        minHeight: '100%',
      },
      '::selection': {
        background: '#3182f6',
        color: '#ffffff',
      },
    },
  },
  radii: {
    lg: '16px',
    xl: '20px',
    full: '9999px',
  },
  shadows: {
    soft: '0 8px 24px rgba(15, 23, 42, 0.08)',
  },
});

export default theme;
