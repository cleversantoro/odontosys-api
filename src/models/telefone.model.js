module.exports = (sequelize, DataTypes) => {
  const Telefone = sequelize.define("Telefone", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    numero: { type: DataTypes.INTEGER, allowNull: false },
    tipo: { type: DataTypes.ENUM('celular', 'residencial', 'comercial'), allowNull: false },
    contato_id: { type: DataTypes.INTEGER, allowNull: false },
    contato_tipo: { type: DataTypes.ENUM('paciente', 'profissional'), allowNull: false },
    registeredBy: { type: DataTypes.INTEGER, allowNull: false }
  },{ tableName: 'Telefones', timestamps: true });

  Telefone.associate = (models) => {
    Telefone.belongsTo(models.Usuario, { foreignKey: "registeredBy", as: "usuario" });
  };

  return Telefone;
};
