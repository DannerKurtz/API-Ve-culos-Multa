const router = require("express").Router();

// Chamando a rota de veiculos
const veiculosRouter = require("./veiculoRoute.js");
router.use("/", veiculosRouter);

// Chamando a roda de multas
const multasRouter = require("./multaRoute.js");
router.use("/", multasRouter);

module.exports = router;