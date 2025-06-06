'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Doencas', [
      { id: 1, nome: 'Cárie dentária', descricao: 'Cárie dentária.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 2, nome: 'Gengivite', descricao: 'Gengivite.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 3, nome: 'Periodontite', descricao: 'Periodontite.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 4, nome: 'Bruxismo', descricao: 'Bruxismo.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 5, nome: 'Halitose', descricao: 'Halitose.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 6, nome: 'Afta', descricao: 'Afta.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 7, nome: 'Cisto dentígero', descricao: 'Cisto dentígero.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 8, nome: 'Dente incluso', descricao: 'Dente incluso.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 9, nome: 'Má oclusão', descricao: 'Má oclusão.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 10, nome: 'Erosão dentária', descricao: 'Erosão dentária.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 11, nome: 'Abcesso dentário', descricao: 'Abcesso dentário.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 12, nome: 'Doença periodontal', descricao: 'Doença periodontal.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 13, nome: 'Disfunção temporomandibular (DTM)', descricao: 'Disfunção temporomandibular (DTM).' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 14, nome: 'Placa bacteriana', descricao: 'Placa bacteriana.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 15, nome: 'Tártaro', descricao: 'Tártaro.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 16, nome: 'Hipersensibilidade dentinária', descricao: 'Hipersensibilidade dentinária.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 17, nome: 'Câncer bucal', descricao: 'Câncer bucal.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 18, nome: 'Lesões leucoplásicas', descricao: 'Lesões leucoplásicas.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 19, nome: 'Fratura dentária', descricao: 'Fratura dentária.' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 20, nome: 'Pericoronarite', descricao: 'Pericoronarite.' ,createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Doencas', {
      id: { [Sequelize.Op.in]: Array.from({ length: 20 }, (_, i) => i + 1) }
    }, {});
  }
};
