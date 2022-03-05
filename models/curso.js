const { Schema , model } = require("mongoose")

const curso = new Schema({
    nome: {
        type: String,
        required: true
    },
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
    conteudo: {
        type: String,
        required: true
    },
    tags: [{
        type: String
    }],
    modulo: {
        type: Schema.Types.ObjectId,
        ref: "modulos",
        required: true
    }
})

module.exports = model('Curso', curso)