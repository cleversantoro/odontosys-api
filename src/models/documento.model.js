const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Usuario = require("./usuario.model");

const Documento = sequelize.define("Documentos", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  numero: { type: DataTypes.STRING(50), allowNull: false },
  tipo: { 
    type: DataTypes.ENUM('RG', 'CPF', 'CNH', 'Passaporte', 'Certidão de Nascimento', 'Certidão de Casamento'), 
    allowNull: false 
  },
  emissor: { type: DataTypes.STRING(50), allowNull: true }, // Ex.: SSP-SP, Polícia Federal
  dataEmissao: { type: DataTypes.DATEONLY, allowNull: true },
  contato_id: { type: DataTypes.INTEGER, allowNull: false },
  contato_tipo: { type: DataTypes.ENUM('paciente', 'profissional'), allowNull: false },
  registeredBy: { type: DataTypes.INTEGER, allowNull: false }
});

// Relacionamento: Um usuário pode registrar vários documentos
Documento.belongsTo(Usuario, { foreignKey: "registeredBy", as: "usuario" });

module.exports = Documento;
