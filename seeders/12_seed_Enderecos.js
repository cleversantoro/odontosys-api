'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Enderecos', [
      {
        id: 1,
        logradouro: 'Rua A',
        numero: 123,
        complemento: 'Apto 101',
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '12345678',
        pais: 'Brasil',
        contato_id: 1,
        contato_tipo: 'paciente',
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 2,
        logradouro: 'Rua B',
        numero: 456,
        complemento: null,
        bairro: 'Jardins',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '87654321',
        pais: 'Brasil',
        contato_id: 2,
        contato_tipo: 'profissional',
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 4,
        logradouro: 'Rua E',
        numero: 927,
        complemento: 'Apto 101',
        bairro: 'Bairro E',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '80252077',
        pais: 'Brasil',
        contato_id: 4,
        contato_tipo: 'paciente',
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 5,
        logradouro: 'Rua F',
        numero: 104,
        complemento: 'Casa',
        bairro: 'Bairro F',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '36266258',
        pais: 'Brasil',
        contato_id: 5,
        contato_tipo: 'profissional',
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 6,
        logradouro: 'Rua G',
        numero: 906,
        complemento: 'Apto 107',
        bairro: 'Bairro G',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '34397526',
        pais: 'Brasil',
        contato_id: 6,
        contato_tipo: 'paciente',
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 7,
        logradouro: 'Rua H',
        numero: 621,
        complemento: 'Casa',
        bairro: 'Bairro H',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '99835173',
        pais: 'Brasil',
        contato_id: 7,
        contato_tipo: 'profissional',
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 8,
        logradouro: 'Rua I',
        numero: 411,
        complemento: 'Apto 125',
        bairro: 'Bairro I',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '56303520',
        pais: 'Brasil',
        contato_id: 8,
        contato_tipo: 'paciente',
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 9,
        logradouro: 'Rua J',
        numero: 972,
        complemento: 'Casa',
        bairro: 'Bairro J',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '37557583',
        pais: 'Brasil',
        contato_id: 9,
        contato_tipo: 'profissional',
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 10,
        logradouro: 'Rua K',
        numero: 950,
        complemento: 'Apto 106',
        bairro: 'Bairro K',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '34014365',
        pais: 'Brasil',
        contato_id: 10,
        contato_tipo: 'paciente',
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 11,
        logradouro: 'Rua L',
        numero: 902,
        complemento: 'Casa',
        bairro: 'Bairro L',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '90794774',
        pais: 'Brasil',
        contato_id: 11,
        contato_tipo: 'profissional',
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 12,
        logradouro: 'Rua M',
        numero: 466,
        complemento: 'Apto 133',
        bairro: 'Bairro M',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '14736609',
        pais: 'Brasil',
        contato_id: 12,
        contato_tipo: 'paciente',
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 13,
        logradouro: 'Rua N',
        numero: 225,
        complemento: 'Casa',
        bairro: 'Bairro N',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '75877875',
        pais: 'Brasil',
        contato_id: 13,
        contato_tipo: 'profissional',
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 15,
        logradouro: 'Rua Coréia',
        numero: 400,
        complemento: 'apto 12',
        bairro: 'Vila Curuça',
        cidade: 'Santo André',
        estado: 'SP',
        cep: '09280190',
        pais: 'Brasil',
        contato_id: 31,
        contato_tipo: 'paciente',
        registeredBy: 1,
        createdAt: new Date('2025-04-28T03:50:37'),
        updatedAt: new Date('2025-04-28T03:50:37')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Enderecos', {
      id: { [Sequelize.Op.in]: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15] }
    }, {});
  }
};
