const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { createDadoClinico, getDadoClinicoByid, getDadoClinico, updateDadoClinico, deleteDadoClinico } = require("../controllers/dadoClinico.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Dados Clínicos
 *   description: Gerenciamento de dados clínicos de pacientes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     DadoClinico:
 *       type: object
 *       required:
 *         - grupoSanguineo
 *         - pacienteId
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do dado clínico
 *         grupoSanguineo:
 *           type: string
 *           description: Grupo sanguíneo do paciente
 *         alergias:
 *           type: string
 *           description: Alergias conhecidas do paciente
 *         medicamentosContinuos:
 *           type: string
 *           description: Medicamentos de uso contínuo do paciente
 *         doencasPreExistentes:
 *           type: string
 *           description: Doenças pré-existentes do paciente
 *         planoSaude:
 *           type: string
 *           description: Nome do plano de saúde do paciente
 *         numeroApolice:
 *           type: string
 *           description: Número da apólice do plano de saúde
 *         pacienteId:
 *           type: integer
 *           description: ID do paciente associado
 *       example:
 *         id: 1
 *         grupoSanguineo: "O+"
 *         alergias: "Amendoim, Penicilina"
 *         medicamentosContinuos: "Insulina"
 *         doencasPreExistentes: "Diabetes"
 *         planoSaude: "Unimed"
 *         numeroApolice: "123456789"
 *         pacienteId: 42
 */

/**
 * @swagger
 * /api/dadosClinicos:
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
 *           $ref: '#/components/schemas/DadoClinico'
 *     responses:
 *       200:
 *         description: Dados clínicos encontrados
 *       404:
 *         description: Dados clínicos não encontrados
 */
router.get("/", authenticateToken, getDadoClinico);

/**
 * @swagger
 * /api/dadosClinicos:
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
 *             $ref: '#/components/schemas/DadoClinico'
 *     responses:
 *       201:
 *         description: Dados clínicos cadastrados
 */
router.post("/", authenticateToken, createDadoClinico);

/**
 * @swagger
 * /api/dadosClinicos/{Id}:
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
 *           $ref: '#/components/schemas/DadoClinico'
 *     responses:
 *       200:
 *         description: Dados clínicos encontrados
 *       404:
 *         description: Dados clínicos não encontrados
 */
router.get("/:id", authenticateToken, getDadoClinicoByid);

/**
 * @swagger
 * /api/dadosClinicos/{Id}:
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
 *             $ref: '#/components/schemas/DadoClinico'
 *     responses:
 *       200:
 *         description: Dados clínicos atualizados
 *       404:
 *         description: Dados clínicos não encontrados
 */
router.put("/:id", authenticateToken, updateDadoClinico);

/**
 * @swagger
 * /api/dadosClinicos/{Id}:
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
router.delete("/:id", authenticateToken, deleteDadoClinico);

module.exports = router;
