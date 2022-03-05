const { Router } = require('express')
const { login , registro } = require('../controllers/autenticacaoController')

const router = Router()

router.post('/login' , login)
router.post('/registro' , registro)

module.exports = router