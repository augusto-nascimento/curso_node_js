const express = require("express"); // Importando
const app = express(); //Iniciando 

app.get("/", function(req, res){
    res.send("Bem Vindo!!!")
})

app.get("/blog", function(req, res){
    res.send("Bem vindo ao blog")
})

app.listen(8080, function(erro) {
    if (erro) {
        console.log("Ocorreu um erro");
    }
    else {
        console.log("Sucesso");
    }
})