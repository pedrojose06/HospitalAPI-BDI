const Hospitalization = require('../models/Hospitalization');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const Room = require('../models/Room');


module.exports = {
  async index(req, res) {
    const internacoes = await Hospitalization.findAll();

    return res.json(internacoes);
  },

  async findhospitalization(req, res){
    const { Cod_Internacao } = req.params;

    const internacao = await Hospitalization.findAll({ where: { Cod_Internacao }});

    if(!internacao || internacao.length==0) {
      return res.status(404).json({ error: "Internação não encontrada!"});
    }

    return res.json(internacao);
  },

  async store(req, res) {
    const { Cod_Paciente, Cod_Medico, Cod_Quarto, Data_Internacao, Data_Alta } = req.body;
    
    const paciente = await Patient.findByPk(Cod_Paciente);

    if(!paciente) {
      return res.status(404).json({ error: "Paciente não encontrado!"});
    }

    const medico = await Doctor.findByPk(Cod_Medico);

    if(!medico) {
      return res.status(404).json({ error: "Médico não encontrado!"});
    }

    const quarto = await Room.findByPk(Cod_Quarto);

    if(!quarto) {
      return res.status(404).json({ error: "Quarto não encontrado!"});
    }

    const internacao = await Hospitalization.create({
      Cod_Paciente,
      Cod_Medico,
      Cod_Quarto,
      Data_Internacao,
      Data_Alta,
    });

    return res.json(internacao);
  }
};