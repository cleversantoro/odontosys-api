const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Usuario = require("./usuario.model");

const Paciente = sequelize.define("Pacientes", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  sexo: { type: DataTypes.ENUM("Masculino", "Feminino"), allowNull: false },
  dataNascimento: { type: DataTypes.DATE, allowNull: false },
  registeredBy: { type: DataTypes.INTEGER, allowNull: false }
});

// Relacionamento: Um usuário pode registrar vários pacientes
Paciente.belongsTo(Usuario, { foreignKey: "registeredBy", as: "usuario" });

module.exports = Paciente;
