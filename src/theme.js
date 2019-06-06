import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#49bece',
      dark: '#2e6171',
      light: '#556f7a'
    },
    secondary: {
      main: '#49bece',
    },
    error: {
      main: red.A400,
    },
    accent: {
      main: '#c2496a',
    },
    background: {
      default: '#fff',
    },
    text: {
      primary:'#49bece',
      secondary: '#727675'
    } 
  },
  typography: {
    fontFamily: [
      'system-ui',
      'sans-serif'
    ].join(','),
    h1: {
      fontFamily: 'Sacramento, cursive',
      fontWeight: 'bold'
    },
    subtitle1: {
      fontFamily: 'Oxygen Mono, monospace',
      fontWeight: 'bold',
      fontSize: '2rem'
    }
  }
});

export default theme;



export const  Colors = {
    primary: '#49bece',
    secondary: '#727675',
    accent: '#c2496a',
    primary_dark: '#2e6171',
    primary_light: '#556f7a',
    menu: "#232a2f",
}

// example theme.js
/*
export default {
    fontSizes: [
        0.75, 1, 2, 3, 4, 5, 6
    ],
    colors: {
        ...Colors
    },
    space: [
      0, 4, 8, 16, 32, 64, 128, 256
    ],
    fonts: {
      sans: 'system-ui, sans-serif',
      mono: 'Oxygen Mono, monospace',
      cursive: 'Sacramento, cursive'
    },
    shadows: {
      small: '0 0 4px rgba(0, 0, 0, .125)',
      large: '0 0 24px rgba(0, 0, 0, .125)'
    }
  }
  */