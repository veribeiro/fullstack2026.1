let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let alma = {
    x: 0,
    y: 100,
    raio: 20,
    img: new Image(),
    desenha: function(){
        this.img.src='alma.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x-alma.raio, this.y-alma.raio, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}

function animacao(){
    ctx.clearRect(0,0,300,300)
    alma.desenha();
    requestAnimationFrame(animacao);
}

document.addEventListener('mousemove', function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse, y_mouse);

    if(x_mouse>0+alma.raio && x_mouse<300-alma.raio && y_mouse>0+alma.raio && y_mouse<300-alma.raio){
        alma.x=x_mouse;
        alma.y=y_mouse;
    }
    else{
        alma.x = alma.x
        alma.y = alma.y
    }
})

animacao();