import React from 'react';
import GlobalStyle  from '../src/styles/globalStyle';
import Typography from '../src/styles/typography';

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Typography />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}