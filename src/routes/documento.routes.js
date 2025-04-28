const express = require("express");
const documentoController = require("../controllers/documento.controller");
const { authenticateToken } = require("../middlewares/auth.middleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Documentos
 *   description: Gerenciamento de documentos de pacientes e profissionais
 */

/**
 * @swagger
 * /api/documentos:
 *   post:
 *     summary: Cria um novo documento
 *     tags: [Documentos]
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
 *                 type: string
 *               tipo:
 *                 type: string
 *                 enum: [RG, CPF, CNH, Passaporte, Certidão de Nascimento, Certidão de Casamento]
 *               emissor:
 *                 type: string
 *               dataEmissao:
 *                 type: string
 *                 format: date
 *               contato_id:
 *                 type: integer
 *               contato_tipo:
 *                 type: string
 *                 enum: [paciente, profissional]
 *               registeredBy:
 *                 type: integer
 *             required:
 *               - numero
 *               - tipo
 *               - contato_id
 *               - contato_tipo
 *               - registeredBy
 *     responses:
 *       201:
 *         description: Documento criado com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/", authenticateToken, documentoController.createDocumento);

/**
 * @swagger
 * /api/documentos:
 *   get:
 *     summary: Lista todos os documentos
 *     tags: [Documentos]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de documentos retornada com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/", authenticateToken, documentoController.getAllDocumentos);

/**
 * @swagger
 * /api/documentos/{id}:
 *   get:
 *     summary: Busca um documento pelo ID
 *     tags: [Documentos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do documento
 *     responses:
 *       200:
 *         description: Documento encontrado
 *       404:
 *         description: Documento não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/:id", authenticateToken, documentoController.getDocumentoById);

/**
 * @swagger
 * /api/documentos/{contato_id}/{contato_tipo}:
 *   get:
 *     summary: Busca um documento pelo ID do contato e tipo de contato
 *     tags: [Documentos]
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
 *         description: Documento encontrado
 *       404:
 *         description: Documento não encontrado
 */
router.get("/:contato_id/:contato_tipo", authenticateToken, documentoController.getDocumentosByContatoIdandTipo);

/**
 * @swagger
 * /api/documentos/{id}:
 *   put:
 *     summary: Atualiza um documento pelo ID
 *     tags: [Documentos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do documento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numero:
 *                 type: string
 *               tipo:
 *                 type: string
 *                 enum: [RG, CPF, CNH, Passaporte, Certidão de Nascimento, Certidão de Casamento]
 *               emissor:
 *                 type: string
 *               dataEmissao:
 *                 type: string
 *                 format: date
 *               contato_id:
 *                 type: integer
 *               contato_tipo:
 *                 type: string
 *                 enum: [paciente, profissional]
 *               registeredBy:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Documento atualizado com sucesso
 *       404:
 *         description: Documento não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put("/:id", authenticateToken, documentoController.updateDocumento);

/**
 * @swagger
 * /api/documentos/{id}:
 *   delete:
 *     summary: Deleta um documento pelo ID
 *     tags: [Documentos]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do documento
 *     responses:
 *       200:
 *         description: Documento deletado com sucesso
 *       404:
 *         description: Documento não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete("/:id", authenticateToken, documentoController.deleteDocumento);

module.exports = router;
