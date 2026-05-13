require("colors");

var http = require("http");
var express = require("express");
var bodyParser = require("body-parser")
var mongodb = require("mongodb");

const { MongoClient } = require("mongodb");
const uri = "mongodb://veribeiro0:vtH%5E%26%21161114@ac-nopcm4b-shard-00-00.yqjfy2q.mongodb.net:27017,ac-nopcm4b-shard-00-01.yqjfy2q.mongodb.net:27017,ac-nopcm4b-shard-00-02.yqjfy2q.mongodb.net:27017/?ssl=true&replicaSet=atlas-701i41-shard-0&authSource=admin&appName=Cluster0";
const client = new MongoClient(uri)


var app = express();
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log("Servidor rodando ...".rainbow);

app.get('/', async (req, res) => {
  try {
    const posts = await db.collection("posts").find({}).toArray();
    res.render('blog', { lista_posts: posts });
  } catch (err) {
    console.error(err);
    res.send("Erro ao carregar o blog");
  }
});

app.get('/cadastrar', (req, res) => {
  res.sendFile(__dirname + '/public/cadastrar_post.html');
});

let db;

client.connect().then(() => {
  db = client.db("blogDB");
  console.log("Conectado ao banco!");
}).catch(err => console.error(err));

app.post('/salvar_post', async (req, res) => {
  try {
    await db.collection("posts").insertOne({
      db_titulo: req.body.titulo,
      db_resumo: req.body.resumo,
      db_conteudo: req.body.conteudo
    });
    console.log("Post inserido com sucesso!");
    return res.render('resposta_post.ejs'); // use return para encerrar a execução
  } catch (err) {
    console.error("Erro ao salvar:", err);
    return res.render('resposta_post.ejs', { resposta: "Erro ao cadastrar o post" });
  }
});

app.get('/blog', async (req, res) => {
  try {
    const posts = await db.collection("posts").find({}).toArray();
    res.render('blog', { lista_posts: posts });
  } catch (err) {
    console.error(err);
    res.send("Erro ao buscar posts");
  }
});
