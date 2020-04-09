const express = require("express"); // Importando
const app = express(); //Iniciando 

app.get("/", function(req, res){
    res.send("Bem Vindo!!!")
})

app.get("/blog", function(req, res){
    var artigo = req.query["artigo"];
    res.send("<h1>Bem vindo ao blog</h1> Artigo n" + artigo)
})

app.get("/canal", function(req, res){
    res.send("Bem vindo ao canal")
})

app.get("/ola/:nome/:empresa?", function(req, res){
    var nome = req.params.nome
    var empresa = req.params.empresa
    if (empresa) {
        res.send("<h1>Oi</h1>" + req.params.nome + " da " + empresa)
    }
    else {
        res.send("<h1>Oi</h1>" + req.params.nome)
    }
})

app.listen(8080, function(erro) {
    if (erro) {
        console.log("Ocorreu um erro");
    }
    else {
        console.log("Sucesso");
    }
})