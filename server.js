require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const salesRoute = require("./routes/sales");
const { initDB } = require("./models");
const config = require("./config");

app.use(cors());
app.use(express.json());
app.use("/api/sales", salesRoute);

const PORT = config.PORT || 8000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Server running on port ${PORT}`);
  await initDB();
});
