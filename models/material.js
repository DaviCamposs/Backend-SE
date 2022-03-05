const { Schema , model } = require("mongoose")

const material = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})

module.exports = model('Material', material)