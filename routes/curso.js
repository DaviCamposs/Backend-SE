const { Router } = require('express')
const { adicionarCurso , getCurso } = require('../controllers/cursoController')

const router = Router()

router.post('/' , adicionarCurso)

router.get('/:id' , getCurso)

module.exports = router