const mongoose = require("mongoose");
const { multasSchema } = require("./Multas");
const {Schema} = mongoose;


const veiculosSchema = new Schema({
    manufactuer: {
        type: String,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    licencePlate: {
        type: String,
        require: true
    },
    tickets:{
        date: Date,
        type: [multasSchema]
    }
});

const Veiculo = mongoose.model("Veiculo", veiculosSchema);

module.exports = {
    Veiculo,
    veiculosSchema,
};