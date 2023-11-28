/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC, ReactNode } from 'react';
import GlobalStyles from '../../00-base/00-defaults/globalStyle';
import { Container } from '../../01-atoms/container';
import Footer from '../../03-organisms/footer/Footer';
import Header from '../../03-organisms/header/Header';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../00-base/01-theme/theme';
import { Link } from 'gatsby';
import { ThemeType } from '../../00-base/01-theme/theme.type';

export interface LayoutProps {
  theme?: ThemeType;
  children: ReactNode
}

const SiteWrapper = styled.div`
  position: relative;
`;

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SiteWrapper>
          <Header></Header>
          <GlobalStyles />
          <main>{children}</main>
          <Footer></Footer>
        </SiteWrapper>
      </ThemeProvider>
    </>
  );
};

export default Layout;
