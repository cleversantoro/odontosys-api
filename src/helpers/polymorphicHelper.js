// helpers/polymorphicHelper.js
async function resolvePolymorphicRelation(registros, modelos, options = {}) {
    const tipoCampo = options.tipoCampo || 'contato_tipo';
    const idCampo = options.idCampo || 'contato_id';
    const alias = options.alias || 'dono';
  
    const agrupados = {};
    for (const registro of registros) {
      const tipo = registro[tipoCampo];
      const id = registro[idCampo];
      if (!agrupados[tipo]) agrupados[tipo] = [];
      agrupados[tipo].push(id);
    }
  
    const resultados = {};
    for (const tipo in agrupados) {
      const ids = [...new Set(agrupados[tipo])];
      const modelo = modelos[tipo];
      if (modelo) {
        const encontrados = await modelo.findAll({
          where: { id: ids },
          raw: true,
        });
        resultados[tipo] = encontrados.reduce((acc, item) => {
          acc[item.id] = item;
          return acc;
        }, {});
      }
    }
  
    return registros.map(registro => {
      const tipo = registro[tipoCampo];
      const id = registro[idCampo];
      const dono = resultados[tipo]?.[id] || null;
      return {
        ...registro,
        [alias]: dono,
      };
    });
  }
  
  module.exports = { resolvePolymorphicRelation };
  