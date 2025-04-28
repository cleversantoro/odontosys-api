const express = require("express");
const { 
        createTelefone, 
        getTelefones, 
        getTelefoneById, 
        updateTelefone, 
        deleteTelefone, 
        getTelefoneByContatoIdandTipo
    } = require("../controllers/telefone.controller");
const { authenticateToken } = require("../middlewares/auth.middleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Telefones
 *   description: Gerenciamento de telefones do sistema
 */

/**
 * @swagger
 * /api/telefones:
 *   get:
 *     summary: Lista todos os telefones cadastrados
 *     tags: [Telefones]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de telefones retornada com sucesso
 */
router.get("/", authenticateToken, getTelefones);

/**
 * @swagger
 * /api/telefones/{id}:
 *   get:
 *     summary: Busca um telefone pelo ID
 *     tags: [Telefones]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do telefone
 *     responses:
 *       200:
 *         description: Telefone encontrado
 *       404:
 *         description: Telefone não encontrado
 */
router.get("/:id", authenticateToken, getTelefoneById);

/**
 * @swagger
 * /api/telefones/{contato_id}/{contato_tipo}:
 *   get:
 *     summary: Busca um documento pelo ID do contato e tipo de contato
 *     tags: [Telefones]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: contato_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do contato
 *       - in: path
 *         name: contato_tipo
 *         schema:
 *           type: string
 *         required: true
 *         description: Tipo de contato (paciente ou profissional)
 *     responses:
 *       200:
 *         description: Telefone encontrado
 *       404:
 *         description: Telefone não encontrado
 */
router.get("/:contato_id/:contato_tipo", authenticateToken, getTelefoneByContatoIdandTipo);

/**
 * @swagger
 * /api/telefones:
 *   post:
 *     summary: Cria um novo telefone
 *     tags: [Telefones]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numero:
 *                 type: integer
 *               tipo:
 *                 type: string
 *                 enum: [celular, residencial, comercial]
 *               contato_id:
 *                 type: integer
 *               contato_tipo:
 *                 type: string
 *                 enum: [paciente, profissional]
 *     responses:
 *       201:
 *         description: Telefone criado com sucesso
 */
router.post("/", authenticateToken, createTelefone);

/**
 * @swagger
 * /api/telefones/{id}:
 *   put:
 *     summary: Atualiza os dados de um telefone
 *     tags: [Telefones]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do telefone
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numero:
 *                 type: integer
 *               tipo:
 *                 type: string
 *                 enum: [celular, residencial, comercial]
 *               contato_id:
 *                 type: integer
 *               contato_tipo:
 *                 type: string
 *                 enum: [paciente, profissional]
 *     responses:
 *       200:
 *         description: Telefone atualizado com sucesso
 *       404:
 *         description: Telefone não encontrado
 */
router.put("/:id", authenticateToken, updateTelefone);

/**
 * @swagger
 * /api/telefones/{id}:
 *   delete:
 *     summary: Exclui um telefone
 *     tags: [Telefones]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do telefone
 *     responses:
 *       200:
 *         description: Telefone excluído com sucesso
 *       404:
 *         description: Telefone não encontrado
 */
router.delete("/:id", authenticateToken, deleteTelefone);

module.exports = router;