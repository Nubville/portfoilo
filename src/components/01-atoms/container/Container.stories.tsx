import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Container, ContainerProps } from './Container';
import { Box } from '../box';

export default {
  title: 'Atoms/Container',
  component: Container,
} as Meta;

const _Container: Story<ContainerProps> = (args) => (
 <Container {...args}>
    <Box p="x4"bg="secondary">
      This is a test box with all the fixings
    </Box>
  </Container>
);

export const Default = _Container.bind({});
Default.args = {};
