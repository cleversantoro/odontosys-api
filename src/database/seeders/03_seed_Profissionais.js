'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Profissionais', [
      {
        id: 1,
        nome: 'João Silva',
        email: 'joao@email.com',
        dataNascimento: new Date('2000-01-01T14:30:00'),
        sexo: 'Masculino',
        registeredBy: 1,
        createdAt: new Date('2025-04-18T01:58:37'),
        updatedAt: new Date('2025-04-18T01:58:37')
      },
      {
        id: 2,
        nome: 'Dra. Luiza Martins',
        email: 'luiza@email.com',
        dataNascimento: new Date('1980-03-10T00:00:00'),
        sexo: 'Feminino',
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 3,
        nome: 'Dr. Pedro Henrique',
        email: 'pedro@email.com',
        dataNascimento: new Date('1975-07-25T00:00:00'),
        sexo: 'Masculino',
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 4,
        nome: 'Dra. Helena Rocha',
        email: 'dra.helenarocha@email.com',
        dataNascimento: new Date('1974-05-10T00:00:00'),
        sexo: 'Feminino',
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 5,
        nome: 'Dr. Marcos Dias',
        email: 'dr.marcosdias@email.com',
        dataNascimento: new Date('1975-06-10T00:00:00'),
        sexo: 'Masculino',
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 6,
        nome: 'Dra. Renata Castro',
        email: 'dra.renatacastro@email.com',
        dataNascimento: new Date('1976-09-10T00:00:00'),
        sexo: 'Feminino',
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 7,
        nome: 'Dr. Felipe Almeida',
        email: 'dr.felipealmeida@email.com',
        dataNascimento: new Date('1977-04-10T00:00:00'),
        sexo: 'Masculino',
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 8,
        nome: 'Dra. Bianca Torres',
        email: 'dra.biancatorres@email.com',
        dataNascimento: new Date('1978-09-10T00:00:00'),
        sexo: 'Feminino',
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 9,
        nome: 'Dr. André Viana',
        email: 'dr.andréviana@email.com',
        dataNascimento: new Date('1979-03-10T00:00:00'),
        sexo: 'Masculino',
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 10,
        nome: 'Dra. Mariana Luz',
        email: 'dra.marianaluz@email.com',
        dataNascimento: new Date('1970-05-10T00:00:00'),
        sexo: 'Feminino',
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Profissionais', {
      id: { [Sequelize.Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
    }, {});
  }
};
