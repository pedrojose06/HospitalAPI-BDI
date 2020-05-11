const { Model, DataTypes } = require('sequelize');

class Equip extends Model {
  static init(sequelize) {
    super.init({
      Cod_Equipamento: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      Nome_Equipamento: DataTypes.STRING,
      Descricao: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
  //  this.belongsTo(models.Location, { uniqueKey: 'Cod_Localizacao'});
  }
}

module.exports = Equip;