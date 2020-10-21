import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle  from '../src/styles/globalStyle';
import Typography from '../src/styles/typography';
import ThemeDefault from '../src/styles/themeDefault';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={ThemeDefault}>
      <GlobalStyle />
      <Typography />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}