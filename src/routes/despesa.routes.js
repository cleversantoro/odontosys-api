const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { createDespesas, getDespesas, getDespesasById, updateDespesas, deleteDespesas } = require("../controllers/despesa.controller");

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
 *     Despesas:
 *       type: object
 *       required:
 *         - descricao
 *         - valor
 *         - categoria
 *         - data
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único da despesa
 *         descricao:
 *           type: string
 *           description: Descrição da despesa
 *         valor:
 *           type: number
 *           format: float
 *           description: Valor da despesa
 *         categoria:
 *           type: string
 *           description: Categoria da despesa
 *         data:
 *           type: string
 *           format: date
 *           description: Data da despesa
 *       example:
 *         id: 1
 *         descricao: "Compra de materiais de escritório"
 *         valor: 150.75
 *         categoria: "Material de Escritório"
 *         data: "2024-06-15"
 */

/**
 * @swagger
 * /api/despesas:
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
 *             $ref: '#/components/schemas/Despesas'
 *     responses:
 *       201:
 *         description: Despesa cadastrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Despesas'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token inválido ou ausente
 */
router.post("/", authenticateToken, createDespesas);

/**
 * @swagger
 * /api/despesas:
 *   get:
 *     summary: Lista todos as Despesas cadastradas
 *     tags: [Despesas]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de Despesas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Despesas'
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/", authenticateToken, getDespesas);

module.exports = router;
