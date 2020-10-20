import { createGlobalStyle } from 'styled-components';
import { color } from './variables';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: ${color.white};
    --black: ${color.black};
    --primary: ${color.primary};
    --secondary: ${color.secondary};
    --comp1: ${color.comp1};
    --comp2: ${color.comp2};
    --comp3: ${color.comp3};
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  
  body {
    background-color: var(--tan);
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
