const Paciente = require("../models/paciente.model");

// Criar novo paciente
exports.createPaciente = async (req, res) => {
  try {
    const { codigo, nome, email, sexo, dataNascimento, estadoCivil, nacionalidade, naturalidade, estado, dataEntrada, obs } = req.body;

    const registeredBy = req.usuario.id; // ID do usuário autenticado

    const newPaciente = await Paciente.create(
      { codigo, nome, email, sexo, dataNascimento, estadoCivil, nacionalidade, naturalidade, estado, dataEntrada, obs, registeredBy }
    );

    res.status(201).json(newPaciente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao cadastrar paciente" });
  }
};

// Buscar todos os pacientes
exports.getPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    res.json(pacientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar pacientes" });
  }
};

// Buscar paciente por ID
exports.getPacienteById = async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id);
    if (!paciente) {
      return res.status(404).json({ error: "Paciente não encontrado" });
    }

    res.json(paciente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar paciente" });
  }
};

// Atualizar paciente
exports.updatePaciente = async (req, res) => {
  try {
    const {
      codigo,
      nome,
      email,
      sexo,
      dataNascimento,
      estadoCivil,
      nacionalidade,
      naturalidade,
      estado,
      dataEntrada,
      obs
    } = req.body;

    const paciente = await Paciente.findByPk(req.params.id);

    if (!paciente) {
      return res.status(404).json({ error: "Paciente não encontrado" });
    }

    await paciente.update({
      codigo,
      nome,
      email,
      sexo,
      dataNascimento,
      estadoCivil,
      nacionalidade,
      naturalidade,
      estado,
      dataEntrada,
      obs
    });

    res.json({ message: "Paciente atualizado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar paciente" });
  }
};

// Deletar paciente
exports.deletePaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id);

    if (!paciente) {
      return res.status(404).json({ error: "Paciente não encontrado" });
    }

    await paciente.destroy();
    res.json({ message: "Paciente excluído com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao excluir paciente" });
  }
};
