'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('DadosClinicos', [
      {
        id: 1,
        grupoSanguineo: 'A+',
        alergias: 'Nenhuma',
        medicamentosContinuos: 'Nenhum',
        doencasPreExistentes: 'Nenhuma',
        planoSaude: 'Unimed',
        numeroApolice: '123456',
        pacienteId: 1,
        registeredBy: 1,
        createdAt: new Date('2025-04-28T00:50:00'),
        updatedAt: new Date('2025-04-28T00:50:00')
      },
      {
        id: 2,
        grupoSanguineo: 'O-',
        alergias: 'Alergia a penicilina',
        medicamentosContinuos: 'Insulina',
        doencasPreExistentes: 'Diabetes',
        planoSaude: 'Bradesco Saúde',
        numeroApolice: '654321',
        pacienteId: 2,
        registeredBy: 1,
        createdAt: new Date('2025-04-28T00:50:00'),
        updatedAt: new Date('2025-04-28T00:50:00')
      },
      {
        id: 3,
        grupoSanguineo: 'B+',
        alergias: 'Alergia a frutos do mar',
        medicamentosContinuos: 'Antialérgicos',
        doencasPreExistentes: 'Asma',
        planoSaude: 'Amil Saúde',
        numeroApolice: '789123',
        pacienteId: 3,
        registeredBy: 2,
        createdAt: new Date('2025-04-28T00:50:00'),
        updatedAt: new Date('2025-04-28T00:50:00')
      },
      {
        id: 4,
        grupoSanguineo: 'AB-',
        alergias: 'Alergia a dipirona',
        medicamentosContinuos: 'Atenolol',
        doencasPreExistentes: 'Hipertensão',
        planoSaude: 'SulAmérica',
        numeroApolice: '321654',
        pacienteId: 4,
        registeredBy: 2,
        createdAt: new Date('2025-04-28T00:50:00'),
        updatedAt: new Date('2025-04-28T00:50:00')
      },
      {
        id: 5,
        grupoSanguineo: 'A-',
        alergias: 'Nenhuma',
        medicamentosContinuos: 'Nenhum',
        doencasPreExistentes: 'Nenhuma',
        planoSaude: 'NotreDame',
        numeroApolice: '987654',
        pacienteId: 5,
        registeredBy: 1,
        createdAt: new Date('2025-04-28T00:50:00'),
        updatedAt: new Date('2025-04-28T00:50:00')
      },
      {
        id: 6,
        grupoSanguineo: 'a',
        alergias: 'fgdf',
        medicamentosContinuos: 'fdg',
        doencasPreExistentes: 'dfgd',
        planoSaude: 'un',
        numeroApolice: '123',
        pacienteId: 31,
        registeredBy: 1,
        createdAt: new Date('2025-04-28T03:50:49'),
        updatedAt: new Date('2025-04-28T03:50:49')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('DadosClinicos', {
      id: { [Sequelize.Op.in]: [1, 2, 3, 4, 5, 6] }
    }, {});
  }
};
