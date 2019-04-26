import * as React from "react"
import { Shaders, Node, GLSL } from "gl-react"
import { Surface } from "gl-react-dom"
import styled from "styled-components"
let shader = require('../components/shaders/ray-march.glsl')

import Layout from "../components/layout"
import SEO from "../components/seo"

let loop;

const shaders = Shaders.create({
  rayMarch: {
    frag: GLSL`${shader}`
  }
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function RayMarch() {
  const [tick, setTick] = React.useState(0);
  const incTick = (tick) => {
    const nextTick = tick + 0.1;
    setTick(nextTick);
    loop = requestAnimationFrame(() => {
      incTick(nextTick);
    });
  };
  React.useEffect(() => {
    incTick(tick);
    return () => cancelAnimationFrame(loop);
  }, []);

  return <Node shader={shaders.rayMarch} uniforms={{ uResolution: [1,1], uTime: tick }} />
}

const HelloWorld = () => (
  <Layout>
    <SEO title="Ray March" />
    <Container>
      <Surface width={500} height={500}>
        <RayMarch/>
      </Surface>
    </Container>
  </Layout>
)

export default HelloWorld
