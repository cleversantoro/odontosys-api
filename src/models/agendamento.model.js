const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Profissional = require("./profissional.model");
const Paciente = require("./paciente.model");
const Usuario = require("./usuario.model");

const Agendamento = sequelize.define("Agendamentos", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  pacienteId: { type: DataTypes.INTEGER, allowNull: false },
  profissionalId: { type: DataTypes.INTEGER, allowNull: false },
  data: { type: DataTypes.DATE, allowNull: false },
  status: { 
    type: DataTypes.ENUM("Agendado", "Confirmado", "Cancelado", "Realizado"),
    defaultValue: "Agendado"
  },
  obs: { type: DataTypes.TEXT, allowNull: true },
  registeredBy: { type: DataTypes.INTEGER, allowNull: false }
});

// Relacionamentos
Agendamento.belongsTo(Paciente, { foreignKey: "pacienteId", as: "paciente" });
Agendamento.belongsTo(Profissional, { foreignKey: "profissionalId", as: "profissional" });
Agendamento.belongsTo(Usuario, { foreignKey: "registeredBy", as: "registeredByUsuario" });

module.exports = Agendamento;
