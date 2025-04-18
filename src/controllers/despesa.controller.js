const Despesas = require("../models/despesa.model");

exports.createDespesas = async (req, res) => {
  try {
    const { descricao, valor, categoria, data } = req.body;

    const newDespesas = await Despesas.create({ descricao, valor, categoria, data, registeredBy: req.userId });
    // Assuming req.userId contains the ID of the user making the request

    res.status(201).json(newDespesas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao registrar despesa" });
  }
};
