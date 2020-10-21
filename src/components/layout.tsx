/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC } from "react";
import styled, {ThemeProvider} from "styled-components";
import GlobalStyles from '../styles/globalStyle';
import Typography from '../styles/typography';
import ThemeDefault from '../styles/themeDefault';
import {useStaticQuery, graphql} from "gatsby";
import Header from "./header";

const SiteWrapperStyles = styled.div`
  margin: 0 auto;
  max-width: 96rem;
`;

const Layout: FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={ThemeDefault}>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <GlobalStyles />
        <Typography />
        <SiteWrapperStyles>
          <main>{children}</main>
          <footer style={{
            marginTop: `2rem`
          }}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </SiteWrapperStyles>
      </ThemeProvider>
    </>
  )
}

export default Layout
