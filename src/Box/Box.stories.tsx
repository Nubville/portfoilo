import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, BoxProps } from './Box';

export default {
  title: 'Components/Box',
  component: Box
} as Meta;

export const _Box = () => <Box p="x3" bg="primary" color="secondary">Hello World</Box>;
