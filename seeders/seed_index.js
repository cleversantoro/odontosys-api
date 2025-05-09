// Seed index para execução sequencial
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await require('./01_seed_Usuarios').up(queryInterface, Sequelize);
    await require('./02_seed_Pacientes').up(queryInterface, Sequelize);
    await require('./03_seed_Profissionais').up(queryInterface, Sequelize);
    await require('./04_seed_Agendamentos').up(queryInterface, Sequelize);
    await require('./05_seed_Consultas').up(queryInterface, Sequelize);
    await require('./06_seed_Convenios').up(queryInterface, Sequelize);
    await require('./07_seed_DadosClinicos').up(queryInterface, Sequelize);
    await require('./08_seed_Departamentos').up(queryInterface, Sequelize);
    await require('./09_seed_Despesas').up(queryInterface, Sequelize);
    await require('./10_seed_Documentos').up(queryInterface, Sequelize);
    await require('./11_seed_Doencas').up(queryInterface, Sequelize);
    await require('./12_seed_Enderecos').up(queryInterface, Sequelize);
    await require('./13_seed_Especialidades').up(queryInterface, Sequelize);
    await require('./14_seed_PacienteDoencas').up(queryInterface, Sequelize);
    await require('./15_seed_Pagamentos').up(queryInterface, Sequelize);
    await require('./16_seed_ProfissionalDepartamentos').up(queryInterface, Sequelize);
    await require('./17_seed_ProfissionalEspecialidades').up(queryInterface, Sequelize);
    await require('./18_seed_Telefones').up(queryInterface, Sequelize);
  },

  down: async (queryInterface, Sequelize) => {
    await require('./01_seed_Usuarios').down(queryInterface, Sequelize);
    await require('./seed_Pacientes').down(queryInterface, Sequelize);
    await require('./seed_Profissionais').down(queryInterface, Sequelize);
    await require('./seed_Agendamentos').down(queryInterface, Sequelize);
    await require('./05_seed_Consultas').up(queryInterface, Sequelize);
    await require('./seed_Convenios').down(queryInterface, Sequelize);
    await require('./seed_DadosClinicos').down(queryInterface, Sequelize);
    await require('./seed_Departamentos').down(queryInterface, Sequelize);
    await require('./seed_Despesas').down(queryInterface, Sequelize);
    await require('./seed_Documentos').down(queryInterface, Sequelize);
    await require('./seed_Doencas').down(queryInterface, Sequelize);
    await require('./seed_Enderecos').down(queryInterface, Sequelize);
    await require('./seed_Especialidades').down(queryInterface, Sequelize);
    await require('./14_seed_PacienteDoencas').down(queryInterface, Sequelize);
    await require('./15_seed_Pagamentos').down(queryInterface, Sequelize);
    await require('./16_seed_ProfissionalDepartamentos').down(queryInterface, Sequelize);
    await require('./17_seed_ProfissionalEspecialidades').down(queryInterface, Sequelize);
    await require('./18_seed_Telefones').down(queryInterface, Sequelize);
  }
};

//npm run seed:up     # Executa todos os seeds (via seed_index.js)
//npm run seed:down   # Desfaz todos os seeds (via seed_index.js)

