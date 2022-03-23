const { Router } = require('express')
const { adicionarQuestionario , getQuestionarios , getQuestionario } = require('../controllers/questionarioController')

const router = Router()

router.post('/' , adicionarQuestionario)

router.get('/', getQuestionarios)

router.get('/:id', getQuestionario)

module.exports = router