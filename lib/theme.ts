import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    paper: {
      50: '#f4ead6',
      100: '#eedfc3',
      200: '#e3cfaa',
    },
    ink: {
      900: '#1a1712',
      800: '#2a251d',
      700: '#3f382c',
      600: '#5b5243',
    },
  },
  fonts: {
    heading: `Georgia, 'Times New Roman', Times, ${base.fonts.heading}`,
    body: `Georgia, 'Times New Roman', Times, ${base.fonts.body}`,
  },
  styles: {
    global: {
      '*': {
        boxSizing: 'border-box',
      },
      'html, body': {
        maxWidth: '100vw',
        backgroundColor: '#f4ead6',
        backgroundImage:
          'radial-gradient(circle at 20% 10%, rgba(90, 70, 30, 0.035), transparent 38%), radial-gradient(circle at 80% 40%, rgba(90, 70, 30, 0.02), transparent 50%)',
        color: '#1a1712',
        margin: 0,
        padding: 0,
        minHeight: '100vh',
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      'a:focus-visible, button:focus-visible': {
        outline: '2px solid rgba(26, 23, 18, 0.75)',
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
        background: 'rgba(26, 23, 18, 0.12)',
        color: '#1a1712',
      },
    },
  },
  radii: {
    lg: '0px',
    xl: '0px',
  },
});

export default theme;
