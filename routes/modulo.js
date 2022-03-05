const { Router } = require('express')
const { adicionarModulo } = require('../controllers/moduloController')

const router = Router()

router.post('/' , adicionarModulo)

module.exports = router