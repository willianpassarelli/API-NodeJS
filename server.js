const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB, no parametro abaixo colocar o caminho com usuario e senha do banco (MongoDB)
mongoose.connect("mongodb://", {
  useNewUrlParser: true
});
requireDir("./src/models");

// Rotas
app.use("/api", require("./src/routes"));

// Navegador irá iniciar o localhost na porta 3001
app.listen(3001);
