// routes/userViewRoutes.js
const express = require('express');
const { getConsultas, getConsultasCompleta } = require('../controllers/viewconsultas.controller');
const consultaController = require('../controllers/consulta.controller');
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
 * /api/consultas/vwconsultas:
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
router.get('/vwconsultas',  getConsultas);

/**
 * @swagger
 * /api/consultas/vwcompleta:
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
router.get('/vwcompleta',  getConsultasCompleta);

/**
 * @swagger
 * /api/consultas:
 *   post:
 *     summary: Cria uma consulta vinculada a um agendamento
 *     tags: [Consultas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               agendamentoId:
 *                 type: integer
 *               anamnese:
 *                 type: string
 *               diagnostico:
 *                 type: string
 *               prescricao:
 *                 type: string
 *     responses:
 *       201:
 *         description: Consulta criada com sucesso
 *       404:
 *         description: Agendamento não encontrado
 */
router.post('/', consultaController.criarConsultaPorAgendamento);

/**
 * @swagger
 * /api/consultas:
 *   get:
 *     summary: Lista todas as consultas
 *     tags: [Consultas]
 *     responses:
 *       200:
 *         description: Lista de consultas
 */
router.get('/', consultaController.listarConsultas);

/**
 * @swagger
 * /api/consultas/{id}:
 *   get:
 *     summary: Retorna uma consulta pelo ID
 *     tags: [Consultas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da consulta
 *     responses:
 *       200:
 *         description: Consulta encontrada
 *       404:
 *         description: Consulta não encontrada
 */
router.get('/:id', consultaController.obterConsultaPorId);

/**
 * @swagger
 * /api/consultas/{id}:
 *   put:
 *     summary: Atualiza uma consulta
 *     tags: [Consultas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da consulta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Consulta'
 *     responses:
 *       200:
 *         description: Consulta atualizada com sucesso
 *       404:
 *         description: Consulta não encontrada
 */
router.put('/:id', consultaController.atualizarConsulta);

/**
 * @swagger
 * /api/consultas/{id}:
 *   delete:
 *     summary: Remove uma consulta
 *     tags: [Consultas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da consulta
 *     responses:
 *       204:
 *         description: Consulta removida
 *       404:
 *         description: Consulta não encontrada
 */
router.delete('/:id', consultaController.deletarConsulta);


module.exports = router;
