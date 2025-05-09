module.exports = (sequelize, DataTypes) => {
  const Departamento = sequelize.define("Departamento", {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    nome: { type: DataTypes.STRING(100), allowNull: false },
    descricao: { type: DataTypes.TEXT, allowNull: true }
  }, { tableName: 'Departamentos', timestamps: true });

  Departamento.associate = (models) => {
    // Defina os relacionamentos aqui, se necessário
    Departamento.belongsToMany(models.Profissional, { through: 'ProfissionalDepartamentos', foreignKey: 'departamentoId', otherKey: 'profissionalId' });
  };

  return Departamento;
};
