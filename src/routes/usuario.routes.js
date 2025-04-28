const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { getAllUsuarios, createUsuario } = require("../controllers/usuario.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Gerenciamento de usuários do sistema
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do usuário
 *         name:
 *           type: string
 *           description: Nome do usuário
 *         email:
 *           type: string
 *           format: email
 *           description: E-mail do usuário
 *       example:
 *         id: 1
 *         name: "João Silva"
 *         email: "joao@email.com"
 */

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Lista todos os usuários cadastrados
 *     tags: [Usuários]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/", authenticateToken, getAllUsuarios);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   put:
 *     summary: Atualiza os dados de um usuário existente
 *     tags: [Usuários]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário a ser atualizado
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
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Usuário não encontrado
 *       401:
 *         description: Token inválido ou ausente
 */
router.post("/", authenticateToken, createUsuario);

module.exports = router;
