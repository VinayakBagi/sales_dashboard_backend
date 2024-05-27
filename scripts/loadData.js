require("dotenv").config();
const { models, initDB } = require("../models");
const salesData = require("../data/salesData.json");

const loadData = async () => {
  try {
    await initDB();

    const existingData = await models.Sales.findAll();
    if (existingData.length === 0) {
      await models.Sales.bulkCreate(salesData);
      console.log("Initial data loaded successfully");
    } else {
      console.log("Data already exists in the database. Skipping load.");
    }
  } catch (error) {
    console.error("Error loading initial data:", error);
  } finally {
    process.exit();
  }
};

loadData();
