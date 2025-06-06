module.exports = (sequelize, DataTypes) => {
  const Doenca = sequelize.define("Doenca", {
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    nome: { type: DataTypes.STRING(255), allowNull: false },
    descricao: { type: DataTypes.TEXT }
  },{ tableName: 'Doencas', timestamps: true });

  Doenca.associate = (models) => {
    Doenca.belongsToMany(models.Paciente, { through: 'PacienteDoencas', foreignKey: 'doencaId', otherKey: 'pacienteId' });
  };

  return Doenca;
};
