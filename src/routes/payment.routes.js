const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { createPayment, getPayments, getPaymentById, updatePayment, deletePayment } = require("../controllers/payment.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Pagamentos
 *   description: Gerenciamento de pagamentos e recebimentos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Payment:
 *       type: object
 *       required:
 *         - patientId
 *         - amount
 *         - paymentType
 *         - paymentDate
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do pagamento
 *         patientId:
 *           type: integer
 *           description: ID do paciente associado
 *         amount:
 *           type: number
 *           format: float
 *           description: Valor do pagamento
 *         paymentType:
 *           type: string
 *           enum: ["Particular", "Convênio", "Comissão"]
 *           description: Tipo de pagamento
 *         paymentDate:
 *           type: string
 *           format: date
 *           description: Data do pagamento
 *       example:
 *         id: 1
 *         patientId: 3
 *         amount: 250.50
 *         paymentType: "Particular"
 *         paymentDate: "2024-06-15"
 */

/**
 * @swagger
 * /api/payments:
 *   get:
 *     summary: Lista todos os pagamentos registrados
 *     tags: [Pagamentos]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de pagamentos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Payment'
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/", authenticateToken, getPayments);

/**
 * @swagger
 * /api/payments/{id}:
 *   get:
 *     summary: Obtém um pagamento pelo ID
 *     tags: [Pagamentos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do pagamento a ser recuperado
 *     responses:
 *       200:
 *         description: Pagamento encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 *       404:
 *         description: Pagamento não encontrado
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/:id", authenticateToken, getPaymentById);

/**
 * @swagger
 * /api/payments:
 *   post:
 *     summary: Registra um novo pagamento
 *     tags: [Pagamentos]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Payment'
 *     responses:
 *       201:
 *         description: Pagamento registrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token inválido ou ausente
 */
router.post("/", authenticateToken, createPayment);

/**
 * @swagger
 * /api/payments/{id}:
 *   put:
 *     summary: Atualiza os dados de um pagamento existente
 *     tags: [Pagamentos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do pagamento a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 format: float
 *               paymentType:
 *                 type: string
 *                 enum: ["Particular", "Convênio", "Comissão"]
 *               paymentDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Pagamento atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Pagamento não encontrado
 *       401:
 *         description: Token inválido ou ausente
 */
router.put("/:id", authenticateToken, updatePayment);

/**
 * @swagger
 * /api/payments/{id}:
 *   delete:
 *     summary: Remove um pagamento do sistema
 *     tags: [Pagamentos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do pagamento a ser removido
 *     responses:
 *       200:
 *         description: Pagamento removido com sucesso
 *       404:
 *         description: Pagamento não encontrado
 *       401:
 *         description: Token inválido ou ausente
 */
router.delete("/:id", authenticateToken, deletePayment);

module.exports = router;
