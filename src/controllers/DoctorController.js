const Doctor = require('../models/Doctor');
const Employee = require('../models/Employee');

module.exports = {
  async index(req, res) {

    const medicos = await Doctor.findAll({});

    if(!medicos || medicos.length==0){
      return res.status(404).json({ error: "Nenhum médico encontrado!"});
    }

    return res.json(medicos);
  },

  async store(req, res) {
    const { Cod_Funcionario } = req.params;
    const { CRM, Especialidade } = req.body;

    const funcionario = await Employee.findByPk(Cod_Funcionario);

    if(!funcionario) {
      return res.status(404).json({ error: "Funcionario não encontrado!"});
    }

    const medico = await Doctor.create({
      CRM,
      Especialidade,
      Cod_Funcionario,
    });

    return res.json(medico);
  }
};