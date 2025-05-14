// models/consulta.model.js
module.exports = (sequelize, DataTypes) => {
    const Consulta = sequelize.define("Consulta", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
        agendamentoId: { type: DataTypes.INTEGER, allowNull: true, }, // pode ser NULL em casos de encaixe      
        convenioId: { type: DataTypes.INTEGER, allowNull: true },
        pacienteId: { type: DataTypes.INTEGER, allowNull: false, },
        profissionalId: { type: DataTypes.INTEGER, allowNull: false, },
        dataHora: { type: DataTypes.DATE, allowNull: false, },
        anamnese: { type: DataTypes.TEXT, },
        diagnostico: { type: DataTypes.TEXT, },
        prescricao: { type: DataTypes.TEXT, },
        status: { type: DataTypes.ENUM("Aberta", "Finalizada"), defaultValue: "Aberta", },
    }, { tableName: 'Consultas', timestamps: true });

    Consulta.associate = (models) => {
        Consulta.belongsTo(models.Agendamento, { foreignKey: "agendamentoId", as: "Agendamento" });
        Consulta.belongsTo(models.Paciente, { foreignKey: "pacienteId", as: "Paciente" });
        Consulta.belongsTo(models.Profissional, { foreignKey: "profissionalId", as: "Profissional" });
        Consulta.belongsTo(models.Convenio, { foreignKey: "convenioId", as: "Convenio" });
    };

    return Consulta;
};
