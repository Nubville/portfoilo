import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {

  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  variant: 'default'
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  variant: 'primary'
};

export const Success = Template.bind({});
Success.args = {
  label: 'Button',
  variant: 'success'
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  variant: 'danger'
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Button',
  variant: 'warning'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Button',
};