import * as React from "react"
import { Node } from "gl-react"
import { Surface } from "gl-react-dom"
import ShaderWrapper from "../components/shader-wrapper"
import { addExtensionToShader, createShader } from "../utils/shaders"
import { toPath } from "../utils/format"
import { defined } from "../utils/variable-evaluation"
const NAME = "Bleeding Edge";
const id = toPath(NAME)

let loop

function BleedingEdge() {
  const [tick, setTick] = React.useState(0)
  const [shaders, setShaders] = React.useState(null)
  const surfaceRef: React.RefObject<Surface> = React.useRef()

  const incTick = tick => {
    const nextTick = tick + 0.001
    setTick(nextTick)
    loop = requestAnimationFrame(() => {
      incTick(nextTick)
    })
  }

  React.useEffect(() => {
    addExtensionToShader(defined(shaders), surfaceRef)
    createShader(id, setShaders)
    incTick(tick)
    return () => cancelAnimationFrame(loop)
  }, [])

  React.useEffect(() => {
    addExtensionToShader(defined(shaders), surfaceRef)
  }, [defined(shaders)])
  return (
    <ShaderWrapper
      name={NAME}
      ref={surfaceRef}
    >
      {defined(shaders) && (
        <Node
          shader={shaders[id]}
          uniforms={{
            // uResolution: [1, 1],
            uTime: tick,
            channel: 'https://i.imgur.com/uTP9Xfr.jpg'
          }}
        />
      )}
    </ShaderWrapper>
  )
}

export default BleedingEdge
