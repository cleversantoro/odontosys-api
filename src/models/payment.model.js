const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Patient = require("./patient.model");
const User = require("./user.model");

const Payment = sequelize.define("Payment", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  patientId: { type: DataTypes.INTEGER, allowNull: false },
  professionalId: { type: DataTypes.INTEGER, allowNull: false },
  amount: { type: DataTypes.FLOAT, allowNull: false },
  paymentType: {
    type: DataTypes.ENUM("Particular", "Convênio", "Comissão"),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM("Pendente", "Pago"),
    defaultValue: "Pendente"
  },
  paymentDate: { type: DataTypes.DATE, allowNull: false }
});

// Relacionamentos
Payment.belongsTo(Patient, { foreignKey: "patientId", as: "patient" });
Payment.belongsTo(User, { foreignKey: "professionalId", as: "professional" });

module.exports = Payment;
