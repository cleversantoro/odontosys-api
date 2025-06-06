'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Agendamentos', [
      {
        id: 2,
        pacienteId: 1,
        profissionalId: 1,
        data: new Date('2024-06-15T14:30:00'),
        status: 'Agendado',
        obs: 'Paciente precisa trazer exames anteriores.',
        registeredBy: 1,
        createdAt: new Date('2025-04-18T02:22:47'),
        updatedAt: new Date('2025-04-18T02:22:47')
      },
      {
        id: 3,
        pacienteId: 5,
        profissionalId: 1,
        data: new Date('2025-04-19T22:48:02'),
        status: 'Agendado',
        obs: 'Trazer exames anteriores.',
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 4,
        pacienteId: 2,
        profissionalId: 2,
        data: new Date('2025-04-20T22:48:02'),
        status: 'Confirmado',
        obs: 'Consulta de avaliação.',
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 5,
        pacienteId: 1,
        profissionalId: 1,
        data: new Date('2025-04-23T22:48:02'),
        status: 'Cancelado',
        obs: 'Primeira consulta.',
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 6,
        pacienteId: 2,
        profissionalId: 2,
        data: new Date('2025-04-24T22:48:02'),
        status: 'Cancelado',
        obs: 'Paciente pediu reagendamento.',
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 7,
        pacienteId: 4,
        profissionalId: 1,
        data: new Date('2025-04-25T22:48:02'),
        status: 'Agendado',
        obs: 'Extração de siso marcada.',
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 8,
        pacienteId: 3,
        profissionalId: 2,
        data: new Date('2025-04-26T22:48:02'),
        status: 'Realizado',
        obs: 'Consulta de retorno.',
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 9,
        pacienteId: 1,
        profissionalId: 3,
        data: new Date('2025-04-27T22:48:02'),
        status: 'Cancelado',
        obs: 'Limpeza programada.',
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 10,
        pacienteId: 9,
        profissionalId: 1,
        data: new Date('2025-04-28T22:48:02'),
        status: 'Confirmado',
        obs: 'Consulta de retorno.',
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 11,
        pacienteId: 3,
        profissionalId: 1,
        data: new Date('2025-04-29T22:48:02'),
        status: 'Realizado',
        obs: 'Encaminhado por convênio.',
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 12,
        pacienteId: 2,
        profissionalId: 1,
        data: new Date('2025-04-30T22:48:02'),
        status: 'Cancelado',
        obs: 'Encaminhado por convênio.',
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 13,
        pacienteId: 10,
        profissionalId: 1,
        data: new Date('2025-05-01T22:48:02'),
        status: 'Confirmado',
        obs: 'Limpeza programada.',
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 14,
        pacienteId: 3,
        profissionalId: 3,
        data: new Date('2025-05-02T22:48:02'),
        status: 'Realizado',
        obs: 'Limpeza programada.',
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 15,
        pacienteId: 1,
        profissionalId: 2,
        data: new Date('2025-05-06T13:00:00'),
        status: 'Agendado',
        obs: 'teste',
        registeredBy: 1,
        createdAt: new Date('2025-05-06T04:06:03'),
        updatedAt: new Date('2025-05-06T04:06:03')
      },
      {
        id: 16,
        pacienteId: 2,
        profissionalId: 6,
        data: new Date('2025-05-06T09:00:00'),
        status: 'Agendado',
        obs: 'teste',
        registeredBy: 1,
        createdAt: new Date('2025-05-06T04:07:57'),
        updatedAt: new Date('2025-05-06T04:07:57')
      },
      {
        id: 17,
        pacienteId: 3,
        profissionalId: 5,
        data: new Date('2025-05-06T12:05:00'),
        status: 'Agendado',
        obs: 'tresd',
        registeredBy: 1,
        createdAt: new Date('2025-05-06T04:08:22'),
        updatedAt: new Date('2025-05-06T04:08:22')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Agendamentos', {
      id: { [Sequelize.Op.in]: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] }
    }, {});
  }
};
