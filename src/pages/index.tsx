import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { toPath } from "../utils/format"

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #000;
`

const ITEMS = [
  'Hello World',
  'Ray March Gun',
  'Sparks'
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {ITEMS.map((item) => (
      <Item key={item}>
        <Link to={`/${toPath(item)}`}>{item}</Link>
      </Item>
    ))}
  </Layout>
)

export default IndexPage
