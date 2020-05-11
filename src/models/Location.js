const { Model, DataTypes } = require('sequelize');

class Location extends Model {
  static init(sequelize) {
    super.init({
      Cod_Localizacao: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      Cod_Quarto: DataTypes.INTEGER,
      Cod_Equipamento: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
  //  this.belongsTo(models.Room, { foreignKey: 'Cod_Quarto', targetKey: 'Cod_Quarto', as: 'Localizacao' });
  //  this.belongsTo(models.Equip, { foreignKey: 'Cod_Equipamento', targetKey: 'Cod_Equipamento', as: 'Equipamento' });
  }
}

module.exports = Location;