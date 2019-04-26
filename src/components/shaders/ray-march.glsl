precision highp float;
varying vec2 uv;
const float SIZE = 1.0;
const float MINIMUM_HIT_DISTANCE = 1.0;
const float MAXIMUM_TRACE_DISTANCE = 1000.0;
const int NUMBER_OF_STEPS = 100;
uniform vec2 uResolution;
uniform float uTime;

mat2 rotationMatrix2d(float time) { // matrix representation of a complex number can be used to rotate 2d vectors
  return mat2(cos(time), sin(time), -sin(time), cos(time));
}

float sdOctahedron( in vec3 p, in float s) { // thank you Íñigo Quílez http://iquilezles.org/www/articles/distfunctions/distfunctions.htm
    p = abs(p);
    return (p.x+p.y+p.z-s)*0.57735027;
}

float smoothMin(float dstA, float dstB, float k) {
    float h = max(k - abs(dstA - dstB), 0.0) / k;
    return min(dstA, dstB) - h * h * h * k * 1.0 / 6.0;
}

float mapTheWorld(in vec3 p) {
    float displacement = sin(5.0 * p.x) * cos(5.0 * p.y) * sin(5.0 * p.z) * 0.25;

    float sphere_0 = sdOctahedron(p + vec3(sin(uTime * 0.01) * 2.0, 0.0, 0.0), SIZE);
    float sphere_1 = sdOctahedron(p + vec3(sin(-uTime * 0.01) * 2.0, 0.0, 0.0), SIZE);

    // Later we might have sphere_1, sphere_2, cube_3, etc...

    return smoothMin(sphere_0, sphere_1, 0.4);
}

vec3 calculate_normal(in vec3 currentPosition) {
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

void main()
{
  vec3 coord = vec3((uv - 0.5 * uResolution.xy) / uResolution.y, 0.0); // adjusting for the viewport size

  vec3 ro = vec3(0, 3, -5), // where the camera is sitting
        look_at = vec3(0); // where the camera is pointing
  float zoom = 0.8; // camera zoom
  vec3 f = normalize(look_at - ro), // forward vector
    r = normalize(cross(vec3(0, 1, 0), f)); // right vector
  r.xz *= rotationMatrix2d(uTime * 0.1);
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
      vec3 normal = calculate_normal(currentPosition);
      // For now, hard-code the light's position in our scene
      vec3 light_position = vec3(2.0, -5.0, 3.0);
  
      // Calculate the unit direction vector that points from
      // the point of intersection to the light source
      vec3 direction_to_light = normalize(currentPosition - light_position);
  
      float diffuse_intensity = max(0.0, dot(normal, direction_to_light));
  
      col = vec3(0.5, 0.5, 0.5) * diffuse_intensity;
      break;
    }; // register a hit - one of our spheres can register a hit on our object because distance of surface is tiny
    if (dO > MAXIMUM_TRACE_DISTANCE) break; // maximum distance that our camera will pick up
    dO += dS; // This is stepping to the next point coord to emit another sphere
  }
    		
  gl_FragColor = vec4(col, 1.0); // our final color
}
