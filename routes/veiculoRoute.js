const router = require("express").Router();
const veiculoController = require("../controller/veiculoController.js");

router
    .route("/veiculos")
    .post((req, res) => veiculoController.create(req, res));

router
    .route("/veiculos")
    .get((req, res) => veiculoController.getAll(req, res));

router
    .route("/veiculos/:id")
    .get((req, res) => veiculoController.getById(req, res));

router 
    .route("/veiculos/:id")
    .delete((req, res) => veiculoController.deleteById(req, res));

router 
    .route("/veiculos/:id")
    .put((req, res) => veiculoController.update(req, res));

router
    .route("/veiculos/soma/:id")
    .get((req, res) => veiculoController.totalValue(req, res));

module.exports = router;