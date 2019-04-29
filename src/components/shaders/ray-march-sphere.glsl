precision highp float;
varying vec2 uv;
const float SIZE = 1.0;
const float MINIMUM_HIT_DISTANCE = 0.0001;
const float MAXIMUM_TRACE_DISTANCE = 1000.0;
const int NUMBER_OF_STEPS = 100;
const float PI = 3.14159265359;

uniform vec2 uResolution;
uniform float uTime;

mat3 rotateY(float rad) {
    float c = cos(rad);
    float s = sin(rad);
    return mat3(
        c, 0.0, -s,
        0.0, 1.0, 0.0,
        s, 0.0, c
    );
}

mat3 rotateX(float rad) {
    float c = cos(rad);
    float s = sin(rad);
    return mat3(
        1.0, 0.0, 0.0,
        0.0, c, s,
        0.0, -s, c
    );
}

mat3 rotateZ(float rad) {
    float c = cos(rad);
    float s = sin(rad);
    return mat3(
        c, s, 0.0,
        -s, c, 0.0,
        0.0, 0.0, 1.0
    );
}

mat2 rotationMatrix2d(float time) { // matrix representation of a complex number can be used to rotate 2d vectors
  return mat2(cos(time), sin(time), -sin(time), cos(time));
}

float smoothMin(float dstA, float dstB, float k) {
    float h = max(k - abs(dstA - dstB), 0.0) / k;
    return min(dstA, dstB) - h * h * h * k * 1.0 / 6.0;
}

float opOnion( in float sdf, in float thickness ) {
    return abs(sdf)-thickness;
}

float sdSphere( vec3 p, float s )
{
  return length(p)-s;
}

float mapTheWorld(in vec3 p) {
    return sdSphere(p, 2.0);
}

vec3 calculateNormal(in vec3 currentPosition) {
    const vec3 small_step = vec3(0.001, 0.0, 0.0);

    float gradient_x = mapTheWorld(currentPosition + small_step.xyy) - mapTheWorld(currentPosition - small_step.xyy);
    float gradient_y = mapTheWorld(currentPosition + small_step.yxy) - mapTheWorld(currentPosition - small_step.yxy);
    float gradient_z = mapTheWorld(currentPosition + small_step.yyx) - mapTheWorld(currentPosition - small_step.yyx);

    vec3 normal = vec3(gradient_x, gradient_y, gradient_z);

    return normalize(normal);
}

vec3 remap(vec3 col) { // map range -1 to 1, to, range 0 to 1
  return col * 0.5 + 0.5;
}

mat2 rotation() {
    return rotationMatrix2d(uTime * 0.1);
}

void main() {
  vec3 coord = vec3((uv - 0.5 * uResolution.xy) / uResolution.y, 0.0); // adjusting for the viewport size

  vec3 ro = vec3(0, 1, -5), // where the camera is sitting
        look_at = vec3(0); // where the camera is pointing

  ro.xz *= rotation();

  float zoom = 0.8; // camera zoom
  vec3 f = normalize(look_at - ro), // forward vector
    r = normalize(cross(vec3(0, 1, 0), f)); // right vector
  vec3 u = cross(f, r), // up vector
    c = ro + f * zoom, // center point of the virtual screen (virtual screen is a screen that the objects are painted onto and sits between the camera and the objects)
    i = c + coord.x * r + coord.y * u, // ray intersection point with our virtual screen
    rd = normalize(i - ro); // ray direction
  float dS, dO = 0.0; // distance to surface and distance to origin;
  vec3 currentPosition; // point along the ray (from which we emit our spheres);
  vec3 col = vec3(0); // empty canvas

  for(int i = 0; i < 100; i++) { // ray marcher
    currentPosition = ro + rd * dO; // the point coord is the ray origin plus the distance from the origin times ray direction
    dS = mapTheWorld(currentPosition);
    if (dS < MINIMUM_HIT_DISTANCE) {
      // Add a lot of light when we're really close to the surface
      vec3 c = vec3(max(0., .01 - abs(dS)) * .5);
      c *= vec3(1.4,2.1,1.7); // blue green tint

      // Accumilate some purple glow for every step
      c += vec3(.6,.25,.7) * 0.1 / 160.;
      c *= smoothstep(20., 7., length(currentPosition));
      vec3 normal = calculateNormal(currentPosition);
      // For now, hard-code the light's position in our scene
      vec3 lightPosition = vec3(2.0, -5.0, 3.0);
      lightPosition.xz *= rotation();
      // Calculate the unit direction vector that points from
      // the point of intersection to the light source
      vec3 direction_to_light = normalize(currentPosition - lightPosition);
  
      float diffuse_intensity = max(0.0, dot(normal, direction_to_light));
  
      col = vec3(0.5) * diffuse_intensity * c * 240.0;
      break;
    }; // register a hit - one of our spheres can register a hit on our object because distance of surface is tiny
    if (dO > MAXIMUM_TRACE_DISTANCE) break; // maximum distance that our camera will pick up
    dO += dS; // This is stepping to the next point coord to emit another sphere
  }
    		
  gl_FragColor = vec4(col, 1.0); // our final color
}
