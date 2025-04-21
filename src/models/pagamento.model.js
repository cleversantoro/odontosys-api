const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Paciente = require("./paciente.model");
const Usuario = require("./usuario.model");
const Profissional = require("./profissional.model");

const Pagamento = sequelize.define("Pagamentos", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  pacienteId: { type: DataTypes.INTEGER, allowNull: false },
  profissionalId: { type: DataTypes.INTEGER, allowNull: false },
  valor: { type: DataTypes.FLOAT, allowNull: false },
  tipoPagamento: {
    type: DataTypes.ENUM("Particular", "Convênio", "Comissão"),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM("Pendente", "Pago"),
    defaultValue: "Pendente"
  },
  data: { type: DataTypes.DATE, allowNull: false },
  registeredBy: { type: DataTypes.INTEGER, allowNull: false }
});

// Relacionamentos
Pagamento.belongsTo(Paciente, { foreignKey: "pacienteId", as: "paciente" });
Pagamento.belongsTo(Profissional, { foreignKey: "profissionalId", as: "profissional" });
Pagamento.belongsTo(Usuario, { foreignKey: "registeredBy", as: "usuario" });

module.exports = Pagamento;
