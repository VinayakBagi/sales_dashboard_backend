const sequelize = require("../config/database");
const Sales = require("./Sales");

const models = { Sales };

const initDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Database connected and synchronized");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { models, initDB };
