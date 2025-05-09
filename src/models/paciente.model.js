module.exports = (sequelize, DataTypes) => {
  const Paciente = sequelize.define("Paciente", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    codigo: { type: DataTypes.STRING(50), allowNull: true },
    nome: { type: DataTypes.STRING(255), allowNull: false },
    email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
    dataNascimento: { type: DataTypes.DATE, allowNull: false },
    sexo: { type: DataTypes.ENUM("Masculino", "Feminino"), allowNull: false },
    estadoCivil: {
      type: DataTypes.ENUM("Solteiro(a)", "Casado(a)", "Divorciado(a)", "Viúvo(a)"),
      allowNull: true
    },
    nacionalidade: { type: DataTypes.STRING(100), allowNull: true },
    naturalidade: { type: DataTypes.STRING(100), allowNull: true },
    estado: { type: DataTypes.STRING(2), allowNull: true },
    dataEntrada: { type: DataTypes.DATEONLY, allowNull: true },
    obs: { type: DataTypes.TEXT, allowNull: true },
    registeredBy: { type: DataTypes.INTEGER, allowNull: false }
  }, { tableName: 'Pacientes', timestamps: true });

  Paciente.associate = (models) => {
    Paciente.belongsTo(models.Usuario, { foreignKey: "registeredBy", as: "usuario" });

    Paciente.belongsToMany(models.Doenca, { through: 'PacienteDoencas', foreignKey: 'pacienteId', otherKey: 'doencaId' });
    Paciente.belongsToMany(models.Convenio, { through: 'PacienteConvenios', foreignKey: 'pacienteId', otherKey: 'convenioId' });
  };

  return Paciente;
};
