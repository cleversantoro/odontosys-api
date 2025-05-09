'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Especialidades', [
      { id: 1, nome: 'Cirurgia e Traumatologia Buco-Maxilo-Facial', descricao: 'Cirurgias complexas como sisos, traumas faciais, tumores e enxertos.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 2, nome: 'Clínica Geral', descricao: 'Cuidados básicos como restaurações, limpezas e prevenção.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 3, nome: 'Dentística', descricao: 'Estética do sorriso: clareamentos, facetas, resinas.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 4, nome: 'Endodontia', descricao: 'Tratamento de canal.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 5, nome: 'Ortodontia', descricao: 'Correção dos dentes tortos com aparelhos.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 6, nome: 'Implantodontia', descricao: 'Colocação de implantes dentários.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 7, nome: 'Odontopediatria', descricao: 'Odontologia para crianças.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 8, nome: 'Periodontia', descricao: 'Tratamento da gengiva e estrutura de suporte dos dentes.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 9, nome: 'Prótese Dentária', descricao: 'Confecção de próteses como coroas, pontes e dentaduras.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 10, nome: 'Radiologia Odontológica', descricao: 'Exames de imagem como panorâmicas e tomografias.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 11, nome: 'Estomatologia', descricao: 'Diagnóstico e tratamento de doenças da boca.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 12, nome: 'Odontogeriatria', descricao: 'Cuidado odontológico para idosos.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 13, nome: 'Patologia Bucal', descricao: 'Diagnóstico de doenças bucais com exames laboratoriais.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 14, nome: 'DTM e Dor Orofacial', descricao: 'Tratamento de dores na articulação temporomandibular.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 15, nome: 'Odontologia Legal', descricao: 'Atuação forense em identificação e perícias.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 16, nome: 'Saúde Coletiva', descricao: 'Atuação em políticas públicas e prevenção coletiva.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 17, nome: 'Acupuntura em Odontologia', descricao: 'Aplicação de acupuntura para controle de dor e ansiedade.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 18, nome: 'Homeopatia Odontológica', descricao: 'Uso de homeopatia no tratamento odontológico.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 19, nome: 'Odontologia do Esporte', descricao: 'Prevenção e tratamento de traumas em atletas.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 20, nome: 'Odontologia Hospitalar', descricao: 'Atendimento odontológico em ambiente hospitalar.' ,createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Especialidades', {
      id: { [Sequelize.Op.in]: Array.from({ length: 20 }, (_, i) => i + 1) }
    }, {});
  }
};
