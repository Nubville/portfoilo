/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC } from 'react';
import GlobalStyles from './00-base/00-defaults/globalStyle';
import { Container } from './01-atoms/container';
import Footer from './03-organisms/site/footer/Footer';
import Header from './03-organisms/site/header/Header';
import Logo from './01-atoms/images/logo/Logo';
import NamePlate from './02-molecules/name-plate/NamePlate';
import styled, { ThemeProvider } from 'styled-components';
import theme from './00-base/01-theme/theme';
import { Link } from 'gatsby';
import { ThemeType } from './00-base/01-theme/theme.type';

export interface LayoutProps {
  theme?: ThemeType;
}

const InfoBlock = styled.div``;

const SiteGridSWrapper = styled.div``;

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SiteGridSWrapper>
          <Header></Header>
          <GlobalStyles />
          <main>{children}</main>
          <Footer></Footer>
        </SiteGridSWrapper>
      </ThemeProvider>
    </>
  );
};

export default Layout;
