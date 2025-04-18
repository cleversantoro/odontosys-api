const { createGoogleCalendarEvent } = require("../services/googleCalendar.service");
const Agendamento = require("../models/agendamento.model");
const Paciente = require("../models/paciente.model");

exports.createCalendarEvent = async (req, res) => {
  try {
    const { agendamentosId } = req.body;
    const agendamentos = await Agendamentos.findByPk(agendamentosId, { include: "paciente" });

    if (!agendamentos) return res.status(404).json({ error: "Agendamentos não encontrada" });

    const event = await createGoogleCalendarEvent({
      date: agendamentos.date,
      pacienteId: agendamentos.paciente.name,
      pacienteEmail: agendamentos.paciente.email,
      profissionalId: agendamentos.profissionalId,
    });

    res.json({ message: "Evento criado no Google Calendar!", event });
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar evento no Google Calendar" });
  }
};
