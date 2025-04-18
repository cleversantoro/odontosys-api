const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Usuario = require("./usuario.model");

const Despesa = sequelize.define("Despesas", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  descricao: { type: DataTypes.STRING, allowNull: false },
  valor: { type: DataTypes.FLOAT, allowNull: false },
  categoria: { type: DataTypes.STRING, allowNull: false },
  data: { type: DataTypes.DATE, allowNull: false },
  registeredBy: { type: DataTypes.INTEGER, allowNull: false } 
});

Despesa.belongsTo(Usuario, { foreignKey: "registeredBy", as: "registeredByUsuario" });

module.exports = Despesa;
