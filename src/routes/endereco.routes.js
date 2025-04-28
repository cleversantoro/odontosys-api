const express = require("express");
const { 
        createEndereco, 
        getEnderecos, 
        getEnderecoById, 
        updateEndereco, 
        deleteEndereco, 
        getEnderecoByContatoIdandTipo
    } = require("../controllers/endereco.controller");

const { authenticateToken } = require("../middlewares/auth.middleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Endereços
 *   description: Gerenciamento de endereços do sistema
 */

/**
 * @swagger
 * /api/enderecos:
 *   get:
 *     summary: Lista todos os endereços cadastrados
 *     tags: [Endereços]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de endereços retornada com sucesso
 */
router.get("/", authenticateToken, getEnderecos);

/**
 * @swagger
 * /api/enderecos/{id}:
 *   get:
 *     summary: Busca um endereço pelo ID
 *     tags: [Endereços]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do endereço
 *     responses:
 *       200:
 *         description: Endereço encontrado
 *       404:
 *         description: Endereço não encontrado
 */
router.get("/:id", authenticateToken, getEnderecoById);

/**
 * @swagger
 * /api/enderecos/{contato_id}/{contato_tipo}:
 *   get:
 *     summary: Busca um endereço pelo ID do contato e tipo de contato
 *     tags: [Endereços]
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
 *         description: Endereço encontrado
 *       404:
 *         description: Endereço não encontrado
 */
router.get("/:contato_id/:contato_tipo", authenticateToken, getEnderecoByContatoIdandTipo);

/**
 * @swagger
 * /api/enderecos:
 *   post:
 *     summary: Cria um novo endereço
 *     tags: [Endereços]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rua:
 *                 type: string
 *               numero:
 *                 type: string
 *               complemento:
 *                 type: string
 *               bairro:
 *                 type: string
 *               cidade:
 *                 type: string
 *               estado:
 *                 type: string
 *               cep:
 *                 type: string
 *               contato_id:
 *                 type: integer
 *               contato_tipo:
 *                 type: string
 *                 enum: [paciente, profissional]
 *     responses:
 *       201:
 *         description: Endereço criado com sucesso
 */
router.post("/", authenticateToken, createEndereco);

/**
 * @swagger
 * /api/enderecos/{id}:
 *   put:
 *     summary: Atualiza os dados de um endereço
 *     tags: [Endereços]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do endereço
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               logradouro:
 *                 type: string
 *               numero:
 *                 type: string
 *               complemento:
 *                 type: string
 *               bairro:
 *                 type: string
 *               cidade:
 *                 type: string
 *               estado:
 *                 type: string
 *               cep:
 *                 type: string
 *               contato_id:
 *                 type: integer
 *               contato_tipo:
 *                 type: string
 *                 enum: [paciente, profissional]
 *     responses:
 *       200:
 *         description: Endereço atualizado com sucesso
 *       404:
 *         description: Endereço não encontrado
 */
router.put("/:id", authenticateToken, updateEndereco);

/**
 * @swagger
 * /api/enderecos/{id}:
 *   delete:
 *     summary: Exclui um endereço
 *     tags: [Endereços]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do endereço
 *     responses:
 *       200:
 *         description: Endereço excluído com sucesso
 *       404:
 *         description: Endereço não encontrado
 */
router.delete("/:id", authenticateToken, deleteEndereco);

module.exports = router;