'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Despesas', [
      {
        id: 1,
        descricao: 'Material odontológico',
        valor: 450.75,
        categoria: 'Material',
        data: new Date('2025-04-18T22:48:02'),
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 2,
        descricao: 'Conta de luz',
        valor: 320.6,
        categoria: 'Infraestrutura',
        data: new Date('2025-04-18T22:48:02'),
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 3,
        descricao: 'Compra de resina composta',
        valor: 131.0,
        categoria: 'Limpeza',
        data: new Date('2025-04-21T22:48:02'),
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 4,
        descricao: 'Manutenção da cadeira odontológica',
        valor: 468.88,
        categoria: 'Administração',
        data: new Date('2025-04-22T22:48:02'),
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 5,
        descricao: 'Pagamento de consultoria contábil',
        valor: 204.52,
        categoria: 'Material',
        data: new Date('2025-04-23T22:48:02'),
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 6,
        descricao: 'Compra de luvas descartáveis',
        valor: 425.83,
        categoria: 'Infraestrutura',
        data: new Date('2025-04-24T22:48:02'),
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 7,
        descricao: 'Despesas administrativas',
        valor: 527.98,
        categoria: 'Serviços',
        data: new Date('2025-04-25T22:48:02'),
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 8,
        descricao: 'Produtos de limpeza',
        valor: 425.25,
        categoria: 'Limpeza',
        data: new Date('2025-04-26T22:48:02'),
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 9,
        descricao: 'Pagamento de energia elétrica',
        valor: 122.9,
        categoria: 'Administração',
        data: new Date('2025-04-27T22:48:02'),
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 10,
        descricao: 'Reposição de materiais de escritório',
        valor: 119.38,
        categoria: 'Material',
        data: new Date('2025-04-28T22:48:02'),
        registeredBy: 2,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 11,
        descricao: 'Internet e telefone',
        valor: 520.55,
        categoria: 'Infraestrutura',
        data: new Date('2025-04-29T22:48:02'),
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      },
      {
        id: 12,
        descricao: 'Despesas com software de gestão',
        valor: 612.74,
        categoria: 'Serviços',
        data: new Date('2025-04-30T22:48:02'),
        registeredBy: 1,
        createdAt: new Date('2025-04-18T22:48:02'),
        updatedAt: new Date('2025-04-18T22:48:02')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Despesas', {
      id: { [Sequelize.Op.in]: Array.from({ length: 12 }, (_, i) => i + 1) }
    }, {});
  }
};
