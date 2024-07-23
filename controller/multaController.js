const { Multa: MultaModel } = require("../models/Multas.js");

const multaController = {
    create: async (req, res) => {
        try {
            const multa = {
                article: req.body.article,
                description: req.body.description,
                infringement: req.body.infringement,
                Penalty: req.body.Penalty,
                value: req.body.value
            }

            const response = await MultaModel.create(multa);

            return res.json({ msg: `Multa criada com sucesso!`, multa });
        } catch (error) {
            return console.log("Erro ao criar a multa: ", error);
        }
    },

    get: async (req, res) => {
        try {
            const multas = await MultaModel.find();

            return res.json({ msg: "Lista das Multas Cadastradas: ", multas });
        } catch (error) {
            return console.log("Erro ao buscar as multas: ", error);
        }
    },

    getById: async (req, res) => {
        try {
            const id = req.params.id;

            const multas = await MultaModel.findById(id);

            if (!multas) {
                return res.json({ msg: `Multa do id: ${id}, não encontrada` });
            }
            return res.json({ msg: `Busca do id: ${id}`, multas });
        } catch (error) {
            return console.log("Erro na busca da multa por id: ", error);
        }
    },

    deleteById: async (req, res) => {
        try {
            const id = req.params.id;

            const multasDelete = await MultaModel.findByIdAndDelete(id);

            if (!multasDelete) {
                return res.json({ msg: `Multa do id: ${id}, não encontrada` });
            }

            return res.json({ msg: `Multa do id: ${id}, deletada com sucesso!`, multasDelete });

        } catch (error) {
            return console.log("Erro ao deletar a multa: ", error);
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id;

            const multa = {
                article: req.body.article,
                description: req.body.description,
                infringement: req.body.infringement,
                Penalty: req.body.Penalty,
                value: req.body.value
            };

            const multaUpdate = await MultaModel.findByIdAndUpdate(id, multa);

            if (!multaUpdate) {
                return res.json({ msg: `Multa do id: ${id}, não encontrada` });
            }

            return res.json({msg: "Multa atualizada com sucesso!", multa});

        } catch (error) {
            return console.log("Erro ao atualizar a multa: ", error);
        }
    }

}

module.exports = multaController;