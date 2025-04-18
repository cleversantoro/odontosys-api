const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Usuario = require("./usuario.model");

const Telefone = sequelize.define("Telefones", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  numero: {type: DataTypes.INTEGER, allowNull: false},
  tipo: {type: DataTypes.ENUM('celular', 'residencial', 'comercial'), allowNull: false},
  contato_id: {type: DataTypes.INTEGER, allowNull: false},
  contato_tipo: {type: DataTypes.ENUM('paciente', 'profissional'), allowNull: false}, 
  registeredBy: { type: DataTypes.INTEGER, allowNull: false }
});

// Relacionamento: Um usuário pode registrar vários pacientes
Telefone.belongsTo(Usuario, { foreignKey: "registeredBy", as: "registeredByUsuario" });

module.exports = Telefone;
