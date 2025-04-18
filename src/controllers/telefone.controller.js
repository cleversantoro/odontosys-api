const Telefone = require("../models/telefone.model");

exports.createTelefone = async (req, res) => {
  try {
    const { numero, tipo, contato_id, contato_tipo } = req.body;
    const registeredBy = req.usuario.id; // Usuário autenticado

    if (!numero || !tipo || !contato_id || !contato_tipo) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    const newTelefone = await Telefone.create({
      numero,
      tipo,
      contato_id,
      contato_tipo,
      registeredBy,
    });

    res.status(201).json(newTelefone);
  } catch (error) {
    console.error("Erro ao criar telefone:", error);
    res.status(500).json({ error: "Erro ao criar telefone" });
  }
};

exports.getTelefones = async (req, res) => {
  try {
    const telefones = await Telefone.findAll();
    res.status(200).json(telefones);
  } catch (error) {
    console.error("Erro ao buscar telefones:", error);
    res.status(500).json({ error: "Erro ao buscar telefones" });
  }
};

exports.getTelefoneById = async (req, res) => {
  try {
    const telefone = await Telefone.findByPk(req.params.id);
    if (!telefone) {
      return res.status(404).json({ error: "Telefone não encontrado" });
    }

    res.status(200).json(telefone);
  } catch (error) {
    console.error("Erro ao buscar telefone:", error);
    res.status(500).json({ error: "Erro ao buscar telefone" });
  }
};

exports.updateTelefone = async (req, res) => {
  try {
    const { numero, tipo, contato_id, contato_tipo } = req.body;
    const telefone = await Telefone.findByPk(req.params.id);

    if (!telefone) {
      return res.status(404).json({ error: "Telefone não encontrado" });
    }

    await telefone.update({ numero, tipo, contato_id, contato_tipo });
    res.status(200).json({ message: "Telefone atualizado com sucesso!" });
  } catch (error) {
    console.error("Erro ao atualizar telefone:", error);
    res.status(500).json({ error: "Erro ao atualizar telefone" });
  }
};

exports.deleteTelefone = async (req, res) => {
  try {
    const telefone = await Telefone.findByPk(req.params.id);

    if (!telefone) {
      return res.status(404).json({ error: "Telefone não encontrado" });
    }

    await telefone.destroy();
    res.status(200).json({ message: "Telefone excluído com sucesso!" });
  } catch (error) {
    console.error("Erro ao excluir telefone:", error);
    res.status(500).json({ error: "Erro ao excluir telefone" });
  }
};