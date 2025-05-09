'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ProfissionalDepartamentos', [
      { createdAt: new Date(), updatedAt: new Date() , profissionalId: 1, departamentoId: 1 },
      { createdAt: new Date(), updatedAt: new Date() , profissionalId: 1, departamentoId: 2 },
      { createdAt: new Date(), updatedAt: new Date() , profissionalId: 5, departamentoId: 2 },
      { createdAt: new Date(), updatedAt: new Date() , profissionalId: 2, departamentoId: 3 },
      { createdAt: new Date(), updatedAt: new Date() , profissionalId: 3, departamentoId: 4 },
      { createdAt: new Date(), updatedAt: new Date() , profissionalId: 3, departamentoId: 5 },
      { createdAt: new Date(), updatedAt: new Date() , profissionalId: 4, departamentoId: 6 },
      { createdAt: new Date(), updatedAt: new Date() , profissionalId: 5, departamentoId: 7 },
      { createdAt: new Date(), updatedAt: new Date() , profissionalId: 5, departamentoId: 10 }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProfissionalDepartamentos', {
      [Sequelize.Op.or]: [
        { createdAt: new Date(), updatedAt: new Date() , profissionalId: 1, departamentoId: 1 },
        { createdAt: new Date(), updatedAt: new Date() , profissionalId: 1, departamentoId: 2 },
        { createdAt: new Date(), updatedAt: new Date() , profissionalId: 5, departamentoId: 2 },
        { createdAt: new Date(), updatedAt: new Date() , profissionalId: 2, departamentoId: 3 },
        { createdAt: new Date(), updatedAt: new Date() , profissionalId: 3, departamentoId: 4 },
        { createdAt: new Date(), updatedAt: new Date() , profissionalId: 3, departamentoId: 5 },
        { createdAt: new Date(), updatedAt: new Date() , profissionalId: 4, departamentoId: 6 },
        { createdAt: new Date(), updatedAt: new Date() , profissionalId: 5, departamentoId: 7 },
        { createdAt: new Date(), updatedAt: new Date() , profissionalId: 5, departamentoId: 10 }
      ]
    }, {});
  }
};
