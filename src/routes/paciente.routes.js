const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { createPaciente, getPacientes, getPacienteById, updatePaciente, deletePaciente, getPacienteDetalhado } = require("../controllers/paciente.controller");
const { createPacienteCadastro } = require("../controllers/pacienteCadastro.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Pacientes
 *   description: Gerenciamento de pacientes do sistema
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Paciente:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *         - sexo
 *         - dataNascimento
 *         - registeredBy
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do paciente
 *         codigo:
 *           type: string
 *           description: Código interno do paciente
 *         nome:
 *           type: string
 *           description: Nome do paciente
 *         email:
 *           type: string
 *           format: email
 *           description: Email do paciente
 *         sexo:
 *           type: string
 *           enum: [Masculino, Feminino]
 *           description: Sexo do paciente
 *         dataNascimento:
 *           type: string
 *           format: date
 *           description: Data de nascimento
 *         estadoCivil:
 *           type: string
 *           enum: [Solteiro(a), Casado(a), Divorciado(a), Viúvo(a)]
 *           description: Estado civil
 *         nacionalidade:
 *           type: string
 *           description: Nacionalidade do paciente
 *         naturalidade:
 *           type: string
 *           description: Cidade de nascimento
 *         estado:
 *           type: string
 *           description: Estado de nascimento (UF)
 *         dataEntrada:
 *           type: string
 *           format: date
 *           description: Data de entrada no sistema
 *         registeredBy:
 *           type: integer
 *           description: ID do usuário que cadastrou
 *         obs:
 *           type: string
 *           description: Observações adicionais sobre o paciente
 *       example:
 *         id: 1
 *         codigo: PAC001
 *         nome: João Silva
 *         email: joao@email.com
 *         sexo: Masculino
 *         dataNascimento: "1990-01-01"
 *         estadoCivil: Solteiro(a)
 *         nacionalidade: Brasileiro
 *         naturalidade: São Paulo
 *         estado: SP
 *         dataEntrada: "2024-04-25"
 *         obs: Paciente com histórico de alergias
 *         registeredBy: 1
 */

/**
 * @swagger
 * /api/pacientes:
 *   get:
 *     summary: Lista todos os pacientes cadastrados
 *     tags: [Pacientes]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de pacientes retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paciente'
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/", authenticateToken, getPacientes);

/**
 * @swagger
 * /api/pacientes/{id}:
 *   get:
 *     summary: Obtém um paciente pelo ID
 *     tags: [Pacientes]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do paciente a ser recuperado
 *     responses:
 *       200:
 *         description: Paciente encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente'
 *       404:
 *         description: Paciente não encontrado
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/:id", authenticateToken, getPacienteById);

/**
 * @swagger
 * /api/pacientes:
 *   post:
 *     summary: Cadastra um novo paciente
 *     tags: [Pacientes]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente'
 *     responses:
 *       201:
 *         description: Paciente cadastrado com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token inválido ou ausente
 */
router.post("/", authenticateToken, createPaciente);

/**
 * @swagger
 * /api/pacientes/{id}:
 *   put:
 *     summary: Atualiza os dados de um paciente existente
 *     tags: [Pacientes]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do paciente a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente'
 *     responses:
 *       200:
 *         description: Paciente atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Paciente não encontrado
 *       401:
 *         description: Token inválido ou ausente
 */
router.put("/:id", authenticateToken, updatePaciente);

/**
 * @swagger
 * /api/pacientes/{id}:
 *   delete:
 *     summary: Remove um paciente do sistema
 *     tags: [Pacientes]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do paciente a ser removido
 *     responses:
 *       200:
 *         description: Paciente removido com sucesso
 *       404:
 *         description: Paciente não encontrado
 *       401:
 *         description: Token inválido ou ausente
 */
router.delete("/:id", authenticateToken, deletePaciente);

/**s
 * @swagger
 * /api/pacientes/cadastro:
 *   post:
 *     summary: Cadastra um novo paciente juntamente com endereços, telefones, documentos e dados clínicos
 *     tags: [Pacientes]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paciente:
 *                 type: object
 *                 required:
 *                   - nome
 *                   - email
 *                   - sexo
 *                   - dataNascimento
 *                 properties:
 *                   codigo:
 *                     type: string
 *                   nome:
 *                     type: string
 *                   email:
 *                     type: string
 *                     format: email
 *                   sexo:
 *                     type: string
 *                     enum: [Masculino, Feminino]
 *                   dataNascimento:
 *                     type: string
 *                     format: date
 *                   estadoCivil:
 *                     type: string
 *                     enum: [Solteiro(a), Casado(a), Divorciado(a), Viúvo(a)]
 *                   nacionalidade:
 *                     type: string
 *                   naturalidade:
 *                     type: string
 *                   estado:
 *                     type: string
 *                   dataEntrada:
 *                     type: string
 *                     format: date
 *                   obs:
 *                     type: string
 *               enderecos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     logradouro:
 *                       type: string
 *                     numero:
 *                       type: integer
 *                     bairro:
 *                       type: string
 *                     cidade:
 *                       type: string
 *                     estado:
 *                       type: string
 *                     cep:
 *                       type: string
 *                     pais:
 *                       type: string
 *                     complemento:
 *                       type: string
 *               telefones:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     numero:
 *                       type: string
 *                     tipo:
 *                       type: string
 *                       enum: [celular, residencial, comercial]
 *               documentos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     numero:
 *                       type: string
 *                     tipo:
 *                       type: string
 *                       enum: [RG, CPF, CNH, Passaporte, Certidão de Nascimento, Certidão de Casamento]
 *                     emissor:
 *                       type: string
 *                     dataEmissao:
 *                       type: string
 *                       format: date
 *               dadosClinicos:
 *                 type: object
 *                 properties:
 *                   historicoMedico:
 *                     type: string
 *                   alergias:
 *                     type: string
 *                   observacoes:
 *                     type: string
 *     responses:
 *       201:
 *         description: Paciente e dados relacionados cadastrados com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token inválido ou ausente
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/cadastro", authenticateToken, createPacienteCadastro);


/**
 * @swagger
 * /api/pacientes/{id}/detalhado:
 *   get:
 *     summary: Obtém um paciente pelo ID com endereco e documentos
 *     tags: [Pacientes]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do paciente a ser recuperado 
 *     responses:
 *       200:
 *         description: Paciente encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente'
 *       404:
 *         description: Paciente não encontrado
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/:id/detalhado", authenticateToken, getPacienteDetalhado);

module.exports = router;
