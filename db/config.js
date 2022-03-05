require('dotenv').config()

const mongoose = require('mongoose')

const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('conectado ao banco de dados')
    } catch (error) {
        console('erro na conexão com o banco de dados')
    }
}

module.exports = connectionDB