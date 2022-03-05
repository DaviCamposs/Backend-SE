const { Schema , model } = require("mongoose")

const usuario = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        unique: true,
        type: String,
        required: true
    }, 
    senha: {
        type: String,
        required: true
    }
})

module.exports = model('Usuario', usuario)