const Location = require('../models/Location');

module.exports = {
  async index(req, res) {
    const localizacoes = await Location.findAll({
      include: { association: 'Equipamentos' }});

    return res.json(localizacoes);
  },

  async store(req, res) {
    const { Cod_Quarto, Cod_Equipamento } = req.body;

    const localizacao = await Location.create({
      Cod_Quarto,
      Cod_Equipamento
    });

    return res.json(localizacao);
  }
};