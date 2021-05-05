import React from "react"
import { Link } from "gatsby"
import { space } from 'styled-system'
import { Heading } from '../components/01-atoms/headings'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button } from "../components/01-atoms/buttons";
import { Box } from "../components/01-atoms/box";
import { Container } from "../components/01-atoms/container";
import styled from "styled-components";
import Logo from "../images/svg/rw-text.svg";


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
      <Box p="x2" mb="x3" color="primary" >
        <Logo />
      </Box>
      <Heading size={1} mb="x7">
        Welcome to Release Wizard!
      </Heading>
      <Button p="x2" mb="x5">Test</Button>
    </Container>
    {/* <ButtonRow>
      <Button>Value</Button>
      <Button>Value</Button>
    </ButtonRow>
    <<h1>Hi people</h1>>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
