import React from 'react';
import styled from 'styled-components';
import {
  space,
  SpaceProps
} from "styled-system";

export type HeaderProps = SpaceProps &
  React.ComponentPropsWithRef<"header"> & {
    children?: React.ReactNode;
  };


export const Header: React.FC<HeaderProps> = styled.header`
  ${space}
`;

export default Header;
