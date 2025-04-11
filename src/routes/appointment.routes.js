const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { createAppointment, getAppointments, getAppointmentById, updateAppointment, deleteAppointment } = require("../controllers/appointment.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Consultas
 *   description: Gerenciamento de consultas médicas
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Appointment:
 *       type: object
 *       required:
 *         - patientId
 *         - professionalId
 *         - date
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único da consulta
 *         patientId:
 *           type: integer
 *           description: ID do paciente agendado
 *         professionalId:
 *           type: integer
 *           description: ID do profissional responsável
 *         date:
 *           type: string
 *           format: date-time
 *           description: Data e hora da consulta
 *         status:
 *           type: string
 *           enum: ["Agendado", "Confirmado", "Cancelado", "Realizado"]
 *           description: Status atual da consulta
 *         notes:
 *           type: string
 *           description: Observações adicionais
 *       example:
 *         id: 1
 *         patientId: 3
 *         professionalId: 7
 *         date: "2024-06-15T14:30:00.000Z"
 *         status: "Agendado"
 *         notes: "Paciente precisa trazer exames anteriores."
 */

/**
 * @swagger
 * /api/appointments:
 *   get:
 *     summary: Lista todas as consultas agendadas
 *     tags: [Consultas]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de consultas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Appointment'
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/", authenticateToken, getAppointments);

/**
 * @swagger
 * /api/appointments/{id}:
 *   get:
 *     summary: Obtém uma consulta pelo ID
 *     tags: [Consultas]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da consulta a ser recuperada
 *     responses:
 *       200:
 *         description: Consulta encontrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appointment'
 *       404:
 *         description: Consulta não encontrada
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/:id", authenticateToken, getAppointmentById);

/**
 * @swagger
 * /api/appointments:
 *   post:
 *     summary: Agenda uma nova consulta
 *     tags: [Consultas]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Appointment'
 *     responses:
 *       201:
 *         description: Consulta agendada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appointment'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token inválido ou ausente
 */
router.post("/", authenticateToken, createAppointment);

/**
 * @swagger
 * /api/appointments/{id}:
 *   put:
 *     summary: Atualiza os dados de uma consulta existente
 *     tags: [Consultas]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da consulta a ser atualizada
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
 *         description: Consulta atualizada com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Consulta não encontrada
 *       401:
 *         description: Token inválido ou ausente
 */
router.put("/:id", authenticateToken, updateAppointment);

/**
 * @swagger
 * /api/appointments/{id}:
 *   delete:
 *     summary: Cancela uma consulta
 *     tags: [Consultas]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da consulta a ser cancelada
 *     responses:
 *       200:
 *         description: Consulta cancelada com sucesso
 *       404:
 *         description: Consulta não encontrada
 *       401:
 *         description: Token inválido ou ausente
 */
router.delete("/:id", authenticateToken, deleteAppointment);

module.exports = router;




