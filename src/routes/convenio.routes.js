const express = require('express');
const { authenticateToken } = require('../middlewares/auth.middleware');
const {
  getConvenios,
  getConvenioById,
  createConvenio,
  updateConvenio,
  deleteConvenio,
} = require('../controllers/convenio.controller');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Convenios
 *   description: Gerenciamento de convênios
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Convenio:
 *       type: object
 *       required:
 *         - nome
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do convênio
 *         nome:
 *           type: string
 *           description: Nome do convênio
 *         codigo:
 *           type: string
 *           description: Código do convênio
 *         tipo:
 *           type: string
 *           description: Tipo do convênio
 *       example:
 *         id: 1
 *         nome: "Unimed"
 *         codigo: "UNI001"
 *         tipo: "Plano Odontológico"
 */

/**
 * @swagger
 * /api/convenios:
 *   get:
 *     summary: Lista todos os convênios
 *     tags: [Convenios]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de convênios retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Convenio'
 *       401:
 *         description: Token inválido ou ausente
 */
router.get('/', authenticateToken, getConvenios);

/**
 * @swagger
 * /api/convenios/{id}:
 *   get:
 *     summary: Busca um convênio pelo ID
 *     tags: [Convenios]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Convênio encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Convenio'
 *       404:
 *         description: Convênio não encontrado
 */
router.get('/:id', authenticateToken, getConvenioById);

/**
 * @swagger
 * /api/convenios:
 *   post:
 *     summary: Cadastra um novo convênio
 *     tags: [Convenios]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Convenio'
 *     responses:
 *       201:
 *         description: Convênio cadastrado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/', authenticateToken, createConvenio);

/**
 * @swagger
 * /api/convenios/{id}:
 *   put:
 *     summary: Atualiza um convênio existente
 *     tags: [Convenios]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Convenio'
 *     responses:
 *       200:
 *         description: Convênio atualizado com sucesso
 *       404:
 *         description: Convênio não encontrado
 */
router.put('/:id', authenticateToken, updateConvenio);

/**
 * @swagger
 * /api/convenios/{id}:
 *   delete:
 *     summary: Remove um convênio
 *     tags: [Convenios]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Convênio removido com sucesso
 *       404:
 *         description: Convênio não encontrado
 */
router.delete('/:id', authenticateToken, deleteConvenio);

module.exports = router;
