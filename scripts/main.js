function main() {
  var kanvas = document.getElementById("kanvas");
  var gl = kanvas.getContext("webgl");

  var vertices9 = [
    // Num 9 Outer Front    // White
    -0.35, 0.4, 0.0,        1, 1, 1,    // Index:  0
    -0.35, 0.4, 0.0,        1, 1, 1,    // Index:  1
    -0.7, 0.4, 0.0,         1, 1, 1,    // Index:  2
    -0.8, 0.5, 0.0,         1, 1, 1,    // Index:  3
    -0.8, 0.7, 0.0,         1, 1, 1,    // Index:  4
    -0.8, 0.7, 0.0,         1, 1, 1,    // Index:  5
    -0.7, 0.8, 0.0,         1, 1, 1,    // Index:  6
    -0.35, 0.8, 0.0,        1, 1, 1,    // Index:  7
    -0.25, 0.7, 0.0,        1, 1, 1,    // Index:  8
    -0.25, 0.7, 0.0,        1, 1, 1,    // Index:  9
    -0.25, 0.25, 0.0,       1, 1, 1,    // Index:  10
    -0.35, 0.15, 0.0,       1, 1, 1,    // Index:  11
    -0.7, 0.15, 0.0,        1, 1, 1,    // Index:  12
    -0.7, 0.15, 0.0,        1, 1, 1,    // Index:  13
    -0.8, 0.25, 0.0,        1, 1, 1,    // Index:  14
    -0.8, 0.35, 0.0,        1, 1, 1,    // Index:  15
    -0.7, 0.35, 0.0,        1, 1, 1,    // Index:  16
    -0.7, 0.3, 0.0,         1, 1, 1,    // Index:  17
    -0.65, 0.25, 0.0,       1, 1, 1,    // Index:  18
    -0.4, 0.25, 0.0,        1, 1, 1,    // Index:  19
    -0.35, 0.3, 0.0,        1, 1, 1,    // Index:  20

    // Num 9 Outer Back    // Black
    -0.3, 0.4, -0.2,        0, 0, 0,    // Index:  0
    -0.3, 0.4, -0.2,        0, 0, 0,    // Index:  1
    -0.65, 0.4, -0.2,         0, 0, 0,    // Index:  2
    -0.75, 0.5, -0.2,         0, 0, 0,    // Index:  3
    -0.75, 0.7, -0.2,         0, 0, 0,    // Index:  4
    -0.75, 0.7, -0.2,         0, 0, 0,    // Index:  5
    -0.65, 0.8, -0.2,         0, 0, 0,    // Index:  6
    -0.3, 0.8, -0.2,        0, 0, 0,    // Index:  7
    -0.2, 0.7, -0.2,        0, 0, 0,    // Index:  8
    -0.2, 0.7, -0.2,        0, 0, 0,    // Index:  9
    -0.2, 0.25, -0.2,       0, 0, 0,    // Index:  10
    -0.3, 0.15, -0.2,       0, 0, 0,    // Index:  11
    -0.65, 0.15, -0.2,        0, 0, 0,    // Index:  12
    -0.65, 0.15, -0.2,        0, 0, 0,    // Index:  13
    -0.75, 0.25, -0.2,        0, 0, 0,    // Index:  14
    -0.75, 0.35, -0.2,        0, 0, 0,    // Index:  15
    -0.65, 0.35, -0.2,        0, 0, 0,    // Index:  16
    -0.65, 0.3, -0.2,         0, 0, 0,    // Index:  17
    -0.6, 0.25, -0.2,       0, 0, 0,    // Index:  18
    -0.35, 0.25, -0.2,        0, 0, 0,    // Index:  19
    -0.3, 0.3, -0.2,        0, 0, 0,    // Index:  20
  ];

  var indices9 = [
    // Num 9 Outer Front
    0, 1, 2,     0, 2, 3,
    4, 5, 6,     4, 6, 7,
    8, 9, 10,    8, 10, 11,
    12, 13, 14,  12, 14, 15,
    16, 17, 18,  16, 18, 19,
    20, 21, 22,  20, 22, 23,
    24, 25, 26,  24, 26, 27,

    // Num 9 Outer Back
    28, 29, 30,  28, 30, 31,
    32, 33, 34,  32, 34, 35,
    36, 37, 38,  36, 38, 39,
    40, 41, 42,  40, 42, 43,
    44, 45, 46,  44, 46, 47,
    48
  ];

  var vertices91 = [
    // Num 9 Inner Front    // White
    -0.35, 0.5, 0.0,        1, 1, 1,    // Index:  0
    -0.35, 0.5, 0.0,        1, 1, 1,    // Index:  1
    -0.65, 0.5, 0.0,        1, 1, 1,    // Index:  1
    -0.7, 0.55, 0.0,        1, 1, 1,    // Index:  2
    -0.7, 0.65, 0.0,        1, 1, 1,    // Index:  3
    -0.7, 0.65, 0.0,        1, 1, 1,    // Index:  3
    -0.65, 0.7, 0.0,        1, 1, 1,    // Index:  4
    -0.4, 0.7, 0.0,         1, 1, 1,    // Index:  5
    -0.35, 0.65, 0.0,       1, 1, 1,    // Index:  6

    // Num 9 Inner Back    // Black
    -0.3, 0.5, -0.2,        0, 0, 0,    // Index:  0
    -0.3, 0.5, -0.2,        0, 0, 0,    // Index:  1
    -0.6, 0.5, -0.2,        0, 0, 0,    // Index:  1
    -0.65, 0.55, -0.2,        0, 0, 0,    // Index:  2
    -0.65, 0.65, -0.2,        0, 0, 0,    // Index:  3
    -0.65, 0.65, -0.2,        0, 0, 0,    // Index:  3
    -0.6, 0.7, -0.2,        0, 0, 0,    // Index:  4
    -0.35, 0.7, -0.2,         0, 0, 0,    // Index:  5
    -0.3, 0.65, -0.2,       0, 0, 0,    // Index:  6
  ];

  var indices91 = [
    // Num 9 Inner Front
    0, 1, 2,     0, 2, 3,
    4, 5, 6,     4, 6, 7,
    8, 9, 10,    8, 10, 11,
    12, 13, 14,  12, 15, 16,

    // Num 9 Inner Back
    17, 18, 19,  17, 19, 20,
    21, 22, 23,  21, 23, 24,
  ];

  var vertices7 = [
    // Num 7 Outer Front    // White
    0.25, 0.8, 0.0,         1, 1, 1,    // Index:  0
    0.25, 0.8, 0.0,         1, 1, 1,    // Index:  1
    0.7, 0.8, 0.0,          1, 1, 1,    // Index:  2
    0.7, 0.7, 0.0,          1, 1, 1,    // Index:  3
    0.58, 0.5, 0.0,         1, 1, 1,    // Index:  4
    0.7, 0.5, 0.0,          1, 1, 1,    // Index:  5
    0.7, 0.5, 0.0,          1, 1, 1,    // Index:  6
    0.7, 0.4, 0.0,          1, 1, 1,    // Index:  7
    0.7, 0.4, 0.0,          1, 1, 1,    // Index:  7
    0.53, 0.4, 0.0,         1, 1, 1,    // Index:  8
    0.53, 0.4, 0.0,         1, 1, 1,    // Index:  8
    0.38, 0.15, 0.0,        1, 1, 1,    // Index:  9
    0.38, 0.15, 0.0,        1, 1, 1,    // Index:  9
    0.25, 0.15, 0.0,        1, 1, 1,    // Index:  10
    0.25, 0.15, 0.0,        1, 1, 1,    // Index:  1
    0.4, 0.4, 0.0,          1, 1, 1,    // Index:  11
    0.4, 0.4, 0.0,          1, 1, 1,    // Index:  11
    0.3, 0.4, 0.0,          1, 1, 1,    // Index:  12
    0.3, 0.4, 0.0,          1, 1, 1,    // Index:  12
    0.3, 0.5, 0.0,          1, 1, 1,    // Index:  13
    0.3, 0.5, 0.0,          1, 1, 1,    // Index:  13
    0.45, 0.5, 0.0,         1, 1, 1,    // Index:  14
    0.45, 0.5, 0.0,         1, 1, 1,    // Index:  14
    0.58, 0.7, 0.0,         1, 1, 1,    // Index:  15
    0.25, 0.7, 0.0,         1, 1, 1,    // Index:  16

    // Num 7 Outer Back    // Black
    0.3, 0.8, -0.2,         0, 0, 0,    // Index:  0
    0.3, 0.8, -0.2,         0, 0, 0,    // Index:  1
    0.75, 0.8, -0.2,          0, 0, 0,    // Index:  2
    0.75, 0.7, -0.2,          0, 0, 0,    // Index:  3
    0.75, 0.7, -0.2,          0, 0, 0,    // Index:  3
    0.63, 0.5, -0.2,         0, 0, 0,    // Index:  4
    0.75, 0.5, -0.2,          0, 0, 0,    // Index:  5
    0.75, 0.5, -0.2,          0, 0, 0,    // Index:  6
    0.75, 0.4, -0.2,          0, 0, 0,    // Index:  7
    0.75, 0.4, -0.2,          0, 0, 0,    // Index:  7
    0.58, 0.4, -0.2,         0, 0, 0,    // Index:  8
    0.58, 0.4, -0.2,         0, 0, 0,    // Index:  8
    0.42, 0.15, -0.2,        0, 0, 0,    // Index:  9
    0.42, 0.15, -0.2,        0, 0, 0,    // Index:  9
    0.3, 0.15, -0.2,        0, 0, 0,    // Index:  10
    0.3, 0.15, -0.2,        0, 0, 0,    // Index:  1
    0.45, 0.4, -0.2,          0, 0, 0,    // Index:  11
    0.45, 0.4, -0.2,          0, 0, 0,    // Index:  11
    0.35, 0.4, -0.2,          0, 0, 0,    // Index:  12
    0.35, 0.4, -0.2,          0, 0, 0,    // Index:  12
    0.35, 0.5, -0.2,          0, 0, 0,    // Index:  13
    0.35, 0.5, -0.2,          0, 0, 0,    // Index:  13
    0.5, 0.5, -0.2,         0, 0, 0,    // Index:  14
    0.5, 0.5, -0.2,         0, 0, 0,    // Index:  14
    0.62, 0.7, -0.2,         0, 0, 0,    // Index:  15
    0.3, 0.7, -0.2,         0, 0, 0,    // Index:  16
  ]

  var indices7 = [
    // Num 7 Outer Front
    0, 1, 2,     0, 2, 3,
    4, 5, 6,     4, 6, 7,
    8, 9, 10,    8, 10, 11,
    12, 13, 14,  12, 14, 15,
    16, 17, 18,  16, 18, 19,
    20, 21, 22,  20, 22, 23,
    24, 25, 26,  24, 26, 27,
    28, 29, 30,  28, 30, 31,

    // Num 7 Outer Back
    32, 33, 34,  32, 34, 35,
    36, 37, 38,  36, 38, 39,
    40, 41, 42,  40, 42, 43,
    44, 45, 46,  44, 46, 47,
    48, 49, 50,  48, 50, 51,
    52, 53, 54,  52, 54, 55,
    56, 57
  ];

  var verticesN1 = [
    // Char N Outer Front    // Black
    -0.8, -0.8, 0.0,         0, 0, 0,    // Index:  0
    -0.7, -0.8, 0.0,         0, 0, 0,    // Index:  1
    -0.7, -0.15, 0.0,        0, 0, 0,    // Index:  2
    -0.8, -0.15, 0.0,        0, 0, 0,    // Index:  3

    // Char N Outer Back     // White
    -0.8, -0.8, -0.2,        1, 1, 1,    // Index:  4
    -0.7, -0.8, -0.2,        1, 1, 1,    // Index:  5
    -0.7, -0.15, -0.2,       1, 1, 1,    // Index:  6
    -0.8, -0.15, -0.2,       1, 1, 1,    // Index:  7
  ];

  var indicesN1 = [
    // Char N Outer Front
    0, 1, 2,     0, 2, 3,
    4, 5, 6,     4, 6, 7,
    8, 9, 10,    8, 10,

    // Char N Outer Back
    11, 12, 13,  11, 13, 14,
    15, 16, 17,  15, 18, 19,
    20, 21, 22,  20, 22,
  ];

  var verticesN2 = [
    // Char N Outer Front     // Black
    -0.35, -0.8, 0.0,         0, 0, 0,    // Index:  0
    -0.25, -0.8, 0.0,         0, 0, 0,    // Index:  1
    -0.25, -0.15, 0.0,        0, 0, 0,    // Index:  2
    -0.35, -0.15, 0.0,        0, 0, 0,    // Index:  3

    // Char N Outer Back      // White
    -0.35, -0.8, -0.2,         1, 1, 1,    // Index:  4
    -0.25, -0.8, -0.2,         1, 1, 1,    // Index:  5
    -0.25, -0.15, -0.2,        1, 1, 1,    // Index:  6
    -0.35, -0.15, -0.2,        1, 1, 1,    // Index:  7
  ];

  var indicesN2 = [
    // Char N Outer Front
    0, 1, 2,     0, 2, 3,
    4, 5, 6,     4, 6, 7,
    8, 9, 10,    8, 10,

    // Char N Outer Back
    11, 12, 13,  11, 13, 14,
    15, 16, 17,  15, 18, 19,
    20, 21, 22,  20, 22
  ];

  var verticesN3 = [
    // Char N Outer Front    // Black
    -0.8, -0.15, 0.0,        0, 0, 0,    // Index:  0
    -0.7, -0.15, 0.0,        0, 0, 0,    // Index:  1
    -0.25, -0.8, 0.0,        0, 0, 0,    // Index:  2
    -0.35, -0.8, 0.0,        0, 0, 0,    // Index:  3

    // Char N Outer Back     // White
    -0.8, -0.15, -0.2,        1, 1, 1,    // Index:  4
    -0.7, -0.15, -0.2,        1, 1, 1,    // Index:  5
    -0.25, -0.8, -0.2,        1, 1, 1,    // Index:  6
    -0.35, -0.8, -0.2,        1, 1, 1,    // Index:  7
  ];

  var indicesN3 = [
    // Char N Outer Front
    0, 1, 2,     0, 2, 3,
    4, 5, 6,     4, 6, 7,
    8, 9, 10,    8, 10,

    // Char N Outer Back
    11, 12, 13,  11, 13, 14,
    15, 16, 17,  15, 18, 19,
    20, 21, 22,  20, 22
  ];

  var verticesO = [
    // Char O Outer Front     // Black
    0.25, -0.25, 0.0,         0, 0, 0,    // Index:  0
    0.35, -0.15, 0.0,         0, 0, 0,    // Index:  1
    0.7, -0.15, 0.0,          0, 0, 0,    // Index:  2
    0.8, -0.25, 0.0,          0, 0, 0,    // Index:  3
    0.8, -0.7, 0.0,           0, 0, 0,    // Index:  4
    0.7, -0.7, 0.0,           0, 0, 0,    // Index:  5
    0.7, -0.25, 0.0,          0, 0, 0,    // Index:  6
    0.8, -0.25, 0.0,          0, 0, 0,    // Index:  7
    0.8, -0.7, 0.0,           0, 0, 0,    // Index:  8
    0.7, -0.8, 0.0,           0, 0, 0,    // Index:  9
    0.35, -0.8, 0.0,          0, 0, 0,    // Index:  10
    0.25, -0.7, 0.0,          0, 0, 0,    // Index:  11
    0.35, -0.7, 0.0,          0, 0, 0,    // Index:  12
    0.35, -0.25, 0.0,         0, 0, 0,    // Index:  13
    0.25, -0.25, 0.0,         0, 0, 0,    // Index:  14

    // Char O Outer Front     // White
    0.25, -0.25, -0.2,        1, 1, 1,    // Index:  15
    0.35, -0.15, -0.2,        1, 1, 1,    // Index:  16
    0.7, -0.15, -0.2,         1, 1, 1,    // Index:  17
    0.8, -0.25, -0.2,         1, 1, 1,    // Index:  18
    0.8, -0.7, -0.2,          1, 1, 1,    // Index:  19
    0.7, -0.7, -0.2,          1, 1, 1,    // Index:  20
    0.7, -0.25, -0.2,         1, 1, 1,    // Index:  21
    0.8, -0.25, -0.2,         1, 1, 1,    // Index:  22
    0.8, -0.7, -0.2,          1, 1, 1,    // Index:  23
    0.7, -0.8, -0.2,          1, 1, 1,    // Index:  24
    0.35, -0.8, -0.2,         1, 1, 1,    // Index:  25
    0.25, -0.7, -0.2,         1, 1, 1,    // Index:  26
    0.35, -0.7, -0.2,         1, 1, 1,    // Index:  27
    0.35, -0.25, -0.2,        1, 1, 1,    // Index:  28
    0.25, -0.25, -0.2,        1, 1, 1,    // Index:  29
    0.35, -0.25, -0.2,        1, 1, 1,    // Index:  30
    0.35, -0.7, -0.2,         1, 1, 1,    // Index:  31
    0.25, -0.7, -0.2,         1, 1, 1,    // Index:  32
    0.25, -0.25, -0.2,        1, 1, 1,    // Index:  33
  ];

  var indicesO = [
    // Char O Outer Front
    0, 1, 2,     0, 2, 3,
    4, 5, 6,     4, 6, 7,
    8, 9, 10,    8, 10, 11,
    11, 12, 13,  11, 13, 14,
    15, 16, 17,  15, 17, 18,
    19, 20, 21,  19, 21, 22,

    // Char O Outer Back
    23, 24, 25,  23, 25, 26,
    27, 28, 29,  27, 29, 30,
    31, 32, 33,  31, 33, 34,
    35, 36, 37,  35, 37, 38,
    39, 40,
  ];

  var verticesCube = [
    1.0, 1.0, 1.0,    1.0, 1.0, 1.0,
    -1.0, 1.0, 1.0,   1.0, 1.0, 1.0,
    -1.0,-1.0, 1.0,   1.0, 1.0, 1.0,
     1.0,-1.0, 1.0,   1.0, 1.0, 1.0,

     1.0, 1.0, 1.0,   1.0, 1.0, 1.0,
     1.0,-1.0, 1.0,   1.0, 1.0, 1.0,
     1.0,-1.0,-1.0,   1.0, 1.0, 1.0,
     1.0, 1.0,-1.0,   1.0, 1.0, 1.0,

     1.0, 1.0, 1.0,   1.0, 1.0, 1.0,
     1.0, 1.0,-1.0,   1.0, 1.0, 1.0,
    -1.0, 1.0,-1.0,   1.0, 1.0, 1.0,
    -1.0, 1.0, 1.0,   1.0, 1.0, 1.0,

    -1.0, 1.0, 1.0,   1.0, 1.0, 1.0,
    -1.0, 1.0,-1.0,   1.0, 1.0, 1.0,
    -1.0,-1.0,-1.0,   1.0, 1.0, 1.0,
    -1.0,-1.0, 1.0,   1.0, 1.0, 1.0,

    -1.0,-1.0,-1.0,   1.0, 1.0, 1.0,
     1.0,-1.0,-1.0,   1.0, 1.0, 1.0,
     1.0,-1.0, 1.0,   1.0, 1.0, 1.0,
    -1.0,-1.0, 1.0,   1.0, 1.0, 1.0,

     1.0,-1.0,-1.0,   1.0, 1.0, 1.0,
    -1.0,-1.0,-1.0,   1.0, 1.0, 1.0,
    -1.0, 1.0,-1.0,   1.0, 1.0, 1.0,
     1.0, 1.0,-1.0,   1.0, 1.0, 1.0,
  ];

  var indicesCube = [
    0, 1, 2,   0, 2, 3,
    4, 5, 6,   4, 6, 7,
    8, 9,10,   8,10,11,
    12,13,14,  12,14,15,
    16,17,18,  16,18,19,
    20,21,22,  20,22,23,
    24, 25, 26, 24, 26, 27,
    28, 29, 30, 28, 30, 31
  ];

  var objects = [
    {
      name: '9',
      vertices: vertices9,
      indices: indices9,
      length: 20,
      type: gl.LINE_LOOP,
    },
    {
      name: '9',
      vertices: vertices91,
      indices: indices91,
      length: 6,
      type: gl.LINE_LOOP,
    },
    {
      name: '7',
      vertices: vertices7,
      indices: indices7,
      length: 16,
      type: gl.LINE_LOOP,
    },
    {
      name: 'N1',
      vertices: verticesN1,
      indices: indicesN1,
      length: 14,
      type: gl.TRIANGLES,
    },
    {
      name: 'N2',
      vertices: verticesN2,
      indices: indicesN2,
      length: 14,
      type: gl.TRIANGLES,
    },
    {
      name: 'N3',
      vertices: verticesN3,
      indices: indicesN3,
      length: 14,
      type: gl.TRIANGLES,
    },
    {
      name: 'O1',
      vertices: verticesO,
      indices: indicesO,
      length: 7,
      type: gl.TRIANGLES,
    },
    {
      name: 'Cube',
      vertices: verticesCube,
      indices: indicesCube,
      length: 12,
      type: gl.TRIANGLES,
    }
  ]

  // var buffer = gl.createBuffer();
  // gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  // var indexBuffer = gl.createBuffer();
  // gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  // gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

  // Vertex shader
  var vertexShaderCode =  `
  attribute vec3 aPosition;
  attribute vec3 aColor;
  uniform mat4 uModel;
  uniform mat4 uView;
  uniform mat4 uProjection;
  varying vec3 vColor;
  void main() {
      gl_Position = uProjection * uView * uModel * vec4(aPosition, 1.0);
      vColor = aColor;
  }
  `;
  var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShaderObject, vertexShaderCode);
  gl.compileShader(vertexShaderObject);   // sampai sini sudah jadi .o

  // Fragment shader
  var fragmentShaderCode = `
  precision mediump float;
  varying vec3 vColor;
  void main() {
      gl_FragColor = vec4(vColor, 1.0);
  }
  `;
  var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
  gl.compileShader(fragmentShaderObject);   // sampai sini sudah jadi .o

  var shaderProgram = gl.createProgram(); // wadah dari executable (.exe)
  gl.attachShader(shaderProgram, vertexShaderObject);
  gl.attachShader(shaderProgram, fragmentShaderObject);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);

  // Variabel lokal
  var theta = 0.0;
  var freeze = false;
  var frameWidth = 9;
  var horizontalSpeed = 0.0097; // NRP akhir 097
  var verticalSpeed = 0.0;
  var horizontalDelta = 0.0;
  var verticalDelta = 0.0;
  var scaleDelta = 0.0;
  var scaleSpeed = 0.05;
  var freezeN = 0;
  var freezeO = 0;
  var thetaX = 0.0;
  var thetaY = 0.0;
  var thetaZ = -20;

  // Variabel pointer ke GLSL
  var uModel = gl.getUniformLocation(shaderProgram, "uModel");
  // View
  var cameraX = 0.0;
  var cameraZ = 7.5;
  var uView = gl.getUniformLocation(shaderProgram, "uView");
  var view = mat4.create();
  mat4.lookAt(
      view,
      [cameraX, 0.0, cameraZ],    // the location of the eye or the camera
      [cameraX, 0.0, -10],        // the point where the camera look at
      [0.0, 1.0, 0.0]
  );
  // Projection
  var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
  var perspective = mat4.create();
  
  mat4.perspective(perspective, Math.PI/3, 1.0, 0.5, 50);

  function drawing (vertices, indices, start=0, end, glType) { 
    const buffer = gl.createBuffer();
    const indexBuffer = gl.createBuffer();

    // bind buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    
    const aPosition = gl.getAttribLocation(shaderProgram, 'aPosition');
    const aColor = gl.getAttribLocation(shaderProgram, 'aColor');
    // variable pointer ke GLSL
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 
        6 * Float32Array.BYTES_PER_ELEMENT, 
        0 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aPosition);
    
    // gl.drawArrays(glType, start, end);
    
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 
        6 * Float32Array.BYTES_PER_ELEMENT, 
        3 * Float32Array.BYTES_PER_ELEMENT 
        );
    gl.enableVertexAttribArray(aColor);
    
    gl.drawElements(glType, indices.length - 11, gl.UNSIGNED_SHORT, 0);
  }

  function animate9(i) {
    var model = mat4.create();

    if (horizontalDelta >= (frameWidth/2) || horizontalDelta <= (-frameWidth/2+1)) {
        horizontalSpeed = horizontalSpeed * -1;
    }
    horizontalDelta += horizontalSpeed;
    mat4.translate(model, model, [horizontalDelta, verticalDelta, 0.0]);
    
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection"); 
    gl.uniformMatrix4fv(uModel,false, model);
    gl.uniformMatrix4fv(uView, false, view);
    gl.uniformMatrix4fv(uProjection, false, perspective);
    drawing(objects[i].vertices, objects[i].indices, 0, objects[i].length, objects[i].type);
  }

  function animate7(i) {
    var model = mat4.create();

    if (scaleDelta >= 2 || scaleDelta <= -0.5) {
        scaleSpeed = scaleSpeed * -1;
    }
    scaleDelta += scaleSpeed;
    mat4.translate(model, model, [0, 0, scaleDelta]);
    
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection"); 
    gl.uniformMatrix4fv(uModel,false, model);
    gl.uniformMatrix4fv(uView, false, view);
    gl.uniformMatrix4fv(uProjection, false, perspective);
    drawing(objects[i].vertices, objects[i].indices, 0, objects[i].length, objects[i].type);
  }

  var freezeC = 0;
  var freezeC1 = 0;

  function onKeyDown(event) {
    if (event.keyCode == 37) { // left arrow
      freezeN = 1;
    } else if (event.keyCode == 39) { // right arrow
      freezeN = 2;
    } else if (event.keyCode == 38) { // up arrow
      freezeO = 1;
    } else if (event.keyCode == 40) { // down arrow
      freezeO = 2;
    } else if (event.keyCode == 74) {
      freezeC = 1;
    } else if (event.keyCode == 76) {
      freezeC = 2;
    } else if (event.keyCode == 73) {
      freezeC1 = 1;
    }  else if (event.keyCode == 75) {
      freezeC1 = 2;
    }
  }

  function onKeyUp(event) {
    if (event.keyCode == 37) {
      freezeN = 0;
    } else if (event.keyCode == 39) {
      freezeN = 0;
    } else if (event.keyCode == 38) {
      freezeO = 0;
    } else if (event.keyCode == 40) {
      freezeO = 0;
    } else if (event.keyCode == 74) {
      freezeC = 0;
    } else if (event.keyCode == 76) {
      freezeC = 0;
    } else if (event.keyCode == 73) {
      freezeC1 = 0;
    }  else if (event.keyCode == 75) {
      freezeC1 = 0;
    }
  }

  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("keyup", onKeyUp)

  function animateN(i)  {
    var modely = mat4.create();
    mat4.rotateY(modely, modely, thetaY);

    if (freezeN == 1) {
      thetaY -= 0.01;
    } else if (freezeN == 2) {
      thetaY += 0.01;
    }

    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    gl.uniformMatrix4fv(uModel, false, modely);
    gl.uniformMatrix4fv(uView, false, view);
    gl.uniformMatrix4fv(uProjection, false, perspective);
    drawing(objects[i].vertices, objects[i].indices, 0, objects[i].length, objects[i].type);
  }

  function animateO(i) {
    var modelx = mat4.create();
    mat4.rotateX(modelx, modelx, thetaX);
    if (freezeO == 1) {
      thetaX -= 0.05;
    } else if (freezeO == 2) {
      thetaX += 0.05;
    }

    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    gl.uniformMatrix4fv(uModel, false, modelx);
    gl.uniformMatrix4fv(uView, false, view);
    gl.uniformMatrix4fv(uProjection, false, perspective);
    drawing(objects[i].vertices, objects[i].indices, 0, objects[i].length, objects[i].type);
  }

  function animateCube(i) {
    var modelx = mat4.create();
    mat4.translate(modelx, modelx, [0, 0, thetaZ]);

    if (freezeC == 1) {
      thetaX -= 0.05;
    } else if (freezeC == 2) {
      thetaX += 0.05;
    }

    if (freezeC1 == 1) {
      thetaZ += 0.05;
    } else if (freezeC1 == 2) {
      thetaZ -= 0.05;
    }

    if (thetaX >= (frameWidth+5) || thetaX <= (-frameWidth-5)) {
      freezeC = 0;
  }

    mat4.translate(modelx, modelx, [thetaX, 0, 0]);

    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    gl.uniformMatrix4fv(uModel, false, modelx);
    gl.uniformMatrix4fv(uView, false, view);
    gl.uniformMatrix4fv(uProjection, false, perspective);
    drawing(objects[i].vertices, objects[i].indices, 0, objects[i].length, objects[i].type);
  }

  // Kita mengajari GPU bagaimana caranya mengoleksi
  //  nilai posisi dari ARRAY_BUFFER
  //  untuk setiap verteks yang sedang diproses
  var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
  gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 
      6 * Float32Array.BYTES_PER_ELEMENT, 
      0);
  gl.enableVertexAttribArray(aPosition);
  var aColor = gl.getAttribLocation(shaderProgram, "aColor");
  gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 
      6 * Float32Array.BYTES_PER_ELEMENT, 
      3 * Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(aColor);

  // Grafika interaktif
  // Tetikus
  function onMouseClick(event) {
      freeze = !freeze;
  }
  document.addEventListener("click", onMouseClick);
  // Papan ketuk
  function onKeydown(event) {
      if (event.keyCode == 32) freeze = !freeze;  // spasi
      // Gerakan horizontal: a ke kiri, d ke kanan
      if (event.keyCode == 65) {  // a
          horizontalSpeed = -0.01;
      } else if (event.keyCode == 68) {   // d
          horizontalSpeed = 0.01;
      }
      // Gerakan vertikal: w ke atas, s ke bawah
      if (event.keyCode == 87) {  // w
          verticalSpeed = -0.01;
      } else if (event.keyCode == 83) {   // s
          verticalSpeed = 0.01;
      }
  }
  function onKeyup(event) {
      if (event.keyCode == 32) freeze = !freeze;
      if (event.keyCode == 65 || event.keyCode == 68) horizontalSpeed = 0.0;
      if (event.keyCode == 87 || event.keyCode == 83) verticalSpeed = 0.0;
  }
  document.addEventListener("keydown", onKeydown);
  document.addEventListener("keyup", onKeyup);

  function render() {
      gl.enable(gl.DEPTH_TEST);
      gl.clearColor(1.0,      0.65,    0.0,    1.0);  // Oranye
      //            Merah     Hijau   Biru    Transparansi
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      // if (!freeze) {
      //     theta += 0.005;
      // }
      // horizontalDelta += horizontalSpeed;
      // verticalDelta -= verticalSpeed;
      // var model = mat4.create(); // Membuat matriks identitas
      // mat4.translate(
      //     model, model, [horizontalDelta, verticalDelta, 0.0]
      // );
      // mat4.rotateX(
      //     model, model, theta
      // );
      // mat4.rotateY(
      //     model, model, theta
      // );
      // mat4.rotateZ(
      //     model, model, theta
      // );
      // gl.uniformMatrix4fv(uModel, false, model);
      // gl.uniformMatrix4fv(uView, false, view);
      // gl.uniformMatrix4fv(uProjection, false, perspective);
      // gl.drawElements(gl.LINE_LOOP, indices.length, gl.UNSIGNED_SHORT, 0);
      // animate9(0);
      // animate9(1);
      animate7(2);
      animateN(3);
      animateN(4);
      animateN(5);
      // animateO(6);
      animateCube(7);
      requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
