// routes/userViewRoutes.js
const express = require('express');
const { getConsultas } = require('../controllers/viewconsultas.controller');
//const authenticateToken = require('../middlewares/auth.middleware');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Consultas
 *   description: Busca as consultas do sistema
 */

/**
* @swagger
* components:
*   schemas:
*     Consultas:
*       type: Array
*       properties:
*         id:
*           type: integer
*           description: ID único da consulta
*         nome_paciente:
*           type: integer
*           description: nome do paciente associado
*         nome_profissional:
*           type: integer
*           description: nome do profissional associado
*         data_agendamento:
*           type: string
*           format: date-time
*           description: Data e hora da consulta
*         situacao:
*           type: string
*           enum: [Agendada, Confirmada, Cancelada, Realizada]
*           description: situacao da consulta
*         obs:
*           type: string
*           description: Observações adicionais sobre a consulta
*       example:
*         id: 1
*         nome_paciente: "João da Silva"
*         nome_profissional: "Dr. Maria Oliveira"
*         data_agendamento: "2025-05-02T14:00:00Z"
*         situacao: "Agendada"
*         observacoes: "Consulta de rotina"
*/

/**
 * @swagger
 * /api/consultas:
 *   get:
 *     summary: Lista todos as agendamentos registrados
 *     tags: [Consultas]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de consultas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Consultas'
 *       401:
 *         description: Token inválido ou ausente
 */
router.get('/',  getConsultas);

module.exports = router;
