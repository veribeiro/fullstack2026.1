function DarAlerta(texto){
    var texticulo = document.getElementById("texticulo").value
    window.alert("Seu amigo é a "+texticulo);
}


DarAlerta("Conteúdo da variável que eu quis dar");

window.alert('ESTE É UM ALERTA');

console.log("Esta mensagem está escondida");

var entrada = prompt("Entre com a sua idade");

console.log(entrada);

entrada = parseInt(entrada);

if (entrada>=18){
    console.log("Você é de maior");
    document.getElementById("testeID").innerHTML="Você é de maior";
    document.getElementById("bodinho").style.setProperty("background-color","red");
}else if(entrada<18){
    console.log("Você é de menor");
}else{
    console.log("Inválido");
}