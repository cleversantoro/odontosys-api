const Pagamento = require("../models/pagamento.model");
const Despesa = require("../models/despesa.model");
const Agendamento = require("../models/agendamento.model");
const { generatePDF } = require("../services/pdf.service");

exports.generateFinancialReport = async (req, res) => {
  try {
    const pagamentos = await Pagamento.findAll();
    const despesas = await Despesas.findAll();

    const data = {
      title: "Relatório Financeiro",
      pagamentos,
      despesas,
    };

    const pdfBuffer = await generatePDF(data);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=relatorio_financeiro.pdf");
    res.send(pdfBuffer);
  } catch (error) {
    res.status(500).json({ error: "Erro ao gerar relatório financeiro" });
  }
};

exports.generateAgendamentosReport = async (req, res) => {
  try {
    const agendamentos = await Agendamentos.findAll();

    const data = {
      title: "Relatório de Agendamentos",
      agendamentos,
    };

    const pdfBuffer = await generatePDF(data);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=relatorio_agendamentos.pdf");
    res.send(pdfBuffer);
  } catch (error) {
    res.status(500).json({ error: "Erro ao gerar relatório de agendamentos" });
  }
};
