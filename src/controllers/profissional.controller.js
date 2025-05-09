const {Profissional} = require('../models');

exports.createProfissional = async (req, res) => {
    try {
        const { nome, email, dataNascimento, sexo } = req.body;
        const registeredBy = req.usuario.id; // Usuário autenticado

        if (!nome || !email || !dataNascimento || !sexo) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios" });
        }

        //console.log("Dados recebidos:", req.body); // Log dos dados recebidos
        const newProfissional = await Profissional.create({ nome, email, dataNascimento, sexo, registeredBy });

        res.status(201).json(newProfissional);
    } catch (error) {
        //console.error("Erro ao criar profissional:", error);
        res.status(500).json({ error: "Erro ao criar profissional" });
    }
};

exports.getProfissionais = async (req, res) => {
    try {
        const profissionais = await Profissional.findAll();
        res.status(200).json(profissionais);
    } catch (error) {
        //console.error("Erro ao buscar profissionais:", error);
        res.status(500).json({ error: "Erro ao buscar profissionais" });
    }
};

exports.getProfissionalById = async (req, res) => {
    try {
        const profissional = await Profissional.findByPk(req.params.id);
        if (!profissional) {
            return res.status(404).json({ error: "Profissional não encontrado" });
        }

        res.status(200).json(profissional);
    } catch (error) {
        //console.error("Erro ao buscar profissional:", error);
        res.status(500).json({ error: "Erro ao buscar profissional" });
    }
};

exports.updateProfissional = async (req, res) => {
    try {
        const { nome, email, dataNascimento, sexo } = req.body;
        const profissional = await Profissional.findByPk(req.params.id);

        if (!profissional) {
            return res.status(404).json({ error: "Profissional não encontrado" });
        }

        await profissional.update({ nome, email, dataNascimento, sexo });
        res.status(200).json({ message: "Profissional atualizado com sucesso!" });
    } catch (error) {
        //console.error("Erro ao atualizar profissional:", error);
        res.status(500).json({ error: "Erro ao atualizar profissional" });
    }
};

exports.deleteProfissional = async (req, res) => {
    try {
        const profissional = await Profissional.findByPk(req.params.id);

        if (!profissional) {
            return res.status(404).json({ error: "Profissional não encontrado" });
        }

        await profissional.destroy();
        res.status(200).json({ message: "Profissional excluído com sucesso!" });
    } catch (error) {
        //console.error("Erro ao excluir profissional:", error);
        res.status(500).json({ error: "Erro ao excluir profissional" });
    }
};