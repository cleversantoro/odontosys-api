const Patient = require("../models/patient.model");

exports.createPatient = async (req, res) => {
  try {
    const { name, email, phone, birthDate, address } = req.body;
    const registeredBy = req.user.id; // Usuário autenticado

    const newPatient = await Patient.create({ name, email, phone, birthDate, address, registeredBy });

    res.status(201).json(newPatient);
  } catch (error) {
    res.status(500).json({ error: "Erro ao cadastrar paciente" });
  }
};

exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar pacientes" });
  }
};

exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) return res.status(404).json({ error: "Paciente não encontrado" });

    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar paciente" });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const { name, email, phone, birthDate, address } = req.body;
    const patient = await Patient.findByPk(req.params.id);

    if (!patient) return res.status(404).json({ error: "Paciente não encontrado" });

    await patient.update({ name, email, phone, birthDate, address });

    res.json({ message: "Paciente atualizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar paciente" });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);

    if (!patient) return res.status(404).json({ error: "Paciente não encontrado" });

    await patient.destroy();
    res.json({ message: "Paciente excluído com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir paciente" });
  }
};
