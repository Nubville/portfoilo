import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, BoxProps } from '../../01-atoms/box/Box';
import theme from './theme';
import { ColorOptions } from './theme.type';

export default {
  title: 'Theme/Colors',
} as Meta;

const ColorBoxGrid = styled.div`
  display: grid;
  grid-gap: ${theme.space.x3};
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const ColorSwatchBox = styled(Box)``;

const FlexedBox = styled(Box)`
  background-color: ${theme.colors.secondary};
  flex: 1 1 25%;
  margin-bottom: ${theme.space.x3};
  text-align: center;
`;

const StyledSpan = styled.span`
  color: ${theme.colors.cooltone1};
`;

const _Colors: Story<BoxProps> = (args) => {
  let colorsArray = Object.keys(theme.colors) as ColorOptions[];
  return (
    <ColorBoxGrid>
      {colorsArray.map((key) => {
        const bkgrdColorStyle = {
          backgroundColor: theme.colors[key],
        };
        return (
          <FlexedBox key={key} p={'x2'}>
            <ColorSwatchBox
              style={bkgrdColorStyle}
              p={'x4'}
              mb={'x3'}
            ></ColorSwatchBox>
            <StyledSpan>Variable:</StyledSpan> <span>{key}</span>
          </FlexedBox>
        );
      })}
    </ColorBoxGrid>
  );
};

export const Default = _Colors.bind({});
Default.args = {};
