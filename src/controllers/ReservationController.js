const Reservation = require('../models/Reservation');
const Patient = require('../models/Patient');
const Room = require('../models/Room');

module.exports = {
  async index(req, res) {
    const reservas = await Reservation.findAll();

    return res.json(reservas);
  },

  async store(req, res) {
    const { Cod_Paciente, Cod_Quarto } = req.body;

    const paciente = await Patient.findByPk(Cod_Paciente);

    if(!paciente) {
      return res.status(404).json({ error: "Paciente não encontrado!"});
    }

    const quarto = await Room.findByPk(Cod_Quarto);
    console.log(quarto);

    if(!quarto) {
      return res.status(404).json({ error: "Quarto não encontrado!"});
    }

    if(quarto.Em_Uso){
      return res.status(409).json({ error: "Quarto já está sendo utilizado!"});
    }


    const reserva = await Reservation.create({
      Cod_Paciente,
      Cod_Quarto,
    });


    return res.json(reserva);
  }
};