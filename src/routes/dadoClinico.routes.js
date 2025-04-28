const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { createDadoClinico, getDadoClinicoByPaciente, updateDadoClinico, deleteDadoClinico } = require("../controllers/dadoClinico.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Dados Clínicos
 *   description: Gerenciamento de dados clínicos de pacientes
 */

/**
 * @swagger
 * /api/dados-clinicos:
 *   post:
 *     summary: Cadastrar dados clínicos de um paciente
 *     tags: [Dados Clínicos]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               grupoSanguineo:
 *                 type: string
 *               alergias:
 *                 type: string
 *               medicamentosContinuos:
 *                 type: string
 *               doencasPreExistentes:
 *                 type: string
 *               planoSaude:
 *                 type: string
 *               numeroApolice:
 *                 type: string
 *               pacienteId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Dados clínicos cadastrados
 */
router.post("/", authenticateToken, createDadoClinico);

/**
 * @swagger
 * /api/dados-clinicos/{pacienteId}:
 *   get:
 *     summary: Buscar dados clínicos de um paciente
 *     tags: [Dados Clínicos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: pacienteId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dados clínicos encontrados
 *       404:
 *         description: Dados clínicos não encontrados
 */
router.get("/:pacienteId", authenticateToken, getDadoClinicoByPaciente);

/**
 * @swagger
 * /api/dados-clinicos/{pacienteId}:
 *   put:
 *     summary: Atualizar dados clínicos de um paciente
 *     tags: [Dados Clínicos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: pacienteId
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               grupoSanguineo:
 *                 type: string
 *               alergias:
 *                 type: string
 *               medicamentosContinuos:
 *                 type: string
 *               doencasPreExistentes:
 *                 type: string
 *               planoSaude:
 *                 type: string
 *               numeroApolice:
 *                 type: string
 *     responses:
 *       200:
 *         description: Dados clínicos atualizados
 *       404:
 *         description: Dados clínicos não encontrados
 */
router.put("/:pacienteId", authenticateToken, updateDadoClinico);

/**
 * @swagger
 * /api/dados-clinicos/{pacienteId}:
 *   delete:
 *     summary: Excluir dados clínicos de um paciente
 *     tags: [Dados Clínicos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: pacienteId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dados clínicos excluídos
 *       404:
 *         description: Dados clínicos não encontrados
 */
router.delete("/:pacienteId", authenticateToken, deleteDadoClinico);

module.exports = router;
s