module.exports = (sequelize, DataTypes) => {
  const Documento = sequelize.define("Documento", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    numero: { type: DataTypes.STRING(50), allowNull: false },
    tipo: {
      type: DataTypes.ENUM('RG', 'CPF', 'CNH', 'Passaporte', 'Certidão de Nascimento', 'Certidão de Casamento'),
      allowNull: false
    },
    emissor: { type: DataTypes.STRING(50), allowNull: true },
    dataEmissao: { type: DataTypes.DATEONLY, allowNull: true },
    contato_id: { type: DataTypes.INTEGER, allowNull: false },
    contato_tipo: { type: DataTypes.ENUM('paciente', 'profissional'), allowNull: false },
    registeredBy: { type: DataTypes.INTEGER, allowNull: false }
  }, { tableName: 'Documentos', timestamps: true });

  Documento.associate = (models) => {
    Documento.belongsTo(models.Usuario, { foreignKey: "registeredBy", as: "Usuarios" });
  };

  return Documento;
};
