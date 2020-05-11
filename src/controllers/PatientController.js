const Insurance = require('../models/Insurance');
const Patient = require('../models/Patient');

module.exports = {
  async index(req, res) {
    const pacientes = await Patient.findAll();

    return res.json(pacientes);
  },

  async findpatient(req, res){
    const { Cod_Paciente } = req.params;

    const paciente = await Patient.findAll({ where: { Cod_Paciente }});

    if(!paciente || paciente.length==0) {
      return res.status(404).json({ error: "Paciente não encontrado!"});
    }

    return res.json(paciente);
  },

  async store(req, res) {
    const { CPF, Nome, Cod_Convenio } = req.body;

    const convenio = await Insurance.findByPk(Cod_Convenio);

    if(!convenio) {
      return res.status(404).json({ error: "Convenio não encontrado!"});
    }

    const paciente = await Patient.create({
      Nome,
      CPF,
      Cod_Convenio
    });

    return res.json(paciente);
  }
};