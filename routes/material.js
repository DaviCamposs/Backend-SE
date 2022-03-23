const { Router } = require('express')
const { adicionarMaterial, getMateriais } = require('../controllers/materialController')

const router = Router()

router.post('/' , adicionarMaterial)

router.get('/' , getMateriais)

module.exports = router