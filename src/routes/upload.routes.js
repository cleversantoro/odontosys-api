const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const upload = require("../services/upload.service");
const { uploadFile, getFiles, deleteFile } = require("../controllers/upload.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Uploads
 *   description: Gerenciamento de arquivos (exames, documentos, imagens)
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     File:
 *       type: object
 *       properties:
 *         fileName:
 *           type: string
 *           description: Nome do arquivo salvo no servidor
 *         url:
 *           type: string
 *           description: URL do arquivo para download ou visualização
 *       example:
 *         fileName: "exame123.pdf"
 *         url: "http://localhost:5000/uploads/exame123.pdf"
 */

/**
 * @swagger
 * /api/uploads/{patientId}:
 *   post:
 *     summary: Faz o upload de um arquivo para um paciente específico
 *     tags: [Uploads]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: patientId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do paciente associado ao arquivo
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Arquivo enviado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/File'
 *       400:
 *         description: Nenhum arquivo enviado ou formato inválido
 *       401:
 *         description: Token inválido ou ausente
 */
router.post("/:patientId", authenticateToken, upload.single("file"), uploadFile);

/**
 * @swagger
 * /api/uploads/{patientId}:
 *   get:
 *     summary: Lista todos os arquivos de um paciente
 *     tags: [Uploads]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: patientId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do paciente para listar arquivos
 *     responses:
 *       200:
 *         description: Lista de arquivos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/File'
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/:patientId", authenticateToken, getFiles);

/**
 * @swagger
 * /api/uploads/{fileName}:
 *   delete:
 *     summary: Exclui um arquivo do servidor
 *     tags: [Uploads]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: fileName
 *         required: true
 *         schema:
 *           type: string
 *         description: Nome do arquivo a ser excluído
 *     responses:
 *       200:
 *         description: Arquivo excluído com sucesso
 *       404:
 *         description: Arquivo não encontrado
 *       401:
 *         description: Token inválido ou ausente
 */
router.delete("/:fileName", authenticateToken, deleteFile);

module.exports = router;
