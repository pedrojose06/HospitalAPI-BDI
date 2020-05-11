const Sector = require('../models/Sector');
const Hospital = require('../models/Hospital');

module.exports = {
  async index(req, res) {
    const { Cod_Hospital } = req.params;

    const setores = await Hospital.findByPk(Cod_Hospital, {
      include: { association: 'Setores' }
    });
    if(!setores){
      return res.status(404).json({ error: "Hospital não encontrado!"});
    }
    //const setores = await Sector.findAll({ where: { Cod_Hospital }});

    return res.json(setores);
  },

  async store(req, res) {
    const { Cod_Hospital } = req.params;
    const { Nome_Setor } = req.body;

    const hospital = await Hospital.findByPk(Cod_Hospital);

    if(!hospital) {
      return res.status(404).json({ error: "Hospital não encontrado!"});
    }

    const sector = await Sector.create({
      Nome_Setor,
      Cod_Hospital,
    });

    return res.json(sector);
  }
};