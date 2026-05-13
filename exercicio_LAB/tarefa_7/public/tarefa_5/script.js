//Canvas 1
let canvas1 = document.getElementById('canvas1');
let ctx1 = canvas1.getContext('2d');

function desenhar_quadrado1(x, y, cor, largura, altura){
    ctx1.fillStyle = cor;
    ctx1.fillRect(x, y, largura, altura);
}

function desenhar_linha1(xInicial, yInicial, cor, xFinal, yFinal){
    ctx1.beginPath();
    ctx1.strokeStyle = cor;
    ctx1.lineWidth = 1;
    ctx1.moveTo(xInicial, yInicial);
    ctx1.lineTo(xFinal, yFinal);
    ctx1.stroke();
}

function desenhar_arco1(x, y, raio, corDentro, corLinha,  anguloIncio, anguloFinal, espessuraLinha){
    ctx1.beginPath();
    ctx1.lineWidth = espessuraLinha;
    ctx1.fillStyle = corDentro;
    ctx1.strokeStyle = corLinha;
    ctx1.arc(x, y, raio, anguloIncio*(Math.PI/180), anguloFinal*(Math.PI/180));
    ctx1.fill();
    ctx1.stroke();
    ctx1.closePath();
}

function escrever(x, y, cor, texto){
    ctx1.beginPath();
    ctx1.fillStyle = cor;
    ctx1.font = '20px Arial';
    ctx1.textAlign = 'center';
    ctx1.fillText(texto,x, y);
    ctx1.closePath();
}

desenhar_quadrado1(0, 0, 'blue', 60, 60);
desenhar_quadrado1(240, 0, 'red', 60, 60);
desenhar_arco1(150, 150, 80, 'white', 'green', 180, 360, 1);
desenhar_arco1(150, 150, 80, 'white', 'white', 225, 315, 3);
desenhar_arco1(150, 150, 60, 'white', 'green', 180, 360, 1);
desenhar_quadrado1(0, 120, 'aqua', 30, 60);
desenhar_quadrado1(270, 135, 'aqua', 30, 30);
desenhar_quadrado1(0, 150, 'green', 300, 1);
desenhar_quadrado1(150, 150, 'black', 1, 110);
desenhar_quadrado1(110, 151, 'red', 40, 40);
desenhar_quadrado1(0, 250, 'yellow', 25, 40);
desenhar_quadrado1(0, 275, 'yellow', 50, 25);
desenhar_quadrado1(275, 250, 'black', 25, 50);
desenhar_quadrado1(250, 275, 'black', 50, 25);
desenhar_linha1(0, 0, 'blue', 150, 150);
desenhar_linha1(300, 0, 'red', 150, 150);
desenhar_arco1(150, 115, 15, 'aqua', 'blue', 0, 360, 1);
desenhar_arco1(70, 230, 15, 'yellow', 'green', 0, 360, 1);
desenhar_arco1(230, 230, 15, 'yellow', 'green', 0, 360, 1);
desenhar_arco1(150, 300, 40, 'aqua', 'green', 180, 360, 1);
desenhar_arco1(150, 300, 80, 'white', 'green', 180, 270, 1);
desenhar_arco1(150, 300, 60, 'white', 'green', 270, 360, 1);
escrever(150, 50, 'black', 'Canvas');

//Canvas 2
let canvas2 = document.getElementById('canvas2');
let ctx = canvas2.getContext('2d');

function desenhar_quadrado(x, y, cor, largura, altura){
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
}

function desenhar_linha(x, y, cor, tamanho){
    ctx.fillStyle = cor;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+tamanho / 2, y + tamanho-30);
    ctx.lineTo(x-tamanho / 2, y + tamanho-30);
    ctx.closePath();
    ctx.fill();
}

function desenhar_arco(x, y, raio, cor, anguloIncio, anguloFinal){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.arc(x, y, raio, anguloIncio*(Math.PI/180), anguloFinal*(Math.PI/180));
    ctx.fill();
    ctx.closePath();
}

desenhar_quadrado(0, 200, 'gray', 300, 100);
desenhar_quadrado(110, 120, 'brown', 80, 80);
desenhar_quadrado(140, 160, 'black', 20, 40);
desenhar_quadrado(120, 140, 'aqua', 20, 20);
desenhar_quadrado(160, 140, 'aqua', 20, 20);
desenhar_linha(150, 70, 'coral', 80);
desenhar_quadrado(50, 160, 'brown', 20, 40);
desenhar_quadrado(250, 220, 'brown', 20, 40);
desenhar_arco(60, 140, 25, 'green', 0, 360);
desenhar_arco(260, 200, 25, 'green', 0, 360);
desenhar_arco(0, 190, 50, 'royalblue', -90, -270);
desenhar_arco(120, 300, 46, 'royalblue', -90, -270);
desenhar_arco(240, 60, 40, 'yellow', 0, 360);
desenhar_quadrado(0, 200, 'royalblue', 50, 100);
desenhar_quadrado(0, 255, 'royalblue', 130, 45);


