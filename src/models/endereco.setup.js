// models/endereco.setup.js
module.exports = (Endereco, { Paciente, Profissional }) => {
    Endereco.prototype.getDono = async function () {
        if (this.contato_tipo === "paciente") {
            return await Paciente.findByPk(this.contato_id);
        } else if (this.contato_tipo === "profissional") {
            return await Profissional.findByPk(this.contato_id);
        }
        return null;
    };
};
