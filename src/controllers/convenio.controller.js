const { Convenio } = require('../models');

exports.getConvenios = async (req, res) => {
  try {
    const convenios = await Convenio.findAll({ order: [['nome', 'ASC']] });
    res.status(200).json(convenios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar convênios' });
  }
};

exports.getConvenioById = async (req, res) => {
  try {
    const convenio = await Convenio.findByPk(req.params.id);
    if (!convenio) return res.status(404).json({ error: 'Convênio não encontrado' });
    res.status(200).json(convenio);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar convênio' });
  }
};

exports.createConvenio = async (req, res) => {
  try {
    const { nome, codigo, tipo } = req.body;
    if (!nome) return res.status(400).json({ error: 'O campo nome é obrigatório' });
    const convenio = await Convenio.create({ nome, codigo, tipo });
    res.status(201).json(convenio);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar convênio' });
  }
};

exports.updateConvenio = async (req, res) => {
  try {
    const convenio = await Convenio.findByPk(req.params.id);
    if (!convenio) return res.status(404).json({ error: 'Convênio não encontrado' });
    const { nome, codigo, tipo } = req.body;
    await convenio.update({ nome, codigo, tipo });
    res.status(200).json(convenio);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar convênio' });
  }
};

exports.deleteConvenio = async (req, res) => {
  try {
    const convenio = await Convenio.findByPk(req.params.id);
    if (!convenio) return res.status(404).json({ error: 'Convênio não encontrado' });
    await convenio.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir convênio' });
  }
};
