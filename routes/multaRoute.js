const router = require("express").Router();
const multaController = require("../controller/multaController.js");

router
    .route("/multas")
    .post((req, res) => multaController.create(req, res));

router
    .route("/multas")
    .get((req, res) => multaController.get(req, res));

router
    .route("/multas/:id")
    .get((req, res) => multaController.getById(req, res));

router
    .route("/multas/:id")
    .delete((req, res) => multaController.deleteById(req, res));

router
    .route("/multas/:id")
    .put((req, res) => multaController.update(req, res));
module.exports = router;