import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { ThemeType } from "../../00-base/01-theme/theme.type";
import { darken } from 'polished';

export interface BaseButtonProps {
  asLink?: boolean;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: any;
  iconSide?: "left" | "right";
  onClick?: () => void;
  size?: SizeType;
  theme?: ThemeType;
}

type SizeType = 'small' | 'medium' | 'large' | undefined;

const getSize = (size: SizeType, theme: ThemeType) => {
  switch (size) {
    case 'small':
      return {
        fontSize: `${theme.fontSizes[0]}`,
        lineHeight: 'small',
        padding: `${theme.space.x1} ${theme.space.x2}`
      }
    case 'medium':
      return {
        fontSize: `${theme.fontSizes[2]}`,
        padding: `${theme.space.x1} ${theme.space.x2}`
      }
    case 'large':
      return {
        fontSize: `${theme.fontSizes[3]}`,
        lineHeight: `${theme.lineHeights.heading}`,
        padding: `${theme.space.x2} ${theme.space.x3}`
      }
    default:
    return {
      fontSize: `${theme.fontSizes[2]}`,
      padding: `${theme.space.x1} ${theme.space.x2}`
    }
  }
};

export type ButtonProps = BaseButtonProps & SpaceProps;

const StyledButton = styled.button<ButtonProps>(
  ({ fullWidth }: any) => ({
    width: fullWidth ? '100%': 'auto'
  }),
  ({ disabled, theme }) => ({
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
    border: theme.borders.normal,
    borderColor: `${theme.colors.warmtone1}`,
    borderRadius: theme.radii.none,
    color: theme.colors.warmtone1,
    cursor: disabled ? 'default' : 'pointer',
    display: 'flex',
    fontWeight: theme.fontWeights.medium,
    justifyCenter: 'center',
    lineHeight: theme.lineHeights.body,
    margin: theme.space.none,
    textDecoration: "none",
    transition: 'background-color 0.2s, transform 0.2s ease-in',
    '&:hover': {
      backgroundColor: disabled ? 'white' : darken(0.2, theme.colors.secondary),
    },
  }),
  ({ size, theme }: any) => ({
    ...getSize(size, theme)
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
    <StyledButton as={asLink ? "a" : undefined} className={className} {...props}>
      {children}
    </StyledButton>
  )
}

export default Button;
