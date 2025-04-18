const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { createCalendarEvent } = require("../controllers/googleCalendar.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Google Calendar
 *   description: Gerenciamento de eventos do Google Calendar
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Despesas:
 *       type: object
 *       required:
 *         - description
 *         - amount
 *         - category
 *         - despesasDate
 *       properties:
 *         pacienteId:
 *           type: string
 *           description: Nome paciente
 *         pacienteEmail:
 *           type: string
 *           description: Email paciente
 *         profissionalId:
 *           type: string
 *           description: nome profissional 
 *       example:
 *         pacienteId: "João da Silva" 
 *         pacienteEmail: "joao.silva@gmail.com"
 *         profissionalId: "Dr. José"
 */

/**
 * @swagger
 * /api/google-calendar:
 *   post:
 *     summary: Cadastra um novo evento no Google Calendar
 *     tags: [Google Calendar]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       201:
 *         description: Evento criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       401:
 *         description: Erro ao criar evento no Google Calendar
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/criar-evento", authenticateToken, createCalendarEvent);

module.exports = router;
