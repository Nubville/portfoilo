import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Buttons',
  component: Button
} as Meta;

const _Button: Story<ButtonProps> = (args) => <Button {...args}>Create Button</Button>;

export const Default = _Button.bind({});
Default.args = {};
