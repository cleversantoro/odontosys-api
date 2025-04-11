const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const User = require("./user.model");
const Patient = require("./patient.model");

const Appointment = sequelize.define("Appointment", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  patientId: { type: DataTypes.INTEGER, allowNull: false },
  professionalId: { type: DataTypes.INTEGER, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  status: { 
    type: DataTypes.ENUM("Agendado", "Confirmado", "Cancelado", "Realizado"),
    defaultValue: "Agendado"
  },
  notes: { type: DataTypes.TEXT, allowNull: true }
});

// Relacionamentos
Appointment.belongsTo(Patient, { foreignKey: "patientId", as: "patient" });
Appointment.belongsTo(User, { foreignKey: "professionalId", as: "professional" });

module.exports = Appointment;
