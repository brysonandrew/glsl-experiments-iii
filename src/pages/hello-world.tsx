import * as React from "react"
import { Shaders, Node, GLSL } from "gl-react"
import { Surface } from "gl-react-dom"
import styled from "styled-components"
let shader = require('../components/shaders/hello-world.glsl')

const shaders = Shaders.create({
  helloBlue: {
    frag: GLSL`${shader}`
  }
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function HelloBlue() {
  return <Node shader={shaders.helloBlue} uniforms={{ blue: 0.5 }} />
}

import Layout from "../components/layout"
import SEO from "../components/seo"

const HelloWorld = () => (
  <Layout>
    <SEO title="Hello World" />
    <Container>
      <Surface width={500} height={500}>
        <HelloBlue/>
      </Surface>
    </Container>
  </Layout>
)

export default HelloWorld
