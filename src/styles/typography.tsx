import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  :root {
    --header-fonts: 'Rubik', sans-serif;
    --body-fonts: 'Karla', sans-serif;
  }

  html {
    color: var(--green);
    font-family: var(--body-fonts);
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: var(--header-fonts);
    margin: 0;
    font-weight: 700;
  }

  a {
    color: var(--brown);
  }
`;

export default Typography;