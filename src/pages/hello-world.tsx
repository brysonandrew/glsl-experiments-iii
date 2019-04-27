import * as React from "react"
import { Shaders, Node, GLSL } from "gl-react"
import { Surface } from "gl-react-dom"
let shader = require('../components/shaders/hello-world.glsl')

const shaders = Shaders.create({
  helloBlue: {
    frag: GLSL`${shader}`
  }
});

function HelloBlue() {
  return <Node shader={shaders.helloBlue} uniforms={{ blue: 0.5 }} />
}

import ShaderWrapper from "../components/shader-wrapper"

const HelloWorld = () => (
  <ShaderWrapper name="Hello World">
    <HelloBlue/>
  </ShaderWrapper>
)

export default HelloWorld
