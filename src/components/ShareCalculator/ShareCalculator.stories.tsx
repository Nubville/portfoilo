import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ShareCalculator, ShareCalculatorProps } from './ShareCalculator';

export default {
  title: 'Share Calculator',
  component: ShareCalculator,
} as Meta;

const Template: Story<ShareCalculatorProps> = (args) => <ShareCalculator {...args} />;

export const Default = Template.bind({});