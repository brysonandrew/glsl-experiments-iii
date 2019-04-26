import * as React from "react"
import { Link } from "gatsby"
import { Shaders, Node, GLSL } from "gl-react";
import { Surface } from "gl-react-dom";

const shaders = Shaders.create({
  helloBlue: {
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform float blue;
void main() {
  gl_FragColor = vec4(uv.x, uv.y, blue, 1.0);
}`
  }
});

function HelloBlue() {
  return <Node shader={shaders.helloBlue} uniforms={{ blue: 0.5 }} />;
}

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <Surface width={300} height={300}>
      <HelloBlue/>
    </Surface>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
