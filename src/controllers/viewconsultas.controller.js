// controllers/userViewController.js
const  Consultas  = require('../views/consultas.model');
const  ConsultasCompleta  = require('../views/consultasCompletas.model');

exports.getConsultas = async (req, res) => {
    try {
      const consultas = await Consultas.findAll();
      res.json(consultas);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar consultas" });
    }
  };
  
  exports.getConsultasCompleta = async (req, res) => {
    try {
      const consultascompleta = await ConsultasCompleta.findAll();
      res.json(consultascompleta);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar consultas" });
    }
  };
