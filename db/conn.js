require('dotenv').config()
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT
    }
)

async function connect() {
    try {
        await sequelize.authenticate()
        console.log('Conectado com sucesso')
    } catch (err) {
        console.log(`Não foi possível conectar: ${err}`)
    }
}

connect()

module.exports = sequelize
