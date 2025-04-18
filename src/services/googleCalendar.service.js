const calendar = require("../config/googleAuth");

exports.createGoogleCalendarEvent = async (agendamentos) => {
  try {
    const event = {
      summary: `Agendamentos com ${agendamentos.profissionalId}`,
      description: `Agendamentos para o paciente ${agendamentos.pacienteId}`,
      start: { dateTime: agendamentos.date, timeZone: "America/Sao_Paulo" },
      end: { dateTime: new Date(new Date(agendamentos.date).getTime() + 60 * 60000), timeZone: "America/Sao_Paulo" },
      attendees: [{ email: agendamentos.pacienteEmail }],
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
