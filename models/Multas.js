const mongoose = require("mongoose");
const {Schema} = mongoose;

const multasSchema = new Schema({
    article: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    infringement: {
        type: String,
        require: true
    },
    Penalty: {
        type: String,
        require: true
    },
    value: {
        type: Number,
        require: true
    }
});

const Multa = mongoose.model("Multa", multasSchema);

module.exports = {
    Multa,
    multasSchema,
};