const Equip = require('../models/Equip');
const Room = require('../models/Room');

module.exports = {
  async index(req, res) {
    const equipamentos = await Equip.findAll();

    return res.json(equipamentos);
  },

  async store(req, res) {
    const { Nome_Equipamento, Descricao } = req.body;

    const equipamento = await Equip.create({
      Nome_Equipamento,
      Descricao
    });

    return res.json(equipamento);
  }
};