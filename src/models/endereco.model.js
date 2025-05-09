module.exports = (sequelize, DataTypes) => {
  const Endereco = sequelize.define("Endereco", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    logradouro: { type: DataTypes.STRING, allowNull: false },
    numero: { type: DataTypes.INTEGER, allowNull: false },
    complemento: { type: DataTypes.STRING, allowNull: true },
    bairro: { type: DataTypes.STRING, allowNull: false },
    cidade: { type: DataTypes.STRING, allowNull: false },
    estado: { type: DataTypes.STRING, allowNull: false },
    cep: { type: DataTypes.INTEGER, allowNull: false },
    pais: { type: DataTypes.STRING, allowNull: false },
    contato_id: { type: DataTypes.INTEGER, allowNull: false },
    contato_tipo: { type: DataTypes.ENUM('paciente', 'profissional'), allowNull: false },
    registeredBy: { type: DataTypes.INTEGER, allowNull: false }
  }, { tableName: 'Enderecos', timestamps: true });

  Endereco.associate = (models) => {
    Endereco.belongsTo(models.Usuario, { foreignKey: "registeredBy", as: "usuario" });
  };

  return Endereco;
};
