import { createGlobalStyle } from 'styled-components';
//import "normalize.css";
import theme from '../01-theme/theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.body};
    font-size: 1.6rem;
  }

  image {
    height: auto;
    max-width: 100%;
    width: 100%;
  }

  a {
    color: ${theme.colors.cooltone1};
    text-decoration: none;

    &:hover {
      color: ${theme.colors.cooltone3};
    }
  }
`;

export default GlobalStyle;
