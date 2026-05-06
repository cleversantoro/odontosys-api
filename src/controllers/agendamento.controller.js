const { Agendamento, Sequelize } = require('../models');
const { Op } = Sequelize;
const io = require("../config/socket"); // WebSockets para notificações em tempo real

exports.getAgendamentos = async (req, res) => {
  try {
    const { inicio, fim } = req.query;
    const where = {};

    if (inicio && fim) {
      const dataInicio = new Date(inicio);
      const dataFim = new Date(fim);
      if (isNaN(dataInicio) || isNaN(dataFim)) {
        return res.status(400).json({ error: 'Parâmetros inicio e fim devem ser datas válidas (ISO 8601)' });
      }
      // garante que fim inclui o dia inteiro
      dataFim.setHours(23, 59, 59, 999);
      where.data = { [Op.between]: [dataInicio, dataFim] };
    } else if (inicio || fim) {
      return res.status(400).json({ error: 'Informe ambos os parâmetros: inicio e fim' });
    }

    const agendamentos = await Agendamento.findAll({
      where,
      include: ["Pacientes", "Profissionais", "Convenios", "Usuarios"],
      order: [['data', 'ASC']],
    });
    res.json(agendamentos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar agendamentos' });
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
