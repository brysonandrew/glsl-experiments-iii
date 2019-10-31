import * as React from "react"
import { Shaders, Node, GLSL } from "gl-react"
import { Surface } from "gl-react-dom"
let shader = require("../shaders/sparks.glsl")
import ShaderWrapper from "../components/shader-wrapper"

let loop

const shaders = Shaders.create({
  sparks: {
    frag: GLSL`${shader}`,
  },
})

function Sparks() {
  const [tick, setTick] = React.useState(0)
  const incTick = tick => {
    const nextTick = tick + 0.1
    setTick(nextTick)
    loop = requestAnimationFrame(() => {
      incTick(nextTick)
    })
  }
  React.useEffect(() => {
    incTick(tick)
    return () => cancelAnimationFrame(loop)
  }, [])

  return (
    <Node
      shader={shaders.sparks}
      uniforms={{ uResolution: [1, 1], uTime: tick }}
    />
  )
}

export default () => (
  <ShaderWrapper name="Sparks">
    <Sparks />
  </ShaderWrapper>
)
