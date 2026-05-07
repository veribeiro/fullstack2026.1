var http = require('http');
var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log('Servidor rodando ...'.rainbow);

app.get('/', function (requisicao, resposta){
resposta.redirect('Login.html')
})

app.get('/blog', function (requisicao, resposta){
var nome = requisicao.query.info;
var senha = requisicao.query.password;
console.log(nome);
resposta.render('resposta_login', {nome, senha})
})

app.get('/cadastro',function (requisicao, resposta){
var nome = requisicao.query.nome;
var sobrenome = requisicao.query.sobrenome;
var nascimento = requisicao.query.nascimento;
var civil = requisicao.query.civil;
var senha = requisicao.query.info;

resposta.render('resposta_cadastro', {nome, sobrenome, nascimento, civil, senha})
})