import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Heading, HeadingProps } from '../../01-atoms/headings/Heading';

export default {
  title: 'Molecules/Card',
  component: Card
} as Meta;

const _Heading: Story<HeadingProps> = (args) => <Heading {...args}>Almost before we knew it, we had left the ground.</Heading>;

export const Default = _Heading.bind({});
Default.args = {
  size: 1
};
