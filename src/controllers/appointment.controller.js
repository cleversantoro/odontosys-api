const Appointment = require("../models/appointment.model");
const io = require("../config/socket"); // WebSockets para notificações em tempo real


exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll({ include: ["patient", "professional"] });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar consultas" });
  }
};

exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findByPk(req.params.id, { include: ["patient", "professional"] });

    if (!appointment) return res.status(404).json({ error: "Consulta não encontrada" });

    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar consulta" });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByPk(req.params.id);

    if (!appointment) return res.status(404).json({ error: "Consulta não encontrada" });

    await appointment.destroy();
    
    io.emit("appointmentDeleted", { id: req.params.id }); // Atualiza os clientes em tempo real

    res.json({ message: "Consulta excluída com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir consulta" });
  }
};

exports.createAppointment = async (req, res) => {
  try {
    const { patientId, professionalId, date, notes } = req.body;

    const newAppointment = await Appointment.create({ patientId, professionalId, date, notes });

    io.emit("appointmentCreated", newAppointment); // Notifica em tempo real

    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ error: "Erro ao agendar consulta" });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const { date, status, notes } = req.body;
    const appointment = await Appointment.findByPk(req.params.id);

    if (!appointment) return res.status(404).json({ error: "Consulta não encontrada" });

    await appointment.update({ date, status, notes });

    io.emit("appointmentUpdated", appointment); // Atualiza em tempo real

    res.json({ message: "Consulta atualizada com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar consulta" });
  }
};
