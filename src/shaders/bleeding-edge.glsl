precision highp float;
varying vec2 uv;

#ifdef GL_OES_standard_derivatives
  #extension GL_OES_standard_derivatives : enable
#endif

float perspective = 0.3;

const int samples = 25;
const float minBlur = -.2;
const float maxBlur = .2;
const float speed = 3.;

uniform float uTime;
uniform sampler2D channel;

float sigmoid(float a, float f) {
	return 1.0 / (1.0 + exp(-f * a));
}

void main()
{
  float timeQ = mix(minBlur, maxBlur, (sin(uTime * speed)+1.0) / 2.0);
  vec2 p = uv;
  vec4 result = vec4(0);
  for (int i = 0; i <= samples; i++) {
    float q = float(i) / float(samples);
    result += texture2D(channel, p + (vec2(0.5) - p) * q * timeQ) / float(samples);
  }

  float edgeStrength = length(fwidth(result));
  edgeStrength = sigmoid(edgeStrength - 0.2, 15.0);
  gl_FragColor = vec4(vec3(edgeStrength), 1.0) + texture2D(channel, uv);
}
