// routes/userViewRoutes.js
const express = require('express');
const { getConsultas } = require('../controllers/viewconsultas.controller');
//const authenticateToken = require('../middlewares/auth.middleware');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Consultas
 *   description: Busca as consultas do sistema
 */


/**
 * @swagger
 * /api/consultas:
 *   get:
 *     summary: Lista todos as agendamentos registrados
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
 *       401:
 *         description: Token inválido ou ausente
 */
router.get('/',  getConsultas);

module.exports = router;
