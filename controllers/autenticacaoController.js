require('dotenv').config()

const Usuario = require('../models/usuario')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const login = async (req,res) => {
    const { email , senha } = req.body

    try {
        const usuario = await Usuario.findOne({ email })
        if (!usuario) {
            return res.status(401).json({
                sucesso: false,
                mensagem: 'Email ou/e senha inválido(s)'
            })
        }

        const senhaValida = bcryptjs.compareSync(senha, usuario.senha)

        if (!senhaValida) {
            return res.status(401).json({
                sucesso: false,
                mensagem: 'Email ou/e senha inválido(s)'
            })
        }

        const payload = {
            id: usuario.id
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '3h' })

        return res.status(201).json({
            sucesso: true,
            id: usuario.id,
            nome: usuario.nome,
            mensagem: 'Sessao iniciada',
            token
        })

    } catch (erro) {
        return res.status(500).json({
            successo: false,
            mensagem: 'Erro ao fazer login, tente novamente'
        })
    }
}

module.exports = {
    login
}