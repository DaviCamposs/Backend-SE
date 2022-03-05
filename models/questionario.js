const { Schema , model } = require("mongoose")

const alternativa = new Schema({
    resposta: {
        type: String,
        required: true
    },
    correta: {
        type: Boolean,
        required: true
    }
})

const questao = new Schema({
    enunciado: {
        type: String,
        required: true
    },
    alternativas: [alternativa]
})

const questionario = new Schema({
    questoes: [questao],
    imagem: {
        type: String,
        required: true
    },
    tags: [{
        type: String
    }]
})

module.exports = model('Questionario', questionario)