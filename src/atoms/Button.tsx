import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';
import { darken } from 'polished';

export interface ButtonProps {
  disabled?: boolean;
  label: string;
  onClick?: () => void;
  outline?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'primary' | 'success' | 'danger' | 'warning';
}

const variantColor = theme.variants("mode", "variant", {
  default: { light: props => props.theme.color.primary, dark: "#123456" },
  primary: { light: props => props.theme.color.primary, dark: "#123456" },
  success: { light: props => props.theme.color.comp1, dark: "#123456" },
  warning: { light: props => props.theme.color.comp2, dark: "#123456" },
  danger: { light: props => props.theme.color.comp3, dark: "#123456" },
});

const StyledButton = styled.button`
  background: ${props => props.outline !== true ? variantColor : 'transparent'};
  border: 1px solid ${variantColor};
  color: ${props => props.outline === true ? variantColor : props => props.theme.color.white};
  padding: .5em 1.25em;
`

export const Button: React.FC<ButtonProps> = ({
  disabled = false,
  outline = false,
  size = "medium",
  label,
  variant = "default",
  ...props
}) => {
  return (
    <StyledButton
      disabled={disabled}
      outline={outline}
      type="button"
      variant={variant}
      {...props}
    >
      {label}
    </StyledButton>
  );
};