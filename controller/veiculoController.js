const {Veiculo: VeiculoModel} = require("../models/Veiculos.js");
const relacaoUtilies = require("../utilities/relacao.js");

const veiculoController = {
    create: async(req, res) =>{
        try {
            const veiculo = {
                
                manufactuer: req.body.manufactuer,
                model: req.body.model,
                licencePlate: req.body.licencePlate,
                tickets: req.body.tickets
            };

            veiculo.tickets = await relacaoUtilies.tickets(veiculo.tickets);

            const response = await VeiculoModel.create(veiculo);

            return res.status(201).json({msg: "Veiculo cadastrado!", veiculo});

        } catch (error) {
            return console.log("Erro na criação de veiculos: ", error);
        }
    },

    getAll: async(req, res) =>{
        try {
            const veiculos = await VeiculoModel.find();
            return res.status(201).json({msg: "Lista de veículos cadastrados", veiculos});
        } catch (error) {
            return console.log("Erro na busca de veículos: ", error);
        }
    },

    getById: async(req, res) =>{
        try {
            const id = req.params.id;

            const veiculo = await VeiculoModel.findById(id);

            if (!veiculo){
                return res.json({msg: `Veículo de id: ${id}, não encontrado!`});
            }

            return res.json({msg: `Veículo do id: ${id}`, veiculo});

        } catch (error) {
            return console.log("Erro na busca por id do veículo: ", error);
        }
    },

    deleteById: async(req, res) =>{
        try {
            const id = req.params.id;

            const veiculoDelete = await VeiculoModel.findByIdAndDelete(id);

            if(!veiculoDelete){
                return res.json({msg: `Veículo de id ${id}, não encontrado!`});
            }

            return res.json({msg: `Veículo de id: ${id}, deletado`, veiculoDelete});

        } catch (error) {
            return console.log("Erro ao deletar o veículo");
        }
    },

    update: async(req, res) => {
        try {
            const id = req.params.id;

            const veiculo = {
                tickets: req.body.tickets
            }

            veiculo.tickets = await relacaoUtilies.tickets(veiculo.tickets);

            const veiculoBodyUpdate = {
                manufactuer: req.body.manufactuer,
                model: req.body.model,
                licencePlate: req.body.licencePlate,
                tickets: veiculo.tickets
            }

            const updateVeiculos = await VeiculoModel.findByIdAndUpdate(id, veiculoBodyUpdate);

            if(!updateVeiculos){
                return res.json({msg: `Veículo de id ${id}, não encontrado!`});
            }

            return res.json({msg: `Veículo de id: ${id}, alterado`, veiculoBodyUpdate});

        } catch (error) {
            return console.log("Erro ao fazer o update: ", error);
        }
    },

    totalValue: async (req, res) =>{
        try {
            const id = req.params.id;

            const veiculo = await VeiculoModel.findById(id);
            const valorTotal = await relacaoUtilies.values(veiculo);
           
            res.json({valorTotal});

        } catch (error) {
            return console.log("Erro ao somar as multas: ", error);
        }
    }
}

module.exports = veiculoController;