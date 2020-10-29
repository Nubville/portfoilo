import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import theme from '../theme';
import { ThemeType } from "../theme.type";

export interface ButtonProps {
  asLink?: boolean;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: any;
  iconSide?: "left" | "right";
  onClick?: () => void;
  outline?: boolean;
  size?: SizeType;
  theme?: ThemeType;
}

type SizeType = 'small' | 'medium' | 'large' | undefined;

const getSize = (size: SizeType, theme: ThemeType) => {
  switch (size) {
    case 'small':
      return {
        fontSize: `${theme.fontSizes.small}`,
        lineHeight: 'small',
        padding: `${theme.space.x1} ${theme.space.x2}`
      }
    case 'medium':
      return {
        fontSize: `${theme.fontSizes.medium}`,
        padding: `${theme.space.x1} ${theme.space.x2}`
      }
    case 'large':
      return {
        fontSize: `${theme.fontSizes.large}`,
        lineHeight: `${theme.lineHeights.heading}`,
        padding: `${theme.space.x2} ${theme.space.x3}`
      }
    default:
    return {
      fontSize: `${theme.fontSizes.medium}`,
      padding: `${theme.space.x1} ${theme.space.x2}`
    }
  }
};

const ButtonWrapper = styled.button<any>(
  ({ fullWidth }: any) => ({
    width: fullWidth ? '100%': 'auto'
  }),
  ({ disabled, theme }) => ({

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
    <ButtonWrapper as={asLink ? "a" : undefined} className={className} {...props}>
      {/* {icon && iconSide === "left" && <Icon size={`${smallTextCompressed}em`} mr="half" icon={icon} />} */}
      {children}
      {/* {icon && iconSide === "right" && <Icon size={`${smallTextCompressed}em`} ml="half" icon={icon} />} */}
    </ButtonWrapper>
  )
}

Button.defaultProps = {
  className: undefined,
  icon: null,
  iconSide: "right",
  size: "medium",
  disabled: false,
  fullWidth: false,
  asLink: false
}

export default Button;
