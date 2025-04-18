const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { createPagamento, getPagamentos, getPagamentoById, updatePagamento, deletePagamento } = require("../controllers/pagamento.controller");

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
 *     Pagamento:
 *       type: object
 *       required:
 *         - pacienteId
 *         - amount
 *         - pagamentoType
 *         - pagamentoDate
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do pagamento
 *         pacienteId:
 *           type: integer
 *           description: ID do paciente associado
 *         amount:
 *           type: number
 *           format: float
 *           description: Valor do pagamento
 *         pagamentoType:
 *           type: string
 *           enum: ["Particular", "Convênio", "Comissão"]
 *           description: Tipo de pagamento
 *         pagamentoDate:
 *           type: string
 *           format: date
 *           description: Data do pagamento
 *       example:
 *         id: 1
 *         pacienteId: 3
 *         amount: 250.50
 *         pagamentoType: "Particular"
 *         pagamentoDate: "2024-06-15"
 */

/**
 * @swagger
 * /api/pagamentos:
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
 *                 $ref: '#/components/schemas/Pagamento'
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/", authenticateToken, getPagamentos);

/**
 * @swagger
 * /api/pagamentos/{id}:
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
 *               $ref: '#/components/schemas/Pagamento'
 *       404:
 *         description: Pagamento não encontrado
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/:id", authenticateToken, getPagamentoById);

/**
 * @swagger
 * /api/pagamentos:
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
 *             $ref: '#/components/schemas/Pagamento'
 *     responses:
 *       201:
 *         description: Pagamento registrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pagamento'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token inválido ou ausente
 */
router.post("/", authenticateToken, createPagamento);

/**
 * @swagger
 * /api/pagamentos/{id}:
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
 *               pagamentoType:
 *                 type: string
 *                 enum: ["Particular", "Convênio", "Comissão"]
 *               pagamentoDate:
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
router.put("/:id", authenticateToken, updatePagamento);

/**
 * @swagger
 * /api/pagamentos/{id}:
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
router.delete("/:id", authenticateToken, deletePagamento);

module.exports = router;
