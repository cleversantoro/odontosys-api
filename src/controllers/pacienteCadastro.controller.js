const { sequelize } = require("../config/database");
const Paciente = require("../models/paciente.model");
const Endereco = require("../models/endereco.model");
const Telefone = require("../models/telefone.model");
const Documento = require("../models/documento.model");
const DadoClinico = require("../models/dadoClinico.model"); // supondo que tenha um model pra isso

exports.createPacienteCadastro = async (req, res) => {
  const t = await sequelize.transaction(); // <- Transação pra garantir tudo ou nada

  try {
    const { paciente, enderecos, telefones, documentos, dadosClinicos } = req.body;

    const registeredBy = req.usuario.id; // Quem tá cadastrando

    // Cria paciente
    const newPaciente = await Paciente.create(
      { ...paciente, registeredBy },
      { transaction: t }
    );

    // Cria endereços
    if (enderecos && enderecos.length > 0) {
      for (const endereco of enderecos) {
        await Endereco.create(
          { ...endereco, contato_id: newPaciente.id, contato_tipo: "paciente", registeredBy },
          { transaction: t });
      }
    }

    // Cria telefones
    if (telefones && telefones.length > 0) {
      for (const telefone of telefones) {
        await Telefone.create(
          { ...telefone, contato_id: newPaciente.id, contato_tipo: "paciente", registeredBy },
          { transaction: t });
      }
    }

    // Cria documentos
    if (documentos && documentos.length > 0) {
      for (const documento of documentos) {
        await Documento.create(
          { ...documento, contato_id: newPaciente.id, contato_tipo: "paciente", registeredBy },
          { transaction: t });
      }
    }

    // Cria dados clínicos
    if (dadosClinicos) {
      await DadoClinico.create(
        { ...dadosClinicos, pacienteId: newPaciente.id, registeredBy },
        { transaction: t }
      );
    }

    await t.commit(); // Tudo deu certo? Commit!

    res.status(201).json({ message: "Paciente e dados relacionados cadastrados com sucesso!", paciente: newPaciente });
  } catch (error) {
    await t.rollback(); // Algum erro? Volta tudo
    console.error(error);
    res.status(500).json({ error: "Erro ao cadastrar paciente completo" });
  }
};
