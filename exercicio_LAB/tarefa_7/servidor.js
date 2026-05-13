// inclui o módulo http
var http = require('http');
// inclui o módulo express
var colors = require('colors');
var express = require('express') ;

// cria a variável app, pela qual acessaremos
// os métodos / funções existentes no framework
// express
var app = express () ;

// método use() utilizado para definir em qual
// pasta estará o conteúdo estático
app. use (express. static ('./public/tarefa_1_e_2' ));

app.get('/', (req, res) => {
    // __dirname garante que o Node encontre o caminho absoluto da pasta
    res.sendFile(__dirname + '/public/tarefa_1_e_2/projects.html');
});

// cria o servidor
var server = http.createServer(app);

// define o número da porta que o servidor ouvirá
server.listen(80);

// mensagem exibida no console para debug
console. log("servidor rodando. .. ".rainbow) ;