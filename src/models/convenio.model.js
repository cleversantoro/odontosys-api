// models/convenio.model.js

module.exports = (sequelize, DataTypes) => {
    const Convenio = sequelize.define('Convenio', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        nome: { type: DataTypes.STRING(255), allowNull: false },
        codigo: { type: DataTypes.STRING(20), allowNull: true },
        tipo: { type: DataTypes.STRING(50), allowNull: true }
    }, 
    {
        tableName: 'Convenios',
        timestamps: false
    });

    return Convenio;
};
