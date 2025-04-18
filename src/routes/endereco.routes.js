const express = require("express");
const {
  createEndereco,
  getEnderecos,
  getEnderecoById,
  updateEndereco,
  deleteEndereco,
} = require("../controllers/endereco.controller");

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
 *     responses:
 *       200:
 *         description: Lista de endereços retornada com sucesso
 */
router.get("/", getEnderecos);

/**
 * @swagger
 * /api/enderecos/{id}:
 *   get:
 *     summary: Busca um endereço pelo ID
 *     tags: [Endereços]
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
router.get("/:id", getEnderecoById);

/**
 * @swagger
 * /api/enderecos:
 *   post:
 *     summary: Cria um novo endereço
 *     tags: [Endereços]
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
router.post("/", createEndereco);

/**
 * @swagger
 * /api/enderecos/{id}:
 *   put:
 *     summary: Atualiza os dados de um endereço
 *     tags: [Endereços]
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
 *               rua:
 *                 type: string
 *               numero:
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
router.put("/:id", updateEndereco);

/**
 * @swagger
 * /api/enderecos/{id}:
 *   delete:
 *     summary: Exclui um endereço
 *     tags: [Endereços]
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
router.delete("/:id", deleteEndereco);

module.exports = router;