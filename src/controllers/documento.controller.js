const Documento = require("../models/documento.model");

// Criar novo documento
exports.createDocumento = async (req, res) => {
  try {
    const documento = await Documento.create(req.body);
    res.status(201).json(documento);
  } catch (error) {
    console.error("Erro ao criar documento:", error);
    res.status(500).json({ message: "Erro ao criar documento" });
  }
};

// Buscar todos os documentos
exports.getAllDocumentos = async (req, res) => {
  try {
    const documentos = await Documento.findAll();
    res.status(200).json(documentos);
  } catch (error) {
    console.error("Erro ao buscar documentos:", error);
    res.status(500).json({ message: "Erro ao buscar documentos" });
  }
};

// Buscar documento por ID
exports.getDocumentoById = async (req, res) => {
  try {
    const documento = await Documento.findByPk(req.params.id);
    if (!documento) {
      return res.status(404).json({ message: "Documento não encontrado" });
    }
    res.status(200).json(documento);
  } catch (error) {
    console.error("Erro ao buscar documento:", error);
    res.status(500).json({ message: "Erro ao buscar documento" });
  }
};

exports.getDocumentosByContatoIdandTipo = async (req, res) => {
  try {
    let { contato_id, contato_tipo } = req.params;

    // Tratamento de tipos: contato_id vira inteiro
    contato_id = Number(contato_id);

    if (isNaN(contato_id) || !contato_tipo) {
      return res.status(400).json({ error: "Parâmetros inválidos: contato_id deve ser um número e contato_tipo não pode ser vazio" });
    }

    const documentos = await Documento.findAll({
      where: {
        contato_id: contato_id,
        contato_tipo: contato_tipo.toLowerCase(), // se quiser padronizar, mas depende da sua tabela
      },
    });

    if (!documentos) {
      return res.status(404).json({ error: "Documento não encontrado" });
    }

    res.status(200).json(documentos);
  } catch (error) {
    console.error("Erro ao buscar documento:", error);
    res.status(500).json({ error: "Erro ao buscar documento" });
  }
};

// Atualizar documento
exports.updateDocumento = async (req, res) => {
  try {
    const documento = await Documento.findByPk(req.params.id);
    if (!documento) {
      return res.status(404).json({ message: "Documento não encontrado" });
    }

    await documento.update(req.body);
    res.status(200).json(documento);
  } catch (error) {
    console.error("Erro ao atualizar documento:", error);
    res.status(500).json({ message: "Erro ao atualizar documento" });
  }
};

// Deletar documento
exports.deleteDocumento = async (req, res) => {
  try {
    const documento = await Documento.findByPk(req.params.id);
    if (!documento) {
      return res.status(404).json({ message: "Documento não encontrado" });
    }

    await documento.destroy();
    res.status(200).json({ message: "Documento deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar documento:", error);
    res.status(500).json({ message: "Erro ao deletar documento" });
  }
};
