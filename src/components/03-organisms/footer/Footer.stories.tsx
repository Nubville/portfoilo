import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Footer, FooterProps } from './Footer';

export default {
  title: 'Organisms/Footer',
  component: Footer,
} as Meta;

const _Footer: Story<FooterProps> = (args) => <Footer {...args}></Footer>;

export const Default = _Footer.bind({});
Default.args = {
  mb: 'x2',
};
