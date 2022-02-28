import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle  from '../src/components/00-base/00-defaults/globalStyle';
import theme from '../src/components/00-base/01-theme/theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
