const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Token = sequelize.define("Tokens", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  token: { type: DataTypes.STRING, allowNull: false },
  expiresAt: { type: DataTypes.DATE, allowNull: false },
});

module.exports = Token;
