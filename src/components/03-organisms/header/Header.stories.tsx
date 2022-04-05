import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Header, HeaderProps } from './Header';

export default {
  title: 'Organisms/Header',
  component: Header,
} as Meta;

const _Header: Story<HeaderProps> = (args) => <Header {...args}></Header>;

export const Default = _Header.bind({});
Default.args = {
  mb: 'x2',
};
