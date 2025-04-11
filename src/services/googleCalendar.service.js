const calendar = require("../config/googleAuth");

exports.createGoogleCalendarEvent = async (appointment) => {
  try {
    const event = {
      summary: `Consulta com ${appointment.professionalId}`,
      description: `Consulta para o paciente ${appointment.patientId}`,
      start: { dateTime: appointment.date, timeZone: "America/Sao_Paulo" },
      end: { dateTime: new Date(new Date(appointment.date).getTime() + 60 * 60000), timeZone: "America/Sao_Paulo" },
      attendees: [{ email: appointment.patientEmail }],
      reminders: { useDefault: true },
    };

    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });

    console.log("📅 Evento criado no Google Calendar:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar evento no Google Calendar:", error);
    throw new Error("Erro ao criar evento no Google Calendar");
  }
};
