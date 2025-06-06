'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Consultas', [
      {
        agendamentoId: 8,
        pacienteId: 3,
        profissionalId: 2,
        dataHora: new Date('2025-04-26T22:48:02'),
        anamnese: 'Paciente com queixa de dor ao mastigar.',
        diagnostico: 'Cárie profunda no molar inferior esquerdo.',
        prescricao: 'Ibuprofeno 600mg a cada 8h por 3 dias.',
        status: 'Finalizada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        agendamentoId: 9,
        pacienteId: 1,
        profissionalId: 3,
        dataHora: new Date('2025-04-27T22:48:02'),
        anamnese: 'Paciente relata sangramento ao escovar.',
        diagnostico: 'Gengivite.',
        prescricao: 'Bochechos com clorexidina 0,12% por 7 dias.',
        status: 'Finalizada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        agendamentoId: 10,
        pacienteId: 9,
        profissionalId: 1,
        dataHora: new Date('2025-04-28T22:48:02'),
        anamnese: 'Retorno de tratamento anterior.',
        diagnostico: 'Boa evolução do quadro.',
        prescricao: 'Manter escovação e retorno em 6 meses.',
        status: 'Finalizada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        agendamentoId: 11,
        pacienteId: 3,
        profissionalId: 1,
        dataHora: new Date('2025-04-29T22:48:02'),
        anamnese: 'Paciente com hipersensibilidade térmica.',
        diagnostico: 'Retração gengival leve.',
        prescricao: 'Usar creme dental para dentes sensíveis.',
        status: 'Finalizada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        agendamentoId: null,
        pacienteId: 5,
        profissionalId: 2,
        dataHora: new Date('2025-05-01T14:00:00'),
        anamnese: 'Atendimento de encaixe por dor intensa.',
        diagnostico: 'Pulpite aguda.',
        prescricao: 'Analgésico e encaminhamento para canal.',
        status: 'Finalizada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        agendamentoId: 13,
        pacienteId: 10,
        profissionalId: 1,
        dataHora: new Date('2025-05-01T22:48:02'),
        anamnese: 'Consulta de rotina.',
        diagnostico: 'Sem alterações.',
        prescricao: 'Manter bons hábitos.',
        status: 'Finalizada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        agendamentoId: 14,
        pacienteId: 3,
        profissionalId: 3,
        dataHora: new Date('2025-05-02T22:48:02'),
        anamnese: 'Dores ao abrir a boca.',
        diagnostico: 'Disfunção temporomandibular.',
        prescricao: 'Fisioterapia mandibular.',
        status: 'Aberta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        agendamentoId: 15,
        pacienteId: 1,
        profissionalId: 2,
        dataHora: new Date('2025-05-06T13:00:00'),
        anamnese: 'Retorno para avaliação de tratamento.',
        diagnostico: 'Quadro resolvido.',
        prescricao: 'Alta.',
        status: 'Finalizada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        agendamentoId: null,
        pacienteId: 6,
        profissionalId: 1,
        dataHora: new Date('2025-05-07T09:30:00'),
        anamnese: 'Paciente chegou com dente fraturado.',
        diagnostico: 'Necessidade de extração.',
        prescricao: 'Anestesia local + extração realizada.',
        status: 'Finalizada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        agendamentoId: 17,
        pacienteId: 3,
        profissionalId: 5,
        dataHora: new Date('2025-05-06T12:05:00'),
        anamnese: 'Consulta de urgência.',
        diagnostico: 'Gengivite com dor aguda.',
        prescricao: 'Antibiótico e anti-inflamatório por 5 dias.',
        status: 'Finalizada',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Consultas', null, {});
  }
};
