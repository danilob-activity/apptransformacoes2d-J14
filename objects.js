//predefined colors
white = "#ffffff";
black = "#000000"

function Box(center = [0, 0, 1], height = 50, width = 50) {
    this.center = center;
    this.height = height;
    this.width = width;
    this.T = identity(); //matriz 3x3 de translação 
    this.R = identity(); //matriz 3x3 de rotação
    this.S = identity(); //matriz 3x3 de escala
    this.fill = white; //cor de preenchimento -> aceita cor hex, ex.: this.fill = "#4592af"
    this.stroke = black; //cor da borda -> aceita cor hex, ex.: this.stroke = "#a34a28"
    this.name = "";
}


Box.prototype.setName = function(name) {
    this.name = name;
}

Box.prototype.setTranslate = function(x, y) {
    this.T = translate(x, y);
}

//TODO: Aplicar matriz de rotação
Box.prototype.setRotate = function(theta) {}

//TODO: Aplicar matriz de escala
Box.prototype.setScale = function(x, y) {}

Box.prototype.draw = function(canvas = ctx) { //requer o contexto de desenho
    //pega matriz de tranformação de coordenadas canônicas para coordenadas do canvas
    var M = transformCanvas(WIDTH, HEIGHT);
    var Mg = mult(M, mult(mult(this.R, this.S), this.T));
    canvas.lineWidth = 2; //largura da borda
    canvas.strokeStyle = this.stroke;
    canvas.fillStyle = this.fill;
    //criação dos pontos do retângulo de acordo com o centro, largura e altura
    var points = [];
    points.push([this.center[0] + this.width / 2, this.center[1] + this.height / 2, 1]);
    points.push([this.center[0] - this.width / 2, this.center[1] + this.height / 2, 1]);
    points.push([this.center[0] - this.width / 2, this.center[1] - this.height / 2, 1]);
    points.push([this.center[0] + this.width / 2, this.center[1] - this.height / 2, 1]);

    ctx.beginPath();
    for (i = 0; i < points.length; i++) {
        points[i] = multVec(Mg, points[i]); //transformando o ponto em coordenadas canonicas em coordenadas do canvas
        if (i == 0) canvas.moveTo(points[i][0], points[i][1]);
        else canvas.lineTo(points[i][0], points[i][1]);
    }
    canvas.lineTo(points[0][0], points[0][1]); //fechando o retângulo
    canvas.fill(); //aplica cor de preenchimento
    canvas.strokeStyle = this.stroke;
    canvas.stroke(); //aplica cor de contorno

    //desenho do nome
    canvas.beginPath();
    canvas.fillStyle = this.stroke;
    canvas.font = "16px Courier";
    var center = multVec(Mg, this.center);
    canvas.fillText(this.name, center[0] - this.name.length * 16 / 3, center[1] + 3); //deixa o texto mais ou menos centralizado no meio da caixa

}

//TODO: Faça o objeto Circulo implementando as mesmas funcões e atributos que a caixa possui
//      porém os valores básicos são o centro e o raio do circulo