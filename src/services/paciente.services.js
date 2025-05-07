const Paciente = require("../models/paciente.model");
const Endereco = require("../models/endereco.model");
const Documento = require("../models/documento.model");
const Profissional = require("../models/profissional.model");
const Usuario = require("../models/usuario.model");

const { resolvePolymorphicRelation } = require("../helpers/polymorphicHelper");

async function getPacienteDetalhado(id) {
  const paciente = await Paciente.findByPk(id, { raw: true },{ include: ["usuario"] });
  if (!paciente) return null;

  // Busca os endereços e documentos do paciente (polimórficos)
  const [enderecos, documentos, usuario] = await Promise.all([
    Endereco.findAll({ where: { contato_id: id, contato_tipo: "paciente" }, raw: true }),
    Documento.findAll({ where: { contato_id: id, contato_tipo: "paciente" }, raw: true }),
    Usuario.findAll({ where: { id: paciente.registeredBy }, raw: true }),
  ]);

  // Opcional: se quiser resolver donos dos documentos também
  const documentosComDono = await resolvePolymorphicRelation(
    documentos,
    {
      paciente: Paciente,
      profissional: Profissional,
    },
    {
      tipoCampo: 'entidade_tipo',
      idCampo: 'entidade_id',
      alias: 'referenteA',
    }
  );

  return {
    ...paciente,
    enderecos,
    documentos: documentosComDono,
    usuario,
  };
}

module.exports = {getPacienteDetalhado,};
