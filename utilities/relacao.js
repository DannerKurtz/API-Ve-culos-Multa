const { Multa: MultaModel } = require("../models/Multas.js");

const relacaoUtilies = {
    tickets: async (idMulta) => {
        try {
            const multa = [];
            const arrayMulta = []

            for (let i = 0; i < idMulta.length; i++) {
                arrayMulta.push(idMulta[i].id);
                multa.push(await MultaModel.findById(arrayMulta[i]))
            }

            return await multa;
        } catch (error) {
            return console.log("Erro na relação de multas: ", error);
        }
    },

    values: async (veiculo) => {
        try {
            const arrayMulta = veiculo.tickets;
            let somaMultas = 0;
            const artigosMulta = []
            for (let i = 0; i < arrayMulta.length; i++) {
                somaMultas += arrayMulta[i].value;
                artigosMulta.push(arrayMulta[i].article);
            }
            const totalMultas = [{artigosMulta}, {total: somaMultas}];

            
            return totalMultas;
            
        } catch (error) {
            return console.log("Erro na soma das multas: ", error);
        }
    }
};

module.exports = relacaoUtilies;