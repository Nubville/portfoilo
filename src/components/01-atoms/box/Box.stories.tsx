import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, BoxProps } from '../../01-atoms/box/Box';

export default {
  title: 'Atoms/Box',
  component: Box
} as Meta;

const _Box: Story<BoxProps> = (args) => <Box {...args}>This is a test box with all the fixings</Box>;

export const Default = _Box.bind({});
Default.args = {
  backgroundColor: 'secondary',
  p: 'x4'
};
