const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Usuario = require("./usuario.model");

const Profissional = sequelize.define("Profissionais", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  dataNascimento: { type: DataTypes.DATE, allowNull: false },
  sexo: { type: DataTypes.ENUM("Masculino", "Feminino"), allowNull: false },
  registeredBy: { type: DataTypes.INTEGER, allowNull: false }
});

// Relacionamento: Um usuário pode registrar vários pacientes
Profissional.belongsTo(Usuario, { foreignKey: "registeredBy", as: "usuario" });

module.exports = Profissional;
