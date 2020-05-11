const Room = require('../models/Room');
const Sector = require('../models/Sector');
const Equip = require('../models/Equip');

module.exports = {
  async index(req, res) {
    const quartos = await Room.findAll({
      include: [
        {
          model: Equip,
          through: { attributes: []},
      }]
    });

    if(quartos.length == 0){
      res.json( 'Nenhum quarto encontrado' );
    }

    return res.json(quartos);
  },

  async findbysector(req, res){
    const { Cod_Setor } = req.params;

    const quartos = await Sector.findByPk(Cod_Setor, {
      include: { association: 'SetorQuarto' }
    });
    if(!quartos || quartos.length==0) {
      return res.status(404).json({ error: "Quarto não encontrado!"});
    }

    return res.json(quartos);
  },


  async store(req, res) {
    const { Nome_Quarto, Cod_Setor } = req.body;

    const setor = await Sector.findByPk(Cod_Setor);

    if(!setor) {
      return res.status(404).json({ error: "Setor não encontrado!"});
    }

    const quarto = await Room.create({
      Nome_Quarto,
      Cod_Setor,
    });

    return res.json(quarto);
  }
};