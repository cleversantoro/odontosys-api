'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PacienteDoencas', [
      { createdAt: new Date(), updatedAt: new Date() , pacienteId: 9, doencaId: 2 },
      { createdAt: new Date(), updatedAt: new Date() , pacienteId: 3, doencaId: 3 },
      { createdAt: new Date(), updatedAt: new Date() , pacienteId: 1, doencaId: 4 },
      { createdAt: new Date(), updatedAt: new Date() , pacienteId: 2, doencaId: 4 },
      { createdAt: new Date(), updatedAt: new Date() , pacienteId: 4, doencaId: 5 },
      { createdAt: new Date(), updatedAt: new Date() , pacienteId: 5, doencaId: 6 },
      { createdAt: new Date(), updatedAt: new Date() , pacienteId: 12, doencaId: 8 },
      { createdAt: new Date(), updatedAt: new Date() , pacienteId: 10, doencaId: 9 },
      { createdAt: new Date(), updatedAt: new Date() , pacienteId: 1, doencaId: 10 },
      { createdAt: new Date(), updatedAt: new Date() , pacienteId: 2, doencaId: 10 },
      { createdAt: new Date(), updatedAt: new Date() , pacienteId: 9, doencaId: 10 },
      { createdAt: new Date(), updatedAt: new Date() , pacienteId: 5, doencaId: 11 }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PacienteDoencas', {
      [Sequelize.Op.or]: [
        { createdAt: new Date(), updatedAt: new Date() , pacienteId: 9, doencaId: 2 },
        { createdAt: new Date(), updatedAt: new Date() , pacienteId: 3, doencaId: 3 },
        { createdAt: new Date(), updatedAt: new Date() , pacienteId: 1, doencaId: 4 },
        { createdAt: new Date(), updatedAt: new Date() , pacienteId: 2, doencaId: 4 },
        { createdAt: new Date(), updatedAt: new Date() , pacienteId: 4, doencaId: 5 },
        { createdAt: new Date(), updatedAt: new Date() , pacienteId: 5, doencaId: 6 },
        { createdAt: new Date(), updatedAt: new Date() , pacienteId: 12, doencaId: 8 },
        { createdAt: new Date(), updatedAt: new Date() , pacienteId: 10, doencaId: 9 },
        { createdAt: new Date(), updatedAt: new Date() , pacienteId: 1, doencaId: 10 },
        { createdAt: new Date(), updatedAt: new Date() , pacienteId: 2, doencaId: 10 },
        { createdAt: new Date(), updatedAt: new Date() , pacienteId: 9, doencaId: 10 },
        { createdAt: new Date(), updatedAt: new Date() , pacienteId: 5, doencaId: 11 }
      ]
    }, {});
  }
};
