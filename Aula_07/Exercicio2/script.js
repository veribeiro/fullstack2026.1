let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//retângulos
ctx.beginPath();
ctx.fillStyle = 'gray';
ctx.fillRect(0,300,400,100);
ctx.closePath();

//retângulos
ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(140,200,100,100);
ctx.closePath();

//porta
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(175,250,30,50);
ctx.closePath();

//janela
ctx.beginPath();
ctx.fillStyle = 'aqua';
ctx.fillRect(145,225,30,30);
ctx.closePath();

//janela
ctx.beginPath();
ctx.fillStyle = 'aqua';
ctx.fillRect(205,225,30,30);
ctx.closePath();

//telhado
ctx.beginPath();
ctx.fillStyle = 'coral';
ctx.moveTo(140,200); //onde começou a casa
ctx.lineTo(140+50,200-50);
ctx.lineTo(140+50+50,200-50+50);
ctx.fill();
ctx.closePath();

//coordenada da casa: ctx.fillRect(140,200,100,100);

// sol
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(300,100,50,4.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.closePath();

//tronco
ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(60,240,20,60);
ctx.closePath();

//folha
ctx.beginPath();
ctx.fillStyle = 'green';
ctx.arc(70,230,30,4.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.closePath();
ctx.closePath();

//tronco
ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(330,290,20,60);
ctx.closePath();

//folha
ctx.beginPath();
ctx.fillStyle = 'green';
ctx.arc(340,270,30,4.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.closePath();
ctx.closePath();

//azul
ctx.beginPath();
ctx.fillStyle = 'royalblue';
ctx.arc(0,290,51,3.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.closePath();
ctx.closePath();

//retângulos
ctx.beginPath();
ctx.fillStyle = 'royalblue';
ctx.fillRect(0,300,50,100);
ctx.closePath();

//azul
ctx.beginPath();
ctx.fillStyle = 'royalblue';
ctx.arc(160,400,60,3.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.closePath();

//retângulos
ctx.beginPath();
ctx.fillStyle = 'royalblue';
ctx.fillRect(0,340,170,70);
ctx.closePath();

