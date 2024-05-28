const { Sequelize } = require('sequelize');

// Carregar variáveis de ambiente do arquivo .env
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  define: {
    timestamps: false // Desative os campos de timestamp padrão
  }
});

module.exports = sequelize;
