const { Router } = require('express')
const { adicionarQuestionario } = require('../controllers/questionarioController')

const router = Router()

router.post('/' , adicionarQuestionario)

module.exports = router