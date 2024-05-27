const { Sequelize } = require("sequelize");

const config = require(".");

const sequelize = new Sequelize(
  config.DATABASE,
  config.USERNAME,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.DIALECT,
    port: config.DB_PORT,
  }
);

module.exports = sequelize;
