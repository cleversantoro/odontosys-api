// models/UserAtivoView.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const ConsultasCompletas = sequelize.define("vw_consultas_completas", {
        id: { type: DataTypes.INTEGER, primaryKey: true  },
        pacienteId: { type: DataTypes.INTEGER },
        nome_paciente: { type: DataTypes.STRING },
        dataNascimento: { type: DataTypes.DATE },
        sexo: { type: DataTypes.ENUM('Masculino', 'Feminino') },
        email_paciente: { type: DataTypes.STRING },
        convenio: { type: DataTypes.STRING },
        doencas_paciente: { type: DataTypes.TEXT },
        profissionalId: { type: DataTypes.INTEGER },
        nome_profissional: { type: DataTypes.STRING },
        especialidades: { type: DataTypes.TEXT },
        departamentos: { type: DataTypes.TEXT },
        situacao: { type: DataTypes.ENUM('Agendado', 'Confirmado', 'Cancelado', 'Realizado') },
        obs: { type: DataTypes.TEXT },
        data_agendamento: { type: DataTypes.DATE },
        agendadoPor: { type: DataTypes.STRING },
    },
    {
        tableName: "vw_consultas_completas",
        timestamps: false
    });

module.exports = ConsultasCompletas;
