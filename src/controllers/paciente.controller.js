const Paciente = require("../models/paciente.model");

exports.createPaciente = async (req, res) => {
  try {
    const { nome, email, sexo, dataNascimento } = req.body;
    const registeredBy = req.usuario.id; // Usuário autenticado

    const newPaciente = await Paciente.create({ nome, email, sexo, dataNascimento, registeredBy });

    res.status(201).json(newPaciente);
  } catch (error) {
    res.status(500).json({ error: "Erro ao cadastrar paciente" });
  }
};

exports.getPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar pacientes" });
  }
};

exports.getPacienteById = async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id);
    if (!paciente) return res.status(404).json({ error: "Paciente não encontrado" });

    res.json(paciente);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar paciente" });
  }
};

exports.updatePaciente = async (req, res) => {
  try {
    const { nome, email, sexo, dataNascimento } = req.body;
    const paciente = await Paciente.findByPk(req.params.id);

    if (!paciente) return res.status(404).json({ error: "Paciente não encontrado" });

    await paciente.update({ nome, email, sexo, dataNascimento });

    res.json({ message: "Paciente atualizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar paciente" });
  }
};

exports.deletePaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id);

    if (!paciente) return res.status(404).json({ error: "Paciente não encontrado" });

    await paciente.destroy();
    res.json({ message: "Paciente excluído com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir paciente" });
  }
};
