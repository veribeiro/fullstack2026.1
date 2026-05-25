const http = require("http");
const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');
var mongodb = require("mongodb");

const { MongoClient, ObjectId } = require("mongodb");
const uri = "mongodb://veribeiro0:1sTaAA0dD7eZpVu6@ac-nopcm4b-shard-00-00.yqjfy2q.mongodb.net:27017,ac-nopcm4b-shard-00-01.yqjfy2q.mongodb.net:27017,ac-nopcm4b-shard-00-02.yqjfy2q.mongodb.net:27017/?ssl=true&replicaSet=atlas-701i41-shard-0&authSource=admin&appName=Cluster0"; 
const client = new MongoClient(uri);

var app = express();
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs')
app.set('views', './views');

app.use(express.static("./public"));

var dbo = client.db("BancoPetShop");
var usuarios = dbo.collection("usuarios");
var produtos = dbo.collection("produtos");

// 1. Criamos uma função para conectar ao banco de dados primeiro
async function conectarBanco() {
    try {
        // Conecta ao cliente MongoDB
        await client.connect();
        console.log("-> Conectado com sucesso ao MongoDB!");
        
        // Seleciona o seu banco de dados
        dbo = client.db("BancoPetShop"); 

        app.listen(80, () => {
            console.log("-> Servidor Express rodando na porta 80!");
        });

    } catch (erro) {
        console.error("ERRO CRÍTICO: Não foi possível conectar ao MongoDB!", erro);
        process.exit(1); // Fecha o app se o banco não conectar
    }
}

// Inicializa a conexão
conectarBanco();

app.get("/", (req, res) => {
    res.redirect("login.html");
});

app.post("/cadastro", (req, res) => {
    var data = { nome_usuario: req.body.username, email: req.body.email, senha_usuario: req.body.password };
    usuarios.insertOne(data, err => {
        if (err) {
            console.error("Erro ao inserir usuário:", err);
            res.render("resposta", { mensagem: "Erro ao cadastrar usuário!" });
        } else {
            res.render("resposta", { mensagem: "Usuário cadastrado com sucesso!" });
        }
    });
});

app.post("/login", (req, res) => {
    var data = { email: req.body.email, senha_usuario: req.body.password };

    usuarios.find(data).toArray((err, items) => {
        console.log(items);
        if (items.length === 0) {
            res.render("resposta", { mensagem: "E-mail ou senha incorretos!" });
        } else if (err) {
            res.render("resposta", { mensagem: "Erro ao logar usuário!" });
        } else {
            res.render("resposta", { mensagem: "Login realizado com sucesso!" });
        }
    });
});

app.post("/atualizar_usuario", (req, res) => {
    var query = { email: req.body.email };
    var newPassword = { $set: { senha_usuario: req.body.novasenha } };

    usuarios.updateOne(query, newPassword, (err, result) => {
        if (err || result.modifiedCount === 0) {
            res.render("resposta", { mensagem: "E-mail incorreto ou senha não alterada!" });
        } else {
            res.render("resposta", { mensagem: "Senha atualizada com sucesso!" });
        }
    });
});

app.get("/menu", (req, res) => {
    res.render("menu");
});
// Obti erro de: "Não foi possível obter o arquivo /cadastrarproduto.ejs". Precisava do GET.
// 1. Essa rota exibe o formulário para o usuário preencher
app.get("/cadastrar_produto", (req, res) => {
    res.render("cadastrar_produto");
});

app.post("/cadastrar_produto", (req, res) => {
    var produtos = dbo.collection("produtos");
    var data = { nome_produto: req.body.nome_produto, marca_produto: req.body.marca_produto, preco_produto: req.body.preco_produto, quantidade: req.body.quantidade, data_validade: req.body.data_validade || null};

    produtos.insertOne(data, err => {
        if (err) {
            console.error("Erro ao inserir produto:", err);
            res.render("resposta", { mensagem: "Erro ao cadastrar produto!" });
        } else {
            res.render("menu", { mensagem: "Produto cadastrado com sucesso!" });
        }
    });
});

app.get("/listar", (req, res) => {
    var produtos = dbo.collection("produtos");
    produtos.find({}).toArray((err, items) => {
        if (err) {
            console.error("Erro ao buscar produtos:", err);
            res.render("resposta", { mensagem: "Erro ao listar produtos!" });
        } else {
            res.render("visualizar_estoque", { produtos: items });
        }
    });
});

app.get("/atualizarproduto", (req, res) => {
    var produtos = dbo.collection("produtos");
    produtos.find({}).toArray((err, items) => {
        if (err) {
            console.error("Erro ao buscar produtos:", err);
            res.render("resposta", { mensagem: "Erro ao listar produtos!" });
        } else {
            res.render("alterar_info_produto_cadastrado", { produtos: items });
        }
    });
});

app.post("/atualizarproduto", (req, res) => {
    var data = { nome_produto: req.body.nome_produto };
    var newData = { $set: { marca_produto: req.body.marca_produto, preco_produto: req.body.preco_produto, quantidade: req.body.quantidade, data_validade: req.body.data_validade || null } };

    produtos.updateOne(data, newData, (err, result) => {
        console.log(result);
        if (result.modifiedCount === 0) {
            res.render("menu", { mensagem: "Produto não encontrado!" });
        } else if (err) {
            res.render("menu", { mensagem: "Erro ao atualizar produto!" });
        } else {
            res.render("menu", { menu: "Produto atualizado com sucesso!" });
        }
    });
});

app.get("/removerproduto", (req, res) => {
    var produtos = dbo.collection("produtos");
    produtos.find({}).toArray((err, items) => {
        if (err) {
            console.error("Erro ao buscar produtos:", err);
            res.render("resposta", { mensagem: "Erro ao listar produtos!" });
        }
        else {
            res.render("remover_produto", { produtos: items });
        }
    });
});

app.post("/removerproduto", (req, res) => {
    var data = { _id: new ObjectId(req.body._id) }; //Essa é maneira de remover o produto com o ID, pois o MongoDB usa um tipo especial de ID chamado ObjectId. Precisamos converter a string do ID para esse formato usando new ObjectId().

    produtos.deleteOne(data, (err, result) => {
        console.log(result);
        if (result.deletedCount === 0) {
            res.render("resposta", { mensagem: "Produto não encontrado!" });
        } else if (err) {
            res.render("resposta", { mensagem: "Erro ao remover produto!" });
        } else {
            res.render("menu", { mensagem: "Produto removido com sucesso!" });
        }
        
    });
});

app.get("/removerprodutonome", (req, res) => {
    var produtos = dbo.collection("produtos");
    produtos.find({}).toArray((err, items) => {
        if (err) {
            console.error("Erro ao buscar produtos:", err);
            res.render("resposta", { mensagem: "Erro ao listar produtos!" });
        } else {
            res.render("remover_produto_nome", { produtos: items });
        }
    });
});

app.post("/removerprodutonome", (req, res) => {
    var data = { nome_produto: req.body.nome_produto };

    produtos.deleteOne(data, (err, result) => {
        console.log(result);
        if (result.deletedCount === 0) {
            res.render("resposta", { mensagem: "Produto não encontrado!" });
        } else if (err) {
            res.render("resposta", { mensagem: "Erro ao remover produto!" });
        } else {
            res.render("menu", { mensagem: "Produto removido com sucesso!" });
        }
    });
});

var server = http.createServer(app);
server.listen(80);

console.log("Servidor rodando ...".rainbow);