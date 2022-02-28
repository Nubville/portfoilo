import React from 'react';
import { Link } from 'gatsby';
import { space } from 'styled-system';
import { Heading } from '../components/01-atoms/headings';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { Button } from '../components/01-atoms/buttons';
import { Box } from '../components/01-atoms/box';
import { Container } from '../components/01-atoms/container';
import AboutMe from '../components/02-molecules/about-me/AboutMe';
import styled from 'styled-components';
import Logo from '../images/svg/rw-text.svg';

const ButtonRow = styled.div`
  margin-bottom: 25px;
`;

const Wrapper = styled.div`
  ${space}
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <AboutMe />
    </Container>
  </Layout>
);

export default IndexPage;