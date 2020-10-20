import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { color as defaultColors, breakpoint } from '../styles/variables';

export interface ButtonProps {
  disabled?: boolean;
  label: string;
  modifer?: string[];
  onClick?: () => void;
  outline?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const StyledButton = styled.button`
  background: ${defaultColors.primary};
  border: 1px solid ${defaultColors.primary};
  color: ${defaultColors.white};
  padding: .75em 1.25em;

  :hover {
    background-color: ${ darken( 0.2, defaultColors.primary)}
  }
`

export const Button: React.FC<ButtonProps> = ({
  disabled = false,
  outline = false,
  size = "medium",
  modifer,
  label,
  ...props
}) => {
 return (
  <StyledButton 
    type="button"
    disabled={disabled}
    {...props}
  >
    {label}
  </StyledButton>
 );
};