let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//retângulos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(10,10,50,50);
ctx.strokeRect(10,10,50,50);
ctx.closePath();


// arcos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.moveTo(200,200);
ctx.arc(200,200,50,1.75*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// texto
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.font = "90px Arial"
ctx.textAlign = "center";
ctx.fillText("Olá",200,350);
ctx.strokeText("Olá",200,350)
ctx.closePath();