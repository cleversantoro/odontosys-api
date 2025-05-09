// src/controllers/consulta.controller.js
const { Consulta, Agendamento, Paciente, Profissional } = require('../models');

exports.criarConsultaPorAgendamento = async (req, res) => {
    try {
        const { agendamentoId, anamnese, diagnostico, prescricao } = req.body;

        const agendamento = await Agendamento.findByPk(agendamentoId);
        if (!agendamento) return res.status(404).json({ message: 'Agendamento não encontrado' });

        const consulta = await Consulta.create({
            agendamentoId,
            pacienteId: agendamento.pacienteId,
            profissionalId: agendamento.profissionalId,
            dataHora: new Date(),
            anamnese,
            diagnostico,
            prescricao
        });

        // Atualiza status do agendamento
        agendamento.status = "Realizado";
        await agendamento.save();

        res.status(201).json(consulta);
    } catch (error) {
        console.error("Erro ao criar consulta:", error);
        res.status(500).json({ message: 'Erro interno' });
    }
};

exports.listarConsultas = async (req, res) => {
    try {
        const consultas = await Consulta.findAll({
            include: [
                { model: Paciente, as: 'Paciente' },
                { model: Profissional, as: 'Profissional' },
                { model: Agendamento, as: 'Agendamento' }
            ]
        });
        res.json(consultas);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar' });
    }
};

exports.obterConsultaPorId = async (req, res) => {
    const { id } = req.params;
    const consulta = await Consulta.findByPk(id, {
        include: [
            { model: Paciente, as: 'Paciente' },
            { model: Profissional, as: 'Profissional' },
            { model: Agendamento, as: 'Agendamento' }
        ]
    });


    if (!consulta) return res.status(404).json({ message: 'Consulta não encontrada' });
    res.json(consulta);
};

exports.atualizarConsulta = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const consulta = await Consulta.findByPk(id);
    if (!consulta) return res.status(404).json({ message: 'Consulta não encontrada' });

    await consulta.update(dados);
    res.json(consulta);
};

exports.deletarConsulta = async (req, res) => {
    const { id } = req.params;

    const consulta = await Consulta.findByPk(id);
    if (!consulta) return res.status(404).json({ message: 'Consulta não encontrada' });

    await consulta.destroy();
    res.status(204).send();
};
