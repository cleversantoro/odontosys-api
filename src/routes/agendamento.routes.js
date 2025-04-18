const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { createAgendamentos, getAgendamentos, getAgendamentosPorId, updateAgendamentos, deleteAgendamentos } = require("../controllers/agendamento.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Agendamentos
 *   description: Gerenciamento de agendamentos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Agendamentos:
 *       type: object
 *       required:
 *         - pacienteId
 *         - profissionalId
 *         - data
 *         - status
 *         - obs
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único da agendamentos
 *         pacienteId:
 *           type: integer
 *           description: ID do paciente agendado
 *         profissionalId:
 *           type: integer
 *           description: ID do profissional responsável
 *         data:
 *           type: string
 *           format: date-time
 *           description: Data e hora da agendamentos
 *         status:
 *           type: string
 *           enum: ["Agendado", "Confirmado", "Cancelado", "Realizado"]
 *           description: Status atual da agendamentos
 *         obs:
 *           type: string
 *           description: Observações adicionais
 *       example:
 *         pacienteId: 1
 *         profissionalId: 1
 *         data: "2024-06-15T14:30:00.000Z"
 *         status: "Agendado"
 *         obs: "Paciente precisa trazer exames anteriores."
 */

/**
 * @swagger
 * /api/agendamentos:
 *   get:
 *     summary: Lista todos as agendamentos registrados
 *     tags: [Agendamentos]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de agendamentos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Agendamentos'
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/", authenticateToken, getAgendamentos);

/**
 * @swagger
 * /api/agendamentos/{id}:
 *   get:
 *     summary: Obtém um agendamento pelo ID
 *     tags: [Agendamentos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da agendamentos a ser recuperada
 *     responses:
 *       200:
 *         description: Agendamentos encontrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agendamentos'
 *       404:
 *         description: Agendamentos não encontrada
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/:id", authenticateToken, getAgendamentosPorId);

/**
 * @swagger
 * /api/agendamentos:
 *   post:
 *     summary: Realiza um novo agendamento
 *     tags: [Agendamentos]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Agendamentos'
 *     responses:
 *       201:
 *         description: Agendamentos agendada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agendamentos'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token inválido ou ausente
 */
router.post("/", authenticateToken, createAgendamentos);

/**
 * @swagger
 * /api/agendamentos/{id}:
 *   put:
 *     summary: Atualiza os dados de um agendamento existente
 *     tags: [Agendamentos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da agendamentos a ser atualizada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *                 enum: ["Agendado", "Confirmado", "Cancelado", "Realizado"]
 *               notes:
 *                 type: string
 *     responses:
 *       200:
 *         description: Agendamento atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Agendamento não encontrado
 *       401:
 *         description: Token inválido ou ausente
 */
router.put("/:id", authenticateToken, updateAgendamentos);

/**
 * @swagger
 * /api/agendamentos/{id}:
 *   delete:
 *     summary: Cancela um agendamento
 *     tags: [Agendamentos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do agendamento a ser cancelado
 *     responses:
 *       200:
 *         description: Agendamento cancelado com sucesso
 *       404:
 *         description: Agendamento não encontrado
 *       401:
 *         description: Token inválido ou ausente
 */
router.delete("/:id", authenticateToken, deleteAgendamentos);

module.exports = router;




