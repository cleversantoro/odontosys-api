'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ProfissionalEspecialidades', [
      { createdAt: new Date(), updatedAt: new Date() , profissionalId: 2, especialidadeId: 1 },
      { createdAt: new Date(), updatedAt: new Date() , profissionalId: 1, especialidadeId: 3 },
      { createdAt: new Date(), updatedAt: new Date() , profissionalId: 1, especialidadeId: 5 },
      { createdAt: new Date(), updatedAt: new Date() , profissionalId: 3, especialidadeId: 8 }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProfissionalEspecialidades', {
      [Sequelize.Op.or]: [
        { createdAt: new Date(), updatedAt: new Date() , profissionalId: 2, especialidadeId: 1 },
        { createdAt: new Date(), updatedAt: new Date() , profissionalId: 1, especialidadeId: 3 },
        { createdAt: new Date(), updatedAt: new Date() , profissionalId: 1, especialidadeId: 5 },
        { createdAt: new Date(), updatedAt: new Date() , profissionalId: 3, especialidadeId: 8 }
      ]
    }, {});
  }
};
