import * as React from "react"
import { Shaders, Node, GLSL } from "gl-react"
import { Surface } from "gl-react-dom"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export interface IProps {
  name: string
  children: JSX.Element
}

const ShaderWrapper = (props: IProps) => (
  <Layout>
    <SEO title={props.name} />
    <Container>
      <Surface width={800} height={800}>
        {props.children}
      </Surface>
    </Container>
  </Layout>
)

export default ShaderWrapper
