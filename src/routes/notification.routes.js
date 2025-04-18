const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { sendAgendamentosNotification, sendPagamentoNotification } = require("../controllers/notification.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Notificações
 *   description: Envio de notificações por e-mail sobre agendamentos e pagamentos
 */

/**
 * @swagger
 * /api/notifications/agendamentos:
 *   post:
 *     summary: Envia um e-mail de notificação para uma agendamentos agendada
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
 *               agendamentosId:
 *                 type: integer
 *                 description: ID da agendamentos a ser notificada
 *     responses:
 *       200:
 *         description: Notificação enviada com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Agendamentos não encontrada
 *       401:
 *         description: Token inválido ou ausente
 */
router.post("/agendamentos", authenticateToken, sendAgendamentosNotification);

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
 *               pagamentoId:
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
router.post("/pagamento", authenticateToken, sendPagamentoNotification);

module.exports = router;
