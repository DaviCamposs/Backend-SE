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

module.exports = {
    adicionarQuestionario
}