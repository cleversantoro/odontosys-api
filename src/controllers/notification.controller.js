const { sendEmail } = require("../services/email.service");
const Appointment = require("../models/appointment.model");
const Payment = require("../models/payment.model");
const Patient = require("../models/patient.model");

exports.sendAppointmentNotification = async (req, res) => {
  try {
    const { appointmentId } = req.body;
    const appointment = await Appointment.findByPk(appointmentId, { include: "patient" });

    if (!appointment) return res.status(404).json({ error: "Consulta não encontrada" });

    const message = `Olá ${appointment.patient.name},\n\nSua consulta está agendada para ${appointment.date}.\n\nAtenciosamente,\nClínica COSB`;

    await sendEmail(appointment.patient.email, "Lembrete de Consulta", message);

    res.json({ message: "E-mail de lembrete enviado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao enviar notificação de consulta" });
  }
};

exports.sendPaymentNotification = async (req, res) => {
  try {
    const { paymentId } = req.body;
    const payment = await Payment.findByPk(paymentId, { include: "patient" });

    if (!payment) return res.status(404).json({ error: "Pagamento não encontrado" });

    const message = `Olá ${payment.patient.name},\n\nO pagamento de R$${payment.amount} referente ao serviço foi recebido com sucesso.\n\nAtenciosamente,\nClínica COSB`;

    await sendEmail(payment.patient.email, "Confirmação de Pagamento", message);

    res.json({ message: "E-mail de confirmação enviado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao enviar notificação de pagamento" });
  }
};
