'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Telefones', [
      { id: 1, numero: '119999999', tipo: 'celular', contato_id: 1, contato_tipo: 'paciente', registeredBy: 1, createdAt: new Date('2025-04-18T22:48:02'), updatedAt: new Date('2025-04-18T22:48:02') },
      { id: 2, numero: '1123456789', tipo: 'comercial', contato_id: 2, contato_tipo: 'profissional', registeredBy: 2, createdAt: new Date('2025-04-18T22:48:02'), updatedAt: new Date('2025-04-18T22:48:02') },
      { id: 3, numero: '1118942820', tipo: 'residencial', contato_id: 3, contato_tipo: 'profissional', registeredBy: 2, createdAt: new Date('2025-04-18T22:48:02'), updatedAt: new Date('2025-04-18T22:48:02') },
      { id: 4, numero: '1153977158', tipo: 'comercial', contato_id: 4, contato_tipo: 'paciente', registeredBy: 2, createdAt: new Date('2025-04-18T22:48:02'), updatedAt: new Date('2025-04-18T22:48:02') },
      { id: 5, numero: '1138045509', tipo: 'celular', contato_id: 5, contato_tipo: 'profissional', registeredBy: 2, createdAt: new Date('2025-04-18T22:48:02'), updatedAt: new Date('2025-04-18T22:48:02') },
      { id: 6, numero: '1198519288', tipo: 'residencial', contato_id: 6, contato_tipo: 'paciente', registeredBy: 2, createdAt: new Date('2025-04-18T22:48:02'), updatedAt: new Date('2025-04-18T22:48:02') },
      { id: 7, numero: '1197782482', tipo: 'celular', contato_id: 7, contato_tipo: 'profissional', registeredBy: 2, createdAt: new Date('2025-04-18T22:48:02'), updatedAt: new Date('2025-04-18T22:48:02') },
      { id: 8, numero: '1163118631', tipo: 'comercial', contato_id: 8, contato_tipo: 'paciente', registeredBy: 1, createdAt: new Date('2025-04-18T22:48:02'), updatedAt: new Date('2025-04-18T22:48:02') },
      { id: 9, numero: '1169994999', tipo: 'residencial', contato_id: 9, contato_tipo: 'profissional', registeredBy: 2, createdAt: new Date('2025-04-18T22:48:02'), updatedAt: new Date('2025-04-18T22:48:02') },
      { id: 10, numero: '1184221614', tipo: 'celular', contato_id: 10, contato_tipo: 'paciente', registeredBy: 2, createdAt: new Date('2025-04-18T22:48:02'), updatedAt: new Date('2025-04-18T22:48:02') },
      { id: 11, numero: '1176597118', tipo: 'residencial', contato_id: 11, contato_tipo: 'profissional', registeredBy: 2, createdAt: new Date('2025-04-18T22:48:02'), updatedAt: new Date('2025-04-18T22:48:02') },
      { id: 12, numero: '1184614839', tipo: 'celular', contato_id: 12, contato_tipo: 'paciente', registeredBy: 2, createdAt: new Date('2025-04-18T22:48:02'), updatedAt: new Date('2025-04-18T22:48:02') },
      { id: 15, numero: '46545645', tipo: 'residencial', contato_id: 31, contato_tipo: 'paciente', registeredBy: 1, createdAt: new Date('2025-04-28T03:50:40'), updatedAt: new Date('2025-04-28T03:50:40') },
      { id: 16, numero: '4564564', tipo: 'celular', contato_id: 31, contato_tipo: 'paciente', registeredBy: 1, createdAt: new Date('2025-04-28T03:50:41'), updatedAt: new Date('2025-04-28T03:50:41') }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Telefones', {
      id: { [Sequelize.Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16] }
    }, {});
  }
};
