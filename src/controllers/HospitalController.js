const Hospital = require('../models/Hospital');

module.exports = {
  async index(req, res) {
    const hospitais = await Hospital.findAll();

    return res.json(hospitais);
  },

  async store(req, res) {
    const { Nome, Endereco } = req.body;

    const hospital = await Hospital.create({
      Nome,
      Endereco,
    });

    return res.json(hospital);
  }
};