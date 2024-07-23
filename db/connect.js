const mongoose = require("mongoose");
require('dotenv').config()



async function main(){
    try {
        const acesso = process.env.ACESSO;

        await mongoose.connect(`mongodb+srv://${acesso}@registrodemultas.5ciiwdi.mongodb.net/?retryWrites=true&w=majority&appName=RegistroDeMultas`)
        .then(() => {
            console.log("Conectado ao Banco de dados!");
        });
    } catch (error) {
        console.log("erro: ", error);
    }
}

module.exports = main;