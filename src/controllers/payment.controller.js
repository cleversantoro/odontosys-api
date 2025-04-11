const Payment = require("../models/payment.model");
const io = require("../config/socket");


exports.createPayment = async (req, res) => {
  try {
    const { patientId, professionalId, amount, paymentType, paymentDate } = req.body;

    const newPayment = await Payment.create({ patientId, professionalId, amount, paymentType, paymentDate });

    io.emit("paymentReceived", newPayment); // Notifica pagamentos em tempo real

    res.status(201).json(newPayment);
  } catch (error) {
    res.status(500).json({ error: "Erro ao registrar pagamento" });
  }
};


exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll({ include: ["patient", "professional"] });
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar pagamentos" });
  }
};

exports.getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findByPk(req.params.id, { include: ["patient", "professional"] });

    if (!payment) return res.status(404).json({ error: "Pagamento não encontrado" });

    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar pagamento" });
  }
};

exports.updatePayment = async (req, res) => {
  try {
    const { amount, status, paymentDate } = req.body;
    const payment = await Payment.findByPk(req.params.id);

    if (!payment) return res.status(404).json({ error: "Pagamento não encontrado" });

    await payment.update({ amount, status, paymentDate });

    res.json({ message: "Pagamento atualizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar pagamento" });
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const payment = await Payment.findByPk(req.params.id);

    if (!payment) return res.status(404).json({ error: "Pagamento não encontrado" });

    await payment.destroy();

    res.json({ message: "Pagamento excluído com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir pagamento" });
  }
};
