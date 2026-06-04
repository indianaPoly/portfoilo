import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        paper: {
          50: { value: '#ffffff' },
          100: { value: '#ffffff' },
          200: { value: '#f3f5f8' },
          300: { value: '#eaedf2' },
        },
        ink: {
          900: { value: '#202124' },
          800: { value: '#2f3338' },
          700: { value: '#4a5058' },
          600: { value: '#6b7280' },
          500: { value: '#7a828d' },
          400: { value: '#9aa3af' },
          300: { value: '#c5cbd3' },
        },
        brand: {
          50: { value: '#eaf8ef' },
          100: { value: '#d5f0de' },
          500: { value: '#2f9e62' },
          700: { value: '#157347' },
          800: { value: '#0f5f3a' },
        },
        line: {
          100: { value: '#e9edf2' },
        },
      },
      fonts: {
        heading: {
          value:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
        },
        body: {
          value:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
        },
      },
      radii: {
        lg: { value: '14px' },
        xl: { value: '18px' },
      },
    },
  },
  globalCss: {
    '*': {
      boxSizing: 'border-box',
    },
    'html, body': {
      maxWidth: '100vw',
      backgroundColor: '#ffffff',
      color: '#202124',
      margin: 0,
      padding: 0,
      minHeight: '100vh',
    },
    body: {
      overflowX: 'hidden',
      wordBreak: 'keep-all',
      overflowWrap: 'break-word',
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
    'a:focus-visible, button:focus-visible': {
      outline: '2px solid #157347',
      outlineOffset: '3px',
    },
    main: {
      display: 'block',
    },
    p: {
      margin: 0,
    },
    ul: {
      padding: 0,
      margin: 0,
    },
    li: {
      listStyle: 'none',
    },
    '::selection': {
      background: 'rgba(21, 115, 71, 0.16)',
      color: '#202124',
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
