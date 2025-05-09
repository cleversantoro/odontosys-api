'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [
      {
        id: 1,
        nome: 'João Silva',
        email: 'joao@email.com',
        senha: '$2b$10$yIb46NhtaNzlcKWXfs5vVuFrtL9pAhoJfUofUMRXGkZBDQWca5K3i',
        createdAt: new Date('2025-04-17T23:53:03'),
        updatedAt: new Date('2025-04-17T23:53:03')
      },
      {
        id: 2,
        nome: 'Clever',
        email: 'clever@email.com',
        senha: '$2b$10$HrVt5W9PlFt1//HmzNCfRuk6ye/RT0wTXcH/ECa4Wp2eVdFReyEKq',
        createdAt: new Date('2025-04-18T00:21:29'),
        updatedAt: new Date('2025-04-18T00:21:29')
      },
      {
        id: 3,
        nome: 'Carlos Silva',
        email: 'carlos@email.com',
        senha: '$2b$10$HrVt5W9PlFt1//HmzNCfRuk6ye/RT0wTXcH/ECa4Wp2eVdFReyEKq',
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 4,
        nome: 'Ana Oliveira',
        email: 'ana@email.com',
        senha: '$2b$10$HrVt5W9PlFt1//HmzNCfRuk6ye/RT0wTXcH/ECa4Wp2eVdFReyEKq',
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 5,
        nome: 'Roberto Souza',
        email: 'roberto@email.com',
        senha: '$2b$10$HrVt5W9PlFt1//HmzNCfRuk6ye/RT0wTXcH/ECa4Wp2eVdFReyEKq',
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', {
      id: { [Sequelize.Op.in]: [1, 2, 3, 4, 5] }
    }, {});
  }
};
