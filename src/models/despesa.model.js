module.exports = (sequelize, DataTypes) => {
  const Despesa = sequelize.define("Despesa", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    descricao: { type: DataTypes.STRING, allowNull: false },
    valor: { type: DataTypes.FLOAT, allowNull: false },
    categoria: { type: DataTypes.STRING, allowNull: false },
    data: { type: DataTypes.DATE, allowNull: false },
    registeredBy: { type: DataTypes.INTEGER, allowNull: false }
  }, { tableName: 'Despesas', timestamps: true });

  Despesa.associate = (models) => {
    Despesa.belongsTo(models.Usuario, { foreignKey: "registeredBy", as: "Usuarios" });
  };

  return Despesa;
};
