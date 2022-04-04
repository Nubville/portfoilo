import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Text, TextProps } from '../../01-atoms/text/Text';

export default {
  title: 'Atoms/Text',
  component: Text,
} as Meta;

const _Text: Story<TextProps> = (args) => (
  <Text {...args}>Almost before we knew it, we had left the ground.</Text>
);

export const Default = _Text.bind({});
Default.args = {
  mb: 'x2',
};
