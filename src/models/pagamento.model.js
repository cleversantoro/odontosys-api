module.exports = (sequelize, DataTypes) => {
  const Pagamento = sequelize.define("Pagamento", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    pacienteId: { type: DataTypes.INTEGER, allowNull: false },
    profissionalId: { type: DataTypes.INTEGER, allowNull: false },
    valor: { type: DataTypes.FLOAT, allowNull: false },
    tipoPagamento: { type: DataTypes.ENUM("Particular", "Convênio", "Comissão"), allowNull: false },
    status: { type: DataTypes.ENUM("Pendente", "Pago"), defaultValue: "Pendente" },
    data: { type: DataTypes.DATE, allowNull: false },
    registeredBy: { type: DataTypes.INTEGER, allowNull: false }
  },{ tableName: 'Pagamentos', timestamps: true });

  Pagamento.associate = (models) => {
    Pagamento.belongsTo(models.Paciente, { foreignKey: "pacienteId", as: "paciente" });
    Pagamento.belongsTo(models.Profissional, { foreignKey: "profissionalId", as: "profissional" });
    Pagamento.belongsTo(models.Usuario, { foreignKey: "registeredBy", as: "usuario" });
  };

  return Pagamento;
};
