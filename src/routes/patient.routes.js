const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { createPatient, getPatients, getPatientById, updatePatient, deletePatient } = require("../controllers/patient.controller");

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
 *     Patient:
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
 * /api/patients:
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
 *                 $ref: '#/components/schemas/Patient'
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/", authenticateToken, getPatients);

/**
 * @swagger
 * /api/patients/{id}:
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
 *               $ref: '#/components/schemas/Patient'
 *       404:
 *         description: Paciente não encontrado
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/:id", authenticateToken, getPatientById);

/**
 * @swagger
 * /api/patients:
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
 *             $ref: '#/components/schemas/Patient'
 *     responses:
 *       201:
 *         description: Paciente cadastrado com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token inválido ou ausente
 */
router.post("/", authenticateToken, createPatient);

/**
 * @swagger
 * /api/patients/{id}:
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
router.put("/:id", authenticateToken, updatePatient);

/**
 * @swagger
 * /api/patients/{id}:
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
router.delete("/:id", authenticateToken, deletePatient);

module.exports = router;
