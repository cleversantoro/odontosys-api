const Endereco = require("../models/endereco.model");

exports.createEndereco = async (req, res) => {
  try {
    const { rua, numero, bairro, cidade, estado, cep, contato_id, contato_tipo } = req.body;
    const registeredBy = req.usuario.id; // Usuário autenticado

    if (!rua || !numero || !bairro || !cidade || !estado || !cep || !contato_id || !contato_tipo) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    const newEndereco = await Endereco.create({
      rua,
      numero,
      bairro,
      cidade,
      estado,
      cep,
      contato_id,
      contato_tipo,
      registeredBy,
    });

    res.status(201).json(newEndereco);
  } catch (error) {
    console.error("Erro ao criar endereço:", error);
    res.status(500).json({ error: "Erro ao criar endereço" });
  }
};

exports.getEnderecos = async (req, res) => {
  try {
    const enderecos = await Endereco.findAll();
    res.status(200).json(enderecos);
  } catch (error) {
    console.error("Erro ao buscar endereços:", error);
    res.status(500).json({ error: "Erro ao buscar endereços" });
  }
};

exports.getEnderecoById = async (req, res) => {
  try {
    const endereco = await Endereco.findByPk(req.params.id);
    if (!endereco) {
      return res.status(404).json({ error: "Endereço não encontrado" });
    }

    res.status(200).json(endereco);
  } catch (error) {
    console.error("Erro ao buscar endereço:", error);
    res.status(500).json({ error: "Erro ao buscar endereço" });
  }
};

exports.updateEndereco = async (req, res) => {
  try {
    const { rua, numero, bairro, cidade, estado, cep, contato_id, contato_tipo } = req.body;
    const endereco = await Endereco.findByPk(req.params.id);

    if (!endereco) {
      return res.status(404).json({ error: "Endereço não encontrado" });
    }

    await endereco.update({ rua, numero, bairro, cidade, estado, cep, contato_id, contato_tipo });
    res.status(200).json({ message: "Endereço atualizado com sucesso!" });
  } catch (error) {
    console.error("Erro ao atualizar endereço:", error);
    res.status(500).json({ error: "Erro ao atualizar endereço" });
  }
};

exports.deleteEndereco = async (req, res) => {
  try {
    const endereco = await Endereco.findByPk(req.params.id);

    if (!endereco) {
      return res.status(404).json({ error: "Endereço não encontrado" });
    }

    await endereco.destroy();
    res.status(200).json({ message: "Endereço excluído com sucesso!" });
  } catch (error) {
    console.error("Erro ao excluir endereço:", error);
    res.status(500).json({ error: "Erro ao excluir endereço" });
  }
};