import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, BoxProps } from '../../01-atoms/box/Box';
import { theme } from './theme';

export default {
  title: 'Theme/Typography',
} as Meta;

const Heading1 = styled('h1')`
  font-size: ${theme.fontSizes.heading1};
  line-height: ${theme.lineHeights.heading};
`;

const Heading2 = styled('h2')`
  font-size: ${theme.fontSizes.heading2};
  line-height: ${theme.lineHeights.heading};
`;

const Heading3 = styled('h3')`
  font-size: ${theme.fontSizes.heading3};
  line-height: ${theme.lineHeights.heading};
`;

const Heading4 = styled('h4')`
  font-size: ${theme.fontSizes.largest};
  line-height: ${theme.lineHeights.heading};
`;

const Heading5 = styled('h5')`
  font-size: ${theme.fontSizes.larger};
  line-height: ${theme.lineHeights.heading};
`;

const Heading6 = styled('h6')`
  font-size: ${theme.fontSizes.large};
  line-height: ${theme.lineHeights.heading};
`;

const _Type: Story<BoxProps> = (args) => (
  <div>
    <Heading1>Almost before we knew it, we had left the ground.</Heading1>
    <Heading2>Almost before we knew it, we had left the ground.</Heading2>
    <Heading3>Almost before we knew it, we had left the ground.</Heading3>
    <Heading4>Almost before we knew it, we had left the ground.</Heading4>
    <Heading5>Almost before we knew it, we had left the ground.</Heading5>
    <Heading6>Almost before we knew it, we had left the ground.</Heading6>
  </div>
);

export const Default = _Type.bind({});
Default.args = {};
