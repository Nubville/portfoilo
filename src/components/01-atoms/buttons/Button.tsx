import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { ThemeType } from '../../00-base/01-theme/theme.type';
import { darken } from 'polished';

export interface BaseButtonProps {
  asLink?: boolean;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: string;
  iconSide?: 'left' | 'right';
  onClick?: () => void;
  size?: SizeType;
  theme?: ThemeType;
}

type SizeType = 'small' | 'medium' | 'large' | undefined;

const getSize = (size: SizeType, theme: ThemeType) => {
  switch (size) {
    case 'small':
      return {
        fontSize: `${theme.fontSizes[0]}px`,
        lineHeight: 'small',
        padding: `${theme.space.x1}px ${theme.space.x2}px`,
      };
    case 'medium':
      return {
        fontSize: `${theme.fontSizes[2]}px`,
        padding: `${theme.space.x1}px ${theme.space.x2}px`,
      };
    case 'large':
      return {
        fontSize: `${theme.fontSizes[3]}px`,
        lineHeight: `${theme.lineHeights.heading}`,
        padding: `${theme.space.x2}px ${theme.space.x3}px`,
      };
    default:
      return {
        fontSize: `${theme.fontSizes[2]}px`,
        padding: `${theme.space.x1}px ${theme.space.x2}px`,
      };
  }
};

export type ButtonProps = BaseButtonProps & SpaceProps;

const StyledButton = styled.button<ButtonProps>(
  ({ fullWidth }: any) => ({
    width: fullWidth ? '100%' : 'auto',
  }),
  ({ disabled, theme }) => ({
    alignItems: 'center',
    backgroundColor: theme.colors.accent3,
    border: theme.borders.normal,
    borderColor: `${theme.colors.accent3}`,
    borderRadius: theme.radii.medium,
    color: theme.colors.primary,
    cursor: disabled ? 'default' : 'pointer',
    display: 'flex',
    fontWeight: theme.fontWeights.medium,
    justifyContent: 'center',
    lineHeight: theme.lineHeights.body,
    margin: theme.space.none,
    textDecoration: 'none',
    transition: 'background-color 0.2s, transform 0.2s ease-in',
    '&:hover': {
      backgroundColor: disabled ? 'white' : darken(0.2, theme.colors.primary),
    },
  }),
  ({ size, theme }: any) => ({
    ...getSize(size, theme),
  }),
  space
);

export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  iconSide,
  className,
  asLink,
  ...props
}) => {
  return (
    <StyledButton
      as={asLink ? 'a' : undefined}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
