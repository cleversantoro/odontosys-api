// models/UserAtivoView.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Consultas = sequelize.define("vw_consultas", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    nome_paciente: { type: DataTypes.STRING },
    nome_profissional: { type: DataTypes.STRING },
    data_agendamento: { type: DataTypes.DATE },
    situacao: { type: DataTypes.STRING },
    obs: { type: DataTypes.TEXT },
    agendadopor: { type: DataTypes.STRING }
},
{
     tableName: "vw_consultas",
     timestamps: false
});

module.exports = Consultas;
