import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { ThemeType } from '../../00-base/01-theme/theme.type';
import { Container } from '../../01-atoms/container';

export interface BaseFooterProps {
  theme?: ThemeType;
}

export type FooterProps = BaseFooterProps &
  SpaceProps &
  React.ComponentPropsWithRef<'footer'> & {
    children?: React.ReactNode;
  };

const StyledFooter: React.FC<FooterProps> = styled.footer`
  background: ${(props) => props.theme.colors.accent4};
  color: ${(props) => props.theme.colors.shade1};
  padding: ${(props) => props.theme.space.x4}px 0;
  ${space}
`;

export const Footer: React.FC<FooterProps> = ({ children, ...props }) => {
  return (
    <StyledFooter {...props}>
      <Container>Footer</Container>
    </StyledFooter>
  );
};

export default Footer;
