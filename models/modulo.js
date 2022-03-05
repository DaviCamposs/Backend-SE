const { Schema , model } = require("mongoose")

const modulo = new Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
})

module.exports = model('Modulo', modulo)