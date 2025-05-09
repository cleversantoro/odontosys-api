module.exports = (sequelize, DataTypes) => {
  const Profissional = sequelize.define("Profissional", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    dataNascimento: { type: DataTypes.DATE, allowNull: false },
    sexo: { type: DataTypes.ENUM("Masculino", "Feminino"), allowNull: false },
    registeredBy: { type: DataTypes.INTEGER, allowNull: false }
  },{ tableName: 'Profissionais', timestamps: true });

  Profissional.associate = (models) => {
    Profissional.belongsTo(models.Usuario, { foreignKey: "registeredBy", as: "usuario" });

    // Exemplo: se tiver relação com especialidades N:N
    Profissional.belongsToMany(models.Especialidade, { through: 'ProfissionalEspecialidades', foreignKey: 'profissionalId', otherKey: 'especialidadeId' });
    Profissional.belongsToMany(models.Departamento, { through: 'ProfissionalDepartamentos', foreignKey: 'profissionalId', otherKey: 'departamentoId' });
  };

  return Profissional;
};
