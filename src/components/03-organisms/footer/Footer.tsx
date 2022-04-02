import React from 'react';
import styled from 'styled-components';
import {
  space,
  SpaceProps
} from "styled-system";

export type HeaderProps = SpaceProps &
  React.ComponentPropsWithRef<"footer"> & {
    children?: React.ReactNode;
  };

export const Footer: React.FC<HeaderProps> = styled.footer`
  ${space}
`

export default Footer;
