const Questionario = require('../models/questionario')

const adicionarQuestionario = async (req,res) => {
    const { questoes , tags , imagem } = req.body

    try {
        const novoQuestionario = new Questionario({ questoes , tags , imagem  })
        await novoQuestionario.save()

        return res.status(201).json({
            sucesso: true,
            questoes , tags , imagem ,
            mensagem: 'Questionário adicionado com sucesso',
        })
    } catch (erro) {
        return res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao adicionar questionario, tente novamente'
        })
    }
}

const getQuestionarios = async (req,res) => {

    try {
        const questionarios = await Questionario.find()

        return res.status(201).json({
            sucesso: true,
            questionarios,
            mensagem: 'Questionário lido com sucesso',
        })
    } catch (erro) {
        return res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao ler questionario, tente novamente'
        })
    }
}

const getQuestionario = async (req,res) => {

    try {

        const id = req.params.id

        const questionario = await Questionario.findOne({_id: id})

        return res.status(201).json({
            sucesso: true,
            questionario,
            mensagem: 'Questionário lido com sucesso',
        })
    } catch (erro) {
        return res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao ler questionario, tente novamente'
        })
    }
}

module.exports = {
    adicionarQuestionario,
    getQuestionarios,
    getQuestionario
}