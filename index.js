require('dotenv').config()

const express = require('express')
const cors = require('cors')

const conexaoDB = require('./db/config')

const autenticacaoRouter = require('./routes/autenticacao')
const moduloRouter = require('./routes/modulo')
const materialRouter = require('./routes/material')
const cursoRouter = require('./routes/curso')
const questionarioRouter = require('./routes/questionario')

const app = express()


app.use(express.json())
app.use(cors())

conexaoDB()

app.use('/autenticacao', autenticacaoRouter)
app.use('/modulo', moduloRouter)
app.use('/material', materialRouter)
app.use('/curso', cursoRouter)
app.use('/questionario', questionarioRouter)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor iniciado na porta ${process.env.PORT}`)
})