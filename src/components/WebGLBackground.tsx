"use client";

import { useEffect, useRef } from 'react';

const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision mediump float;
  uniform float u_time;
  uniform vec2 u_resolution;

  // Simple pseudo-random noise function
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                       -0.577350269189626,  // -1.0 + 2.0 * C.x
                        0.024390243902439); // 1.0 / 41.0
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;

    // Slow moving time
    float t = u_time * 0.15;

    // Create layered noise for a smoky/fluid effect
    float n1 = snoise(st * 1.5 + vec2(t, t * 0.5));
    float n2 = snoise(st * 3.0 - vec2(t * 0.8, t * 0.3));
    float n3 = snoise(st * 6.0 + vec2(t * 1.2, -t * 0.7));

    float finalNoise = (n1 + n2 * 0.5 + n3 * 0.25) / 1.75;

    // Map noise to smooth gradients based on the deep blue primary color
    vec3 bgBase = vec3(0.03, 0.05, 0.08); // Very dark navy
    vec3 color1 = vec3(0.12, 0.23, 0.54); // Primary blue
    vec3 color2 = vec3(0.08, 0.15, 0.35); // Darker blue

    // Mix colors based on noise
    vec3 finalColor = mix(bgBase, color1, smoothstep(-0.5, 0.5, finalNoise));
    finalColor = mix(finalColor, color2, smoothstep(0.0, 1.0, n2));

    // Add subtle vignette
    vec2 center = gl_FragCoord.xy / u_resolution.xy - vec2(0.5);
    float vignette = 1.0 - dot(center, center) * 1.5;
    finalColor *= smoothstep(0.0, 1.0, vignette);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const glCtx = gl as WebGLRenderingContext;

    function createShader(type: number, source: string) {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.error(glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = createShader(glCtx.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(glCtx.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) return;

    const program = glCtx.createProgram();
    if (!program) return;
    
    glCtx.attachShader(program, vertexShader);
    glCtx.attachShader(program, fragmentShader);
    glCtx.linkProgram(program);

    if (!glCtx.getProgramParameter(program, glCtx.LINK_STATUS)) {
      console.error(glCtx.getProgramInfoLog(program));
      return;
    }

    glCtx.useProgram(program);

    const positionBuffer = glCtx.createBuffer();
    glCtx.bindBuffer(glCtx.ARRAY_BUFFER, positionBuffer);
    glCtx.bufferData(
      glCtx.ARRAY_BUFFER,
      new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0]),
      glCtx.STATIC_DRAW
    );

    const positionLocation = glCtx.getAttribLocation(program, 'a_position');
    glCtx.enableVertexAttribArray(positionLocation);
    glCtx.vertexAttribPointer(positionLocation, 2, glCtx.FLOAT, false, 0, 0);

    const timeLocation = glCtx.getUniformLocation(program, 'u_time');
    const resolutionLocation = glCtx.getUniformLocation(program, 'u_resolution');

    function resize() {
      // Force pixel ratio to 1 for massive performance gain
      const dpr = 1; 
      const displayWidth = canvas!.clientWidth * dpr;
      const displayHeight = canvas!.clientHeight * dpr;

      if (canvas!.width !== displayWidth || canvas!.height !== displayHeight) {
        canvas!.width = displayWidth;
        canvas!.height = displayHeight;
      }
    }

    resize();
    window.addEventListener('resize', resize);

    let frame: number;
    function render(time: number) {
      resize();
      glCtx.viewport(0, 0, glCtx.canvas.width, glCtx.canvas.height);
      glCtx.uniform1f(timeLocation, time * 0.001);
      glCtx.uniform2f(resolutionLocation, glCtx.canvas.width, glCtx.canvas.height);

      glCtx.drawArrays(glCtx.TRIANGLE_STRIP, 0, 4);
      frame = requestAnimationFrame(render);
    }

    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
    />
  );
}
