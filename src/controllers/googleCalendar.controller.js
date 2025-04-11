const { createGoogleCalendarEvent } = require("../services/googleCalendar.service");
const Appointment = require("../models/appointment.model");
const Patient = require("../models/patient.model");

exports.createCalendarEvent = async (req, res) => {
  try {
    const { appointmentId } = req.body;
    const appointment = await Appointment.findByPk(appointmentId, { include: "patient" });

    if (!appointment) return res.status(404).json({ error: "Consulta não encontrada" });

    const event = await createGoogleCalendarEvent({
      date: appointment.date,
      patientId: appointment.patient.name,
      patientEmail: appointment.patient.email,
      professionalId: appointment.professionalId,
    });

    res.json({ message: "Evento criado no Google Calendar!", event });
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar evento no Google Calendar" });
  }
};
