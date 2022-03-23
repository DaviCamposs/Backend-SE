const { Router } = require('express')
const { adicionarModulo , getModulo , getModulos } = require('../controllers/moduloController')

const router = Router()

router.post('/' , adicionarModulo)

router.get('/' , getModulos)

router.get('/:id' , getModulo)

module.exports = router