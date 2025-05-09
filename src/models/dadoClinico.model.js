module.exports = (sequelize, DataTypes) => {
  const DadoClinico = sequelize.define("DadoClinico", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    grupoSanguineo: { type: DataTypes.STRING(5), allowNull: true },
    alergias: { type: DataTypes.TEXT, allowNull: true },
    medicamentosContinuos: { type: DataTypes.TEXT, allowNull: true },
    doencasPreExistentes: { type: DataTypes.TEXT, allowNull: true },
    planoSaude: { type: DataTypes.STRING(255), allowNull: true },
    numeroApolice: { type: DataTypes.STRING(50), allowNull: true },
    pacienteId: { type: DataTypes.INTEGER, allowNull: false },
    registeredBy: { type: DataTypes.INTEGER, allowNull: false }
  }, { tableName: 'DadosClinicos', timestamps: true });

  DadoClinico.associate = (models) => {
    DadoClinico.belongsTo(models.Paciente, { foreignKey: "pacienteId", as: "Pacientes" });
    DadoClinico.belongsTo(models.Usuario, { foreignKey: "registeredBy", as: "Usuarios" });
  };

  return DadoClinico;
};
