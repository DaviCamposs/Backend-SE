const { Router } = require('express')
const { adicionarCurso } = require('../controllers/cursoController')

const router = Router()

router.post('/' , adicionarCurso)

module.exports = router