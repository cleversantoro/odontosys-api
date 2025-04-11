const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const User = require("./user.model");

const Patient = sequelize.define("Patient", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  phone: { type: DataTypes.STRING, allowNull: false },
  birthDate: { type: DataTypes.DATE, allowNull: false },
  address: { type: DataTypes.STRING, allowNull: false },
  registeredBy: { type: DataTypes.INTEGER, allowNull: false }
});

// Relacionamento: Um usuário pode registrar vários pacientes
Patient.belongsTo(User, { foreignKey: "registeredBy", as: "registeredByUser" });

module.exports = Patient;
