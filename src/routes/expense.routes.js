const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { createExpense, getExpenses, getExpenseById, updateExpense, deleteExpense } = require("../controllers/expense.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Despesas
 *   description: Gerenciamento de despesas do sistema
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Expense:
 *       type: object
 *       required:
 *         - description
 *         - amount
 *         - category
 *         - expenseDate
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único da despesa
 *         description:
 *           type: string
 *           description: Descrição da despesa
 *         amount:
 *           type: number
 *           format: float
 *           description: Valor da despesa
 *         category:
 *           type: string
 *           description: Categoria da despesa
 *         expenseDate:
 *           type: string
 *           format: date
 *           description: Data da despesa
 *       example:
 *         id: 1
 *         description: Compra de materiais de escritório
 *         amount: 150.75
 *         category: Material de Escritório
 *         expenseDate: "2024-06-15"
 */

/**
 * @swagger
 * /api/expenses:
 *   post:
 *     summary: Cadastra uma nova despesa
 *     tags: [Despesas]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Expense'
 *     responses:
 *       201:
 *         description: Despesa cadastrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Expense'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token inválido ou ausente
 */
router.post("/", authenticateToken, createExpense);

module.exports = router;
