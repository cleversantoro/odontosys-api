const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { sendAppointmentNotification, sendPaymentNotification } = require("../controllers/notification.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Notificações
 *   description: Envio de notificações por e-mail sobre consultas e pagamentos
 */

/**
 * @swagger
 * /api/notifications/consulta:
 *   post:
 *     summary: Envia um e-mail de notificação para uma consulta agendada
 *     tags: [Notificações]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               appointmentId:
 *                 type: integer
 *                 description: ID da consulta a ser notificada
 *     responses:
 *       200:
 *         description: Notificação enviada com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Consulta não encontrada
 *       401:
 *         description: Token inválido ou ausente
 */
router.post("/consulta", authenticateToken, sendAppointmentNotification);

/**
 * @swagger
 * /api/notifications/pagamento:
 *   post:
 *     summary: Envia um e-mail de notificação para um pagamento recebido
 *     tags: [Notificações]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paymentId:
 *                 type: integer
 *                 description: ID do pagamento a ser notificado
 *     responses:
 *       200:
 *         description: Notificação enviada com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Pagamento não encontrado
 *       401:
 *         description: Token inválido ou ausente
 */
router.post("/pagamento", authenticateToken, sendPaymentNotification);

module.exports = router;
