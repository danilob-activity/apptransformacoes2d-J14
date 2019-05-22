function translate(x, y) { // dado dois pontos, x e y constroi a matriz homogenea de translação 
    return [
        [1, 0, x],
        [0, 1, y],
        [0, 0, 1]
    ]; //retorna matriz 3x3
}

//TODO: dado dois pontos, x e y constroi a matriz homogenea de translação 3x3
function scale(x, y) {
    return [
        [x, 0, 0],
        [0, y, 0],
        [0, 0, 1]
    ];
}

//TODO: dado um angulo theta em graus constroi a matriz homogenea de rotação 3x3
function rotate(theta) {
    let radians = theta * Math.PI / 180;
    return [
        [Math.cos(radians), -Math.sin(radians), 0],
        [Math.sin(radians), Math.cos(radians), 0],
        [0, 0, 1]
    ];
}

function identity(v = 1) { // identidade
    return [
        [1 * v, 0, 0],
        [0, 1 * v, 0],
        [0, 0, 1 * v]
    ]; //retorna matriz 3x3
}

function transformCanvas(Width, Height) {
    return [
        [1, 0, Width / 2.],
        [0, -1, Height / 2.],
        [0, 0, 1]
    ];
}


function mult(a, b) {
    var aNumRows = a.length,
        aNumCols = a[0].length,
        bNumRows = b.length,
        bNumCols = b[0].length,
        m = new Array(aNumRows); // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
        m[r] = new Array(bNumCols); // initialize the current row
        for (var c = 0; c < bNumCols; ++c) {
            m[r][c] = 0; // initialize the current cell
            for (var i = 0; i < aNumCols; ++i) {
                m[r][c] += a[r][i] * b[i][c];
            }
        }
    }
    return m;
}

function multVec(A, b) { //multiplicação de uma matriz (3x3) e um vetor
    var C = [0, 0, 0];
    var i;
    var j;
    for (i = 0; i < 3; i++) {
        C[i] = A[i][0] * b[0] + A[i][1] * b[1] + A[i][2] * b[2];
    }
    return C; //retorna um vetor
}

function calcDeterminantTriangle(p0, p1, p2) {
    //ToDO: nesta função realize o cálculo da area do triangulo utilizando determinante
    //ToDO: nesta função realize o cálculo da area do triangulo utilizando determinante
    var A = [
        [p0[0], p0[1], 1],
        [p1[0], p1[1], 1],
        [p2[0], p2[1], 1]
    ];

    var area = 0.5 * (((A[0][0] * A[1][1]) + (A[0][1] * A[2][0]) + (A[1][0] * A[2][1])) -
        ((A[1][1] * A[2][0]) + (A[0][1] * A[1][0]) + (A[0][0] * A[2][1])));

    if (area < 0) return -area;
    return area;
}