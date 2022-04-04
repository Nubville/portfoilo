import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { ThemeType } from '../../00-base/01-theme/theme.type';

export interface BaseTextProps {
  theme?: ThemeType;
}

export type TextProps = BaseTextProps &
  SpaceProps &
  React.ComponentPropsWithRef<'p'>;

const StyledText: React.FC<TextProps> = styled.p(
  ({ theme }) => ({
    color: theme.colors.primary,
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.large,
    lineHeight: theme.lineHeights.body,
    marginTop: 0,
  }),
  space
);

export const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
