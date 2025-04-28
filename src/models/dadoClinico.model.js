const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Usuario = require("./usuario.model");
const Paciente = require("./paciente.model");

const DadoClinico = sequelize.define("DadosClinicos", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  grupoSanguineo: { type: DataTypes.STRING(5), allowNull: true },
  alergias: { type: DataTypes.TEXT, allowNull: true },
  medicamentosContinuos: { type: DataTypes.TEXT, allowNull: true },
  doencasPreExistentes: { type: DataTypes.TEXT, allowNull: true },
  planoSaude: { type: DataTypes.STRING(255), allowNull: true },
  numeroApolice: { type: DataTypes.STRING(50), allowNull: true },
  
  pacienteId: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: "Pacientes", key: "id" }
  },

  registeredBy: { type: DataTypes.INTEGER, allowNull: false }
});

// Relacionamentos
DadoClinico.belongsTo(Paciente, { foreignKey: "pacienteId", as: "paciente" });
DadoClinico.belongsTo(Usuario, { foreignKey: "registeredBy", as: "usuario" });

module.exports = DadoClinico;
