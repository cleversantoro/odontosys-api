const { Agendamento } = require('../models');
const io = require("../config/socket"); // WebSockets para notificações em tempo real

exports.getAgendamentos = async (req, res) => {
  try {
    const agendamentos = await Agendamento.findAll({ include: ["Pacientes", "Profissionais", "Convenios" ,"Usuarios"] });
    res.json(agendamentos);
  } catch (error) {
    res.status(500).json({ "Erro ao buscar agendamentos: ": error });
  }
};

exports.getAgendamentosPorId = async (req, res) => {
  try {
    const agendamentos = await Agendamento.findByPk(req.params.id, { include: ["Pacientes", "Profissionais", "Convenios" ,"Usuarios"] });

    if (!agendamentos) return res.status(404).json({ error: "Agendamentos não encontrada" });

    res.json(agendamentos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar agendamentos" });
  }
};

exports.deleteAgendamentos = async (req, res) => {
  try {
    const agendamentos = await Agendamento.findByPk(req.params.id);

    if (!agendamentos) return res.status(404).json({ error: "Agendamentos não encontrada" });

    await agendamentos.destroy();

    io.emit("agendamentosDeleted", { id: req.params.id }); // Atualiza os clientes em tempo real

    res.json({ message: "Agendamentos excluída com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir agendamentos" });
  }
};

exports.createAgendamentos = async (req, res) => {
  try {
    const { pacienteId, profissionalId, convenioId, data, status, obs } = req.body;
    const registeredBy = req.usuario.id; // Usuário autenticado

    const newAgendamentos = await Agendamento.create({ pacienteId, profissionalId, convenioId, data, status, obs, registeredBy });

    io.emit("agendamentosCreated", newAgendamentos); // Notifica em tempo real

    res.status(201).json(newAgendamentos);
  } catch (error) {
    console.error("Erro ao criar agendamentos:", error); // Log do erro para depuração
    res.status(500).json({ error: "Erro ao criar agendamento" });
  }
};

exports.updateAgendamentos = async (req, res) => {
  try {
    const { data, status, obs } = req.body;
    const agendamentos = await Agendamento.findByPk(req.params.id);

    if (!agendamentos) return res.status(404).json({ error: "Agendamentos não encontrada" });

    await agendamentos.update({ data, status, obs });

    io.emit("agendamentosUpdated", agendamentos); // Atualiza em tempo real

    res.json({ message: "Agendamentos atualizada com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar agendamentos" });
  }
};
