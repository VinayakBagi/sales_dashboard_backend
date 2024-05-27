const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Sales = sequelize.define(
  "Sales",
  {
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    revenue: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    newCustomers: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Sales;
