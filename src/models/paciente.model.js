const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Usuario = require("./usuario.model");

const Paciente = sequelize.define("Pacientes", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

  codigo: { type: DataTypes.STRING(50), allowNull: true }, // Novo campo Código
  nome: { type: DataTypes.STRING(255), allowNull: false },
  email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
  dataNascimento: { type: DataTypes.DATE, allowNull: false },
  sexo: { type: DataTypes.ENUM("Masculino", "Feminino"), allowNull: false },

  estadoCivil: {
    type: DataTypes.ENUM("Solteiro(a)", "Casado(a)", "Divorciado(a)", "Viúvo(a)"),
    allowNull: true
  },

  nacionalidade: { type: DataTypes.STRING(100), allowNull: true },
  naturalidade: { type: DataTypes.STRING(100), allowNull: true },
  estado: { type: DataTypes.STRING(2), allowNull: true }, // UF
  dataEntrada: { type: DataTypes.DATEONLY, allowNull: true }, // Só a data, sem hora
  obs: { type: DataTypes.TEXT, allowNull: true },
  
  registeredBy: { type: DataTypes.INTEGER, allowNull: false },
});

// Relacionamento: Um usuário pode registrar vários pacientes
Paciente.belongsTo(Usuario, { foreignKey: "registeredBy", as: "usuario" });

module.exports = Paciente;
