import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ShareCalculator from "../components/ShareCalculator/ShareCalculator";
import { Button } from "../atoms/Button";
import styled from "styled-components"

const ButtonRow = styled.div`
  margin-bottom: 25px;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ButtonRow>
      <Button label="Default Test" />
      <Button variant="primary" label="Primary Test" />
      <Button variant="success" label="Success Test" />
      <Button variant="warning" label="Warning Test" />
      <Button variant="danger" label="Danger Test" />
    </ButtonRow>

    <ButtonRow>
      <Button outline={true} label="Default Test" />
      <Button outline={true} variant="primary" label="Primary Test" />
      <Button outline={true} variant="success" label="Success Test" />
      <Button outline={true} variant="warning" label="Warning Test" />
      <Button outline={true} variant="danger" label="Danger Test" />
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
