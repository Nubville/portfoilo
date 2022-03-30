import { createGlobalStyle } from 'styled-components';
import { setSaturation } from 'polished';
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
    padding: 0;
    margin: 0;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.body};
    font-size: 1.6rem;

    ::after {
      background-image: linear-gradient(0deg, ${
        theme.colors.layoutHorizontal
      } 3.70%,
        ${theme.colors.white} 3.70%,
        ${theme.colors.white} 50%,
        ${theme.colors.layoutHorizontal} 50%,
        ${theme.colors.layoutHorizontal} 53.70%,
        ${theme.colors.white} 53.70%,
        ${theme.colors.white} 100%);
      background-size: 54.00px 54.00px;
      background-color: ${theme.colors.white};
      content: '';
      opacity: 0.4;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
    }
  }

  image {
    height: auto;
    max-width: 100%;
    width: 100%;
  }

  a {
    color: ${theme.colors.accent1};
    text-decoration: none;
    transition: 0.3s color ease-in-out;

    &:hover {
      color: ${setSaturation('0.75', theme.colors.accent1)};
    }
  }
`;

export default GlobalStyle;
