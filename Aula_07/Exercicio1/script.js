let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//bloco azul
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(0,0,60,60);
ctx.closePath();

//bloco vermelho
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.fillRect(340,0,60,60);
ctx.closePath();

// texto
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.font = "30px Arial"
ctx.textAlign = "center";
ctx.fillText("Canvas",200,100);
ctx.closePath();

//linha
ctx.beginPath();
ctx.fillStyle = 'green';
ctx.fillRect(0,200,400,3);
ctx.closePath();

//linha
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.moveTo(200,200);
ctx.lineTo(60,60);
ctx.fill();
ctx.stroke();
ctx.closePath();

//linha
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(100,300);
ctx.lineTo(400,400);
ctx.fill();
ctx.stroke();
ctx.closePath();