const Modulo = require('../models/modulo')
const Curso = require('../models/curso')

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

const getModulo = async (req,res) => {
    const moduloId = req.params.id

    try {
        const cursos = await Curso.find({ modulo: moduloId })

        return res.status(201).json({
            sucesso: true,
            cursos,
            mensagem: 'Módulo lido com sucesso',
        })
    } catch (erro) {
        return res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao ler módulo, tente novamente'
        })
    }
}

const getModulos = async (req,res) => {

    try {
        const modulos = await Modulo.aggregate([ {
            $lookup: { from: 'cursos', localField: '_id', foreignField: 'modulo', as: 'cursos' }
        } ])

        return res.status(201).json({
            sucesso: true,
            modulos,
            mensagem: 'Módulo lido com sucesso',
        })
    } catch (erro) {
        return res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao ler módulo, tente novamente'
        })
    }
}

module.exports = {
    adicionarModulo,
    getModulo,
    getModulos
}