function main() {
  var kanvas = document.getElementById("kanvas");
  var gl = kanvas.getContext("webgl");

  var vertices = [
    // Num9
    -0.25, 0.6,
    -0.4, 0.4,
    -0.6, 0.4,
    -0.75, 0.6,
    -0.6, 0.8,
    -0.4, 0.8,
    -0.25, 0.6,
    -0.25, 0.3,
    -0.4, 0.15,
    -0.6, 0.15,
    -0.75, 0.3,
    // Num7
    0.25, 0.8,
    0.75, 0.8,
    0.55, 0.5,
    0.3, 0.5,
    0.75, 0.5,
    0.55, 0.5,
    0.3, 0.15
  ];

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  // Vertex shader
  var vertexShaderCode = `
    attribute vec2 aPosition;
    void main() {
        float x = aPosition.x;
        float y = aPosition.y;
        gl_PointSize = 10.0;
        gl_Position = vec4(x, y, 0.0, 1.0);
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
        float b = 1.0;
        gl_FragColor = vec4(r, g, b, 1.0);
    }`;
  var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
  gl.compileShader(fragmentShaderObject);

  var shaderProgram = gl.createProgram(); // wadah dari executable (.exe)
  gl.attachShader(shaderProgram, vertexShaderObject);
  gl.attachShader(shaderProgram, fragmentShaderObject);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);

  var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(aPosition);

  gl.clearColor(1.0, 0.65, 0.0, 1.0);
  //          Merah, Hijau, Biru, Transparansi
  gl.clear(gl.COLOR_BUFFER_BIT);

    // Num 9
  gl.drawArrays(gl.LINE_STRIP, 0, 11);
  // Num 7
  gl.drawArrays(gl.LINE_STRIP, 11, 7);
}
