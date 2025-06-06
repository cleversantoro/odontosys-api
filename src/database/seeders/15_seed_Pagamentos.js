'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pagamentos', [
      {
        id: 1,
        pacienteId: 1,
        profissionalId: 1,
        valor: 300,
        tipoPagamento: 'Particular',
        status: 'Pago',
        data: new Date('2025-04-18T22:48:02'),
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 2,
        pacienteId: 2,
        profissionalId: 2,
        valor: 200,
        tipoPagamento: 'Convênio',
        status: 'Pendente',
        data: new Date('2025-04-18T22:48:02'),
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 5,
        pacienteId: 2,
        profissionalId: 2,
        valor: 400,
        tipoPagamento: 'Particular',
        status: 'Pago',
        data: new Date('2025-04-23T22:48:02'),
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 6,
        pacienteId: 3,
        profissionalId: 1,
        valor: 350,
        tipoPagamento: 'Convênio',
        status: 'Pago',
        data: new Date('2025-04-24T22:48:02'),
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-05-05T22:05:17')
      },
      {
        id: 7,
        pacienteId: 2,
        profissionalId: 3,
        valor: 200,
        tipoPagamento: 'Particular',
        status: 'Pendente',
        data: new Date('2025-04-25T22:48:02'),
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 8,
        pacienteId: 3,
        profissionalId: 2,
        valor: 400,
        tipoPagamento: 'Particular',
        status: 'Pago',
        data: new Date('2025-04-26T22:48:02'),
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 9,
        pacienteId: 3,
        profissionalId: 1,
        valor: 350,
        tipoPagamento: 'Particular',
        status: 'Pendente',
        data: new Date('2025-04-27T22:48:02'),
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 10,
        pacienteId: 3,
        profissionalId: 1,
        valor: 200,
        tipoPagamento: 'Convênio',
        status: 'Pendente',
        data: new Date('2025-04-28T22:48:02'),
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 11,
        pacienteId: 3,
        profissionalId: 3,
        valor: 400,
        tipoPagamento: 'Convênio',
        status: 'Pago',
        data: new Date('2025-04-29T22:48:02'),
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-05-05T22:05:32')
      },
      {
        id: 12,
        pacienteId: 1,
        profissionalId: 2,
        valor: 350,
        tipoPagamento: 'Particular',
        status: 'Pago',
        data: new Date('2025-04-30T22:48:02'),
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 13,
        pacienteId: 2,
        profissionalId: 3,
        valor: 200,
        tipoPagamento: 'Convênio',
        status: 'Pago',
        data: new Date('2025-05-01T22:48:02'),
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 14,
        pacienteId: 3,
        profissionalId: 1,
        valor: 250,
        tipoPagamento: 'Convênio',
        status: 'Pago',
        data: new Date('2025-05-02T22:48:02'),
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pagamentos', {
      id: { [Sequelize.Op.in]: [1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] }
    }, {});
  }
};
