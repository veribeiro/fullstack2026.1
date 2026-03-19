var x = document.getElementById("number").value;

var y = Math.floor(Math.random());

DarAviso(){
if(x==y){
    console.log("São iguais");
    document.getElementById("fundo").style.setProperty("background-color","green");
}else if(x<y){
   console.log("São diferentes");
   document.getElementById("fundo").style.setProperty("background-color","red"); 
}else if(x>y){
   console.log("São diferentes");
   document.getElementById("fundo").style.setProperty("background-color","red"); 
}else{
    console.log("Algo deu errado");
}
}