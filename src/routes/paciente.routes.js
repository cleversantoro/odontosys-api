const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { createPaciente, getPacientes, getPacienteById, updatePaciente, deletePaciente } = require("../controllers/paciente.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Pacientes
 *   description: Gerenciamento de pacientes do sistema
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Paciente:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - phone
 *         - birthDate
 *         - address
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do paciente
 *         name:
 *           type: string
 *           description: Nome do paciente
 *         email:
 *           type: string
 *           format: email
 *           description: E-mail do paciente
 *         phone:
 *           type: string
 *           description: Telefone do paciente
 *         birthDate:
 *           type: date
 *           description: Data de Nascimento
 *         address:
 *           type: string
 *           description: Endereco
 *       example:
 *         id: 1
 *         name: João Silva
 *         email: joao@email.com
 *         phone: "11999999999"
 *         birthDate: "1990-01-01"
 *         address: Rua Exemplo, 123, São Paulo, SP
 */

/**
 * @swagger
 * /api/pacientes:
 *   get:
 *     summary: Lista todos os pacientes cadastrados
 *     tags: [Pacientes]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de pacientes retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paciente'
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/", authenticateToken, getPacientes);

/**
 * @swagger
 * /api/pacientes/{id}:
 *   get:
 *     summary: Obtém um paciente pelo ID
 *     tags: [Pacientes]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do paciente a ser recuperado
 *     responses:
 *       200:
 *         description: Paciente encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente'
 *       404:
 *         description: Paciente não encontrado
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/:id", authenticateToken, getPacienteById);

/**
 * @swagger
 * /api/pacientes:
 *   post:
 *     summary: Cadastra um novo paciente
 *     tags: [Pacientes]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente'
 *     responses:
 *       201:
 *         description: Paciente cadastrado com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token inválido ou ausente
 */
router.post("/", authenticateToken, createPaciente);

/**
 * @swagger
 * /api/pacientes/{id}:
 *   put:
 *     summary: Atualiza os dados de um paciente existente
 *     tags: [Pacientes]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do paciente a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Paciente atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Paciente não encontrado
 *       401:
 *         description: Token inválido ou ausente
 */
router.put("/:id", authenticateToken, updatePaciente);

/**
 * @swagger
 * /api/pacientes/{id}:
 *   delete:
 *     summary: Remove um paciente do sistema
 *     tags: [Pacientes]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do paciente a ser removido
 *     responses:
 *       200:
 *         description: Paciente removido com sucesso
 *       404:
 *         description: Paciente não encontrado
 *       401:
 *         description: Token inválido ou ausente
 */
router.delete("/:id", authenticateToken, deletePaciente);

module.exports = router;
