// controllers/userViewController.js
const  Consultas  = require('../views/consultas.model');

exports.getConsultas = async (req, res) => {
    try {
      const consultas = await Consultas.findAll();
      res.json(consultas);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar consultas" });
    }
  };
  