import { createGlobalStyle } from 'styled-components';
import "normalize.css";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: ${props => props.theme.color.white};
    --black: ${props => props.theme.color.black};
    --primary: ${props => props.theme.color.primary};
    --secondary: ${props => props.theme.color.secondary};
    --comp1: ${props => props.theme.color.comp1};
    --comp2: ${props => props.theme.color.comp2};
    --comp3: ${props => props.theme.color.comp3};
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  
  body {
    background-color: ${props => props.theme.color.secondary};
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
