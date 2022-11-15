function main() {
  var kanvas = document.getElementById("kanvas");
  var gl = kanvas.getContext("webgl");

  var state = {
    gl: null,
    program: "render",
    ui: {
      pressedKeys: {},
    },
    animation: {},
    app: {
      doAnimate: true,
      eye: {
        x: 0.0,
        y: 0.0,
        z: 7.5,
      },
      objects: [],
    },
  };

  state.pm = mat4.create();

  mat4.perspective(state.pm, (5 * Math.PI) / 180, 1.0, 0.5, 50.0);
  mat4.lookAt(mat4.create(), vec3.fromValues(state.app.eye.x, state.app.eye.y, state.app.eye.z), vec3.fromValues(0, 0, 0), vec3.fromValues(0, 1, 0));

  var vertices = [
    // Num 9 Outer Front
    -0.35, 0.4, 1.0,
    -0.7, 0.4, 1.0,
    -0.8, 0.5, 1.0,
    -0.8, 0.7, 1.0,
    -0.7, 0.8, 1.0,
    -0.35, 0.8, 1.0,
    -0.25, 0.7, 1.0,
    -0.25, 0.25, 1.0,
    -0.35, 0.15, 1.0,
    -0.7, 0.15, 1.0,
    -0.8, 0.25, 1.0,
    -0.8, 0.35, 1.0,
    -0.7, 0.35, 1.0,
    -0.7, 0.3, 1.0,
    -0.65, 0.25, 1.0,
    -0.4, 0.25, 1.0,
    -0.35, 0.3, 1.0,

    // Num 9 Outer Back
    -0.35, 0.4, -1.0,
    -0.7, 0.4, -1.0,
    -0.8, 0.5, -1.0,
    -0.8, 0.7, -1.0,
    -0.7, 0.8, -1.0,
    -0.35, 0.8, -1.0,
    -0.25, 0.7, -1.0,
    -0.25, 0.25, -1.0,
    -0.35, 0.15, -1.0,
    -0.7, 0.15, -1.0,
    -0.8, 0.25, -1.0,
    -0.8, 0.35, -1.0,
    -0.7, 0.35, -1.0,
    -0.7, 0.3, -1.0,
    -0.65, 0.25, -1.0,
    -0.4, 0.25, -1.0,
    -0.35, 0.3, -1.0,

    // Num 9 Inner Front
    -0.35, 0.5, 1.0,
    -0.65, 0.5, 1.0,
    -0.7, 0.55, 1.0,
    -0.7, 0.65, 1.0,
    -0.65, 0.7, 1.0,
    -0.4, 0.7, 1.0,
    -0.35, 0.65, 1.0,

    // Num 9 Inner Back
    -0.35, 0.5, -1.0,
    -0.65, 0.5, -1.0,
    -0.7, 0.55, -1.0,
    -0.7, 0.65, -1.0,
    -0.65, 0.7, -1.0,
    -0.4, 0.7, -1.0,
    -0.35, 0.65, -1.0,

    // Num 7 Front
    0.25, 0.8, 1.0,
    0.7, 0.8, 1.0,
    0.7, 0.7, 1.0,
    0.58, 0.5, 1.0,
    0.7, 0.5, 1.0,
    0.7, 0.4, 1.0,
    0.53, 0.4, 1.0,
    0.38, 0.15, 1.0,
    0.25, 0.15, 1.0,
    0.4, 0.4, 1.0,
    0.3, 0.4, 1.0,
    0.3, 0.5, 1.0,
    0.45, 0.5, 1.0,
    0.58, 0.7, 1.0,
    0.25, 0.7, 1.0,

    // Num 7 Back
    0.25, 0.8, -1.0,
    0.7, 0.8, -1.0,
    0.7, 0.7, -1.0,
    0.58, 0.5, -1.0,
    0.7, 0.5, -1.0,
    0.7, 0.4, -1.0,
    0.53, 0.4, -1.0,
    0.38, 0.15, -1.0,
    0.25, 0.15, -1.0,
    0.4, 0.4, -1.0,
    0.3, 0.4, -1.0,
    0.3, 0.5, -1.0,
    0.45, 0.5, -1.0,
    0.58, 0.7, -1.0,
    0.25, 0.7, -1.0,

    // Char N Front
    -0.8, -0.8, 1.0,
    -0.7, -0.8, 1.0,
    -0.6, -0.15, 1.0,
    -0.7, -0.15, 1.0,

    -0.25, -0.8, 1.0,
    -0.35, -0.8, 1.0,
    -0.25, -0.15, 1.0,
    -0.15, -0.15, 1.0,

    -0.35, -0.15, 1.0,
    -0.35, -0.25, 1.0,
    -0.2, -0.25, 1.0,

    -0.8, -0.8, 1.0,
    -0.7, -0.7, 1.0,
    -0.6, -0.7, 1.0,
    -0.6, -0.8, 1.0,

    // Char N Back
    -0.8, -0.8, -1.0,
    -0.7, -0.8, -1.0,
    -0.6, -0.15, -1.0,
    -0.7, -0.15, -1.0,

    -0.25, -0.8, -1.0,
    -0.35, -0.8, -1.0,
    -0.25, -0.15, -1.0,
    -0.15, -0.15, -1.0,

    -0.35, -0.15, -1.0,
    -0.35, -0.25, -1.0,
    -0.2, -0.25, -1.0,

    -0.8, -0.8, -1.0,
    -0.7, -0.7, -1.0,
    -0.6, -0.7, -1.0,
    -0.6, -0.8, -1.0,
  ];

  // Char O
  for (var i = 0.0; i <= 360; i += 1) {
    // degrees to radians
    var j = i * Math.PI / 180;
    // X Y Z
    var vertIn = [
      Math.sin(j) * 0.15 + 0.5,
      Math.cos(j) * 0.25 - 0.45,
    ];

    var vertOut = [
      Math.sin(j) * 0.3 + 0.5,
      Math.cos(j) * 0.35 - 0.45,
    ];
    vertices = vertices.concat(vertIn);
    vertices = vertices.concat(vertOut);
  }

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  // Vertex shader
  var vertexShaderCode = `
    attribute vec3 aPosition;
    void main() {
        float x = aPosition.x;
        float y = aPosition.y;
        float z = aPosition.z;
        gl_PointSize = 10.0;
        gl_Position = vec4(x, y, z, 1.0);
    }`;

  var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShaderObject, vertexShaderCode);
  gl.compileShader(vertexShaderObject);

  // Fragment shader
  var fragmentShaderCode = `
    precision mediump float;
    void main() {
        float r = 0.0;
        float g = 0.0;
        float b = 0.0;
        gl_FragColor = vec4(r, g, b, 1.0);
    }`;
  var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
  gl.compileShader(fragmentShaderObject);

  var shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShaderObject);
  gl.attachShader(shaderProgram, fragmentShaderObject);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);

  var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
  gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(aPosition);

  gl.clearColor(1.0, 1.0, 1.0, 1);

  gl.clear(gl.COLOR_BUFFER_BIT);

  // Num 9 Outer
  gl.drawArrays(gl.LINE_LOOP, 0, 17);
  gl.drawArrays(gl.LINE_LOOP, 17, 17);

  // Num 9 Inner
  gl.drawArrays(gl.LINE_LOOP, 34, 7);
  gl.drawArrays(gl.LINE_LOOP, 41, 7);

  // Num 7
  gl.drawArrays(gl.LINE_LOOP, 48, 15);
  gl.drawArrays(gl.LINE_LOOP, 63, 15);

  // Char N
  gl.drawArrays(gl.TRIANGLE_FAN, 78, 4);
  gl.drawArrays(gl.TRIANGLE_STRIP, 80, 4);
  gl.drawArrays(gl.TRIANGLE_FAN, 82, 4);
  gl.drawArrays(gl.TRIANGLE_FAN, 90, 5);
  gl.drawArrays(gl.TRIANGLE_FAN, 85, 4);

  // Char O
  // console.log(vertices)
  gl.drawArrays(gl.TRIANGLE_STRIP, 108, (vertices.length - 107) / 2);
}
