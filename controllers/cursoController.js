const Curso = require('../models/curso')

const adicionarCurso = async (req,res) => {
    const { nome , titulo , descricao , imagem , conteudo , tags , modulo } = req.body

    try {
        const novoCurso = new Curso({ nome , titulo , descricao , imagem , conteudo , tags , modulo})
        await novoCurso.save()

        return res.status(201).json({
            sucesso: true,
            nome , titulo , descricao , imagem , conteudo , tags, modulo,
            mensagem: 'Curso adicionado com sucesso',
        })
    } catch (erro) {
        return res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao adicionar curso, tente novamente'
        })
    }
}

const getCurso = async (req,res) => {
    const id = req.params.id

    try {
        
        const curso = await Curso.findOne({_id: id})

        return res.status(201).json({
            sucesso: true,
            curso,
            mensagem: 'Curso lido com sucesso',
        })
    } catch (erro) {
        return res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao let curso, tente novamente'
        })
    }
}

module.exports = {
    adicionarCurso,
    getCurso
}