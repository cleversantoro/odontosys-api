module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define("Token", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    token: { type: DataTypes.STRING, allowNull: false },
    expiresAt: { type: DataTypes.DATE, allowNull: false }
  },{timestamps: true });

  // Token.associate = (models) => {
  //   // Se quiser relacionar com usuário:
  //   //Token.belongsTo(models.Usuario, { foreignKey: "userId", as: "usuario" });
  // };

  return Token;
};
