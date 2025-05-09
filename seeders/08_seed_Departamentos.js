'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Departamentos', [
      { id: 1, nome: 'Recepção', descricao: 'Agendamento, triagem inicial, cadastro de pacientes, atendimento ao público.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 2, nome: 'Clínico Geral', descricao: 'Atendimento básico e triagem odontológica.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 3, nome: 'Ortodontia', descricao: 'Tratamento com aparelhos ortodônticos.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 4, nome: 'Endodontia', descricao: 'Tratamento de canal e outras terapias da polpa dentária.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 5, nome: 'Periodontia', descricao: 'Tratamentos gengivais e de suporte dos dentes.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 6, nome: 'Cirurgia Bucomaxilofacial', descricao: 'Cirurgias complexas: extrações, enxertos, implantes.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 7, nome: 'Implantodontia', descricao: 'Planejamento e colocação de implantes dentários.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 8, nome: 'Odontopediatria', descricao: 'Atendimento infantil.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 9, nome: 'Estética e Dentística', descricao: 'Clareamento, facetas, resinas, harmonização do sorriso.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 10, nome: 'Radiologia Odontológica', descricao: 'Tirar e analisar radiografias, tomografias, panorâmicas.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 11, nome: 'Prótese Dentária', descricao: 'Confecção e adaptação de próteses (fixas e móveis).' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 12, nome: 'DTM e Dor Orofacial', descricao: 'Diagnóstico e tratamento de disfunções e dores na mandíbula.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 13, nome: 'Diagnóstico e Estomatologia', descricao: 'Lesões bucais, exames, biópsias.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 14, nome: 'Laboratório de Prótese', descricao: 'Confecção de peças protéticas (interno ou parceiro).' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 15, nome: 'Administração', descricao: 'Gestão de pessoal, financeiro, contratos, convênios.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 16, nome: 'Financeiro/Faturamento', descricao: 'Controle de pagamentos, boletos, convênios, notas fiscais.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 17, nome: 'TI/Suporte', descricao: 'Sistemas, rede, prontuário eletrônico, backups, suporte técnico.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 18, nome: 'Limpeza e Esterilização', descricao: 'Assepsia de ambientes e instrumentos (autoclave, etc.).' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 19, nome: 'Sala de Emergência', descricao: 'Atendimento a casos urgentes ou de dor aguda.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 20, nome: 'Sala de Espera', descricao: 'Ambiente para recepção dos pacientes, com TV, revistas, etc.'  ,createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Departamentos', {
      id: { [Sequelize.Op.in]: Array.from({ length: 20 }, (_, i) => i + 1) }
    }, {});
  }
};
