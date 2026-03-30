
function DarAviso(){
var x = document.getElementById("number").value;

var y = Math.floor(Math.random()*100);

if(x==y){
    console.log("São iguais");
    document.getElementById("fundo").style.setProperty("background-color","green");
}else if(x<y){
   console.log("São diferentes");
   document.getElementById("fundo").style.setProperty("background-color","red"); 
   console.log("O número aleatório seria "+ y);
}else if(x>y){
   console.log("São diferentes");
   document.getElementById("fundo").style.setProperty("background-color","red"); 
   console.log("O número aleatório seria "+ y);
}else{
    console.log("Algo deu errado");
}
}