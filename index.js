require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()


app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor iniciado na porta ${process.env.PORT}`)
})