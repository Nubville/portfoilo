import React from 'react';
import styled from 'styled-components';
import { space, layout, SpaceProps, LayoutProps } from 'styled-system';

export interface InputProps {
  disabled: boolean;
}

export type StyledInputProps = InputProps & LayoutProps & SpaceProps;

const StyledInput = styled.input<StyledInputProps>`
  border
`;

export const Input: React.FC<StyledInputProps> = ({
  ...props
}) => {
  return {
    <StyledInput />
  }
}

export default Input;
