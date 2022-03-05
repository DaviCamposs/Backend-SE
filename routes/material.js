const { Router } = require('express')
const { adicionarMaterial } = require('../controllers/materialController')

const router = Router()

router.post('/' , adicionarMaterial)

module.exports = router