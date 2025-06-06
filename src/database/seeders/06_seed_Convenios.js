'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Convenios', [
      { id: 1, nome: 'Alice', codigo: '421928', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date()},
      { id: 2, nome: 'Allianz Saúde', codigo: '000515', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date()},
      { id: 3, nome: 'Ameplan Saúde', codigo: '394734', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 4, nome: 'Amil', codigo: '326305', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 5, nome: 'Ampla Saúde', codigo: '422720', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 6, nome: 'Ana Costa Saúde', codigo: '360244', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 7, nome: 'Ativia Saúde', codigo: '320510', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 8, nome: 'Biosaúde', codigo: '402966', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 9, nome: 'Biovida Saúde', codigo: '415111', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 10, nome: 'Blue', codigo: '423173', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 11, nome: 'Blue Med Saúde', codigo: '344800', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 12, nome: 'Bradesco Saúde', codigo: '005711', tipo: 'Seguro' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 13, nome: 'Caixa Saúde', codigo: '418072', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 14, nome: 'Care Plus', codigo: '379956', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 15, nome: 'Cruz Azul Saúde', codigo: '411752', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 16, nome: 'Cuidar.Me', codigo: '422606', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 17, nome: 'Golden Cross', codigo: '403911', tipo: 'Seguro' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 18, nome: 'Greenline Saúde', codigo: '325074', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 19, nome: 'Hapvida', codigo: '368253', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 20, nome: 'Notre Dame Intermédica', codigo: '359017', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 21, nome: 'One Health', codigo: '326305', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 22, nome: 'Porto Seguro Saúde', codigo: '000582', tipo: 'Seguro' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 23, nome: 'Prevent Senior', codigo: '302147', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 24, nome: 'QSaúde', codigo: '421669', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 25, nome: 'Sami', codigo: '422398', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 26, nome: 'Santa Helena Saúde', codigo: '355097', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 27, nome: 'São Cristóvão Saúde', codigo: '314218', tipo: 'Saúde' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 28, nome: 'Seguros Unimed', codigo: '000701', tipo: 'Seguro' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 29, nome: 'Sompo Saúde', codigo: '000477', tipo: 'Seguro' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 30, nome: 'Sul América Saúde', codigo: '006246', tipo: 'Seguro' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 31, nome: 'Unimed Nacional', codigo: '339679', tipo: 'Cooperativa' ,createdAt: new Date(), updatedAt: new Date() },
      { id: 32, nome: 'Particular', codigo: null, tipo: 'Particular' ,createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Convenios', {
      id: { [Sequelize.Op.in]: Array.from({ length: 32 }, (_, i) => i + 1) }
    }, {});
  }
};
