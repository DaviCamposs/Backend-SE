const { Router } = require('express')
const { login } = require('../controllers/autenticacaoController')

const router = Router()

router.post('/login' , login)

module.exports = router