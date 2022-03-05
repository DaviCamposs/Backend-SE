const Material = require('../models/material')

const adicionarMaterial = async (req,res) => {
    const { titulo , descricao , imagem , tipo , link } = req.body

    try {
        const novoMaterial = new Material({ titulo , descricao , imagem , tipo , link })
        await novoMaterial.save()

        return res.status(201).json({
            sucesso: true,
            titulo , descricao , imagem , tipo , link,
            mensagem: 'Material adicionado com sucesso',
        })
    } catch (erro) {
        return res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao adicionar material, tente novamente'
        })
    }
}

module.exports = {
    adicionarMaterial
}