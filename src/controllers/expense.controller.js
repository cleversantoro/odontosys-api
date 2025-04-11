const Expense = require("../models/expense.model");

exports.createExpense = async (req, res) => {
  try {
    const { description, amount, category, expenseDate } = req.body;

    const newExpense = await Expense.create({ description, amount, category, expenseDate });

    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ error: "Erro ao registrar despesa" });
  }
};
