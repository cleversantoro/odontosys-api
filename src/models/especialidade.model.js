//import Especialidade from  'models/especialidade.model'

module.exports = (sequelize, DataTypes) => {
  const Especialidade = sequelize.define("Especialidade", {

    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    nome: { type: DataTypes.STRING(100), allowNull: false },
    descricao: { type: DataTypes.TEXT, allowNull: true }
  }, { tableName: 'Especialidades', timestamps: true });

  Especialidade.associate = (models) => {
    Especialidade.belongsToMany(models.Profissional, { through: 'ProfissionalEspecialidades', foreignKey: 'especialidadeId', otherKey: 'profissionalId' });
  };


  return Especialidade;
};
