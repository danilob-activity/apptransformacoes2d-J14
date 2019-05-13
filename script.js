const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var textarea = document.getElementById("code");
var code = textarea.value;
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

//faz o desenho do triângulo
function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    eval(textarea.value);
    drawAxis();
}

function drawAxis() {
    ctx.strokeStyle = "#f3c1c6";
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.setLineDash([1, 1]);
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);


}

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);