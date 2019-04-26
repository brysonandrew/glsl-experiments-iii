import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/hello-world">Hello World</Link>
    <Link to="/ray-march">Ray March</Link>
    <Link to="/sparks">Sparks</Link>
  </Layout>
)

export default IndexPage
