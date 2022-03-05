const Curso = require('../models/curso')

const adicionarCurso = async (req,res) => {
    const { nome , titulo , descricao , imagem , conteudo , tags} = req.body

    try {
        const novoCurso = new Curso({ nome , titulo , descricao , imagem , conteudo , tags})
        await novoCurso.save()

        return res.status(201).json({
            sucesso: true,
            nome , titulo , descricao , imagem , conteudo , tags,
            mensagem: 'Curso adicionado com sucesso',
        })
    } catch (erro) {
        return res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao adicionar curso, tente novamente'
        })
    }
}

module.exports = {
    adicionarCurso
}