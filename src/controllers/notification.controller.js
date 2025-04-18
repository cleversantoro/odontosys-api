const { sendEmail } = require("../services/email.service");
const Agendamento = require("../models/agendamento.model");
const Pagamento = require("../models/pagamento.model");
const Paciente = require("../models/paciente.model");

exports.sendAgendamentosNotification = async (req, res) => {
  try {
    const { agendamentosId } = req.body;
    const agendamentos = await Agendamentos.findByPk(agendamentosId, { include: "paciente" });

    if (!agendamentos) return res.status(404).json({ error: "Agendamentos não encontrada" });

    const message = `Olá ${agendamentos.paciente.name},\n\nSua agendamentos está agendada para ${agendamentos.date}.\n\nAtenciosamente,\nClínica COSB`;

    await sendEmail(agendamentos.paciente.email, "Lembrete de Agendamentos", message);

    res.json({ message: "E-mail de lembrete enviado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao enviar notificação de agendamentos" });
  }
};

exports.sendPagamentoNotification = async (req, res) => {
  try {
    const { pagamentoId } = req.body;
    const pagamento = await Pagamento.findByPk(pagamentoId, { include: "paciente" });

    if (!pagamento) return res.status(404).json({ error: "Pagamento não encontrado" });

    const message = `Olá ${pagamento.paciente.nome},\n\nO pagamento de R$${pagamento.valor} referente ao serviço foi recebido com sucesso.\n\nAtenciosamente,\nClínica COSB`;

    await sendEmail(pagamento.paciente.email, "Confirmação de Pagamento", message);

    res.json({ message: "E-mail de confirmação enviado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao enviar notificação de pagamento" });
  }
};
