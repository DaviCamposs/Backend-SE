const { Schema , model } = require("mongoose")

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

const questao = new Schema({
    enunciado: {
        type: String,
        required: true
    },
    alternativas: [alternativa]
})

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

module.exports = model('Questionario', questionario)