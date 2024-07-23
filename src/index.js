const express = require("express");
const app = express();

// Utilizando o JSON
app.use(express.json());

// Chamando a conexão do banco de dados
const conexao = require("../db/connect.js");
conexao();

// Chamando a rota
const routes = require("../routes/router.js");
app.use("/api", routes);

app.listen(3000, () =>{
    console.log("Servidor online!");
});