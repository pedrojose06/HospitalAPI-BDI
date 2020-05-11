const Sector = require('../models/Sector');
const Employee = require('../models/Employee');

module.exports = {
  async index(req, res) {
    const funcionarios = await Employee.findAll({
      include: { association: 'Medico' }
    });

    return res.json(funcionarios);
  },

  async findemployee(req, res){
    const { Cod_Funcionario } = req.params;

    const funcionario = await Employee.findAll({ where: { Cod_Funcionario }});

    if(!funcionario || funcionario.length==0) {
      return res.status(404).json({ error: "Funcionario não encontrado!"});
    }

    return res.json(funcionario);
  },

  async store(req, res) {
    const { Nome, Data_Admissao, Cod_Setor } = req.body;

    const setor = await Sector.findByPk(Cod_Setor);

    if(!setor) {
      return res.status(404).json({ error: "Setor não encontrado!"});
    }

    const funcionario = await Employee.create({
      Nome,
      Data_Admissao,
      Cod_Setor,
    });

    return res.json(funcionario);
  }
};