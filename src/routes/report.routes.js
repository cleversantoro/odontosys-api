const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { generateFinancialReport, generateAppointmentReport } = require("../controllers/report.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Relatórios
 *   description: Geração de relatórios financeiros e de consultas
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ReportResponse:
 *       type: object
 *       properties:
 *         report:
 *           type: string
 *           description: URL do relatório gerado (PDF ou JSON)
 *       example:
 *         report: "http://localhost:5000/reports/financeiro.pdf"
 */

/**
 * @swagger
 * /api/reports/financeiro:
 *   get:
 *     summary: Gera um relatório financeiro detalhado
 *     tags: [Relatórios]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         required: false
 *         description: Data de início do relatório
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         required: false
 *         description: Data final do relatório
 *     responses:
 *       200:
 *         description: Relatório financeiro gerado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReportResponse'
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/financeiro", authenticateToken, generateFinancialReport);

/**
 * @swagger
 * /api/reports/consultas:
 *   get:
 *     summary: Gera um relatório de consultas agendadas
 *     tags: [Relatórios]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         required: false
 *         description: Data de início do relatório
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         required: false
 *         description: Data final do relatório
 *     responses:
 *       200:
 *         description: Relatório de consultas gerado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReportResponse'
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/consultas", authenticateToken, generateAppointmentReport);

module.exports = router;
