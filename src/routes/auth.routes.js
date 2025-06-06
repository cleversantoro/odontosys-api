const express = require("express");
const { register, login, refresh, logout } = require("../controllers/auth.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Autenticação
 *   description: Gerenciamento de usuários e autenticação
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterRequest:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *         - senha
 *       properties:
 *         nome:
 *           type: string
 *           description: Nome do usuário
 *         email:
 *           type: string
 *           format: email
 *           description: E-mail do usuário
 *         senha:
 *           type: string
 *           description: Senha do usuário
 *       example:
 *         nome: "João Silva"
 *         email: "joao@email.com"
 *         senha: "123456"
 *
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - senha
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: E-mail do usuário
 *         senha:
 *           type: string
 *           description: Senha do usuário
 *       example:
 *         email: "joao@email.com"
 *         senha: "123456"
 *
 *     AuthResponse:
 *       type: object
 *       properties:
 *         accessToken:
 *           type: string
 *           description: Token JWT de autenticação
 *         refreshToken:
 *           type: string
 *           description: Token de atualização
 *       example:
 *         accessToken: "eyJhbGciOiJIUzI1NiIsInR5c..."
 *         refreshToken: "dGlzIGlzIGEgdGVzdCB0b2tlbi4uLg=="
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest'
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro no servidor
 */
router.post("/register", register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Autentica um usuário e retorna um token JWT
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       401:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro no servidor
 */
router.post("/login", login);

/**
 * @swagger
 * /api/auth/refresh:
 *   post:
 *     summary: Gera um novo access token usando refresh token
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 description: Token de atualização
 *     responses:
 *       200:
 *         description: Novo access token gerado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Token de atualização inválido ou ausente
 *       500:
 *         description: Erro no servidor
 */
router.post("/refresh", refresh);

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Encerra a sessão do usuário e revoga o refresh token
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 description: Token de atualização a ser revogado
 *     responses:
 *       200:
 *         description: Logout realizado com sucesso
 *       400:
 *         description: Token de atualização inválido ou ausente
 *       500:
 *         description: Erro no servidor
 */
router.post("/logout", logout);

module.exports = router;
