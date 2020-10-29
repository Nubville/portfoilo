import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button } from "../Button";
import { Box } from "../Box";
import styled from "styled-components";

const ButtonRow = styled.div`
  margin-bottom: 25px;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box p="x4" mb="x3" color="primary" bg="secondary">Test</Box>
    <ButtonRow>
      <Button>Value</Button>
      <Button>Value</Button>
    </ButtonRow>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
