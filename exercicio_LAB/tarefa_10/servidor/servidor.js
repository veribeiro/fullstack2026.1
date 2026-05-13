const http = require("http");
const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');
var mongodb = require("mongodb");

// Configurações
var app = express();
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs')
app.set('views', './views');

// URI - Se for usar local, mantenha esta. Se for Atlas, troque pela sua string.
const { MongoClient, ObjectId } = require("mongodb");
const uri = "mongodb://veribeiro0:vtH%5E%26%21161114@ac-nopcm4b-shard-00-00.yqjfy2q.mongodb.net:27017,ac-nopcm4b-shard-00-01.yqjfy2q.mongodb.net:27017,ac-nopcm4b-shard-00-02.yqjfy2q.mongodb.net:27017/?ssl=true&replicaSet=atlas-701i41-shard-0&authSource=admin&appName=Cluster0"; 
const client = new MongoClient(uri);

var server = http.createServer(app);
server.listen(80);

console.log("Servidor rodando ...".rainbow);

let db;

async function conectarBanco() {
  try {
    await client.connect();
    db = client.db("meuBanco"); // nome do seu banco
    console.log("Conectado ao banco de dados!");
  } catch (erro) {
    console.error("Erro ao conectar:", erro);
  }
}

conectarBanco();

// Página inicial (login)
app.get("/", (req, res) => {
  res.render("login");
});

// Página de cadastro de usuário
app.get("/cadastro", (req, res) => {
  res.render("cadastro_usuario");
});

app.post("/salvar_usuario", async (req, res) => {
  const usuario = {
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha
  };

  await db.collection("usuarios").insertOne(usuario);
  res.render("resposta", { mensagem: "Usuário cadastrado com sucesso!" });
});

// Exemplo de rota de login
app.post("/login", async (req, res) => {
  try {
    const usuario = await db.collection("usuarios").findOne({ login: req.body.login });

    if (!usuario) {
      return res.render("resposta", { mensagem: "Usuário não encontrado!", destino: "/login" });
    }

    if (usuario.senha !== req.body.senha) {
      return res.render("resposta", { mensagem: "Senha incorreta!", destino: "/login" });
    }

    res.render("resposta", { mensagem: `Bem-vindo, ${usuario.nome}!`, destino: "/listar" });
  } catch (erro) {
    console.error("Erro na rota /login:", erro);
    res.render("resposta", { mensagem: "Erro interno no servidor.", destino: "/login" });
  }
});

// Página de login (GET)
app.get("/login", (req, res) => {
  res.render("login");
});

// Página de listagem dos carros
app.get("/listar", async (req, res) => {
  const carros = await db.collection("carros").find({}).toArray();
  res.render("listar_carros", { lista_carros: carros });
});

// Página de gerenciamento dos carros
app.get("/gerenciar", async (req, res) => {
  const carros = await db.collection("carros").find({}).toArray();
  res.render("gerenciar_carros", { lista_carros: carros });
});

// Cadastrar novo carro
app.post("/cadastrar_carro", async (req, res) => {
  await db.collection("carros").insertOne({
    modelo: req.body.modelo,
    marca: req.body.marca,
    ano: parseInt(req.body.ano),
    quantidade: parseInt(req.body.quantidade)
  });
  res.render("resposta", { mensagem: "Carro cadastrado com sucesso!" });
});

// Remover carro
app.post("/remover_carro", async (req, res) => {
  await db.collection("carros").deleteOne({ _id: new ObjectId(req.body.id) });
  res.render("resposta", { mensagem: "Carro removido com sucesso!" });
});

// Atualizar carro
app.post("/atualizar_carro", async (req, res) => {
  await db.collection("carros").updateOne(
    { _id: new ObjectId(req.body.id) },
    { $set: { nome: req.body.modelo, marca: req.body.marca, ano: parseInt(req.body.ano), quantidade: parseInt(req.body.quantidade) } }
  );
  res.render("resposta", { mensagem: "Carro atualizado com sucesso!" });
});

// Vender carro
app.post("/vender_carro", async (req, res) => {
  const carro = await db.collection("carros").findOne({ _id: new ObjectId(req.body.id) });
  if (carro.quantidade > 0) {
    await db.collection("carros").updateOne(
      { _id: carro._id },
      { $inc: { quantidade: -1 } }
    );
    res.render("resposta", { mensagem: "Venda realizada com sucesso!" });
  } else {
    res.render("resposta", { mensagem: "Esgotado!" });
  }
});

app.listen(80, () => console.log("Servidor rodando na porta 80"));