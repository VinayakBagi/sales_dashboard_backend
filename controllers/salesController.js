const { models } = require("../models");

const llmService = require("../services/llmService");

const getSalesData = async (req, res) => {
  try {
    const salesData = await models.Sales.findAll();
    res.json(salesData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const getSalesInsights = async (req, res) => {
  try {
    const salesData = await models.Sales.findAll();
    const insights = await llmService.generateInsights(salesData);
    res.json({ insights });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const getSalesForecast = async (req, res) => {
  try {
    const salesData = await models.Sales.findAll();
    const forecast = await llmService.generateForecast(salesData);
    res.json({ forecast });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const handleQuery = async (req, res) => {
  try {
    const { query } = req.body;
    const salesData = await models.Sales.findAll();
    const answer = await llmService.answerQuery(query, salesData);
    res.json({ answer });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getSalesData,
  getSalesInsights,
  getSalesForecast,
  handleQuery,
};
