export const  Colors = {
    primary: '#49bece',
    secondary: '#727675',
    accent: '#c2496a',
    primary_dark: '#2e6171',
    primary_light: '#556f7a',
    menu: "#232a2f",
}

// example theme.js

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