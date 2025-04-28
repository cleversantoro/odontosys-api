const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { createProfissional, getProfissionais, getProfissionalById, updateProfissional, deleteProfissional, } = require("../controllers/profissional.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Profissionais
 *   description: Gerenciamento de profissionais do sistema
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Profissionais:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *         - dataNascimento
 *         - sexo
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único dao profissional
 *         nome:
 *           type: strimg
 *           description: Nome do profissional
 *         dataNascimento:
 *           type: string
 *           format: date-time
 *           description: Data de nascimento do profissional
 *         email:
 *           type: string
 *           format: string
 *           description: email do profissional
 *         sexo:
 *           type: string
 *           description: sexo do profissional
 *           enum: [Masculino, Feminino]
 *       example:
 *         nome: "João Silva"
 *         email: "joao@email.com"   
 *         dataNascimento: "2000-01-01T14:30:00.000Z"
 *         sexo: "Masculino"
 */

/**
 * @swagger
 * /api/profissionais:
 *   get:
 *     summary: Lista todos os profissionais cadastrados
 *     tags: [Profissionais]
  *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de profissionais retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Profissionais'
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/", authenticateToken, getProfissionais);

/**
 * @swagger
 * /api/profissionais/{id}:
 *   get:
 *     summary: Busca um profissional pelo ID
 *     tags: [Profissionais]
  *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do profissional
 *     responses:
 *       200:
 *         description: Profissional encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profissionais'
 *       404:
 *         description: Profissional não encontrado
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/:id", authenticateToken, getProfissionalById);

/**
 * @swagger
 * /api/profissionais:
 *   post:
 *     summary: Cria um novo profissional
 *     tags: [Profissionais]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Profissionais'
 *     responses:
 *       201:
 *         description: Profissional criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profissionais'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token inválido ou ausente
 */
router.post("/", authenticateToken, createProfissional);

/**
 * @swagger
 * /api/profissionais/{id}:
 *   put:
 *     summary: Atualiza os dados de um profissional
 *     tags: [Profissionais]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do profissional
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               dataNascimento:
 *                 type: string
 *                 format: date
 *               sexo:
 *                 type: string
 *                 enum: [Masculino, Feminino]
 *     responses:
 *       200:
 *         description: Profissional atualizado com sucesso
 *       404:
 *         description: Profissional não encontrado
 */
router.put("/:id", authenticateToken, updateProfissional);

/**
 * @swagger
 * /api/profissionais/{id}:
 *   delete:
 *     summary: Exclui um profissional
 *     tags: [Profissionais]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Profissional a ser cancelado
 *     responses:
 *       200:
 *         description: Profissional excluído com sucesso
 *       404:
 *         description: Profissional não encontrado
 *       401:
 *         description: Token inválido ou ausente
 */
router.delete("/:id", authenticateToken, deleteProfissional);

module.exports = router;