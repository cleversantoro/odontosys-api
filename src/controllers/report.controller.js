const Payment = require("../models/payment.model");
const Expense = require("../models/expense.model");
const Appointment = require("../models/appointment.model");
const { generatePDF } = require("../services/pdf.service");

exports.generateFinancialReport = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    const expenses = await Expense.findAll();

    const data = {
      title: "Relatório Financeiro",
      payments,
      expenses,
    };

    const pdfBuffer = await generatePDF(data);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=relatorio_financeiro.pdf");
    res.send(pdfBuffer);
  } catch (error) {
    res.status(500).json({ error: "Erro ao gerar relatório financeiro" });
  }
};

exports.generateAppointmentReport = async (req, res) => {
  try {
    const appointments = await Appointment.findAll();

    const data = {
      title: "Relatório de Consultas",
      appointments,
    };

    const pdfBuffer = await generatePDF(data);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=relatorio_consultas.pdf");
    res.send(pdfBuffer);
  } catch (error) {
    res.status(500).json({ error: "Erro ao gerar relatório de consultas" });
  }
};
