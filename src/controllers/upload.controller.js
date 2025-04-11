const fs = require("fs");
const path = require("path");

exports.uploadFile = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Nenhum arquivo enviado" });
    }

    res.status(201).json({ message: "Arquivo enviado com sucesso!", fileName: req.file.filename });
  } catch (error) {
    res.status(500).json({ error: "Erro ao fazer upload do arquivo" });
  }
};

exports.getFiles = (req, res) => {
  try {
    const directoryPath = path.join(__dirname, "../uploads/");
    fs.readdir(directoryPath, (err, files) => {
      if (err) return res.status(500).json({ error: "Erro ao listar arquivos" });

      res.json({ files });
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar arquivos" });
  }
};

exports.deleteFile = (req, res) => {
  try {
    const filePath = path.join(__dirname, "../uploads/", req.params.fileName);

    fs.unlink(filePath, (err) => {
      if (err) return res.status(500).json({ error: "Erro ao excluir arquivo" });

      res.json({ message: "Arquivo excluído com sucesso!" });
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir arquivo" });
  }
};
