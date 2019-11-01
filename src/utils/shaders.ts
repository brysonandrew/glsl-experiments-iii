import { Shaders, Node, GLSL } from "gl-react"

export function createShader(id, onSetShaders) {
  import(`../shaders/${id}.glsl`).then(x => {
    onSetShaders(
      Shaders.create({
        [id]: {
          frag: GLSL`${x.default}`,
        },
      })
    )
  })
}

export function addExtensionToShader(isReady, canvasRef) {
  if (isReady) {
    const gl = canvasRef.current.glView.canvas.getContext("webgl")
    gl.getExtension("OES_standard_derivatives")
  }
}
