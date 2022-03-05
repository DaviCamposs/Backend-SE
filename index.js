require('dotenv').config()

const express = require('express')
const cors = require('cors')

const conexaoDB = require('./db/config')

const autenticacaoRouter = require('./routes/autenticacao')
const moduloRouter = require('./routes/modulo')

const app = express()


app.use(express.json())
app.use(cors())

conexaoDB()

app.use('/autenticacao', autenticacaoRouter)
app.use('/modulo', moduloRouter)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor iniciado na porta ${process.env.PORT}`)
})