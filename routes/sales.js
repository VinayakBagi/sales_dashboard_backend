const express = require("express");
const {
  getSalesData,
  getSalesInsights,
  getSalesForecast,
  handleQuery,
} = require("../controllers/salesController");

const router = express.Router();

router.get("/", getSalesData);
router.get("/insights", getSalesInsights);
router.get("/forecast", getSalesForecast);
router.post("/query", handleQuery);

module.exports = router;
