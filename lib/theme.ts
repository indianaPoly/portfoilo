import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    paper: {
      50: '#ffffff',
      100: '#ffffff',
      200: '#f3f5f8',
      300: '#eaedf2',
    },
    ink: {
      900: '#202124',
      800: '#2f3338',
      700: '#4a5058',
      600: '#6b7280',
      500: '#7a828d',
      400: '#9aa3af',
      300: '#c5cbd3',
    },
    brand: {
      50: '#eaf8ef',
      100: '#d5f0de',
      500: '#2f9e62',
      700: '#157347',
      800: '#0f5f3a',
    },
    line: {
      100: '#e9edf2',
    },
  },
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif, ${base.fonts.heading}`,
    body: `-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif, ${base.fonts.body}`,
  },
  styles: {
    global: {
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
  },
  radii: {
    lg: '14px',
    xl: '18px',
  },
});

export default theme;
