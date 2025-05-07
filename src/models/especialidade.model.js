// models/especialidade.model.js

module.exports = (sequelize, DataTypes) => {
  const Especialidade = sequelize.define('Especialidade', {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    nome: { type: DataTypes.STRING(100), allowNull: false },
    descricao: { type: DataTypes.TEXT, allowNull: true }
  }, 
  {
    tableName: 'Especialidades',
    timestamps: false
  });

  return Especialidade;
};
