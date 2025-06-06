'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Documentos', [
      {
        id: 1,
        numero: '123456789',
        tipo: 'RG',
        emissor: 'SSP-SP',
        dataEmissao: new Date('2015-04-12'),
        contato_id: 1,
        contato_tipo: 'paciente',
        registeredBy: 1,
        createdAt: new Date('2025-04-26T04:00:13'),
        updatedAt: new Date('2025-04-26T04:00:13')
      },
      {
        id: 2,
        numero: '98765432100',
        tipo: 'CPF',
        emissor: null,
        dataEmissao: null,
        contato_id: 2,
        contato_tipo: 'profissional',
        registeredBy: 1,
        createdAt: new Date('2025-04-26T04:00:13'),
        updatedAt: new Date('2025-04-26T04:00:13')
      },
      {
        id: 3,
        numero: 'A1234567',
        tipo: 'Passaporte',
        emissor: 'Polícia Federal',
        dataEmissao: new Date('2020-01-20'),
        contato_id: 1,
        contato_tipo: 'paciente',
        registeredBy: 2,
        createdAt: new Date('2025-04-26T04:00:13'),
        updatedAt: new Date('2025-04-27T22:01:28')
      },
      {
        id: 4,
        numero: '87654321',
        tipo: 'CNH',
        emissor: 'DETRAN-SP',
        dataEmissao: new Date('2018-08-15'),
        contato_id: 1,
        contato_tipo: 'profissional',
        registeredBy: 2,
        createdAt: new Date('2025-04-26T04:00:13'),
        updatedAt: new Date('2025-04-27T22:00:49')
      },
      {
        id: 5,
        numero: '123456',
        tipo: 'Certidão de Nascimento',
        emissor: 'Cartório Central',
        dataEmissao: new Date('1995-10-22'),
        contato_id: 5,
        contato_tipo: 'paciente',
        registeredBy: 1,
        createdAt: new Date('2025-04-26T04:00:13'),
        updatedAt: new Date('2025-04-26T04:00:13')
      },
      {
        id: 6,
        numero: '654321',
        tipo: 'Certidão de Casamento',
        emissor: 'Cartório Amor Eterno',
        dataEmissao: new Date('2022-05-01'),
        contato_id: 6,
        contato_tipo: 'profissional',
        registeredBy: 3,
        createdAt: new Date('2025-04-26T04:00:13'),
        updatedAt: new Date('2025-04-26T04:00:13')
      },
      {
        id: 8,
        numero: '4564564',
        tipo: 'CPF',
        emissor: 'jgh',
        dataEmissao: new Date('2025-04-10'),
        contato_id: 31,
        contato_tipo: 'paciente',
        registeredBy: 1,
        createdAt: new Date('2025-04-28T03:50:45'),
        updatedAt: new Date('2025-04-28T03:50:45')
      },
      {
        id: 9,
        numero: '4765745456',
        tipo: 'CNH',
        emissor: 'hj',
        dataEmissao: new Date('2025-04-24'),
        contato_id: 31,
        contato_tipo: 'paciente',
        registeredBy: 1,
        createdAt: new Date('2025-04-28T03:50:46'),
        updatedAt: new Date('2025-04-28T03:50:46')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Documentos', {
      id: { [Sequelize.Op.in]: [1, 2, 3, 4, 5, 6, 8, 9] }
    }, {});
  }
};
