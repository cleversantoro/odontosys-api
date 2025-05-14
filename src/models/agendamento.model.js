module.exports = (sequelize, DataTypes) => {
  const Agendamento = sequelize.define("Agendamento", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    pacienteId: { type: DataTypes.INTEGER, allowNull: false },
    profissionalId: { type: DataTypes.INTEGER, allowNull: false },
    convenioId: { type: DataTypes.INTEGER, allowNull: true },
    data: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.ENUM("Agendado", "Confirmado", "Cancelado", "Realizado"), defaultValue: "Agendado" },
    obs: { type: DataTypes.TEXT, allowNull: true },
    registeredBy: { type: DataTypes.INTEGER, allowNull: false }
  }, { tableName: 'Agendamentos', timestamps: true });

  Agendamento.associate = (models) => {
    Agendamento.belongsTo(models.Paciente, { foreignKey: "pacienteId", as: "Pacientes" });
    Agendamento.belongsTo(models.Profissional, { foreignKey: "profissionalId", as: "Profissionais" });
    Agendamento.belongsTo(models.Usuario, { foreignKey: "registeredBy", as: "Usuarios" });
    Agendamento.hasOne(models.Consulta, { foreignKey: "agendamentoId", as: "Consultas" });
    Agendamento.belongsTo(models.Convenio, { foreignKey: "convenioId", as: "Convenios" });
  };

  return Agendamento;
};
