const express = require("express");
const {
  createTelefone,
  getTelefones,
  getTelefoneById,
  updateTelefone,
  deleteTelefone,
} = require("../controllers/telefone.controller");

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
 *     responses:
 *       200:
 *         description: Lista de telefones retornada com sucesso
 */
router.get("/", getTelefones);

/**
 * @swagger
 * /api/telefones/{id}:
 *   get:
 *     summary: Busca um telefone pelo ID
 *     tags: [Telefones]
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
router.get("/:id", getTelefoneById);

/**
 * @swagger
 * /api/telefones:
 *   post:
 *     summary: Cria um novo telefone
 *     tags: [Telefones]
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
router.post("/", createTelefone);

/**
 * @swagger
 * /api/telefones/{id}:
 *   put:
 *     summary: Atualiza os dados de um telefone
 *     tags: [Telefones]
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
router.put("/:id", updateTelefone);

/**
 * @swagger
 * /api/telefones/{id}:
 *   delete:
 *     summary: Exclui um telefone
 *     tags: [Telefones]
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
router.delete("/:id", deleteTelefone);

module.exports = router;