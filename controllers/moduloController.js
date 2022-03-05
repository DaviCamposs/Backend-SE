const Modulo = require('../models/modulo')

const adicionarModulo = async (req,res) => {
    const { nome , descricao } = req.body

    try {
        const novoModulo = new Modulo({ nome , descricao })
        await novoModulo.save()

        return res.status(201).json({
            sucesso: true,
            nome,
            descricao,
            mensagem: 'Módulo adicionado com sucesso',
        })
    } catch (erro) {
        return res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao adicionar módulo, tente novamente'
        })
    }
}

module.exports = {
    adicionarModulo
}