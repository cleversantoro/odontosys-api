module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define("Usuario", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    senha: { type: DataTypes.STRING, allowNull: false }
  },{ tableName: 'Usuarios', timestamps: true });

  Usuario.associate = (models) => {
    // Exemplo: se quiser listar pacientes registrados por um usuário
    Usuario.hasMany(models.Paciente, { foreignKey: 'registeredBy', as: 'pacientes' });
  };

  return Usuario;
};
