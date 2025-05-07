// models/doenca.model.js

module.exports = (sequelize, DataTypes) => {
  const Doenca = sequelize.define('Doenca', {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    nome: { type: DataTypes.STRING(255), allowNull: false },
    descricao: { type: DataTypes.TEXT, allowNull: true }
  }, 
  {
    tableName: 'Doencas',
    timestamps: false
  });

  Doenca.associate = (models) => {
    Doenca.belongsToMany(models.Paciente, {
      through: 'PacienteDoencas',
      foreignKey: 'doencaId',
      otherKey: 'pacienteId'
    });
  };

  return Doenca;
};
