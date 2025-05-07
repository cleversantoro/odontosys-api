// models/departamento.model.js

module.exports = (sequelize, DataTypes) => {
  const Departamento = sequelize.define('Departamento', {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    nome: { type: DataTypes.STRING(100), allowNull: false },
    descricao: { type: DataTypes.TEXT, allowNull: true }
  }, 
  {
    tableName: 'Departamentos',
    timestamps: false
  });

  return Departamento;
};
