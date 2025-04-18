const Pagamento = require("../models/pagamento.model");
const io = require("../config/socket");


exports.createPagamento = async (req, res) => {
  try {
    const { pacienteId, profissionalId, amount, pagamentoType, pagamentoDate } = req.body;

    const newPagamento = await Pagamento.create({ pacienteId, profissionalId, amount, pagamentoType, pagamentoDate });

    io.emit("pagamentoReceived", newPagamento); // Notifica pagamentos em tempo real

    res.status(201).json(newPagamento);
  } catch (error) {
    res.status(500).json({ error: "Erro ao registrar pagamento" });
  }
};


exports.getPagamentos = async (req, res) => {
  try {
    const pagamentos = await Pagamento.findAll({ include: ["paciente", "profissional"] });
    res.json(pagamentos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar pagamentos" });
  }
};

exports.getPagamentoById = async (req, res) => {
  try {
    const pagamento = await Pagamento.findByPk(req.params.id, { include: ["paciente", "profissional"] });

    if (!pagamento) return res.status(404).json({ error: "Pagamento não encontrado" });

    res.json(pagamento);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar pagamento" });
  }
};

exports.updatePagamento = async (req, res) => {
  try {
    const { amount, status, pagamentoDate } = req.body;
    const pagamento = await Pagamento.findByPk(req.params.id);

    if (!pagamento) return res.status(404).json({ error: "Pagamento não encontrado" });

    await pagamento.update({ amount, status, pagamentoDate });

    res.json({ message: "Pagamento atualizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar pagamento" });
  }
};

exports.deletePagamento = async (req, res) => {
  try {
    const pagamento = await Pagamento.findByPk(req.params.id);

    if (!pagamento) return res.status(404).json({ error: "Pagamento não encontrado" });

    await pagamento.destroy();

    res.json({ message: "Pagamento excluído com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir pagamento" });
  }
};
