const Insurance = require('../models/Insurance');

module.exports = {
  async index(req, res) {
    const convenios = await Insurance.findAll();

    return res.json(convenios);
  },

  async store(req, res) {
    const { Nome_Convenio } = req.body;

    const convenio = await Insurance.create({
      Nome_Convenio,
    });

    return res.json(convenio);
  }
};