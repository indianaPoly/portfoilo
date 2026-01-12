import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: '#e6e9ff',
      100: '#c7caf5',
      200: '#a6a9e9',
      300: '#8688dd',
      400: '#6d6fd2',
      500: '#5456b9',
      600: '#423f91',
      700: '#2f2b69',
      800: '#1c1842',
      900: '#0b091c',
    },
  },
  fonts: {
    heading: `Inter, ${base.fonts.heading}`,
    body: `Inter, ${base.fonts.body}`,
  },
  styles: {
    global: {
      'html, body': {
        background:
          'radial-gradient(circle at 18% 18%, rgba(76, 68, 255, 0.09), transparent 34%), radial-gradient(circle at 78% 4%, rgba(74, 210, 203, 0.12), transparent 26%), #0d1018',
        color: '#e8ecf4',
        minHeight: '100%'
      },
      '::selection': {
        background: 'rgba(124,108,255,0.28)',
      },
    },
  },
  radii: {
    lg: '16px',
    xl: '20px',
  },
});

export default theme;
