import { Theme } from 'styled-system';

export const theme: Theme = {
  breakpoints: {
    'sm': '576px',
    'md': '768px',
    'lg': '992px',
    'xl': '1200px'
  },
  space: {
    'none': '0',
    'x1': '4px',
    'x2': '8px',
    'x3': '16px',
    'x4': '32px',
    'x5': '64px',
    'x6': '128px',
    'x7': '256px'
  },
  fonts: {
    body: '"Rubik", sans-serif',
    heading: '"Karla", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    'smaller': '12px',
    'small': '14px',
    'medium': '16px',
    'large': '18px',
    'larger': '24px',
    'largest': '32px',
    'heading1': '48px',
    'heading2': '64px',
    'heading3': '72px'
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#FFFFFF',
    background: '#101010',
    primary: '#403F35',
    secondary: '#F2E5BD',
    accent1: '#BF8136',
    accent2: '#A67232',
    accent3: '#8C4227',
  },
  radii: {
    'small': '2px',
    'medium': '4px',
    'circle': '50%'
  }
};

export default theme;
