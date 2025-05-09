const { DadoClinico, Paciente, Usuario } = require('../models');

//getDadoClinicoByPaciente

module.exports = {
  // Criar novo registro
  async createDadoClinico(req, res) {
    try {
      const { grupoSanguineo, alergias, medicamentosContinuos, doencasPreExistentes, planoSaude, numeroApolice, pacienteId } = req.body;
      const registeredBy = req.usuario.id;
      const newDadoClinico = await DadoClinico.create({ grupoSanguineo, alergias, medicamentosContinuos, doencasPreExistentes, planoSaude, numeroApolice, pacienteId, registeredBy});
      return res.status(201).json(newDadoClinico);
    } catch (error) {
      console.error("Erro ao criar DadoClinico:", error);
      return res.status(500).json({ message: "Erro ao criar dado clínico." });
    }
  },

  // Listar todos os registros
  async getDadoClinico(req, res) {
    try {
      const dados = await DadoClinico.findAll({
        include: [
          { model: Paciente, as: 'Pacientes' },
          { model: Usuario, as: 'Usuarios' }
        ]
      });
      return res.status(200).json(dados);
    } catch (error) {
      console.error("Erro ao listar DadosClinicos:", error);
      return res.status(500).json({ message: "Erro ao buscar dados clínicos." });
    }
  },

  // Buscar por ID
  async getDadoClinicoByid(req, res) {
    try {
      const { id } = req.params;
      const dado = await DadoClinico.findByPk(id, {
        include: [
          { model: Paciente, as: 'Pacientes' },
          { model: Usuario, as: 'Usuarios' }
        ]
      });

      if (!dado) {
        return res.status(404).json({ message: "Dado clínico não encontrado." });
      }

      return res.status(200).json(dado);
    } catch (error) {
      console.error("Erro ao buscar DadoClinico:", error);
      return res.status(500).json({ message: "Erro ao buscar dado clínico." });
    }
  },

  // Atualizar
  async updateDadoClinico(req, res) {
    try {
      const { id } = req.params;
      const [updated] = await DadoClinico.update(req.body, {
        where: { id }
      });

      if (!updated) {
        return res.status(404).json({ message: "Dado clínico não encontrado para atualização." });
      }

      const dadoAtualizado = await DadoClinico.findByPk(id);
      return res.status(200).json(dadoAtualizado);
    } catch (error) {
      console.error("Erro ao atualizar DadoClinico:", error);
      return res.status(500).json({ message: "Erro ao atualizar dado clínico." });
    }
  },

  // Deletar
  async deleteDadoClinico(req, res) {
    try {
      const { id } = req.params;
      const deletado = await DadoClinico.destroy({
        where: { id }
      });

      if (!deletado) {
        return res.status(404).json({ message: "Dado clínico não encontrado para exclusão." });
      }

      return res.status(200).json({ message: "Dado clínico deletado com sucesso." });
    } catch (error) {
      console.error("Erro ao deletar DadoClinico:", error);
      return res.status(500).json({ message: "Erro ao deletar dado clínico." });
    }
  }

};
